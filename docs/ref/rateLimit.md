---
title: rateLimit
nav: |

  #### Declarations
  * [@rateLimit](#rateLimit)
layout: ref_doc
---

## ![](/assets/icons/spec-decorator.svg)@rateLimit {#rateLimit}
{:.spec}

```typescript
(n: number): MethodDecorator
```
{:.declarationspec}
Observer method decorator: limit the decorated asynchronous observer method to be invoked only at a maximum frequency, determined by the given number of milliseconds.

**Note:** This decorator is intended for use on methods that are part of an observer class, see [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe).

#### Example
```typescript
class MyComponent extends Component {
  foo = "";
}

class MyComponentObserver {
  constructor (public readonly c: MyComponent) { }

  @rateLimit(100)
  async onFooChangeAsync() {
    console.log("foo changed: " + this.c.foo);
  }
}

observe(MyComponent, MyComponentObserver);

let c = new MyComponent();
c.foo = "bar";
setTimeout(() => { c.foo = "baz" }, 50);
// after 100ms => foo changed: baz
```

