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
  * [.addFilter()](#Binding:addFilter)
  * [.match()](#Binding:match)
  * [.nonMatch()](#Binding:nonMatch)
  * [.and()](#Binding:and)
  * [.or()](#Binding:or)
  * [.debuggerLog()](#Binding:debuggerLog)

  #### Namespaced
  * [**Binding.Type**](#Binding:Type)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class Binding {#Binding}
{:.spec}

Component property binding base class.

Bindings should be created using the [`bind`](./bind) and [`bindf`](./bindf) functions, and used as a property of the object passed to [`Component.with`](./Component#Component:with).

### Constructor
```typescript
(source?: string, defaultValue?: any): Binding
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



## ![](/assets/icons/spec-method.svg).addFilter() {#Binding:addFilter}
{:.spec}

```typescript
(fmt: string): this
```
{:.declarationspec}
Add a filter to this binding, which transforms values to a specific type or format, optionally localized using the currently registered [`I18nService`](./I18nService). Filters can be chained by adding multiple filters in order of execution.

The argument may be any of the format placeholders that are available for [`strf`](./strf), except for comments and plural forms -- without the leading `%` sign or grouping `{` and `}`, e.g. `s`, `+8i`, `.5f`, `?`, and `local:date`.

**Note:** Filters can also be specified after the `|` (pipe) separator in string argument given to the `Binding` constructor, or [`bind`](./bind) function.



## ![](/assets/icons/spec-method.svg).match() {#Binding:match}
{:.spec}

```typescript
(...values: any[]): this
```
{:.declarationspec}
Add a filter to this binding to compare the bound value to the given value(s), the result is always either `true` (at least one match) or `false` (none match).



## ![](/assets/icons/spec-method.svg).nonMatch() {#Binding:nonMatch}
{:.spec}

```typescript
(...values: any[]): this
```
{:.declarationspec}
Add a filter to this binding to compare the bound value to the given value(s), the result is always either `true` (none match) or `false` (at least one match).



## ![](/assets/icons/spec-method.svg).and() {#Binding:and}
{:.spec}

```typescript
(source: string, defaultValue?: any): this
```
{:.declarationspec}
Add an 'and' term to this binding (i.e. logical and, like `&&` operator); the argument(s) are used to construct another binding using the [`bind()`](./bind) function.

**Note:** The combined binding can only be bound to a single component, e.g. within a list view cell, bindings targeting both the list element and the activity can **not** be combined using this method.



## ![](/assets/icons/spec-method.svg).or() {#Binding:or}
{:.spec}

```typescript
(source: string, defaultValue?: any): this
```
{:.declarationspec}
Add an 'or' term to this binding (i.e. logical or, like `||` operator); the argument(s) are used to construct another binding using the [`bind()`](./bind) function.

**Note:** The combined binding can only be bound to a single component, e.g. within a list view cell, bindings targeting both the list element and the activity can **not** be combined using this method.



## ![](/assets/icons/spec-method.svg).debuggerLog() {#Binding:debuggerLog}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Log a message to the console whenever the value of this binding changes, for debugging purposes.





---

## ![](/assets/icons/spec-interface.svg)Binding.Type {#Binding:Type}
{:.spec}

Binding type (duck typed).

