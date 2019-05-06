---
title: ManagedList
nav: |

  #### About
  * [See also](#see_also)

  #### Declarations
  * [**class ManagedList**](#ManagedList)
  * [.propagateEvents()](#ManagedList:propagateEvents)
  * [.restrict()](#ManagedList:restrict)
  * [.count](#ManagedList:count)
  * [.add()](#ManagedList:add)
  * [.insert()](#ManagedList:insert)
  * [.remove()](#ManagedList:remove)
  * [.splice()](#ManagedList:splice)
  * [.replace()](#ManagedList:replace)
  * [.clear()](#ManagedList:clear)
  * [.includes()](#ManagedList:includes)
  * [.first()](#ManagedList:first)
  * [.last()](#ManagedList:last)
  * [.get()](#ManagedList:get)
  * [.find()](#ManagedList:find)
  * [.take()](#ManagedList:take)
  * [.takeLast()](#ManagedList:takeLast)
  * [.indexOf()](#ManagedList:indexOf)
  * [.toArray()](#ManagedList:toArray)
  * [.toJSON()](#ManagedList:toJSON)
  * [.some()](#ManagedList:some)
  * [.every()](#ManagedList:every)
  * [.forEach()](#ManagedList:forEach)
  * [.map()](#ManagedList:map)
  * [.pluck()](#ManagedList:pluck)
  * [.\_\_@iterator()](#ManagedList:__:iterator)
  * [.weakRef()](#ManagedList:weakRef)

  #### Inherited
  * [.managedId](#ManagedList:managedId)
  * [.managedState](#ManagedList:managedState)
  * [.getReferenceCount()](#ManagedList:getReferenceCount)
  * [.getManagedReferrers()](#ManagedList:getManagedReferrers)
  * [.getManagedParent()](#ManagedList:getManagedParent)
  * [.emit()](#ManagedList:emit)
  * [.propagateChildEvents()](#ManagedList:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedList:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedList:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedList:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedList:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedList:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedList:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedList:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedList:onManagedStateDestroyingAsync)
layout: ref_doc
pageintro: |
  Managed lists contain ordered sets of references to other managed objects.
---

### Managed objects
This class is part of a group of _managed object_ classes. See [Working with managed objects](/docs/guides/managed-objects) for details.

#### See also {#see_also}
[`ManagedMap`](./ManagedMap), [`ManagedObject`](./ManagedObject), [`ManagedReference`](./ManagedReference).


## ![](/assets/icons/spec-class.svg)class ManagedList {#ManagedList}
{:.spec}

Represents an ordered list of (unique) managed objects.

### Constructor
```typescript
<T extends ManagedObject = ManagedObject>(...objects: T[]): ManagedList<T>
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).propagateEvents() {#ManagedList:propagateEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
**[1]** Propagate events from all objects in this list by emitting them on the list object itself, optionally restricted to given types of events or a filter function


**[2]** Propagate events from all objects in this list by emitting them on the list object itself, optionally restricted to given types of events or a filter function.



## ![](/assets/icons/spec-method.svg).restrict() {#ManagedList:restrict}
{:.spec}

```typescript
<T extends ManagedObject>(classType: ManagedObjectConstructor<T>): ManagedList<T>
```
{:.declarationspec}
Ensure that objects in the list are all instances of given class (or a sub class), and restrict newly added objects in the list to instances of given class. Given class must be a sub class of [`ManagedObject`](./ManagedObject).



## ![](/assets/icons/spec-property.svg).count {#ManagedList:count}
{:.spec}

```typescript
number
```
{:.declarationspec}
The number of objects in this list.



## ![](/assets/icons/spec-method.svg).add() {#ManagedList:add}
{:.spec}

```typescript
(...targets: T[]): this
```
{:.declarationspec}
Add one or more objects (or managed lists or maps) to the end of this list.



## ![](/assets/icons/spec-method.svg).insert() {#ManagedList:insert}
{:.spec}

```typescript
(target: T, before?: T): this
```
{:.declarationspec}
Insert an object (or managed list or map) in this list.

- `target` — the object to be added to the list.

- `before` — the object before which the target object should be inserted; if undefined, the object is appended to the end of the list.



## ![](/assets/icons/spec-method.svg).remove() {#ManagedList:remove}
{:.spec}

```typescript
(target: T): this
```
{:.declarationspec}
Remove given object from this list.

**Note:** No error is thrown if the object was not included in the list at all.



## ![](/assets/icons/spec-method.svg).splice() {#ManagedList:splice}
{:.spec}

```typescript
[1]. (target?: T, stop?: T, ...objects: T[]): T[]
[2]. (target?: T, removeCount?: number, ...objects: T[]): T[]
```
{:.declarationspec}
**[1]** Remove objects from given target _until_ (but not including) second argument, and optionally insert given objects in their place. Returns the objects that were removed.


**[2]** Remove given object and following objects up to given number of objects, and optionally insert given objects in their place. Returns the objects that were removed.

**Note:** If `stop` is undefined, all objects after and including `target` are removed. If `target` is undefined, the objects are added to the back of the list.



## ![](/assets/icons/spec-method.svg).replace() {#ManagedList:replace}
{:.spec}

```typescript
(objects: Iterable<T>): this
```
{:.declarationspec}
Replace the objects in this list with the objects in given array or other list, using a series of calls to `remove()` and `insert()` and/or reordering objects that are already in the list.



## ![](/assets/icons/spec-method.svg).clear() {#ManagedList:clear}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Remove all objects from this list.



## ![](/assets/icons/spec-method.svg).includes() {#ManagedList:includes}
{:.spec}

```typescript
(target: T): boolean
```
{:.declarationspec}
Returns true if given object is currently included in this list.



## ![](/assets/icons/spec-method.svg).first() {#ManagedList:first}
{:.spec}

```typescript
(): T
```
{:.declarationspec}
Returns the first object in the list, or undefined if the list is empty.



## ![](/assets/icons/spec-method.svg).last() {#ManagedList:last}
{:.spec}

```typescript
(): T
```
{:.declarationspec}
Returns the last object in the list, or undefined if the list is empty.



## ![](/assets/icons/spec-method.svg).get() {#ManagedList:get}
{:.spec}

```typescript
(index: number): T
```
{:.declarationspec}
Returns the object at given position in the list (0 based).

**Note:** This operation is very inefficient on longer lists, do not recurse over all the objects in a list using this method; see [`ManagedList.forEach`](./ManagedList#ManagedList:forEach) instead, or use a `for (let object of ...)` statement.



## ![](/assets/icons/spec-method.svg).find() {#ManagedList:find}
{:.spec}

```typescript
(managedId: number): T
```
{:.declarationspec}
Returns the object with given ID (see [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId)).



## ![](/assets/icons/spec-method.svg).take() {#ManagedList:take}
{:.spec}

```typescript
(n: number, startingFrom?: T): T[]
```
{:.declarationspec}
Returns an array with given number of objects, counting from the start of the list or from the position of given object.

Returns an empty array if an object is specified but not found in the list.

- `n` — the number of objects to include in the result.

- `startingFrom` — the first object to be included in the result (optional).



## ![](/assets/icons/spec-method.svg).takeLast() {#ManagedList:takeLast}
{:.spec}

```typescript
(n: number, endingAt?: T): T[]
```
{:.declarationspec}
Returns an array with given number of objects taken _from the end_ of the list, or the same number of objects _up to and including_ given object.

Returns an empty array if an object is specified but not found in the list.

- `n` — the number of objects to include in the result.

- `endingAt` — the last object to be included in the result (optional).



## ![](/assets/icons/spec-method.svg).indexOf() {#ManagedList:indexOf}
{:.spec}

```typescript
(target: T): number
```
{:.declarationspec}
Returns the index of given object in this list (0 based), or -1 if the component is not included in the list at all.



## ![](/assets/icons/spec-method.svg).toArray() {#ManagedList:toArray}
{:.spec}

```typescript
(): T[]
```
{:.declarationspec}
Returns an array with all objects currently in this list.



## ![](/assets/icons/spec-method.svg).toJSON() {#ManagedList:toJSON}
{:.spec}

```typescript
(): any
```
{:.declarationspec}
Returns an array representation of this list (alias of [`toArray`](#ManagedList:toArray) method).



## ![](/assets/icons/spec-method.svg).some() {#ManagedList:some}
{:.spec}

```typescript
(callback: (target: T) => any): boolean
```
{:.declarationspec}
Returns true if given callback function returns a truthy value for at least one of the objects in this list.



## ![](/assets/icons/spec-method.svg).every() {#ManagedList:every}
{:.spec}

```typescript
(callback: (target: T) => any): boolean
```
{:.declarationspec}
Returns true if given callback function returns a truthy value for every object in this list (or if the list is empty).



## ![](/assets/icons/spec-method.svg).forEach() {#ManagedList:forEach}
{:.spec}

```typescript
(callback: (target: T) => void): void
```
{:.declarationspec}
Iterates over the objects in this list and invokes given callback for each object (alternative to for...of statement).

- `callback` — the function to be called, with a single object as the only argument.

**Note:** The behavior of this method is undefined if objects are inserted immediately after the current object, or if objects beyond the current object are removed by the callback function. Removing the _current_ object or any previous objects during the iteration is safe and will not disrupt the control flow.



## ![](/assets/icons/spec-method.svg).map() {#ManagedList:map}
{:.spec}

```typescript
<TResult>(callback: (target: T) => TResult): TResult[]
```
{:.declarationspec}
Iterates over the objects in this list and invokes given callback for each object, then returns an array with all callback return values.

- `callback` — the function to be called, with a single object as the only argument.

**Note:** The behavior of this method is undefined if the list is changed by the callback function.



## ![](/assets/icons/spec-method.svg).pluck() {#ManagedList:pluck}
{:.spec}

```typescript
<K extends keyof T>(propertyName: K): T[K][]
```
{:.declarationspec}
Returns an array with the values of given property for all objects in the list.



## ![](/assets/icons/spec-method.svg).\_\_@iterator() {#ManagedList:__:iterator}
{:.spec}

```typescript
(): Iterator<T>
```
{:.declarationspec}
Iterator symbol property to use managed list with 'for...of' statement.

**Note:** The behavior of the iterator is undefined if objects are inserted immediately after the current object, or if objects beyond the current object are removed. Removing the _current_ object or any previous objects during the iteration is safe and will not disrupt the control flow.



## ![](/assets/icons/spec-method.svg).weakRef() {#ManagedList:weakRef}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Stop newly referenced objects from becoming child objects even if this `ManagedList` instance itself is held through a child reference (by a parent object); this can be used to automatically dereference list items when the parent object is destroyed.



## ![](/assets/icons/spec-property.svg).managedId {#ManagedList:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#ManagedList:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#ManagedList:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ManagedList:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ManagedList:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#ManagedList:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#ManagedList:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#ManagedList:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#ManagedList:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#ManagedList:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#ManagedList:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#ManagedList:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#ManagedList:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#ManagedList:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#ManagedList:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

