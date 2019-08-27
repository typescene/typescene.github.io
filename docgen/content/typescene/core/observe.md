# observe:top

This function can be used to observe all instances of a component or list/map class. It can be used in three different ways:

1. As a decorator on a static (inner) class property; this is useful if the observer class needs to access private members of the observed target class.
2. As a function with two arguments: the observed target class, and the observer class.
3. As a function with a single argument: the observed target class. An anonymous class is generated automatically, and handlers can be added using static methods. See `AnonymousObserver`.

#### Example
```typescript
// Option 1: use a decorator and an inner class (TypeScript)
class MyComponent extends Component {
  // ... properties and methods

  @observe
  static MyComponentObserver = class {
    constructor (public readonly c: MyComponent) { }
    // ... observer methods
  }
}

// Option 2: use two classes (TypeScript/JavaScript)
class MyComponent extends Component {
  // ... properties and methods
}
class MyComponentObserver {
  constructor (public readonly c: MyComponent) { }
  // ... observer methods
}
observe(MyComponent, MyComponentObserver);

// Option 3: implicitly generated class
// (mostly useful for JavaScript-only code)
class MyComponent extends Component {
  // ... properties and methods
}
observe(MyComponent)
  .addEventHandler((target, event) => {
    // ... handle any event
  })
  .addPropertyChangeHandler("foo", (target, value) => {
    // ... handle property changes
  });
```

---
# observe
If an observer class is specified (or decorated), this function finds all methods on the Observer class and turns the following methods into handlers for changes and/or events:

- Any method decorated with the `@onPropertyChange` decorator. Methods are invoked with arguments for the current property value, an optional event reference (i.e. change event), and the observed property name.
- Any method decorated with the `@onPropertyEvent` decorator. Methods are invoked with arguments for the current property value, and an event reference (any type of event that occurred on the property/ies with names specified in the call to the decorator).
- Any method that takes the form `on[PropertyName]Change` where _propertyName_ is the name of the observed property (must have a lowercase first character); or `on_[propertyName]Change` where _propertyName_ is the exact name of the observed property. Methods are invoked with arguments for the current property value, and an optional event reference (i.e. change event).
- Any method that takes the form `on[EventName]`, which is invoked with a single `ManagedEvent` argument. The event name (`ManagedEvent.name` property) must match exactly, with the exception of the `onChange` method which is invoked for all events that derive from `ManagedChangeEvent`, and `onEvent` which is invoked for _all_ events. As a special case, the `onActive` method is called _immediately_ after instantiation if the observed object was already active.
- Any method as above with an `...Async` suffix, which is invoked asynchronously and should return a `Promise`. Asynchronous property change handlers are not invoked twice with the same value. If the value has been changed and then changed back before invoking the handler, no handler is called at all. Handlers can be rate limited using the `@rateLimit` decorator.

Base classes of the observer class are NOT analyzed, i.e. extending an observer class does not work.

> **Note:** Since instances of classes that derive from the target class are _also_ observed, make sure that the observer does not depend on any functionality that may be overridden or fundamentally changed by any derived class.

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
