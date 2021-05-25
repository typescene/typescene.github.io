/** Additional content reader */
export declare class MiscContent {
    /** Read all files in given directory, and parse additional content */
    readDir(p: string): void;
    /** Returns the additional content that has been read for given ID, if any */
    getContentFor(id: string): string;
    private _content;
}
