---
title: UIRenderableController
nav: |

  #### Declarations
  * [**class UIRenderableController**](#UIRenderableController)
  * [.renderContext](#UIRenderableController:renderContext)
  * [.content](#UIRenderableController:content)
  * [.render()](#UIRenderableController:render)

  #### Inherited
  * [.isPresetComponent()](#UIRenderableController:isPresetComponent)
  * [.getParentComponent()](#UIRenderableController:getParentComponent)
  * [.getBoundParentComponent()](#UIRenderableController:getBoundParentComponent)
  * [.propagateComponentEvent()](#UIRenderableController:propagateComponentEvent)
  * [.managedId](#UIRenderableController:managedId)
  * [.managedState](#UIRenderableController:managedState)
  * [.getReferenceCount()](#UIRenderableController:getReferenceCount)
  * [.getManagedReferrers()](#UIRenderableController:getManagedReferrers)
  * [.getManagedParent()](#UIRenderableController:getManagedParent)
  * [.emit()](#UIRenderableController:emit)
  * [.emitChange()](#UIRenderableController:emitChange)
  * [.propagateChildEvents()](#UIRenderableController:propagateChildEvents)
  * [.activateManagedAsync()](#UIRenderableController:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIRenderableController:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIRenderableController:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIRenderableController:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIRenderableController:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIRenderableController:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIRenderableController:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIRenderableController:onManagedStateDestroyingAsync)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class UIRenderableController {#UIRenderableController}
{:.spec}


<pre markdown="span"><code markdown="span">`extends UIRenderableController_base` implements [`UIRenderable`](./UIRenderable)</code></pre>
{:.declarationspec}

Base class for a controller that encapsulates a single renderable component, without producing any output of its own.

### Constructor
```typescript
<TContent extends UIRenderable = UIRenderable>(content?: TContent): UIRenderableController<TContent>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).renderContext {#UIRenderableController:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Application render context, propagated from the parent composite object.



## ![](/assets/icons/spec-property.svg).content {#UIRenderableController:content}
{:.spec}

```typescript
TContent
```
{:.declarationspec}
Renderable content, as a managed child reference.



## ![](/assets/icons/spec-method.svg).render() {#UIRenderableController:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Trigger asynchronous rendering for this component, and all contained components (if any).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIRenderableController:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIRenderableController:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIRenderableController:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIRenderableController:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIRenderableController:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIRenderableController:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIRenderableController:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIRenderableController:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIRenderableController:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIRenderableController:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#UIRenderableController:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIRenderableController:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIRenderableController:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIRenderableController:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIRenderableController:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIRenderableController:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIRenderableController:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIRenderableController:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIRenderableController:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIRenderableController:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

