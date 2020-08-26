---
permalink: /docs/guides/quickstart/hello-world
docsection: quickstart
layout: doc_subpage
title: Hello, world!
description: Quick Start guide that introduces a minimal Web application using Typescene.
pageintro: In this quick-start guide we'll create a minimal Web application that shows a message on the screen.
nav: |
    * [Using online editors](#online)
    * [Creating a package](#cli)
    * [Running the app](#run)
    * [App Components](#components)
---

### Using online editors {#online}

There are a number of websites that provide an online IDE experience right inside of the browser. Typescene works well with many of them, and these can be used to experiment with a simple 'Hello, world!' application without any particular setup on your computer:

* **Glitch:** The smallest amount of code required to get Typescene to run on a Web page can be found in [this Glitch.com project](https://glitch.com/edit/#!/typescene-hello-world){:target="_blank"}. This example loads a pre-compiled 'UMD' JavaScript library from the Unpkg CDN, and does not support auto-completion and type checking.

* **StackBlitz:** A more full-featured editor is included with [this StackBlitz example](https://stackblitz.com/edit/typescene-hello-world){:target="_blank"}. This code uses Typescene through NPM dependencies, and supports auto-completion and type checking.

However, for most applications you'll want to create a project on your computer instead. Follow these simple steps to get started.

### Step 1: Creating a package {#cli}

To create a new Web application with Typescene, we'll use the 'NPM' package manager along with the `create-typescene-webapp` command-line utility. The NPM toolset is installed along with [NodeJS](https://nodejs.org){:target="_blank"}.

Run the following command in a Terminal window (Mac OS/Linux) or Command Prompt (Windows) to create a package that uses **TypeScript:**

```bash
npx create-typescene-webapp hello-world --jsx
```

Or, to create a package that uses **Babel** (JavaScript-only):

```bash
npx create-typescene-webapp hello-world --jsx --js
```

> **Tip:** Use the "TypeScript/JavaScript" toggle above sample code in the Typescene documentation to switch between TypeScript code and JavaScript versions (if available), or click below to set your preference:
>
> {% include TSJS_span.md %}

The installer will take some time to install Webpack (by default) and either TypeScript or Babel (for ES6 support). When this is done, navigate to the newly created folder on the command line:

```bash
cd hello-world
```

### Step 2: Running the app {#run}

From the project folder, we can now start a _development server_. This local server not only compiles your source code, but also allows you view the result of your changes immediately in a browser.

Running the following command not only starts the server, but also opens up your default browser to the 'Hello, world!' example page that is loaded from the development server itself:

```bash
npm start
```

### App components {#components}

Let's take a look at the files that have been created for us in the `src` folder.

There are three files that are especially important—open up the following files in your code editor:

* `app.ts`{:TS} `app.js`{:JS} — contains the code that starts the application;
* `activities/main/activity.ts`{:TS} `activities/main/activity.js`{:JS} — contains a single activity, which gets activated right away;
* `activities/main/view.tsx`{:TS} `activities/main/view.jsx`{:JS} (or `.ts`{:TS}`.js`{:JS}) — the associated view.

All in all, there is very little code in these files, comparable to the single-file solutions that are used by the online IDEs referenced above—however, the directory structure makes it easier to add more activities and views to the same project while keeping the code modular.

#### Application

The application gets created in `app.ts`{:TS}`app.js`{:JS}. A single statement creates the app, activates it, and references the main activity to be created right away:

```typescript
import { BrowserApplication } from "@typescene/webapp";
import MainActivity from "./activities/main/activity";

const app = BrowserApplication.run(
    MainActivity,
    // ... add other activities here
);
```

{:JS}
> **Note:** If you're confused by the `import` statements in the code above, make sure you are familiar with newer JavaScript standards—beginning with ES6, also referred to as ECMAScript 2015. Babel is used to convert ES6 back to ES5, to support older browsers such as Internet Explorer 9.

#### Activity

The `MainActivity` class is defined as follows:

{% include TSJS.md %}
{:TS}
```typescript
import { PageViewActivity } from "typescene";
import view from "./view";

export default class MainActivity
    extends PageViewActivity.with(view) {
    path = "/";
    // ...
}
```

{:JS}
```javascript
import { PageViewActivity } from "typescene";
import view from "./view";

export default class MainActivity
    extends PageViewActivity.with(view) {
    constructor() {
        super();
        this.path = "/";
    }
    // ...
}
```

The `path` property instructs the application to activate this activity for _any_ route. Calling the `activateAsync()` method from the constructor would have the same effect.

#### View

Activating the main activity causes its associated view to be displayed, which is defined in the `view.tsx`{:TS} `view.jsx`{:JS} file:

```tsx
import { HMR } from "@typescene/webapp";
import JSX from "typescene/JSX";

export default HMR.enableViewReload(
    module,
    <cell>
        <centerrow>
            <label>Hello, world!</label>
        </centerrow>
    </cell>
)
```

The call to `HMR.enableViewReload` is what powers the development server's instant view-reload feature: after you change (and save) a view file _only_, all of the activity instances remain unaffected while the view is swapped out for a new one through the bundler's Hot Module Reload (HMR) process. This makes UI programming a lot more efficient, since you don't need to reload the page and return to the same application state every time.

{:TS}
If you prefer to use plain TypeScript code instead of JSX's HTML-like syntax, you can leave out the `--jsx` option in the `npx create-typescene-webapp` command. This results in a view file that looks like the following instead:

{:JS}
If you prefer to use plain JavaScript code instead of JSX's HTML-like syntax, you can leave out the `--jsx` option in the `npx create-typescene-webapp` command. This results in a view file that looks like the following instead:

```typescript
import { HMR } from "@typescene/webapp";
import { UICell, UICenterRow, UILabel } from "typescene";

export default HMR.enableViewReload(
    module,
    UICell.with(
        UICenterRow.with(
            UILabel.withText("Hello, world!")
        )
    )
)
```

### Next steps

Now that you've learned how to create a basic application with a single activity and view, continue with the [Counter](/docs/guides/quickstart/counter) example to learn how we can add interactivity to our UI.
