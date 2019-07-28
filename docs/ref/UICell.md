---
title: UICell
nav: |

  #### Declarations
  * [**class UICell**](#UICell)
  * [.style](#UICell:style)
  * [.isFocusable()](#UICell:isFocusable)
  * [.isKeyboardFocusable()](#UICell:isKeyboardFocusable)
  * [.allowFocus](#UICell:allowFocus)
  * [.allowKeyboardFocus](#UICell:allowKeyboardFocus)
  * [.padding](#UICell:padding)
  * [.margin](#UICell:margin)
  * [.background](#UICell:background)
  * [.textColor](#UICell:textColor)
  * [.borderThickness](#UICell:borderThickness)
  * [.borderColor](#UICell:borderColor)
  * [.borderStyle](#UICell:borderStyle)
  * [.borderRadius](#UICell:borderRadius)
  * [.dropShadow](#UICell:dropShadow)
  * [.css](#UICell:css)

  #### Inherited
  * [.applyStyle()](#UICell:applyStyle)
  * [.applyLayout()](#UICell:applyLayout)
  * [.layout](#UICell:layout)
  * [.separator](#UICell:separator)
  * [.asyncContentRendering](#UICell:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UICell:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UICell:animatedContentRenderingVelocity)
  * [.content](#UICell:content)
  * [.propagateComponentEvent()](#UICell:propagateComponentEvent)
  * [.render()](#UICell:render)
  * [.requestFocus()](#UICell:requestFocus)
  * [.requestFocusNext()](#UICell:requestFocusNext)
  * [.requestFocusPrevious()](#UICell:requestFocusPrevious)
  * [.hidden](#UICell:hidden)
  * [.dimensions](#UICell:dimensions)
  * [.position](#UICell:position)
  * [.accessibleRole](#UICell:accessibleRole)
  * [.accessibleLabel](#UICell:accessibleLabel)
  * [.revealTransition](#UICell:revealTransition)
  * [.exitTransition](#UICell:exitTransition)
  * [.lastRenderOutput](#UICell:lastRenderOutput)
  * [.isPresetComponent()](#UICell:isPresetComponent)
  * [.getParentComponent()](#UICell:getParentComponent)
  * [.getCompositeParent()](#UICell:getCompositeParent)
  * [.managedId](#UICell:managedId)
  * [.managedState](#UICell:managedState)
  * [.getReferenceCount()](#UICell:getReferenceCount)
  * [.getManagedReferrers()](#UICell:getManagedReferrers)
  * [.getManagedParent()](#UICell:getManagedParent)
  * [.emit()](#UICell:emit)
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
  * [.padding](#UICell:Presets:padding)
  * [.margin](#UICell:Presets:margin)
  * [.background](#UICell:Presets:background)
  * [.textColor](#UICell:Presets:textColor)
  * [.borderThickness](#UICell:Presets:borderThickness)
  * [.borderColor](#UICell:Presets:borderColor)
  * [.borderStyle](#UICell:Presets:borderStyle)
  * [.borderRadius](#UICell:Presets:borderRadius)
  * [.dropShadow](#UICell:Presets:dropShadow)
  * [.highlight](#UICell:Presets:highlight)
  * [.selectOnFocus](#UICell:Presets:selectOnFocus)
  * [.allowFocus](#UICell:Presets:allowFocus)
  * [.allowKeyboardFocus](#UICell:Presets:allowKeyboardFocus)
  * [.css](#UICell:Presets:css)
  * [.content](#UICell:Presets:content)
  * [.layout](#UICell:Presets:layout)
  * [.separator](#UICell:Presets:separator)
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
  * [.revealTransition](#UICell:Presets:revealTransition)
  * [.exitTransition](#UICell:Presets:exitTransition)
  * [**UICell.HighlightProperties**](#UICell:HighlightProperties)
  * [.focusedBackground](#UICell:HighlightProperties:focusedBackground)
  * [.focusedTextColor](#UICell:HighlightProperties:focusedTextColor)
  * [.focusedBorderThickness](#UICell:HighlightProperties:focusedBorderThickness)
  * [.focusedBorderColor](#UICell:HighlightProperties:focusedBorderColor)
  * [.focusedBorderStyle](#UICell:HighlightProperties:focusedBorderStyle)
  * [.focusedDropShadow](#UICell:HighlightProperties:focusedDropShadow)
  * [.selectedBackground](#UICell:HighlightProperties:selectedBackground)
  * [.selectedTextColor](#UICell:HighlightProperties:selectedTextColor)
  * [.selectedBorderThickness](#UICell:HighlightProperties:selectedBorderThickness)
  * [.selectedBorderColor](#UICell:HighlightProperties:selectedBorderColor)
  * [.selectedBorderStyle](#UICell:HighlightProperties:selectedBorderStyle)
  * [.selectedDropShadow](#UICell:HighlightProperties:selectedDropShadow)
  * [.focusedSelectedBackground](#UICell:HighlightProperties:focusedSelectedBackground)
  * [.focusedSelectedTextColor](#UICell:HighlightProperties:focusedSelectedTextColor)
  * [.focusedSelectedBorderThickness](#UICell:HighlightProperties:focusedSelectedBorderThickness)
  * [.focusedSelectedBorderColor](#UICell:HighlightProperties:focusedSelectedBorderColor)
  * [.focusedSelectedBorderStyle](#UICell:HighlightProperties:focusedSelectedBorderStyle)
  * [.focusedSelectedDropShadow](#UICell:HighlightProperties:focusedSelectedDropShadow)
layout: ref_doc
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

#### Example (preset)
```typescript
const MyCell = UICell.with(
    {
        background: "@background",
        dimensions: { height: 128, width: 128 }
    },
    UIRow.with( /* ... */ )
)
```


### Constructor
```typescript
(...content: UIRenderable[]): UICell
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).style {#UICell:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set; when this is set to an instance of [`UIStyle`](./UIStyle), the individual style object properties (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)) are set to read-only objects taken from the [`UIStyle`](./UIStyle) instance. To override individual properties, set these properties *after* setting [`style`](#UICell:style), or use [`Component.with`](./Component#Component:with) to create a new constructor.



## ![](/assets/icons/spec-method.svg).isFocusable() {#UICell:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused directly using mouse or touch, or manually using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus). This method may be overridden by derived component classes, but the value returned must always be the same.



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UICell:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused using the keyboard *or* other methods; a true return value implies the same for [`UIComponent.isFocusable`](./UIComponent#UIComponent:isFocusable). This method may be overridden by derived component classes, but the value returned must always be the same.



## ![](/assets/icons/spec-property.svg).allowFocus {#UICell:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if this cell *itself* may receive direct input focus using the mouse, touch, or using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus) (cannot be changed after rendering this component), defaults to false.



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UICell:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if this cell *itself* may receive input focus using the keyboard and all other methods (cannot be changed after rendering this component), defaults to false.



## ![](/assets/icons/spec-property.svg).padding {#UICell:padding}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Padding around contained elements (in dp or CSS string, or separate offset values, defaults to 0).



## ![](/assets/icons/spec-property.svg).margin {#UICell:margin}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Margin around the entire cell (in dp or CSS string, or separate offset values, defaults to 0).



## ![](/assets/icons/spec-property.svg).background {#UICell:background}
{:.spec}

```typescript
string
```
{:.declarationspec}
Cell background (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)), defaults to transparent.



## ![](/assets/icons/spec-property.svg).textColor {#UICell:textColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Text color (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)), defaults to `inherit` to inherit the text color from a containing cell or background window.



## ![](/assets/icons/spec-property.svg).borderThickness {#UICell:borderThickness}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Border thickness (in dp or string with unit, or separate offset values, defaults to 0).



## ![](/assets/icons/spec-property.svg).borderColor {#UICell:borderColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Border color (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)).



## ![](/assets/icons/spec-property.svg).borderStyle {#UICell:borderStyle}
{:.spec}

```typescript
string
```
{:.declarationspec}
Border style (CSS), defaults to "solid".



## ![](/assets/icons/spec-property.svg).borderRadius {#UICell:borderRadius}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Border radius (in dp or CSS string, defaults to 0).



## ![](/assets/icons/spec-property.svg).dropShadow {#UICell:dropShadow}
{:.spec}

```typescript
number
```
{:.declarationspec}
Intensity of drop shadow based on visual 'elevation' level (0-1, defaults to 0).



## ![](/assets/icons/spec-property.svg).css {#UICell:css}
{:.spec}

```typescript
Partial<CSSStyleDeclaration> & { className?: string; }
```
{:.declarationspec}
Other CSS attributes that are applied directly to the container, if supported (plain object).

**Note:** Changes to individual properties are not observed by the renderer.



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UICell:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIContainer.applyStyle`](./UIContainer#UIContainer:applyStyle).



## ![](/assets/icons/spec-method.svg).applyLayout() <span class="spec_tag">protected</span> {#UICell:applyLayout}
{:.spec}

```typescript
(layout: Partial<ContainerLayout>): void
```
{:.declarationspec}
Inherited from [`UIContainer.applyLayout`](./UIContainer#UIContainer:applyLayout).



## ![](/assets/icons/spec-property.svg).layout {#UICell:layout}
{:.spec}

```typescript
ContainerLayout
```
{:.declarationspec}
Inherited from [`UIContainer.layout`](./UIContainer#UIContainer:layout).



## ![](/assets/icons/spec-property.svg).separator {#UICell:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Inherited from [`UIContainer.separator`](./UIContainer#UIContainer:separator).



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
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UICell:position}
{:.spec}

```typescript
Position
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



## ![](/assets/icons/spec-property.svg).revealTransition {#UICell:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UICell:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



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
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UICell:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



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
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
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



## ![](/assets/icons/spec-property.svg).padding {#UICell:Presets:padding}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Padding around contained elements (in dp or CSS string, defaults to 0).



## ![](/assets/icons/spec-property.svg).margin {#UICell:Presets:margin}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Margin around the entire cell (in dp or CSS string, defaults to 0).



## ![](/assets/icons/spec-property.svg).background {#UICell:Presets:background}
{:.spec}

```typescript
string
```
{:.declarationspec}
Cell background (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)).



## ![](/assets/icons/spec-property.svg).textColor {#UICell:Presets:textColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Text color (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)), defaults to `inherit` to inherit the text color from a containing cell or background window.



## ![](/assets/icons/spec-property.svg).borderThickness {#UICell:Presets:borderThickness}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Border thickness (in dp or string with unit, defaults to 0).



## ![](/assets/icons/spec-property.svg).borderColor {#UICell:Presets:borderColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Border color (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)).



## ![](/assets/icons/spec-property.svg).borderStyle {#UICell:Presets:borderStyle}
{:.spec}

```typescript
string
```
{:.declarationspec}
Border style (CSS), defaults to "solid".



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
Size of drop shadow based on visual 'elevation' (0-1, defaults to 0).



## ![](/assets/icons/spec-property.svg).highlight {#UICell:Presets:highlight}
{:.spec}

```typescript
HighlightProperties
```
{:.declarationspec}
Visual highlights for focused/selected states.



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
Set to true to allow this cell *itself* to receive input focus using the keyboard as well as other methods; implies [`allowFocus`](#UICell:allowFocus).



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



## ![](/assets/icons/spec-property.svg).separator {#UICell:Presets:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.separator`](./UIContainer#UIContainer:Presets:separator).



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



## ![](/assets/icons/spec-property.svg).revealTransition {#UICell:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UICell:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).



---

## ![](/assets/icons/spec-interface.svg)UICell.HighlightProperties {#UICell:HighlightProperties}
{:.spec}

`UICell` focus/select properties, for use with `UICell.with`.



## ![](/assets/icons/spec-property.svg).focusedBackground {#UICell:HighlightProperties:focusedBackground}
{:.spec}

```typescript
string
```
{:.declarationspec}
Focused cell background.



## ![](/assets/icons/spec-property.svg).focusedTextColor {#UICell:HighlightProperties:focusedTextColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Focused cell text color.



## ![](/assets/icons/spec-property.svg).focusedBorderThickness {#UICell:HighlightProperties:focusedBorderThickness}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Focused cell border thickness (in dp or string with unit, defaults to 0).



## ![](/assets/icons/spec-property.svg).focusedBorderColor {#UICell:HighlightProperties:focusedBorderColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Focused cell border color (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)).



## ![](/assets/icons/spec-property.svg).focusedBorderStyle {#UICell:HighlightProperties:focusedBorderStyle}
{:.spec}

```typescript
string
```
{:.declarationspec}
Focused cell border style (CSS), defaults to "solid".



## ![](/assets/icons/spec-property.svg).focusedDropShadow {#UICell:HighlightProperties:focusedDropShadow}
{:.spec}

```typescript
number
```
{:.declarationspec}
Focused cell drop shadow size based on visual 'elevation' (0-1, defaults to 0).



## ![](/assets/icons/spec-property.svg).selectedBackground {#UICell:HighlightProperties:selectedBackground}
{:.spec}

```typescript
string
```
{:.declarationspec}
Selected cell background.



## ![](/assets/icons/spec-property.svg).selectedTextColor {#UICell:HighlightProperties:selectedTextColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Selected cell text color.



## ![](/assets/icons/spec-property.svg).selectedBorderThickness {#UICell:HighlightProperties:selectedBorderThickness}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Selected cell border thickness (in dp or string with unit, defaults to 0).



## ![](/assets/icons/spec-property.svg).selectedBorderColor {#UICell:HighlightProperties:selectedBorderColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Selected cell border color (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)).



## ![](/assets/icons/spec-property.svg).selectedBorderStyle {#UICell:HighlightProperties:selectedBorderStyle}
{:.spec}

```typescript
string
```
{:.declarationspec}
Selected cell border style (CSS), defaults to "solid".



## ![](/assets/icons/spec-property.svg).selectedDropShadow {#UICell:HighlightProperties:selectedDropShadow}
{:.spec}

```typescript
number
```
{:.declarationspec}
Selected cell drop shadow size based on visual 'elevation' (0-1, defaults to 0).



## ![](/assets/icons/spec-property.svg).focusedSelectedBackground {#UICell:HighlightProperties:focusedSelectedBackground}
{:.spec}

```typescript
string
```
{:.declarationspec}
Focused and selected cell background.



## ![](/assets/icons/spec-property.svg).focusedSelectedTextColor {#UICell:HighlightProperties:focusedSelectedTextColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Focused and selected cell text color.



## ![](/assets/icons/spec-property.svg).focusedSelectedBorderThickness {#UICell:HighlightProperties:focusedSelectedBorderThickness}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Focused and selected cell border thickness (in dp or string with unit, defaults to 0).



## ![](/assets/icons/spec-property.svg).focusedSelectedBorderColor {#UICell:HighlightProperties:focusedSelectedBorderColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Focused and selected cell border color (see [`UITheme.replaceColor`](./UITheme#UITheme:replaceColor)).



## ![](/assets/icons/spec-property.svg).focusedSelectedBorderStyle {#UICell:HighlightProperties:focusedSelectedBorderStyle}
{:.spec}

```typescript
string
```
{:.declarationspec}
Focused and selected cell border style (CSS), defaults to "solid".



## ![](/assets/icons/spec-property.svg).focusedSelectedDropShadow {#UICell:HighlightProperties:focusedSelectedDropShadow}
{:.spec}

```typescript
number
```
{:.declarationspec}
Focused and selected cell drop shadow size based on visual 'elevation' (0-1, defaults to 0).

