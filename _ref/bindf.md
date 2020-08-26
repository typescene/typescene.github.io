---
title: bindf
nav: |

  #### Declarations
  * [bindf()](#bindf)
layout: doc_ref
---

## ![](/assets/icons/spec-function.svg)bindf() {#bindf}
{:.spec}

```typescript
(format: string, ...bindings: string[]): StringFormatBinding
```
{:.declarationspec}
Returns a new binding, which can be used as a component preset (see [`Component.with`](./Component#Component:with)) to update components dynamically with a string that includes property values from the bound parent component, such as the [`AppActivity`](./AppActivity) for a view, the [`Application`](./Application) for an activity, or the [`ViewComponent`](./ViewComponent) for nested views.


The format string may contain placeholders for bound values; as soon as the value of a binding changes, the formatted string is also updated. Bindings are specified as strings, in the same format as the argument to [`bind()`](./bind), using parameters (e.g. `"foo"`) OR placeholders such as `${foo}` which add bindings as if created using `bind("foo")`.


Strings are translated and following the same rules as [`strf`](./strf), refer to its documentation for a list of available formatting placeholders.

#### See Also
[`bind`](./bind), [`Binding.addFilter`](./Binding#Binding:addFilter) (includes a list of available filters)


