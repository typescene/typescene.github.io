---
title: UIControl
nav: |

  #### Declarations
  * [**class UIControl**](#UIControl)
  * [.applyStyle()](#UIControl:applyStyle)
  * [.applyControlStyle()](#UIControl:applyControlStyle)
  * [.applyTextStyle()](#UIControl:applyTextStyle)
  * [.textStyle](#UIControl:textStyle)
  * [.controlStyle](#UIControl:controlStyle)
  * [.disabled](#UIControl:disabled)
  * [.shrinkwrap](#UIControl:shrinkwrap)

  #### Inherited
  * [.propagateComponentEvent()](#UIControl:propagateComponentEvent)
  * [.render()](#UIControl:render)
  * [.isFocusable()](#UIControl:isFocusable)
  * [.isKeyboardFocusable()](#UIControl:isKeyboardFocusable)
  * [.requestFocus()](#UIControl:requestFocus)
  * [.requestFocusNext()](#UIControl:requestFocusNext)
  * [.requestFocusPrevious()](#UIControl:requestFocusPrevious)
  * [.style](#UIControl:style)
  * [.hidden](#UIControl:hidden)
  * [.dimensions](#UIControl:dimensions)
  * [.position](#UIControl:position)
  * [.revealTransition](#UIControl:revealTransition)
  * [.exitTransition](#UIControl:exitTransition)
  * [.lastRenderOutput](#UIControl:lastRenderOutput)
  * [.isPresetComponent()](#UIControl:isPresetComponent)
  * [.getParentComponent()](#UIControl:getParentComponent)
  * [.getCompositeParent()](#UIControl:getCompositeParent)
  * [.managedId](#UIControl:managedId)
  * [.managedState](#UIControl:managedState)
  * [.getReferenceCount()](#UIControl:getReferenceCount)
  * [.getManagedReferrers()](#UIControl:getManagedReferrers)
  * [.getManagedParent()](#UIControl:getManagedParent)
  * [.emit()](#UIControl:emit)
  * [.propagateChildEvents()](#UIControl:propagateChildEvents)
  * [.activateManagedAsync()](#UIControl:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIControl:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIControl:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIControl:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIControl:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIControl:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIControl:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIControl:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIControl.Presets**](#UIControl:Presets)
  * [.textStyle](#UIControl:Presets:textStyle)
  * [.controlStyle](#UIControl:Presets:controlStyle)
  * [.disabled](#UIControl:Presets:disabled)
  * [.shrinkwrap](#UIControl:Presets:shrinkwrap)
  * [.style](#UIControl:Presets:style)
  * [.hidden](#UIControl:Presets:hidden)
  * [.dimensions](#UIControl:Presets:dimensions)
  * [.position](#UIControl:Presets:position)
  * [.requestFocus](#UIControl:Presets:requestFocus)
  * [.revealTransition](#UIControl:Presets:revealTransition)
  * [.exitTransition](#UIControl:Presets:exitTransition)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIControl <span class="spec_tag">abstract</span> {#UIControl}
{:.spec}

Represents a UI component that the user can interact with (abstract).

### Constructor
```typescript
(): UIControl
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIControl:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Applies given style set to individual style objects (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)), overridden in derived classes to copy applicable styles.



## ![](/assets/icons/spec-method.svg).applyControlStyle() <span class="spec_tag">protected</span> {#UIControl:applyControlStyle}
{:.spec}

```typescript
(controlStyle: Partial<ControlStyle>): void
```
{:.declarationspec}
Apply properties from given object on top of the default [`controlStyle`](#UIControl:controlStyle) properties from the current style set.



## ![](/assets/icons/spec-method.svg).applyTextStyle() <span class="spec_tag">protected</span> {#UIControl:applyTextStyle}
{:.spec}

```typescript
(textStyle: Partial<TextStyle>): void
```
{:.declarationspec}
Apply properties from given object on top of the default [`textStyle`](#UIControl:textStyle) properties from the current style set.



## ![](/assets/icons/spec-property.svg).textStyle {#UIControl:textStyle}
{:.spec}

```typescript
TextStyle
```
{:.declarationspec}
Text style options.



## ![](/assets/icons/spec-property.svg).controlStyle {#UIControl:controlStyle}
{:.spec}

```typescript
ControlStyle
```
{:.declarationspec}
Miscellaneous style options.



## ![](/assets/icons/spec-property.svg).disabled {#UIControl:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to disable this control.



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UIControl:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to shrink this element to use as little space as possible within its container, set to false to expand; defaults to true but may be overridden by individual components (also overrides `grow` property of [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIControl:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIControl:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIControl:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIComponent.isFocusable`](./UIComponent#UIComponent:isFocusable).



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIControl:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIComponent.isKeyboardFocusable`](./UIComponent#UIComponent:isKeyboardFocusable).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIControl:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIControl:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIControl:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).style {#UIControl:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.style`](./UIComponent#UIComponent:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIControl:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIControl:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIControl:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIControl:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIControl:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIControl:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIControl:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIControl:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIControl:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UIControl:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIControl:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIControl:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIControl:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIControl:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIControl:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIControl:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIControl:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIControl:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIControl:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIControl:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIControl:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIControl:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIControl:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIControl:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIControl.Presets {#UIControl:Presets}
{:.spec}

UIControl presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).textStyle {#UIControl:Presets:textStyle}
{:.spec}

```typescript
Partial<{}> | Partial<TextStyle>
```
{:.declarationspec}
Text style options (overrides).



## ![](/assets/icons/spec-property.svg).controlStyle {#UIControl:Presets:controlStyle}
{:.spec}

```typescript
Partial<{}> | Partial<ControlStyle>
```
{:.declarationspec}
Miscellaneous style options (overrides).



## ![](/assets/icons/spec-property.svg).disabled {#UIControl:Presets:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Disable this control.



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UIControl:Presets:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Shrink or grow this control.



## ![](/assets/icons/spec-property.svg).style {#UIControl:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIControl:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIControl:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIControl:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).requestFocus {#UIControl:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIControl:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIControl:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).

