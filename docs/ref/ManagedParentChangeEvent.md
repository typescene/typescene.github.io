---
title: ManagedParentChangeEvent
nav: |

  #### Declarations
  * [**class ManagedParentChangeEvent**](#ManagedParentChangeEvent)
  * [.parent](#ManagedParentChangeEvent:parent)

  #### Inherited
  * [.name](#ManagedParentChangeEvent:name)
  * [.freeze()](#ManagedParentChangeEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ManagedParentChangeEvent {#ManagedParentChangeEvent}
{:.spec}

Event that is emitted when a managed object is assigned to a managed child reference property (see [`@managedChild`](./managedChild) decorator); the child object emits this event, with [`parent`](#ManagedParentChangeEvent:parent) set to the _new_ parent object.

### Constructor
```typescript
(parent: ManagedObject): ManagedParentChangeEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).parent {#ManagedParentChangeEvent:parent}
{:.spec}

```typescript
ManagedObject
```
{:.declarationspec}
The new parent object.



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

