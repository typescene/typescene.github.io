---
title: Binding
nav: |

  #### Declarations
  * [**class Binding**](#Binding)
  * [.isBinding()](#Binding:isBinding)
  * [.isComponentBinding()](#Binding:isComponentBinding)
  * [.id](#Binding:id)
  * [.propertyName](#Binding:propertyName)
  * [.bindings](#Binding:bindings)
  * [.parent](#Binding:parent)
  * [.ignoreUnbound](#Binding:ignoreUnbound)
  * [.addFilter()](#Binding:addFilter)
  * [.filters](#Binding:filters)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class Binding {#Binding}
{:.spec}

Component property binding base class.

Bindings should be created using the [`bind`](./bind) and [`bindf`](./bindf) functions, and used as a property of the object passed to [`Component.with`](./Component#Component:with).

### Constructor
```typescript
(source?: string, defaultValue?: any, ignoreUnbound?: boolean): Binding
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).isBinding() <span class="spec_tag">static</span> {#Binding:isBinding}
{:.spec}

```typescript
(value: any): value is Binding
```
{:.declarationspec}
Returns true if given value is an instance of `Binding`.



## ![](/assets/icons/spec-method.svg).isComponentBinding() {#Binding:isComponentBinding}
{:.spec}

```typescript
(): true
```
{:.declarationspec}
Method for duck typing, always returns true.



## ![](/assets/icons/spec-property.svg).id {#Binding:id}
{:.spec}

```typescript
string
```
{:.declarationspec}
Unique ID for this binding.



## ![](/assets/icons/spec-property.svg).propertyName {#Binding:propertyName}
{:.spec}

```typescript
string
```
{:.declarationspec}
Name of the property that should be observed for this binding (highest level only, does not include names of nested properties or keys).



## ![](/assets/icons/spec-property.svg).bindings {#Binding:bindings}
{:.spec}

```typescript
readonly Binding[]
```
{:.declarationspec}
Nested bindings, if any (e.g. for string format bindings, see [`bindf`](./bindf)).



## ![](/assets/icons/spec-property.svg).parent {#Binding:parent}
{:.spec}

```typescript
Binding
```
{:.declarationspec}
Parent binding, if any (e.g. for nested bindings in string format bindings).



## ![](/assets/icons/spec-property.svg).ignoreUnbound {#Binding:ignoreUnbound}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to ignore this binding when a component is added to a composite parent that has not been preset with this binding (to avoid the 'Binding not found for X' error), which can happen if a component is not added through [`@compose`](./compose) but as a regular child object using [`@managedChild`](./managedChild).



## ![](/assets/icons/spec-method.svg).addFilter() {#Binding:addFilter}
{:.spec}

```typescript
(fmt: string): this
```
{:.declarationspec}
Add a filter to this binding, which transforms values to a specific type or format. These can be chained by adding multiple filters in order of execution.

Filters can also be specified after the `|` (pipe) separator in string argument given to the `Binding` constructor, or [`bind`](./bind) function.

Available bindings include:

- `s`, `str`, or `string`: convert non-undefined values to a string using the `String(...)` function.

- `n`, `num`, or `number`: convert non-undefined values to a floating-point number using the `parseFloat(...)` function.

- `i`, `int`, or `integer`: convert values to whole numbers using the `Math.round(...)` function. Undefined values are converted to `0`.

- `dec(1)`, `dec(2)`, `dec(3)` etc.: convert values to decimal numbers as strings, with given number of fixed decimals.

- [`tt`](./tt) or `tt(type)`: translate values using the [`tt`](./tt) function (i18n).

- `?` or `!!`, `not?` or `!`: convert values to boolean, applying boolean NOT for `!` and `not?`, and NOT-NOT for `?` and `!!`.

- `or(...)`: use given string if value is undefined or a blank string; the string cannot contain a `}` character.

- `then(...)`: use given string if value is NOT undefined or a blank string, otherwise `undefined`; the string cannot contain a `}` character.

- `uniq`: leave only unique values in an array, and discard undefined values

- `blank` or `_`: output an empty string, but make the unfiltered value available for the #{...} pattern in [`bindf`](./bindf).



## ![](/assets/icons/spec-property.svg).filters <span class="spec_tag">static</span> {#Binding:filters}
{:.spec}

```typescript
{ [id: string]: (v: any, ...args: any[]) => any; }
```
{:.declarationspec}
List of applicable filters, new filters may be added here.



