---
title: StringFormatBinding
nav: |

  #### Declarations
  * [**class StringFormatBinding**](#StringFormatBinding)

  #### Inherited
  * [.isComponentBinding()](#StringFormatBinding:isComponentBinding)
  * [.id](#StringFormatBinding:id)
  * [.propertyName](#StringFormatBinding:propertyName)
  * [.bindings](#StringFormatBinding:bindings)
  * [.parent](#StringFormatBinding:parent)
  * [.addFilter()](#StringFormatBinding:addFilter)
  * [.match()](#StringFormatBinding:match)
  * [.nonMatch()](#StringFormatBinding:nonMatch)
  * [.and()](#StringFormatBinding:and)
  * [.or()](#StringFormatBinding:or)
  * [.debuggerLog()](#StringFormatBinding:debuggerLog)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class StringFormatBinding {#StringFormatBinding}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`Binding`](./Binding)</code></pre>
{:.declarationspec}

Represents a set of bindings (see [`Binding`](./Binding)) that are compiled into a single string value.

**Note:** Use the [`bindf`](./bindf) function to create instances of this class.

### Constructor
```typescript
(format: string, ...args: (string | Binding)[]): StringFormatBinding
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).isComponentBinding() {#StringFormatBinding:isComponentBinding}
{:.spec}

```typescript
(): true
```
{:.declarationspec}
Inherited from [`Binding.isComponentBinding`](./Binding#Binding:isComponentBinding).



## ![](/assets/icons/spec-property.svg).id {#StringFormatBinding:id}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`Binding.id`](./Binding#Binding:id).



## ![](/assets/icons/spec-property.svg).propertyName {#StringFormatBinding:propertyName}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`Binding.propertyName`](./Binding#Binding:propertyName).



## ![](/assets/icons/spec-property.svg).bindings {#StringFormatBinding:bindings}
{:.spec}

```typescript
readonly Binding[]
```
{:.declarationspec}
Inherited from [`Binding.bindings`](./Binding#Binding:bindings).



## ![](/assets/icons/spec-property.svg).parent {#StringFormatBinding:parent}
{:.spec}

```typescript
Binding
```
{:.declarationspec}
Inherited from [`Binding.parent`](./Binding#Binding:parent).



## ![](/assets/icons/spec-method.svg).addFilter() {#StringFormatBinding:addFilter}
{:.spec}

```typescript
(fmt: string): this
```
{:.declarationspec}
Inherited from [`Binding.addFilter`](./Binding#Binding:addFilter).



## ![](/assets/icons/spec-method.svg).match() {#StringFormatBinding:match}
{:.spec}

```typescript
(...values: any[]): this
```
{:.declarationspec}
Inherited from [`Binding.match`](./Binding#Binding:match).



## ![](/assets/icons/spec-method.svg).nonMatch() {#StringFormatBinding:nonMatch}
{:.spec}

```typescript
(...values: any[]): this
```
{:.declarationspec}
Inherited from [`Binding.nonMatch`](./Binding#Binding:nonMatch).



## ![](/assets/icons/spec-method.svg).and() {#StringFormatBinding:and}
{:.spec}

```typescript
(source: string, defaultValue?: any): this
```
{:.declarationspec}
Inherited from [`Binding.and`](./Binding#Binding:and).



## ![](/assets/icons/spec-method.svg).or() {#StringFormatBinding:or}
{:.spec}

```typescript
(source: string, defaultValue?: any): this
```
{:.declarationspec}
Inherited from [`Binding.or`](./Binding#Binding:or).



## ![](/assets/icons/spec-method.svg).debuggerLog() {#StringFormatBinding:debuggerLog}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Inherited from [`Binding.debuggerLog`](./Binding#Binding:debuggerLog).

