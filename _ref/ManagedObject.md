---
title: ManagedObject
nav: |

  #### Declarations
  * [**class ManagedObject**](#ManagedObject)
  * [.addObserver()](#ManagedObject:addObserver)
  * [.addEventHandler()](#ManagedObject:addEventHandler)
  * [.managedId](#ManagedObject:managedId)
  * [.managedState](#ManagedObject:managedState)
  * [.getReferenceCount()](#ManagedObject:getReferenceCount)
  * [.getManagedReferrers()](#ManagedObject:getManagedReferrers)
  * [.getManagedParent()](#ManagedObject:getManagedParent)
  * [.emit()](#ManagedObject:emit)
  * [.emitChange()](#ManagedObject:emitChange)
  * [.propagateChildEvents()](#ManagedObject:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedObject:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedObject:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedObject:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedObject:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedObject:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedObject:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedObject:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedObject:onManagedStateDestroyingAsync)
layout: doc_ref
pageintro: |
  ManagedObject is the base class of most other framework classes, including Component.
---

## ![](/assets/icons/spec-class.svg)class ManagedObject {#ManagedObject}
{:.spec}

Base class for objects that have their own unique ID, life cycle including active/inactive and destroyed states, and managed references to other instances.

[**See also:** Concepts &gt; Components](/docs/concepts/components){:.block_link.doc}

### Constructor
```typescript
(): ManagedObject
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).addObserver() <span class="spec_tag">static</span> {#ManagedObject:addObserver}
{:.spec}

```typescript
<T extends ManagedObject>(this: ManagedObjectConstructor<T>, Observer: new (instance: T) => any): ManagedObjectConstructor<T>
```
{:.declarationspec}
Add an observer to _all instances_ of this class and derived classes. The observer class is instantiated for each instance of this (observed) class, and its methods are automatically called when an event or property change occurs on the observed instance.

**Note:** Observer classes may be nested inside of the observed class, which provides access to private and protected methods; see [`@observe`](./observe).



## ![](/assets/icons/spec-method.svg).addEventHandler() <span class="spec_tag">static</span> {#ManagedObject:addEventHandler}
{:.spec}

```typescript
<T extends ManagedObject>(this: ManagedObjectConstructor<T>, handler: (this: T, e: ManagedEvent) => void): ManagedObjectConstructor<T>
```
{:.declarationspec}
Attach an event handler function, to be invoked for all events that are emitted _on all instances_ of this class _and_ derived classes. Given function is invoked in the context (`this` variable) of the emitting object, with the emitted event as a single parameter.



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

**Note:** This property _cannot_ be observed directly. Observer classes (see [`addObserver`](#ManagedObject:addObserver)) should use methods such as `onActive` to observe lifecycle state.



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#ManagedObject:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Returns the current number of managed references that point to this object.

**Note:** Observers (see [`addObserver`](#ManagedObject:addObserver)) may use an `onReferenceCountChangeAsync` method to observe this value asynchronously.



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ManagedObject:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Returns an array of unique managed objects that contain managed references to this object (see [`@managed`](./managed) and [`@managedChild`](./managedChild) decorators).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ManagedObject:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Returns the managed object that contains a _managed child reference_ that points to this instance, if any (see [`@managedChild`](./managedChild)).

If a class argument is specified, parent references are recursed until a parent of given type is found.

The object itself is never returned, even if it contains a managed child reference that points to itself.

**Note:** The reference to the managed parent (but not its events) can be observed (see [`addObserver`](#ManagedObject:addObserver)) using an `onManagedParentChange` or `onManagedParentChangeAsync` method on the observer.



## ![](/assets/icons/spec-method.svg).emit() {#ManagedObject:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Emit an event. If an event constructor is given, a new instance is created using given constructor arguments (rest parameters). If an event name (string) is given, a new plain event is created with given name.

Use the [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze) method to freeze event instances before emitting.

See [`ManagedObject.addEventHandler`](./ManagedObject#ManagedObject:addEventHandler) and [`ManagedObject.addObserver`](./ManagedObject#ManagedObject:addObserver) (static methods to be used on subclasses of `ManagedObject`) for ways to handle events.

**Note:** There is a limit to the number of events that can be emitted recursively; avoid calling this method on the same object from _within_ an event handler.



## ![](/assets/icons/spec-method.svg).emitChange() {#ManagedObject:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Emit a change event (see [`ManagedChangeEvent`](./ManagedChangeEvent)), to signal that the internal state of the emitting object has changed. The `name` parameter is optional; if left out, the [`CHANGE`](./CHANGE) event (instance) is emitted directly.



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#ManagedObject:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
**[1]** Propagate events from managed child objects that are _referenced_ as properties of this object (see [`@managedChild`](./managedChild) decorator) by emitting the same events on this object itself.

If a function is specified, the function can be used to transform one event to one or more others, or stop propagation if the function returns undefined. The function is called with the event itself as its first argument, and the name of the property that references the emitting object as its second argument.

Core event such as [`ManagedCoreEvent.ACTIVE`](./ManagedCoreEvent#ManagedCoreEvent:ACTIVE) cannot be propagated in this way.

Events are no longer propagated after the object enters the 'destroyed' state.


**[2]** Propagate events from managed child objects that are _referenced_ as properties of this object (see [`@managedChild`](./managedChild) decorator) by emitting the same events on this object itself. Only propagated events that extend given event types are propagated.

Core event such as [`ManagedCoreEvent.ACTIVE`](./ManagedCoreEvent#ManagedCoreEvent:ACTIVE) will not be propagated in this way.

Events are no longer propagated after the object enters the 'destroyed' state.

**Note:** Calling this method a second time _replaces_ the current propagation rule/function.



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#ManagedObject:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Activate this object (i.e. change state to `ManagedState.ACTIVATING` and then to `ManagedState.ACTIVATED`); the [`onManagedStateActivatingAsync`](#ManagedObject:onManagedStateActivatingAsync) and [`onManagedStateActiveAsync`](#ManagedObject:onManagedStateActiveAsync) methods are called in this process.



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#ManagedObject:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Deactivate this object, if it is currently active (i.e. change state to `ManagedState.DEACTIVATING` and then to `ManagedState.DEACTIVATED`); the [`onManagedStateDeactivatingAsync`](#ManagedObject:onManagedStateDeactivatingAsync) and [`onManagedStateInactiveAsync`](#ManagedObject:onManagedStateInactiveAsync) methods are called in this process.



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#ManagedObject:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Destroy this managed object (i.e. change state to `ManagedState.DESTROYING` and then to `ManagedState.DESTROYED`, clear all managed references from and to this object, and destroy all managed children); the [`onManagedStateDestroyingAsync`](#ManagedObject:onManagedStateDestroyingAsync) method is called in the process.

**Note:** Managed child objects are automatically destroyed when [1] their parent's reference (decorated with [`@managedChild`](./managedChild)) is cleared or otherwise changed, or [2] the child object is removed from a managed list or map that is itself a managed child, or [3] when the parent object itself is destroyed.



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#ManagedObject:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked when changing state to 'active', can be overridden to perform any actions before activating.



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#ManagedObject:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked immediately after state has changed to 'active' and before any other state transitions, can be overridden.



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#ManagedObject:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked when changing state to 'inactive', can be overridden to perform any actions before deactivating.



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#ManagedObject:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked immediately after state has changed to 'inactive' and before any other state transitions, can be overridden.



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#ManagedObject:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked when changing state to 'destroyed', can be overridden to perform any actions first.

