---
title: managedChild
nav: |

  #### Declarations
  * [@managedChild](#managedChild)
layout: ref_doc
---

## ![](/assets/icons/spec-decorator.svg)@managedChild {#managedChild}
{:.spec}

```typescript
<T extends ManagedObject>(target: T, propertyKey: any): void
```
{:.declarationspec}
Managed object property decorator: amend decorated property to turn it into a managed child reference.


This asserts a parent-child dependency between the referrer and the referenced object(s), recursively extending to objects in referenced managed lists, maps, and reference instances:

- When the parent is destroyed, all children are also destroyed.

- When the decorated property is set to another object, the previously referenced object is destroyed.

- When the referenced object is assigned to another managed child reference (or list, map, or reference instance that is a child object), the decorated property is set to undefined.

- The child object may refer to its parent using the [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent) method, and observers can observe the managed parent reference using an `onManagedParentChange[Async]` method.

