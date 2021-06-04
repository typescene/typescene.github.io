"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageGenerator = void 0;
const DeclarationFileParser_1 = require("./DeclarationFileParser");
/** Helper function to turn an ID into a 'hash' ref */
function navId(id) {
    return "#" + id.replace(/[\.\@\[\]]/g, ":");
}
/** Page generator that takes parsed data and outputs a string */
class PageGenerator {
    constructor(doc, parser, misc, template, baseUrl) {
        this.doc = doc;
        /** Page data, to be used by template */
        this.data = {};
        this._baseUrl = "/";
        this._parser = parser;
        this._misc = misc;
        this._top = misc.getContentFor(this.doc.id + ":top");
        if (baseUrl)
            this._baseUrl = baseUrl;
        this.data.template = template;
        this.data.title = this.doc.id;
        this.data.reftype = this.doc.type;
        if (doc.id.startsWith("@") &&
            !parser.isDefined(doc.id.replace(/^\@\w/, (c) => c[1].toUpperCase()))) {
            this.data.alias = doc.id.slice(1);
        }
    }
    /** Generate the page's markdown file as an array of strings; also populates the data object */
    generate() {
        let content = [];
        // add 'top' content above all other content
        if (this._top)
            content.push(this._addIdLinks(this._top), "");
        // piece all content together
        for (let i = 0; i < this.doc.content.length; i++) {
            let c = this.doc.content[i];
            // skip non-root namespace node
            if (c.id === this.doc.id + "." && i > 0)
                continue;
            // add horizontal line above all namespaced nodes
            if (c.spec.namespaced)
                content.push("---", "");
            // add heading with icon and tag(s)
            let icon = "/assets/icons/spec-" + c.spec.type + ".svg";
            let tags = "";
            if (c.spec.abstractModifier)
                tags += ` <span class="spec_tag">abstract</span>`;
            if (c.spec.staticModifier)
                tags += ` <span class="spec_tag">static</span>`;
            if (c.spec.protectedModifier)
                tags += ` <span class="spec_tag">protected</span>`;
            if (c.spec.deprecated)
                tags += ` <span class="spec_tag spec_tag--deprecated">deprecated</span>`;
            let name = this._getTypedName(c.spec).replace(/_/g, "\\_");
            content.push(`## ![](${icon})${name}${tags} {.spec ${navId(c.id)}}`, "");
            // add declaration spec and further documentation
            content.push(...(c.spec.spec && c.spec.type !== DeclarationFileParser_1.SpecNodeType.ClassDeclaration
                ? [
                    "",
                    c.spec.spec
                        .split("\n")
                        .map((s) => this._addIdLinks("`" + s + "`"))
                        .join("<br>"),
                    "",
                ]
                : c.spec.inherit
                    ? [
                        "",
                        c.spec.inherit
                            .map((s) => this._addIdLinks("`" + s + "`"))
                            .join("<code> </code>"),
                        "",
                    ]
                    : []));
            let params = [];
            let notes = [];
            for (let d of c.docs) {
                let txt = this._addIdLinks(d.doc).replace(/\n(?!\n)/g, "\n\n") + "\n\n";
                switch (d.tag) {
                    case "param":
                        params.push(`- \`${d.name}\` — ${txt}`);
                        break;
                    case "return":
                        notes.push(`**Returns:** ${txt}`, "");
                        break;
                    case "note":
                        notes.push(`**Note:** ${txt}`, "");
                        break;
                    case "deprecated":
                        notes.push(`**Deprecated:** ${txt}`, "");
                        break;
                    default:
                        notes.push(txt, "");
                }
            }
            content.push(...params, "", ...notes);
            // add miscellaneous content
            let misc = this._misc.getContentFor(c.id);
            if (misc) {
                content.push(this._addIdLinks(misc), "");
            }
            if (c.spec.spec && c.spec.type === DeclarationFileParser_1.SpecNodeType.ClassDeclaration) {
                content.push("### Constructor", "", this._addIdLinks("`" + c.spec.spec + "`"), "");
            }
        }
        // add nav and pageintro properties
        this._addNav();
        this._addPageIntro();
        // return markdown content itself
        return content;
    }
    /** Returns an enhanced version of the name from given spec node that represents its type */
    _getTypedName(spec) {
        if (spec.namespaced)
            return spec.id;
        if (spec.name[0] === "[")
            return spec.name;
        switch (spec.type) {
            case DeclarationFileParser_1.SpecNodeType.TypeOrEnum:
                return "type " + spec.name;
            case DeclarationFileParser_1.SpecNodeType.FunctionDeclaration:
                return spec.name + "()";
            case DeclarationFileParser_1.SpecNodeType.DecoratorFunction:
                return "@" + spec.name;
            case DeclarationFileParser_1.SpecNodeType.ClassDeclaration:
                return "class " + spec.name;
            case DeclarationFileParser_1.SpecNodeType.InterfaceDeclaration:
                return "interface " + spec.name;
            case DeclarationFileParser_1.SpecNodeType.MethodDeclaration:
                return "." + spec.name + "()";
            case DeclarationFileParser_1.SpecNodeType.PropertyDeclaration:
                return "." + spec.name;
            case DeclarationFileParser_1.SpecNodeType.Namespace:
                return "namespace " + spec.name;
            default:
                return spec.name;
        }
    }
    /** Set the `nav` data property to markdown content for the navigation list for this page */
    _addNav() {
        // add nav for any anchored headings at the top of the page
        let nav = [];
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
        for (let c of this.doc.content) {
            // skip non-root namespace nodes
            if (c.id === this.doc.id + "." && declHeader)
                continue;
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
            if (c.spec.type === DeclarationFileParser_1.SpecNodeType.ClassDeclaration ||
                c.spec.type === DeclarationFileParser_1.SpecNodeType.InterfaceDeclaration ||
                c.spec.type === DeclarationFileParser_1.SpecNodeType.Namespace)
                name = "**" + name + "**";
            nav.push(`  * [${name}](${navId(c.id)})`);
        }
        this.data.nav = nav.join("\n");
    }
    /** Applies pageintro section from miscellaneous content, if any */
    _addPageIntro() {
        let intro = this._misc.getContentFor(this.doc.id + ":pageintro");
        if (intro) {
            this.data.pageintro = intro
                .replace(/([\n\r]+)/g, "$1  ")
                .replace(/\`([\w\.\@\(\)]+)\`/g, "<code>$1</code>");
        }
    }
    /** Turn IDs in given string into markdown links */
    _addIdLinks(str) {
        return str.replace(/`[^`\n]+`/g, (code) => code
            .replace(
        // v-- symbols or start,    v-- keywords                          v-- token   v-- brackets
        /((?:(?:[\:|>,]\s+)|\<|`)(?:extends\s+|implements\s+|typeof\s+)?)([\@\w\.]+(?:\(\))?)(\s+)?/g, (s, impl, token, spaces) => {
            let t = token.replace(/^[\@\.]/, "").replace(/\(\)$/, "");
            spaces = spaces ? "<code>" + spaces + "</code>" : "";
            if (t !== this.doc.id) {
                token = token.replace(/_/g, "\\_");
                if (this._parser.isDefined(t)) {
                    let url = this._baseUrl +
                        (token.startsWith("@") ? "_" : "") +
                        t.replace(/\..*/, "");
                    if (t.indexOf(".") > 0)
                        url += navId(t);
                    return `${impl || ""}\`[\`${token}\`](${url})${spaces}\``;
                }
                else if (this._parser.isDefined(this.doc.id + "." + t)) {
                    return `${impl || ""}\`[\`${token}\`](${navId(this.doc.id + "." + t)})${spaces}\``;
                }
                else if (s.length === code.length + 2) {
                    (this.data.warnings || (this.data.warnings = [])).push(`NOT DEFINED ${t} (${this.doc.id})`);
                }
            }
            return s;
        })
            .replace(/^``/, "")
            .replace(/``$/, ""));
    }
}
exports.PageGenerator = PageGenerator;
