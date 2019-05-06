---
title: UIContainer
nav: |

  #### Declarations
  * [**class UIContainer**](#UIContainer)
  * [.applyStyle()](#UIContainer:applyStyle)
  * [.applyLayout()](#UIContainer:applyLayout)
  * [.isFocusable()](#UIContainer:isFocusable)
  * [.isKeyboardFocusable()](#UIContainer:isKeyboardFocusable)
  * [.allowFocus](#UIContainer:allowFocus)
  * [.allowKeyboardFocus](#UIContainer:allowKeyboardFocus)
  * [.layout](#UIContainer:layout)
  * [.separator](#UIContainer:separator)
  * [.asyncContentRendering](#UIContainer:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UIContainer:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UIContainer:animatedContentRenderingVelocity)
  * [.content](#UIContainer:content)

  #### Inherited
  * [.propagateComponentEvent()](#UIContainer:propagateComponentEvent)
  * [.render()](#UIContainer:render)
  * [.requestFocus()](#UIContainer:requestFocus)
  * [.requestFocusNext()](#UIContainer:requestFocusNext)
  * [.requestFocusPrevious()](#UIContainer:requestFocusPrevious)
  * [.style](#UIContainer:style)
  * [.hidden](#UIContainer:hidden)
  * [.dimensions](#UIContainer:dimensions)
  * [.position](#UIContainer:position)
  * [.revealTransition](#UIContainer:revealTransition)
  * [.exitTransition](#UIContainer:exitTransition)
  * [.lastRenderOutput](#UIContainer:lastRenderOutput)
  * [.isPresetComponent()](#UIContainer:isPresetComponent)
  * [.getParentComponent()](#UIContainer:getParentComponent)
  * [.getCompositeParent()](#UIContainer:getCompositeParent)
  * [.managedId](#UIContainer:managedId)
  * [.managedState](#UIContainer:managedState)
  * [.getReferenceCount()](#UIContainer:getReferenceCount)
  * [.getManagedReferrers()](#UIContainer:getManagedReferrers)
  * [.getManagedParent()](#UIContainer:getManagedParent)
  * [.emit()](#UIContainer:emit)
  * [.propagateChildEvents()](#UIContainer:propagateChildEvents)
  * [.activateManagedAsync()](#UIContainer:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIContainer:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIContainer:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIContainer:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIContainer:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIContainer:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIContainer:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIContainer:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIContainer.Presets**](#UIContainer:Presets)
  * [.content](#UIContainer:Presets:content)
  * [.layout](#UIContainer:Presets:layout)
  * [.separator](#UIContainer:Presets:separator)
  * [.allowFocus](#UIContainer:Presets:allowFocus)
  * [.allowKeyboardFocus](#UIContainer:Presets:allowKeyboardFocus)
  * [.asyncContentRendering](#UIContainer:Presets:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UIContainer:Presets:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UIContainer:Presets:animatedContentRenderingVelocity)
  * [.style](#UIContainer:Presets:style)
  * [.hidden](#UIContainer:Presets:hidden)
  * [.dimensions](#UIContainer:Presets:dimensions)
  * [.position](#UIContainer:Presets:position)
  * [.requestFocus](#UIContainer:Presets:requestFocus)
  * [.revealTransition](#UIContainer:Presets:revealTransition)
  * [.exitTransition](#UIContainer:Presets:exitTransition)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIContainer <span class="spec_tag">abstract</span> {#UIContainer}
{:.spec}

Represents a UI component that contains other components (abstract).

### Constructor
```typescript
(...content: UIRenderable[]): UIContainer
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIContainer:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Applies given style set to individual style objects (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)), overridden in derived classes to copy applicable styles.



## ![](/assets/icons/spec-method.svg).applyLayout() <span class="spec_tag">protected</span> {#UIContainer:applyLayout}
{:.spec}

```typescript
(layout: Partial<ContainerLayout>): void
```
{:.declarationspec}
Apply properties from given object on top of the default `containerLayout` properties from the current style set.



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIContainer:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused directly using mouse or touch, or manually using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus). This method may be overridden by derived component classes, but the value returned must always be the same.



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIContainer:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused using the keyboard *or* other methods; a true return value implies the same for [`UIComponent.isFocusable`](./UIComponent#UIComponent:isFocusable). This method may be overridden by derived component classes, but the value returned must always be the same.



## ![](/assets/icons/spec-property.svg).allowFocus {#UIContainer:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if this container may receive direct input focus using the mouse, touch, or using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus) (cannot be changed after rendering this component), defaults to false.



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIContainer:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if this list may receive input focus using the keyboard and all other methods (cannot be changed after rendering this component), defaults to false.



## ![](/assets/icons/spec-property.svg).layout {#UIContainer:layout}
{:.spec}

```typescript
ContainerLayout
```
{:.declarationspec}
Options for layout of child components within this container.



## ![](/assets/icons/spec-property.svg).separator {#UIContainer:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Child separator options.



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UIContainer:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to render all child components asynchronously (results in smoother updates with slightly longer lead times).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UIContainer:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Effect duration for animated transitions (milliseconds), if any.



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UIContainer:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Effect velocity for animated transitions (screen distance per second), if any.



## ![](/assets/icons/spec-property.svg).content {#UIContainer:content}
{:.spec}

```typescript
ManagedList<UIRenderable>
```
{:.declarationspec}
Content components list.



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIContainer:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIContainer:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIContainer:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIContainer:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIContainer:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).style {#UIContainer:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.style`](./UIComponent#UIComponent:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIContainer:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIContainer:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIContainer:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIContainer:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIContainer:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIContainer:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIContainer:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIContainer:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIContainer:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UIContainer:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIContainer:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIContainer:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIContainer:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIContainer:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIContainer:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIContainer:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIContainer:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIContainer:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIContainer:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIContainer:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIContainer:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIContainer:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIContainer:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIContainer:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIContainer.Presets {#UIContainer:Presets}
{:.spec}

UIContainer presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).content {#UIContainer:Presets:content}
{:.spec}

```typescript
Iterable<UIRenderable>
```
{:.declarationspec}
List of container content.



## ![](/assets/icons/spec-property.svg).layout {#UIContainer:Presets:layout}
{:.spec}

```typescript
Partial<{}> | Partial<ContainerLayout>
```
{:.declarationspec}
Options for layout of child components within this container (overrides).



## ![](/assets/icons/spec-property.svg).separator {#UIContainer:Presets:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Child separator options (plain object).



## ![](/assets/icons/spec-property.svg).allowFocus {#UIContainer:Presets:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true if this container may receive direct input focus using the mouse, touch, or using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus), defaults to false.



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIContainer:Presets:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true if this container may receive input focus using the keyboard and all other methods, defaults to false.



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UIContainer:Presets:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to render all child components asynchronously (results in smoother updates with slightly longer lead times).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UIContainer:Presets:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Effect duration for animated transitions (milliseconds), if any.



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UIContainer:Presets:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Effect velocity for animated transitions (screen distance per second), if any.



## ![](/assets/icons/spec-property.svg).style {#UIContainer:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIContainer:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIContainer:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIContainer:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).requestFocus {#UIContainer:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIContainer:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIContainer:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).

