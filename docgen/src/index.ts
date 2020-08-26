import { existsSync, mkdirSync, readdirSync, readFileSync, rmdirSync, statSync, unlinkSync, writeFileSync } from "fs";
import * as path from "path";
import { DeclarationFileParser } from "./DeclarationFileParser";
import { MiscContent } from "./MiscContent";
import { PageGenerator } from "./PageGenerator";

const CONFIG_PATH = path.join(__dirname, "../config.json");

/** Source configuration in `config.json` file */
interface ConfigSource {
    module: string;
    misc_path?: string;
    out: string;
    json_index?: string;
    json_content?: string;
    layout: string;
    base_url: string;
}

/** Ensure a directory exists at given path and empty it if needed */
function emptyDir(p: string) {
    if (existsSync(p)) {
        // remove all files/folders inside this directory
        let entries = readdirSync(p);
        for (let entry of entries) {
            let q = path.join(p, entry);
            let stat = statSync(q);
            if (stat.isDirectory()) {
                console.log("Emptying " + q + "...");
                emptyDir(q);
                rmdirSync(q);
            }
            else {
                unlinkSync(q);
            }
        }
    }
    else {
        // create directory within parent directory
        let parentPath = path.resolve(p, "..");
        if (!existsSync(parentPath)) emptyDir(parentPath);
        console.log("Creating " + p);
        mkdirSync(p);
    }
}

/** Helper function to compress search content using a very simple string-based algorithm */
function compressContent(content: string[]) {
    let words: string[] = [];
    let ref = Object.create(null);
    let str = content.join("+").replace(/\w+/g, word => {
        if (word in ref) {
            // if seen: move word to the front of the stack, insert old position
            let idx = ref[word];
            words.unshift(words.splice(idx, 1)[0]);
            for (let i = idx; i >= 0; i--) ref[words[i]] = i;
            return idx;
        }
        else {
            // add new word to the front of the stack, insert word itself
            words.unshift(word);
            for (let w in ref) ref[w]++;
            ref[word] = 0;
            return word;
        }
    });

    // replace most common patterns with single chars
    str = str.replace(/\|3\#0\:3\:3\+2\.2/g, "*")
        .replace(/\|2\#0\:2\+1/g, "?")
        .replace(/\|2\#0\:2\+/g, "!")
        .replace(/\|1\+/g, "=");

    return str;

    // Decompression algorithm is the reverse:
    // let inflate = (str: string) => {
    //     let w2: string[] = [];
    //     return str
    //         .replace(/\=/g, "|1+")
    //         .replace(/\!/g, "|2#0:2+")
    //         .replace(/\?/g, "|2#0:2+1")
    //         .replace(/\*/g, "|3#0:3:3+2.2")
    //         .replace(/(\d+)|\w+/g, (w, n) => {
    //             if (n) w = w2.splice(n, 1)[0];
    //             w2.unshift(w);
    //             return w;
    //         });
    // }
    // console.log(inflate(str).split("+").join("\n"));
}

/**
 * Loop through all sources and create documentation pages on disk
 * (was originally designed to include multiple Typescene sub packages but that became confusing, might do that again later if necessary)
 */
function main({ sources }: { sources: ConfigSource[] }) {
    for (let source of sources) {
        let packagePath = path.join(__dirname, "../node_modules", source.module);
        let packageJSON = readFileSync(path.join(packagePath, "package.json")).toString();
        let packageInfo: any = JSON.parse(packageJSON);

        // read declaration files and parse their types/JSDoc
        console.log("Reading ", path.join(packagePath, packageInfo.typings));
        let parser = new DeclarationFileParser(path.join(packagePath, packageInfo.typings));
        let index = parser.getPageData();
        emptyDir(source.out);

        // generate a plain list of IDs, types, and links
        if (source.json_content) {
            let content: string[] = [];
            for (let node of index) {
                for (let c of node.content) {
                    if (c.id.endsWith(".") || c.spec.inherited) continue;
                    let path = node.id + (c.id.indexOf(".") < 0 ? "" :
                        "#" + c.id.replace(/[\.\@\[\]]/g, ":"));
                    content.push(c.id + "|" + c.spec.type + "|" + path);
                }
            }
            content.sort((a, b) => a === b ? 0 : a > b ? 1 : -1);

            // write the symbols list as a JSON file
            writeFileSync(path.join(__dirname, "..", source.json_content),
                JSON.stringify({
                    version: packageInfo.version,
                    content: compressContent(content)
                }));
        }

        // write the index used by Jekyll pages (reference index)
        if (source.json_index) {
            writeFileSync(path.join(__dirname, "..", source.json_index),
                JSON.stringify({
                    version: packageInfo.version,
                    index: index.map(d =>
                        ({ id: d.id, type: d.type }))
                }));
        }

        // parse miscellaneous content and generate all content pages
        let misc = new MiscContent();
        if (source.misc_path) misc.readDir(path.join(__dirname, "..", source.misc_path));
        for (let page of index) {
            let pg = new PageGenerator(page, parser, misc, source.layout, source.base_url);
            writeFileSync(path.join(__dirname, "..", source.out, page.id + ".md"), pg.toString());
        }
    }
}

main(JSON.parse(String(readFileSync(CONFIG_PATH))));
