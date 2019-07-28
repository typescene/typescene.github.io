---
title: UISeparator
nav: |

  #### Declarations
  * [**class UISeparator**](#UISeparator)
  * [.style](#UISeparator:style)
  * [.thickness](#UISeparator:thickness)
  * [.margin](#UISeparator:margin)
  * [.color](#UISeparator:color)
  * [.vertical](#UISeparator:vertical)

  #### Inherited
  * [.applyStyle()](#UISeparator:applyStyle)
  * [.applyControlStyle()](#UISeparator:applyControlStyle)
  * [.applyTextStyle()](#UISeparator:applyTextStyle)
  * [.textStyle](#UISeparator:textStyle)
  * [.controlStyle](#UISeparator:controlStyle)
  * [.disabled](#UISeparator:disabled)
  * [.shrinkwrap](#UISeparator:shrinkwrap)
  * [.propagateComponentEvent()](#UISeparator:propagateComponentEvent)
  * [.render()](#UISeparator:render)
  * [.isFocusable()](#UISeparator:isFocusable)
  * [.isKeyboardFocusable()](#UISeparator:isKeyboardFocusable)
  * [.requestFocus()](#UISeparator:requestFocus)
  * [.requestFocusNext()](#UISeparator:requestFocusNext)
  * [.requestFocusPrevious()](#UISeparator:requestFocusPrevious)
  * [.hidden](#UISeparator:hidden)
  * [.dimensions](#UISeparator:dimensions)
  * [.position](#UISeparator:position)
  * [.accessibleRole](#UISeparator:accessibleRole)
  * [.accessibleLabel](#UISeparator:accessibleLabel)
  * [.revealTransition](#UISeparator:revealTransition)
  * [.exitTransition](#UISeparator:exitTransition)
  * [.lastRenderOutput](#UISeparator:lastRenderOutput)
  * [.isPresetComponent()](#UISeparator:isPresetComponent)
  * [.getParentComponent()](#UISeparator:getParentComponent)
  * [.getCompositeParent()](#UISeparator:getCompositeParent)
  * [.managedId](#UISeparator:managedId)
  * [.managedState](#UISeparator:managedState)
  * [.getReferenceCount()](#UISeparator:getReferenceCount)
  * [.getManagedReferrers()](#UISeparator:getManagedReferrers)
  * [.getManagedParent()](#UISeparator:getManagedParent)
  * [.emit()](#UISeparator:emit)
  * [.propagateChildEvents()](#UISeparator:propagateChildEvents)
  * [.activateManagedAsync()](#UISeparator:activateManagedAsync)
  * [.deactivateManagedAsync()](#UISeparator:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UISeparator:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UISeparator:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UISeparator:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UISeparator:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UISeparator:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UISeparator:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UISeparator.Presets**](#UISeparator:Presets)
  * [.thickness](#UISeparator:Presets:thickness)
  * [.margin](#UISeparator:Presets:margin)
  * [.color](#UISeparator:Presets:color)
  * [.vertical](#UISeparator:Presets:vertical)
  * [.textStyle](#UISeparator:Presets:textStyle)
  * [.controlStyle](#UISeparator:Presets:controlStyle)
  * [.disabled](#UISeparator:Presets:disabled)
  * [.shrinkwrap](#UISeparator:Presets:shrinkwrap)
  * [.style](#UISeparator:Presets:style)
  * [.hidden](#UISeparator:Presets:hidden)
  * [.dimensions](#UISeparator:Presets:dimensions)
  * [.position](#UISeparator:Presets:position)
  * [.accessibleRole](#UISeparator:Presets:accessibleRole)
  * [.accessibleLabel](#UISeparator:Presets:accessibleLabel)
  * [.requestFocus](#UISeparator:Presets:requestFocus)
  * [.revealTransition](#UISeparator:Presets:revealTransition)
  * [.exitTransition](#UISeparator:Presets:exitTransition)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UISeparator {#UISeparator}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIControl`](./UIControl)</code></pre>
{:.declarationspec}

Control that shows a horizontal or vertical separator.

### Constructor
```typescript
(): UISeparator
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).style {#UISeparator:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set; when this is set to an instance of [`UIStyle`](./UIStyle), the individual style object properties (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)) are set to read-only objects taken from the [`UIStyle`](./UIStyle) instance. To override individual properties, set these properties *after* setting [`style`](#UISeparator:style), or use [`Component.with`](./Component#Component:with) to create a new constructor.



## ![](/assets/icons/spec-property.svg).thickness {#UISeparator:thickness}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Separator line thickness (in dp, or string with unit).



## ![](/assets/icons/spec-property.svg).margin {#UISeparator:margin}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Margin in the direction perpendicular to the separator (in dp, or string with unit), defaults to 0.



## ![](/assets/icons/spec-property.svg).color {#UISeparator:color}
{:.spec}

```typescript
string
```
{:.declarationspec}
Separator line color (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)), defaults to `@separator`.



## ![](/assets/icons/spec-property.svg).vertical {#UISeparator:vertical}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if separator should be vertical instead of horizontal.



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UISeparator:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIControl.applyStyle`](./UIControl#UIControl:applyStyle).



## ![](/assets/icons/spec-method.svg).applyControlStyle() <span class="spec_tag">protected</span> {#UISeparator:applyControlStyle}
{:.spec}

```typescript
(controlStyle: Partial<ControlStyle>): void
```
{:.declarationspec}
Inherited from [`UIControl.applyControlStyle`](./UIControl#UIControl:applyControlStyle).



## ![](/assets/icons/spec-method.svg).applyTextStyle() <span class="spec_tag">protected</span> {#UISeparator:applyTextStyle}
{:.spec}

```typescript
(textStyle: Partial<TextStyle>): void
```
{:.declarationspec}
Inherited from [`UIControl.applyTextStyle`](./UIControl#UIControl:applyTextStyle).



## ![](/assets/icons/spec-property.svg).textStyle {#UISeparator:textStyle}
{:.spec}

```typescript
TextStyle
```
{:.declarationspec}
Inherited from [`UIControl.textStyle`](./UIControl#UIControl:textStyle).



## ![](/assets/icons/spec-property.svg).controlStyle {#UISeparator:controlStyle}
{:.spec}

```typescript
ControlStyle
```
{:.declarationspec}
Inherited from [`UIControl.controlStyle`](./UIControl#UIControl:controlStyle).



## ![](/assets/icons/spec-property.svg).disabled {#UISeparator:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.disabled`](./UIControl#UIControl:disabled).



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UISeparator:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.shrinkwrap`](./UIControl#UIControl:shrinkwrap).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UISeparator:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UISeparator:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UISeparator:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIComponent.isFocusable`](./UIComponent#UIComponent:isFocusable).



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UISeparator:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIComponent.isKeyboardFocusable`](./UIComponent#UIComponent:isKeyboardFocusable).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UISeparator:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UISeparator:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UISeparator:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).hidden {#UISeparator:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UISeparator:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UISeparator:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UISeparator:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleRole`](./UIComponent#UIComponent:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UISeparator:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleLabel`](./UIComponent#UIComponent:accessibleLabel).



## ![](/assets/icons/spec-property.svg).revealTransition {#UISeparator:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UISeparator:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UISeparator:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UISeparator:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UISeparator:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UISeparator:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UISeparator:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UISeparator:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UISeparator:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UISeparator:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UISeparator:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UISeparator:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UISeparator:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UISeparator:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UISeparator:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UISeparator:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UISeparator:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UISeparator:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UISeparator:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UISeparator:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UISeparator:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UISeparator.Presets {#UISeparator:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIControl.Presets`](./UIControl#UIControl:Presets)</code></pre>
{:.declarationspec}

UIDivider presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).thickness {#UISeparator:Presets:thickness}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Separator line thickness (in dp, or string with unit).



## ![](/assets/icons/spec-property.svg).margin {#UISeparator:Presets:margin}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Margin in the direction perpendicular to the separator (in dp, or string with unit), defaults to 0.



## ![](/assets/icons/spec-property.svg).color {#UISeparator:Presets:color}
{:.spec}

```typescript
string
```
{:.declarationspec}
Separator line color (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)), defaults to `@separator`.



## ![](/assets/icons/spec-property.svg).vertical {#UISeparator:Presets:vertical}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if separator should be vertical instead of horizontal.



## ![](/assets/icons/spec-property.svg).textStyle {#UISeparator:Presets:textStyle}
{:.spec}

```typescript
Partial<{}> | Partial<TextStyle>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.textStyle`](./UIControl#UIControl:Presets:textStyle).



## ![](/assets/icons/spec-property.svg).controlStyle {#UISeparator:Presets:controlStyle}
{:.spec}

```typescript
Partial<{}> | Partial<ControlStyle>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.controlStyle`](./UIControl#UIControl:Presets:controlStyle).



## ![](/assets/icons/spec-property.svg).disabled {#UISeparator:Presets:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.disabled`](./UIControl#UIControl:Presets:disabled).



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UISeparator:Presets:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.shrinkwrap`](./UIControl#UIControl:Presets:shrinkwrap).



## ![](/assets/icons/spec-property.svg).style {#UISeparator:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UISeparator:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UISeparator:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UISeparator:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UISeparator:Presets:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleRole`](./UIComponent#UIComponent:Presets:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UISeparator:Presets:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleLabel`](./UIComponent#UIComponent:Presets:accessibleLabel).



## ![](/assets/icons/spec-property.svg).requestFocus {#UISeparator:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).



## ![](/assets/icons/spec-property.svg).revealTransition {#UISeparator:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UISeparator:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).

