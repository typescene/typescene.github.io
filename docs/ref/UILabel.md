---
title: UILabel
nav: |

  #### Declarations
  * [**class UILabel**](#UILabel)
  * [.withText()](#UILabel:withText)
  * [.withIcon()](#UILabel:withIcon)
  * [.style](#UILabel:style)
  * [.shrinkwrap](#UILabel:shrinkwrap)
  * [.isFocusable()](#UILabel:isFocusable)
  * [.isKeyboardFocusable()](#UILabel:isKeyboardFocusable)
  * [.allowFocus](#UILabel:allowFocus)
  * [.allowKeyboardFocus](#UILabel:allowKeyboardFocus)
  * [.headingLevel](#UILabel:headingLevel)
  * [.htmlFormat](#UILabel:htmlFormat)
  * [.text](#UILabel:text)
  * [.icon](#UILabel:icon)
  * [.iconSize](#UILabel:iconSize)
  * [.iconMargin](#UILabel:iconMargin)
  * [.iconColor](#UILabel:iconColor)
  * [.iconAfter](#UILabel:iconAfter)

  #### Inherited
  * [.applyStyle()](#UILabel:applyStyle)
  * [.applyControlStyle()](#UILabel:applyControlStyle)
  * [.applyTextStyle()](#UILabel:applyTextStyle)
  * [.textStyle](#UILabel:textStyle)
  * [.controlStyle](#UILabel:controlStyle)
  * [.disabled](#UILabel:disabled)
  * [.propagateComponentEvent()](#UILabel:propagateComponentEvent)
  * [.render()](#UILabel:render)
  * [.requestFocus()](#UILabel:requestFocus)
  * [.requestFocusNext()](#UILabel:requestFocusNext)
  * [.requestFocusPrevious()](#UILabel:requestFocusPrevious)
  * [.hidden](#UILabel:hidden)
  * [.dimensions](#UILabel:dimensions)
  * [.position](#UILabel:position)
  * [.revealTransition](#UILabel:revealTransition)
  * [.exitTransition](#UILabel:exitTransition)
  * [.lastRenderOutput](#UILabel:lastRenderOutput)
  * [.isPresetComponent()](#UILabel:isPresetComponent)
  * [.getParentComponent()](#UILabel:getParentComponent)
  * [.getCompositeParent()](#UILabel:getCompositeParent)
  * [.managedId](#UILabel:managedId)
  * [.managedState](#UILabel:managedState)
  * [.getReferenceCount()](#UILabel:getReferenceCount)
  * [.getManagedReferrers()](#UILabel:getManagedReferrers)
  * [.getManagedParent()](#UILabel:getManagedParent)
  * [.emit()](#UILabel:emit)
  * [.propagateChildEvents()](#UILabel:propagateChildEvents)
  * [.activateManagedAsync()](#UILabel:activateManagedAsync)
  * [.deactivateManagedAsync()](#UILabel:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UILabel:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UILabel:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UILabel:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UILabel:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UILabel:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UILabel:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UILabel.Presets**](#UILabel:Presets)
  * [.headingLevel](#UILabel:Presets:headingLevel)
  * [.htmlFormat](#UILabel:Presets:htmlFormat)
  * [.text](#UILabel:Presets:text)
  * [.icon](#UILabel:Presets:icon)
  * [.iconSize](#UILabel:Presets:iconSize)
  * [.iconMargin](#UILabel:Presets:iconMargin)
  * [.iconColor](#UILabel:Presets:iconColor)
  * [.iconAfter](#UILabel:Presets:iconAfter)
  * [.allowFocus](#UILabel:Presets:allowFocus)
  * [.allowKeyboardFocus](#UILabel:Presets:allowKeyboardFocus)
  * [.textStyle](#UILabel:Presets:textStyle)
  * [.controlStyle](#UILabel:Presets:controlStyle)
  * [.disabled](#UILabel:Presets:disabled)
  * [.shrinkwrap](#UILabel:Presets:shrinkwrap)
  * [.style](#UILabel:Presets:style)
  * [.hidden](#UILabel:Presets:hidden)
  * [.dimensions](#UILabel:Presets:dimensions)
  * [.position](#UILabel:Presets:position)
  * [.requestFocus](#UILabel:Presets:requestFocus)
  * [.revealTransition](#UILabel:Presets:revealTransition)
  * [.exitTransition](#UILabel:Presets:exitTransition)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UILabel {#UILabel}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIControl`](./UIControl)</code></pre>
{:.declarationspec}

Represents a UI component that contains a piece of text.

#### See Also
[`UICloseLabel`](./UICloseLabel), [`UIExpandedLabel`](./UIExpandedLabel), [`UIParagraph`](./UIParagraph), [`UIHeading1`](./UIHeading1), [`UIHeading2`](./UIHeading2), [`UIHeading3`](./UIHeading3), [`tl`](./tl).

#### Example (preset)
```typescript
UILabel.withText(tt("Hello, world!"))
```

### Constructor
```typescript
(text?: string): UILabel
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).withText() <span class="spec_tag">static</span> {#UILabel:withText}
{:.spec}

```typescript
(text: string | Binding | { toString(): string; }, style?: string | UIStyle | TextStyle): typeof UILabel
```
{:.declarationspec}
Creates a preset label class with given text (localized using [`tt`](./tt) if available) and style override, if any.



## ![](/assets/icons/spec-method.svg).withIcon() <span class="spec_tag">static</span> {#UILabel:withIcon}
{:.spec}

```typescript
(icon: string | Binding, size?: string | number, color?: string): typeof UILabel
```
{:.declarationspec}
Creates a preset label class with given icon *only*.



## ![](/assets/icons/spec-property.svg).style {#UILabel:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set; when this is set to an instance of [`UIStyle`](./UIStyle), the individual style object properties (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)) are set to read-only objects taken from the [`UIStyle`](./UIStyle) instance. To override individual properties, set these properties *after* setting [`style`](#UILabel:style), or use [`Component.with`](./Component#Component:with) to create a new constructor.



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UILabel:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to shrink this element to use as little space as possible within its container, set to false to expand; defaults to true but may be overridden by individual components (also overrides `grow` property of [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UILabel:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused directly using mouse or touch, or manually using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus). This method may be overridden by derived component classes, but the value returned must always be the same.



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UILabel:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused using the keyboard *or* other methods; a true return value implies the same for [`UIComponent.isFocusable`](./UIComponent#UIComponent:isFocusable). This method may be overridden by derived component classes, but the value returned must always be the same.



## ![](/assets/icons/spec-property.svg).allowFocus {#UILabel:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if this label may receive direct input focus using the mouse, touch, or using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus) (cannot be changed after rendering this component), defaults to false.



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UILabel:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if this label may receive input focus using the keyboard and all other methods (cannot be changed after rendering this component), defaults to false.



## ![](/assets/icons/spec-property.svg).headingLevel {#UILabel:headingLevel}
{:.spec}

```typescript
1 | 2 | 3 | 4 | 5 | 6
```
{:.declarationspec}
Heading level (1 = largest).



## ![](/assets/icons/spec-property.svg).htmlFormat {#UILabel:htmlFormat}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if text should be rendered as HTML instead of plain text.



## ![](/assets/icons/spec-property.svg).text {#UILabel:text}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Label text.



## ![](/assets/icons/spec-property.svg).icon {#UILabel:icon}
{:.spec}

```typescript
string
```
{:.declarationspec}
Icon name (platform and build system dependent).



## ![](/assets/icons/spec-property.svg).iconSize {#UILabel:iconSize}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Icon size (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).iconMargin {#UILabel:iconMargin}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Margin between icon and label text (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).iconColor {#UILabel:iconColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Icon color.



## ![](/assets/icons/spec-property.svg).iconAfter {#UILabel:iconAfter}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to make the icon appear after the text instead of before.



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UILabel:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIControl.applyStyle`](./UIControl#UIControl:applyStyle).



## ![](/assets/icons/spec-method.svg).applyControlStyle() <span class="spec_tag">protected</span> {#UILabel:applyControlStyle}
{:.spec}

```typescript
(controlStyle: Partial<ControlStyle>): void
```
{:.declarationspec}
Inherited from [`UIControl.applyControlStyle`](./UIControl#UIControl:applyControlStyle).



## ![](/assets/icons/spec-method.svg).applyTextStyle() <span class="spec_tag">protected</span> {#UILabel:applyTextStyle}
{:.spec}

```typescript
(textStyle: Partial<TextStyle>): void
```
{:.declarationspec}
Inherited from [`UIControl.applyTextStyle`](./UIControl#UIControl:applyTextStyle).



## ![](/assets/icons/spec-property.svg).textStyle {#UILabel:textStyle}
{:.spec}

```typescript
TextStyle
```
{:.declarationspec}
Inherited from [`UIControl.textStyle`](./UIControl#UIControl:textStyle).



## ![](/assets/icons/spec-property.svg).controlStyle {#UILabel:controlStyle}
{:.spec}

```typescript
ControlStyle
```
{:.declarationspec}
Inherited from [`UIControl.controlStyle`](./UIControl#UIControl:controlStyle).



## ![](/assets/icons/spec-property.svg).disabled {#UILabel:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.disabled`](./UIControl#UIControl:disabled).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UILabel:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UILabel:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UILabel:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UILabel:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UILabel:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).hidden {#UILabel:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UILabel:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UILabel:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).revealTransition {#UILabel:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UILabel:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UILabel:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UILabel:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UILabel:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UILabel:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UILabel:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UILabel:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UILabel:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UILabel:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UILabel:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UILabel:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UILabel:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UILabel:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UILabel:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UILabel:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UILabel:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UILabel:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UILabel:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UILabel:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UILabel:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UILabel.Presets {#UILabel:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIControl.Presets`](./UIControl#UIControl:Presets)</code></pre>
{:.declarationspec}

UILabel presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).headingLevel {#UILabel:Presets:headingLevel}
{:.spec}

```typescript
1 | 2 | 3 | 4 | 5 | 6
```
{:.declarationspec}
Heading level (1-6, or undefined for no heading).



## ![](/assets/icons/spec-property.svg).htmlFormat {#UILabel:Presets:htmlFormat}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if text should be rendered as HTML instead of plain text.



## ![](/assets/icons/spec-property.svg).text {#UILabel:Presets:text}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Label text.



## ![](/assets/icons/spec-property.svg).icon {#UILabel:Presets:icon}
{:.spec}

```typescript
string
```
{:.declarationspec}
Icon name (platform and build system dependent).



## ![](/assets/icons/spec-property.svg).iconSize {#UILabel:Presets:iconSize}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Icon size (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).iconMargin {#UILabel:Presets:iconMargin}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Margin between icon and label text (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).iconColor {#UILabel:Presets:iconColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Icon color.



## ![](/assets/icons/spec-property.svg).iconAfter {#UILabel:Presets:iconAfter}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to make the icon appear after the text instead of before.



## ![](/assets/icons/spec-property.svg).allowFocus {#UILabel:Presets:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to allow this label to receive input focus using mouse, touch, or [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UILabel:Presets:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to allow this label to receive input focus using the keyboard as well as other methods; implies [`allowFocus`](#UILabel:allowFocus).



## ![](/assets/icons/spec-property.svg).textStyle {#UILabel:Presets:textStyle}
{:.spec}

```typescript
Partial<{}> | Partial<TextStyle>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.textStyle`](./UIControl#UIControl:Presets:textStyle).



## ![](/assets/icons/spec-property.svg).controlStyle {#UILabel:Presets:controlStyle}
{:.spec}

```typescript
Partial<{}> | Partial<ControlStyle>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.controlStyle`](./UIControl#UIControl:Presets:controlStyle).



## ![](/assets/icons/spec-property.svg).disabled {#UILabel:Presets:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.disabled`](./UIControl#UIControl:Presets:disabled).



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UILabel:Presets:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.shrinkwrap`](./UIControl#UIControl:Presets:shrinkwrap).



## ![](/assets/icons/spec-property.svg).style {#UILabel:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UILabel:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UILabel:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UILabel:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).requestFocus {#UILabel:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).



## ![](/assets/icons/spec-property.svg).revealTransition {#UILabel:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UILabel:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).

