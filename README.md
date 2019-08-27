# Typescene Website

This is the website served at https://typescene.dev.

### Issues and Maintenance

This site is fully managed through a Github repository. If you encounter any issues or would like to contribute an any other way, please use the Issues or Pull Request tabs.

### Versioning and i18n

When a new major version of Typescene becomes available, the entire `docs/ref/` folder can be copied into a new subfolder since all links within the generated reference docs are relative.

Translated versions of the home page as well as a `/docs` folder should be stored in subfolders of the root folder. Some strings and URLs are configured per lang/locale in `_data/docs.yaml`.

### Serving Locally

To run and serve the website locally, install Jekyll and run `bundle exec jekyll serve`.

### Content Generation

Reference documentation is generated automatically from `.d.ts` files and some additional Markdown content. The documentation generator is located in the `docgen` folder.

The source code for the search widget is included in the `docwidget` folder.
