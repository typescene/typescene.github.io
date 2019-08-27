---
title: observe
nav: |

  #### Declarations
  * [observe()](#observe)
layout: ref_doc
---

This function can be used to observe all instances of a component or list/map class. It can be used in three different ways:

1. As a decorator on a static (inner) class property; this is useful if the observer class needs to access private members of the observed target class.
2. As a function with two arguments: the observed target class, and the observer class.
3. As a function with a single argument: the observed target class. An anonymous class is generated automatically, and handlers can be added using static methods. See [`AnonymousObserver`](./AnonymousObserver).

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

## ![](/assets/icons/spec-function.svg)observe() {#observe}
{:.spec}

```typescript
[1]. <C extends ManagedObjectConstructor<ManagedObject>>(Target: C, propertyKey: string): void
[2]. <C extends ManagedObjectConstructor<ManagedObject>>(Target: C): Custom<InstanceType<C>>
[3]. <C extends ManagedObjectConstructor<ManagedObject>>(Target: C, Observer: new (instance: InstanceType<C>) => any): void
```
{:.declarationspec}
**[1]** Static property decorator: Add an observer to _all instances_ of this class and derived classes. A new observer (instance of the decorated observer class) is created for each instance, and observed properties are amended with dynamic setters to trigger observer methods.


**[2]** Add an observer to _all instances_ of the target class and derived classes, using an anonymous observer class that extends [`AnonymousObserver`](./AnonymousObserver) -- which has static methods for adding event handlers and property change handlers. A new observer instance is created for each target instance, and observed properties are amended with dynamic setters to trigger observer methods.

The observer class is analyzed when the target class is first instantiated. Observer instances are only created the first time an observed change or event occurs.


**[3]** Add given observer to _all instances_ of the target class and derived classes. A new observer (instance of given observer class) is created for each target instance, and observed properties are amended with dynamic setters to trigger observer methods.

Observer instances are only created the first time an observed change or event occurs.

If an observer class is specified (or decorated), this function finds all methods on the Observer class and turns the following methods into handlers for changes and/or events:

- Any method decorated with the [`@onPropertyChange`](./onPropertyChange) decorator. Methods are invoked with arguments for the current property value, an optional event reference (i.e. change event), and the observed property name.
- Any method decorated with the [`@onPropertyEvent`](./onPropertyEvent) decorator. Methods are invoked with arguments for the current property value, and an event reference (any type of event that occurred on the property/ies with names specified in the call to the decorator).
- Any method that takes the form `on[PropertyName]Change` where _propertyName_ is the name of the observed property (must have a lowercase first character); or `on_[propertyName]Change` where _propertyName_ is the exact name of the observed property. Methods are invoked with arguments for the current property value, and an optional event reference (i.e. change event).
- Any method that takes the form `on[EventName]`, which is invoked with a single [`ManagedEvent`](./ManagedEvent) argument. The event name ([`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name) property) must match exactly, with the exception of the `onChange` method which is invoked for all events that derive from [`ManagedChangeEvent`](./ManagedChangeEvent), and `onEvent` which is invoked for _all_ events. As a special case, the `onActive` method is called _immediately_ after instantiation if the observed object was already active.
- Any method as above with an `...Async` suffix, which is invoked asynchronously and should return a `Promise`. Asynchronous property change handlers are not invoked twice with the same value. If the value has been changed and then changed back before invoking the handler, no handler is called at all. Handlers can be rate limited using the [`@rateLimit`](./rateLimit) decorator.

Base classes of the observer class are NOT analyzed, i.e. extending an observer class does not work.

> **Note:** Since instances of classes that derive from the target class are _also_ observed, make sure that the observer does not depend on any functionality that may be overridden or fundamentally changed by any derived class.

