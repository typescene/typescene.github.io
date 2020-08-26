---
title: UITheme
nav: |

  #### Declarations
  * [**class UITheme**](#UITheme)
  * [.current](#UITheme:current)
  * [.getStyle()](#UITheme:getStyle)
  * [.getTextColor()](#UITheme:getTextColor)
  * [.isBrightColor()](#UITheme:isBrightColor)
  * [.mixColors()](#UITheme:mixColors)
  * [.replaceColor()](#UITheme:replaceColor)
  * [.modalDialogShadeOpacity](#UITheme:modalDialogShadeOpacity)
  * [.spacing](#UITheme:spacing)
  * [.ConfirmationDialogBuilder](#UITheme:ConfirmationDialogBuilder)
  * [.MenuBuilder](#UITheme:MenuBuilder)
  * [.colors](#UITheme:colors)
  * [.icons](#UITheme:icons)
  * [.styles](#UITheme:styles)
  * [.setStyle()](#UITheme:setStyle)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class UITheme {#UITheme}
{:.spec}

Represents a set of default styles and component presets.

### Constructor
```typescript
(): UITheme
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).current <span class="spec_tag">static</span> {#UITheme:current}
{:.spec}

```typescript
UITheme
```
{:.declarationspec}
The current theme. This value may be changed but it is not observed.



## ![](/assets/icons/spec-method.svg).getStyle() <span class="spec_tag">static</span> {#UITheme:getStyle}
{:.spec}

```typescript
(name: string, mixin?: string): UIStyle
```
{:.declarationspec}
Returns a [`UIStyle`](./UIStyle) instance consisting of given named style(s), combined using `UIStyle.mixin(...)`.



## ![](/assets/icons/spec-method.svg).getTextColor() <span class="spec_tag">static</span> {#UITheme:getTextColor}
{:.spec}

```typescript
(bg: string | UIColor): string
```
{:.declarationspec}
Returns a suitable text color for given background color (mostly black, or mostly white).



## ![](/assets/icons/spec-method.svg).isBrightColor() <span class="spec_tag">static</span> {#UITheme:isBrightColor}
{:.spec}

```typescript
(color: string | UIColor): boolean
```
{:.declarationspec}
Returns true if the pseudo-luminance of given color (in hex format `#112233` or `#123` or rgb(a) format `rgb(255, 255, 255)` or hsl format `hsl(255, 0%, 0%)`) is greater than 55%; can be used e.g. to decide on a contrasting text color for a given background color.



## ![](/assets/icons/spec-method.svg).mixColors() <span class="spec_tag">static</span> {#UITheme:mixColors}
{:.spec}

```typescript
(color1: string | UIColor, color2: string | UIColor, p: number): string
```
{:.declarationspec}
Returns a color in rgb(a) format (e.g. `rgb(40,60,255)` `rgba(40,60,255,.5)`) that lies between given colors (in hex format `#112233` or `#123` or rgb(a) format `rgb(255, 255, 255)`) at given point (0-1, with 0 being the same as the first color, 1 being the same as the second color, and 0.5 being an equal mix).



## ![](/assets/icons/spec-method.svg).replaceColor() <span class="spec_tag">static</span> {#UITheme:replaceColor}
{:.spec}

```typescript
(color: string | UIColor): string
```
{:.declarationspec}
Replace color variables in given string with colors from [`UITheme.colors`](./UITheme#UITheme:colors).

- `@green` is substituted with the color `green` defined in [`UITheme.colors`](./UITheme#UITheme:colors)

- `@green-20%` takes the color `green` and darkens by 20%

- `@green+20%` takes the color `green` and lightens by 20%

- `@green^-20%` takes the color `green` and darkens light colors, lightens dark colors by 20%

- `@green^+20%` takes the color `green` and lightens light colors, darkens dark colors by 20%

- `@green/80%` takes the color `green` and makes it 20% (more) transparent

- `@green.text` is substituted with a contrasting text color (mostly-opaque white or black) that is readable on the color `green`.



## ![](/assets/icons/spec-property.svg).modalDialogShadeOpacity {#UITheme:modalDialogShadeOpacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Dialog backdrop shader opacity (for [`DialogViewActivity`](./DialogViewActivity)), defaults to 0.3.



## ![](/assets/icons/spec-property.svg).spacing {#UITheme:spacing}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Default spacing between components in rows and columns, defaults to 8.



## ![](/assets/icons/spec-property.svg).ConfirmationDialogBuilder {#UITheme:ConfirmationDialogBuilder}
{:.spec}

```typescript
new () => ConfirmationDialogBuilder
```
{:.declarationspec}
Default confirmation/alert dialog builder used by [`ViewActivity.showConfirmationDialogAsync`](./ViewActivity#ViewActivity:showConfirmationDialogAsync).



## ![](/assets/icons/spec-property.svg).MenuBuilder {#UITheme:MenuBuilder}
{:.spec}

```typescript
new () => UIMenuBuilder
```
{:.declarationspec}
Default platform dependent menu builder.



## ![](/assets/icons/spec-property.svg).colors {#UITheme:colors}
{:.spec}

```typescript
{ [name: string]: string; }
```
{:.declarationspec}
Set of predefined colors.



## ![](/assets/icons/spec-property.svg).icons {#UITheme:icons}
{:.spec}

```typescript
{ [name: string]: string; }
```
{:.declarationspec}
Named icons that can be used on labels or buttons.



## ![](/assets/icons/spec-property.svg).styles {#UITheme:styles}
{:.spec}

```typescript
{ [name: string]: UIStyle; }
```
{:.declarationspec}
Set of named style _mixins_ that can be applied to a UI component. These include default styles such as 'control', 'container', 'button', 'textfield', etc., but may also include custom styles so that they can be referenced by name.



## ![](/assets/icons/spec-method.svg).setStyle() {#UITheme:setStyle}
{:.spec}

```typescript
(name: string, styles: Partial<StyleObjects>): UIStyle
```
{:.declarationspec}
Add or extend a named style in [`styles`](#UITheme:styles) with given style set; returns the new [`UIStyle`](./UIStyle) instance.

