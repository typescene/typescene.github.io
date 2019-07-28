---
title: UIModalController
nav: |

  #### Declarations
  * [**class UIModalController**](#UIModalController)
  * [.modal](#UIModalController:modal)
  * [.placement](#UIModalController:placement)
  * [.modalShadeOpacity](#UIModalController:modalShadeOpacity)
  * [.modalShadeClickToClose](#UIModalController:modalShadeClickToClose)

  #### Inherited
  * [.renderContext](#UIModalController:renderContext)
  * [.content](#UIModalController:content)
  * [.render()](#UIModalController:render)
  * [.isPresetComponent()](#UIModalController:isPresetComponent)
  * [.getParentComponent()](#UIModalController:getParentComponent)
  * [.getCompositeParent()](#UIModalController:getCompositeParent)
  * [.propagateComponentEvent()](#UIModalController:propagateComponentEvent)
  * [.managedId](#UIModalController:managedId)
  * [.managedState](#UIModalController:managedState)
  * [.getReferenceCount()](#UIModalController:getReferenceCount)
  * [.getManagedReferrers()](#UIModalController:getManagedReferrers)
  * [.getManagedParent()](#UIModalController:getManagedParent)
  * [.emit()](#UIModalController:emit)
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
  * [.modalShadeClickToClose](#UIModalController:Presets:modalShadeClickToClose)
  * [.onShowModal](#UIModalController:Presets:onShowModal)
  * [.onCloseModal](#UIModalController:Presets:onCloseModal)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIModalController {#UIModalController}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIRenderableController`](./UIRenderableController)</code></pre>
{:.declarationspec}

Renderable wrapper for a single component that can be used to display another component as a modal view. The modal component is created immediately after the `ShowModal` event is emitted, and removed when the `CloseModal` event is emitted.

#### Example (preset)
```typescript
UIModalController.with(
  { placement: UIRenderPlacement.DROPDOWN },
  UIIconButton.with({
    onClick: "+ShowModal",
    icon: "expandDown"
  }),
  UIMenu.with({
    onSelectMenuItem: "selectMenuItem()",
    onBuild() {
      this.builder.clear();
      this.builder.addOption("one", "First option");
      this.builder.addOption("second", "Second option");
      this.builder.addSeparator();
      this.builder.addOption("settings", "Settings...");
      this.builder.setRevealTransition("down-fast");
    }
  })
)
```


### Constructor
```typescript
(content?: UIRenderable): UIModalController
```
{:.declarationspec}



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
Modal backdrop opacity (0-1), defaults to 0.



## ![](/assets/icons/spec-property.svg).modalShadeClickToClose {#UIModalController:modalShadeClickToClose}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if clicking outside the modal component should close it, defaults to true.



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
UIRenderable
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
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIModalController:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



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
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
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



## ![](/assets/icons/spec-property.svg).modalShadeClickToClose {#UIModalController:Presets:modalShadeClickToClose}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if clicking outside the modal component should close it, defaults to true.



## ![](/assets/icons/spec-property.svg).onShowModal {#UIModalController:Presets:onShowModal}
{:.spec}

```typescript
ComponentEventHandler<UIModalController, ComponentEvent>
```
{:.declarationspec}
Event handler that is invoked when the modal component is made visible.



## ![](/assets/icons/spec-property.svg).onCloseModal {#UIModalController:Presets:onCloseModal}
{:.spec}

```typescript
ComponentEventHandler<UIModalController, ComponentEvent>
```
{:.declarationspec}
Event handler that is invoked when the modal component is removed.

