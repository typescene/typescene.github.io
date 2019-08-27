# ManagedObject:pageintro
ManagedObject is the base class of most other framework classes, including Component.

---
# ManagedObject
> **Note:** To learn more about components and managed objects, refer to [this guide](/docs/guides/concepts/components).

---
# ManagedState
#### See Also
`ManagedObject.managedState`

---
# managed
> **Note:** To learn more about components and managed objects, refer to [this guide](/docs/guides/concepts/components).

---
# managedChild
> **Note:** To learn more about components and managed objects, refer to [this guide](/docs/guides/concepts/components).

---
# managedDependency
> **Note:** To learn more about components and managed objects, refer to [this guide](/docs/guides/concepts/components).

---
# ManagedParentChangeEvent
#### Example
The following example shows how this event can be observed on a component (or other managed object).

```typescript
class MyChildComponent extends Component { }

// observe the event on the above class:
MyChildComponent.observe(class {
  onManagedParentChange(e: ManagedParentChangeEvent) {
    if (e.parent instanceof MyParentComponent) {
      console.log("New parent: " + e.parent.foo);
    }
  }
})

class MyParentComponent extends Component {
  constructor (public readonly foo: string) {
    super();
  }

  // this is a managed child property so assigning
  // a component here triggers the event
  @managedChild
  foo = new MyChildComponent();
}

let c = new MyChildComponent();
let a = new MyParentComponent("a");
a.foo = c;  // => New parent: a
let b = new MyParentComponent("b");
b.foo = c;  // => New parent: b
```
