---
title: observe
nav: |

  #### Declarations
  * [@observe](#observe)
layout: doc_ref
---

## ![](/assets/icons/spec-decorator.svg)@observe {#observe}
{:.spec}

```typescript
<C extends ManagedObjectConstructor<ManagedObject>>(Target: C, propertyName: string | (() => Function)): void
```
{:.declarationspec}
Add the decorated observer to _all instances_ of the target class and derived classes. A new observer (instance of given observer class) is created for each target instance, and observed properties are amended with dynamic setters to trigger observer methods.

**Note:** See [`ManagedObject.addEventHandler`](./ManagedObject#ManagedObject:addEventHandler) for another way to handle events emitted directly by instances of a managed object class.

