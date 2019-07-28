---
title: UIStyleController
nav: |

  #### Declarations
  * [**class UIStyleController**](#UIStyleController)
  * [.state](#UIStyleController:state)
  * [.styles](#UIStyleController:styles)
  * [.baseStyle](#UIStyleController:baseStyle)

  #### Inherited
  * [.renderContext](#UIStyleController:renderContext)
  * [.content](#UIStyleController:content)
  * [.render()](#UIStyleController:render)
  * [.isPresetComponent()](#UIStyleController:isPresetComponent)
  * [.getParentComponent()](#UIStyleController:getParentComponent)
  * [.getCompositeParent()](#UIStyleController:getCompositeParent)
  * [.propagateComponentEvent()](#UIStyleController:propagateComponentEvent)
  * [.managedId](#UIStyleController:managedId)
  * [.managedState](#UIStyleController:managedState)
  * [.getReferenceCount()](#UIStyleController:getReferenceCount)
  * [.getManagedReferrers()](#UIStyleController:getManagedReferrers)
  * [.getManagedParent()](#UIStyleController:getManagedParent)
  * [.emit()](#UIStyleController:emit)
  * [.propagateChildEvents()](#UIStyleController:propagateChildEvents)
  * [.activateManagedAsync()](#UIStyleController:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIStyleController:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIStyleController:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIStyleController:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIStyleController:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIStyleController:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIStyleController:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIStyleController:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIStyleController.Presets**](#UIStyleController:Presets)
  * [.state](#UIStyleController:Presets:state)
  * [.styles](#UIStyleController:Presets:styles)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIStyleController {#UIStyleController}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIRenderableController`](./UIRenderableController)</code></pre>
{:.declarationspec}

Renderable wrapper that controls the style of its single content component, by applying one of the given styles based on the current value of a property.

### Constructor
```typescript
(content?: UIRenderable): UIStyleController
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).state {#UIStyleController:state}
{:.spec}

```typescript
string
```
{:.declarationspec}
Currently selected style (string index into [`UIStyleController.styles`](./UIStyleController#UIStyleController:styles) object).



## ![](/assets/icons/spec-property.svg).styles {#UIStyleController:styles}
{:.spec}

```typescript
{ [name: string]: UIStyle; }
```
{:.declarationspec}
Available styles to be applied to the content component (plain object).



## ![](/assets/icons/spec-property.svg).baseStyle {#UIStyleController:baseStyle}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Base style (taken from the content component right after it is assigned to the `content` property).



## ![](/assets/icons/spec-property.svg).renderContext {#UIStyleController:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`UIRenderableController.renderContext`](./UIRenderableController#UIRenderableController:renderContext).



## ![](/assets/icons/spec-property.svg).content {#UIStyleController:content}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
Inherited from [`UIRenderableController.content`](./UIRenderableController#UIRenderableController:content).



## ![](/assets/icons/spec-method.svg).render() {#UIStyleController:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIRenderableController.render`](./UIRenderableController#UIRenderableController:render).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIStyleController:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIStyleController:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIStyleController:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIStyleController:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIStyleController:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIStyleController:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIStyleController:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIStyleController:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIStyleController:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIStyleController:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIStyleController:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIStyleController:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIStyleController:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIStyleController:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIStyleController:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIStyleController:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIStyleController:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIStyleController:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIStyleController:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIStyleController.Presets {#UIStyleController:Presets}
{:.spec}

UIStyleController presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).state {#UIStyleController:Presets:state}
{:.spec}

```typescript
string
```
{:.declarationspec}
Currently selected style (string index into [`UIStyleController.styles`](./UIStyleController#UIStyleController:styles) object, typically bound to a property on the composite component).



## ![](/assets/icons/spec-property.svg).styles {#UIStyleController:Presets:styles}
{:.spec}

```typescript
{ [name: string]: UIStyle; }
```
{:.declarationspec}
Available styles to be applied to the content component (plain object).

