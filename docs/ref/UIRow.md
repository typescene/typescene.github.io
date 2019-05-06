---
title: UIRow
nav: |

  #### Declarations
  * [**class UIRow**](#UIRow)
  * [.style](#UIRow:style)
  * [.hasComponentSpacing()](#UIRow:hasComponentSpacing)
  * [.spacing](#UIRow:spacing)
  * [.height](#UIRow:height)

  #### Inherited
  * [.applyStyle()](#UIRow:applyStyle)
  * [.applyLayout()](#UIRow:applyLayout)
  * [.isFocusable()](#UIRow:isFocusable)
  * [.isKeyboardFocusable()](#UIRow:isKeyboardFocusable)
  * [.allowFocus](#UIRow:allowFocus)
  * [.allowKeyboardFocus](#UIRow:allowKeyboardFocus)
  * [.layout](#UIRow:layout)
  * [.separator](#UIRow:separator)
  * [.asyncContentRendering](#UIRow:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UIRow:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UIRow:animatedContentRenderingVelocity)
  * [.content](#UIRow:content)
  * [.propagateComponentEvent()](#UIRow:propagateComponentEvent)
  * [.render()](#UIRow:render)
  * [.requestFocus()](#UIRow:requestFocus)
  * [.requestFocusNext()](#UIRow:requestFocusNext)
  * [.requestFocusPrevious()](#UIRow:requestFocusPrevious)
  * [.hidden](#UIRow:hidden)
  * [.dimensions](#UIRow:dimensions)
  * [.position](#UIRow:position)
  * [.revealTransition](#UIRow:revealTransition)
  * [.exitTransition](#UIRow:exitTransition)
  * [.lastRenderOutput](#UIRow:lastRenderOutput)
  * [.isPresetComponent()](#UIRow:isPresetComponent)
  * [.getParentComponent()](#UIRow:getParentComponent)
  * [.getCompositeParent()](#UIRow:getCompositeParent)
  * [.managedId](#UIRow:managedId)
  * [.managedState](#UIRow:managedState)
  * [.getReferenceCount()](#UIRow:getReferenceCount)
  * [.getManagedReferrers()](#UIRow:getManagedReferrers)
  * [.getManagedParent()](#UIRow:getManagedParent)
  * [.emit()](#UIRow:emit)
  * [.propagateChildEvents()](#UIRow:propagateChildEvents)
  * [.activateManagedAsync()](#UIRow:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIRow:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIRow:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIRow:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIRow:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIRow:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIRow:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIRow:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIRow.Presets**](#UIRow:Presets)
  * [.spacing](#UIRow:Presets:spacing)
  * [.height](#UIRow:Presets:height)
  * [.content](#UIRow:Presets:content)
  * [.layout](#UIRow:Presets:layout)
  * [.separator](#UIRow:Presets:separator)
  * [.allowFocus](#UIRow:Presets:allowFocus)
  * [.allowKeyboardFocus](#UIRow:Presets:allowKeyboardFocus)
  * [.asyncContentRendering](#UIRow:Presets:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UIRow:Presets:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UIRow:Presets:animatedContentRenderingVelocity)
  * [.style](#UIRow:Presets:style)
  * [.hidden](#UIRow:Presets:hidden)
  * [.dimensions](#UIRow:Presets:dimensions)
  * [.position](#UIRow:Presets:position)
  * [.requestFocus](#UIRow:Presets:requestFocus)
  * [.revealTransition](#UIRow:Presets:revealTransition)
  * [.exitTransition](#UIRow:Presets:exitTransition)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIRow {#UIRow}
{:.spec}

Represents a UI component that contains other components, in a horizontal arrangement.

### Constructor
```typescript
(...content: UIRenderable[]): UIRow
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).style {#UIRow:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set; when this is set to an instance of [`UIStyle`](./UIStyle), the individual style object properties (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)) are set to read-only objects taken from the [`UIStyle`](./UIStyle) instance. To override individual properties, set these properties *after* setting [`style`](#UIRow:style), or use [`Component.with`](./Component#Component:with) to create a new constructor.



## ![](/assets/icons/spec-method.svg).hasComponentSpacing() {#UIRow:hasComponentSpacing}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if spacing between components should be non-zero (used by renderer).



## ![](/assets/icons/spec-property.svg).spacing {#UIRow:spacing}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Space between components along horizontal axis (in dp or string with unit, defaults to 8).



## ![](/assets/icons/spec-property.svg).height {#UIRow:height}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Row height (in dp or string with unit, overrides value set in [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions), if any).



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIRow:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIContainer.applyStyle`](./UIContainer#UIContainer:applyStyle).



## ![](/assets/icons/spec-method.svg).applyLayout() <span class="spec_tag">protected</span> {#UIRow:applyLayout}
{:.spec}

```typescript
(layout: Partial<ContainerLayout>): void
```
{:.declarationspec}
Inherited from [`UIContainer.applyLayout`](./UIContainer#UIContainer:applyLayout).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIRow:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIContainer.isFocusable`](./UIContainer#UIContainer:isFocusable).



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIRow:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIContainer.isKeyboardFocusable`](./UIContainer#UIContainer:isKeyboardFocusable).



## ![](/assets/icons/spec-property.svg).allowFocus {#UIRow:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.allowFocus`](./UIContainer#UIContainer:allowFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIRow:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.allowKeyboardFocus`](./UIContainer#UIContainer:allowKeyboardFocus).



## ![](/assets/icons/spec-property.svg).layout {#UIRow:layout}
{:.spec}

```typescript
ContainerLayout
```
{:.declarationspec}
Inherited from [`UIContainer.layout`](./UIContainer#UIContainer:layout).



## ![](/assets/icons/spec-property.svg).separator {#UIRow:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Inherited from [`UIContainer.separator`](./UIContainer#UIContainer:separator).



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UIRow:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.asyncContentRendering`](./UIContainer#UIContainer:asyncContentRendering).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UIRow:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.animatedContentRenderingDuration`](./UIContainer#UIContainer:animatedContentRenderingDuration).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UIRow:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.animatedContentRenderingVelocity`](./UIContainer#UIContainer:animatedContentRenderingVelocity).



## ![](/assets/icons/spec-property.svg).content {#UIRow:content}
{:.spec}

```typescript
ManagedList<UIRenderable>
```
{:.declarationspec}
Inherited from [`UIContainer.content`](./UIContainer#UIContainer:content).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIRow:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIRow:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIRow:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIRow:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIRow:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).hidden {#UIRow:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIRow:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIRow:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIRow:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIRow:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIRow:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIRow:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIRow:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIRow:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UIRow:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIRow:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIRow:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIRow:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIRow:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIRow:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIRow:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIRow:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIRow:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIRow:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIRow:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIRow:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIRow:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIRow:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIRow:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIRow.Presets {#UIRow:Presets}
{:.spec}

UIRow presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).spacing {#UIRow:Presets:spacing}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Space between components along horizontal axis (in dp or string with unit, defaults to 16).



## ![](/assets/icons/spec-property.svg).height {#UIRow:Presets:height}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Row height (in dp or string with unit, overrides value set in [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions), if any).



## ![](/assets/icons/spec-property.svg).content {#UIRow:Presets:content}
{:.spec}

```typescript
Iterable<UIRenderable>
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.content`](./UIContainer#UIContainer:Presets:content).



## ![](/assets/icons/spec-property.svg).layout {#UIRow:Presets:layout}
{:.spec}

```typescript
Partial<{}> | Partial<ContainerLayout>
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.layout`](./UIContainer#UIContainer:Presets:layout).



## ![](/assets/icons/spec-property.svg).separator {#UIRow:Presets:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.separator`](./UIContainer#UIContainer:Presets:separator).



## ![](/assets/icons/spec-property.svg).allowFocus {#UIRow:Presets:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.allowFocus`](./UIContainer#UIContainer:Presets:allowFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIRow:Presets:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.allowKeyboardFocus`](./UIContainer#UIContainer:Presets:allowKeyboardFocus).



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UIRow:Presets:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.asyncContentRendering`](./UIContainer#UIContainer:Presets:asyncContentRendering).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UIRow:Presets:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.animatedContentRenderingDuration`](./UIContainer#UIContainer:Presets:animatedContentRenderingDuration).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UIRow:Presets:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.animatedContentRenderingVelocity`](./UIContainer#UIContainer:Presets:animatedContentRenderingVelocity).



## ![](/assets/icons/spec-property.svg).style {#UIRow:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIRow:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIRow:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIRow:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).requestFocus {#UIRow:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIRow:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIRow:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).

