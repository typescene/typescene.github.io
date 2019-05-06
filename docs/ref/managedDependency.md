---
title: managedDependency
nav: |

  #### Declarations
  * [@managedDependency](#managedDependency)
layout: ref_doc
---

## ![](/assets/icons/spec-decorator.svg)@managedDependency {#managedDependency}
{:.spec}

```typescript
<T extends ManagedObject>(target: T, propertyKey: any): void
```
{:.declarationspec}
Managed object property decorator: amend decorated property to turn it into a managed reference to any other managed object (or managed list, map, or reference instance). This allows observers to handle events emitted by the referenced object (see [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe)).


This asserts a reverse dependency between the referrer and the referenced object.

- The reference _must_ point to an instance of [`ManagedObject`](./ManagedObject), and cannot be set to `undefined`.

- When the referenced object is destroyed, the referrer is also destroyed.

- An object can contain multiple simultaneous dependencies, and there is no limit on the number of dependents of any referenced object.

