---
title: tl
nav: |

  #### Declarations
  * [tl()](#tl)
layout: ref_doc
---

## ![](/assets/icons/spec-function.svg)tl() {#tl}
{:.spec}

```typescript
(text: string, textStyle?: Partial<TextStyle>): typeof UILabel
```
{:.declarationspec}
Shortcut function that returns a [`UILabel`](./UILabel) constructor with given text (a 'text label', hence `tl`), and optional text styles.

If the text contains tags of the format `${...}` then the text is first wrapped in a call to [`bindf`](./bindf), to include nested bindings and format the result. This also enables the use of `#{...}` tags for pluralization.

If the text _starts_ with a tag in curly braces (i.e. `{...}`), then the result is affected in the following ways:

- {b} mixes in a text style that sets the `bold` flag

- {i} mixes in a text style that sets the `italic` flag

- {h1} through {h3} return a [`UIHeading1`](./UIHeading1), [`UIHeading2`](./UIHeading2), or [`UIHeading3`](./UIHeading3) constructor

- {p} returns a [`UIParagraph`](./UIParagraph) constructor

- {c} returns a [`UICloseLabel`](./UICloseLabel) constructor

- {x} returns an [`UIExpandedLabel`](./UIExpandedLabel) constructor

- {10} mixes in a text style with given font size (any number, optionally followed by a CSS unit)

- {@color} mixes in a text style with given text color (any color defined by the current theme)

- {!tt} prevents translation of the string (see below).

**Note:** The style tags above can be combined using the `|` (pipe) character where possible, e.g. `{b|i|20|@color}`.

**Note:** The text string (excluding initial tag) is passed through the [`tt`](./tt) function for translation upon construction of the [`UILabel`](./UILabel) component whenever an [`I18nService`](./I18nService) instance has been registered.

