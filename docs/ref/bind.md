---
title: bind
nav: |

  #### Declarations
  * [bind()](#bind)
layout: ref_doc
---

## ![](/assets/icons/spec-function.svg)bind() {#bind}
{:.spec}

```typescript
(propertyName?: string, defaultValue?: any): Binding
```
{:.declarationspec}
Returns a new binding, which can be used as a component preset (see [`Component.with`](./Component#Component:with)) to update components dynamically with the value of an observed property on the composite object.


The property name is specified in the first argument. Nested properties are allowed (e.g. `foo.bar`), but only the highest level property will be observed. Hence, changes to nested properties may not be reflected in bound values unless a change event is emitted on the highest level property.


Mapped objects in a [`ManagedMap`](./ManagedMap) can be bound using a `#` prefix for keys (e.g. `map.#key`).

A [`ManagedMap`](./ManagedMap) can be bound as a plain object using a `#` nested property (e.g. `map.#`).

Properties of all objects in a [`ManagedList`](./ManagedList) can be bound (as an array) using a `*` prefix for the nested property (e.g. `list.*foo`).

A [`ManagedList`](./ManagedList) can be bound as a plain array using a `*` nested property (e.g. `list.*`).


The property name may be appended with a `|` (pipe) character and a *filter* name: see [`Binding.addFilter`](./Binding#Binding:addFilter) for available filters. Multiple filters may be chained together if their names are separated with more pipe characters.


For convenience, `!property` is automatically rewritten as `property|!` to negate property values.


A default value may also be specified. This value is used when the bound value itself is undefined.

