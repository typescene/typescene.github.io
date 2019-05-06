---
title: UISpacer
nav: |

  #### Declarations
  * [**class UISpacer**](#UISpacer)
  * [.withHeight()](#UISpacer:withHeight)
  * [.withWidth()](#UISpacer:withWidth)
  * [.style](#UISpacer:style)
  * [.shrinkwrap](#UISpacer:shrinkwrap)

  #### Inherited
  * [.applyStyle()](#UISpacer:applyStyle)
  * [.applyControlStyle()](#UISpacer:applyControlStyle)
  * [.applyTextStyle()](#UISpacer:applyTextStyle)
  * [.textStyle](#UISpacer:textStyle)
  * [.controlStyle](#UISpacer:controlStyle)
  * [.disabled](#UISpacer:disabled)
  * [.propagateComponentEvent()](#UISpacer:propagateComponentEvent)
  * [.render()](#UISpacer:render)
  * [.isFocusable()](#UISpacer:isFocusable)
  * [.isKeyboardFocusable()](#UISpacer:isKeyboardFocusable)
  * [.requestFocus()](#UISpacer:requestFocus)
  * [.requestFocusNext()](#UISpacer:requestFocusNext)
  * [.requestFocusPrevious()](#UISpacer:requestFocusPrevious)
  * [.hidden](#UISpacer:hidden)
  * [.dimensions](#UISpacer:dimensions)
  * [.position](#UISpacer:position)
  * [.revealTransition](#UISpacer:revealTransition)
  * [.exitTransition](#UISpacer:exitTransition)
  * [.lastRenderOutput](#UISpacer:lastRenderOutput)
  * [.isPresetComponent()](#UISpacer:isPresetComponent)
  * [.getParentComponent()](#UISpacer:getParentComponent)
  * [.getCompositeParent()](#UISpacer:getCompositeParent)
  * [.managedId](#UISpacer:managedId)
  * [.managedState](#UISpacer:managedState)
  * [.getReferenceCount()](#UISpacer:getReferenceCount)
  * [.getManagedReferrers()](#UISpacer:getManagedReferrers)
  * [.getManagedParent()](#UISpacer:getManagedParent)
  * [.emit()](#UISpacer:emit)
  * [.propagateChildEvents()](#UISpacer:propagateChildEvents)
  * [.activateManagedAsync()](#UISpacer:activateManagedAsync)
  * [.deactivateManagedAsync()](#UISpacer:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UISpacer:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UISpacer:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UISpacer:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UISpacer:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UISpacer:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UISpacer:onManagedStateDestroyingAsync)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UISpacer {#UISpacer}
{:.spec}

Control that has no content, but expands in both directions when needed.

### Constructor
```typescript
(width?: string | number, height?: string | number, shrink?: boolean): UISpacer
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).withHeight() <span class="spec_tag">static</span> {#UISpacer:withHeight}
{:.spec}

```typescript
(minHeight: string | number, shrinkwrap?: boolean): typeof UISpacer
```
{:.declarationspec}
Creates a preset spacer class with given height (in dp or string with unit), shrinkwrapped by default.



## ![](/assets/icons/spec-method.svg).withWidth() <span class="spec_tag">static</span> {#UISpacer:withWidth}
{:.spec}

```typescript
(minWidth: string | number, shrinkwrap?: boolean): typeof UISpacer
```
{:.declarationspec}
Creates a preset spacer class with given width (in dp or string with unit), shrinkwrapped by default.



## ![](/assets/icons/spec-property.svg).style {#UISpacer:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set; when this is set to an instance of [`UIStyle`](./UIStyle), the individual style object properties (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)) are set to read-only objects taken from the [`UIStyle`](./UIStyle) instance. To override individual properties, set these properties *after* setting [`style`](#UISpacer:style), or use [`Component.with`](./Component#Component:with) to create a new constructor.



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UISpacer:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to shrink this element to use as little space as possible within its container, set to false to expand; defaults to true but may be overridden by individual components (also overrides `grow` property of [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)).



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UISpacer:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIControl.applyStyle`](./UIControl#UIControl:applyStyle).



## ![](/assets/icons/spec-method.svg).applyControlStyle() <span class="spec_tag">protected</span> {#UISpacer:applyControlStyle}
{:.spec}

```typescript
(controlStyle: Partial<ControlStyle>): void
```
{:.declarationspec}
Inherited from [`UIControl.applyControlStyle`](./UIControl#UIControl:applyControlStyle).



## ![](/assets/icons/spec-method.svg).applyTextStyle() <span class="spec_tag">protected</span> {#UISpacer:applyTextStyle}
{:.spec}

```typescript
(textStyle: Partial<TextStyle>): void
```
{:.declarationspec}
Inherited from [`UIControl.applyTextStyle`](./UIControl#UIControl:applyTextStyle).



## ![](/assets/icons/spec-property.svg).textStyle {#UISpacer:textStyle}
{:.spec}

```typescript
TextStyle
```
{:.declarationspec}
Inherited from [`UIControl.textStyle`](./UIControl#UIControl:textStyle).



## ![](/assets/icons/spec-property.svg).controlStyle {#UISpacer:controlStyle}
{:.spec}

```typescript
ControlStyle
```
{:.declarationspec}
Inherited from [`UIControl.controlStyle`](./UIControl#UIControl:controlStyle).



## ![](/assets/icons/spec-property.svg).disabled {#UISpacer:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.disabled`](./UIControl#UIControl:disabled).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UISpacer:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UISpacer:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UISpacer:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIComponent.isFocusable`](./UIComponent#UIComponent:isFocusable).



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UISpacer:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIComponent.isKeyboardFocusable`](./UIComponent#UIComponent:isKeyboardFocusable).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UISpacer:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UISpacer:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UISpacer:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).hidden {#UISpacer:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UISpacer:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UISpacer:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).revealTransition {#UISpacer:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UISpacer:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UISpacer:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UISpacer:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UISpacer:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UISpacer:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UISpacer:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UISpacer:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UISpacer:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UISpacer:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UISpacer:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UISpacer:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UISpacer:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UISpacer:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UISpacer:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UISpacer:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UISpacer:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UISpacer:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UISpacer:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UISpacer:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UISpacer:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

