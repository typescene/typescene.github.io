# Documentation Generator

This folder contains the program that generates all reference documentation from JSDoc comments in `.d.ts` files.

Content from the `content` subfolder is also mixed into the reference documentation pages, see `content/README.md` for details.

## Building and running

To build and run the generator, use the `npm install` command in this folder. Once the generator has been built, run `npm start` to re-generate all content. You can ignore most of the warnings for undefined symbols, since not all `<code>` tags actually refer to exported symbols anyway.
