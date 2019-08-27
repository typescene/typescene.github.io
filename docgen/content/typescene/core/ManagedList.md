# ManagedList:pageintro
Managed lists contain ordered sets of references to other managed objects.

---
# ManagedList:top
### Managed objects
This class is part of a group of _managed object_ classes. Read more about [Components](/docs/guides/concepts/components) for details.

#### See also {#see_also}
`ManagedMap`, `ManagedObject`, `ManagedReference`.

---
# ManagedList

#### Child references

If a managed object property that is decorated with `@managedChild` gets assigned a `ManagedList` instance, the parent-child relationship will extend to the items in this `ManagedList`. In other words, the items in a `ManagedList` that is itself a managed child object, will become managed children of the list itself.

In this case, removing objects from the `ManagedList` object will destroy these objects. Adding objects to the `ManagedList` will 'move' them from their current parent, if any.

#### Example
The following example shows how events that are emitted on list items can be observed from a parent component.

```typescript
class MyComponent extends Component {
  @managedChild
  myList = new ManagedList().propagateEvents();
}
MyComponent.observe(class {
  constructor (public readonly c: MyComponent) { }
  onMyListChange(e: ManagedEvent) {
    console.log(`Event: ${e.name}`);
    console.log(`Count: ${this.c.myList.count}`);
  }
})

let c = new MyComponent();
c.myList.add(new ManagedRecord());
c.myList.first().emit(CHANGE);
```
