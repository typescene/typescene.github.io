---
title: ManagedReference
nav: |

  #### About
  * [See also](#see_also)

  #### Declarations
  * [**class ManagedReference**](#ManagedReference)
  * [.propagateEvents()](#ManagedReference:propagateEvents)
  * [.restrict()](#ManagedReference:restrict)
  * [.get()](#ManagedReference:get)
  * [.target](#ManagedReference:target)
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
  * [.propagateChildEvents()](#ManagedReference:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedReference:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedReference:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedReference:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedReference:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedReference:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedReference:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedReference:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedReference:onManagedStateDestroyingAsync)
layout: ref_doc
pageintro: |
  Managed reference objects encapsulate references to other managed objects.
---

### Managed objects
This class is part of a group of _managed object_ classes. See [Working with managed objects](/docs/guides/managed-objects) for details.

#### See also {#see_also}
[`ManagedList`](./ManagedList), [`ManagedMap`](./ManagedMap), [`ManagedObject`](./ManagedObject).


## ![](/assets/icons/spec-class.svg)class ManagedReference {#ManagedReference}
{:.spec}

Independent reference to a managed object, list, map, or other managed reference.

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
**[1]** Propagate events from referenced objects by emitting them on the reference instance itself, optionally restricted to given types of events or a filter function


**[2]** Propagate events from referenced objects by emitting them on the reference instance itself, optionally restricted to given types of events or a filter function.



## ![](/assets/icons/spec-method.svg).restrict() {#ManagedReference:restrict}
{:.spec}

```typescript
<T extends ManagedObject>(classType: ManagedObjectConstructor<T>): ManagedReference<T>
```
{:.declarationspec}
Ensure that referenced object is an instance of given class (or a sub class), and restrict new references to instances of given class. Given class must be a sub class of [`ManagedObject`](./ManagedObject).



## ![](/assets/icons/spec-method.svg).get() {#ManagedReference:get}
{:.spec}

```typescript
(): T
```
{:.declarationspec}
Returns the referenced object, or undefined.



## ![](/assets/icons/spec-property.svg).target {#ManagedReference:target}
{:.spec}

```typescript
T
```
{:.declarationspec}
The referenced object, or undefined.



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
Set the current reference to given object, or managed list, map, or another reference. Equivalent to setting the [`target`](#ManagedReference:target) property on this instance.



## ![](/assets/icons/spec-method.svg).weakRef() {#ManagedReference:weakRef}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Stop newly referenced objects from becoming child objects even if this `ManagedReference` instance itself is held through a child reference (by a parent object); this can be used to automatically dereference objects when the parent object is destroyed.



## ![](/assets/icons/spec-method.svg).toJSON() {#ManagedReference:toJSON}
{:.spec}

```typescript
(): { "$ref": number; }
```
{:.declarationspec}
Returns the referenced object itself, or undefined (alias of `get()` method).



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
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
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

