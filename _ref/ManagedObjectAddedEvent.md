---
title: ManagedObjectAddedEvent
nav: |

  #### Declarations
  * [**class ManagedObjectAddedEvent**](#ManagedObjectAddedEvent)
  * [.key](#ManagedObjectAddedEvent:key)
  * [.object](#ManagedObjectAddedEvent:object)

  #### Inherited
  * [.source](#ManagedObjectAddedEvent:source)
  * [.name](#ManagedObjectAddedEvent:name)
  * [.freeze()](#ManagedObjectAddedEvent:freeze)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class ManagedObjectAddedEvent {#ManagedObjectAddedEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedListChangeEvent`](./ManagedListChangeEvent)</code></pre>
{:.declarationspec}

Event that is emitted when an item is added to a [`ManagedList`](./ManagedList) or [`ManagedMap`](./ManagedMap). The object contains a reference to the object that has been added to the list or map.

### Constructor
```typescript
(source: ManagedList<ManagedObject> | ManagedMap<ManagedObject>, object: ManagedObject, key?: string): ManagedObjectAddedEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).key {#ManagedObjectAddedEvent:key}
{:.spec}

```typescript
string
```
{:.declarationspec}
The key that was added, only for events emitted by [`ManagedMap`](./ManagedMap).



## ![](/assets/icons/spec-property.svg).object {#ManagedObjectAddedEvent:object}
{:.spec}

```typescript
ManagedObject
```
{:.declarationspec}
The object that was added.



## ![](/assets/icons/spec-property.svg).source {#ManagedObjectAddedEvent:source}
{:.spec}

```typescript
ManagedList<ManagedObject> | ManagedMap<ManagedObject>
```
{:.declarationspec}
Inherited from [`ManagedListChangeEvent.source`](./ManagedListChangeEvent#ManagedListChangeEvent:source).



## ![](/assets/icons/spec-property.svg).name {#ManagedObjectAddedEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#ManagedObjectAddedEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

