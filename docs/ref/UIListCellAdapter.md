---
title: UIListCellAdapter
nav: |

  #### Declarations
  * [**class UIListCellAdapter**](#UIListCellAdapter)
  * [.renderContext](#UIListCellAdapter:renderContext)
  * [.formContext](#UIListCellAdapter:formContext)
  * [.object](#UIListCellAdapter:object)
  * [.cell](#UIListCellAdapter:cell)
  * [.onManagedStateActiveAsync()](#UIListCellAdapter:onManagedStateActiveAsync)
  * [.onManagedStateInactiveAsync()](#UIListCellAdapter:onManagedStateInactiveAsync)
  * [.selected](#UIListCellAdapter:selected)
  * [.hovered](#UIListCellAdapter:hovered)
  * [.requestFocus()](#UIListCellAdapter:requestFocus)
  * [.requestFocusNext()](#UIListCellAdapter:requestFocusNext)
  * [.requestFocusPrevious()](#UIListCellAdapter:requestFocusPrevious)
  * [.render()](#UIListCellAdapter:render)

  #### Inherited
  * [.isPresetComponent()](#UIListCellAdapter:isPresetComponent)
  * [.getParentComponent()](#UIListCellAdapter:getParentComponent)
  * [.getCompositeParent()](#UIListCellAdapter:getCompositeParent)
  * [.propagateComponentEvent()](#UIListCellAdapter:propagateComponentEvent)
  * [.managedId](#UIListCellAdapter:managedId)
  * [.managedState](#UIListCellAdapter:managedState)
  * [.getReferenceCount()](#UIListCellAdapter:getReferenceCount)
  * [.getManagedReferrers()](#UIListCellAdapter:getManagedReferrers)
  * [.getManagedParent()](#UIListCellAdapter:getManagedParent)
  * [.emit()](#UIListCellAdapter:emit)
  * [.propagateChildEvents()](#UIListCellAdapter:propagateChildEvents)
  * [.activateManagedAsync()](#UIListCellAdapter:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIListCellAdapter:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIListCellAdapter:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIListCellAdapter:onManagedStateActivatingAsync)
  * [.onManagedStateDeactivatingAsync()](#UIListCellAdapter:onManagedStateDeactivatingAsync)
  * [.onManagedStateDestroyingAsync()](#UIListCellAdapter:onManagedStateDestroyingAsync)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIListCellAdapter {#UIListCellAdapter}
{:.spec}

Component that can be used as an adapter to render items in a [`UIListController`](./UIListController). Instances are constructed using a single argument (a managed object from [`UIListController.items`](./UIListController#UIListController:items)), and are activated when rendered to create the cell component. The static `with` method takes the same arguments as [`UICell`](./UICell) itself along with additional properties to manage display of selected and focused cells. Encapsulated content can include bindings to the [`object`](#UIListCellAdapter:object) and [`selected`](#UIListCellAdapter:selected) properties.

### Constructor
```typescript
<TObject extends ManagedObject = ManagedObject>(object: TObject): UIListCellAdapter<TObject>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).renderContext {#UIListCellAdapter:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Application render context, propagated from the parent composite object.



## ![](/assets/icons/spec-property.svg).formContext {#UIListCellAdapter:formContext}
{:.spec}

```typescript
ManagedRecord
```
{:.declarationspec}
Form state context, propagated from the parent composite object.



## ![](/assets/icons/spec-property.svg).object {#UIListCellAdapter:object}
{:.spec}

```typescript
TObject
```
{:.declarationspec}
The encapsulated object.



## ![](/assets/icons/spec-property.svg).cell {#UIListCellAdapter:cell}
{:.spec}

```typescript
UICell
```
{:.declarationspec}
The encapsulated cell, as a child component; only created when the `UIListCellAdapter` is rendered.



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() {#UIListCellAdapter:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked immediately after state has changed to 'active' and before any other state transitions, to be overridden.



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() {#UIListCellAdapter:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked immediately after state has changed to 'inactive' and before any other state transitions, to be overridden.



## ![](/assets/icons/spec-property.svg).selected {#UIListCellAdapter:selected}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if the cell is currently selected (based on `Select` and `Deselect` events).



## ![](/assets/icons/spec-property.svg).hovered {#UIListCellAdapter:hovered}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if the cell is currently hovered over using the mouse cursor (based on `MouseEnter` and `MouseLeave` events).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIListCellAdapter:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Request input focus on the current cell.



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIListCellAdapter:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Request input focus for the next sibling cell.



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIListCellAdapter:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Request input focus for the previous sibling cell.



## ![](/assets/icons/spec-method.svg).render() {#UIListCellAdapter:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Trigger asynchronous rendering for this component, and all contained components (if any).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIListCellAdapter:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIListCellAdapter:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIListCellAdapter:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIListCellAdapter:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIListCellAdapter:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIListCellAdapter:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIListCellAdapter:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIListCellAdapter:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIListCellAdapter:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIListCellAdapter:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIListCellAdapter:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIListCellAdapter:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIListCellAdapter:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIListCellAdapter:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIListCellAdapter:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIListCellAdapter:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIListCellAdapter:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

