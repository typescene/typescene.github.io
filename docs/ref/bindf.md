---
title: bindf
nav: |

  #### Declarations
  * [bindf()](#bindf)
layout: ref_doc
---

## ![](/assets/icons/spec-function.svg)bindf() {#bindf}
{:.spec}

```typescript
(text: string): StringFormatBinding
```
{:.declarationspec}
Returns a new binding, which can be used as a component preset (see [`Component.with`](./Component#Component:with)) to update components dynamically with a string that includes property values from the composite parent object, such as the `Activity` for a view, the [`Application`](./Application) for an activity, the [`ViewComponent`](./ViewComponent) for nested views, or any other class that has a property decorated with [`@compose`](./compose).


A format string should be passed as a first argument. The text is bound as-is, with the following types of tags replaced:


- `${binding.foo|filter}`: inserts a bound value, as if the tag content was used as a parameter to [`bind`](./bind). This may include one or more filters (see Binding.addFilter).

- `#{one/two}`: inserts one of the given options, based on the value of the previous (or first) binding as an absolute number _or_ length of an array or managed list. The order of given options is 1/other, 0/1/other, 0/1/2/other, etc., unless handled differently by the current language service. Within the options, `#_` is replaced with the value of the relevant binding (clipped to an integer value).

- `#{2:one/two}`: as above, but refers to the binding at given index (base 1) instead of the previous binding.

- `***{...}***`: removed altogether, this is meant for unique string identifiers or comments to translators.

**Note:** To use plurals or number forms based on values that should not be included in the output themselves, use the `_` (blank) filter, e.g. `"There ${n|_}#{are no/is one/are #_} item#{/s}"`.

