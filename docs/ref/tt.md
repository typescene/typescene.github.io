---
title: tt
nav: |

  #### Declarations
  * [tt()](#tt)
layout: ref_doc
---

## ![](/assets/icons/spec-function.svg)tt() {#tt}
{:.spec}

```typescript
[1]. (strings: TemplateStringsArray, ...values: any[]): { toString(): string; }
[2]. (value: any, type?: string): { toString(): string; }
```
{:.declarationspec}
**[1]** Template string tag for translating the input string using the current locale, whenever an instance of [`I18nService`](./I18nService) is registered.


The template string may also contain other tags:

- `#{one/two}`: inserts one of the given options, based on the value of the previous (or first) value as an absolute number _or_ length of an array or managed list. The order of given options is 1/other, 0/1/other, 0/1/2/other, etc., unless handled differently by the current language service. Within the options, `#_` is replaced with the value itself (clipped to an integer value).

- `#{2:one/two}`: as above, but refers to the value at given index (base 1) instead of the previous one.

- `***{...}***`: removed altogether, this is meant for unique string identifiers or comments to translators.


**[2]** Translate and/or format given value using the current locale, whenever an instance of [`I18nService`](./I18nService) is registered.


By default, strings are translated, while Date values are formatted for the current locale; however other types of formatting may be provided by the locale service such as 'currency', 'currency:USD', 'date:short', 'datetime:long', etc.

**Returns:** a plain _object_ that can be converted to a string when required (using `String(...)` or the [`.toString()`](./toString) method). Locale changes are therefore not observed, and require a render context reset.

**Note:** To use plurals or number forms based on values that should not be included in the output themselves, use comment tags, e.g. `"There ***{${n}}***#{are no/is one/are #_} item#{/s}"`.

> __Note:__ You do **not** need to call the `tt` function if you are using the [`tl`](./tl) function to create a label in your view constructor. This function runs the `tt` function automatically. However if you are using a plain [`UILabel`](./UILabel) or [`UIButton`](./UIButton) preset, you'll need to pass the result of `tt` to the [`UILabel.Presets.text`](./UILabel#UILabel:Presets:text) property (or [`UIButton.Presets.label`](./UIButton#UIButton:Presets:label) property, respectively). To translate bound strings, you can use [`bindf`](./bindf) with a `|tt` filter: `bindf("Hello, ${name}|tt")`.

#### See Also
[`bindf`](./bindf), [`tl`](./tl), [`I18nService`](./I18nService).

#### Examples
```typescript
// translate a single phrase
tt("Hello, world")

// format the current date
tt(new Date())

// format currency (custom, to implement in I18nService)
tt(3.50, "currency")
tt(3.50, "currency:EUR")

// translate phrase with unique ID
// (can be used with lookup table by I18nService)
tt("***{T_LOGIN_2}***Login successful")

// translate pluralized phrase
let n = 2;
tt`You have ${n} message#{/s}`

// using a translated button label (view preset)
export default UICell.with(
  UIRow.with(
    // tl labels are translated automatically:
    tl("{b}Messages:"),

    // bindf has its tt filter:
    UILabel.with({
      text: bindf("${nUnread} unread|tt")
    }),

    // need tt for static translations:
    UIPrimaryButton.with({
      label: tt("Read now")
    })
  )
)
```


