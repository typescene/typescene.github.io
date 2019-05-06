---
title: onPropertyEvent
nav: |

  #### Declarations
  * [@onPropertyEvent](#onPropertyEvent)
layout: ref_doc
---

## ![](/assets/icons/spec-decorator.svg)@onPropertyEvent {#onPropertyEvent}
{:.spec}

```typescript
(...observedProperties: string[]): MethodDecorator
```
{:.declarationspec}
Observer method decorator: amend decorated method to turn it into a handler for events on managed objects that are referred to by given managed reference property/ies (decorated with [`@managed`](./managed), [`@managedChild`](./managedChild), [`@managedDependency`](./managedDependency), or [`@compose`](./compose)).

**Note:** This decorator is intended for use on methods that are part of an observer class, see [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe).

