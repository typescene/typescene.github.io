---
title: ManagedRecord
nav: |

  #### Declarations
  * [**class ManagedRecord**](#ManagedRecord)
  * [.create()](#ManagedRecord:create)
  * [.serialize()](#ManagedRecord:serialize)
  * [.getParentRecord()](#ManagedRecord:getParentRecord)
  * [.getNextSibling()](#ManagedRecord:getNextSibling)
  * [.getPreviousSibling()](#ManagedRecord:getPreviousSibling)
  * [.getReferrerRecords()](#ManagedRecord:getReferrerRecords)

  #### Inherited
  * [.isPresetComponent()](#ManagedRecord:isPresetComponent)
  * [.getParentComponent()](#ManagedRecord:getParentComponent)
  * [.getBoundParentComponent()](#ManagedRecord:getBoundParentComponent)
  * [.propagateComponentEvent()](#ManagedRecord:propagateComponentEvent)
  * [.managedId](#ManagedRecord:managedId)
  * [.managedState](#ManagedRecord:managedState)
  * [.getReferenceCount()](#ManagedRecord:getReferenceCount)
  * [.getManagedReferrers()](#ManagedRecord:getManagedReferrers)
  * [.getManagedParent()](#ManagedRecord:getManagedParent)
  * [.emit()](#ManagedRecord:emit)
  * [.emitChange()](#ManagedRecord:emitChange)
  * [.propagateChildEvents()](#ManagedRecord:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedRecord:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedRecord:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedRecord:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedRecord:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedRecord:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedRecord:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedRecord:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedRecord:onManagedStateDestroyingAsync)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class ManagedRecord {#ManagedRecord}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`Component`](./Component)</code></pre>
{:.declarationspec}

Managed record base class. Represents data that is managed (as [`ManagedObject`](./ManagedObject)), with additional methods to managed inward references — especially useful for constructing the application model.

### Constructor
```typescript
(): ManagedRecord
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).create() <span class="spec_tag">static</span> {#ManagedRecord:create}
{:.spec}

```typescript
<T extends object, TResult extends ManagedRecord>(this: new () => TResult, properties?: T): TResult & { [p in keyof T]: T[p]; }
```
{:.declarationspec}
Create a new instance of this class (a sub class of `ManagedRecord`), and copy given properties.



## ![](/assets/icons/spec-method.svg).serialize() {#ManagedRecord:serialize}
{:.spec}

```typescript
(): any
```
{:.declarationspec}
Serialize this record as a regular object, including all string, number, boolean, and undefined property values (except for properties that start with an underscore, and `managedId`). Also calls [`serialize`](#ManagedRecord:serialize) on all _child_ records (including those within lists and maps, but not regular arrays or objects, nor managed objects that are not referenced as child records).



## ![](/assets/icons/spec-method.svg).getParentRecord() {#ManagedRecord:getParentRecord}
{:.spec}

```typescript
<TParent extends ManagedRecord = ManagedRecord>(ParentClass?: ManagedRecordConstructor<TParent>): TParent
```
{:.declarationspec}
Returns the parent record (or parent's parent, etc.). If a class reference is specified, finds the nearest parent of given type. See [`@managedChild`](./managedChild) decorator.



## ![](/assets/icons/spec-method.svg).getNextSibling() {#ManagedRecord:getNextSibling}
{:.spec}

```typescript
<TResult = this>(): TResult
```
{:.declarationspec}
Returns the next record in a parent list (i.e. a list that is a child object of another record).



## ![](/assets/icons/spec-method.svg).getPreviousSibling() {#ManagedRecord:getPreviousSibling}
{:.spec}

```typescript
<TResult = this>(): TResult
```
{:.declarationspec}
Returns the previous record in a parent list (i.e. a list that is a child object of another record).



## ![](/assets/icons/spec-method.svg).getReferrerRecords() {#ManagedRecord:getReferrerRecords}
{:.spec}

```typescript
<TResult extends ManagedRecord = ManagedRecord>(FilterByClass?: ManagedRecordConstructor<TResult>): TResult[]
```
{:.declarationspec}
Returns an array of unique records that contain managed references to this object (see [`@managed`](./managed) and [`@managedChild`](./managedChild)). This includes records that refer directly to this object, as well as those that refer to managed list(s) or map(s) that contain this record.

- `FilterByClass` — If specified, results will only include instances of given class. Other referrers are _not_ inspected recursively.



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#ManagedRecord:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#ManagedRecord:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#ManagedRecord:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#ManagedRecord:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#ManagedRecord:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#ManagedRecord:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#ManagedRecord:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ManagedRecord:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ManagedRecord:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#ManagedRecord:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#ManagedRecord:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#ManagedRecord:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#ManagedRecord:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#ManagedRecord:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#ManagedRecord:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#ManagedRecord:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#ManagedRecord:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#ManagedRecord:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#ManagedRecord:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#ManagedRecord:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

