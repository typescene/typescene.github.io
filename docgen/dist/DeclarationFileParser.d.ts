import * as ts from "typescript";
/** Enumeration of declaration index node types */
export declare enum SpecNodeType {
    TypeOrEnum = "type",
    FunctionDeclaration = "function",
    DecoratorFunction = "decorator",
    ClassDeclaration = "class",
    InterfaceDeclaration = "interface",
    MethodDeclaration = "method",
    PropertyDeclaration = "property",
    VariableDeclaration = "const",
    Namespace = "namespace"
}
/** Encapsulates a declaration index node and its meta data */
export declare class SpecNode {
    constructor(id: string, name: string, type: SpecNodeType);
    /** Fully qualified identifier for this node */
    id: string;
    /** The name for this node (e.g. class name, namespace, or parameter name) */
    readonly name: string;
    /** The type of this node */
    type: SpecNodeType;
    /** Specified type declaration (as TypeScript code) */
    spec?: string;
    /** Heritage clauses (e.g. `extends Foo<x>`), for classes and interfaces */
    inherit?: string[];
    /** Sub nodes (e.g. members of a class) */
    nodes?: SpecNode[];
    /** True if this is an abstract class/member */
    abstractModifier?: boolean;
    /** True if this is a protected class member */
    protectedModifier?: boolean;
    /** True if this is a static class member */
    staticModifier?: boolean;
    /** True if this symbol is contained within a namespace */
    namespaced?: boolean;
    /** True if this node is inherited */
    inherited?: boolean;
}
/** Text and meta data for single documentation node */
export interface DocSection {
    doc: string;
    tag?: string;
    name?: string;
}
/** All content for a single documentation page (collection of content sections, with the first one as main content) */
export interface DocPage {
    id: string;
    type: SpecNodeType;
    content: Array<{
        id: string;
        spec: SpecNode;
        docs: DocSection[];
    }>;
}
/** Class that parses a set of declaration files using the Typescript compiler */
export declare class DeclarationFileParser {
    constructor(declFileName: string);
    program: ts.Program;
    checker: ts.TypeChecker;
    /** Generate all documentation pages for this set of files */
    getPageData(): DocPage[];
    /** Returns true if given ID is defined */
    isDefined(id: string): boolean;
    /** Add base node references to given ID for given inheritance clause */
    private _inheritDocRefs;
    /** Add documentation markdown text/tags for given spec node; also changes type if given tag is a `@decorator` tag */
    private _addDocumentation;
    /** Produce a `SpecNode` for given type alias or enum declaration (with declaration source text as type) */
    private _createTypeOrEnumSpecNode;
    /** Produce a `SpecNode` for given function declaration */
    private _createFunctionSpecNode;
    /** Produce a `SpecNode` for given namespace declaration */
    private _createNamespaceSpecNode;
    /** Produce a `SpecNode` for given class declaration */
    private _createClassSpecNode;
    /** Produce a `SpecNode` for given interface declaration */
    private _createInterfaceSpecNode;
    /** Produce a `SpecNode` for given method declaration */
    private _createMethodSpecNode;
    /** Produce a `SpecNode` for given property declaration */
    private _createPropertySpecNode;
    /** Produce a `SpecNode` for given variable declaration */
    private _createVarSpecNode;
    /** Recursively analyze given syntax tree node and return one or more documentation nodes */
    private _recurse;
    /** Returns true if given node has given modifier */
    private _hasModifier;
    private _absPath;
    private _nodes;
    private _docs;
}
