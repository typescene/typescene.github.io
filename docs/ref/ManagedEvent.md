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

Event that can be emitted on a managed object, list/map, or reference, to be handled by objects that reference the emitting object.

**Note:** Event instances may be frozen and reused for better performance. See [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

> **Note:** To learn more about components, managed objects, and events, refer to [this guide](/docs/guides/concepts/components).

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

