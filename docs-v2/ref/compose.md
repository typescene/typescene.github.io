---
title: compose
nav: |

  #### Declarations
  * [compose()](#compose)
layout: ref_doc
---

## ![](/assets/icons/spec-function.svg)compose() {#compose}
{:.spec}

```typescript
[1]. <T extends ManagedObject>(target: T, propertyKey: any, constructor: ComponentConstructor<Component> & (new () => Component), ...include: ComponentConstructor<Component>[]): Composition
[2]. (constructor: ComponentConstructor<Component> & (new () => Component), ...include: ComponentConstructor<Component>[]): PropertyDecorator
```
{:.declarationspec}
**[1]** Add a sub component to _all instances_ of this class and derived classes, which is automatically created using given constructor when the instance itself is activated. The sub component is destroyed again when the instance is deactivated or destroyed.

This component will serve as the composite parent object of all sub (sub) components, i.e. the target object for all bindings.

Refer to 'Active composition' in the Typescene documentation for more details.

Bindings on all other component classes passed as rest parameters are added on this composite component as well. This may be necessary if further nested components will be added dynamically _after_ calling this method.


**[2]** Property decorator: Add a sub component to _all instances_ of this class and derived classes, on the decorated property.

> **Note:** For a better understanding of how components are used in Typescene applications, read [this guide](/docs/guides/concepts/components).

