---
redirect_from: /docs/introduction/installation
permalink: /docs/installation
docsection: overview
layout: doc_subpage
title: Installation
description: How to add Typescene to your project or create a new Typescene project
pageintro: Typescene is distributed through NPM and can be installed using a single command, or added to an existing Web application.
nav: |
  * [HTML script tag](#html)
  * [Stand-alone app](#create)
  * [Installing from NPM](#npm)
---

### HTML script tag {#html}

The easiest method to use Typescene as part of your Website or Web application, is to include a *minified* version of the framework using a `<script>` tag:

```html
<script src="https://unpkg.com/@typescene/webapp@2/umd/typescene-jsx.min.js"></script>
```

This allows you to access all of the exported objects from the `typescene` global variable, or 'require' the framework from an AMD module in the browser.

[This example on Glitch.com](https://glitch.com/edit/#!/typescene-umd-jsx-simple){:target="_blank"} illustrates this approach.

Use this method when:

* You already have an existing Website that uses plain HTML, and only want to add small interactive elements;
* You intend to write only JavaScript code (possibly transpiled using Babel);
* You don't mind the *lack of support* for auto-completion and type checking in your editor.

### Stand-alone app {#create}

If you want to create a more complex UI component (or perhaps an entire client-side application—either as a single-page Web application, or as part of a 'native-wrapped' project using [Electron](https://electronjs.org/){:target="_blank"} or [Apache Cordova](https://cordova.apache.org/){:target="_blank"}) then you can choose to create a stand-alone package instead.

Typescene provides a convenient command-line (CLI) utility that can be used to setup and install a complete [NPM](https://www.npmjs.com/){:target="_blank"} package with a single command.

Use this method when:

* You want to develop your UI in isolation, or know how to incorporate a JS build into an existing Website or Web app;
* You want to use a bundler, such as [Webpack](https://webpack.js.org/){:target="_blank"} or [Parcel](https://parceljs.org/){:target="_blank"}.
* You want to write modern JavaScript (e.g. Babel) or TypeScript code, and prefer a rich editor experience including auto-completion and type checking.

#### Create-Typescene-Webapp

To get started, make sure that you have a recent version of [NodeJS](https://nodejs.org){:target="_blank"} installed, which comes with the NPM package manager. You may need to restart your computer to make the `npm` and `npx` commands available in the terminal.

Then, run the following command in a terminal (Mac OS/Linux) or command prompt (Windows), replacing `my-app` with the name of the folder you wish to create:

```bash
npx create-typescene-webapp my-app
```

Several options are available:

| Option          | Effect                                      |
| --------------- | ------------------------------------------- |
| `--js`          | Use JS (ES6) only, instead of TypeScript |
| `--jsx`         | Include JSX support |
| `--git`         | Initialize a Git repository |
| `--bundler=...` | Use a specific bundler (either `webpack` or `parcel`) |

After creating your package, you can start editing the minimal sample code using an editor such as [VS Code](https://code.visualstudio.com/){:target="_blank"}, and boot up an automatically-refreshing local development server using the `npm start` command in the newly created folder.

> For more information, refer to the [`create-typescene-webapp`](https://github.com/typescene/create-typescene-webapp){:target="_blank"} repository page on GitHub.

#### Folder structure

An application created using the `create-typescene-webapp` CLI tool includes the following folders:

* `/src` — contains all source code, as well as configuration for TypeScript and Webpack or Parcel.
* `src/activities/main` — contains a single activity (`MainActivity`) and a corresponding view.

Further activities can be added as subfolders of the `src/activities` folder, and services might go into a new folder such as `src/services` — although this folder structure is not enforced by Typescene at all, so feel free to shake things up if needed.

### Installing from NPM {#npm}

If you're already working on a Web app using an NPM package, you might want to add Typescene as an NPM *dependency* instead of creating a completely new project folder. Since Typescene does not have any further dependencies of its own, it's often possible to add Typescene without changing your existing project setup.

Use this method when:

* You already have an existing Web app in an NPM package;
* You have Babel and/or TypeScript set up along with Webpack or any other bundler.

#### Webapp package

Do NOT install a dependency to the `typescene` package directly. This package contains the 'platform independent' code that *excludes* the browser-based router and renderer, and does nothing on its own.

Instead, add the `@typescene/webapp` package as a dependency, which refers to a specific version range for the `typescene` package — as a result, the latest version of the Typescene main package will always be installed (and updated) along with the `webapp` package.

Use the following command to add this dependency to an existing NPM package:

```bash
npm install -D @typescene/webapp
```

The `webapp` package primarily exports the `BrowserApplication` class. To learn more about this class, refer to the [Applications](/docs/guides/concepts/applications) guide.

### Next steps

To learn more about Typescene's project structure, refer to the [Hello World](/docs/guides/quickstart/hello-world) example.