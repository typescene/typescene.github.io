---
template: doc_guide
title: Understanding the anatomy of an app
description: |
  Get started with an overview of a simple Typescene application.
---

<section>

**Note:**<br>
For a more in-depth explanation, start with this introductory article about the Typescene framework.

</section>

[**Overview &gt; Introduction**<br>Start here for an in-depth explanation of the Typescene framework](/docs/introduction){:.block_link.doc}

---

<section>

### A simple app

This is a simple Typescene application. It has three parts:

- The **view** describes the UI as a set of nested components.
- The **activity** represents the current state. It displays and updates the view, and handles events.
- The **application** coordinates rendering and navigation.

</section>

```typescript
// simple-app.ts

// Part 1 - View:
const view = UICell.with(
  UILabel.with({
    text: "Click me!",
  })
);

// Part 2 - Activity:
class MyActivity extends PageViewActivity.with(view) {
  // The current state:
  timesClicked = 0;

  // Event handler:
  onClick() {
    this.timesClicked++;
    alert("You clicked " + this.timesClicked + " time(s).");
  }
}

// Part 3 - Application:
const app = BrowserApplication.run(
  MyActivity
  /* , ... add more activities here ... */
);
```

---

<section>

### JSX files

Typescene also supports 'JSX'-style syntax for views. This makes views look like HTML, but under the hood each tag is simply translated to a method call.

The file extension for a JavaScript or TypeScript file containing JSX views **must** be `jsx` or `tsx`, respectively. When starting a new project, you'll need to decide between JSX and pure JS/TS views.

</section>

```jsx
// simple-app.tsx

// Part 1 - View in JSX (optional)
const view = (
  <cell>
    <label>Click me!</label>
  </cell>
);

// ...
```

---

<footer>

### Next

{{guides:content/en/docs/guides/basics/anatomy-}}

</footer>
