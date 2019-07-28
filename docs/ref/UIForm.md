---
title: UIForm
nav: |

  #### Declarations
  * [**class UIForm**](#UIForm)
  * [.find()](#UIForm:find)
  * [.style](#UIForm:style)
  * [.accessibleRole](#UIForm:accessibleRole)
  * [.formContext](#UIForm:formContext)

  #### Inherited
  * [.isFocusable()](#UIForm:isFocusable)
  * [.isKeyboardFocusable()](#UIForm:isKeyboardFocusable)
  * [.allowFocus](#UIForm:allowFocus)
  * [.allowKeyboardFocus](#UIForm:allowKeyboardFocus)
  * [.padding](#UIForm:padding)
  * [.margin](#UIForm:margin)
  * [.background](#UIForm:background)
  * [.textColor](#UIForm:textColor)
  * [.borderThickness](#UIForm:borderThickness)
  * [.borderColor](#UIForm:borderColor)
  * [.borderStyle](#UIForm:borderStyle)
  * [.borderRadius](#UIForm:borderRadius)
  * [.dropShadow](#UIForm:dropShadow)
  * [.css](#UIForm:css)
  * [.applyStyle()](#UIForm:applyStyle)
  * [.applyLayout()](#UIForm:applyLayout)
  * [.layout](#UIForm:layout)
  * [.separator](#UIForm:separator)
  * [.asyncContentRendering](#UIForm:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UIForm:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UIForm:animatedContentRenderingVelocity)
  * [.content](#UIForm:content)
  * [.propagateComponentEvent()](#UIForm:propagateComponentEvent)
  * [.render()](#UIForm:render)
  * [.requestFocus()](#UIForm:requestFocus)
  * [.requestFocusNext()](#UIForm:requestFocusNext)
  * [.requestFocusPrevious()](#UIForm:requestFocusPrevious)
  * [.hidden](#UIForm:hidden)
  * [.dimensions](#UIForm:dimensions)
  * [.position](#UIForm:position)
  * [.accessibleLabel](#UIForm:accessibleLabel)
  * [.revealTransition](#UIForm:revealTransition)
  * [.exitTransition](#UIForm:exitTransition)
  * [.lastRenderOutput](#UIForm:lastRenderOutput)
  * [.isPresetComponent()](#UIForm:isPresetComponent)
  * [.getParentComponent()](#UIForm:getParentComponent)
  * [.getCompositeParent()](#UIForm:getCompositeParent)
  * [.managedId](#UIForm:managedId)
  * [.managedState](#UIForm:managedState)
  * [.getReferenceCount()](#UIForm:getReferenceCount)
  * [.getManagedReferrers()](#UIForm:getManagedReferrers)
  * [.getManagedParent()](#UIForm:getManagedParent)
  * [.emit()](#UIForm:emit)
  * [.propagateChildEvents()](#UIForm:propagateChildEvents)
  * [.activateManagedAsync()](#UIForm:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIForm:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIForm:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIForm:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIForm:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIForm:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIForm:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIForm:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIForm.Presets**](#UIForm:Presets)
  * [.formContext](#UIForm:Presets:formContext)
  * [.onFormContextChange](#UIForm:Presets:onFormContextChange)
  * [.onSubmit](#UIForm:Presets:onSubmit)
  * [.padding](#UIForm:Presets:padding)
  * [.margin](#UIForm:Presets:margin)
  * [.background](#UIForm:Presets:background)
  * [.textColor](#UIForm:Presets:textColor)
  * [.borderThickness](#UIForm:Presets:borderThickness)
  * [.borderColor](#UIForm:Presets:borderColor)
  * [.borderStyle](#UIForm:Presets:borderStyle)
  * [.borderRadius](#UIForm:Presets:borderRadius)
  * [.dropShadow](#UIForm:Presets:dropShadow)
  * [.highlight](#UIForm:Presets:highlight)
  * [.selectOnFocus](#UIForm:Presets:selectOnFocus)
  * [.allowFocus](#UIForm:Presets:allowFocus)
  * [.allowKeyboardFocus](#UIForm:Presets:allowKeyboardFocus)
  * [.css](#UIForm:Presets:css)
  * [.content](#UIForm:Presets:content)
  * [.layout](#UIForm:Presets:layout)
  * [.separator](#UIForm:Presets:separator)
  * [.asyncContentRendering](#UIForm:Presets:asyncContentRendering)
  * [.animatedContentRenderingDuration](#UIForm:Presets:animatedContentRenderingDuration)
  * [.animatedContentRenderingVelocity](#UIForm:Presets:animatedContentRenderingVelocity)
  * [.style](#UIForm:Presets:style)
  * [.hidden](#UIForm:Presets:hidden)
  * [.dimensions](#UIForm:Presets:dimensions)
  * [.position](#UIForm:Presets:position)
  * [.accessibleRole](#UIForm:Presets:accessibleRole)
  * [.accessibleLabel](#UIForm:Presets:accessibleLabel)
  * [.requestFocus](#UIForm:Presets:requestFocus)
  * [.revealTransition](#UIForm:Presets:revealTransition)
  * [.exitTransition](#UIForm:Presets:exitTransition)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIForm {#UIForm}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UICell`](./UICell)</code></pre>
{:.declarationspec}

Represents a UI component that groups form controls and other content in a cell.

**Note:** This component is optional and has the same effect as [`UIFormContextController`](./UIFormContextController) which does not render its own cell.

### Constructor
```typescript
(...content: UIRenderable[]): UIForm
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).find() <span class="spec_tag">static</span> {#UIForm:find}
{:.spec}

```typescript
(component: Component): UIFormContextController | UIForm
```
{:.declarationspec}
Returns the closest parent form (or form context controller, see [`UIFormContextController`](./UIFormContextController)) for given component; can be used by input components to find and observe the form context component before rendering.

Does not return components beyond the scope of the current [`AppActivity`](./AppActivity) parent.



## ![](/assets/icons/spec-property.svg).style {#UIForm:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set; when this is set to an instance of [`UIStyle`](./UIStyle), the individual style object properties (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)) are set to read-only objects taken from the [`UIStyle`](./UIStyle) instance. To override individual properties, set these properties *after* setting [`style`](#UIForm:style), or use [`Component.with`](./Component#Component:with) to create a new constructor.



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIForm:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
WAI-ARIA role for this component, if applicable.



## ![](/assets/icons/spec-property.svg).formContext {#UIForm:formContext}
{:.spec}

```typescript
ManagedRecord
```
{:.declarationspec}
Form state context; defaults to an empty managed record.



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIForm:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UICell.isFocusable`](./UICell#UICell:isFocusable).



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIForm:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UICell.isKeyboardFocusable`](./UICell#UICell:isKeyboardFocusable).



## ![](/assets/icons/spec-property.svg).allowFocus {#UIForm:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UICell.allowFocus`](./UICell#UICell:allowFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIForm:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UICell.allowKeyboardFocus`](./UICell#UICell:allowKeyboardFocus).



## ![](/assets/icons/spec-property.svg).padding {#UIForm:padding}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Inherited from [`UICell.padding`](./UICell#UICell:padding).



## ![](/assets/icons/spec-property.svg).margin {#UIForm:margin}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Inherited from [`UICell.margin`](./UICell#UICell:margin).



## ![](/assets/icons/spec-property.svg).background {#UIForm:background}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UICell.background`](./UICell#UICell:background).



## ![](/assets/icons/spec-property.svg).textColor {#UIForm:textColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UICell.textColor`](./UICell#UICell:textColor).



## ![](/assets/icons/spec-property.svg).borderThickness {#UIForm:borderThickness}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Inherited from [`UICell.borderThickness`](./UICell#UICell:borderThickness).



## ![](/assets/icons/spec-property.svg).borderColor {#UIForm:borderColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UICell.borderColor`](./UICell#UICell:borderColor).



## ![](/assets/icons/spec-property.svg).borderStyle {#UIForm:borderStyle}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UICell.borderStyle`](./UICell#UICell:borderStyle).



## ![](/assets/icons/spec-property.svg).borderRadius {#UIForm:borderRadius}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Inherited from [`UICell.borderRadius`](./UICell#UICell:borderRadius).



## ![](/assets/icons/spec-property.svg).dropShadow {#UIForm:dropShadow}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UICell.dropShadow`](./UICell#UICell:dropShadow).



## ![](/assets/icons/spec-property.svg).css {#UIForm:css}
{:.spec}

```typescript
Partial<CSSStyleDeclaration> & { className?: string; }
```
{:.declarationspec}
Inherited from [`UICell.css`](./UICell#UICell:css).



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIForm:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIContainer.applyStyle`](./UIContainer#UIContainer:applyStyle).



## ![](/assets/icons/spec-method.svg).applyLayout() <span class="spec_tag">protected</span> {#UIForm:applyLayout}
{:.spec}

```typescript
(layout: Partial<ContainerLayout>): void
```
{:.declarationspec}
Inherited from [`UIContainer.applyLayout`](./UIContainer#UIContainer:applyLayout).



## ![](/assets/icons/spec-property.svg).layout {#UIForm:layout}
{:.spec}

```typescript
ContainerLayout
```
{:.declarationspec}
Inherited from [`UIContainer.layout`](./UIContainer#UIContainer:layout).



## ![](/assets/icons/spec-property.svg).separator {#UIForm:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Inherited from [`UIContainer.separator`](./UIContainer#UIContainer:separator).



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UIForm:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.asyncContentRendering`](./UIContainer#UIContainer:asyncContentRendering).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UIForm:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.animatedContentRenderingDuration`](./UIContainer#UIContainer:animatedContentRenderingDuration).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UIForm:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.animatedContentRenderingVelocity`](./UIContainer#UIContainer:animatedContentRenderingVelocity).



## ![](/assets/icons/spec-property.svg).content {#UIForm:content}
{:.spec}

```typescript
ManagedList<UIRenderable>
```
{:.declarationspec}
Inherited from [`UIContainer.content`](./UIContainer#UIContainer:content).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIForm:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIForm:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIForm:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIForm:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIForm:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).hidden {#UIForm:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIForm:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIForm:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIForm:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleLabel`](./UIComponent#UIComponent:accessibleLabel).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIForm:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIForm:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIForm:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIForm:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIForm:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIForm:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UIForm:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIForm:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIForm:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIForm:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIForm:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIForm:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIForm:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIForm:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIForm:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIForm:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIForm:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIForm:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIForm:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIForm:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIForm:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIForm.Presets {#UIForm:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UICell.Presets`](./UICell#UICell:Presets)</code></pre>
{:.declarationspec}

UIForm presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).formContext {#UIForm:Presets:formContext}
{:.spec}

```typescript
ManagedRecord
```
{:.declarationspec}
Form state object; must be a (binding to a) managed record, see [`ManagedRecord`](./ManagedRecord).



## ![](/assets/icons/spec-property.svg).onFormContextChange {#UIForm:Presets:onFormContextChange}
{:.spec}

```typescript
ComponentEventHandler<UIForm, ComponentEvent>
```
{:.declarationspec}
Event handler for any change to the form state.



## ![](/assets/icons/spec-property.svg).onSubmit {#UIForm:Presets:onSubmit}
{:.spec}

```typescript
ComponentEventHandler<UIForm, ComponentEvent>
```
{:.declarationspec}
Event handler for form submissions.



## ![](/assets/icons/spec-property.svg).padding {#UIForm:Presets:padding}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Inherited from [`UICell.Presets.padding`](./UICell#UICell:Presets:padding).



## ![](/assets/icons/spec-property.svg).margin {#UIForm:Presets:margin}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Inherited from [`UICell.Presets.margin`](./UICell#UICell:Presets:margin).



## ![](/assets/icons/spec-property.svg).background {#UIForm:Presets:background}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UICell.Presets.background`](./UICell#UICell:Presets:background).



## ![](/assets/icons/spec-property.svg).textColor {#UIForm:Presets:textColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UICell.Presets.textColor`](./UICell#UICell:Presets:textColor).



## ![](/assets/icons/spec-property.svg).borderThickness {#UIForm:Presets:borderThickness}
{:.spec}

```typescript
UICellOffsets
```
{:.declarationspec}
Inherited from [`UICell.Presets.borderThickness`](./UICell#UICell:Presets:borderThickness).



## ![](/assets/icons/spec-property.svg).borderColor {#UIForm:Presets:borderColor}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UICell.Presets.borderColor`](./UICell#UICell:Presets:borderColor).



## ![](/assets/icons/spec-property.svg).borderStyle {#UIForm:Presets:borderStyle}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UICell.Presets.borderStyle`](./UICell#UICell:Presets:borderStyle).



## ![](/assets/icons/spec-property.svg).borderRadius {#UIForm:Presets:borderRadius}
{:.spec}

```typescript
string | number
```
{:.declarationspec}
Inherited from [`UICell.Presets.borderRadius`](./UICell#UICell:Presets:borderRadius).



## ![](/assets/icons/spec-property.svg).dropShadow {#UIForm:Presets:dropShadow}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UICell.Presets.dropShadow`](./UICell#UICell:Presets:dropShadow).



## ![](/assets/icons/spec-property.svg).highlight {#UIForm:Presets:highlight}
{:.spec}

```typescript
HighlightProperties
```
{:.declarationspec}
Inherited from [`UICell.Presets.highlight`](./UICell#UICell:Presets:highlight).



## ![](/assets/icons/spec-property.svg).selectOnFocus {#UIForm:Presets:selectOnFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UICell.Presets.selectOnFocus`](./UICell#UICell:Presets:selectOnFocus).



## ![](/assets/icons/spec-property.svg).allowFocus {#UIForm:Presets:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UICell.Presets.allowFocus`](./UICell#UICell:Presets:allowFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIForm:Presets:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UICell.Presets.allowKeyboardFocus`](./UICell#UICell:Presets:allowKeyboardFocus).



## ![](/assets/icons/spec-property.svg).css {#UIForm:Presets:css}
{:.spec}

```typescript
Partial<CSSStyleDeclaration> & { className?: string; }
```
{:.declarationspec}
Inherited from [`UICell.Presets.css`](./UICell#UICell:Presets:css).



## ![](/assets/icons/spec-property.svg).content {#UIForm:Presets:content}
{:.spec}

```typescript
Iterable<UIRenderable>
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.content`](./UIContainer#UIContainer:Presets:content).



## ![](/assets/icons/spec-property.svg).layout {#UIForm:Presets:layout}
{:.spec}

```typescript
Partial<{}> | Partial<ContainerLayout>
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.layout`](./UIContainer#UIContainer:Presets:layout).



## ![](/assets/icons/spec-property.svg).separator {#UIForm:Presets:separator}
{:.spec}

```typescript
SeparatorOptions
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.separator`](./UIContainer#UIContainer:Presets:separator).



## ![](/assets/icons/spec-property.svg).asyncContentRendering {#UIForm:Presets:asyncContentRendering}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.asyncContentRendering`](./UIContainer#UIContainer:Presets:asyncContentRendering).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingDuration {#UIForm:Presets:animatedContentRenderingDuration}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.animatedContentRenderingDuration`](./UIContainer#UIContainer:Presets:animatedContentRenderingDuration).



## ![](/assets/icons/spec-property.svg).animatedContentRenderingVelocity {#UIForm:Presets:animatedContentRenderingVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UIContainer.Presets.animatedContentRenderingVelocity`](./UIContainer#UIContainer:Presets:animatedContentRenderingVelocity).



## ![](/assets/icons/spec-property.svg).style {#UIForm:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIForm:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIForm:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIForm:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIForm:Presets:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleRole`](./UIComponent#UIComponent:Presets:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIForm:Presets:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleLabel`](./UIComponent#UIComponent:Presets:accessibleLabel).



## ![](/assets/icons/spec-property.svg).requestFocus {#UIForm:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).



## ![](/assets/icons/spec-property.svg).revealTransition {#UIForm:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIForm:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).

