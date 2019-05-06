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

**Returns:** a plain _object_ that can be converted to a string when required (using `String(...)` or the `.toString()` method). Locale changes are therefore not observed, and require a render context reset.

**Note:** To use plurals or number forms based on values that should not be included in the output themselves, use comment tags, e.g. `"There ***{${n}}***#{are no/is one/are #_} item#{/s}"`.

