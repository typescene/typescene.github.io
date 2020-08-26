---
title: service
nav: |

  #### Declarations
  * [service()](#service)
layout: ref_doc
---

## ![](/assets/icons/spec-function.svg)service() {#service}
{:.spec}

```typescript
[1]. (serviceName: string): PropertyDecorator
[2]. (serviceName: string, TargetClass: Function, propertyName: string): void
```
{:.declarationspec}
**[1]** Property decorator: turns the decorated property of a managed object into a read-only reference to the last registered service with given name (case insensitive). See [`ManagedService`](./ManagedService).


The value of the decorated property becomes undefined when the service is destroyed, and changes immediately when a new service is registered with the same name.


Changes and events can be observed by an observer, but _only after_ the property has been read at least once.


**[2]** Adds a property to the prototype of given class, to reference the last registered service with given name (case insensitive). See [`ManagedService`](./ManagedService).


The value of the property becomes undefined when the service is destroyed, and changes immediately when a new service is registered with the same name.

