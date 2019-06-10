---
title: ManagedRecord
nav: |

  #### Declarations
  * [**class ManagedRecord**](#ManagedRecord)
  * [.validate()](#ManagedRecord:validate)
  * [.getManagedReferrers()](#ManagedRecord:getManagedReferrers)
  * [.getReferrerRecords()](#ManagedRecord:getReferrerRecords)
  * [.getParentRecord()](#ManagedRecord:getParentRecord)
  * [.getNextSibling()](#ManagedRecord:getNextSibling)
  * [.getPreviousSibling()](#ManagedRecord:getPreviousSibling)

  #### Inherited
  * [.isPresetComponent()](#ManagedRecord:isPresetComponent)
  * [.getParentComponent()](#ManagedRecord:getParentComponent)
  * [.getCompositeParent()](#ManagedRecord:getCompositeParent)
  * [.propagateComponentEvent()](#ManagedRecord:propagateComponentEvent)
  * [.managedId](#ManagedRecord:managedId)
  * [.managedState](#ManagedRecord:managedState)
  * [.getReferenceCount()](#ManagedRecord:getReferenceCount)
  * [.getManagedParent()](#ManagedRecord:getManagedParent)
  * [.emit()](#ManagedRecord:emit)
  * [.propagateChildEvents()](#ManagedRecord:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedRecord:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedRecord:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedRecord:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedRecord:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedRecord:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedRecord:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedRecord:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedRecord:onManagedStateDestroyingAsync)

  #### Namespaced
  * [ManagedRecord.create](#ManagedRecord:create)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ManagedRecord {#ManagedRecord}
{:.spec}

Managed record base class. Represents data that is managed (as [`ManagedObject`](./ManagedObject)), with additional methods to managed inward references — especially useful for constructing the application model.

### Constructor
```typescript
(): ManagedRecord
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).validate() {#ManagedRecord:validate}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Validate the data represented by this record. To be overridden by specific record classes, which should also always call `super.validate()`. Multiple (nested) errors may be thrown using the [`ManagedRecordValidationError`](./ManagedRecordValidationError) constructor.



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ManagedRecord:getManagedReferrers}
{:.spec}

```typescript
<TResult extends ManagedObject = ManagedObject>(skipCoreObjects?: boolean, FilterByClass?: ManagedObjectConstructor<TResult>): TResult[]
```
{:.declarationspec}
Returns an array of unique managed objects that contain managed references to this object (see [`@managed`](./managed), [`@managedChild`](./managedChild), [`@managedDependency`](./managedDependency), and [`@compose`](./compose) decorators).

- `skipCoreObjects` — Set to true to include _referrers_ of (nested) lists, maps, and reference instances (i.e. 'core' objects), not those objects themselves.

- `FilterByClass` — If specified, results will only include instances of given class. Other referrers are _not_ inspected recursively.



## ![](/assets/icons/spec-method.svg).getReferrerRecords() {#ManagedRecord:getReferrerRecords}
{:.spec}

```typescript
<TResult extends ManagedRecord = ManagedRecord>(FilterByClass?: ManagedObjectConstructor<TResult>): TResult[]
```
{:.declarationspec}
Returns an array of unique records that contain managed references to this object (see [`@managed`](./managed), [`@managedChild`](./managedChild), [`@managedDependency`](./managedDependency), and [`@compose`](./compose) decorators). This includes records that refer directly to this object, as well as those that refer to managed list(s) or map(s) that contain this record.

- `FilterByClass` — If specified, results will only include instances of given class. Other referrers are _not_ inspected recursively.



## ![](/assets/icons/spec-method.svg).getParentRecord() {#ManagedRecord:getParentRecord}
{:.spec}

```typescript
[1]. (): ManagedRecord
[2]. <TParent extends ManagedRecord>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
**[1]** Returns the current parent record. See [`@managedChild`](./managedChild) decorator.


**[2]** Returns the current parent record. See [`@managedChild`](./managedChild) decorator.



## ![](/assets/icons/spec-method.svg).getNextSibling() {#ManagedRecord:getNextSibling}
{:.spec}

```typescript
(): ManagedRecord
```
{:.declarationspec}
Returns the next record in a parent list (i.e. a list that is a child object of another record).



## ![](/assets/icons/spec-method.svg).getPreviousSibling() {#ManagedRecord:getPreviousSibling}
{:.spec}

```typescript
(): any
```
{:.declarationspec}
Returns the previous record in a parent list (i.e. a list that is a child object of another record).



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
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#ManagedRecord:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



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



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ManagedRecord:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
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





---

## ![](/assets/icons/spec-function.svg)ManagedRecord.create {#ManagedRecord:create}
{:.spec}

```typescript
<T extends object>(properties?: T): ManagedRecord & { [p in keyof T]: T[p]; }
```
{:.declarationspec}
Create a new instance of `ManagedRecord` that contains given properties. All values are copied directly onto the new instance.

