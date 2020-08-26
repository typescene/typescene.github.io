---
title: ManagedState
nav: |

  #### Declarations
  * [type ManagedState](#ManagedState)
layout: ref_doc
---

## ![](/assets/icons/spec-type.svg)type ManagedState {#ManagedState}
{:.spec}

```typescript
enum ManagedState {
    /** State for a managed object that has been destroyed */
    DESTROYED = 0,
    /** State for a managed object that has just been created */
    CREATED = 1,
    /** State for a managed object that is activating asynchronously */
    ACTIVATING = 2,
    /** State for a managed object that is currently active */
    ACTIVE = 3,
    /** State for a managed object that is deactivating asynchronously */
    DEACTIVATING = 4,
    /** State for a managed object that is currently inactive */
    INACTIVE = 5,
    /** State for a managed object that is being destroyed asynchronously */
    DESTROYING = 6
}
```
{:.declarationspec}
Enumeration of possible states for a managed object.

#### See Also
[`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState)

