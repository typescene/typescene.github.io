---
title: compose
nav: |

  #### Declarations
  * [@compose](#compose)
layout: ref_doc
---

## ![](/assets/icons/spec-decorator.svg)@compose {#compose}
{:.spec}

```typescript
(constructor: ((new (...args: any[]) => Component) & (new () => Component)) | ((new (a: never, b: never, c: never, d: never, e: never, f: never) => Component) & (new () => Component)), ...include: ComponentConstructor<Component>[]): <T extends ManagedObject>(target: T, propertyKey: any) => void
```
{:.declarationspec}
Property decorator: turn the decorated property into an active sub component reference, with the containing object as its composite parent (i.e. the target object for all bindings on the component and child components). Given constructor is used to create a sub component instance *when the containing component is activated*, and sub components are destroyed immediately when the component is deactivated or destroyed.

In addition, bindings on all other component classes passed as rest parameters are added on this composite component. This may be necessary if further nested components are added dynamically (e.g. as nested children) and the component constructor itself does not include all of the same bindings.

> **Note:** For a better understanding of how components are used in Typescene applications, read [this guide](/docs/guides/components).

