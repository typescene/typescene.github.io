---
title: UIColumn
nav: |

  #### Declarations
  * [**class UIColumn**](#UIColumn)
  * [.style](#UIColumn:style)
  * [.hasComponentSpacing()](#UIColumn:hasComponentSpacing)
  * [.spacing](#UIColumn:spacing)
  * [.width](#UIColumn:width)

  #### Inherited
  * [.applyStyle()](#UIColumn:applyStyle)
  * [.applyLayout()](#UIColumn:applyLayout)
  * [.isFocusable()](#UIColumn:isFocusable)
  * [.isKeyboardFocusable()](#UIColumn:isKeyboardFocusable)
  * [.allowFocus](#UIColumn:allowFocus)
  * [.allowKeyboardFocus](#UIColumn:allowKeyboardFocus)
  * [.layout](#UIColumn:layout)
  * [.separator](#UIColumn:separator)
  * [.asyncContentRendering](#UIColumn:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UIColumn:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UIColumn:animatedContentRenderingVelocity)
  * [.content](#UIColumn:content)
  * [.propagateComponentEvent()](#UIColumn:propagateComponentEvent)
  * [.render()](#UIColumn:render)
  * [.requestFocus()](#UIColumn:requestFocus)
  * [.requestFocusNext()](#UIColumn:requestFocusNext)
  * [.requestFocusPrevious()](#UIColumn:requestFocusPrevious)
  * [.hidden](#UIColumn:hidden)
  * [.dimensions](#UIColumn:dimensions)
  * [.position](#UIColumn:position)
  * [.accessibleRole](#UIColumn:accessibleRole)
  * [.accessibleLabel](#UIColumn:accessibleLabel)
  * [.revealTransition](#UIColumn:revealTransition)
  * [.exitTransition](#UIColumn:exitTransition)
  * [.lastRenderOutput](#UIColumn:lastRenderOutput)
  * [.isPresetComponent()](#UIColumn:isPresetComponent)
  * [.getParentComponent()](#UIColumn:getParentComponent)
  * [.getCompositeParent()](#UIColumn:getCompositeParent)
  * [.managedId](#UIColumn:managedId)
  * [.managedState](#UIColumn:managedState)
  * [.getReferenceCount()](#UIColumn:getReferenceCount)
  * [.getManagedReferrers()](#UIColumn:getManagedReferrers)
  * [.getManagedParent()](#UIColumn:getManagedParent)
  * [.emit()](#UIColumn:emit)
  * [.propagateChildEvents()](#UIColumn:propagateChildEvents)
  * [.activateManagedAsync()](#UIColumn:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIColumn:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIColumn:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIColumn:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIColumn:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIColumn:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIColumn:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIColumn:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIColumn.Presets**](#UIColumn:Presets)
  * [.spacing](#UIColumn:Presets:spacing)
  * [.width](#UIColumn:Presets:width)
  * [.content](#UIColumn:Presets:content)
  * [.layout](#UIColumn:Presets:layout)
  * [.separator](#UIColumn:Presets:separator)
  * [.allowFocus](#UIColumn:Presets:allowFocus)
  * [.allowKeyboardFocus](#UIColumn:Presets:allowKeyboardFocus)
  * [.asyncContentRendering](#UIColumn:Presets:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UIColumn:Presets:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UIColumn:Presets:animatedContentRenderingVelocity)
  * [.style](#UIColumn:Presets:style)
  * [.hidden](#UIColumn:Presets:hidden)
  * [.dimensions](#UIColumn:Presets:dimensions)
  * [.position](#UIColumn:Presets:position)
  * [.accessibleRole](#UIColumn:Presets:accessibleRole)
  * [.accessibleLabel](#UIColumn:Presets:accessibleLabel)
  * [.requestFocus](#UIColumn:Presets:requestFocus)
  * [.revealTransition](#UIColumn:Presets:revealTransition)
  * [.exitTransition](#UIColumn:Presets:exitTransition)
layout: ref_doc
pageintro: |
  This component displays controls in a vertical arrangement.
---

## ![](/assets/icons/spec-class.svg)class UIColumn {#UIColumn}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIContainer`](./UIContainer)</code></pre>
{:.declarationspec}

Represents a UI component that contains other components, in a vertical arrangement.

#### Example (preset)
```typescript
UIColumn.with(
  { spacing: 8 },
  UICloseRow.with(tl("Enter your name:")),
  UICloseRow.with(UITextField.withName("fullName"))
)
```


### Constructor
```typescript
(...content: UIRenderable[]): UIColumn
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).style {#UIColumn:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set; when this is set to an instance of [`UIStyle`](./UIStyle), the individual style object properties (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)) are set to read-only objects taken from the [`UIStyle`](./UIStyle) instance. To override individual properties, set these properties *after* setting [`style`](#UIColumn:style), or use [`Component.with`](./Component#Component:with) to create a new constructor.



## ![](/assets/icons/spec-method.svg).hasComponentSpacing() {#UIColumn:hasComponentSpacing}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if spacing between components should be non-zero (used by renderer).



## ![](/assets/icons/spec-property.svg).spacing {#UIColumn:spacing}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Space between components along vertical axis (in dp or string with unit, defaults to 8).



## ![](/assets/icons/spec-property.svg).width {#UIColumn:width}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Column width (in dp or string with unit, overrides value set in [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions), if any).



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIColumn:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIContainer.applyStyle`](./UIContainer#UIContainer:applyStyle).



## ![](/assets/icons/spec-method.svg).applyLayout() <span class="spec_tag">protected</span> {#UIColumn:applyLayout}
{:.spec}

```typescript
(layout: Partial<ContainerLayout>): void
```
{:.declarationspec}
Inherited from [`UIContainer.applyLayout`](./UIContainer#UIContainer:applyLayout).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIColumn:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIContainer.isFocusable`](./UIContainer#UIContainer:isFocusable).



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIColumn:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIContainer.isKeyboardFocusable`](./UIContainer#UIContainer:isKeyboardFocusable).



## ![](/assets/icons/spec-property.svg).allowFocus {#UIColumn:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.allowFocus`](./UIContainer#UIContainer:allowFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIColumn:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.allowKeyboardFocus`](./UIContainer#UIContainer:allowKeyboardFocus).



## ![](/assets/icons/spec-property.svg).layout {#UIColumn:layout}
{:.spec}

```typescript
ContainerLayout
```
{:.declarationspec}
Inherited from [`UIContainer.layout`](./UIContainer#UIContainer:layout).



## ![](/assets/icons/spec-property.svg).separator {#UIColumn:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Inherited from [`UIContainer.separator`](./UIContainer#UIContainer:separator).



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UIColumn:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.asyncContentRendering`](./UIContainer#UIContainer:asyncContentRendering).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UIColumn:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.animatedContentRenderingDuration`](./UIContainer#UIContainer:animatedContentRenderingDuration).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UIColumn:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.animatedContentRenderingVelocity`](./UIContainer#UIContainer:animatedContentRenderingVelocity).



## ![](/assets/icons/spec-property.svg).content {#UIColumn:content}
{:.spec}

```typescript
ManagedList<UIRenderable>
```
{:.declarationspec}
Inherited from [`UIContainer.content`](./UIContainer#UIContainer:content).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIColumn:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIColumn:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIColumn:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIColumn:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIColumn:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).hidden {#UIColumn:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIColumn:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIColumn:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIColumn:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleRole`](./UIComponent#UIComponent:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIColumn:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleLabel`](./UIComponent#UIComponent:accessibleLabel).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIColumn:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIColumn:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIColumn:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIColumn:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIColumn:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIColumn:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UIColumn:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIColumn:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIColumn:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIColumn:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIColumn:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIColumn:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIColumn:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIColumn:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIColumn:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIColumn:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIColumn:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIColumn:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIColumn:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIColumn:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIColumn:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIColumn.Presets {#UIColumn:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIContainer.Presets`](./UIContainer#UIContainer:Presets)</code></pre>
{:.declarationspec}

UIColumn presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).spacing {#UIColumn:Presets:spacing}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Space between components along vertical axis (in dp or string with unit, defaults to 8).



## ![](/assets/icons/spec-property.svg).width {#UIColumn:Presets:width}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Column width (in dp or string with unit, overrides value set in [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions), if any).



## ![](/assets/icons/spec-property.svg).content {#UIColumn:Presets:content}
{:.spec}

```typescript
Iterable<UIRenderable>
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.content`](./UIContainer#UIContainer:Presets:content).



## ![](/assets/icons/spec-property.svg).layout {#UIColumn:Presets:layout}
{:.spec}

```typescript
Partial<{}> | Partial<ContainerLayout>
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.layout`](./UIContainer#UIContainer:Presets:layout).



## ![](/assets/icons/spec-property.svg).separator {#UIColumn:Presets:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.separator`](./UIContainer#UIContainer:Presets:separator).



## ![](/assets/icons/spec-property.svg).allowFocus {#UIColumn:Presets:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.allowFocus`](./UIContainer#UIContainer:Presets:allowFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIColumn:Presets:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.allowKeyboardFocus`](./UIContainer#UIContainer:Presets:allowKeyboardFocus).



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UIColumn:Presets:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.asyncContentRendering`](./UIContainer#UIContainer:Presets:asyncContentRendering).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UIColumn:Presets:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.animatedContentRenderingDuration`](./UIContainer#UIContainer:Presets:animatedContentRenderingDuration).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UIColumn:Presets:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.animatedContentRenderingVelocity`](./UIContainer#UIContainer:Presets:animatedContentRenderingVelocity).



## ![](/assets/icons/spec-property.svg).style {#UIColumn:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIColumn:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIColumn:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIColumn:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIColumn:Presets:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleRole`](./UIComponent#UIComponent:Presets:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIColumn:Presets:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleLabel`](./UIComponent#UIComponent:Presets:accessibleLabel).



## ![](/assets/icons/spec-property.svg).requestFocus {#UIColumn:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIColumn:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIColumn:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).

