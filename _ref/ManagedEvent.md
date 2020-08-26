---
title: ManagedEvent
nav: |

  #### Declarations
  * [**class ManagedEvent**](#ManagedEvent)
  * [.name](#ManagedEvent:name)
  * [.freeze()](#ManagedEvent:freeze)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class ManagedEvent {#ManagedEvent}
{:.spec}

Event that can be emitted on a managed object, component, list/map, or reference, and can be handled by observers or by objects that reference the emitting object.

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
Freeze this object so that its properties cannot be modified, and the event can be _reused_ to improve performance.

