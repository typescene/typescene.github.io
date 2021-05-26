import { DeclarationFileParser, DocPage } from "./DeclarationFileParser";
import { MiscContent } from "./MiscContent";
/** Page generator that takes parsed data and outputs a string */
export declare class PageGenerator {
    readonly doc: DocPage;
    constructor(doc: DocPage, parser: DeclarationFileParser, misc: MiscContent, template: string, baseUrl: string);
    /** Page data, to be used by template */
    data: any;
    /** Generate the page's markdown file as an array of strings; also populates the data object */
    generate(): string[];
    /** Returns an enhanced version of the name from given spec node that represents its type */
    private _getTypedName;
    /** Set the `nav` data property to markdown content for the navigation list for this page */
    private _addNav;
    /** Applies pageintro section from miscellaneous content, if any */
    private _addPageIntro;
    /** Turn IDs in given string into markdown links */
    private _addIdLinks;
    private _parser;
    private _misc;
    private _top;
    private _baseUrl;
}
