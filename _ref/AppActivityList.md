---
title: AppActivityList
nav: |

  #### Declarations
  * [**class AppActivityList**](#AppActivityList)
  * [.count](#AppActivityList:count)
  * [.add()](#AppActivityList:add)
  * [.remove()](#AppActivityList:remove)
  * [.clear()](#AppActivityList:clear)
  * [.get()](#AppActivityList:get)
  * [.includes()](#AppActivityList:includes)
  * [.toArray()](#AppActivityList:toArray)

  #### Inherited
  * [.isPresetComponent()](#AppActivityList:isPresetComponent)
  * [.getParentComponent()](#AppActivityList:getParentComponent)
  * [.getBoundParentComponent()](#AppActivityList:getBoundParentComponent)
  * [.propagateComponentEvent()](#AppActivityList:propagateComponentEvent)
  * [.managedId](#AppActivityList:managedId)
  * [.managedState](#AppActivityList:managedState)
  * [.getReferenceCount()](#AppActivityList:getReferenceCount)
  * [.getManagedReferrers()](#AppActivityList:getManagedReferrers)
  * [.getManagedParent()](#AppActivityList:getManagedParent)
  * [.emit()](#AppActivityList:emit)
  * [.emitChange()](#AppActivityList:emitChange)
  * [.propagateChildEvents()](#AppActivityList:propagateChildEvents)
  * [.activateManagedAsync()](#AppActivityList:activateManagedAsync)
  * [.deactivateManagedAsync()](#AppActivityList:deactivateManagedAsync)
  * [.destroyManagedAsync()](#AppActivityList:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#AppActivityList:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#AppActivityList:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#AppActivityList:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#AppActivityList:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#AppActivityList:onManagedStateDestroyingAsync)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class AppActivityList {#AppActivityList}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`Component`](./Component)</code></pre>
{:.declarationspec}

Component that encapsulates a list of child activities; emits change events when the list changes (propagated from [`ManagedList`](./ManagedList)) and when one of the activities becomes active or inactive.

**Note:** This class is used internally to represent 'preset' activities of an [`Application`](./Application) constructor. An instance of this class is available as [`Application.activities`](./Application#Application:activities).



### Constructor
```typescript
(): AppActivityList
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).count {#AppActivityList:count}
{:.spec}

```typescript
number
```
{:.declarationspec}
The number of activities currently in the list.



## ![](/assets/icons/spec-method.svg).add() {#AppActivityList:add}
{:.spec}

```typescript
(...activities: AppActivity[]): this
```
{:.declarationspec}
Add one or more child activities to the list.



## ![](/assets/icons/spec-method.svg).remove() {#AppActivityList:remove}
{:.spec}

```typescript
(activity: AppActivity): this
```
{:.declarationspec}
Remove given activity from the list. Does not throw an error if the activity was not included in the list.



## ![](/assets/icons/spec-method.svg).clear() {#AppActivityList:clear}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Clear the list by removing all activities in one go.



## ![](/assets/icons/spec-method.svg).get() {#AppActivityList:get}
{:.spec}

```typescript
(index: number): AppActivity
```
{:.declarationspec}
Returns the activity at given position in the list.



## ![](/assets/icons/spec-method.svg).includes() {#AppActivityList:includes}
{:.spec}

```typescript
(activity: AppActivity): boolean
```
{:.declarationspec}
Returns true if the list includes given activity.



## ![](/assets/icons/spec-method.svg).toArray() {#AppActivityList:toArray}
{:.spec}

```typescript
(): AppActivity[]
```
{:.declarationspec}
Returns an array with all activities currently in this list.



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#AppActivityList:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#AppActivityList:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#AppActivityList:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#AppActivityList:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#AppActivityList:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#AppActivityList:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#AppActivityList:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#AppActivityList:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#AppActivityList:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#AppActivityList:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#AppActivityList:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#AppActivityList:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#AppActivityList:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#AppActivityList:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#AppActivityList:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#AppActivityList:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#AppActivityList:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#AppActivityList:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#AppActivityList:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#AppActivityList:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

