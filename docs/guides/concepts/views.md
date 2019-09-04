---
redirect_from: /docs/guides/ui
permalink: /docs/guides/concepts/views
docsection: concepts
layout: doc_subpage
title: Views
description: A description of the various options that are available when creating a UI using Typescene.
pageintro: The user interface (UI) of your application can be put together using view components, which provide many options for styling and layout.
nav: |
    * [What are views?](#what-is)
    * [Creating views](#creating)
---

{:.TODO}
> **Coming soon** <br>
  This section is still in development. In the meantime, refer to the examples and reference documentation from the [documentation home page](/docs/).

### What are views? {#what-is}

Views are an essential part of your application.

* Views consist of UI components, with are combined in specific ways to create different layouts and receive user input. Typescene provides a large number of built-in primitive components, which can be combined into custom view components in your application (or in a redistributable package).
* Views are controlled by [activities](/docs/guides/concepts/activities). Each view is linked to one activity (or another view, in some cases).
* Views are rendered independently, with the help of an application 'rendering context' that is mostly invisible to the view itself. Once an activity becomes active, its associated view is rendered automatically.

<!--
### Views {#views}

Views combine UI components so that they can be rendered to the screen. Typescene provides classes for many basic UI controls and containers, mostly abstracting away the underlying rendering platform (i.e. the DOM for Web applications).

The only requirement for a view to be ‘renderable’ is that it has a `render` method. So the simplest view class would look something like this:

```typescript
// NOT a good way to create a view component:
export class MyView extends Component {
  render(callback: (/* ... */) => void) {
    // create UI components and render those
    let button = new UIButton("Click me");
    let row = new UIRow(button);
    row.render(callback);
  }
}
```

However, code like this quickly becomes difficult to understand, since there isn’t a good way to see the relationships between UI components if we’re creating them one by one.

Instead, Typescene offers two ways to create views that work much better.

#### Using JSX

JSX refers to ‘XML-in-JavaScript’, and is a relatively new feature that’s supported by the TypeScript compiler (and Babel, for a JavaScript-only solution).

Typescene provides JSX elements for all of the built-in UI components, such as `<row>` for the UIRow component, and `<button>` for the UIButton component. You can also use your own custom components.

JSX makes views look like HTML, but that’s somewhat misleading: each element in JSX is actually transformed to a **view class**, as illustrated below.

```tsx
let MyView = <row spacing={8}><button>OK</button></row>
let row = new MyView();
row.spacing  // => 8
row instanceof UIRow  // => true
```

Our `MyView` variable isn’t rendered directly, it’s a ‘template’ that can be used by an Activity (see below) to create and render the actual view only when needed.

To update the resulting view dynamically, we can use **bindings** in place of properties or text. Bindings automatically match up with Activity properties and observe their values for changes.

Event handlers are set up to call methods on the Activity as well, which we can specify by name.

```jsx
let MyView = <form>
  <row><h1>Greeting</h1></row>
  <row>
    <textfield
      placeholder="Enter your name..."
      onInput="updateName()"
      />
  </row>
  <row><p>{bind("greeting")}</p></row>
</form>
```

Whenever an instance of this view is created by an Activity, the values of all bindings are immediately set and kept in sync with properties of the Activity itself (with one caveat: array items cannot be observed, so we’ll need to use a special list object instead--see [Components](/docs/guides/concepts/components) later on).

#### Using constructor factories

If you don’t want to use JSX, or you simply prefer JavaScript/TypeScript for writing your view code, you can create view classes using static _factory methods_.

These methods are available on _any_ component class, not just view components, and can be used to create **constructors** that extend the original class and automatically set any number of properties on every instance.

```typescript
let MyView = UIRow.with(
  { spacing: 8 },
  UIButton.withLabel("Click me")
);
let row = new MyView();
row.spacing  // => 8
row instanceof UIRow  // => true
```

The constructor (class) `MyView` above creates a row `with` 8dp spacing, and a button `with` a given label. The result of these `with` methods is the same as our JSX elements: a template class.

We can use bindings and event handlers with constructor factories as well. Here’s the same example as above without JSX.

```typescript
UIForm.with(
  { hidden: bind("hideForm") },
  UIRow.with(UIHeading1.withText("Greeting")),
  UIRow.with(
    UITextField.with({
      placeholder: "Enter your name...",
      onInput: "updateName()"
    })
  ),
  UIRow.with(
    UIParagraph.withText(bind("greeting"))
  )
)
```

Constructor factories and JSX elements are interchangeable, and can even be used together as well:

```tsx
let myView = <row>
    {UIButton.with({
      label: "Hi!",
      onClick() { alert("hi!") }
    })}
</row>
```

####
-->

### Creating views {#creating}

There are two ways to create views in your application code. Use the links below to learn more about each method:

[Method 1](/docs/guides/howto/jsx): JSX can be used to create views using an XML-like syntax:

```tsx
const MyView = (
  <cell background="yellow">
    <row><label>Hello, world!</label></row>
  </cell>
)
```

[Method 2](/docs/guides/howto/view-factories): Constructor factories can be used to create views using nested function calls:

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

