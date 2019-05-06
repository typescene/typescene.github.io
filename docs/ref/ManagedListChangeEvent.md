---
title: ManagedListChangeEvent
nav: |

  #### Declarations
  * [**class ManagedListChangeEvent**](#ManagedListChangeEvent)
  * [.source](#ManagedListChangeEvent:source)

  #### Inherited
  * [.name](#ManagedListChangeEvent:name)
  * [.freeze()](#ManagedListChangeEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ManagedListChangeEvent {#ManagedListChangeEvent}
{:.spec}

Base type for events that are emitted when changes occur to a [`ManagedList`](./ManagedList) or [`ManagedMap`](./ManagedMap).

### Constructor
```typescript
(name: string, source: ManagedList<ManagedObject> | ManagedMap<ManagedObject>): ManagedListChangeEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).source {#ManagedListChangeEvent:source}
{:.spec}

```typescript
ManagedList<ManagedObject> | ManagedMap<ManagedObject>
```
{:.declarationspec}
The list or map that was changed.



## ![](/assets/icons/spec-property.svg).name {#ManagedListChangeEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#ManagedListChangeEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

