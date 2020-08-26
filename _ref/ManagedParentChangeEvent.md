---
title: ManagedParentChangeEvent
nav: |

  #### Declarations
  * [**class ManagedParentChangeEvent**](#ManagedParentChangeEvent)
  * [.parent](#ManagedParentChangeEvent:parent)
  * [.propertyName](#ManagedParentChangeEvent:propertyName)

  #### Inherited
  * [.name](#ManagedParentChangeEvent:name)
  * [.freeze()](#ManagedParentChangeEvent:freeze)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class ManagedParentChangeEvent {#ManagedParentChangeEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedCoreEvent`](./ManagedCoreEvent)</code></pre>
{:.declarationspec}

Event that is emitted when a reference to a managed object is assigned to a managed child reference property (i.e. a property decorated with the [`@managedChild`](./managedChild) decorator); the child object emits this event, with [`parent`](#ManagedParentChangeEvent:parent) set to the _new_ parent object, and [`propertyName`](#ManagedParentChangeEvent:propertyName) set to the property name (only if the child object is _directly_ assigned to a property of the parent object).

### Constructor
```typescript
(parent: ManagedObject, propertyName?: string): ManagedParentChangeEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).parent {#ManagedParentChangeEvent:parent}
{:.spec}

```typescript
ManagedObject
```
{:.declarationspec}
The new parent object.



## ![](/assets/icons/spec-property.svg).propertyName {#ManagedParentChangeEvent:propertyName}
{:.spec}

```typescript
string
```
{:.declarationspec}
The name of the property that now references the child object (if any).



## ![](/assets/icons/spec-property.svg).name {#ManagedParentChangeEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#ManagedParentChangeEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

