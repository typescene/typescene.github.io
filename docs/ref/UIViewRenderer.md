---
title: UIViewRenderer
nav: |

  #### Declarations
  * [**class UIViewRenderer**](#UIViewRenderer)
  * [.managedList](#UIViewRenderer:managedList)
  * [.managedMap](#UIViewRenderer:managedMap)
  * [.index](#UIViewRenderer:index)
  * [.view](#UIViewRenderer:view)
  * [.render()](#UIViewRenderer:render)

  #### Inherited
  * [.isPresetComponent()](#UIViewRenderer:isPresetComponent)
  * [.getParentComponent()](#UIViewRenderer:getParentComponent)
  * [.getCompositeParent()](#UIViewRenderer:getCompositeParent)
  * [.propagateComponentEvent()](#UIViewRenderer:propagateComponentEvent)
  * [.managedId](#UIViewRenderer:managedId)
  * [.managedState](#UIViewRenderer:managedState)
  * [.getReferenceCount()](#UIViewRenderer:getReferenceCount)
  * [.getManagedReferrers()](#UIViewRenderer:getManagedReferrers)
  * [.getManagedParent()](#UIViewRenderer:getManagedParent)
  * [.emit()](#UIViewRenderer:emit)
  * [.propagateChildEvents()](#UIViewRenderer:propagateChildEvents)
  * [.activateManagedAsync()](#UIViewRenderer:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIViewRenderer:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIViewRenderer:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIViewRenderer:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIViewRenderer:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIViewRenderer:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIViewRenderer:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIViewRenderer:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIViewRenderer.Presets**](#UIViewRenderer:Presets)
  * [.view](#UIViewRenderer:Presets:view)
  * [.managedList](#UIViewRenderer:Presets:managedList)
  * [.managedMap](#UIViewRenderer:Presets:managedMap)
  * [.index](#UIViewRenderer:Presets:index)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIViewRenderer {#UIViewRenderer}
{:.spec}

Renderable component that wraps around a referenced view (view component or activity), which is _not_ a child component of the component itself. The view may be selected from a bound list and/or map, using a (bound or assigned) index.

**Note:** Because the rendered view is not a child component, events (including UI events such as 'Clicked') never propagate up to the containing component(s).

### Constructor
```typescript
(): UIViewRenderer
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).managedList {#UIViewRenderer:managedList}
{:.spec}

```typescript
ManagedList<UIRenderable>
```
{:.declarationspec}
List of indexed views and/or view activities, _not_ child components.



## ![](/assets/icons/spec-property.svg).managedMap {#UIViewRenderer:managedMap}
{:.spec}

```typescript
ManagedMap<UIRenderable>
```
{:.declarationspec}
Map of named views and/or view activities, _not_ child components.



## ![](/assets/icons/spec-property.svg).index {#UIViewRenderer:index}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Index of the view to be rendered from [`managedList`](#UIViewRenderer:managedList) (if number) or [`managedMap`](#UIViewRenderer:managedMap) (if string), defaults to 0.



## ![](/assets/icons/spec-property.svg).view {#UIViewRenderer:view}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
The current view (or view activity) to be rendered, can be bound, or automatically selected using [`managedList`](#UIViewRenderer:managedList) or [`managedMap`](#UIViewRenderer:managedMap) and [`index`](#UIViewRenderer:index) properties; _not_ a child component.



## ![](/assets/icons/spec-method.svg).render() {#UIViewRenderer:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Trigger asynchronous rendering for this component, and all contained components (if any).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIViewRenderer:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIViewRenderer:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIViewRenderer:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIViewRenderer:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIViewRenderer:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIViewRenderer:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIViewRenderer:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIViewRenderer:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIViewRenderer:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIViewRenderer:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIViewRenderer:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIViewRenderer:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIViewRenderer:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIViewRenderer:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIViewRenderer:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIViewRenderer:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIViewRenderer:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIViewRenderer:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIViewRenderer:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIViewRenderer.Presets {#UIViewRenderer:Presets}
{:.spec}

UIViewRenderer presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).view {#UIViewRenderer:Presets:view}
{:.spec}

```typescript
Binding
```
{:.declarationspec}
Rendered view, if bound directly (not to be used together with [`managedList`](#UIViewRenderer:managedList) or [`managedMap`](#UIViewRenderer:managedMap) properties).



## ![](/assets/icons/spec-property.svg).managedList {#UIViewRenderer:Presets:managedList}
{:.spec}

```typescript
Binding
```
{:.declarationspec}
List of renderable views (must be bound to either a [`ManagedList`](./ManagedList) or `ComponentList`), one of which can be selected for rendering using the [`index`](#UIViewRenderer:index) property.



## ![](/assets/icons/spec-property.svg).managedMap {#UIViewRenderer:Presets:managedMap}
{:.spec}

```typescript
Binding
```
{:.declarationspec}
Map of renderable views (must be bound to a [`ManagedMap`](./ManagedMap)), one of which can be selected for rendering using the [`index`](#UIViewRenderer:index) property.



## ![](/assets/icons/spec-property.svg).index {#UIViewRenderer:Presets:index}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Index of the view to be rendered from the [`managedList`](#UIViewRenderer:managedList) or [`managedMap`](#UIViewRenderer:managedMap) properties, defaults to 0.

