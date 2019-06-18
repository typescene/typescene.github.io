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
(propertyName?: string, defaultValue?: any, ignoreUnbound?: boolean): Binding
```
{:.declarationspec}
Returns a new binding, which can be used as a component preset (see [`Component.with`](./Component#Component:with)) to update components dynamically with the value of an observed property on the composite parent object, such as the `Activity` for a view, the [`Application`](./Application) for an activity, the [`ViewComponent`](./ViewComponent) for nested views, or any other class that has a property decorated with [`@compose`](./compose).


The bound property name is specified using the first argument. Nested properties are allowed (e.g. `foo.bar`), but _only_ the first property will be observed. Hence, changes to nested properties are not reflected automatically. To update bound values for nested properties, emit a [`ManagedChangeEvent`](./ManagedChangeEvent) on the highest level property.


Mapped objects in a [`ManagedMap`](./ManagedMap) can be bound using a `#` prefix for keys (e.g. `map.#key`).

A [`ManagedMap`](./ManagedMap) can be bound as a plain object using a `#` nested property (e.g. `map.#`).

Properties of all objects in a [`ManagedList`](./ManagedList) can be bound (as an array) using a `*` prefix for the nested property (e.g. `list.*foo`).

A [`ManagedList`](./ManagedList) can be bound as a plain array using a `*` nested property (e.g. `list.*`).


The property name may be appended with a `|` (pipe) character and a *filter* name: see [`Binding.addFilter`](./Binding#Binding:addFilter) for available filters. Multiple filters may be chained together if their names are separated with more pipe characters.


For convenience, `!property` is automatically rewritten as `property|!` to negate property values, and `!!property` to convert any value to a boolean value.


A default value may also be specified. This value is used when the bound value itself is undefined.


If the final parameter is set to true, the binding is ignored when the component is added to a composite parent that has not been preset with this binding (to avoid the 'Binding not found for X' error), which can happen if a component is not added through [`@compose`](./compose) but as a regular child object using [`@managedChild`](./managedChild).

#### Example
```typescript
// view code
export default UICell.with(
  UIRow.with(
    UILabel.with({
      hidden: bind("!showLabel"),
      text: bind("labelText")
    }),
    UIListController.with(
      { items: bind("myListItems") },
      // ...
    )
  )
)
```

#### See Also
[`bindf`](./bindf), [`Binding.addFilter`](./Binding#Binding:addFilter) (includes a list of available filters)

