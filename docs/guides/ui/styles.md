---
permalink: /docs/guides/ui/styles
layout: doc_subpage
title: UI styles
description: A description of the different ways to style components and groups of components.
pageintro: Container components offer various ways to affect the way they are rendered on screen.
nav: |
    * [Styling components](#styles)
    * [Cell styling](#cell)
    * [Measurement in DP](#measure)
    * [Colors](#color)
    * [Visibility](#visibility)
    * [Icons](#icons)
---

### Styling components {#styles}

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

### Cell styling {#cell}

Unlike other components, [`UICell`](/docs/ref/UICell) containers also include their own properties that control how a cell is presented on screen (on top of the usual styles in `UIStyle`), including additional spacing in the form of margins and padding, borders, as well as a background color and optional drop shadow.

In general, it's best to use only `UICell` components for 'decorative' layouts, and avoid styling the elements inside of a cell. For example, to achieve a certain amount of spacing around a label in your UI, wrap the label in a cell instead of applying styles to the label itself.

### Measurement in DP {#measure}

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

### Colors {#color}

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

### Visibility {#visibility}

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

### Icons {#icons}

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
