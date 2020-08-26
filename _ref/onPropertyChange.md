---
title: onPropertyChange
nav: |

  #### Declarations
  * [@onPropertyChange](#onPropertyChange)
layout: doc_ref
---

## ![](/assets/icons/spec-decorator.svg)@onPropertyChange {#onPropertyChange}
{:.spec}

```typescript
(...observedProperties: string[]): MethodDecorator
```
{:.declarationspec}
Observer method decorator: amend decorated method to turn it into a handler for changes to given property/ies.

**Note:** This decorator is intended for use on methods that are part of an observer class, see [`ManagedObject.addObserver`](./ManagedObject#ManagedObject:addObserver).

