---
title: UIImage
nav: |

  #### Declarations
  * [**class UIImage**](#UIImage)
  * [.withUrl()](#UIImage:withUrl)
  * [.isFocusable()](#UIImage:isFocusable)
  * [.isKeyboardFocusable()](#UIImage:isKeyboardFocusable)
  * [.allowFocus](#UIImage:allowFocus)
  * [.allowKeyboardFocus](#UIImage:allowKeyboardFocus)
  * [.url](#UIImage:url)

  #### Inherited
  * [.applyStyle()](#UIImage:applyStyle)
  * [.textStyle](#UIImage:textStyle)
  * [.decoration](#UIImage:decoration)
  * [.disabled](#UIImage:disabled)
  * [.shrinkwrap](#UIImage:shrinkwrap)
  * [.propagateComponentEvent()](#UIImage:propagateComponentEvent)
  * [.render()](#UIImage:render)
  * [.requestFocus()](#UIImage:requestFocus)
  * [.requestFocusNext()](#UIImage:requestFocusNext)
  * [.requestFocusPrevious()](#UIImage:requestFocusPrevious)
  * [.style](#UIImage:style)
  * [.hidden](#UIImage:hidden)
  * [.dimensions](#UIImage:dimensions)
  * [.position](#UIImage:position)
  * [.accessibleRole](#UIImage:accessibleRole)
  * [.accessibleLabel](#UIImage:accessibleLabel)
  * [.lastRenderOutput](#UIImage:lastRenderOutput)
  * [.isPresetComponent()](#UIImage:isPresetComponent)
  * [.getParentComponent()](#UIImage:getParentComponent)
  * [.getBoundParentComponent()](#UIImage:getBoundParentComponent)
  * [.managedId](#UIImage:managedId)
  * [.managedState](#UIImage:managedState)
  * [.getReferenceCount()](#UIImage:getReferenceCount)
  * [.getManagedReferrers()](#UIImage:getManagedReferrers)
  * [.getManagedParent()](#UIImage:getManagedParent)
  * [.emit()](#UIImage:emit)
  * [.emitChange()](#UIImage:emitChange)
  * [.propagateChildEvents()](#UIImage:propagateChildEvents)
  * [.activateManagedAsync()](#UIImage:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIImage:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIImage:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIImage:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIImage:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIImage:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIImage:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIImage:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIImage.Presets**](#UIImage:Presets)
  * [.url](#UIImage:Presets:url)
  * [.allowFocus](#UIImage:Presets:allowFocus)
  * [.allowKeyboardFocus](#UIImage:Presets:allowKeyboardFocus)
  * [.onLoadError](#UIImage:Presets:onLoadError)
  * [.textStyle](#UIImage:Presets:textStyle)
  * [.decoration](#UIImage:Presets:decoration)
  * [.disabled](#UIImage:Presets:disabled)
  * [.shrinkwrap](#UIImage:Presets:shrinkwrap)
  * [.style](#UIImage:Presets:style)
  * [.hidden](#UIImage:Presets:hidden)
  * [.dimensions](#UIImage:Presets:dimensions)
  * [.position](#UIImage:Presets:position)
  * [.accessibleRole](#UIImage:Presets:accessibleRole)
  * [.accessibleLabel](#UIImage:Presets:accessibleLabel)
  * [.requestFocus](#UIImage:Presets:requestFocus)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class UIImage {#UIImage}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIControl`](./UIControl)</code></pre>
{:.declarationspec}

Represents a UI component that displays an image.

### Constructor
```typescript
(url?: Stringable): UIImage
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).withUrl() <span class="spec_tag">static</span> {#UIImage:withUrl}
{:.spec}

```typescript
(url: string | Binding | { toString(): string; }, style?: string | UIStyle): typeof UIImage
```
{:.declarationspec}
Creates a preset image class with given URL and style, if any.



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIImage:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused directly using mouse or touch, or manually using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus). This method may be overridden by derived component classes, but the return value must be constant for each instance.



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIImage:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused using the keyboard as well as using other methods (rather than direct manipulation only). This method may be overridden by derived component classes, but the return value must be constant for each instance.



## ![](/assets/icons/spec-property.svg).allowFocus {#UIImage:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if this image may receive direct input focus using the mouse, touch, or using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus) (cannot be changed after rendering this component), defaults to false.



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIImage:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if this image may receive input focus using the keyboard and all other methods (cannot be changed after rendering this component), defaults to false.



## ![](/assets/icons/spec-property.svg).url {#UIImage:url}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Image resource URL.



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIImage:applyStyle}
{:.spec}

```typescript
(style?: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIControl.applyStyle`](./UIControl#UIControl:applyStyle).



## ![](/assets/icons/spec-property.svg).textStyle {#UIImage:textStyle}
{:.spec}

```typescript
Readonly<TextStyle>
```
{:.declarationspec}
Inherited from [`UIControl.textStyle`](./UIControl#UIControl:textStyle).



## ![](/assets/icons/spec-property.svg).decoration {#UIImage:decoration}
{:.spec}

```typescript
Readonly<Decoration>
```
{:.declarationspec}
Inherited from [`UIControl.decoration`](./UIControl#UIControl:decoration).



## ![](/assets/icons/spec-property.svg).disabled {#UIImage:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.disabled`](./UIControl#UIControl:disabled).



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UIImage:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.shrinkwrap`](./UIControl#UIControl:shrinkwrap).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIImage:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIImage:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIImage:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIImage:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIImage:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).style {#UIImage:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.style`](./UIComponent#UIComponent:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIImage:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIImage:dimensions}
{:.spec}

```typescript
Readonly<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIImage:position}
{:.spec}

```typescript
Readonly<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIImage:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleRole`](./UIComponent#UIComponent:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIImage:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleLabel`](./UIComponent#UIComponent:accessibleLabel).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIImage:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIImage:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIImage:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIImage:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-property.svg).managedId {#UIImage:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIImage:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIImage:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIImage:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIImage:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIImage:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#UIImage:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIImage:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIImage:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIImage:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIImage:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIImage:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIImage:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIImage:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIImage:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIImage:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIImage.Presets {#UIImage:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIControl.Presets`](./UIControl#UIControl:Presets)</code></pre>
{:.declarationspec}

UIImage presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).url {#UIImage:Presets:url}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Image resource URL.



## ![](/assets/icons/spec-property.svg).allowFocus {#UIImage:Presets:allowFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to allow this image to receive input focus using mouse, touch, or [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-property.svg).allowKeyboardFocus {#UIImage:Presets:allowKeyboardFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to allow this image to receive input focus using the keyboard as well as other methods; implies [`allowFocus`](#UIImage:allowFocus).



## ![](/assets/icons/spec-property.svg).onLoadError {#UIImage:Presets:onLoadError}
{:.spec}

```typescript
UIComponentEventHandler<UIComponent, UIComponentEvent<UIComponent>>
```
{:.declarationspec}
Event handler that is invoked when an error occurs while loading the image resource.



## ![](/assets/icons/spec-property.svg).textStyle {#UIImage:Presets:textStyle}
{:.spec}

```typescript
Partial<{}> | Partial<TextStyle>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.textStyle`](./UIControl#UIControl:Presets:textStyle).



## ![](/assets/icons/spec-property.svg).decoration {#UIImage:Presets:decoration}
{:.spec}

```typescript
Partial<{}> | Partial<Decoration>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.decoration`](./UIControl#UIControl:Presets:decoration).



## ![](/assets/icons/spec-property.svg).disabled {#UIImage:Presets:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.disabled`](./UIControl#UIControl:Presets:disabled).



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UIImage:Presets:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.shrinkwrap`](./UIControl#UIControl:Presets:shrinkwrap).



## ![](/assets/icons/spec-property.svg).style {#UIImage:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIImage:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIImage:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIImage:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIImage:Presets:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleRole`](./UIComponent#UIComponent:Presets:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIImage:Presets:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleLabel`](./UIComponent#UIComponent:Presets:accessibleLabel).



## ![](/assets/icons/spec-property.svg).requestFocus {#UIImage:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).

