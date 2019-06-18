# observe
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

---
# onPropertyChange
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

---
# onPropertyEvent
#### Example
```typescript
class Person extends ManagedObject {
    constructor (public name: string) { }
    @managed spouse?: Person;
    @managed friends = new ManagedList<Person>()
        .propagateEvents();
}

class PersonObserver {
    constructor (public readonly person: Person) { }

    // handle ALL events emitted on .spouse and
    // .friends (which propagates list item events)
    @onPropertyEvent("spouse", "friends")
    handleEvent(_value: any, e: ManagedEvent) {
        if (e instanceof BirthdayEvent) {
            console.log(this.person.name +
                " wishes " + e.person.name +
                " a happy birthday");
        }
    }
}

observe(Person, PersonObserver);

class BirthdayEvent extends ManagedEvent {
    constructor(public readonly person: Person) {
        super("Birthday");
    }
}

let p1 = new Person("John");
let p2 = new Person("Judie");
let p3 = new Person("Trudy");
p1.spouse = p2;
p3.friends.add(p2);
p2.emit(new BirthdayEvent(p2));
```

---
# rateLimit
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

---
# shadowObservable
#### Example
```typescript
class MyComponent extends Component {
  @shadowObservable("_foo")
  get foo() { return this._foo || 0 }

  // running this method will trigger the observer's
  // onFooChange method even if it changes _foo:
  doSomething() {
    this._foo++;
  }

  private _foo?: number;
}
MyComponent.observe(class {
  constructor (public readonly c: MyComponent) { }
  onFooChange(v: number) {
    console.log("foo is now " + v);
  }
})

let c = new MyComponent();
c.foo  // 0
c.doSomething();
// => foo is now 1
c.foo  // 1
```
