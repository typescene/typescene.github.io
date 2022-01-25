# Typescene Website

This is the website served at https://typescene.dev.

### Issues and Maintenance

This site is fully managed through a Github repository. If you encounter any issues or would like to contribute an any other way, please use the Issues or Pull Request tabs.

### Content Generation

Reference documentation is generated automatically from `.d.ts` files and some additional Markdown content. The documentation generator is located in the `docgen/` folder.

The source code for the search widget is included in the `docwidget/` folder.

Static content is built using the [`markdown-pipeline`](https://www.npmjs.com/package/markdown-pipeline) tool, from the following sources:

- Comments and types in Typescene package `.d.ts` files, augmented with Markdown content from the `content/en/docs/reference` folder.
- Search widget output (built separately).
- Documentation pages, Markdown content in the `content/en/docs` folder.
- Guides, Markdown content in the `content/en/guides` folder.
- Static assets in the `assets/` folder.
- Home page, with content in `content/en/index.md` and a special template.
- 404 page, with content in `content/en/404.md`

### Running locally

To test changes to the website, run the following commands and use e.g. `npx serve docs` to serve the website locally.

```
npm install
npm run build
npm run watch
```
