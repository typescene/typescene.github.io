---
title: ManagedRecordConstructor
nav: |

  #### Declarations
  * [type ManagedRecordConstructor](#ManagedRecordConstructor)
layout: doc_ref
---

## ![](/assets/icons/spec-type.svg)type ManagedRecordConstructor {#ManagedRecordConstructor}
{:.spec}

```typescript
type ManagedRecordConstructor<TObject extends ManagedRecord = ManagedRecord> = new (...args: never[]) => TObject;
```
{:.declarationspec}
Generic constructor type for ManagedRecord classes.

