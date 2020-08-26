---
title: UIStyle
nav: |

  #### Declarations
  * [**class UIStyle**](#UIStyle)
  * [.create()](#UIStyle:create)
  * [.isStyleOverride()](#UIStyle:isStyleOverride)
  * [.name](#UIStyle:name)
  * [.id](#UIStyle:id)
  * [.ids](#UIStyle:ids)
  * [.inherited](#UIStyle:inherited)
  * [.conditionalStyles](#UIStyle:conditionalStyles)
  * [.mixin()](#UIStyle:mixin)
  * [.extend()](#UIStyle:extend)
  * [.addState()](#UIStyle:addState)
  * [.getStyles()](#UIStyle:getStyles)
  * [.getOwnStyles()](#UIStyle:getOwnStyles)

  #### Namespaced
  * [UIStyle.Offsets](#UIStyle:Offsets)
  * [**UIStyle.ConditionalStyles**](#UIStyle:ConditionalStyles)
  * [**UIStyle.StyleObjects**](#UIStyle:StyleObjects)
  * [**UIStyle.Dimensions**](#UIStyle:Dimensions)
  * [.width](#UIStyle:Dimensions:width)
  * [.height](#UIStyle:Dimensions:height)
  * [.minWidth](#UIStyle:Dimensions:minWidth)
  * [.maxWidth](#UIStyle:Dimensions:maxWidth)
  * [.minHeight](#UIStyle:Dimensions:minHeight)
  * [.maxHeight](#UIStyle:Dimensions:maxHeight)
  * [.grow](#UIStyle:Dimensions:grow)
  * [.shrink](#UIStyle:Dimensions:shrink)
  * [**UIStyle.Position**](#UIStyle:Position)
  * [.gravity](#UIStyle:Position:gravity)
  * [.top](#UIStyle:Position:top)
  * [.bottom](#UIStyle:Position:bottom)
  * [.left](#UIStyle:Position:left)
  * [.right](#UIStyle:Position:right)
  * [**UIStyle.TextStyle**](#UIStyle:TextStyle)
  * [.align](#UIStyle:TextStyle:align)
  * [.color](#UIStyle:TextStyle:color)
  * [.fontFamily](#UIStyle:TextStyle:fontFamily)
  * [.fontSize](#UIStyle:TextStyle:fontSize)
  * [.fontWeight](#UIStyle:TextStyle:fontWeight)
  * [.letterSpacing](#UIStyle:TextStyle:letterSpacing)
  * [.lineHeight](#UIStyle:TextStyle:lineHeight)
  * [.lineBreakMode](#UIStyle:TextStyle:lineBreakMode)
  * [.bold](#UIStyle:TextStyle:bold)
  * [.italic](#UIStyle:TextStyle:italic)
  * [.uppercase](#UIStyle:TextStyle:uppercase)
  * [.smallCaps](#UIStyle:TextStyle:smallCaps)
  * [.underline](#UIStyle:TextStyle:underline)
  * [.strikeThrough](#UIStyle:TextStyle:strikeThrough)
  * [**UIStyle.ControlStyle**](#UIStyle:ControlStyle)
  * [.background](#UIStyle:ControlStyle:background)
  * [.textColor](#UIStyle:ControlStyle:textColor)
  * [.border](#UIStyle:ControlStyle:border)
  * [.borderColor](#UIStyle:ControlStyle:borderColor)
  * [.borderStyle](#UIStyle:ControlStyle:borderStyle)
  * [.borderThickness](#UIStyle:ControlStyle:borderThickness)
  * [.borderRadius](#UIStyle:ControlStyle:borderRadius)
  * [.padding](#UIStyle:ControlStyle:padding)
  * [.dropShadow](#UIStyle:ControlStyle:dropShadow)
  * [.css](#UIStyle:ControlStyle:css)
  * [.cssClassNames](#UIStyle:ControlStyle:cssClassNames)
  * [**UIStyle.ContainerLayout**](#UIStyle:ContainerLayout)
  * [.axis](#UIStyle:ContainerLayout:axis)
  * [.distribution](#UIStyle:ContainerLayout:distribution)
  * [.gravity](#UIStyle:ContainerLayout:gravity)
  * [.wrapContent](#UIStyle:ContainerLayout:wrapContent)
  * [.clip](#UIStyle:ContainerLayout:clip)
  * [**UIStyle.SeparatorOptions**](#UIStyle:SeparatorOptions)
  * [.type](#UIStyle:SeparatorOptions:type)
  * [.vertical](#UIStyle:SeparatorOptions:vertical)
  * [.thickness](#UIStyle:SeparatorOptions:thickness)
  * [.margin](#UIStyle:SeparatorOptions:margin)
  * [.color](#UIStyle:SeparatorOptions:color)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIStyle {#UIStyle}
{:.spec}

Encapsulation of a set of styles to be applied to a UI component.

### Constructor
```typescript
(name?: string, base?: UIStyle, ...styles: Partial<StyleObjects>[]): UIStyle
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).create() <span class="spec_tag">static</span> {#UIStyle:create}
{:.spec}

```typescript
[1]. (styles?: Partial<StyleObjects>): UIStyle
[2]. (name: string, styles: Partial<StyleObjects>): UIStyle
```
{:.declarationspec}
**[1]** Create a new anonymous style set from scratch using given style objects


**[2]** Create a new style set from scratch using given style objects, with given name.



## ![](/assets/icons/spec-method.svg).isStyleOverride() <span class="spec_tag">static</span> {#UIStyle:isStyleOverride}
{:.spec}

```typescript
<K extends "dimensions" | "position" | "textStyle" | "controlStyle" | "containerLayout">(object: StyleObjects[K]): boolean
```
{:.declarationspec}
Returns true if given object does *not* belong to an instance of `UIStyle` (i.e. overridden with a plain object).



## ![](/assets/icons/spec-property.svg).name {#UIStyle:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Human readable name for this style.



## ![](/assets/icons/spec-property.svg).id {#UIStyle:id}
{:.spec}

```typescript
string
```
{:.declarationspec}
Arbitrary ID for this style, contains sanitized [`name`](#UIStyle:name) token.



## ![](/assets/icons/spec-property.svg).ids {#UIStyle:ids}
{:.spec}

```typescript
readonly string[]
```
{:.declarationspec}
List of IDs which includes the current ID as well as inherited IDs.



## ![](/assets/icons/spec-property.svg).inherited {#UIStyle:inherited}
{:.spec}

```typescript
readonly UIStyle[]
```
{:.declarationspec}
List of inherited styles.



## ![](/assets/icons/spec-property.svg).conditionalStyles {#UIStyle:conditionalStyles}
{:.spec}

```typescript
ConditionalStyles
```
{:.declarationspec}
Referenced conditional styles (should be added using [`UIStyle.addState`](./UIStyle#UIStyle:addState)).



## ![](/assets/icons/spec-method.svg).mixin() {#UIStyle:mixin}
{:.spec}

```typescript
(style: UIStyle): UIStyle
```
{:.declarationspec}
Returns a new style set that contains all current styles as well as the styles from given style set; the result is reused when the exact same style sets are mixed again.



## ![](/assets/icons/spec-method.svg).extend() {#UIStyle:extend}
{:.spec}

```typescript
(objects: Partial<StyleObjects>, name?: string): UIStyle
```
{:.declarationspec}
Returns a new style set that contains all current styles as well as given styles, with a new ID and optionally a new name.



## ![](/assets/icons/spec-method.svg).addState() {#UIStyle:addState}
{:.spec}

```typescript
(name: "pressed" | "hover" | "focused" | "disabled" | "selected", objects: Partial<StyleObjects>): this
```
{:.declarationspec}
Add or extend a conditional style with given style set.



## ![](/assets/icons/spec-method.svg).getStyles() {#UIStyle:getStyles}
{:.spec}

```typescript
(): Readonly<StyleObjects>
```
{:.declarationspec}
Returns all individual style objects as read-only objects.



## ![](/assets/icons/spec-method.svg).getOwnStyles() {#UIStyle:getOwnStyles}
{:.spec}

```typescript
(): Partial<StyleObjects>
```
{:.declarationspec}
Returns all styles that are unique to this instance, as read-only objects.





---

## ![](/assets/icons/spec-type.svg)UIStyle.Offsets {#UIStyle:Offsets}
{:.spec}

```typescript
type Offsets = string | number | {
        x?: string | number;
        y?: string | number;
        top?: string | number;
        bottom?: string | number;
        left?: string | number;
        right?: string | number;
    };
```
{:.declarationspec}
Type definition for padding, margin, or border measurements.



---

## ![](/assets/icons/spec-interface.svg)UIStyle.ConditionalStyles {#UIStyle:ConditionalStyles}
{:.spec}

Type definition for an object with conditional styles.



---

## ![](/assets/icons/spec-interface.svg)UIStyle.StyleObjects {#UIStyle:StyleObjects}
{:.spec}

Collection of individual objects that represent a (partial) style.



---

## ![](/assets/icons/spec-interface.svg)UIStyle.Dimensions {#UIStyle:Dimensions}
{:.spec}

Options for the dimensions of a UI component.



## ![](/assets/icons/spec-property.svg).width {#UIStyle:Dimensions:width}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Outer width of the element, as specified (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).height {#UIStyle:Dimensions:height}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Outer height of the element, as specified (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).minWidth {#UIStyle:Dimensions:minWidth}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Minimum width of the element, as specified (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).maxWidth {#UIStyle:Dimensions:maxWidth}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Maximum width of the element, as specified (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).minHeight {#UIStyle:Dimensions:minHeight}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Minimum height of the element, as specified (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).maxHeight {#UIStyle:Dimensions:maxHeight}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Maximum height of the element, as specified (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).grow {#UIStyle:Dimensions:grow}
{:.spec}

```typescript
number
```
{:.declarationspec}
Growth quotient (0 for no growth, higher values for faster growth when needed).



## ![](/assets/icons/spec-property.svg).shrink {#UIStyle:Dimensions:shrink}
{:.spec}

```typescript
number
```
{:.declarationspec}
Shrink quotient (0 to never shrink, higher values for faster shrinking when needed).



---

## ![](/assets/icons/spec-interface.svg)UIStyle.Position {#UIStyle:Position}
{:.spec}

Options for component positioning within parent component(s).



## ![](/assets/icons/spec-property.svg).gravity {#UIStyle:Position:gravity}
{:.spec}

```typescript
"" | "start" | "end" | "center" | "stretch" | "baseline" | "overlay"
```
{:.declarationspec}
Position of the component in the direction perpendicular to the distribution axis of the parent component, or `overlay` if the component should be placed on top of other components (i.e. CSS absolute positioning).



## ![](/assets/icons/spec-property.svg).top {#UIStyle:Position:top}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Top anchor: relative distance, or absolute position if `gravity` is 'overlay' (in dp or string with unit, defaults to `auto`).



## ![](/assets/icons/spec-property.svg).bottom {#UIStyle:Position:bottom}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Bottom anchor: relative distance, or absolute position if `gravity` is 'overlay' (in dp or string with unit, defaults to `auto`).



## ![](/assets/icons/spec-property.svg).left {#UIStyle:Position:left}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Left anchor: relative distance, or absolute position if `gravity` is 'overlay' (in dp or string with unit, defaults to `auto`).



## ![](/assets/icons/spec-property.svg).right {#UIStyle:Position:right}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Right anchor: relative distance, or absolute position if `gravity` is 'overlay' (in dp or string with unit, defaults to `auto`).



---

## ![](/assets/icons/spec-interface.svg)UIStyle.TextStyle {#UIStyle:TextStyle}
{:.spec}

Options for styles of a UI component that shows text.



## ![](/assets/icons/spec-property.svg).align {#UIStyle:TextStyle:align}
{:.spec}

```typescript
string
```
{:.declarationspec}
Text alignment (CSS).



## ![](/assets/icons/spec-property.svg).color {#UIStyle:TextStyle:color}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Text color ([`UIColor`](./UIColor) or string).



## ![](/assets/icons/spec-property.svg).fontFamily {#UIStyle:TextStyle:fontFamily}
{:.spec}

```typescript
string
```
{:.declarationspec}
Font family (CSS).



## ![](/assets/icons/spec-property.svg).fontSize {#UIStyle:TextStyle:fontSize}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Font size (dp or string with unit).



## ![](/assets/icons/spec-property.svg).fontWeight {#UIStyle:TextStyle:fontWeight}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Font weight (CSS).



## ![](/assets/icons/spec-property.svg).letterSpacing {#UIStyle:TextStyle:letterSpacing}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Letter spacing (dp or string with unit).



## ![](/assets/icons/spec-property.svg).lineHeight {#UIStyle:TextStyle:lineHeight}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Line height (CSS relative to font size, *not* in dp).



## ![](/assets/icons/spec-property.svg).lineBreakMode {#UIStyle:TextStyle:lineBreakMode}
{:.spec}

```typescript
"" | "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line" | "ellipsis" | "clip"
```
{:.declarationspec}
Line break handling mode (CSS white-space).



## ![](/assets/icons/spec-property.svg).bold {#UIStyle:TextStyle:bold}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True for bold text (overrides `fontWeight` value).



## ![](/assets/icons/spec-property.svg).italic {#UIStyle:TextStyle:italic}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True for italic text.



## ![](/assets/icons/spec-property.svg).uppercase {#UIStyle:TextStyle:uppercase}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True for all-uppercase text.



## ![](/assets/icons/spec-property.svg).smallCaps {#UIStyle:TextStyle:smallCaps}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True for text using small caps.



## ![](/assets/icons/spec-property.svg).underline {#UIStyle:TextStyle:underline}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True for underlined text.



## ![](/assets/icons/spec-property.svg).strikeThrough {#UIStyle:TextStyle:strikeThrough}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True for struck trough text.



---

## ![](/assets/icons/spec-interface.svg)UIStyle.ControlStyle {#UIStyle:ControlStyle}
{:.spec}

Miscellaneous style options for control components, including all CSS attributes and classes.



## ![](/assets/icons/spec-property.svg).background {#UIStyle:ControlStyle:background}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Background style or color ([`UIColor`](./UIColor) or string).



## ![](/assets/icons/spec-property.svg).textColor {#UIStyle:ControlStyle:textColor}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Text color ([`UIColor`](./UIColor) or string); this may be overridden by [`UIStyle.TextStyle.color`](./UIStyle#UIStyle:TextStyle:color) if specified on the same component or a child component.



## ![](/assets/icons/spec-property.svg).border {#UIStyle:ControlStyle:border}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Border properties (CSS string) @deprecated.



## ![](/assets/icons/spec-property.svg).borderColor {#UIStyle:ControlStyle:borderColor}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Border color ([`UIColor`](./UIColor) or string).



## ![](/assets/icons/spec-property.svg).borderStyle {#UIStyle:ControlStyle:borderStyle}
{:.spec}

```typescript
string
```
{:.declarationspec}
Border style (CSS), defaults to "solid".



## ![](/assets/icons/spec-property.svg).borderThickness {#UIStyle:ControlStyle:borderThickness}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Border thickness (in dp or CSS string, or separate offset values).



## ![](/assets/icons/spec-property.svg).borderRadius {#UIStyle:ControlStyle:borderRadius}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Border radius (in dp or CSS string).



## ![](/assets/icons/spec-property.svg).padding {#UIStyle:ControlStyle:padding}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Padding within control element (in dp or CSS string, or separate offset values).



## ![](/assets/icons/spec-property.svg).dropShadow {#UIStyle:ControlStyle:dropShadow}
{:.spec}

```typescript
number
```
{:.declarationspec}
Drop shadow distance (0-1).



## ![](/assets/icons/spec-property.svg).css {#UIStyle:ControlStyle:css}
{:.spec}

```typescript
Partial<CSSStyleDeclaration>
```
{:.declarationspec}
Miscellaneous CSS attributes.



## ![](/assets/icons/spec-property.svg).cssClassNames {#UIStyle:ControlStyle:cssClassNames}
{:.spec}

```typescript
string[]
```
{:.declarationspec}
Miscellaneous CSS class names (array).



---

## ![](/assets/icons/spec-interface.svg)UIStyle.ContainerLayout {#UIStyle:ContainerLayout}
{:.spec}

Options for layout of child components of a container component (only exists on [`UIContainer`](./UIContainer) instances).



## ![](/assets/icons/spec-property.svg).axis {#UIStyle:ContainerLayout:axis}
{:.spec}

```typescript
"" | "horizontal" | "vertical"
```
{:.declarationspec}
Axis along which content is distributed (defaults to vertical).



## ![](/assets/icons/spec-property.svg).distribution {#UIStyle:ContainerLayout:distribution}
{:.spec}

```typescript
"" | "start" | "end" | "center" | "fill" | "space-around"
```
{:.declarationspec}
Positioning of content along the distribution axis (defaults to start).



## ![](/assets/icons/spec-property.svg).gravity {#UIStyle:ContainerLayout:gravity}
{:.spec}

```typescript
"" | "start" | "end" | "center" | "stretch" | "baseline"
```
{:.declarationspec}
Positioning of content perpendicular to the distribution axis (defaults to stretch).



## ![](/assets/icons/spec-property.svg).wrapContent {#UIStyle:ContainerLayout:wrapContent}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if content should wrap to new line/column if needed (defaults to false).



## ![](/assets/icons/spec-property.svg).clip {#UIStyle:ContainerLayout:clip}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if content should be clipped within this container.



---

## ![](/assets/icons/spec-interface.svg)UIStyle.SeparatorOptions {#UIStyle:SeparatorOptions}
{:.spec}

Separator style, for use with containers and lists.



## ![](/assets/icons/spec-property.svg).type {#UIStyle:SeparatorOptions:type}
{:.spec}

```typescript
"line" | "spacer"
```
{:.declarationspec}
Separator type, defaults to line.



## ![](/assets/icons/spec-property.svg).vertical {#UIStyle:SeparatorOptions:vertical}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True for vertical line, or width-only spacer.



## ![](/assets/icons/spec-property.svg).thickness {#UIStyle:SeparatorOptions:thickness}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Separator line thickness or space width/height (CSS length or dp).



## ![](/assets/icons/spec-property.svg).margin {#UIStyle:SeparatorOptions:margin}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Line separator margin (CSS length or dp).



## ![](/assets/icons/spec-property.svg).color {#UIStyle:SeparatorOptions:color}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Line separator color ([`UIColor`](./UIColor) or string), defaults to `@separator`.

