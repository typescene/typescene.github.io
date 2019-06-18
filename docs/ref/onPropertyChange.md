---
title: onPropertyChange
nav: |

  #### Declarations
  * [@onPropertyChange](#onPropertyChange)
layout: ref_doc
---

## ![](/assets/icons/spec-decorator.svg)@onPropertyChange {#onPropertyChange}
{:.spec}

```typescript
(...observedProperties: string[]): MethodDecorator
```
{:.declarationspec}
Observer method decorator: amend decorated method to turn it into a handler for changes to given property/ies.

**Note:** This decorator is intended for use on methods that are part of an observer class, see [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe).

#### Example
```typescript
class MyComponent extends Component {
  foo = "bar";
  bar = "baz";
  qux = "quux";

  // this property cannot be observed otherwise:
  ["#whut"] = "?";
}

class MyComponentObserver {
  constructor (public readonly c: MyComponent) { }

  // observe all properties in one go:
  @onPropertyChange("foo", "bar", "qux", "#whut")
  handleChange() {
    // ...
  }
}

observe(MyComponent, MyComponentObserver);
```

