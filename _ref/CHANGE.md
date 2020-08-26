---
title: CHANGE
nav: |

  #### Declarations
  * [CHANGE](#CHANGE)
layout: doc_ref
---

## ![](/assets/icons/spec-var.svg)CHANGE {#CHANGE}
{:.spec}

```typescript
Readonly<ManagedChangeEvent>
```
{:.declarationspec}
Event that is emitted by [`ManagedObject.emitChange()`](./ManagedObject#ManagedObject:emitChange) without parameters; this is an instance of the [`ManagedChangeEvent`](./ManagedChangeEvent) class that can be widely reused and emitted on all managed objects, to signal that the internal state of the object has changed.

> **Note:** This event (instance) can be emitted directly using the [`ManagedObject.emitChange()`](./ManagedObject#ManagedObject:emitChange) method.

