---
title: ManagedMap
nav: |

  #### Declarations
  * [**class ManagedMap**](#ManagedMap)
  * [.propagateEvents()](#ManagedMap:propagateEvents)
  * [.restrict()](#ManagedMap:restrict)
  * [.get()](#ManagedMap:get)
  * [.has()](#ManagedMap:has)
  * [.unset()](#ManagedMap:unset)
  * [.set()](#ManagedMap:set)
  * [.remove()](#ManagedMap:remove)
  * [.clear()](#ManagedMap:clear)
  * [.objects()](#ManagedMap:objects)
  * [.keys()](#ManagedMap:keys)
  * [.forEach()](#ManagedMap:forEach)
  * [.includes()](#ManagedMap:includes)
  * [.toObject()](#ManagedMap:toObject)
  * [.toJSON()](#ManagedMap:toJSON)
  * [.weakRef()](#ManagedMap:weakRef)

  #### Inherited
  * [.managedId](#ManagedMap:managedId)
  * [.managedState](#ManagedMap:managedState)
  * [.getReferenceCount()](#ManagedMap:getReferenceCount)
  * [.getManagedReferrers()](#ManagedMap:getManagedReferrers)
  * [.getManagedParent()](#ManagedMap:getManagedParent)
  * [.emit()](#ManagedMap:emit)
  * [.emitChange()](#ManagedMap:emitChange)
  * [.propagateChildEvents()](#ManagedMap:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedMap:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedMap:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedMap:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedMap:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedMap:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedMap:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedMap:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedMap:onManagedStateDestroyingAsync)
layout: doc_ref
pageintro: |
  Managed maps contain indexed sets of references to other managed objects.
---

## ![](/assets/icons/spec-class.svg)class ManagedMap {#ManagedMap}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedObject`](./ManagedObject)</code></pre>
{:.declarationspec}

Represents an _unordered_ list of managed objects that are indexed using unique key strings.

[**See also:** Concepts &gt; Lists and maps](/docs/concepts/lists-maps){:.block_link.doc}

### Constructor
```typescript
<T extends ManagedObject = ManagedObject>(): ManagedMap<T>
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).propagateEvents() {#ManagedMap:propagateEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
**[1]** Propagate events from all objects in this map by emitting the same events on the map object itself.

If a function is specified, the function can be used to transform one event to one or more others, or stop propagation if the function returns undefined. The function is called with the event itself as its only argument.


**[2]** Propagate events from all objects in this map by emitting the same events on the map object itself.

If one or more event classes are specified, only events that extend given event types are propagated.

**Note:** Calling this method a second time _replaces_ the current propagation rule/function.



## ![](/assets/icons/spec-method.svg).restrict() {#ManagedMap:restrict}
{:.spec}

```typescript
<T extends ManagedObject>(classType: ManagedObjectConstructor<T>): ManagedMap<T>
```
{:.declarationspec}
Ensure that objects in this map are all instances of given class (or a sub class), and restrict newly mapped objects to instances of given class. Given class must be a sub class of [`ManagedObject`](./ManagedObject).



## ![](/assets/icons/spec-method.svg).get() {#ManagedMap:get}
{:.spec}

```typescript
(key: string): T
```
{:.declarationspec}
Returns the current object mapped to given key, if any.



## ![](/assets/icons/spec-method.svg).has() {#ManagedMap:has}
{:.spec}

```typescript
(key: string): boolean
```
{:.declarationspec}
Returns true if any object is currently mapped to given key.



## ![](/assets/icons/spec-method.svg).unset() {#ManagedMap:unset}
{:.spec}

```typescript
(key: string): void
```
{:.declarationspec}
Remove the mapping for given key.

**Note:** Does not throw an error if given key was not mapped to any object at all.



## ![](/assets/icons/spec-method.svg).set() {#ManagedMap:set}
{:.spec}

```typescript
(key: string, target?: T): void | this
```
{:.declarationspec}
Map given object (or managed list or map) to given key, removing the existing mapping between the same key and any other object, if any.

Objects may be mapped to multiple keys at the same time, unless the `ManagedMap` instance itself is a child object of a managed object or list (see [`@managedChild`](./managedChild) decorator).

- `key` — The key to be mapped to given object.

- `target` — The managed object (or list, or map) to be mapped to given key.



## ![](/assets/icons/spec-method.svg).remove() {#ManagedMap:remove}
{:.spec}

```typescript
(target: T): this
```
{:.declarationspec}
Remove given object from this map (same as calling `unset(...)` on all keys that refer to given object).



## ![](/assets/icons/spec-method.svg).clear() {#ManagedMap:clear}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Remove all objects from this map.



## ![](/assets/icons/spec-method.svg).objects() {#ManagedMap:objects}
{:.spec}

```typescript
(): T[]
```
{:.declarationspec}
Returns a list of all (unique) objects in this map.



## ![](/assets/icons/spec-method.svg).keys() {#ManagedMap:keys}
{:.spec}

```typescript
(): string[]
```
{:.declarationspec}
Returns a list of all keys in this map.



## ![](/assets/icons/spec-method.svg).forEach() {#ManagedMap:forEach}
{:.spec}

```typescript
(callback: (key: string, target: T) => void): void
```
{:.declarationspec}
Iterates over the keys in this list and invokes given callback for each key and object.

- `callback` — the function to be called, with a key and a single object as the only argument.

**Note:** The behavior of this method is undefined if objects are inserted by the callback function.



## ![](/assets/icons/spec-method.svg).includes() {#ManagedMap:includes}
{:.spec}

```typescript
(target: T): boolean
```
{:.declarationspec}
Returns true if given object is currently contained in this map.



## ![](/assets/icons/spec-method.svg).toObject() {#ManagedMap:toObject}
{:.spec}

```typescript
(): { [index: string]: T; }
```
{:.declarationspec}
Returns an object with properties for all keys and objects in this map.



## ![](/assets/icons/spec-method.svg).toJSON() {#ManagedMap:toJSON}
{:.spec}

```typescript
(): any
```
{:.declarationspec}
Returns an object representation of this map (alias of [`toObject`](#ManagedMap:toObject) method).



## ![](/assets/icons/spec-method.svg).weakRef() {#ManagedMap:weakRef}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Stop newly referenced objects from becoming child objects _even if_ this `ManagedMap` instance itself is held through a child reference (by a parent object); this can be used to automatically dereference objects when the parent object is destroyed.



## ![](/assets/icons/spec-property.svg).managedId {#ManagedMap:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#ManagedMap:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#ManagedMap:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ManagedMap:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ManagedMap:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#ManagedMap:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#ManagedMap:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#ManagedMap:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#ManagedMap:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#ManagedMap:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#ManagedMap:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#ManagedMap:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#ManagedMap:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#ManagedMap:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#ManagedMap:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#ManagedMap:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

