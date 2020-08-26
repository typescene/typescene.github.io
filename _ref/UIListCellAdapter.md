---
title: UIListCellAdapter
nav: |

  #### Declarations
  * [**class UIListCellAdapter**](#UIListCellAdapter)
  * [.object](#UIListCellAdapter:object)
  * [.value](#UIListCellAdapter:value)
  * [.propagateComponentEvent()](#UIListCellAdapter:propagateComponentEvent)
  * [.selected](#UIListCellAdapter:selected)
  * [.hovered](#UIListCellAdapter:hovered)
  * [.requestFocus()](#UIListCellAdapter:requestFocus)
  * [.requestFocusNext()](#UIListCellAdapter:requestFocusNext)
  * [.requestFocusPrevious()](#UIListCellAdapter:requestFocusPrevious)

  #### Inherited
  * [.renderContext](#UIListCellAdapter:renderContext)
  * [.content](#UIListCellAdapter:content)
  * [.render()](#UIListCellAdapter:render)
  * [.isPresetComponent()](#UIListCellAdapter:isPresetComponent)
  * [.getParentComponent()](#UIListCellAdapter:getParentComponent)
  * [.getBoundParentComponent()](#UIListCellAdapter:getBoundParentComponent)
  * [.managedId](#UIListCellAdapter:managedId)
  * [.managedState](#UIListCellAdapter:managedState)
  * [.getReferenceCount()](#UIListCellAdapter:getReferenceCount)
  * [.getManagedReferrers()](#UIListCellAdapter:getManagedReferrers)
  * [.getManagedParent()](#UIListCellAdapter:getManagedParent)
  * [.emit()](#UIListCellAdapter:emit)
  * [.emitChange()](#UIListCellAdapter:emitChange)
  * [.propagateChildEvents()](#UIListCellAdapter:propagateChildEvents)
  * [.activateManagedAsync()](#UIListCellAdapter:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIListCellAdapter:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIListCellAdapter:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIListCellAdapter:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIListCellAdapter:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIListCellAdapter:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIListCellAdapter:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIListCellAdapter:onManagedStateDestroyingAsync)

  #### Namespaced
  * [UIListCellAdapter.Presets](#UIListCellAdapter:Presets)
layout: doc_ref
pageintro: |
  This component encapsulates a cell with a child view that may contain bindings to a list element.
  
---

## ![](/assets/icons/spec-class.svg)class UIListCellAdapter {#UIListCellAdapter}
{:.spec}


<pre markdown="span"><code markdown="span">`extends UIRenderableController<UICell>`</code></pre>
{:.declarationspec}

Component that can be used as an adapter to render items in a [`UIListController`](./UIListController). Instances are constructed using a single argument (a managed object from [`UIListController.items`](./UIListController#UIListController:items)), and encapsulate a [`UICell`](./UICell) component. The static `with` method takes the same arguments as [`UICell`](./UICell) itself along with additional properties to manage display of selected and focused cells. Encapsulated content can include bindings to the [`object`](#UIListCellAdapter:object), [`value`](#UIListCellAdapter:value), [`selected`](#UIListCellAdapter:selected), and [`hovered`](#UIListCellAdapter:hovered) properties.

### Constructor
```typescript
<TObject extends ManagedObject = ManagedObject>(object: TObject): UIListCellAdapter<TObject>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).object {#UIListCellAdapter:object}
{:.spec}

```typescript
TObject
```
{:.declarationspec}
The encapsulated object.



## ![](/assets/icons/spec-property.svg).value {#UIListCellAdapter:value}
{:.spec}

```typescript
any
```
{:.declarationspec}
The intrinsic value of the encapsulated object (result of [`valueOf()`](./valueOf) called on the original object).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIListCellAdapter:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Create and emit a [`UIListCellAdapterEvent`](./UIListCellAdapterEvent) with given name and a reference to this component and its cell and object; see [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



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



## ![](/assets/icons/spec-property.svg).renderContext {#UIListCellAdapter:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`UIRenderableController.renderContext`](./UIRenderableController#UIRenderableController:renderContext).



## ![](/assets/icons/spec-property.svg).content {#UIListCellAdapter:content}
{:.spec}

```typescript
TContent
```
{:.declarationspec}
Inherited from [`UIRenderableController.content`](./UIRenderableController#UIRenderableController:content).



## ![](/assets/icons/spec-method.svg).render() {#UIListCellAdapter:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIRenderableController.render`](./UIRenderableController#UIRenderableController:render).



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
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIListCellAdapter:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



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
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
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



## ![](/assets/icons/spec-method.svg).emitChange() {#UIListCellAdapter:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



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



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIListCellAdapter:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIListCellAdapter:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIListCellAdapter:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIListCellAdapter:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-type.svg)UIListCellAdapter.Presets {#UIListCellAdapter:Presets}
{:.spec}

```typescript
type Presets = Omit<UICell.Presets, keyof EventPresets> & EventPresets;
```
{:.declarationspec}
UICell presets type, for use with [`Component.with`](./Component#Component:with).

