# ManagedReference:pageintro
Managed records make for great application model base classes.

---
# ManagedRecord
#### Example 1
The following example shows how to create and manage custom record classes.

```typescript
class MyFooItem extends ManagedRecord {
  constructor (public readonly foo: string) {
    super();
  }
}

class MyModel extends ManagedRecord {
  @managedChild
  items = new ManagedList().restrict(MyFooItem);
}

let m = new MyModel();
m.items.add(new MyFooItem("foo"));
m.items.add(new MyFooItem("bar"));
m.items.first()!.getParentRecord()  // => m
m.items.first()!.getNextSibling()!.foo  // "bar"
```

#### Example 2
The following example shows how to create records without a custom class.

```typescript
let r = ManagedRecord.create({
  foo = "bar",
  x = "yz"
});
r.foo = "baz";
```

---
# ManagedRecordValidationError
#### See Also
`ManagedRecord.validate()`, `ManagedRecord.isValidationError()`

#### Example
```typescript
// class that extends some other class defined elsewhere
class MyRecord extends SomeOtherRecord {
  // this property is validated below:
  name?: string;

  validate() {
    // validate other fields first
    let errors: any[] = [];
    try { super.validate() }
    catch (err) { errors.push(err) }

    // validate own property:
    if (!this.name) {
      errors.push("Name cannot be left blank");
    }
    if (errors.length) {
      throw new ManagedRecordValidationError(...errors);
    }
  }
}
```
