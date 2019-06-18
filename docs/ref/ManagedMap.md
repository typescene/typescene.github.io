---
title: ManagedMap
nav: |

  #### About
  * [See also](#see_also)

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
  * [.propagateChildEvents()](#ManagedMap:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedMap:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedMap:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedMap:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedMap:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedMap:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedMap:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedMap:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedMap:onManagedStateDestroyingAsync)
layout: ref_doc
pageintro: |
  Managed maps contain indexed sets of references to other managed objects.
---

### Managed objects
This class is part of a group of _managed object_ classes. See [Understanding components](/docs/guides/components) for details.

#### See also {#see_also}
[`ManagedList`](./ManagedList), [`ManagedObject`](./ManagedObject), [`ManagedReference`](./ManagedReference).

## ![](/assets/icons/spec-class.svg)class ManagedMap {#ManagedMap}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedObject`](./ManagedObject)</code></pre>
{:.declarationspec}

Represents an _unordered_ list of managed objects that are indexed using unique key strings.

#### Child references

If a managed object property that is decorated with [`@managedChild`](./managedChild) gets assigned a `ManagedMap` instance, the parent-child relationship will extend to the items in this `ManagedMap`. In other words, the items in a `ManagedMap` that is itself a managed child object, will become managed children of the map itself.

In this case, removing objects from the `ManagedMap` object will destroy these objects. Adding objects to the `ManagedMap` will 'move' them from their current parent, if any.

#### Example
```typescript
let m = new ManagedMap();
let obj = ManagedRecord.create({ foo: "bar" });
m.set("baz", obj);
m.has("baz") // true
m.get("baz") // => obj
```


### Constructor
```typescript
<T extends ManagedObject = ManagedObject>(): ManagedMap<T>
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).propagateEvents() {#ManagedMap:propagateEvents}
{:.spec}

```typescript
(...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Propagate events from objects in this map by emitting them on the map object itself, optionally restricted to given types of events.



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
Stop newly referenced objects from becoming child objects even if this `ManagedMap` instance itself is held through a child reference (by a parent object); this can be used to automatically dereference objects when the parent object is destroyed.



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
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
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

