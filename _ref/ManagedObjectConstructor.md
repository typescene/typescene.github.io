---
title: ManagedObjectConstructor
nav: |

  #### Declarations
  * [type ManagedObjectConstructor](#ManagedObjectConstructor)
layout: doc_ref
---

## ![](/assets/icons/spec-type.svg)type ManagedObjectConstructor {#ManagedObjectConstructor}
{:.spec}

```typescript
type ManagedObjectConstructor<TObject extends ManagedObject = ManagedObject> = new (...args: never[]) => TObject;
```
{:.declarationspec}
Generic constructor type for ManagedObject classes.

