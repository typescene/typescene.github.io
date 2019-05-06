---
title: ManagedObject
nav: |

  #### Declarations
  * [**class ManagedObject**](#ManagedObject)
  * [.observe()](#ManagedObject:observe)
  * [.handle()](#ManagedObject:handle)
  * [.addGlobalClassInitializer()](#ManagedObject:addGlobalClassInitializer)
  * [.managedId](#ManagedObject:managedId)
  * [.managedState](#ManagedObject:managedState)
  * [.getReferenceCount()](#ManagedObject:getReferenceCount)
  * [.getManagedReferrers()](#ManagedObject:getManagedReferrers)
  * [.getManagedParent()](#ManagedObject:getManagedParent)
  * [.emit()](#ManagedObject:emit)
  * [.propagateChildEvents()](#ManagedObject:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedObject:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedObject:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedObject:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedObject:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedObject:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedObject:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedObject:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedObject:onManagedStateDestroyingAsync)
  * [.createManagedReferenceProperty()](#ManagedObject:createManagedReferenceProperty)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ManagedObject {#ManagedObject}
{:.spec}

Base class for objects that have their own unique ID, life cycle including active/inactive and destroyed states, and managed references to other instances.

### Constructor
```typescript
(): ManagedObject
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).observe() <span class="spec_tag">static</span> {#ManagedObject:observe}
{:.spec}

```typescript
<T extends ManagedObject, C extends ManagedObjectConstructor<T>>(this: C, Observer: new (instance: T) => any): C
```
{:.declarationspec}
Static method to be used on subclasses of `ManagedObject`: add an observer to _all instances_ of this class and derived classes. This amends properties of this class with dynamic setters to invoke a handler when any change or event occurs. A new observer (instance of the observer class) is created for each instance the first time an observed change occurs.


This function finds all methods on the observer class (but NOT on base classes, i.e. extending an observer class does not consider any methods on the original observer class) and turns the following methods into handlers for changes and/or events:

- Any method decorated with the [`@onPropertyChange`](./onPropertyChange) decorator. Methods are invoked with arguments for the current property value, an optional event reference (i.e. change event), and the observed property name.

- Any method decorated with the [`@onPropertyEvent`](./onPropertyEvent) decorator. Methods are invoked with arguments for the current property value, and an event reference (any type of event that occurred on the property/ies with names specified in the call to the decorator).

- Any method that takes the form `on[PropertyName]Change` where _propertyName_ is the name of the observed property (must have a lowercase first character); or `on_[propertyName]Change` where _propertyName_ is the exact name of the observed property. Methods are invoked with arguments for the current property value, and an optional event reference (i.e. change event).

- Any method that takes the form `on[EventName]`, which is invoked with a single [`ManagedEvent`](./ManagedEvent) argument. The event name ([`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name) property) must match exactly, with the exception of the `onChange` method which is invoked for all events that derive from [`ManagedChangeEvent`](./ManagedChangeEvent), and `onEvent` which is invoked for _all_ events. As a special case, the `onActive` method is called _immediately_ after instantiation if the observed object was already active.

- Any method as above with an `...Async` suffix, which is invoked asynchronously and should return a `Promise`. Asynchronous property change handlers are not invoked twice with the same value. If the value has been changed and then changed back before invoking the handler, no handler is called at all. Handlers can be rate limited using the [`@rateLimit`](./rateLimit) decorator.

**Note:** Since instances of classes that derive from the target class are _also_ observed, make sure that the observer does not depend on any functionality that may be overridden or fundamentally changed by any derived class.

**Note:** This function is available as [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe) (static) on observable classes. See also [`ManagedObject.handle`](./ManagedObject#ManagedObject:handle) for a simpler way to handle events emitted directly by instances of a managed object class.



## ![](/assets/icons/spec-method.svg).handle() <span class="spec_tag">static</span> {#ManagedObject:handle}
{:.spec}

```typescript
[1]. <T extends ManagedObject>(this: ManagedObjectConstructor<T>, handler: (this: T, e: ManagedEvent) => void): void
[2]. <T extends ManagedObject>(this: ManagedObjectConstructor<T>, handlers: { [eventName: string]: (this: T, e: ManagedEvent) => void; }): void
```
{:.declarationspec}
**[1]** Attach a fixed event handler for _all instances_ of a derived class.


**[2]** Attach event handlers for _all instances_ of a derived class. The event name ([`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name) property) is used to find an event handler in given object. See also [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe) for a more advanced way to observe events as well as property changes.



## ![](/assets/icons/spec-method.svg).addGlobalClassInitializer() <span class="spec_tag">static</span> {#ManagedObject:addGlobalClassInitializer}
{:.spec}

```typescript
<T>(f: () => void | T): void | T
```
{:.declarationspec}
Add a callback that is invoked by the constructor of this class, the first time an instance is created. The callback always runs only once. If an instance of this class has already been constructed, the callback is invoked immediately and its return value is returned.



## ![](/assets/icons/spec-property.svg).managedId {#ManagedObject:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Unique ID of this managed object (read only).



## ![](/assets/icons/spec-property.svg).managedState {#ManagedObject:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
The current lifecycle state of this managed object.

**Note:** This property is read-only. To change the state of a managed object (i.e. to move its lifecycle between active/inactive and destroyed states), use the [`activateManagedAsync`](#ManagedObject:activateManagedAsync), [`deactivateManagedAsync`](#ManagedObject:deactivateManagedAsync), and [`destroyManagedAsync`](#ManagedObject:destroyManagedAsync) methods. If any additional logic is required when moving between states, override the [`onManagedStateActivatingAsync`](#ManagedObject:onManagedStateActivatingAsync), [`onManagedStateActiveAsync`](#ManagedObject:onManagedStateActiveAsync), [`onManagedStateDeactivatingAsync`](#ManagedObject:onManagedStateDeactivatingAsync), [`onManagedStateInactiveAsync`](#ManagedObject:onManagedStateInactiveAsync) and/or [`onManagedStateDestroyingAsync`](#ManagedObject:onManagedStateDestroyingAsync) methods in any class that derives from `ManagedObject`.

**Note:** This property _cannot_ be observed directly. Observer classes (see [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe)) should use methods such as `onActive` to observe lifecycle state.



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#ManagedObject:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Returns the current number of managed references that point to this object.

**Note:** Observer classes (see [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe)) may use the `onReferenceCountChangeAsync` method to observe this value asynchronously.



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ManagedObject:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Returns an array of unique managed objects that contain managed references to this object (see [`@managed`](./managed), [`@managedChild`](./managedChild), [`@managedDependency`](./managedDependency), and [`@compose`](./compose) decorators).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ManagedObject:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
**[1]** Returns the managed object that contains a _managed child reference_ that points to this instance (see [`@managedChild`](./managedChild) and [`@compose`](./compose) decorators).

The object itself is never returned, even if it contains a managed child reference that points to itself.


**[2]** Returns the managed object that contains a _managed child reference_ that points to this instance (see [`@managedChild`](./managedChild) decorator). If a class argument is specified, parent references are recursed until a parent of given type is found.

The object itself is never returned, even if it contains a managed child reference that points to itself (or if parents recursively reference the object or each other).

**Note:** The reference to the managed parent (but not its events) can be observed by an observer class (see [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe)) using an `onManagedParentChange` or `onManagedParentChangeAsync` method.



## ![](/assets/icons/spec-method.svg).emit() {#ManagedObject:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Emit an event. If an event constructor is given, a new instance is created using given constructor arguments (rest parameters). If an event name (string) is given, a new default event instance is created with given name. This method may be overridden in derived classes to use a different default event class.

Use the [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze) method to freeze event instances before emitting.

See [`ManagedObject.handle`](./ManagedObject#ManagedObject:handle) and [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe) (static methods to be used on subclasses of `ManagedObject`) for ways to handle events.

**Note:** There is a limit to the number of events that can be emitted recursively; avoid calling this method on the same object from _within_ an event handler.



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#ManagedObject:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
**[1]** Propagate events from managed child objects that are _referenced_ as properties of this object (see [`@managedChild`](./managedChild) decorator) by emitting events on this object itself.

If a function is specified, the function is used to transform one event to one or more others, possibly including the same event, or stop propagation if the function returns undefined. The function will receive the event itself as its first argument, and the _name of the property_ that references the emitting object as its second argument.

The core Active, Inactive, Destroyed, and ManagedParentChange events cannot be propagated.


**[2]** Propagate events from managed child objects that are _referenced_ as properties of this object (see [`@managedChild`](./managedChild) decorator) by emitting events on this object itself. Only propagated events that extend given event types are propagated.

The core Active, Inactive, Destroyed, and ManagedParentChange events cannot be propagated.

**Note:** Calling this method a second time _replaces_ any existing propagation rule entirely.



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#ManagedObject:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Activate this managed object (i.e. change state to `ACTIVATING` and then to `ACTIVATED`).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#ManagedObject:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Deactivate this managed object, if it is currently active (i.e. change state to `DEACTIVATING` and then to `DEACTIVATED`).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#ManagedObject:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Destroy this managed object (i.e. change state to `DESTROYING` and then to [`DESTROYED`](./DESTROYED), clear all managed references from and to this object, and destroy all managed children).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#ManagedObject:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked when changing state to 'active', to be overridden.



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#ManagedObject:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked immediately after state has changed to 'active' and before any other state transitions, to be overridden.



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#ManagedObject:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked when changing state to 'inactive', to be overridden.



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#ManagedObject:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked immediately after state has changed to 'inactive' and before any other state transitions, to be overridden.



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#ManagedObject:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked when changing state to 'destroyed', to be overridden.



## ![](/assets/icons/spec-method.svg).createManagedReferenceProperty() <span class="spec_tag">static</span> {#ManagedObject:createManagedReferenceProperty}
{:.spec}

```typescript
<T extends ManagedObject>(object: T, propertyKey: keyof T, isChildReference?: boolean, isDependency?: boolean, preAssignHandler?: (this: T, target: ManagedObject) => void, eventHandler?: (this: T, event: ManagedEvent) => void, readonlyRef?: ManagedReference<...>): void
```
{:.declarationspec}
Amend given property (on object or prototype) to turn it into a managed reference property.

- `object` — the instance or prototype object in which to amend given property.

- `propertyKey` — the property to be amended.

- `isChildReference` — true if this reference should be a managed parent-child reference; automatically asserts a parent-child dependency between the referencing object and referenced object(s), recursively extending to objects in referenced managed lists, maps, and reference instances.

- `isDependency` — true if the containing object should be destroyed when a referenced object is destroyed.

- `preAssignHandler` — an optional handler that is invoked before a new reference is actually assigned, can be used to validate the target.

- `eventHandler` — an optional handler that is called when an event occurs on the currently referenced object.

- `readonlyRef` — optionally, a read-only managed reference object; when provided, the property will not be writable, and reading it results in the _target_ of the reference object.

**Returns:** the newly applied property descriptor.

