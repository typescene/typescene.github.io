---
title: observe
nav: |

  #### Declarations
  * [observe()](#observe)
layout: ref_doc
---

## ![](/assets/icons/spec-function.svg)observe() {#observe}
{:.spec}

```typescript
<T extends ManagedObject>(Target: ManagedObjectConstructor<T>, Observer: new (instance: T) => any): void
```
{:.declarationspec}
Implementation of [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe).

