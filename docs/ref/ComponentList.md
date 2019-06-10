---
title: ComponentList
nav: |

  #### Declarations
  * [**class ComponentList**](#ComponentList)
  * [.propagateEvents()](#ComponentList:propagateEvents)
  * [.add()](#ComponentList:add)
  * [.clear()](#ComponentList:clear)
  * [.count](#ComponentList:count)
  * [.find()](#ComponentList:find)
  * [.first()](#ComponentList:first)
  * [.some()](#ComponentList:some)
  * [.every()](#ComponentList:every)
  * [.forEach()](#ComponentList:forEach)
  * [.includes()](#ComponentList:includes)
  * [.get()](#ComponentList:get)
  * [.indexOf()](#ComponentList:indexOf)
  * [.insert()](#ComponentList:insert)
  * [.last()](#ComponentList:last)
  * [.map()](#ComponentList:map)
  * [.pluck()](#ComponentList:pluck)
  * [.remove()](#ComponentList:remove)
  * [.replace()](#ComponentList:replace)
  * [.take()](#ComponentList:take)
  * [.takeLast()](#ComponentList:takeLast)
  * [.toArray()](#ComponentList:toArray)
  * [.toJSON()](#ComponentList:toJSON)

  #### Inherited
  * [.isPresetComponent()](#ComponentList:isPresetComponent)
  * [.getParentComponent()](#ComponentList:getParentComponent)
  * [.getCompositeParent()](#ComponentList:getCompositeParent)
  * [.propagateComponentEvent()](#ComponentList:propagateComponentEvent)
  * [.managedId](#ComponentList:managedId)
  * [.managedState](#ComponentList:managedState)
  * [.getReferenceCount()](#ComponentList:getReferenceCount)
  * [.getManagedReferrers()](#ComponentList:getManagedReferrers)
  * [.getManagedParent()](#ComponentList:getManagedParent)
  * [.emit()](#ComponentList:emit)
  * [.propagateChildEvents()](#ComponentList:propagateChildEvents)
  * [.activateManagedAsync()](#ComponentList:activateManagedAsync)
  * [.deactivateManagedAsync()](#ComponentList:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ComponentList:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ComponentList:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ComponentList:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ComponentList:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ComponentList:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ComponentList:onManagedStateDestroyingAsync)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ComponentList {#ComponentList}
{:.spec}

Component that encapsulates a list of child components.

### Constructor
```typescript
<T extends Component = Component>(): ComponentList<T>
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).propagateEvents() {#ComponentList:propagateEvents}
{:.spec}

```typescript
(...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Propagate component events for all components in the list. See [`ManagedList.propagateEvents`](./ManagedList#ManagedList:propagateEvents).



## ![](/assets/icons/spec-method.svg).add() {#ComponentList:add}
{:.spec}

```typescript
(...components: T[]): this
```
{:.declarationspec}
Add one or more child components to the list (see [`ManagedList.add`](./ManagedList#ManagedList:add)).



## ![](/assets/icons/spec-method.svg).clear() {#ComponentList:clear}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Clear the list (see [`ManagedList.clear`](./ManagedList#ManagedList:clear)).



## ![](/assets/icons/spec-property.svg).count {#ComponentList:count}
{:.spec}

```typescript
number
```
{:.declarationspec}
The number of components currently in the list (see [`ManagedList.count`](./ManagedList#ManagedList:count)).



## ![](/assets/icons/spec-method.svg).find() {#ComponentList:find}
{:.spec}

```typescript
(id: number): T
```
{:.declarationspec}
Returns the component with given ID (see [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId)).



## ![](/assets/icons/spec-method.svg).first() {#ComponentList:first}
{:.spec}

```typescript
(): T
```
{:.declarationspec}
Returns the first component in the list (see [`ManagedList.first`](./ManagedList#ManagedList:first)).



## ![](/assets/icons/spec-method.svg).some() {#ComponentList:some}
{:.spec}

```typescript
(callback: (target: T) => any): boolean
```
{:.declarationspec}
Returns true if given callback function returns a truthy value for at least one of the components in this list (see [`ManagedList.some`](./ManagedList#ManagedList:some)).



## ![](/assets/icons/spec-method.svg).every() {#ComponentList:every}
{:.spec}

```typescript
(callback: (target: T) => any): boolean
```
{:.declarationspec}
Returns true if given callback function returns a truthy value for every component in this list, or if the list is empty (see [`ManagedList.every`](./ManagedList#ManagedList:every)).



## ![](/assets/icons/spec-method.svg).forEach() {#ComponentList:forEach}
{:.spec}

```typescript
(callback: (target: T) => void): void
```
{:.declarationspec}
Iterates over the components in this list (see [`ManagedList.forEach`](./ManagedList#ManagedList:forEach)).



## ![](/assets/icons/spec-method.svg).includes() {#ComponentList:includes}
{:.spec}

```typescript
(component: T): boolean
```
{:.declarationspec}
Returns true if given component is currently included in this list (see [`ManagedList.includes`](./ManagedList#ManagedList:includes)).



## ![](/assets/icons/spec-method.svg).get() {#ComponentList:get}
{:.spec}

```typescript
(index: number): T
```
{:.declarationspec}
Returns the object at given position in the list (see [`ManagedList.get`](./ManagedList#ManagedList:get)).



## ![](/assets/icons/spec-method.svg).indexOf() {#ComponentList:indexOf}
{:.spec}

```typescript
(target: T): number
```
{:.declarationspec}
Returns the index of given object in this list (see [`ManagedList.indexOf`](./ManagedList#ManagedList:indexOf)).



## ![](/assets/icons/spec-method.svg).insert() {#ComponentList:insert}
{:.spec}

```typescript
(target: T, before?: T): this
```
{:.declarationspec}
Insert a component in this list (see [`ManagedList.insert`](./ManagedList#ManagedList:insert)).



## ![](/assets/icons/spec-method.svg).last() {#ComponentList:last}
{:.spec}

```typescript
(): T
```
{:.declarationspec}
Returns the last component in the list (see [`ManagedList.last`](./ManagedList#ManagedList:last)).



## ![](/assets/icons/spec-method.svg).map() {#ComponentList:map}
{:.spec}

```typescript
<TResult>(callback: (target: T) => TResult): TResult[]
```
{:.declarationspec}
Iterates over the objects in this list and returns an array with results (see [`ManagedList.map`](./ManagedList#ManagedList:map)).



## ![](/assets/icons/spec-method.svg).pluck() {#ComponentList:pluck}
{:.spec}

```typescript
<K extends keyof T>(propertyName: K): T[K][]
```
{:.declarationspec}
Returns an array with the values of given property for all components in the list (see [`ManagedList.pluck`](./ManagedList#ManagedList:pluck)).



## ![](/assets/icons/spec-method.svg).remove() {#ComponentList:remove}
{:.spec}

```typescript
(component: T): this
```
{:.declarationspec}
Remove given component from the list. Does not throw an error if the component was not included in the list (see [`ManagedList.remove`](./ManagedList#ManagedList:remove)).



## ![](/assets/icons/spec-method.svg).replace() {#ComponentList:replace}
{:.spec}

```typescript
(components: Iterable<T>): this
```
{:.declarationspec}
Replace the components in the list with given components (see [`ManagedList.replace`](./ManagedList#ManagedList:replace)).



## ![](/assets/icons/spec-method.svg).take() {#ComponentList:take}
{:.spec}

```typescript
(n: number, startingFrom?: T): T[]
```
{:.declarationspec}
Returns an array with given number of components taken from the list (see [`ManagedList.take`](./ManagedList#ManagedList:take)).



## ![](/assets/icons/spec-method.svg).takeLast() {#ComponentList:takeLast}
{:.spec}

```typescript
(n: number, endingAt?: T): T[]
```
{:.declarationspec}
Returns an array with given number of components taken from the list (see [`ManagedList.takeLast`](./ManagedList#ManagedList:takeLast)).



## ![](/assets/icons/spec-method.svg).toArray() {#ComponentList:toArray}
{:.spec}

```typescript
(): T[]
```
{:.declarationspec}
Returns an array with all components currently in this list (see [`ManagedList.toArray`](./ManagedList#ManagedList:toArray)).



## ![](/assets/icons/spec-method.svg).toJSON() {#ComponentList:toJSON}
{:.spec}

```typescript
(): any
```
{:.declarationspec}
Returns an array representation of this list (alias of [`toArray`](#ComponentList:toArray) method).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#ComponentList:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#ComponentList:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#ComponentList:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#ComponentList:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#ComponentList:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#ComponentList:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#ComponentList:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ComponentList:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ComponentList:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#ComponentList:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#ComponentList:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#ComponentList:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#ComponentList:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#ComponentList:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#ComponentList:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#ComponentList:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#ComponentList:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#ComponentList:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#ComponentList:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

