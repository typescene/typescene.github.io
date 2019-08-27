import { DeclarationFileParser, DocPage, SpecNode, SpecNodeType } from "./DeclarationFileParser";
import { MiscContent } from "./MiscContent";

/** Helper function to turn an ID into a 'hash' ref */
function navId(id: string) {
    return "#" + id.replace(/[\.\@\[\]]/g, ":");
}

/** Page generator that takes parsed data and outputs a string */
export class PageGenerator {
    constructor(public readonly data: DocPage,
        parser: DeclarationFileParser, misc: MiscContent,
        layout?: string, baseUrl?: string) {
        this._parser = parser;
        this._misc = misc;
        this._top = misc.getContentFor(this.data.id + ":top");
        if (layout) this._layout = layout;
        if (baseUrl) this._baseUrl = baseUrl;
    }

    /** Generate the page's markdown file as a string */
    toString() {
        // piece all content together
        let content = this.data.content.map((c, i) => {
            // skip non-root namespace node
            if (c.id === this.data.id + "." && i > 0) return;

            // add horizontal line above all namespaced nodes
            let result = "";
            if (c.spec.namespaced) result = "---\n\n";

            // add heading with icon and tag(s)
            let icon = "/assets/icons/spec-" + c.spec.type + ".svg";
            let tags = "";
            if (c.spec.abstractModifier) tags += ` <span class="spec_tag">abstract</span>`;
            if (c.spec.staticModifier) tags += ` <span class="spec_tag">static</span>`;
            if (c.spec.protectedModifier) tags += ` <span class="spec_tag">protected</span>`;
            let name = this._getTypedName(c.spec).replace(/_/g, "\\_");
            result += `## ![](${icon})${name}${tags} {${navId(c.id)}}\n{:.spec}\n\n`;

            // add declaration spec and further documentation
            if (c.spec.spec && c.spec.type !== SpecNodeType.ClassDeclaration) {
                result += "```typescript\n" + c.spec.spec + "\n```\n{:.declarationspec}\n";
            }
            else if (c.spec.inherit) {
                result += "\n<pre markdown=\"span\">" +
                    "<code markdown=\"span\">" +
                    this._addIdLinks(c.spec.inherit.map(s => "`" + s + "`").join(" ")) +
                    "</code></pre>\n{:.declarationspec}\n\n";
            }
            let doc = "";
            for (let d of c.docs) {
                let txt = this._addIdLinks(d.doc).replace(/\n(?!\n)/g, "\n\n") + "\n\n";
                txt = txt.replace(/(\{\%\S+\})/g, "{%raw%}$1{%endraw%}")
                switch (d.tag) {
                    case "param":
                        result += `- \`${d.name}\` — ${txt}`; break;
                    case "return":
                        result += `**Returns:** ${txt}`; break;
                    case "note":
                        doc += `**Note:** ${txt}`; break;
                    default:
                        result += txt;
                }
            }

            // add miscellaneous content
            let misc = this._misc.getContentFor(c.id);
            if (misc) {
                misc = misc.replace(/(\{\%\S+\})/g, "{%raw%}$1{%endraw%}")
                doc += this._addIdLinks(misc) + "\n\n";
            }
            if (c.spec.spec && c.spec.type === SpecNodeType.ClassDeclaration) {
                doc += "### Constructor\n" +
                    "```typescript\n" + c.spec.spec + "\n```\n{:.declarationspec}\n\n";
            }
            return result + doc;
        });

        // add 'top' content above all other content
        if (this._top) content.unshift(this._addIdLinks(this._top));

        // return front matter and markdown code as a string
        return "---\n" +
            this._getFrontMatter().join("\n") + "\n---\n\n" +
            content.join("\n\n");
    }

    /** Returns an enhanced version of the name from given spec node that represents its type */
    private _getTypedName(spec: SpecNode) {
        if (spec.namespaced) return spec.id;
        if (spec.name[0] === "[") return spec.name;
        switch (spec.type) {
            case SpecNodeType.TypeOrEnum: return "type " + spec.name;
            case SpecNodeType.FunctionDeclaration: return spec.name + "()";
            case SpecNodeType.DecoratorFunction: return "@" + spec.name;
            case SpecNodeType.ClassDeclaration: return "class " + spec.name;
            case SpecNodeType.InterfaceDeclaration: return "interface " + spec.name;
            case SpecNodeType.MethodDeclaration: return "." + spec.name + "()";
            case SpecNodeType.PropertyDeclaration: return "." + spec.name;
            case SpecNodeType.Namespace: return "namespace " + spec.name;
            default: return spec.name;
        }
    }

    /** Returns a list of strings that should be included as front matter for this page */
    private _getFrontMatter() {
        let nav: string[] = [];

        // add nav for any anchored headings at the top of the page
        let topLinks = this._top.match(/#[^{}\#\r\n]+\s+\{#[^\}]+}$/m);
        if (topLinks) {
            nav.push("\n  #### About");
            for (let ref of topLinks) {
                let [name, link] = ref.split("{#");
                name = name.replace(/^#+/, "").trim();
                link = link.slice(0, -1);
                nav.push(`  * [${name}](#${link})`);
            }
        }

        // add nav for all other entries
        let declHeader = false, inheritHeader = false, nsHeader = false;
        for (let c of this.data.content) {
            // skip non-root namespace nodes
            if (c.id === this.data.id + "." && declHeader) continue;

            // add subheadings
            if (!inheritHeader && c.spec.inherited) {
                nav.push("\n  #### Inherited");
                inheritHeader = true;
            }
            else if (!declHeader && !c.spec.namespaced) {
                nav.push("\n  #### Declarations");
                declHeader = true;
            }
            else if (!nsHeader && c.spec.namespaced) {
                nav.push("\n  #### Namespaced");
                nsHeader = true;
            }

            // add nav entry for this node
            let name = this._getTypedName(c.spec).replace(/_/g, "\\_");
            if (c.spec.type === SpecNodeType.ClassDeclaration ||
                c.spec.type === SpecNodeType.InterfaceDeclaration ||
                c.spec.type === SpecNodeType.Namespace)
                name = "**" + name + "**";
            nav.push(`  * [${name}](${navId(c.id)})`);
        }
        let hdr: any = {};
        hdr.title = this.data.id;
        hdr.nav = "|\n" + nav.join("\n");
        if (this._layout) hdr.layout = this._layout;

        // add page intro, if any
        let intro = this._misc.getContentFor(this.data.id + ":pageintro");
        if (intro) {
            hdr.pageintro = "|\n  " + intro
                .replace(/([\n\r]+)/g, "$1  ")
                .replace(/\`([\w\.\@\(\)]+)\`/g, "<code>$1</code>");
        }
        return Object.keys(hdr).map(k => `${k}: ${hdr[k]}`);
    }

    /** Turn IDs in given string into markdown links */
    private _addIdLinks(str: string) {
        return str.replace(/\`(extends\s+|implements\s+)?([\@\w\.]+[\(\)]*)\`/g, (s, impl, token) => {
            let t = token.replace(/^[\@\.]/, "").replace(/\(\)$/, "");
            if (t !== this.data.id) {
                token = token.replace(/_/g, "\\_");
                if (this._parser.isDefined(t)) {
                    let url = this._baseUrl + t.replace(/\..*/, "");
                    if (t.indexOf(".") > 0) url += navId(t);
                    return `${impl || ""}[\`${token}\`](${url})`;
                }
                else if (this._parser.isDefined(this.data.id + "." + t)) {
                    return `${impl || ""}[\`${token}\`](${navId(this.data.id + "." + t)})`;
                }
                else {
                    console.log(`WARNING: NOT DEFINED ${t} (${this.data.id})`);
                }
            }
            return s;
        });
    }

    private _parser: DeclarationFileParser;
    private _misc: MiscContent;
    private _top: string;
    private _layout = "";
    private _baseUrl = "/";
}
