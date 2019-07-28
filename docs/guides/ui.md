---
permalink: /docs/guides/ui
layout: doc_subpage
title: Creating the UI
description: A description of the various options that are available when creating a UI using Typescene.
pageintro: The user interface (UI) of your application can be put together using UI components, which provide many options for styling and layout.
nav: |
    * [Creating views](#views)
---

### Creating views {#views}

Views are an essential part of your application.

* Views consist of UI components, with are combined in specific ways to create different layouts and receive user input. Typescene provides a large number of built-in primitive components, which can be combined into custom view components in your application (or in a redistributable package).
* Views are controlled by [activities](/docs/guides/activities). Each view is linked to one activity (or another view, in some cases).
* Views are rendered independently, with the help of an application 'rendering context' that is mostly invisible to the view itself. Once an activity becomes active, its associated view is rendered automatically.

There are two ways to create views in your application code. Use the links below to learn more about each method:

[Method 1](/docs/guides/ui/using-jsx): JSX can be used to create views using an XML-like syntax:

```tsx
const MyView = (
  <cell background="yellow">
    <row><label>Hello, world!</label></row>
  </cell>
)
```

[Method 2](/docs/guides/ui/using-factories): Constructor factories can be used to create views using nested function calls:

```typescript
const MyView = UICell.with(
  { background: "yellow" },
  UIRow.with(UILabel.withText("Hello, world!"))
)
```

#### Note on file names

While Typescene doesn't *require* you to organize your files in a certain way, it's definitely recommended to keep views separate from your other code. Typically, views are defined in source files as follows.

* `view.ts` file next to your activity source code, for views that are very simple and span only a few lines; OR
* `view/index.ts` file, if the view contains more than one file. Note that the import statement `import view from "./view"` works just as well as the first option.
* `view/*` — other files in the `view` folder, which may export view component constructors just like `view.ts` above. These can be imported and used within preset component tree structures.

