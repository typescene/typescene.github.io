---
title: ManagedEvent
nav: |

  #### Declarations
  * [**class ManagedEvent**](#ManagedEvent)
  * [.name](#ManagedEvent:name)
  * [.freeze()](#ManagedEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ManagedEvent {#ManagedEvent}
{:.spec}

Event that can be emitted on a managed object, list/map, or reference, to be received by any object that references it.

**Note:** Event instances may be frozen and reused for better performance. See [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

### Constructor
```typescript
(name?: string): ManagedEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).name {#ManagedEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Identifier for the type of this event.



## ![](/assets/icons/spec-method.svg).freeze() {#ManagedEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Freeze this object so that its properties cannot be modified, and the event can be reused for better performance.

