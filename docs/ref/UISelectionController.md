---
title: UISelectionController
nav: |

  #### Declarations
  * [**class UISelectionController**](#UISelectionController)
  * [.selected](#UISelectionController:selected)

  #### Inherited
  * [.renderContext](#UISelectionController:renderContext)
  * [.content](#UISelectionController:content)
  * [.render()](#UISelectionController:render)
  * [.isPresetComponent()](#UISelectionController:isPresetComponent)
  * [.getParentComponent()](#UISelectionController:getParentComponent)
  * [.getCompositeParent()](#UISelectionController:getCompositeParent)
  * [.propagateComponentEvent()](#UISelectionController:propagateComponentEvent)
  * [.managedId](#UISelectionController:managedId)
  * [.managedState](#UISelectionController:managedState)
  * [.getReferenceCount()](#UISelectionController:getReferenceCount)
  * [.getManagedReferrers()](#UISelectionController:getManagedReferrers)
  * [.getManagedParent()](#UISelectionController:getManagedParent)
  * [.emit()](#UISelectionController:emit)
  * [.propagateChildEvents()](#UISelectionController:propagateChildEvents)
  * [.activateManagedAsync()](#UISelectionController:activateManagedAsync)
  * [.deactivateManagedAsync()](#UISelectionController:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UISelectionController:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UISelectionController:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UISelectionController:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UISelectionController:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UISelectionController:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UISelectionController:onManagedStateDestroyingAsync)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UISelectionController {#UISelectionController}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIRenderableController`](./UIRenderableController)</code></pre>
{:.declarationspec}

Renderable wrapper that controls selection state across components, by emitting `Deselect` events for previously selected components upon `Select` events on newly selected components.

### Constructor
```typescript
(content?: UIRenderable): UISelectionController
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).selected {#UISelectionController:selected}
{:.spec}

```typescript
Component
```
{:.declarationspec}
Currently selected component, if any.



## ![](/assets/icons/spec-property.svg).renderContext {#UISelectionController:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`UIRenderableController.renderContext`](./UIRenderableController#UIRenderableController:renderContext).



## ![](/assets/icons/spec-property.svg).content {#UISelectionController:content}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
Inherited from [`UIRenderableController.content`](./UIRenderableController#UIRenderableController:content).



## ![](/assets/icons/spec-method.svg).render() {#UISelectionController:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIRenderableController.render`](./UIRenderableController#UIRenderableController:render).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UISelectionController:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UISelectionController:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UISelectionController:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UISelectionController:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UISelectionController:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UISelectionController:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UISelectionController:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UISelectionController:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UISelectionController:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UISelectionController:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UISelectionController:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UISelectionController:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UISelectionController:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UISelectionController:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UISelectionController:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UISelectionController:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UISelectionController:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UISelectionController:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UISelectionController:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

