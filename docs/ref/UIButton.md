---
title: UIButton
nav: |

  #### Declarations
  * [**class UIButton**](#UIButton)
  * [.withLabel()](#UIButton:withLabel)
  * [.withIcon()](#UIButton:withIcon)
  * [.style](#UIButton:style)
  * [.shrinkwrap](#UIButton:shrinkwrap)
  * [.isFocusable()](#UIButton:isFocusable)
  * [.isKeyboardFocusable()](#UIButton:isKeyboardFocusable)
  * [.disableKeyboardFocus](#UIButton:disableKeyboardFocus)
  * [.label](#UIButton:label)
  * [.icon](#UIButton:icon)
  * [.iconSize](#UIButton:iconSize)
  * [.iconMargin](#UIButton:iconMargin)
  * [.iconColor](#UIButton:iconColor)
  * [.iconAfter](#UIButton:iconAfter)

  #### Inherited
  * [.applyStyle()](#UIButton:applyStyle)
  * [.applyControlStyle()](#UIButton:applyControlStyle)
  * [.applyTextStyle()](#UIButton:applyTextStyle)
  * [.textStyle](#UIButton:textStyle)
  * [.controlStyle](#UIButton:controlStyle)
  * [.disabled](#UIButton:disabled)
  * [.propagateComponentEvent()](#UIButton:propagateComponentEvent)
  * [.render()](#UIButton:render)
  * [.requestFocus()](#UIButton:requestFocus)
  * [.requestFocusNext()](#UIButton:requestFocusNext)
  * [.requestFocusPrevious()](#UIButton:requestFocusPrevious)
  * [.hidden](#UIButton:hidden)
  * [.dimensions](#UIButton:dimensions)
  * [.position](#UIButton:position)
  * [.revealTransition](#UIButton:revealTransition)
  * [.exitTransition](#UIButton:exitTransition)
  * [.lastRenderOutput](#UIButton:lastRenderOutput)
  * [.isPresetComponent()](#UIButton:isPresetComponent)
  * [.getParentComponent()](#UIButton:getParentComponent)
  * [.getCompositeParent()](#UIButton:getCompositeParent)
  * [.managedId](#UIButton:managedId)
  * [.managedState](#UIButton:managedState)
  * [.getReferenceCount()](#UIButton:getReferenceCount)
  * [.getManagedReferrers()](#UIButton:getManagedReferrers)
  * [.getManagedParent()](#UIButton:getManagedParent)
  * [.emit()](#UIButton:emit)
  * [.propagateChildEvents()](#UIButton:propagateChildEvents)
  * [.activateManagedAsync()](#UIButton:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIButton:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIButton:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIButton:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIButton:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIButton:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIButton:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIButton:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIButton.Presets**](#UIButton:Presets)
  * [.label](#UIButton:Presets:label)
  * [.icon](#UIButton:Presets:icon)
  * [.iconSize](#UIButton:Presets:iconSize)
  * [.iconMargin](#UIButton:Presets:iconMargin)
  * [.iconColor](#UIButton:Presets:iconColor)
  * [.iconAfter](#UIButton:Presets:iconAfter)
  * [.navigateTo](#UIButton:Presets:navigateTo)
  * [.disableKeyboardFocus](#UIButton:Presets:disableKeyboardFocus)
  * [.textStyle](#UIButton:Presets:textStyle)
  * [.controlStyle](#UIButton:Presets:controlStyle)
  * [.disabled](#UIButton:Presets:disabled)
  * [.shrinkwrap](#UIButton:Presets:shrinkwrap)
  * [.style](#UIButton:Presets:style)
  * [.hidden](#UIButton:Presets:hidden)
  * [.dimensions](#UIButton:Presets:dimensions)
  * [.position](#UIButton:Presets:position)
  * [.requestFocus](#UIButton:Presets:requestFocus)
  * [.revealTransition](#UIButton:Presets:revealTransition)
  * [.exitTransition](#UIButton:Presets:exitTransition)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIButton {#UIButton}
{:.spec}

Represents a button component.

### Constructor
```typescript
(label?: string): UIButton
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).withLabel() <span class="spec_tag">static</span> {#UIButton:withLabel}
{:.spec}

```typescript
(label: string | Binding | { toString(): string; }, onClick?: string): typeof UIButton
```
{:.declarationspec}
Creates a preset button class with given label (localized using [`tt`](./tt) if available) and onClick handler, if any.



## ![](/assets/icons/spec-method.svg).withIcon() <span class="spec_tag">static</span> {#UIButton:withIcon}
{:.spec}

```typescript
(icon: string, onClick?: string, size?: string | number, color?: string): typeof UIButton
```
{:.declarationspec}
Creates a preset button class with given icon *only*, and onClick handler, if any.



## ![](/assets/icons/spec-property.svg).style {#UIButton:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set; when this is set to an instance of [`UIStyle`](./UIStyle), the individual style object properties (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)) are set to read-only objects taken from the [`UIStyle`](./UIStyle) instance. To override individual properties, set these properties *after* setting [`style`](#UIButton:style), or use [`Component.with`](./Component#Component:with) to create a new constructor.



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UIButton:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to shrink this element to use as little space as possible within its container, set to false to expand; defaults to true but may be overridden by individual components (also overrides `grow` property of [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIButton:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused directly using mouse or touch, or manually using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus). This method may be overridden by derived component classes, but the value returned must always be the same.



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIButton:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused using the keyboard *or* other methods; a true return value implies the same for [`UIComponent.isFocusable`](./UIComponent#UIComponent:isFocusable). This method may be overridden by derived component classes, but the value returned must always be the same.



## ![](/assets/icons/spec-property.svg).disableKeyboardFocus {#UIButton:disableKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to disable keyboard focus for this button.



## ![](/assets/icons/spec-property.svg).label {#UIButton:label}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Label text.



## ![](/assets/icons/spec-property.svg).icon {#UIButton:icon}
{:.spec}

```typescript
string
```
{:.declarationspec}
Icon name (platform and build system dependent).



## ![](/assets/icons/spec-property.svg).iconSize {#UIButton:iconSize}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Icon size (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).iconMargin {#UIButton:iconMargin}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Margin between icon and label text (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).iconColor {#UIButton:iconColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Icon color.



## ![](/assets/icons/spec-property.svg).iconAfter {#UIButton:iconAfter}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to make the icon appear after the text instead of before.



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIButton:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIControl.applyStyle`](./UIControl#UIControl:applyStyle).



## ![](/assets/icons/spec-method.svg).applyControlStyle() <span class="spec_tag">protected</span> {#UIButton:applyControlStyle}
{:.spec}

```typescript
(controlStyle: Partial<ControlStyle>): void
```
{:.declarationspec}
Inherited from [`UIControl.applyControlStyle`](./UIControl#UIControl:applyControlStyle).



## ![](/assets/icons/spec-method.svg).applyTextStyle() <span class="spec_tag">protected</span> {#UIButton:applyTextStyle}
{:.spec}

```typescript
(textStyle: Partial<TextStyle>): void
```
{:.declarationspec}
Inherited from [`UIControl.applyTextStyle`](./UIControl#UIControl:applyTextStyle).



## ![](/assets/icons/spec-property.svg).textStyle {#UIButton:textStyle}
{:.spec}

```typescript
TextStyle
```
{:.declarationspec}
Inherited from [`UIControl.textStyle`](./UIControl#UIControl:textStyle).



## ![](/assets/icons/spec-property.svg).controlStyle {#UIButton:controlStyle}
{:.spec}

```typescript
ControlStyle
```
{:.declarationspec}
Inherited from [`UIControl.controlStyle`](./UIControl#UIControl:controlStyle).



## ![](/assets/icons/spec-property.svg).disabled {#UIButton:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.disabled`](./UIControl#UIControl:disabled).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIButton:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIButton:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIButton:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIButton:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIButton:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).hidden {#UIButton:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIButton:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIButton:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIButton:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIButton:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIButton:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIButton:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIButton:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIButton:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UIButton:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIButton:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIButton:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIButton:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIButton:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIButton:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIButton:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIButton:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIButton:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIButton:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIButton:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIButton:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIButton:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIButton:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIButton:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIButton.Presets {#UIButton:Presets}
{:.spec}

UILabel presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).label {#UIButton:Presets:label}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Label text.



## ![](/assets/icons/spec-property.svg).icon {#UIButton:Presets:icon}
{:.spec}

```typescript
string
```
{:.declarationspec}
Icon name (platform and build system dependent).



## ![](/assets/icons/spec-property.svg).iconSize {#UIButton:Presets:iconSize}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Icon size (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).iconMargin {#UIButton:Presets:iconMargin}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Margin between icon and label text (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).iconColor {#UIButton:Presets:iconColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Icon color.



## ![](/assets/icons/spec-property.svg).iconAfter {#UIButton:Presets:iconAfter}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to make the icon appear after the text instead of before.



## ![](/assets/icons/spec-property.svg).navigateTo {#UIButton:Presets:navigateTo}
{:.spec}

```typescript
string
```
{:.declarationspec}
Path to navigate to when clicked (overrides onClick handler), *or* `:back` to go back in history when clicked.



## ![](/assets/icons/spec-property.svg).disableKeyboardFocus {#UIButton:Presets:disableKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to disable keyboard focus for this button.



## ![](/assets/icons/spec-property.svg).textStyle {#UIButton:Presets:textStyle}
{:.spec}

```typescript
Partial<{}> | Partial<TextStyle>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.textStyle`](./UIControl#UIControl:Presets:textStyle).



## ![](/assets/icons/spec-property.svg).controlStyle {#UIButton:Presets:controlStyle}
{:.spec}

```typescript
Partial<{}> | Partial<ControlStyle>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.controlStyle`](./UIControl#UIControl:Presets:controlStyle).



## ![](/assets/icons/spec-property.svg).disabled {#UIButton:Presets:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.disabled`](./UIControl#UIControl:Presets:disabled).



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UIButton:Presets:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.shrinkwrap`](./UIControl#UIControl:Presets:shrinkwrap).



## ![](/assets/icons/spec-property.svg).style {#UIButton:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIButton:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIButton:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIButton:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).requestFocus {#UIButton:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIButton:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIButton:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).

