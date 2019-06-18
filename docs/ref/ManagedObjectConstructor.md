---
title: ManagedObjectConstructor
nav: |

  #### Declarations
  * [type ManagedObjectConstructor](#ManagedObjectConstructor)
layout: ref_doc
---

## ![](/assets/icons/spec-type.svg)type ManagedObjectConstructor {#ManagedObjectConstructor}
{:.spec}

```typescript
type ManagedObjectConstructor<TObject> = (new (...args: any[]) => TObject) | (new (a: never, b: never, c: never, d: never, e: never, f: never) => TObject);
```
{:.declarationspec}
Generic constructor type for ManagedObject, matching both parameterless constructors and those with one or more required parameters.

**Note:** This type is used by Typescene internally and should not be used by your application code.

