---
title: UIConditional
nav: |

  #### Declarations
  * [**class UIConditional**](#UIConditional)
  * [.state](#UIConditional:state)

  #### Inherited
  * [.renderContext](#UIConditional:renderContext)
  * [.content](#UIConditional:content)
  * [.render()](#UIConditional:render)
  * [.isPresetComponent()](#UIConditional:isPresetComponent)
  * [.getParentComponent()](#UIConditional:getParentComponent)
  * [.getBoundParentComponent()](#UIConditional:getBoundParentComponent)
  * [.propagateComponentEvent()](#UIConditional:propagateComponentEvent)
  * [.managedId](#UIConditional:managedId)
  * [.managedState](#UIConditional:managedState)
  * [.getReferenceCount()](#UIConditional:getReferenceCount)
  * [.getManagedReferrers()](#UIConditional:getManagedReferrers)
  * [.getManagedParent()](#UIConditional:getManagedParent)
  * [.emit()](#UIConditional:emit)
  * [.emitChange()](#UIConditional:emitChange)
  * [.propagateChildEvents()](#UIConditional:propagateChildEvents)
  * [.activateManagedAsync()](#UIConditional:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIConditional:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIConditional:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIConditional:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIConditional:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIConditional:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIConditional:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIConditional:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIConditional.Presets**](#UIConditional:Presets)
  * [.state](#UIConditional:Presets:state)
layout: doc_ref
pageintro: |
  This component displays its child view only when a condition is true.
---

## ![](/assets/icons/spec-class.svg)class UIConditional {#UIConditional}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIRenderableController`](./UIRenderableController)</code></pre>
{:.declarationspec}

Encapsulates content that is added/removed asynchronously based on the value of a (bound) property.

> __Note:__ Preset constructors for this class (see example) only accept __one__ child component. To wrap multiple components, use multiple `UIConditional` constructors, or wrap child components in a [`UICell`](./UICell).


### Constructor
```typescript
(content?: UIRenderable): UIConditional
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).state {#UIConditional:state}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Current condition state, content is rendered only if this is set to true.



## ![](/assets/icons/spec-property.svg).renderContext {#UIConditional:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`UIRenderableController.renderContext`](./UIRenderableController#UIRenderableController:renderContext).



## ![](/assets/icons/spec-property.svg).content {#UIConditional:content}
{:.spec}

```typescript
TContent
```
{:.declarationspec}
Inherited from [`UIRenderableController.content`](./UIRenderableController#UIRenderableController:content).



## ![](/assets/icons/spec-method.svg).render() {#UIConditional:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIRenderableController.render`](./UIRenderableController#UIRenderableController:render).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIConditional:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIConditional:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIConditional:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIConditional:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIConditional:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIConditional:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIConditional:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIConditional:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIConditional:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIConditional:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#UIConditional:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIConditional:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIConditional:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIConditional:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIConditional:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIConditional:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIConditional:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIConditional:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIConditional:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIConditional:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIConditional.Presets {#UIConditional:Presets}
{:.spec}

UIConditional presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).state {#UIConditional:Presets:state}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Current condition state, content is rendered only if this evaluates to true.
