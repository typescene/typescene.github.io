---
title: UIFormContextController
nav: |

  #### Declarations
  * [**class UIFormContextController**](#UIFormContextController)
  * [.formContext](#UIFormContextController:formContext)

  #### Inherited
  * [.renderContext](#UIFormContextController:renderContext)
  * [.content](#UIFormContextController:content)
  * [.render()](#UIFormContextController:render)
  * [.isPresetComponent()](#UIFormContextController:isPresetComponent)
  * [.getParentComponent()](#UIFormContextController:getParentComponent)
  * [.getBoundParentComponent()](#UIFormContextController:getBoundParentComponent)
  * [.propagateComponentEvent()](#UIFormContextController:propagateComponentEvent)
  * [.managedId](#UIFormContextController:managedId)
  * [.managedState](#UIFormContextController:managedState)
  * [.getReferenceCount()](#UIFormContextController:getReferenceCount)
  * [.getManagedReferrers()](#UIFormContextController:getManagedReferrers)
  * [.getManagedParent()](#UIFormContextController:getManagedParent)
  * [.emit()](#UIFormContextController:emit)
  * [.emitChange()](#UIFormContextController:emitChange)
  * [.propagateChildEvents()](#UIFormContextController:propagateChildEvents)
  * [.activateManagedAsync()](#UIFormContextController:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIFormContextController:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIFormContextController:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIFormContextController:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIFormContextController:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIFormContextController:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIFormContextController:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIFormContextController:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIFormContextController.Presets**](#UIFormContextController:Presets)
  * [.formContext](#UIFormContextController:Presets:formContext)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class UIFormContextController {#UIFormContextController}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIRenderableController`](./UIRenderableController)</code></pre>
{:.declarationspec}

Renderable wrapper that injects a form context record, to be used by (nested) child input controls.

**Note:** This wrapper does not group content in a cell; use [`UIForm`](./UIForm) for visual grouping.

### Constructor
```typescript
(content?: UIRenderable): UIFormContextController
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).formContext {#UIFormContextController:formContext}
{:.spec}

```typescript
UIFormContext<any>
```
{:.declarationspec}
Form state context; should be bound to a [`UIFormContext`](./UIFormContext) component.



## ![](/assets/icons/spec-property.svg).renderContext {#UIFormContextController:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`UIRenderableController.renderContext`](./UIRenderableController#UIRenderableController:renderContext).



## ![](/assets/icons/spec-property.svg).content {#UIFormContextController:content}
{:.spec}

```typescript
TContent
```
{:.declarationspec}
Inherited from [`UIRenderableController.content`](./UIRenderableController#UIRenderableController:content).



## ![](/assets/icons/spec-method.svg).render() {#UIFormContextController:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIRenderableController.render`](./UIRenderableController#UIRenderableController:render).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIFormContextController:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIFormContextController:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIFormContextController:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIFormContextController:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIFormContextController:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIFormContextController:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIFormContextController:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIFormContextController:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIFormContextController:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIFormContextController:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#UIFormContextController:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIFormContextController:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIFormContextController:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIFormContextController:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIFormContextController:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIFormContextController:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIFormContextController:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIFormContextController:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIFormContextController:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIFormContextController:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIFormContextController.Presets {#UIFormContextController:Presets}
{:.spec}

UIFormStateController presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).formContext {#UIFormContextController:Presets:formContext}
{:.spec}

```typescript
UIFormContext<any>
```
{:.declarationspec}
Form state object; should be bound to a [`UIFormContext`](./UIFormContext) component.

