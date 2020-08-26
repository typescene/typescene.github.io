---
redirect_from: /docs/guides/ui/using-factories
permalink: /docs/guides/howto/view-factories
docsection: howto
layout: doc_subpage
title: Using view factories
description: How to use constructor factories for programming Typescene views.
pageintro: Constructor factories provide a way to create views using a series of nested function calls. Typescene provides a large number of built-in UI components, and supports custom view components as well.
nav: |
    * [Constructor factories](#what-is)
    * [Views](#views)
    * [Custom views](#custom)
    * [UI Components](#ref)
---

### What are constructor factories? {#what-is}

A constructor factory is a static method that _creates a constructor_, by taking a base class and a set of properties, and producing a constructor function that not only creates the base class but also assigns the given properties right away.

Here, we take the `UILabel` class, and produce **another class** (constructor) that works exactly like the original `UILabel` class but also sets the `text` property on all instances. We can then create `UILabel` objects with this same text over and over:

```typescript
const MyLabel = UILabel.with({ text: "Hello, world!" });
const l1 = new MyLabel();
l1.text  // => "Hello, world!"
const l2 = new MyLabel();
l2.text  // => "Hello, world!"
```

We call the resulting constructors _preset constructors_ because they contain 'preset' properties and nested content. Some components contain more specific constructor factories, such as `UILabel` itself--which contains a `withText` method that accepts the `text` property as a parameter.

### Views {#views}

Typescene views are made up of these preset constructors, so that associated [activities](/docs/guides/concepts/activities) can create view instances as and when required from the constructor alone. The following qualifies as a Typescene view:

```typescript
const MyView = UICell.with(
    { background: "yellow" },
    UICenterRow.with(
        UILabel.withText("Hello, world!")
    )
)
```

Note that by itself, this view is never updated with different values or layout. To update the view once it is created by the activity, we can use the following methods:

* **Bindings** observe property values on the activity and update view properties immediately.
* **Event handlers** can be specified as method names (e.g. `"doSomething()"`), propagated events (e.g. `"+ItemClicked"`), or as functions (although this is discouraged since all logic should be added to the activity, not the view).

> **Note:** bindings in Typescene are always _one-way bindings_, i.e. they apply values from the activity to the view, but not the other way around. To handle user input, you can use event handlers or use the `UIForm` component and bind an _object_ instead of a single value.

```typescript
// view.ts
import { bind, UIForm, UIRow, UILabel, UITextField,
    UIOppositeRow, UIButton } from "typescene";

export default UIForm.with(
  { onSubmit: "formSubmitted()" },
  UIRow.with(UILabel.withText(bind("foo"))),
  UIRow.with(UITextField.with({ value: bind("foo") })),
  UIOppositeRow.with(
    UIButton.withLabel("OK", "+Submit")
  )
)

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

We can assign the result of constructor factory to a variable and reuse it later:

```tsx
const MyHeading = UIRow.with(
  UIHeading1.withText("Hello")
);
const View = UICell.with(MyHeading);
```

This is mostly useful for breaking up larger views into smaller pieces, since the reused view will always be exactly the same.

To be able to reuse views with different properties and contents, we can instead create custom _view components_ using the `ViewComponent.template` method. The resulting view components allow other views to pass property values or bindings using the `.with` method.

```tsx
// CustomBlock.ts
export const CustomBlockView = ViewComponent.template(
  (properties: { foo: string }, ...content) =>
    UIRow.with(
      UILabel.withText(properties.foo)  // text or binding
      UIColumn.with(...content)
    )
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

#### View component classes

View components created like this are very flexible because they accept properties and content, but they can't contain their own logic.

To create a view component that does have its own methods, such as event handlers, we can directly _extend_ the result of `ViewComponent.template` as our own class. Bindings and event handlers within the encapsulated view can be used within the view component class without affecting other views.

```tsx
// CustomBlock.ts
export class CustomBlockView extends ViewComponent.template(
  (properties: { foo: number }, ...content) =>
    UIRow.with(
      UILabel.with({
        text: properties.foo,
        onClick: "handleMe()"
      }),
      UIColumn.with(...content)
    )
) {
  // properties (with defaults) and event handlers can go here:
  foo = 0;
  handleMe() { /* ... */ }
}
```

### All UI Components by type {#ref}

The following sections list all the UI components that are included in the `typescene` main module. Refer to the linked reference documentation for details about each component.

#### Containers

* [UICell](/docs/ref/UICell), [UICoverCell](/docs/ref/UICoverCell), [UIFlowCell](/docs/ref/UIFlowCell) — cells contain other components, and can be decorated with a border, drop shadow, etc. Cover cells are positioned to *cover* their parent container; flow cells are *not* stretched in the primary dimension.
* [UIRow](/docs/ref/UIRow), [UICloseRow](/docs/ref/UICloseRow), [UICenterRow](/docs/ref/UICenterRow), [UIOppositeRow](/docs/ref/UIOppositeRow) — rows contain other components in a horizontal configuration. Close rows do not apply padding between components; center/opposite rows align components accordingly.
* [UIColumn](/docs/ref/UIColumn), [UICloseColumn](/docs/ref/UICloseColumn) — columns contain other components in a vertical configuration. Close columns do not apply padding between components.
* [UIScrollContainer](/docs/ref/UIScrollContainer) — scroll containers allow their content to scroll in one or two directions, *if* the cell and its parents is restricted in those directions (e.g. within a cover cell).

#### Controls

* [UIButton](/docs/ref/UIButton), [UIIconButton](/docs/ref/UIIconButton), [UILargeButton](/docs/ref/UILargeButton), [UISmallButton](/docs/ref/UISmallButton), [UILinkButton](/docs/ref/UILinkButton), [UIOutlineButton](/docs/ref/UIOutlineButton), [UIBorderlessButton](/docs/ref/UIBorderlessButton), [UIPrimaryButton](/docs/ref/UIPrimaryButton) — buttons with various default styles.
* [UILabel](/docs/ref/UILabel), [UICloseLabel](/docs/ref/UICloseLabel), [UIExpandedLabel](/docs/ref/UIExpandedLabel), [UIParagraph](/docs/ref/UIParagraph), [UIHeading1](/docs/ref/UIHeading1), [UIHeading2](/docs/ref/UIHeading2), [UIHeading3](/docs/ref/UIHeading3) — labels with various default styles. Close labels do not apply minimum line height; expanded labels do *not* shrinkwrap text horizontally.
* [UITextField](/docs/ref/UITextField), [UIBorderlessTextField](/docs/ref/UIBorderlessTextField) — text field input, single line or multi line.
* [UIImage](/docs/ref/UIImage) — image control, with image loaded from a URL.
* [UIToggle](/docs/ref/UIToggle) — check box or toggle control.
* [UISeparator](/docs/ref/UISeparator) — horizontal (default) or vertical line.
* [UISpacer](/docs/ref/UISpacer) — empty component with set dimensions.

#### Others

* [ViewComponent](/docs/ref/ViewComponent) — base class for custom UI components. Acts as a composite parent for child view components.
* [UIConditional](/docs/ref/UIConditional) — controller (wrapper for a single component) that renders a its contents only if one of its properties is set to true.
* [UIForm](/docs/ref/UIForm) — container that introduces a form context binding, which can be used by some controls.
* [UIFormContextController](/docs/ref/UIFormContextController) — controller (wrapper for a single component) that introduces a form context binding without its own output element, which can be used by some controls.
* [UIListController](/docs/ref/UIListController) — controller for a managed list, which renders a list item adapter for every list item.
* [UIListCellAdapter](/docs/ref/UIListCellAdapter) — list item adapter (for use with list controller) that encapsulates a cell with arbitrary content.
* [UIMenu](/docs/ref/UIMenu) — menu controller; often used with a modal controller to show a modal menu.
* [UIModalController](/docs/ref/UIModalController) — modal controller for a single component that shows another component modally when an event occurs on the first one (e.g. Button showing a modal dropdown menu).
* [UISelectionController](/docs/ref/UISelectionController) — controller for a hierarchy of components that deselects other components when one is selected (i.e. when a Select event occurs, often on a cell).
* [UIStyleController](/docs/ref/UIStyleController) — controller (wrapper for a single component) that sets the style of a component based on the value of one of its properties, and a list of styles.
* [UIViewRenderer](/docs/ref/UIViewRenderer) — component that renders another component in its place dynamically (e.g. a bound activity or view component).

#### Methods

The following methods are also helpful within preset UI component structures. Refer to the linked reference documentation for details.

* [tl](/docs/ref/tl) — creates a 'translated text label', i.e. a label component with translated text, and properties taken from tags in its string parameter.
* [bind](/docs/ref/bind), [bindf](/docs/ref/bindf) — bind properties on one component to values on its composite parent (not specific to UI, see [Components](/docs/guides/concepts/components)).

