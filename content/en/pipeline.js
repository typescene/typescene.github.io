const fs = require("fs");

const lang_texts = {
  DOCS: "Docs",
  DOC_BACKLINK: "Documentation",
  DOC_GUIDELINK: "Guide:",
  DOC_GUIDES: "Guides",
  DOC_REF: "Reference",
  DOC_TOC: "Contents",
  BACKTOTOP: "↑ Back to top",
  COPYRIGHT: "© Copyright 2021 Typescene contributors",
  FOOTER: `Find Typescene on
    <a href="https://twitter.com/typescene" target="_blank" rel="noopener">Twitter</a> and
    <a href="https://github.com/typescene" target="_blank" rel="noopener">Github</a>`,
};

/** @param {import("markdown-pipeline").Pipeline} pipeline */
module.exports.start = function (pipeline) {
  pipeline = pipeline.spawn("content/en", "./");
  pipeline.addTransform(async (item, next) => {
    // set language property
    item.data.lang = "en";
    item.data.texts = lang_texts;

    // set nav array to be used in the sidebar
    item.data.nav = [
      { title: "Overview", path: "content/en/docs/overview/" },
      { title: "Concepts", path: "content/en/docs/concepts/" },
      { title: "Guides", path: "content/en/docs/guides/" },
    ];

    // parse markdown and generate HTML...
    await next();
    if (item.output[0]?.data) {
      let toc = await pipeline.parseAsync(item.data.toc);
      item.output[0].data = item.output[0].data
        .replace(/{{version}}/g, () => {
          // replace {{version}} tag with current Typescene version from package.json
          let json = fs
            .readFileSync("./node_modules/typescene/package.json")
            .toString();
          return JSON.parse(json).version;
        })
        .replace(/\<li\>{{nav:([^}]+)}}\<\/li\>/g, (_s, prefix) => {
          // replace {{nav:...}} tag with <li> list for given path prefix
          // (and insert TOC underneath current item, if any)
          let items = pipeline
            .getAllItems()
            .filter(
              (it) =>
                !it.data.aliasFor &&
                !it.data.parent &&
                it.path.startsWith(prefix)
            )
            .map((it) => [
              it === item,
              it.output[0].path.replace(/(index)?\.html$/, ""),
              pipeline.escapeHTML(it.data.title),
            ]);
          return items
            .map((it) =>
              !it[0]
                ? `<li><a href="/${it[1]}">${it[2]}</a></li>` +
                  `<link rel="prefetch" href="/${it[1]}" as="fetch" />`
                : `<li aria-current="page"><b>${it[2]}</b></li>` + toc
            )
            .join("\n");
        })
        .replace(/\<p\>{{guides:([^}]+)}}\<\/p\>/g, (_s, prefix) => {
          // replace {{guides:...}} tag with <p> list for given path prefix
          // as guide links
          let items = pipeline
            .getAllItems()
            .filter(
              (it) =>
                !it.data.aliasFor &&
                it.data.parent &&
                it.path.startsWith(prefix)
            )
            .map((it) => [
              it.output[0].path.replace(/(index)?\.html$/, ""),
              pipeline.escapeHTML(it.data.title),
            ]);
          return items
            .map(
              (it) =>
                `<p><a class="block_link guide" href="/${it[0]}"><b>${lang_texts.DOC_GUIDELINK}</b> ${it[1]}</a></p>`
            )
            .join("\n");
        });
    }
  });
  pipeline.addFiles(
    "index.md",
    "404.md",
    "docs/index.md",
    "docs/overview/goals.md",
    "docs/overview/introduction.md",
    "docs/overview/installation.md",
    "docs/overview/js-ts.md",
    "docs/concepts/components.md",
    "docs/concepts/lists-maps.md",
    "docs/concepts/views.md",
    "docs/concepts/activities.md",
    "docs/concepts/services.md",
    "docs/guides/ui/index.md",
    "docs/guides/layout/index.md"
  );
};
