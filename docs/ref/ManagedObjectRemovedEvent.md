---
title: ManagedObjectRemovedEvent
nav: |

  #### Declarations
  * [**class ManagedObjectRemovedEvent**](#ManagedObjectRemovedEvent)
  * [.key](#ManagedObjectRemovedEvent:key)
  * [.object](#ManagedObjectRemovedEvent:object)

  #### Inherited
  * [.source](#ManagedObjectRemovedEvent:source)
  * [.name](#ManagedObjectRemovedEvent:name)
  * [.freeze()](#ManagedObjectRemovedEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ManagedObjectRemovedEvent {#ManagedObjectRemovedEvent}
{:.spec}

Event that is emitted when an item is removed from a [`ManagedList`](./ManagedList).

### Constructor
```typescript
(source: ManagedList<ManagedObject> | ManagedMap<ManagedObject>, object: ManagedObject, key?: string): ManagedObjectRemovedEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).key {#ManagedObjectRemovedEvent:key}
{:.spec}

```typescript
string
```
{:.declarationspec}
The key that was removed, only for events emitted by [`ManagedMap`](./ManagedMap).



## ![](/assets/icons/spec-property.svg).object {#ManagedObjectRemovedEvent:object}
{:.spec}

```typescript
ManagedObject
```
{:.declarationspec}
The object that was removed.



## ![](/assets/icons/spec-property.svg).source {#ManagedObjectRemovedEvent:source}
{:.spec}

```typescript
ManagedList<ManagedObject> | ManagedMap<ManagedObject>
```
{:.declarationspec}
Inherited from [`ManagedListChangeEvent.source`](./ManagedListChangeEvent#ManagedListChangeEvent:source).



## ![](/assets/icons/spec-property.svg).name {#ManagedObjectRemovedEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#ManagedObjectRemovedEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

