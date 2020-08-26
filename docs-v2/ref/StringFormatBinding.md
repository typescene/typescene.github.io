---
title: StringFormatBinding
nav: |

  #### Declarations
  * [**class StringFormatBinding**](#StringFormatBinding)
  * [.bindings](#StringFormatBinding:bindings)

  #### Inherited
  * [.isComponentBinding()](#StringFormatBinding:isComponentBinding)
  * [.id](#StringFormatBinding:id)
  * [.propertyName](#StringFormatBinding:propertyName)
  * [.parent](#StringFormatBinding:parent)
  * [.ignoreUnbound](#StringFormatBinding:ignoreUnbound)
  * [.addFilter()](#StringFormatBinding:addFilter)
  * [.match()](#StringFormatBinding:match)
  * [.nonMatch()](#StringFormatBinding:nonMatch)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class StringFormatBinding {#StringFormatBinding}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`Binding`](./Binding)</code></pre>
{:.declarationspec}

Represents a set of bindings (see [`Binding`](./Binding)) that are compiled into a single string value.

String format bindings should be created using the [`bindf`](./bindf) function.

### Constructor
```typescript
(text: any, ...rest: Binding[]): StringFormatBinding
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).bindings {#StringFormatBinding:bindings}
{:.spec}

```typescript
readonly Binding[]
```
{:.declarationspec}
Nested [`Binding`](./Binding) instances for all bindings in the format string.



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



## ![](/assets/icons/spec-property.svg).parent {#StringFormatBinding:parent}
{:.spec}

```typescript
Binding
```
{:.declarationspec}
Inherited from [`Binding.parent`](./Binding#Binding:parent).



## ![](/assets/icons/spec-property.svg).ignoreUnbound {#StringFormatBinding:ignoreUnbound}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`Binding.ignoreUnbound`](./Binding#Binding:ignoreUnbound).



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

