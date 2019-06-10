---
permalink: /docs/guides/ui
layout: doc_subpage
title: Creating the UI
description: A description of the various options that are available when creating a UI using Typescene.
pageintro: The user interface (UI) of your application can be put together using UI components, which provide many options for styling and layout.
nav: |
    * [Using UI components](#using)
    * [Styling and layout](#styling)
    * [Container layouts](#containers)
    * [UI Components by type](#ref)
---

### Using UI components {#using}

The most convenient way to create views in Typescene is through a hierarchy of nested *preset components* (i.e. the result of the static `with` method). This creates a structure in your code that is readable and compact, but is also flexible enough to contain bindings and event handlers that you can use to interact with your Activities.

```typescript
// activities/main/view.ts
export default UICell.with(
  {
    dimensions: { height: 48 },
    background: "@green",
    textColor: "@green:text"
  },
  UIRow.with(
    UIExpandedLabel.withText(bind("longText")),
    UILinkButton.withLabel("Details")
  )
)
```

#### Source code organization

While Typescene doesn't *require* you to organize your files in a certain way, it's definitely recommended to keep views separate from your other code. Typically, views are spread across source files as follows.

* `view.ts` file next to your activity source code, for views that are very simple and span only a few lines; OR
* `view/index.ts` file, if the view contains more than one file. Note that the import statement `import view from "./view"` works just as well as the first option.
* `view/*` — other files in the `view` folder, which may export view component constructors just like `view.ts` above. These can be imported and used within preset component tree structures.

### Styling and layout {#styling}

The styling of UI components is mostly determined by a single instance of [`UIStyle`](/docs/ref/UIStyle) that's assigned to the [`style`](/docs/ref/UIComponent#UIComponent:style) property. This object controls the following aspects:

* Dimensions — size of the component, and/or minimum and maximum values, as well as grow/shrink behavior similar to the DOM *flexbox* model (see below).
* Positioning — placement within the parent component area.
* Text style — applied to all text within the component (e.g. font weight, style, alignment, color, line height).
* Control style — common styling that determines the look and feel of 'controls' (e.g. buttons, text fields, labels).
* Container layout — settings for the placement of child components.

Each of these aspects is controlled by a single object, either taken from the current `UIStyle` object, or overridden on the component itself (using properties such as `dimensions`, `position`, etc.).

To change the style of a single component, you can't just change the `UIStyle` object itself. `UIStyle` instances are *read-only*, you'll need to use one of the following methods instead:

* Set the `style` property to a *new* instance of `UIStyle`. Note that this replaces *all* of the existing styles. The individual style properties on the component (`dimensions`, `position`, etc) are immediately updated to reflect the new styles.
* Set the `style` property to an instance of `UIStyle` that *extends* the current style or mixes in individual style properties; see [`UIStyle.extend`](/docs/ref/UIStyle#UIStyle:extend) and [`UIStyle.mixin`](/docs/ref/UIStyle#UIStyle:mixin).
* Override individual properties of the component, such as [`dimensions`](/docs/ref/UIComponent#UIComponent:dimensions) with a plain object. The properties of the object override the ones that are contained in the current `UIStyle` instance.
* Preset components: set properties such as `dimensions` to a plain object; this overrides styles immediately after constructing the component.
* Preset components: alternatively, set the `style` property of the object passed to `with`. This does *not* override the default styles entirely, but rather creates a new `UIStyle` instance that mixes in given styles. If you pass a string instead, the corresponding style is found in the current *theme*, i.e. [`UITheme.current`](/docs/ref/UITheme#UITheme:current) — see examples below.

```typescript
let myButton = new UIButton();

// replace all styles in one go:
myButton.style = UIStyle.create({
  dimensions: { width: 320 }
});
// extend current styles:
myButton.style = myButton.style.extend({
  dimensions: { width: 320 }
});
// override individual style objects:
myButton.dimensions = { width: 320 };

// preset with individual styles:
let TallButton = UIButton.with({
  dimensions: { height: 400 }
});
// preset with mixed in UIStyle:
let TallButton2 = UIButton.with({
  style: UIStyle.create({
    dimensions: { height: 400 }
  })
});
// define new global style and mix it in:
UITheme.current.addStyle("TallButton", {
  dimensions: { height: 400 }
});
let TallButton3 = UIButton.with({
  style: "TallButton"
})
```

#### Cell styling

Unlike other components, [`UICell`](/docs/ref/UICell) containers also include their own properties that control how a cell is presented on screen (on top of the usual styles in `UIStyle`), including additional spacing in the form of margins and padding, borders, as well as a background color and optional drop shadow.

In general, it's best to use only `UICell` components for 'decorative' layouts, and avoid styling the elements inside of a cell. For example, to achieve a certain amount of spacing around a label in your UI, wrap the label in a cell instead of applying styles to the label itself.

#### Measurement in DP

A number of style and cell properties are assigned a 'length value', e.g. dimensions, positioning, padding, margin, and border thickness. These can be set to 'CSS values' (e.g. `20em`, `10vh`), but most commonly these are set to 'dp' (density independent pixel, or display pixel) values, which represent *logical pixels* on a screen — not to be confused with physical pixels which may be very small on newer high-density screens.

Numeric values represent such 'dp' values, whereas other CSS length values must be passed as strings. Typically UI elements are sized in multiples of 8 dp, which is a reasonable length for the space *between* two adjacent components on screen as well as minimal padding around grouped input elements.

```typescript
UICell.with(
  {
    dimensions: { width: 512, maxWidth: "50vw" },
    padding: 8,
    borderRadius: 4,
	},
  // ...
)
```

#### Colors

A number of style and cell properties are assigned a 'color value', for e.g. text and background colors. You can use CSS colors here, but Typescene also supports 'named' colors to enable a more consistent look throughout your application.

Default named colors include `red`, `green`, `blue`, `black`, and `white` along with some other colors, as well as semantic colors such as `primary`, `accent`, `background`, `text`, and `separator`. You can add your own colors using [`UITheme.addColor`](/docs/ref/UITheme#UITheme:addColor) on the current theme (see [`UITheme.current`](/docs/ref/UITheme#UITheme:current)), as well as override the existing ones for an application-specific palette.

Named colors can be used along with other color values:

* `#123`, `#112233`, `rgb(256,256,256)`, `rgba(256,256,256,1)` have the same meaning as in CSS.
* `@green` is substituted with the color `green` defined in `UITheme.colors`; named colors can be added and changed using the methods on [`UITheme`](/docs/ref/UITheme).
* `@green-20%` takes the color `green` and darkens by 20%.
* `@green+20%` takes the color `green` and lightens by 20%.
* `@green^-20%` takes the color `green` and darkens light colors, lightens dark colors by 20%.
* `@green^+20%` takes the color `green` and lightens light colors, darkens dark colors by 20%.
* `@green/80%` takes the color `green` and makes it 20% (more) transparent.
* `@green:text` is substituted with a contrasting text color (close to black or white) that is readable on the color `green` — depending on the 'lightness' of the named color.

These options can be combined to lighten, darken, apply transparency and find contrasting text colors in any combination.

```typescript
UICell.with({
  background: "@background^-10%",
  borderColor: "@separator",
  borderThickness: 2,
  textColor: "@background^-10%:text/80%"
})
```

#### Visibility

Typescene offers two ways to toggle component visibility. These are fundamentally different:

* Using the UI component [`hidden`](/docs/ref/UIComponent#UIComponent:hidden) property — when set to true, the component is not shown at all and doesn't take up any space in the UI, but it is *still rendered*. Also any child components are rendered (but invisible), whether this property is set or not.
* Using a [`UIConditional`](/docs/ref/UIConditional) wrapper — child component(s) of this special UI component are *only* rendered if the [`state`](/docs/ref/UIConditional#UIConditional:state) property is set to true.

```typescript
// using `hidden`:
UIRow.with(
  { hidden: bind("!showRow") },
  UILabel.with({
    text: tt("Hello world! This is always rendered."),
  })
)

// using a wrapper
UIConditional.with(
  { state: bind("!showRow") },
  UIRow.with(
  	UILabel.with({
			text: tt("Hello world! This is wrapped in UIConditional")
    })
  )
)
```

#### Icons

Various UI components have an `icon` property, for displaying an icon next to a text label or on its own. The value of this property is a string value, which refers to an icon *by name*. Icons are registered by name using the [`UITheme.addIcon`](/docs/ref/UITheme#UITheme:addIcon) method. This provides a platform-independent and bundler-agnostic way to include any icon set with your application.

The following icons are predefined:

* `blank` (no visible icon),
* `close` — an &times; mark,
* `expandDown` — a 'down' chevron/arrow,
* `menu` — the familiar hamburger menu icon,
* `check` — a check mark.

As an example, to add all icons from the [Feather](https://feathericons.com/){:target="_blank"} icon set (installed using NPM) to a Web application, use the following code in your `app.ts` file:

```typescript
import * as feather from "feather-icons";
for (let name in feather.icons) {
  let svg = feather.icons[name].toSvg();
  BrowserTheme.current.addIcon(name, svg);
}
```

### Container layouts {#containers}

Typescene uses a layout model that relies on *flexbox* positioning (i.e. CSS Flexible Box Layout, as implemented by modern browsers) to fit components within a parent container. Containers can be nested to achieve pretty much any desired layout.

* Each container has a primary axis (horizontal or vertical) along which its child components are *distributed*.
* Components can be grouped at the start, end, or in the center, or they can be spread out evenly within the available space.
* Perpendicular to the primary axis, components are also *aligned* on one side, in the center, or stretched from side to side.
* Components may override their own alignment, referred to as *gravity*.
* Components may control the amount they are stretched (or *grown*) within their parent container along the primary axis, relative to other components. For controls, this is referred to as *shrinkwrap*, where buttons and labels are shrinkwrapped (i.e. not grown) by default while e.g. text input fields are not shrinkwrapped (grown to the available width) — but only along the *primary* axis.
* Additionally, components may be *wrapped* automatically just like text across multiple lines, or content can be *clipped* to stay within the container's bounds.
* If a component's gravity is set to `overlay`, the component is placed on top of its parent component, positioned relative to its bounds, with controls for the distance to top, right, bottom, and left sides (i.e. CSS *absolute* positioning).

Most container components default to vertical distribution and stretched alignment — with the exception of `UIRow`, which lays out its child components along the horizontal axis and aligns them according to the 'baseline' model, to align text in individual components along a single line.

```typescript
// vertical distribution, stretched:
UICell.with(
  { background: "@green" },
  // vertical distribution, not stretched:
  UIFlowCell.with(
    // horizontal distribution:
    UIRow.with(
      UILabel.withText("Left side (LTR)"),
      UISpacer,  // fill available space in the row
      UILinkButton.withLabel("Cancel"),
      UIPrimaryButton.withLabel("OK")
    ),
    // horizontal divider:
    UISeparator,
    // another row:
    UIRow.with(
      // stacked components:
      UIColumn.with(
        { dimensions: { grow: 1 } },
	      UITextField.withName("myTextInput"),
        UILabel.withText("Text underneath")
      ),
      // shrinkwrapped button on the side:
      UIPrimaryButton.with({
        position: { gravity: "start" }, // top
        label: "Go"
      })
    )
	)
)
```

### UI Components by type {#ref}

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
* [UIFormContextController](/docs/ref/UIFormContextController) — controller (wrapper for a single component) that introduces a form context binding, which can be used by some controls.
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
* [bind](/docs/ref/bind), [bindf](/docs/ref/bindf) — bind properties on one component to values on its composite parent (not specific to UI, see [Understanding components](/docs/guides/components)).

