"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclarationFileParser = exports.SpecNode = exports.SpecNodeType = void 0;
const path = require("path");
const ts = require("typescript");
const DEBUG = false;
if (DEBUG)
    console.log(ts.SyntaxKind);
/** Enumeration of declaration index node types */
var SpecNodeType;
(function (SpecNodeType) {
    SpecNodeType["TypeOrEnum"] = "type";
    SpecNodeType["FunctionDeclaration"] = "function";
    SpecNodeType["DecoratorFunction"] = "decorator";
    SpecNodeType["ClassDeclaration"] = "class";
    SpecNodeType["InterfaceDeclaration"] = "interface";
    SpecNodeType["MethodDeclaration"] = "method";
    SpecNodeType["PropertyDeclaration"] = "property";
    SpecNodeType["VariableDeclaration"] = "const";
    SpecNodeType["Namespace"] = "namespace";
})(SpecNodeType = exports.SpecNodeType || (exports.SpecNodeType = {}));
function displayPartsToString(parts) {
    let texts = parts.map((p) => p.text.trim()).filter((s) => !!s);
    if (!texts.length)
        return "";
    if (texts.length < 2)
        return texts[0];
    return texts.map((s, i) => `**[${i + 1}]** ${s}`).join("\n\n");
}
function signaturesToString(sig, checker) {
    let texts = sig.map((x) => checker.signatureToString(x).trim());
    if (!texts.length)
        return "";
    if (texts.length < 2)
        return texts[0];
    return texts.map((s, i) => `[${i + 1}]. ${s}`).join("\n");
}
/** Encapsulates a declaration index node and its meta data */
class SpecNode {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}
exports.SpecNode = SpecNode;
/** Class that parses a set of declaration files using the Typescript compiler */
class DeclarationFileParser {
    constructor(declFileName) {
        this._nodes = {};
        this._docs = {};
        this._absPath = path.dirname(declFileName);
        this.program = ts.createProgram([declFileName], {});
        this.checker = this.program.getTypeChecker();
    }
    /** Generate all documentation pages for this set of files */
    getPageData() {
        // go through all source files to get a list of root nodes
        let index = flatten(this.program.getSourceFiles().map((file) => {
            if (file.isDeclarationFile && file.fileName.includes(this._absPath)) {
                return file.getChildren().map((node) => this._recurse("", node));
            }
        }));
        // create pages for all top level nodes, and add content
        let pages = {};
        let result = [];
        let addPage = (topId, spec) => {
            if (spec.id === topId && this._nodes[topId] !== spec)
                return;
            if (!pages[topId]) {
                let newPage = {
                    id: topId,
                    type: spec.type,
                    content: [],
                };
                pages[topId] = newPage;
                result.push(newPage);
            }
            // follow inheritance, add base node references
            let id = spec.id;
            spec.inherit &&
                spec.inherit.forEach((c) => {
                    this._inheritDocRefs(id, c);
                });
            // add content to its parent page
            if (!this._docs[id] || !this._docs[id].length) {
                console.log("WARNING: Skipping, no documentation for ", id);
                return;
            }
            let docs = this._docs[id] || [];
            let nodes = spec.nodes;
            spec = Object.assign({}, spec);
            delete spec.nodes;
            pages[topId].content.push({ id, spec, docs });
            // add subnodes to same topic
            nodes && nodes.forEach((c) => addPage(topId, c));
        };
        index.forEach((c) => addPage(c.id.replace(/\.$/, ""), c));
        // sort pages alphabetically and return the result
        result.sort((a, b) => {
            let aId = a.id.toLowerCase();
            let bId = b.id.toLowerCase();
            return aId > bId ? 1 : -1;
        });
        return result;
    }
    /** Returns true if given ID is defined */
    isDefined(id) {
        return !!this._nodes[id];
    }
    /** Add base node references to given ID for given inheritance clause */
    _inheritDocRefs(id, clause) {
        let baseId = clause
            .replace(/^(extends|implements)\s*/, "")
            .replace(/\<.*/, "");
        let inheritor = this._nodes[id];
        let base = this._nodes[baseId];
        if (!this._docs[id] ||
            !inheritor ||
            !inheritor.nodes ||
            !base ||
            !base.nodes)
            return;
        for (let c of base.nodes) {
            // only inherit non-static members with proper IDs
            if (/\W/.test(c.name) || c.staticModifier)
                continue;
            // skip nodes that are already inherited (find actual base node later)
            if (c.inherited)
                continue;
            // put together inherited ID and add doc if needed
            let inheritId = id + "." + c.name;
            if (this._docs[inheritId])
                continue;
            inheritor.nodes.push(Object.assign(Object.assign({}, c), { id: inheritId, inherited: true }));
            this._docs[inheritId] = [
                {
                    doc: "Inherited from `" + c.id + "`.",
                    tag: "inherit",
                },
            ];
        }
        // also add references to base of base node
        base.inherit &&
            base.inherit.forEach((c) => {
                this._inheritDocRefs(id, c);
            });
    }
    /** Add documentation markdown text/tags for given spec node; also changes type if given tag is a `@decorator` tag */
    _addDocumentation(spec, doc) {
        let id = spec.id;
        if (!this._docs[id])
            this._docs[id] = [];
        if (typeof doc === "string") {
            // add markdown text directly as doc section
            doc = doc.replace(/([^\.])[;\s]*$/, "$1.");
            if (doc && !this._docs[id].some((d) => d.doc === doc)) {
                this._docs[id].push({ doc });
            }
        }
        else if (doc && doc.tagName) {
            // add return/note/param tags only
            let comment = (doc.comment || "").replace(/([^\.])[;\s]*$/, "$1.");
            let result = { doc: comment };
            switch (doc.tagName.text) {
                case "return":
                case "returns":
                    result.tag = "return";
                    break;
                case "note":
                    result.tag = "note";
                    break;
                case "param":
                    result.tag = "param";
                    result.name = doc.name ? doc.name.text : "(?)";
                    break;
                case "decorator":
                    spec.type = SpecNodeType.DecoratorFunction;
                default:
                    return;
            }
            if (!this._docs[id].some((d) => d.doc === result.doc && d.tag === result.tag)) {
                this._docs[id].push(result);
            }
        }
    }
    /** Produce a `SpecNode` for given type alias or enum declaration (with declaration source text as type) */
    _createTypeOrEnumSpecNode(id, node) {
        let symbol = node.name && this.checker.getSymbolAtLocation(node.name);
        if (!symbol)
            return;
        // check if node already exists
        let name = symbol.getName();
        id += (id ? "." : "") + name;
        if (this._nodes[id] && this._nodes[id].type === SpecNodeType.TypeOrEnum)
            return;
        // create a spec node and add JSDoc text
        let result = (this._nodes[id] = new SpecNode(id, name, SpecNodeType.TypeOrEnum));
        let docnode = symbol.getDocumentationComment(this.checker);
        this._addDocumentation(result, displayPartsToString(docnode));
        ts.getJSDocTags(node).forEach((tag) => this._addDocumentation(result, tag));
        result.spec = node.getText().replace(/^(export\s+|declare\s+)*/g, "");
        return result;
    }
    /** Produce a `SpecNode` for given function declaration */
    _createFunctionSpecNode(id, node) {
        let symbol = node.name && this.checker.getSymbolAtLocation(node.name);
        let typeSymbol = symbol &&
            this.checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
        if (!symbol || !typeSymbol)
            return;
        let docnode = symbol.getDocumentationComment(this.checker);
        let text = displayPartsToString(docnode);
        if (!text)
            return;
        // check if node already exists
        let name = symbol.getName();
        id += (id ? "." : "") + name;
        if (this._nodes[id] &&
            this._nodes[id].type === SpecNodeType.FunctionDeclaration)
            return;
        // create a spec node and add JSDoc text/tags
        let result = (this._nodes[id] = new SpecNode(id, name, SpecNodeType.FunctionDeclaration));
        this._addDocumentation(result, text);
        ts.getJSDocTags(node).forEach((tag) => this._addDocumentation(result, tag));
        result.spec = signaturesToString(typeSymbol.getCallSignatures(), this.checker);
        return result;
    }
    /** Produce a `SpecNode` for given namespace declaration */
    _createNamespaceSpecNode(id, node) {
        let symbol = node.name && this.checker.getSymbolAtLocation(node.name);
        if (!symbol)
            return;
        // check if node already exists (add a dot after namespace ID!)
        let name = symbol.getName();
        let classId = id + (id ? "." : "") + name;
        id = classId + ".";
        if (this._nodes[id])
            return;
        // create a spec node and add JSDoc text (if not also a class)
        let result = (this._nodes[id] = new SpecNode(id, name, SpecNodeType.Namespace));
        if (this._nodes[classId]) {
            this._addDocumentation(result, "Namespace that extends `" + classId + "` class.");
        }
        else {
            let docnode = symbol.getDocumentationComment(this.checker);
            this._addDocumentation(result, displayPartsToString(docnode));
            ts.getJSDocTags(node).forEach((tag) => this._addDocumentation(result, tag));
        }
        result.nodes = flatten(node.getChildren().map((node) => this._recurse(classId, node)));
        result.nodes.forEach((n) => {
            n.namespaced = true;
        });
        return result;
    }
    /** Produce a `SpecNode` for given class declaration */
    _createClassSpecNode(id, node) {
        let symbol = node.name && this.checker.getSymbolAtLocation(node.name);
        let typeSymbol = symbol &&
            this.checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
        if (!symbol || !typeSymbol)
            return;
        // check if node already exists
        let name = symbol.getName();
        id += (id ? "." : "") + name;
        if (this._nodes[id] &&
            this._nodes[id].type === SpecNodeType.ClassDeclaration)
            return;
        // create a spec node and add JSDoc text/tags
        let result = (this._nodes[id] = new SpecNode(id, name, SpecNodeType.ClassDeclaration));
        let docnode = symbol.getDocumentationComment(this.checker);
        this._addDocumentation(result, displayPartsToString(docnode));
        ts.getJSDocTags(node).forEach((tag) => this._addDocumentation(result, tag));
        result.abstractModifier = this._hasModifier(node, "abstract");
        result.inherit =
            node.heritageClauses && node.heritageClauses.map((cl) => cl.getText());
        // add constructor spec
        result.spec = signaturesToString(typeSymbol.getConstructSignatures(), this.checker);
        // add all members as nested documenation nodes
        result.nodes = flatten(node.members.map((node) => this._recurse(id, node)));
        return result;
    }
    /** Produce a `SpecNode` for given interface declaration */
    _createInterfaceSpecNode(id, node) {
        let symbol = node.name && this.checker.getSymbolAtLocation(node.name);
        if (!symbol)
            return;
        // create a spec node and add JSDoc text/tags
        let name = symbol.getName();
        id += (id ? "." : "") + name;
        let result = this._nodes[id] ||
            (this._nodes[id] = new SpecNode(id, name, SpecNodeType.InterfaceDeclaration));
        if (!this._docs[id]) {
            let docnode = symbol.getDocumentationComment(this.checker);
            this._addDocumentation(result, displayPartsToString(docnode));
            ts.getJSDocTags(node).forEach((tag) => this._addDocumentation(result, tag));
        }
        result.inherit =
            node.heritageClauses && node.heritageClauses.map((cl) => cl.getText());
        // add all members as nested documenation nodes
        result.nodes = flatten(node.getChildren().map((node) => this._recurse(id, node)));
        return result;
    }
    /** Produce a `SpecNode` for given method declaration */
    _createMethodSpecNode(id, node) {
        let symbol = node.name && this.checker.getSymbolAtLocation(node.name);
        let typeSymbol = symbol &&
            this.checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
        if (!symbol || !typeSymbol)
            return;
        // check if node already exists
        let name = symbol.getName();
        id += (id ? "." : "") + name;
        if (this._nodes[id] &&
            this._nodes[id].type === SpecNodeType.MethodDeclaration)
            return;
        // create a spec node and add JSDoc text/tags
        let result = (this._nodes[id] = new SpecNode(id, name, SpecNodeType.MethodDeclaration));
        let docnode = symbol.getDocumentationComment(this.checker);
        this._addDocumentation(result, displayPartsToString(docnode));
        ts.getJSDocTags(node).forEach((tag) => this._addDocumentation(result, tag));
        result.spec = signaturesToString(typeSymbol.getCallSignatures(), this.checker);
        result.protectedModifier = this._hasModifier(node, "protected");
        result.staticModifier = this._hasModifier(node, "static");
        result.abstractModifier = this._hasModifier(node, "abstract");
        return result;
    }
    /** Produce a `SpecNode` for given property declaration */
    _createPropertySpecNode(id, node) {
        let symbol = node.symbol ||
            this.checker.getSymbolAtLocation(node.name || node);
        let typeSymbol = symbol &&
            this.checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
        if (!symbol || !typeSymbol)
            return;
        if (this._hasModifier(node, "private"))
            return;
        let text = displayPartsToString(symbol.getDocumentationComment(this.checker));
        if (!text)
            return;
        // create a spec node and add JSDoc text/tags
        let result;
        if (ts.isIndexSignatureDeclaration(node)) {
            id += "[...]";
            if (this._nodes[id])
                return;
            result = this._nodes[id] = new SpecNode(id, "[...]", SpecNodeType.PropertyDeclaration);
            result.spec = node.getText();
        }
        else {
            let name = symbol.getName();
            id += (id ? "." : "") + name;
            if (this._nodes[id])
                return;
            result = this._nodes[id] = new SpecNode(id, name, SpecNodeType.PropertyDeclaration);
            result.spec = this.checker.typeToString(typeSymbol);
        }
        this._addDocumentation(result, text);
        ts.getJSDocTags(node).forEach((tag) => this._addDocumentation(result, tag));
        result.protectedModifier = this._hasModifier(node, "protected");
        result.staticModifier = this._hasModifier(node, "static");
        result.abstractModifier = this._hasModifier(node, "abstract");
        return result;
    }
    /** Produce a `SpecNode` for given variable declaration */
    _createVarSpecNode(id, node) {
        let symbol = node.symbol ||
            this.checker.getSymbolAtLocation(node.name || node);
        let typeSymbol = symbol &&
            this.checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
        if (!symbol || !typeSymbol)
            return;
        let text = displayPartsToString(symbol.getDocumentationComment(this.checker));
        if (!text)
            return;
        // create a spec node and add JSDoc text/tags
        let name = symbol.getName();
        id += (id ? "." : "") + name;
        if (this._nodes[id])
            return;
        let result = (this._nodes[id] = new SpecNode(id, name, SpecNodeType.VariableDeclaration));
        result.spec = this.checker.typeToString(typeSymbol);
        this._addDocumentation(result, text);
        ts.getJSDocTags(node).forEach((tag) => this._addDocumentation(result, tag));
        return result;
    }
    /** Recursively analyze given syntax tree node and return one or more documentation nodes */
    _recurse(id, node) {
        if (DEBUG) {
            let symbol = node.symbol ||
                this.checker.getSymbolAtLocation(node.name || node);
            if (symbol) {
                console.log("SYM ", symbol && symbol.getName(), node.kind);
            }
        }
        switch (node.kind) {
            case ts.SyntaxKind.TypeAliasDeclaration:
            case ts.SyntaxKind.EnumDeclaration:
                return this._createTypeOrEnumSpecNode(id, node);
            case ts.SyntaxKind.FunctionDeclaration:
                return this._createFunctionSpecNode(id, node);
            case ts.SyntaxKind.ClassDeclaration:
                return this._createClassSpecNode(id, node);
            case ts.SyntaxKind.InterfaceDeclaration:
                return this._createInterfaceSpecNode(id, node);
            case ts.SyntaxKind.NamespaceExportDeclaration:
            case ts.SyntaxKind.ModuleDeclaration:
                return this._createNamespaceSpecNode(id, node);
            case ts.SyntaxKind.MethodDeclaration:
            case ts.SyntaxKind.MethodSignature:
                return this._createMethodSpecNode(id, node);
            case ts.SyntaxKind.PropertyDeclaration:
            case ts.SyntaxKind.PropertySignature:
            case ts.SyntaxKind.GetAccessor:
            case ts.SyntaxKind.SetAccessor:
            case ts.SyntaxKind.IndexSignature:
                return this._createPropertySpecNode(id, node);
            case ts.SyntaxKind.VariableDeclaration:
                return this._createVarSpecNode(id, node);
        }
        if (node.getChildCount()) {
            return flatten(node.getChildren().map((node) => this._recurse(id, node)));
        }
    }
    /** Returns true if given node has given modifier */
    _hasModifier(node, modifier) {
        return ((node.modifiers &&
            node.modifiers.some((mod) => mod.getText() === modifier)) ||
            undefined);
    }
}
exports.DeclarationFileParser = DeclarationFileParser;
/** Utility function to flatten nested arrays into a single array, and remove any undefined values */
function flatten(array) {
    return array
        .reduce((r, a) => r.concat(a instanceof Array ? flatten(a) : a), [])
        .filter((r) => !!r);
}
