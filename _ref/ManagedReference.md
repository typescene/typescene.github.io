---
title: ManagedReference
nav: |

  #### Declarations
  * [**class ManagedReference**](#ManagedReference)
  * [.propagateEvents()](#ManagedReference:propagateEvents)
  * [.restrict()](#ManagedReference:restrict)
  * [.get()](#ManagedReference:get)
  * [.clear()](#ManagedReference:clear)
  * [.set()](#ManagedReference:set)
  * [.weakRef()](#ManagedReference:weakRef)
  * [.toJSON()](#ManagedReference:toJSON)

  #### Inherited
  * [.managedId](#ManagedReference:managedId)
  * [.managedState](#ManagedReference:managedState)
  * [.getReferenceCount()](#ManagedReference:getReferenceCount)
  * [.getManagedReferrers()](#ManagedReference:getManagedReferrers)
  * [.getManagedParent()](#ManagedReference:getManagedParent)
  * [.emit()](#ManagedReference:emit)
  * [.emitChange()](#ManagedReference:emitChange)
  * [.propagateChildEvents()](#ManagedReference:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedReference:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedReference:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedReference:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedReference:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedReference:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedReference:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedReference:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedReference:onManagedStateDestroyingAsync)
layout: doc_ref
pageintro: |
  Managed reference objects encapsulate stand-alone references to other managed objects.
---

## ![](/assets/icons/spec-class.svg)class ManagedReference {#ManagedReference}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedObject`](./ManagedObject)</code></pre>
{:.declarationspec}

Independent reference to a managed object, list, map, or other managed reference. An instance of this class behaves in the same way as a managed reference _property_ of an instance of [`ManagedObject`](./ManagedObject).

### Constructor
```typescript
<T extends ManagedObject = ManagedObject>(target?: T): ManagedReference<T>
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).propagateEvents() {#ManagedReference:propagateEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
**[1]** Propagate events from referenced objects by emitting the same events on the reference instance itself.

If a function is specified, the function can be used to transform one event to one or more others, or stop propagation if the function returns undefined. The function is called with the event itself as its only argument.


**[2]** Propagate events from referenced objects by emitting the same events on the reference instance itself.

If one or more event classes are specified, only events that extend given event types are propagated.

**Note:** Calling this method a second time _replaces_ the current propagation rule/function.



## ![](/assets/icons/spec-method.svg).restrict() {#ManagedReference:restrict}
{:.spec}

```typescript
<T extends ManagedObject>(classType: ManagedObjectConstructor<T>): ManagedReference<T>
```
{:.declarationspec}
Ensure that referenced objects are instances of given class (or a sub class), both the current value and any new references set. Given class must be a sub class of [`ManagedObject`](./ManagedObject).



## ![](/assets/icons/spec-method.svg).get() {#ManagedReference:get}
{:.spec}

```typescript
(): T
```
{:.declarationspec}
Returns the referenced object, or undefined if none.



## ![](/assets/icons/spec-method.svg).clear() {#ManagedReference:clear}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Remove the current reference, if any.



## ![](/assets/icons/spec-method.svg).set() {#ManagedReference:set}
{:.spec}

```typescript
(target?: T): this
```
{:.declarationspec}
Set the current reference to given object, or managed list, map, or another reference. Equivalent to setting the `target` property on this instance.



## ![](/assets/icons/spec-method.svg).weakRef() {#ManagedReference:weakRef}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Stop newly referenced objects from becoming child objects _even if_ this `ManagedReference` instance itself is held through a child reference (by a parent object); this can be used to automatically dereference objects when the parent object is destroyed.



## ![](/assets/icons/spec-method.svg).toJSON() {#ManagedReference:toJSON}
{:.spec}

```typescript
(): { $ref: number; }
```
{:.declarationspec}
Returns the referenced object itself, or undefined (alias of [`get()`](#ManagedReference:get) method).



## ![](/assets/icons/spec-property.svg).managedId {#ManagedReference:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#ManagedReference:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#ManagedReference:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ManagedReference:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ManagedReference:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#ManagedReference:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#ManagedReference:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#ManagedReference:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#ManagedReference:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#ManagedReference:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#ManagedReference:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#ManagedReference:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#ManagedReference:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#ManagedReference:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#ManagedReference:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#ManagedReference:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

