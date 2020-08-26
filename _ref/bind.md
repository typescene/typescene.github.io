---
title: bind
nav: |

  #### Declarations
  * [bind()](#bind)
layout: doc_ref
---

## ![](/assets/icons/spec-function.svg)bind() {#bind}
{:.spec}

```typescript
(propertyName?: string, defaultValue?: any): Binding
```
{:.declarationspec}
Returns a new binding, which can be used as a component preset (see [`Component.with`](./Component#Component:with)) to update components dynamically with the value of an observed property on the bound parent component, such as the [`AppActivity`](./AppActivity) for a view, the [`Application`](./Application) for an activity, or the [`ViewComponent`](./ViewComponent) for nested views.


The bound property name is specified using the first argument. Nested properties are allowed (e.g. `foo.bar`), but _only_ the first property will be observed.


If a nested property does not exist, but a `get` method does (e.g. [`ManagedMap.get()`](./ManagedMap#ManagedMap:get)), then this method is called with the property name as its only argument, and the resulting value used as the bound value.


The property name may be appended with a `|` (pipe) character and a *filter* name: see [`Binding.addFilter`](./Binding#Binding:addFilter) for available filters. Multiple filters may be chained together if their names are separated with more pipe characters.


For convenience, `!property` is automatically rewritten as `property|!` to negate property values, and `!!property` to convert any value to a boolean value.


A default value may also be specified. This value is used when the bound value itself is undefined.

#### See Also
[`bindf`](./bindf), [`Binding.addFilter`](./Binding#Binding:addFilter) (includes a list of available filters)

