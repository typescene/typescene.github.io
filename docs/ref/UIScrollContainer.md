---
title: UIScrollContainer
nav: |

  #### Declarations
  * [**class UIScrollContainer**](#UIScrollContainer)
  * [.style](#UIScrollContainer:style)
  * [.verticalSnap](#UIScrollContainer:verticalSnap)
  * [.horizontalSnap](#UIScrollContainer:horizontalSnap)
  * [.topThreshold](#UIScrollContainer:topThreshold)
  * [.bottomThreshold](#UIScrollContainer:bottomThreshold)
  * [.leftThreshold](#UIScrollContainer:leftThreshold)
  * [.rightThreshold](#UIScrollContainer:rightThreshold)
  * [.verticalScrollEnabled](#UIScrollContainer:verticalScrollEnabled)
  * [.horizontalScrollEnabled](#UIScrollContainer:horizontalScrollEnabled)

  #### Inherited
  * [.applyStyle()](#UIScrollContainer:applyStyle)
  * [.applyLayout()](#UIScrollContainer:applyLayout)
  * [.isFocusable()](#UIScrollContainer:isFocusable)
  * [.isKeyboardFocusable()](#UIScrollContainer:isKeyboardFocusable)
  * [.allowFocus](#UIScrollContainer:allowFocus)
  * [.allowKeyboardFocus](#UIScrollContainer:allowKeyboardFocus)
  * [.layout](#UIScrollContainer:layout)
  * [.separator](#UIScrollContainer:separator)
  * [.asyncContentRendering](#UIScrollContainer:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UIScrollContainer:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UIScrollContainer:animatedContentRenderingVelocity)
  * [.content](#UIScrollContainer:content)
  * [.propagateComponentEvent()](#UIScrollContainer:propagateComponentEvent)
  * [.render()](#UIScrollContainer:render)
  * [.requestFocus()](#UIScrollContainer:requestFocus)
  * [.requestFocusNext()](#UIScrollContainer:requestFocusNext)
  * [.requestFocusPrevious()](#UIScrollContainer:requestFocusPrevious)
  * [.hidden](#UIScrollContainer:hidden)
  * [.dimensions](#UIScrollContainer:dimensions)
  * [.position](#UIScrollContainer:position)
  * [.revealTransition](#UIScrollContainer:revealTransition)
  * [.exitTransition](#UIScrollContainer:exitTransition)
  * [.lastRenderOutput](#UIScrollContainer:lastRenderOutput)
  * [.isPresetComponent()](#UIScrollContainer:isPresetComponent)
  * [.getParentComponent()](#UIScrollContainer:getParentComponent)
  * [.getCompositeParent()](#UIScrollContainer:getCompositeParent)
  * [.managedId](#UIScrollContainer:managedId)
  * [.managedState](#UIScrollContainer:managedState)
  * [.getReferenceCount()](#UIScrollContainer:getReferenceCount)
  * [.getManagedReferrers()](#UIScrollContainer:getManagedReferrers)
  * [.getManagedParent()](#UIScrollContainer:getManagedParent)
  * [.emit()](#UIScrollContainer:emit)
  * [.propagateChildEvents()](#UIScrollContainer:propagateChildEvents)
  * [.activateManagedAsync()](#UIScrollContainer:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIScrollContainer:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIScrollContainer:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIScrollContainer:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIScrollContainer:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIScrollContainer:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIScrollContainer:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIScrollContainer:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIScrollContainer.Presets**](#UIScrollContainer:Presets)
  * [.verticalScrollEnabled](#UIScrollContainer:Presets:verticalScrollEnabled)
  * [.horizontalScrollEnabled](#UIScrollContainer:Presets:horizontalScrollEnabled)
  * [.verticalSnap](#UIScrollContainer:Presets:verticalSnap)
  * [.horizontalSnap](#UIScrollContainer:Presets:horizontalSnap)
  * [.topThreshold](#UIScrollContainer:Presets:topThreshold)
  * [.bottomThreshold](#UIScrollContainer:Presets:bottomThreshold)
  * [.leftThreshold](#UIScrollContainer:Presets:leftThreshold)
  * [.rightThreshold](#UIScrollContainer:Presets:rightThreshold)
  * [.onScroll](#UIScrollContainer:Presets:onScroll)
  * [.onScrollEnd](#UIScrollContainer:Presets:onScrollEnd)
  * [.content](#UIScrollContainer:Presets:content)
  * [.layout](#UIScrollContainer:Presets:layout)
  * [.separator](#UIScrollContainer:Presets:separator)
  * [.allowFocus](#UIScrollContainer:Presets:allowFocus)
  * [.allowKeyboardFocus](#UIScrollContainer:Presets:allowKeyboardFocus)
  * [.asyncContentRendering](#UIScrollContainer:Presets:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UIScrollContainer:Presets:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UIScrollContainer:Presets:animatedContentRenderingVelocity)
  * [.style](#UIScrollContainer:Presets:style)
  * [.hidden](#UIScrollContainer:Presets:hidden)
  * [.dimensions](#UIScrollContainer:Presets:dimensions)
  * [.position](#UIScrollContainer:Presets:position)
  * [.requestFocus](#UIScrollContainer:Presets:requestFocus)
  * [.revealTransition](#UIScrollContainer:Presets:revealTransition)
  * [.exitTransition](#UIScrollContainer:Presets:exitTransition)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIScrollContainer {#UIScrollContainer}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIContainer`](./UIContainer)</code></pre>
{:.declarationspec}

Represents a UI component that contains other components and allows scrolling horizontally and/or vertically, and emits throttled scroll events (`Scroll` and `ScrollEnd`, see [`UIScrollEvent`](./UIScrollEvent)).

### Constructor
```typescript
(...content: UIRenderable[]): UIScrollContainer
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).style {#UIScrollContainer:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set; when this is set to an instance of [`UIStyle`](./UIStyle), the individual style object properties (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)) are set to read-only objects taken from the [`UIStyle`](./UIStyle) instance. To override individual properties, set these properties *after* setting [`style`](#UIScrollContainer:style), or use [`Component.with`](./Component#Component:with) to create a new constructor.



## ![](/assets/icons/spec-property.svg).verticalSnap {#UIScrollContainer:verticalSnap}
{:.spec}

```typescript
"start" | "end" | "center"
```
{:.declarationspec}
Vertical scroll snap mode: `start` (snap to start of first 'mostly' visible component), `center` (snap container center to center of component closest to the center), or `end` (snap to end of last 'mostly' visible component).



## ![](/assets/icons/spec-property.svg).horizontalSnap {#UIScrollContainer:horizontalSnap}
{:.spec}

```typescript
"start" | "end" | "center"
```
{:.declarationspec}
Horizontal scroll snap mode: `start` (snap to start of first 'mostly' visible component), `center` (snap container center to center of component closest to the center), or `end` (snap to end of last 'mostly' visible component).



## ![](/assets/icons/spec-property.svg).topThreshold {#UIScrollContainer:topThreshold}
{:.spec}

```typescript
number
```
{:.declarationspec}
Vertical threshold (in pixels) until which [`UIScrollEvent.atTop`](./UIScrollEvent#UIScrollEvent:atTop) is set, defaults to 0.



## ![](/assets/icons/spec-property.svg).bottomThreshold {#UIScrollContainer:bottomThreshold}
{:.spec}

```typescript
number
```
{:.declarationspec}
Vertical threshold (in pixels) until which [`UIScrollEvent.atBottom`](./UIScrollEvent#UIScrollEvent:atBottom) is set, defaults to 0.



## ![](/assets/icons/spec-property.svg).leftThreshold {#UIScrollContainer:leftThreshold}
{:.spec}

```typescript
number
```
{:.declarationspec}
Horizontal threshold (in pixels) until which [`UIScrollEvent.atLeft`](./UIScrollEvent#UIScrollEvent:atLeft) is set, defaults to 0.



## ![](/assets/icons/spec-property.svg).rightThreshold {#UIScrollContainer:rightThreshold}
{:.spec}

```typescript
number
```
{:.declarationspec}
Horizontal threshold (in pixels) until which [`UIScrollEvent.atRight`](./UIScrollEvent#UIScrollEvent:atRight) is set, defaults to 0.



## ![](/assets/icons/spec-property.svg).verticalScrollEnabled {#UIScrollContainer:verticalScrollEnabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if vertical scrolling should be enabled, defaults to true.



## ![](/assets/icons/spec-property.svg).horizontalScrollEnabled {#UIScrollContainer:horizontalScrollEnabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if horizontal scrolling should be enabled, defaults to true.



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIScrollContainer:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIContainer.applyStyle`](./UIContainer#UIContainer:applyStyle).



## ![](/assets/icons/spec-method.svg).applyLayout() <span class="spec_tag">protected</span> {#UIScrollContainer:applyLayout}
{:.spec}

```typescript
(layout: Partial<ContainerLayout>): void
```
{:.declarationspec}
Inherited from [`UIContainer.applyLayout`](./UIContainer#UIContainer:applyLayout).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIScrollContainer:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIContainer.isFocusable`](./UIContainer#UIContainer:isFocusable).



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIScrollContainer:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIContainer.isKeyboardFocusable`](./UIContainer#UIContainer:isKeyboardFocusable).



## ![](/assets/icons/spec-property.svg).allowFocus {#UIScrollContainer:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.allowFocus`](./UIContainer#UIContainer:allowFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIScrollContainer:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.allowKeyboardFocus`](./UIContainer#UIContainer:allowKeyboardFocus).



## ![](/assets/icons/spec-property.svg).layout {#UIScrollContainer:layout}
{:.spec}

```typescript
ContainerLayout
```
{:.declarationspec}
Inherited from [`UIContainer.layout`](./UIContainer#UIContainer:layout).



## ![](/assets/icons/spec-property.svg).separator {#UIScrollContainer:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Inherited from [`UIContainer.separator`](./UIContainer#UIContainer:separator).



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UIScrollContainer:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.asyncContentRendering`](./UIContainer#UIContainer:asyncContentRendering).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UIScrollContainer:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.animatedContentRenderingDuration`](./UIContainer#UIContainer:animatedContentRenderingDuration).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UIScrollContainer:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.animatedContentRenderingVelocity`](./UIContainer#UIContainer:animatedContentRenderingVelocity).



## ![](/assets/icons/spec-property.svg).content {#UIScrollContainer:content}
{:.spec}

```typescript
ManagedList<UIRenderable>
```
{:.declarationspec}
Inherited from [`UIContainer.content`](./UIContainer#UIContainer:content).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIScrollContainer:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIScrollContainer:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIScrollContainer:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIScrollContainer:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIScrollContainer:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).hidden {#UIScrollContainer:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIScrollContainer:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIScrollContainer:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIScrollContainer:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIScrollContainer:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIScrollContainer:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIScrollContainer:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIScrollContainer:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIScrollContainer:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UIScrollContainer:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIScrollContainer:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIScrollContainer:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIScrollContainer:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIScrollContainer:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIScrollContainer:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIScrollContainer:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIScrollContainer:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIScrollContainer:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIScrollContainer:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIScrollContainer:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIScrollContainer:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIScrollContainer:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIScrollContainer:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIScrollContainer:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIScrollContainer.Presets {#UIScrollContainer:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIContainer.Presets`](./UIContainer#UIContainer:Presets)</code></pre>
{:.declarationspec}

UIScrollContainer presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).verticalScrollEnabled {#UIScrollContainer:Presets:verticalScrollEnabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if vertical scrolling should be enabled, defaults to true.



## ![](/assets/icons/spec-property.svg).horizontalScrollEnabled {#UIScrollContainer:Presets:horizontalScrollEnabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if horizontal scrolling should be enabled, defaults to true.



## ![](/assets/icons/spec-property.svg).verticalSnap {#UIScrollContainer:Presets:verticalSnap}
{:.spec}

```typescript
"start" | "end" | "center"
```
{:.declarationspec}
Vertical scroll snap mode: `start` (snap to start of first 'mostly' visible component), `center` (snap container center to center of component closest to the center), or `end` (snap to end of last 'mostly' visible component).



## ![](/assets/icons/spec-property.svg).horizontalSnap {#UIScrollContainer:Presets:horizontalSnap}
{:.spec}

```typescript
"start" | "end" | "center"
```
{:.declarationspec}
Horizontal scroll snap mode: `start` (snap to start of first 'mostly' visible component), `center` (snap container center to center of component closest to the center), or `end` (snap to end of last 'mostly' visible component).



## ![](/assets/icons/spec-property.svg).topThreshold {#UIScrollContainer:Presets:topThreshold}
{:.spec}

```typescript
number
```
{:.declarationspec}
Vertical threshold (in pixels) until which [`UIScrollEvent.atTop`](./UIScrollEvent#UIScrollEvent:atTop) is set, defaults to 0.



## ![](/assets/icons/spec-property.svg).bottomThreshold {#UIScrollContainer:Presets:bottomThreshold}
{:.spec}

```typescript
number
```
{:.declarationspec}
Vertical threshold (in pixels) until which [`UIScrollEvent.atBottom`](./UIScrollEvent#UIScrollEvent:atBottom) is set, defaults to 0.



## ![](/assets/icons/spec-property.svg).leftThreshold {#UIScrollContainer:Presets:leftThreshold}
{:.spec}

```typescript
number
```
{:.declarationspec}
Horizontal threshold (in pixels) until which [`UIScrollEvent.atLeft`](./UIScrollEvent#UIScrollEvent:atLeft) is set, defaults to 0.



## ![](/assets/icons/spec-property.svg).rightThreshold {#UIScrollContainer:Presets:rightThreshold}
{:.spec}

```typescript
number
```
{:.declarationspec}
Horizontal threshold (in pixels) until which [`UIScrollEvent.atRight`](./UIScrollEvent#UIScrollEvent:atRight) is set, defaults to 0.



## ![](/assets/icons/spec-property.svg).onScroll {#UIScrollContainer:Presets:onScroll}
{:.spec}

```typescript
UIComponentEventHandler<UIComponent, UIComponentEvent<UIComponent>>
```
{:.declarationspec}
Event handler for Scroll events.



## ![](/assets/icons/spec-property.svg).onScrollEnd {#UIScrollContainer:Presets:onScrollEnd}
{:.spec}

```typescript
UIComponentEventHandler<UIComponent, UIComponentEvent<UIComponent>>
```
{:.declarationspec}
Event handler for ScrollEnd events.



## ![](/assets/icons/spec-property.svg).content {#UIScrollContainer:Presets:content}
{:.spec}

```typescript
Iterable<UIRenderable>
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.content`](./UIContainer#UIContainer:Presets:content).



## ![](/assets/icons/spec-property.svg).layout {#UIScrollContainer:Presets:layout}
{:.spec}

```typescript
Partial<{}> | Partial<ContainerLayout>
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.layout`](./UIContainer#UIContainer:Presets:layout).



## ![](/assets/icons/spec-property.svg).separator {#UIScrollContainer:Presets:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.separator`](./UIContainer#UIContainer:Presets:separator).



## ![](/assets/icons/spec-property.svg).allowFocus {#UIScrollContainer:Presets:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.allowFocus`](./UIContainer#UIContainer:Presets:allowFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIScrollContainer:Presets:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.allowKeyboardFocus`](./UIContainer#UIContainer:Presets:allowKeyboardFocus).



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UIScrollContainer:Presets:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.asyncContentRendering`](./UIContainer#UIContainer:Presets:asyncContentRendering).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UIScrollContainer:Presets:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.animatedContentRenderingDuration`](./UIContainer#UIContainer:Presets:animatedContentRenderingDuration).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UIScrollContainer:Presets:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.animatedContentRenderingVelocity`](./UIContainer#UIContainer:Presets:animatedContentRenderingVelocity).



## ![](/assets/icons/spec-property.svg).style {#UIScrollContainer:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIScrollContainer:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIScrollContainer:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIScrollContainer:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).requestFocus {#UIScrollContainer:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIScrollContainer:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIScrollContainer:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).

