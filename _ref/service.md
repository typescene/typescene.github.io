---
title: service
nav: |

  #### Declarations
  * [@service](#service)
layout: doc_ref
---

## ![](/assets/icons/spec-decorator.svg)@service {#service}
{:.spec}

```typescript
(serviceName: string): PropertyDecorator
```
{:.declarationspec}
Property decorator: turns the decorated property of a managed object into a read-only reference to the last registered service with given name (case insensitive). See [`ManagedService`](./ManagedService).

The value of the decorated property becomes undefined when the service is destroyed, and updates immediately when a new service is registered with the same name.

Changes and events can be observed by an observer, but only after the property has been *read at least once*.

[**See also:** Concepts &gt; Services](/docs/concepts/services){:.block_link.doc}

