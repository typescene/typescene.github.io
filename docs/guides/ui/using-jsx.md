---
permalink: /docs/guides/ui/using-jsx
layout: doc_subpage
title: Using JSX
description: How to use JSX for programming Typescene views.
nav: |
    * [What is JSX?](#what)
    * [Requirements](#requirements)
    * [Views](#views)
    * [Custom views](#custom)
    * [Intrinsic elements](#intrinsic)
---

### What is JSX? {#what}

JSX refers to "XML-in-JavaScript", a new feature that is supported by TypeScript (and Babel, for a JS-only solution).

Source files that include JSX code _must_ be handled by a compiler or transpiler, because most runtime environments such as browsers do not support JSX natively.

With JSX, regular JavaScript (or TypeScript) code can be mixed with a derivative of XML, treating XML markup as a literal expression similar to a string, number, or object literal.

The following code is valid JSX code:

```tsx
const h = "Hello, world!";
const p = <p>{h}</p>;
```

The compiler actually translates the `<p>` element to a function call behind the scenes, passing XML properties as a plain object, and the content(s) or the element as one or more values or nested function calls.

Typescene leverages JSX to allow you to write views as embedded XML inside of TypeScript or JavaScript source code. Note that this is not the same as including raw HTML, since JSX is only translated to a tree structure of UI components, not to rendered output.

### Requirements {#requirements}

The easiest way to get started with JSX is to provide the `--jsx` option to `create-typescene-webapp` (see [Installation](/docs/introduction/installation)).

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
    /* ... */
    "jsx": "react",
    "jsxFactory": "JSX"
  }
}
```

#### Webpack configuration

Make sure your Webpack configuration contains a `resolve` section that mentions `.tsx` and/or `.jsx` for Webpack to consider these files as part of your project.

Also change the `test` property for `ts-loader` to match `.ts` as well as `.tsx`, like so:

```json
{
  /* ... */
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

The result of JSX elements can be used directly as a view class constructor and passed to an activity class:

```tsx
// view.tsx
import { bind } from "typescene";
import JSX from "typescene/JSX";

export default (
  <row><label>{ bind("foo") }</label></row>
)

// activity.ts
import { PageViewActivity } from "typescene";
import view from "./view";

export class MyActivity
  extends PageViewActivity.with(view) {

  // ... properties and methods here
}
```

### Custom view components {#custom}

Sometimes it's useful to define a class thatencapsulates a partial view, to be used throughout the rest of your code.

The `ViewComponent` class provides a way to create such custom view components, allowing other code to pass property values or bindings (using JSX or the `.with` method), while the view can bind to the custom class' own properties and refer to event handlers on the class itself.

```tsx
// CustomBlock.ts
export class CustomBlockView extends ViewComponent.template(
  (p: { foo: number }, ...content) =>
    <row>
      <label>{ p.foo }</label>
      <column>{ ...content }</column>
    </row>
) {
  /* foo goes here */
  foo = 0;

  // ...event handlers etc here
}

export default JSX.ify(CustomBlockView);
```

Alternatively

```tsx
// CustomBlock.ts
export const CustomBlockView = ViewComponent.template(
  (p: { foo: number }, ...content) =>
    <row>
      <label>{ p.foo }</label>
      <column>{ ...content }</column>
    </row>
);

export default JSX.ify(CustomBlockView);
```

### Intrinsic elements {#intrinsic}

You can use the following built-in intrinsic elements in JSX (e.g. `<cell>`) without having to import them by name.

#### Containers

* [`<Cell>`](/docs/ref/UICell), [`<CoverCell>`](/docs/ref/UICoverCell), [`<FlowCell>`](/docs/ref/UIFlowCell) — cells contain other components, and can be decorated with a border, drop shadow, etc. Cover cells are positioned to *cover* their parent container; flow cells are *not* stretched in the primary dimension.
* [`<Row>`](/docs/ref/UIRow), [`<CloseRow>`](/docs/ref/UICloseRow), [`<CenterRow>`](/docs/ref/UICenterRow), [`<OppositeRow>`](/docs/ref/UIOppositeRow) — rows contain other components in a horizontal configuration. Close rows do not apply padding between components; center/opposite rows align components accordingly.
* [`<Column>`](/docs/ref/UIColumn), [`<CloseColumn>`](/docs/ref/UICloseColumn) — columns contain other components in a vertical configuration. Close columns do not apply padding between components.
* [`<ScrollContainer>`](/docs/ref/UIScrollContainer) — scroll containers allow their content to scroll in one or two directions, *if* the cell and its parents is restricted in those directions (e.g. within a cover cell).

#### Controls

* [`<Button>`](/docs/ref/UIButton), [`<IconButton>`](/docs/ref/UIIconButton), [`<LargeButton>`](/docs/ref/UILargeButton), [`<SmallButton>`](/docs/ref/UISmallButton), [`<LinkButton>`](/docs/ref/UILinkButton), [`<OutlineButton>`](/docs/ref/UIOutlineButton), [`<BorderlessButton>`](/docs/ref/UIBorderlessButton), [`<PrimaryButton>`](/docs/ref/UIPrimaryButton) — buttons with various default styles.
* [`<Label>`](/docs/ref/UILabel), [`<CloseLabel>`](/docs/ref/UICloseLabel), [`<ExpandedLabel>`](/docs/ref/UIExpandedLabel), [`<Paragraph>`](/docs/ref/UIParagraph), [`<Heading1>`](/docs/ref/UIHeading1), [`<Heading2>`](/docs/ref/UIHeading2), [`<Heading3>`](/docs/ref/UIHeading3) — labels with various default styles. Close labels do not apply minimum line height; expanded labels do *not* shrinkwrap text horizontally.
* [`<TextField>`](/docs/ref/UITextField), [`<BorderlessTextField>`](/docs/ref/UIBorderlessTextField) — text field input, single line or multi line.
* [`<Image>`](/docs/ref/UIImage) — image control, with image loaded from a URL.
* [`<Toggle>`](/docs/ref/UIToggle) — check box or toggle control.
* [`<Separator>`](/docs/ref/UISeparator) — horizontal (default) or vertical line.
* [`<Spacer>`](/docs/ref/UISpacer) — empty component with set dimensions.

#### Others

* [ViewComponent](/docs/ref/ViewComponent) — base class for custom UI components. Acts as a composite parent for child view components.
* [`<Conditional>`](/docs/ref/UIConditional) — controller (wrapper for a single component) that renders a its contents only if one of its properties is set to true.
* [`<FormContextController>`](/docs/ref/UIFormContextController) — controller (wrapper for a single component) that introduces a form context binding, which can be used by some controls.
* [`<ListController>`](/docs/ref/UIListController) — controller for a managed list, which renders a list item adapter for every list item.
* [`<ListCellAdapter>`](/docs/ref/UIListCellAdapter) — list item adapter (for use with list controller) that encapsulates a cell with arbitrary content.
* [`<Menu>`](/docs/ref/UIMenu) — menu controller; often used with a modal controller to show a modal menu.
* [`<ModalController>`](/docs/ref/UIModalController) — modal controller for a single component that shows another component modally when an event occurs on the first one (e.g. Button showing a modal dropdown menu).
* [`<SelectionController>`](/docs/ref/UISelectionController) — controller for a hierarchy of components that deselects other components when one is selected (i.e. when a Select event occurs, often on a cell).
* [`<StyleController>`](/docs/ref/UIStyleController) — controller (wrapper for a single component) that sets the style of a component based on the value of one of its properties, and a list of styles.
* [`<ViewRenderer>`](/docs/ref/UIViewRenderer) — component that renders another component in its place dynamically (e.g. a bound activity or view component).

