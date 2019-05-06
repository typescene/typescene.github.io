---
title: UIListController
nav: |

  #### Declarations
  * [**class UIListController**](#UIListController)
  * [.enableArrowKeyFocus](#UIListController:enableArrowKeyFocus)
  * [.items](#UIListController:items)
  * [.firstIndex](#UIListController:firstIndex)
  * [.maxItems](#UIListController:maxItems)
  * [.lastFocusedIndex](#UIListController:lastFocusedIndex)
  * [.getIndexOfComponent()](#UIListController:getIndexOfComponent)
  * [.restoreFocus()](#UIListController:restoreFocus)
  * [.focusPreviousItem()](#UIListController:focusPreviousItem)
  * [.focusNextItem()](#UIListController:focusNextItem)

  #### Inherited
  * [.renderContext](#UIListController:renderContext)
  * [.formContext](#UIListController:formContext)
  * [.content](#UIListController:content)
  * [.render()](#UIListController:render)
  * [.isPresetComponent()](#UIListController:isPresetComponent)
  * [.getParentComponent()](#UIListController:getParentComponent)
  * [.getCompositeParent()](#UIListController:getCompositeParent)
  * [.propagateComponentEvent()](#UIListController:propagateComponentEvent)
  * [.managedId](#UIListController:managedId)
  * [.managedState](#UIListController:managedState)
  * [.getReferenceCount()](#UIListController:getReferenceCount)
  * [.getManagedReferrers()](#UIListController:getManagedReferrers)
  * [.getManagedParent()](#UIListController:getManagedParent)
  * [.emit()](#UIListController:emit)
  * [.propagateChildEvents()](#UIListController:propagateChildEvents)
  * [.activateManagedAsync()](#UIListController:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIListController:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIListController:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIListController:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIListController:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIListController:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIListController:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIListController:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIListController.Presets**](#UIListController:Presets)
  * [.items](#UIListController:Presets:items)
  * [.enableArrowKeyFocus](#UIListController:Presets:enableArrowKeyFocus)
  * [.firstIndex](#UIListController:Presets:firstIndex)
  * [.maxItems](#UIListController:Presets:maxItems)
  * [.onListItemsChange](#UIListController:Presets:onListItemsChange)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIListController {#UIListController}
{:.spec}

Renderable wrapper that populates an encapsulated container with a given list of managed objects and a view adapter (component constructor).

### Constructor
```typescript
(container?: UIContainer): UIListController
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).enableArrowKeyFocus {#UIListController:enableArrowKeyFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to enable selection (focus movement) using up/down arrow keys.



## ![](/assets/icons/spec-property.svg).items {#UIListController:items}
{:.spec}

```typescript
ManagedList<ManagedObject>
```
{:.declarationspec}
List of objects, each object is used to construct one content component.



## ![](/assets/icons/spec-property.svg).firstIndex {#UIListController:firstIndex}
{:.spec}

```typescript
number
```
{:.declarationspec}
Index of first item to be shown in the list (for e.g. pagination, or sliding window positioning), defaults to 0.



## ![](/assets/icons/spec-property.svg).maxItems {#UIListController:maxItems}
{:.spec}

```typescript
number
```
{:.declarationspec}
Maximum number of items to be shown in the list (for e.g. pagination, or sliding window positioning), defaults to `undefined` to show all items.



## ![](/assets/icons/spec-property.svg).lastFocusedIndex {#UIListController:lastFocusedIndex}
{:.spec}

```typescript
number
```
{:.declarationspec}
Last focused index, if any.



## ![](/assets/icons/spec-method.svg).getIndexOfComponent() {#UIListController:getIndexOfComponent}
{:.spec}

```typescript
(component?: Component): number
```
{:.declarationspec}
Returns the list index of given component, or of the component that it is contained in; or returns -1 if given component is not found in the list.



## ![](/assets/icons/spec-method.svg).restoreFocus() {#UIListController:restoreFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Request input focus for the last focused list component, or the first item, if possible.



## ![](/assets/icons/spec-method.svg).focusPreviousItem() {#UIListController:focusPreviousItem}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Request input focus for the item before the currently focused item; returns true if such an item exists, false if the currently focused item is already the first item or there are no items in the list.



## ![](/assets/icons/spec-method.svg).focusNextItem() {#UIListController:focusNextItem}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Request input focus for the item after the currently focused item; returns true if such an item exists, false if the currently focused item is already the last item or if there are no items in the list.



## ![](/assets/icons/spec-property.svg).renderContext {#UIListController:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`UIRenderableController.renderContext`](./UIRenderableController#UIRenderableController:renderContext).



## ![](/assets/icons/spec-property.svg).formContext {#UIListController:formContext}
{:.spec}

```typescript
ManagedRecord
```
{:.declarationspec}
Inherited from [`UIRenderableController.formContext`](./UIRenderableController#UIRenderableController:formContext).



## ![](/assets/icons/spec-property.svg).content {#UIListController:content}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
Inherited from [`UIRenderableController.content`](./UIRenderableController#UIRenderableController:content).



## ![](/assets/icons/spec-method.svg).render() {#UIListController:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIRenderableController.render`](./UIRenderableController#UIRenderableController:render).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIListController:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIListController:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIListController:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIListController:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIListController:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIListController:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIListController:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIListController:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIListController:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIListController:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIListController:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIListController:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIListController:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIListController:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIListController:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIListController:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIListController:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIListController:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIListController:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIListController.Presets {#UIListController:Presets}
{:.spec}

UIListController presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).items {#UIListController:Presets:items}
{:.spec}

```typescript
Iterable<ManagedObject>
```
{:.declarationspec}
List of items: initial values, or a list binding.



## ![](/assets/icons/spec-property.svg).enableArrowKeyFocus {#UIListController:Presets:enableArrowKeyFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to enable selection (focus movement) using up/down arrow keys, defaults to true.



## ![](/assets/icons/spec-property.svg).firstIndex {#UIListController:Presets:firstIndex}
{:.spec}

```typescript
number
```
{:.declarationspec}
Index of first item to be shown in the list (for e.g. pagination, or sliding window positioning), defaults to 0.



## ![](/assets/icons/spec-property.svg).maxItems {#UIListController:Presets:maxItems}
{:.spec}

```typescript
number
```
{:.declarationspec}
Maximum number of items to be shown in the list (for e.g. pagination, or sliding window positioning), defaults to `undefined` to show all items.



## ![](/assets/icons/spec-property.svg).onListItemsChange {#UIListController:Presets:onListItemsChange}
{:.spec}

```typescript
ComponentEventHandler<UIListController, ComponentEvent>
```
{:.declarationspec}
Event handler for any change in displayed list items, and list initialization.

