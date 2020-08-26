---
title: managed
nav: |

  #### Declarations
  * [@managed](#managed)
layout: ref_doc
---

## ![](/assets/icons/spec-decorator.svg)@managed {#managed}
{:.spec}

```typescript
<T extends ManagedObject>(target: T, propertyKey: any): void
```
{:.declarationspec}
Managed object property decorator: amend decorated property to turn it into a managed reference to any other managed object (or managed list, map, or reference instance). This allows observers to handle events emitted by the referenced object (see [`observe()`](./observe)).


The decorated property immediately becomes undefined when the referenced object is destroyed (see [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState)).

> **Note:** To learn more about components and managed objects, refer to [this guide](/docs/guides/concepts/components).

