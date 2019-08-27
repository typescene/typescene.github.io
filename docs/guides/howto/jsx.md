---
redirect_from: /docs/guides/ui/using-jsx
permalink: /docs/guides/howto/jsx
docsection: howto
layout: doc_subpage
title: Using JSX
description: How to use JSX to create Typescene views.
pageintro: JSX provides a convenient way to create views using XML. Typescene provides a large number of built-in elements and supports custom views using JSX as well.
nav: |
    * [What is JSX?](#what-is)
    * [Prerequisites](#prerequisites)
    * [Views](#views)
    * [Custom views](#custom)
    * [Intrinsic elements](#intrinsic)
---

### What is JSX? {#what-is}

JSX refers to "XML-in-JavaScript", a new feature that is supported by TypeScript (and Babel, for a JS-only solution).

Source files that include JSX code _must_ be handled by a compiler or transpiler, because most runtime environments such as browsers do not support JSX natively.

With JSX, regular JavaScript (or TypeScript) code can be mixed with a derivative of XML, treating XML markup as a literal expression similar to a string, number, or object literal.

The following code is valid JSX code:

```tsx
const h = "Hello, world!";
const p = <p>{h}</p>;
```

The compiler actually translates the `<p>` element to a function call behind the scenes, passing XML properties as a plain object, and the content(s) or the element as one or more values or nested function calls. Typescene provides many built-in UI components that can be used in JSX as simple tags (such as `<p>`, `<button>`, `<list>`, etc.).

Note that JSX code is not the same as the resulting HTML, since JSX is only translated to a tree structure of UI component constructors, not directly to rendered output.

### Prerequisites {#prerequisites}

The easiest way to get started with JSX is to provide the `--jsx` option to `create-typescene-webapp` (see [Installation](/docs/installation)).

However, if you want to incorporate JSX into an existing project, make sure you follow these steps:

1. Source files that contain JSX code must have a `.tsx` or `.jsx` extension, instead of `.ts` or `.js` respectively.
2. Source files must import `JSX` from the `typescene/JSX` module (see below).
3. TypeScript must be configured to accept JSX and call Typescene's JSX factory function.
4. Webpack must be configured to handle `.tsx` and/or `.jsx` files. This is not required for the Parcel bundler.

#### JSX/TSX Files

At the top of each view file that contains JSX code, e.g. `activities/main/view.tsx`, an import statement must appear that imports the JSX function itself. Refer to the following example:

```tsx
import { bindf } from "typescene";
import JSX from "typescene/JSX";

export default (
  <cell>
    <centerrow>
      <label>{ bindf("Hello, ${person.name}") }</label>
    </centerrow>
  </cell>
)
```

#### TypeScript configuration

Your `tsconfig.json` file must include the following lines. This instructs the TypeScript compiler to compile JSX code to function calls, and look for the definition of this function as `JSX`:

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "JSX"
  }
}
```

#### Webpack configuration

Make sure your Webpack configuration contains a `resolve` section that mentions `.tsx` and/or `.jsx` for Webpack to consider these files as part of your project.

Also change the `test` property for `ts-loader` to match `.ts` as well as `.tsx`, like so:

```javascript
export const config = {
  // ... more
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { transpileOnly: true }
      }
    ]
  }
}
```

### Views {#views}

The result of JSX elements can be used directly as a view class constructor and passed to an activity class.

To update the view once it is created by the activity, we can use the following methods:

* **Bindings** observe property values on the activity and update view properties immediately.
* **Event handlers** can be specified as method names (e.g. `"doSomething()"`), propagated events (e.g. `"+ItemClicked"`), or as functions (although this is discouraged since all logic should be added to the activity, not the view).

> **Note:** bindings in Typescene are always _one-way bindings_, i.e. they apply values from the activity to the view, but not the other way around. To handle user input, you can use event handlers or use the `UIForm` component and bind an _object_ instead of a single value.

```tsx
// view.tsx
import { bind } from "typescene";
import JSX from "typescene/JSX";

export default (
  <form onSubmit="formSubmitted()">
    <row><label>{ bind("foo") }</label></row>
    <row><textfield value={bind("foo")} /></row>
    <oppositerow>
      <button onClick="+Submit">OK</button>
    </oppositerow>
  </form>
)
```

```tsx
// activity.ts
import { PageViewActivity } from "typescene";
import view from "./view";

export class MyActivity
  extends PageViewActivity.with(view) {

  // ... properties and event handlers here
  foo = "Hello, world";
  formSubmitted() { /* ... */ }
}
```

### Custom view components {#custom}

Sometimes it's useful to define a class that encapsulates a partial view, which can be reused in other places.

We can assign the result of a JSX expression to a variable and reuse it later:

```tsx
const MyHeading = <row><h1>Hello</h1></row>
const View = <cell>{ MyHeading }</cell>
```

This is mostly useful for breaking up larger views into smaller pieces, since the reused view will always be exactly the same.

To be able to reuse views with different properties and contents, we can instead create custom _view components_ using the `ViewComponent.template` method. The resulting view components allow other views to pass property values or bindings using JSX or the `.with` method.

```tsx
// CustomBlock.tsx
export const CustomBlockView = ViewComponent.template(
  (properties: { foo: string }, ...content) =>
    <row>
      <label>{ properties.foo }</label>
      <column>{ ...content }</column>
    </row>
);
```

Here, we use an _arrow function_ (i.e. `(...) => result`) to describe our template. The view component expects a `foo` property, and any number of view components as its contents. We can now create a `CustomBlockView` constructor using the `.with` factory method like so:

```typescript
const MyBlock = CustomBlockView.with(
  { foo: 5 },
  UILabel.withText("Hi")
);

// or:
const MyView = UICell.with(
  MyBlock,
  CustomBlockView.with(
    { foo: bind("someOtherFoo") },
    UILabel.withText("One"),
    UISeparator,
    UILabel.withText("Two")
  )
)
```

#### View components in JSX

We can also use the `CustomBlockView` component directly in our JSX code, however TypeScript (and VS Code) won't know about the available properties on this element.

That's why we can also export a special 'JSX-ified' constructor factory which _does_ have the correct type for TypeScript to understand the expected properties:

```tsx
// ...bottom of CustomBlock.tsx
export default JSX.ify(CustomBlockView);
```

The result can then be used in JSX code as normal.

```tsx
import CustomBlock from "./CustomBlockView";

const MyView = (
  <cell>
    <CustomBlock foo={5}><label>Hi</label></CustomBlock>
    <CustomBlock foo={bind("someOtherFoo")}>
      <label>One</label>
      <separator />
      <label>Two</label>
    </CustomBlock>
  </cell>
)
```

#### View component classes

View components created like this are very flexible because they accept properties and content, but they can't contain their own logic.

To create a view component that does have its own methods, such as event handlers, we can directly _extend_ the result of `ViewComponent.template` as our own class. Bindings and event handlers within the encapsulated view can be used within the view component class without affecting other views.

```tsx
// CustomBlock.ts
export class CustomBlockView extends ViewComponent.template(
  (properties: { foo: number }, ...content) =>
    <row>
      <label onClick="handleMe()">{ properties.foo }</label>
      <column>{ ...content }</column>
    </row>
) {
  // properties (with defaults) and event handlers can go here:
  foo = 0;
  handleMe() { /* ... */ }
}

export default JSX.ify(CustomBlockView);
```

### Intrinsic elements {#intrinsic}

You can use the following built-in intrinsic elements in JSX.

#### Containers

* [`<cell>`](/docs/ref/UICell), [`<covercell>`](/docs/ref/UICoverCell), [`<flowcell>`](/docs/ref/UIFlowCell) — cells contain other components, and can be decorated with a border, drop shadow, etc. Cover cells are positioned to *cover* their parent container; flow cells are *not* stretched in the primary dimension.
* [`<row>`](/docs/ref/UIRow), [`<closerow>`](/docs/ref/UICloseRow), [`<centerrow>`](/docs/ref/UICenterRow), [`<oppositerow>`](/docs/ref/UIOppositeRow) — rows contain other components in a horizontal configuration. Close rows do not apply padding between components; center/opposite rows align components accordingly.
* [`<column>`](/docs/ref/UIColumn), [`<closecolumn>`](/docs/ref/UICloseColumn) — columns contain other components in a vertical configuration. Close columns do not apply padding between components.
* [`<scrollcontainer>`](/docs/ref/UIScrollContainer) — scroll containers allow their content to scroll in one or two directions, *if* the cell and its parents is restricted in those directions (e.g. within a cover cell).

#### Controls

* [`<button>`](/docs/ref/UIButton), [`<iconbutton>`](/docs/ref/UIIconButton), [`<largebutton>`](/docs/ref/UILargeButton), [`<smallbutton>`](/docs/ref/UISmallButton), [`<linkbutton>`](/docs/ref/UILinkButton), [`<outlinebutton>`](/docs/ref/UIOutlineButton), [`<borderlessbutton>`](/docs/ref/UIBorderlessButton), [`<primarybutton>`](/docs/ref/UIPrimaryButton) — buttons with various default styles.
* [`<label>`](/docs/ref/UILabel), [`<closelabel>`](/docs/ref/UICloseLabel), [`<expandedlabel>`](/docs/ref/UIExpandedLabel), [`<p>`](/docs/ref/UIParagraph), [`<h1>`](/docs/ref/UIHeading1), [`<h2>`](/docs/ref/UIHeading2), [`<h3>`](/docs/ref/UIHeading3) — labels with various default styles. Close labels do not apply minimum line height; expanded labels do *not* shrinkwrap text horizontally.
* [`<textfield>`](/docs/ref/UITextField), [`<borderlesstextfield>`](/docs/ref/UIBorderlessTextField) — text field input, single line or multi line.
* [`<img>`](/docs/ref/UIImage) — image control, with image loaded from a URL.
* [`<toggle>`](/docs/ref/UIToggle) — check box or toggle control.
* [`<separator>`](/docs/ref/UISeparator) — horizontal (default) or vertical line.
* [`<spacer>`](/docs/ref/UISpacer) — empty component with set dimensions.

#### Others

* [`<conditional>`](/docs/ref/UIConditional) — controller (wrapper for a single component) that renders a its contents only if one of its properties is set to true.
* [`<form>`](/docs/ref/UIForm) — container that introduces a form context binding, which can be used by some controls.
* [`<formcontext>`](/docs/ref/UIFormContextController) — controller (wrapper for a single component) that introduces a form context binding without its own output element, which can be used by some controls.
* [`<list>`](/docs/ref/UIListController) — controller for a managed list, which renders a list item adapter for every list item.
* [`<listcell>`](/docs/ref/UIListCellAdapter) — list item adapter (for use with list controller) that encapsulates a cell with arbitrary content.
* [`<menu>`](/docs/ref/UIMenu) — menu controller; often used with a modal controller to show a modal menu.
* [`<modal>`](/docs/ref/UIModalController) — modal controller for a single component that shows another component modally when an event occurs on the first one (e.g. Button showing a modal dropdown menu).
* [`<selection>`](/docs/ref/UISelectionController) — controller for a hierarchy of components that deselects other components when one is selected (i.e. when a Select event occurs, often on a cell).
* [`<style>`](/docs/ref/UIStyleController) — controller (wrapper for a single component) that sets the style of a component based on the value of one of its properties, and a list of styles.
* [`<view>`](/docs/ref/UIViewRenderer) — component that renders another component in its place dynamically (e.g. a bound activity or view component).

