---
title: strf
nav: |

  #### Declarations
  * [strf()](#strf)
layout: doc_ref
---

## ![](/assets/icons/spec-function.svg)strf() {#strf}
{:.spec}

```typescript
(format: string | { toString(): string; }, ...values: any[]): I18nString
```
{:.declarationspec}
Returns an [`I18nString`](./I18nString) that encapsulates a translated and formatted string, incorporating given values. Before formatting, the format string is automatically translated using the [`I18nService.getText()`](./I18nService#I18nService:getText) method of the currently registered I18n service, if any.

Placeholders in the format string are compatible with C-style _sprintf_, e.g. %s, %+8i, %.5f, etc. as well as the following custom placeholders:

- `***{comments}***` which are removed

- `#{a/b}`, `#{a/b/c}` to select an option based on the numeric value of the _first_ value in the parameter list, for pluralization (e.g. `strf("%i file#{/s}", n)`)

- `%{_}` to insert nothing at all (blank string)

- `%{uc}`, %{lc}` for uppercase and lowercase strings

- `%{?}` for true or false (boolean) and `%{!}` for negation

- `%{n}` or `%{num}` for values cast to Number

- `%{then:a:b}` to select strings a or b based on boolean value

- `%{or:b}` to select string b if the value is not boolean true

- `%{local:...}` for I18n-formatted values; the type part(s) are variable, and will need to be implemented by the [`I18nService.format`](./I18nService#I18nService:format) method of the currently registered I18n service, e.g. `strf("%{local:date}", new Date())`.

**Note:** Asterisks (`*`) anywhere in a placeholder are replaced by the next value in the parameter list (_before_ the value being represented itself), e.g. in `strf("%.*f", precision, number)` and `strf("%{local:currency:*}", currency, number)`.

**Note:** Floating point numbers are formatted using the decimal separator specified by the [`I18nService.decimalSeparator`](./I18nService#I18nService:decimalSeparator) property of the currently registered I18n service, if any. Number grouping separators are not supported, and if necessary numbers will need to be formatted using %{local:...}.

