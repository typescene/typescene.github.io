---
showInNav: true
output: docs/installation.html
template: doc_article
title: Installation
description: How to add Typescene to your project or create a new Typescene project
pageintro: Typescene is distributed through NPM and can be installed using a single command, or added to an existing Web application.
---

## HTML script tag {#html}

The easiest method to use Typescene as part of your Website or Web application with an existing JavaScript code base, is to include a _minified_ version of the framework using a `<script>` tag:

```html
<script src="https://unpkg.com/@typescene/webapp@3/umd/typescene.min.js"></script>
```

This allows you to access all of the exported objects from the `typescene` global variable, or 'require' the framework from an AMD module in the browser.

[This example on Glitch.com](https://glitch.com/edit/#!/typescene-umd-jsx-simple){:target="\_blank"} illustrates this approach.

Use this method when:

- You already have an existing Website that uses plain HTML, and only want to add small interactive elements;
- You intend to write only JavaScript code (possibly transpiled using Babel);
- You don't mind the lack of support for auto-completion and type checking in your editor in some cases.

## Stand-alone app {#create}

If you want to create a more complex UI component or a full client-side application — either as a single-page Web application (SPA), or as part of a 'native-wrapped' project using [Electron](https://electronjs.org/){:target="\_blank"} or [Apache Cordova](https://cordova.apache.org/){:target="\_blank”}, then you can choose to create a stand-alone package instead.

Typescene provides a command-line (CLI) utility that can be used to create a new project and install all dependencies from [NPM](https://www.npmjs.com/){:target="\_blank"} with a single command.

Use this method when:

- You want to develop your UI in isolation, or know how to incorporate a JS build into an existing Website or Web app;
- You want to use a bundler, such as [Webpack](https://webpack.js.org/){:target="\_blank"}, [Parcel](https://parceljs.org/){:target="\_blank"}, or [Rollup](https://rollupjs.org){:target="\_blank"}.
- You want to write modern JavaScript (e.g. Babel) or TypeScript code, and prefer a rich editor experience including auto-completion and type checking.

### Create-Typescene-Webapp

To get started, make sure that you have a recent version of [NodeJS](https://nodejs.org){:target="\_blank"} installed, which comes with the NPM package manager. You may need to restart your computer to make the `npm` and `npx` commands available in the terminal.

Then, run the following command in a terminal (Mac OS/Linux) or command prompt (Windows), replacing `my-app` with the name of the folder you wish to create:

```Bash
npx create-typescene-webapp my-app
```

Several options are available:

| Option          | Effect                                   |
| --------------- | ---------------------------------------- |
| `--js`          | Use JS (ES6) only, instead of TypeScript |
| `--jsx`         | Include JSX (or TSX) support             |
| `--git`         | Initialize a Git repository              |
| `--target=...`  | Set build target (e.g. es8)              |
| `--bundler=...` | Use a specific bundler                   |

Use the `—help` argument to display a full list of options, including build targets and bundlers.

After creating your package, you can start editing the minimal sample code using an editor such as [VS Code](https://code.visualstudio.com/){:target="\_blank"} or vim, and boot up a local development server using the `npm start` command in the newly created folder.

For more information, refer to the `[create-typescene-webapp](https://github.com/typescene/create-typescene-webapp)`{:target="\_blank"} repository page on GitHub.

### Installed files

An application created using the `create-typescene-webapp` CLI tool includes a `/src` folder, which should contain all of your source code, as well as configuration files for TypeScript and your bundler of choice.

Within this folder, the `/src/activities/main` folder contains basic code for a single activity (`MainActivity`) and a corresponding view.

Further activities can be added as subfolders of the `src/activities` folder, and services might go into a new folder such as `src/services` — although this folder structure is not enforced by Typescene at all. You're free to use a structure that works for your particular app. If your app is going to be really small, you can just collect all files in a single folder.

## Installing from NPM {#npm}

If you're already working on a Web app using NPM, you might want to add Typescene as a _dependency_ rather than creating a new project folder. Since Typescene does not have any dependencies of its own, it’s easy to add Typescene without changing your existing project setup.

Use this method when:

- You have an existing Web app in an NPM package;
- You have Babel and/or TypeScript set up along with Webpack or another bundler.

### Webapp package

For a working Typescene installation, you’ll need to import both the `typescene` main package as well as a ‘platform’ package — for now, that’s just `@typescene/webapp`.

The main package contains a 'platform independent' core which includes all Typescene classes, but it isn't able to render anything on its own. The `@typescene/webapp` package contains a browser-based renderer and router.

> **Note:** Be careful with version numbers: the platform package requires a _specific_ version of the main package, so the version of the `typescene` package required by your app must be the same or _less specific_, to make sure that the package manager does not install two different versions.

Use the following command to add these dependencies to an existing NPM package:

```bash
npm install -D typescene @typescene/webapp
```

The `webapp` package primarily exports the `BrowserApplication` class, which is an implementation of the `[Application](/docs/ref/Application)` class. Use this to start your application, and optionally attach it (mount) to an existing DOM element.

---

### Next steps

Now that you're able to set up a working application, take the following steps:

- Learn more about important Typescene concepts, such as [components](/docs/concepts/components), [activities](/docs/concepts/activities) and [views](/docs/concepts/views).
- Alternatively, follow a practical approach with [these guides](/docs/guides/ui) to experiment with your new app.
