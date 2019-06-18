---
title: observe
nav: |

  #### Declarations
  * [observe()](#observe)
layout: ref_doc
---

## ![](/assets/icons/spec-function.svg)observe() {#observe}
{:.spec}

```typescript
<T extends ManagedObject>(Target: ManagedObjectConstructor<T>, Observer: new (instance: T) => any): void
```
{:.declarationspec}
Implementation of [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe).

#### Example
```typescript
// most common method to observe a class:
class MyComponent extends Component {
  // ... properties and methods
}
MyComponent.observe(class {
  constructor (public readonly c: MyComponent) { }
  // ... observer methods
  // (cannot include decorators!)
})

// alternative:
class MyComponentObserver {
  constructor (public readonly c: MyComponent) { }
  // ... observer methods
  // (method decorators are OK here)
}
observe(MyComponent, MyComponentObserver);
```

