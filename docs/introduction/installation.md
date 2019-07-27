---
permalink: /docs/introduction/installation
layout: doc_subpage
title: Installation
description: How to install Typescene using the NPM package manager
pageintro: Typescene is distributed through NPM and can be installed using a single package.
nav: |
  * [Creating an app](#create)
  * [Typescene core](#core)
  * [Web app platform](#web)
  * [Other components](#components)
---

### Creating an app {#create}

Typescene provides a convenient way to get started with a new Web application: the `create-typescene-webapp` command line utility.

This utility creates a folder, copies files for a simple app, and installs all of the necessary dependencies for Typescene and a bundler of your choice.

To get started, make sure that you have installed a recent version of [NodeJS](https://nodejs.org){:target="_blank"}, which comes with the NPM package manager. You may need to restart your computer to make the `npm` and `npx` commands available in the terminal.

Then, run the following command, replacing `my-app` with the name of the folder you wish to create:

```bash
npx create-typescene-webapp my-app
```

Several options are available. Add these to the command line to enable them.

| Option          | Effect                                      |
| --------------- | ------------------------------------------- |
| `--js`          | Use JS (ES6) only, instead of TypeScript |
| `--jsx`         | Include JSX support |
| `--git`         | Initialize a Git repository |
| `--bundler=...` | Use a specific bundler (either `webpack` or `parcel`) |

For more information, refer to the [`create-typescene-webapp`](https://github.com/typescene/create-typescene-webapp){:target="_blank"} repository page.

### Typescene core {#core}

The `create-typescene-webapp` utility does _not_ install the `typescene` package directly. Instead, all Typescene apps depend on a 'platform specific' package (see below).

The `typescene` package itself exports most of the Typescene API, which is convenient for importing all classes, interfaces, and functions in your TypeScript files (or JavaScript files). This is the 'main' package, and the version of this package is considered the current version of Typescene. However, you never need to install this package directly using NPM.

The code in the `typescene` package just the 'platform independent' part of the framework, and won't actually display any Views or activate any of your Activities. The same core package could be used (in the future) to build a mobile 'native' UI or build apps for other platform targets.

### Web app platform {#web}

To install Typescene for use in a Web application, or any platform that uses a browser-based front end such as [Electron](https://electronjs.org){:target="_blank"}, the `@typescene/webapp` package is required, along with a 'bundler'.

#### Bundlers

When TypeScript compiles your application normally, it generates a JavaScript file for each source file. This isn't very efficient for distributing your application on the Web and running it in a browser. You'll need a bundler to group all source modules together, and also include to the Typescene code itself in a single file.

Typescene doesn't have any dependencies of its own, so most bundlers will work out of the box. The two bundlers that are recommended for Typescene development are:

* Webpack ([https://webpack.js.org](https://webpack.js.org){:target="_blank"})
* Parcel ([https://parceljs.org](https://parceljs.org){:target="_blank"})

These bundlers also provide a development environment that can be used to watch your source files, and reload the page in your browser when a change is detected. The `@typescene/webapp` package supports HMR (Hot Module Reload) functionality to update views without having to reload the entire page.

Refer to [Your first project](/docs/guides/first) for an example that uses the Webpack bundler.

#### Application class

The `webapp` package itself exports a few specific classes and functions, primarily the `BrowserApplication` class. This is a ‘platform specific’ [`Application`](/docs/ref/Application) class that includes support for URL-based routing (using e.g. `#/example/path` by default) as well as methods for rendering components to the DOM.

```typescript
let app = BrowserApplication.run(
  MainActivity,
  // ... more activities
);
```

#### CSS styling

The `BrowserApplication` class also includes methods for applying arbitrary CSS to your page. The [`UITheme`](/docs/ref/UITheme) class provides a better way to add global styles, but if you already have existing CSS files for other purposes you can import those programmatically.

```typescript
BrowserApplication.importStylesheet(url);
```

The DOM renderer converts all ‘dp’ (pixel) units in your view to fractional `rem` units, which means you can change the overall *zoom level* of your app using a single method.

```typescript
BrowserApplication.setGlobalDpSize(1.5);  // scale up
```

### Other components {#components}

The main `typescene` package on NPM only contains several basic UI components. More advanced components can be added to your application using separate packages. It's possible to create and distribute your own package that exports one or more other components for use in another application.

For an example, refer to the `@typescene/web-nav` package, which contains components for navigation in a Web app.
