---
title: UIForm
nav: |

  #### Declarations
  * [**class UIForm**](#UIForm)
  * [.formContext](#UIForm:formContext)

  #### Inherited
  * [.renderContext](#UIForm:renderContext)
  * [.content](#UIForm:content)
  * [.render()](#UIForm:render)
  * [.isPresetComponent()](#UIForm:isPresetComponent)
  * [.getParentComponent()](#UIForm:getParentComponent)
  * [.getBoundParentComponent()](#UIForm:getBoundParentComponent)
  * [.propagateComponentEvent()](#UIForm:propagateComponentEvent)
  * [.managedId](#UIForm:managedId)
  * [.managedState](#UIForm:managedState)
  * [.getReferenceCount()](#UIForm:getReferenceCount)
  * [.getManagedReferrers()](#UIForm:getManagedReferrers)
  * [.getManagedParent()](#UIForm:getManagedParent)
  * [.emit()](#UIForm:emit)
  * [.emitChange()](#UIForm:emitChange)
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
  * [.onSubmit](#UIForm:Presets:onSubmit)
  * [.decoration](#UIForm:Presets:decoration)
  * [.padding](#UIForm:Presets:padding)
  * [.margin](#UIForm:Presets:margin)
  * [.background](#UIForm:Presets:background)
  * [.textColor](#UIForm:Presets:textColor)
  * [.borderThickness](#UIForm:Presets:borderThickness)
  * [.borderColor](#UIForm:Presets:borderColor)
  * [.borderStyle](#UIForm:Presets:borderStyle)
  * [.borderRadius](#UIForm:Presets:borderRadius)
  * [.dropShadow](#UIForm:Presets:dropShadow)
  * [.opacity](#UIForm:Presets:opacity)
  * [.selectOnFocus](#UIForm:Presets:selectOnFocus)
  * [.allowFocus](#UIForm:Presets:allowFocus)
  * [.allowKeyboardFocus](#UIForm:Presets:allowKeyboardFocus)
  * [.revealTransition](#UIForm:Presets:revealTransition)
  * [.exitTransition](#UIForm:Presets:exitTransition)
  * [.css](#UIForm:Presets:css)
  * [.content](#UIForm:Presets:content)
  * [.layout](#UIForm:Presets:layout)
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
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class UIForm {#UIForm}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIRenderableController`](./UIRenderableController)</code></pre>
{:.declarationspec}

Represents a UI component that groups form controls and other content in a cell.

**Note:** This component encapsulates content in a [`UICell`](./UICell) component. To set a form context binding without grouping content, use [`UIFormContextController`](./UIFormContextController).

### Constructor
```typescript
(content?: UIRenderable): UIForm
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).formContext {#UIForm:formContext}
{:.spec}

```typescript
UIFormContext<any>
```
{:.declarationspec}
Form state context; should be bound to a [`UIFormContext`](./UIFormContext) component.



## ![](/assets/icons/spec-property.svg).renderContext {#UIForm:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`UIRenderableController.renderContext`](./UIRenderableController#UIRenderableController:renderContext).



## ![](/assets/icons/spec-property.svg).content {#UIForm:content}
{:.spec}

```typescript
TContent
```
{:.declarationspec}
Inherited from [`UIRenderableController.content`](./UIRenderableController#UIRenderableController:content).



## ![](/assets/icons/spec-method.svg).render() {#UIForm:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIRenderableController.render`](./UIRenderableController#UIRenderableController:render).



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
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIForm:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIForm:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



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
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
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



## ![](/assets/icons/spec-method.svg).emitChange() {#UIForm:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



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
Form state context; should be bound to a [`UIFormContext`](./UIFormContext) component.



## ![](/assets/icons/spec-property.svg).onSubmit {#UIForm:Presets:onSubmit}
{:.spec}

```typescript
ComponentEventHandler<UIForm, ComponentEvent<Component>>
```
{:.declarationspec}
Event handler for form submissions.



## ![](/assets/icons/spec-property.svg).decoration {#UIForm:Presets:decoration}
{:.spec}

```typescript
Decoration
```
{:.declarationspec}
Inherited from [`UICell.Presets.decoration`](./UICell#UICell:Presets:decoration).



## ![](/assets/icons/spec-property.svg).padding {#UIForm:Presets:padding}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Inherited from [`UICell.Presets.padding`](./UICell#UICell:Presets:padding).



## ![](/assets/icons/spec-property.svg).margin {#UIForm:Presets:margin}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Inherited from [`UICell.Presets.margin`](./UICell#UICell:Presets:margin).



## ![](/assets/icons/spec-property.svg).background {#UIForm:Presets:background}
{:.spec}

```typescript
string | UIColor
```
{:.declarationspec}
Inherited from [`UICell.Presets.background`](./UICell#UICell:Presets:background).



## ![](/assets/icons/spec-property.svg).textColor {#UIForm:Presets:textColor}
{:.spec}

```typescript
string | UIColor
```
{:.declarationspec}
Inherited from [`UICell.Presets.textColor`](./UICell#UICell:Presets:textColor).



## ![](/assets/icons/spec-property.svg).borderThickness {#UIForm:Presets:borderThickness}
{:.spec}

```typescript
Offsets
```
{:.declarationspec}
Inherited from [`UICell.Presets.borderThickness`](./UICell#UICell:Presets:borderThickness).



## ![](/assets/icons/spec-property.svg).borderColor {#UIForm:Presets:borderColor}
{:.spec}

```typescript
string | UIColor
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



## ![](/assets/icons/spec-property.svg).opacity {#UIForm:Presets:opacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`UICell.Presets.opacity`](./UICell#UICell:Presets:opacity).



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



## ![](/assets/icons/spec-property.svg).revealTransition {#UIForm:Presets:revealTransition}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UICell.Presets.revealTransition`](./UICell#UICell:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UIForm:Presets:exitTransition}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UICell.Presets.exitTransition`](./UICell#UICell:Presets:exitTransition).



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

