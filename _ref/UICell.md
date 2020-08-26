---
title: UICell
nav: |

  #### Declarations
  * [**class UICell**](#UICell)
  * [.isFocusable()](#UICell:isFocusable)
  * [.isKeyboardFocusable()](#UICell:isKeyboardFocusable)
  * [.applyStyle()](#UICell:applyStyle)
  * [.decoration](#UICell:decoration)
  * [.padding](#UICell:padding)
  * [.margin](#UICell:margin)
  * [.background](#UICell:background)
  * [.textColor](#UICell:textColor)
  * [.borderThickness](#UICell:borderThickness)
  * [.borderColor](#UICell:borderColor)
  * [.borderStyle](#UICell:borderStyle)
  * [.borderRadius](#UICell:borderRadius)
  * [.dropShadow](#UICell:dropShadow)
  * [.opacity](#UICell:opacity)
  * [.revealTransition](#UICell:revealTransition)
  * [.exitTransition](#UICell:exitTransition)
  * [.css](#UICell:css)

  #### Inherited
  * [.allowFocus](#UICell:allowFocus)
  * [.allowKeyboardFocus](#UICell:allowKeyboardFocus)
  * [.layout](#UICell:layout)
  * [.asyncContentRendering](#UICell:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UICell:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UICell:animatedContentRenderingVelocity)
  * [.content](#UICell:content)
  * [.propagateComponentEvent()](#UICell:propagateComponentEvent)
  * [.render()](#UICell:render)
  * [.requestFocus()](#UICell:requestFocus)
  * [.requestFocusNext()](#UICell:requestFocusNext)
  * [.requestFocusPrevious()](#UICell:requestFocusPrevious)
  * [.style](#UICell:style)
  * [.hidden](#UICell:hidden)
  * [.dimensions](#UICell:dimensions)
  * [.position](#UICell:position)
  * [.accessibleRole](#UICell:accessibleRole)
  * [.accessibleLabel](#UICell:accessibleLabel)
  * [.lastRenderOutput](#UICell:lastRenderOutput)
  * [.isPresetComponent()](#UICell:isPresetComponent)
  * [.getParentComponent()](#UICell:getParentComponent)
  * [.getBoundParentComponent()](#UICell:getBoundParentComponent)
  * [.managedId](#UICell:managedId)
  * [.managedState](#UICell:managedState)
  * [.getReferenceCount()](#UICell:getReferenceCount)
  * [.getManagedReferrers()](#UICell:getManagedReferrers)
  * [.getManagedParent()](#UICell:getManagedParent)
  * [.emit()](#UICell:emit)
  * [.emitChange()](#UICell:emitChange)
  * [.propagateChildEvents()](#UICell:propagateChildEvents)
  * [.activateManagedAsync()](#UICell:activateManagedAsync)
  * [.deactivateManagedAsync()](#UICell:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UICell:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UICell:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UICell:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UICell:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UICell:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UICell:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UICell.Presets**](#UICell:Presets)
  * [.decoration](#UICell:Presets:decoration)
  * [.padding](#UICell:Presets:padding)
  * [.margin](#UICell:Presets:margin)
  * [.background](#UICell:Presets:background)
  * [.textColor](#UICell:Presets:textColor)
  * [.borderThickness](#UICell:Presets:borderThickness)
  * [.borderColor](#UICell:Presets:borderColor)
  * [.borderStyle](#UICell:Presets:borderStyle)
  * [.borderRadius](#UICell:Presets:borderRadius)
  * [.dropShadow](#UICell:Presets:dropShadow)
  * [.opacity](#UICell:Presets:opacity)
  * [.selectOnFocus](#UICell:Presets:selectOnFocus)
  * [.allowFocus](#UICell:Presets:allowFocus)
  * [.allowKeyboardFocus](#UICell:Presets:allowKeyboardFocus)
  * [.revealTransition](#UICell:Presets:revealTransition)
  * [.exitTransition](#UICell:Presets:exitTransition)
  * [.css](#UICell:Presets:css)
  * [.content](#UICell:Presets:content)
  * [.layout](#UICell:Presets:layout)
  * [.asyncContentRendering](#UICell:Presets:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UICell:Presets:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UICell:Presets:animatedContentRenderingVelocity)
  * [.style](#UICell:Presets:style)
  * [.hidden](#UICell:Presets:hidden)
  * [.dimensions](#UICell:Presets:dimensions)
  * [.position](#UICell:Presets:position)
  * [.accessibleRole](#UICell:Presets:accessibleRole)
  * [.accessibleLabel](#UICell:Presets:accessibleLabel)
  * [.requestFocus](#UICell:Presets:requestFocus)
layout: doc_ref
pageintro: |
  The <code>UICell</code> component groups other components together within its own boundaries.
---

## ![](/assets/icons/spec-class.svg)class UICell {#UICell}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIContainer`](./UIContainer)</code></pre>
{:.declarationspec}

Represents a UI component that visually groups other components in a rectangular cell.

#### See Also
[`UICoverCell`](./UICoverCell), [`UIFlowCell`](./UIFlowCell), [`UIListCellAdapter`](./UIListCellAdapter).


### Constructor
```typescript
(...content: UIRenderable[]): UICell
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).isFocusable() {#UICell:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused directly using mouse or touch, or manually using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus). This method may be overridden by derived component classes, but the return value must be constant for each instance.



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UICell:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused using the keyboard as well as using other methods (rather than direct manipulation only). This method may be overridden by derived component classes, but the return value must be constant for each instance.



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UICell:applyStyle}
{:.spec}

```typescript
(style?: UIStyle): void
```
{:.declarationspec}
Applies given style set to individual style objects (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)). This method is overridden by derived classes to copy only applicable styles.



## ![](/assets/icons/spec-property.svg).decoration {#UICell:decoration}
{:.spec}

```typescript
Readonly<Decoration>
```
{:.declarationspec}
Options for the appearance of this cell; most of these are overridden by individual properties.



## ![](/assets/icons/spec-property.svg).padding {#UICell:padding}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Padding around contained elements (in dp or CSS string, or separate offset values).



## ![](/assets/icons/spec-property.svg).margin {#UICell:margin}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Margin around the entire cell (in dp or CSS string, or separate offset values).



## ![](/assets/icons/spec-property.svg).background {#UICell:background}
{:.spec}

```typescript
string | UIColor
```
{:.declarationspec}
Cell background ([`UIColor`](./UIColor) or string), defaults to transparent.



## ![](/assets/icons/spec-property.svg).textColor {#UICell:textColor}
{:.spec}

```typescript
string | UIColor
```
{:.declarationspec}
Text color ([`UIColor`](./UIColor) or string), defaults to `inherit` to inherit the text color from a containing cell or background window.



## ![](/assets/icons/spec-property.svg).borderThickness {#UICell:borderThickness}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Border thickness (in dp or string with unit, or separate offset values).



## ![](/assets/icons/spec-property.svg).borderColor {#UICell:borderColor}
{:.spec}

```typescript
string | UIColor
```
{:.declarationspec}
Border color ([`UIColor`](./UIColor) or string).



## ![](/assets/icons/spec-property.svg).borderStyle {#UICell:borderStyle}
{:.spec}

```typescript
string
```
{:.declarationspec}
Border style (CSS), defaults to `solid`.



## ![](/assets/icons/spec-property.svg).borderRadius {#UICell:borderRadius}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Border radius (in dp or CSS string).



## ![](/assets/icons/spec-property.svg).dropShadow {#UICell:dropShadow}
{:.spec}

```typescript
number
```
{:.declarationspec}
Intensity of drop shadow based on visual 'elevation' level (0-1).



## ![](/assets/icons/spec-property.svg).opacity {#UICell:opacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Opacity (0-1; defaults to fully opaque if undefined).



## ![](/assets/icons/spec-property.svg).revealTransition {#UICell:revealTransition}
{:.spec}

```typescript
string
```
{:.declarationspec}
Animated transition that plays when this cell is first rendered.



## ![](/assets/icons/spec-property.svg).exitTransition {#UICell:exitTransition}
{:.spec}

```typescript
string
```
{:.declarationspec}
Animated transition that plays when this cell is removed from a container.



## ![](/assets/icons/spec-property.svg).css {#UICell:css}
{:.spec}

```typescript
Partial<CSSStyleDeclaration> & { className?: string; }
```
{:.declarationspec}
Other CSS attributes that are applied directly to the container, if supported (plain object).

**Note:** Changes to individual properties are not observed by the renderer.



## ![](/assets/icons/spec-property.svg).allowFocus {#UICell:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.allowFocus`](./UIContainer#UIContainer:allowFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UICell:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.allowKeyboardFocus`](./UIContainer#UIContainer:allowKeyboardFocus).



## ![](/assets/icons/spec-property.svg).layout {#UICell:layout}
{:.spec}

```typescript
Readonly<ContainerLayout>
```
{:.declarationspec}
Inherited from [`UIContainer.layout`](./UIContainer#UIContainer:layout).



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UICell:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.asyncContentRendering`](./UIContainer#UIContainer:asyncContentRendering).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UICell:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.animatedContentRenderingDuration`](./UIContainer#UIContainer:animatedContentRenderingDuration).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UICell:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.animatedContentRenderingVelocity`](./UIContainer#UIContainer:animatedContentRenderingVelocity).



## ![](/assets/icons/spec-property.svg).content {#UICell:content}
{:.spec}

```typescript
ManagedList<UIRenderable>
```
{:.declarationspec}
Inherited from [`UIContainer.content`](./UIContainer#UIContainer:content).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UICell:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UICell:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UICell:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UICell:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UICell:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).style {#UICell:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.style`](./UIComponent#UIComponent:style).



## ![](/assets/icons/spec-property.svg).hidden {#UICell:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UICell:dimensions}
{:.spec}

```typescript
Readonly<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UICell:position}
{:.spec}

```typescript
Readonly<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UICell:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleRole`](./UIComponent#UIComponent:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UICell:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleLabel`](./UIComponent#UIComponent:accessibleLabel).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UICell:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UICell:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UICell:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UICell:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-property.svg).managedId {#UICell:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UICell:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UICell:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UICell:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UICell:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UICell:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#UICell:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UICell:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UICell:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UICell:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UICell:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UICell:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UICell:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UICell:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UICell:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UICell:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UICell.Presets {#UICell:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIContainer.Presets`](./UIContainer#UIContainer:Presets)</code></pre>
{:.declarationspec}

UICell presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).decoration {#UICell:Presets:decoration}
{:.spec}

```typescript
Decoration
```
{:.declarationspec}
Options for the appearance of this cell; most of these are overridden by individual properties.



## ![](/assets/icons/spec-property.svg).padding {#UICell:Presets:padding}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Padding around contained elements (in dp or CSS string, or separate offset values).



## ![](/assets/icons/spec-property.svg).margin {#UICell:Presets:margin}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Margin around the entire cell (in dp or CSS string, or separate offset values).



## ![](/assets/icons/spec-property.svg).background {#UICell:Presets:background}
{:.spec}

```typescript
string | UIColor
```
{:.declarationspec}
Cell background ([`UIColor`](./UIColor) or string).



## ![](/assets/icons/spec-property.svg).textColor {#UICell:Presets:textColor}
{:.spec}

```typescript
string | UIColor
```
{:.declarationspec}
Text color ([`UIColor`](./UIColor) or string), defaults to `inherit` to inherit the text color from a containing cell or background window.



## ![](/assets/icons/spec-property.svg).borderThickness {#UICell:Presets:borderThickness}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Border thickness (in dp or string with unit).



## ![](/assets/icons/spec-property.svg).borderColor {#UICell:Presets:borderColor}
{:.spec}

```typescript
string | UIColor
```
{:.declarationspec}
Border color ([`UIColor`](./UIColor) or string).



## ![](/assets/icons/spec-property.svg).borderStyle {#UICell:Presets:borderStyle}
{:.spec}

```typescript
string
```
{:.declarationspec}
Border style (CSS), defaults to `solid`.



## ![](/assets/icons/spec-property.svg).borderRadius {#UICell:Presets:borderRadius}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Corner radius (in dp or CSS string, defaults to 0).



## ![](/assets/icons/spec-property.svg).dropShadow {#UICell:Presets:dropShadow}
{:.spec}

```typescript
number
```
{:.declarationspec}
Size of drop shadow based on visual 'elevation' (0-1).



## ![](/assets/icons/spec-property.svg).opacity {#UICell:Presets:opacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Opacity (0-1).



## ![](/assets/icons/spec-property.svg).selectOnFocus {#UICell:Presets:selectOnFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to select cells on focus (or click), implies allowFocus as well.



## ![](/assets/icons/spec-property.svg).allowFocus {#UICell:Presets:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to allow this cell *itself* to receive input focus using mouse, touch, or [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UICell:Presets:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to allow this cell *itself* to receive input focus using the keyboard as well as other methods; implies `allowFocus`.



## ![](/assets/icons/spec-property.svg).revealTransition {#UICell:Presets:revealTransition}
{:.spec}

```typescript
string
```
{:.declarationspec}
Animation that plays when this cell is first rendered.



## ![](/assets/icons/spec-property.svg).exitTransition {#UICell:Presets:exitTransition}
{:.spec}

```typescript
string
```
{:.declarationspec}
Animation that plays when this cell is removed from a container.



## ![](/assets/icons/spec-property.svg).css {#UICell:Presets:css}
{:.spec}

```typescript
Partial<CSSStyleDeclaration> & { className?: string; }
```
{:.declarationspec}
Other CSS attributes that are applied directly to the container, if supported (plain object).



## ![](/assets/icons/spec-property.svg).content {#UICell:Presets:content}
{:.spec}

```typescript
Iterable<UIRenderable>
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.content`](./UIContainer#UIContainer:Presets:content).



## ![](/assets/icons/spec-property.svg).layout {#UICell:Presets:layout}
{:.spec}

```typescript
Partial<{}> | Partial<ContainerLayout>
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.layout`](./UIContainer#UIContainer:Presets:layout).



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UICell:Presets:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.asyncContentRendering`](./UIContainer#UIContainer:Presets:asyncContentRendering).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UICell:Presets:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.animatedContentRenderingDuration`](./UIContainer#UIContainer:Presets:animatedContentRenderingDuration).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UICell:Presets:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.animatedContentRenderingVelocity`](./UIContainer#UIContainer:Presets:animatedContentRenderingVelocity).



## ![](/assets/icons/spec-property.svg).style {#UICell:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UICell:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UICell:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UICell:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UICell:Presets:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleRole`](./UIComponent#UIComponent:Presets:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UICell:Presets:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleLabel`](./UIComponent#UIComponent:Presets:accessibleLabel).



## ![](/assets/icons/spec-property.svg).requestFocus {#UICell:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).

