---
title: CHANGE
nav: |

  #### Declarations
  * [CHANGE](#CHANGE)
layout: ref_doc
---

## ![](/assets/icons/spec-var.svg)CHANGE {#CHANGE}
{:.spec}

```typescript
Readonly<ManagedChangeEvent>
```
{:.declarationspec}
Alias of the [`ManagedChangeEvent.CHANGE`](./ManagedChangeEvent#ManagedChangeEvent:CHANGE) event.

This event (instance) can be emitted directly to avoid instantiating a new event object for each change event.
#### Example
```typescript
import { ManagedRecord, CHANGE } from "typescene";
let myObject = ManagedRecord.create({ foo: "bar" });
myObject.foo = "FOO";
myObject.emit(CHANGE);
```

