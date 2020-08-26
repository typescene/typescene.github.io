---
title: UIModalController
nav: |

  #### Declarations
  * [**class UIModalController**](#UIModalController)
  * [.showModal()](#UIModalController:showModal)
  * [.closeModal()](#UIModalController:closeModal)
  * [.modal](#UIModalController:modal)
  * [.placement](#UIModalController:placement)
  * [.modalShadeOpacity](#UIModalController:modalShadeOpacity)

  #### Inherited
  * [.renderContext](#UIModalController:renderContext)
  * [.content](#UIModalController:content)
  * [.render()](#UIModalController:render)
  * [.isPresetComponent()](#UIModalController:isPresetComponent)
  * [.getParentComponent()](#UIModalController:getParentComponent)
  * [.getBoundParentComponent()](#UIModalController:getBoundParentComponent)
  * [.propagateComponentEvent()](#UIModalController:propagateComponentEvent)
  * [.managedId](#UIModalController:managedId)
  * [.managedState](#UIModalController:managedState)
  * [.getReferenceCount()](#UIModalController:getReferenceCount)
  * [.getManagedReferrers()](#UIModalController:getManagedReferrers)
  * [.getManagedParent()](#UIModalController:getManagedParent)
  * [.emit()](#UIModalController:emit)
  * [.emitChange()](#UIModalController:emitChange)
  * [.propagateChildEvents()](#UIModalController:propagateChildEvents)
  * [.activateManagedAsync()](#UIModalController:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIModalController:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIModalController:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIModalController:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIModalController:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIModalController:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIModalController:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIModalController:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIModalController.Presets**](#UIModalController:Presets)
  * [.modal](#UIModalController:Presets:modal)
  * [.placement](#UIModalController:Presets:placement)
  * [.modalShadeOpacity](#UIModalController:Presets:modalShadeOpacity)
layout: doc_ref
pageintro: |
  The <code>UIModalController</code> component listens for events on one child view component to hide or show another child view component.
---

## ![](/assets/icons/spec-class.svg)class UIModalController {#UIModalController}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIRenderableController`](./UIRenderableController)</code></pre>
{:.declarationspec}

Renderable wrapper for a single component that can be used to display another component as a modal view. The modal component is created immediately after the `ShowModal` event is emitted, and removed when the `CloseModal` event is emitted.

### Constructor
```typescript
(): UIModalController
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).showModal() {#UIModalController:showModal}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Show the (preset) modal component.



## ![](/assets/icons/spec-method.svg).closeModal() {#UIModalController:closeModal}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Remove the currently showing modal component, if any.



## ![](/assets/icons/spec-property.svg).modal {#UIModalController:modal}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
The current modal component to be displayed, as a managed child reference, or undefined if the modal component is currently not displayed.



## ![](/assets/icons/spec-property.svg).placement {#UIModalController:placement}
{:.spec}

```typescript
UIRenderPlacement
```
{:.declarationspec}
Modal view placement, defaults to Dialog.



## ![](/assets/icons/spec-property.svg).modalShadeOpacity {#UIModalController:modalShadeOpacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Modal backdrop opacity (0-1).



## ![](/assets/icons/spec-property.svg).renderContext {#UIModalController:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`UIRenderableController.renderContext`](./UIRenderableController#UIRenderableController:renderContext).



## ![](/assets/icons/spec-property.svg).content {#UIModalController:content}
{:.spec}

```typescript
TContent
```
{:.declarationspec}
Inherited from [`UIRenderableController.content`](./UIRenderableController#UIRenderableController:content).



## ![](/assets/icons/spec-method.svg).render() {#UIModalController:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIRenderableController.render`](./UIRenderableController#UIRenderableController:render).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIModalController:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIModalController:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIModalController:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIModalController:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIModalController:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIModalController:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIModalController:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIModalController:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIModalController:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIModalController:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#UIModalController:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIModalController:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIModalController:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIModalController:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIModalController:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIModalController:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIModalController:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIModalController:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIModalController:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIModalController:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIModalController.Presets {#UIModalController:Presets}
{:.spec}

UIModalController presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).modal {#UIModalController:Presets:modal}
{:.spec}

```typescript
UIRenderableConstructor
```
{:.declarationspec}
Modal component constructor (can also be passed as an additional argument to [`Component.with`](./Component#Component:with)).



## ![](/assets/icons/spec-property.svg).placement {#UIModalController:Presets:placement}
{:.spec}

```typescript
UIRenderPlacement
```
{:.declarationspec}
Modal view placement, defaults to Dialog.



## ![](/assets/icons/spec-property.svg).modalShadeOpacity {#UIModalController:Presets:modalShadeOpacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Modal backdrop opacity (0-1), defaults to 0.

