"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscContent = void 0;
const fs_1 = require("fs");
const path = require("path");
/** Additional content reader */
class MiscContent {
    constructor() {
        this._content = {};
    }
    /** Read all files in given directory, and parse additional content */
    readDir(p) {
        let files = fs_1.readdirSync(p);
        for (let name of files) {
            let fileName = path.join(p, name);
            if (fs_1.statSync(fileName).isDirectory()) {
                this.readDir(fileName);
                continue;
            }
            let text = fs_1.readFileSync(fileName).toString();
            for (let part of text.split(/[\n\r]+\-{3,}[\n\r]+/)) {
                let id;
                part = part.replace(/^\#+\s*([^\n\r]+)[\n\r]+/, (_s, t) => {
                    id = t;
                    return "";
                });
                if (id)
                    this._content[id] = part;
            }
        }
    }
    /** Returns the additional content that has been read for given ID, if any */
    getContentFor(id) {
        return this._content[id] || "";
    }
}
exports.MiscContent = MiscContent;
