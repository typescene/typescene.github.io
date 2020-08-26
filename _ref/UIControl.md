---
title: UIControl
nav: |

  #### Declarations
  * [**class UIControl**](#UIControl)
  * [.applyStyle()](#UIControl:applyStyle)
  * [.textStyle](#UIControl:textStyle)
  * [.decoration](#UIControl:decoration)
  * [.disabled](#UIControl:disabled)
  * [.shrinkwrap](#UIControl:shrinkwrap)

  #### Inherited
  * [.propagateComponentEvent()](#UIControl:propagateComponentEvent)
  * [.render()](#UIControl:render)
  * [.isFocusable()](#UIControl:isFocusable)
  * [.isKeyboardFocusable()](#UIControl:isKeyboardFocusable)
  * [.requestFocus()](#UIControl:requestFocus)
  * [.requestFocusNext()](#UIControl:requestFocusNext)
  * [.requestFocusPrevious()](#UIControl:requestFocusPrevious)
  * [.style](#UIControl:style)
  * [.hidden](#UIControl:hidden)
  * [.dimensions](#UIControl:dimensions)
  * [.position](#UIControl:position)
  * [.accessibleRole](#UIControl:accessibleRole)
  * [.accessibleLabel](#UIControl:accessibleLabel)
  * [.lastRenderOutput](#UIControl:lastRenderOutput)
  * [.isPresetComponent()](#UIControl:isPresetComponent)
  * [.getParentComponent()](#UIControl:getParentComponent)
  * [.getBoundParentComponent()](#UIControl:getBoundParentComponent)
  * [.managedId](#UIControl:managedId)
  * [.managedState](#UIControl:managedState)
  * [.getReferenceCount()](#UIControl:getReferenceCount)
  * [.getManagedReferrers()](#UIControl:getManagedReferrers)
  * [.getManagedParent()](#UIControl:getManagedParent)
  * [.emit()](#UIControl:emit)
  * [.emitChange()](#UIControl:emitChange)
  * [.propagateChildEvents()](#UIControl:propagateChildEvents)
  * [.activateManagedAsync()](#UIControl:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIControl:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIControl:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIControl:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIControl:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIControl:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIControl:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIControl:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIControl.Presets**](#UIControl:Presets)
  * [.textStyle](#UIControl:Presets:textStyle)
  * [.decoration](#UIControl:Presets:decoration)
  * [.disabled](#UIControl:Presets:disabled)
  * [.shrinkwrap](#UIControl:Presets:shrinkwrap)
  * [.style](#UIControl:Presets:style)
  * [.hidden](#UIControl:Presets:hidden)
  * [.dimensions](#UIControl:Presets:dimensions)
  * [.position](#UIControl:Presets:position)
  * [.accessibleRole](#UIControl:Presets:accessibleRole)
  * [.accessibleLabel](#UIControl:Presets:accessibleLabel)
  * [.requestFocus](#UIControl:Presets:requestFocus)
layout: doc_ref
pageintro: |
  UI Controls display individual UI controls, such as labels and buttons.
---

## ![](/assets/icons/spec-class.svg)class UIControl <span class="spec_tag">abstract</span> {#UIControl}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIComponent`](./UIComponent)</code></pre>
{:.declarationspec}

Represents an interactive UI control component (abstract).

> __Note:__ This class should not be instantiated on its own. Instead, use one of the predefined control components such as [`UIButton`](./UIButton) or [`UILabel`](./UILabel).



### Constructor
```typescript
(): UIControl
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIControl:applyStyle}
{:.spec}

```typescript
(style?: UIStyle): void
```
{:.declarationspec}
Applies given style set to individual style objects (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)). This method is overridden by derived classes to copy only applicable styles.



## ![](/assets/icons/spec-property.svg).textStyle {#UIControl:textStyle}
{:.spec}

```typescript
Readonly<TextStyle>
```
{:.declarationspec}
Text style options.



## ![](/assets/icons/spec-property.svg).decoration {#UIControl:decoration}
{:.spec}

```typescript
Readonly<Decoration>
```
{:.declarationspec}
Options for the appearance of this control.



## ![](/assets/icons/spec-property.svg).disabled {#UIControl:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to disable this control.



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UIControl:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to shrink this element to use as little space as possible within its container, set to false to expand; defaults to true but may be overridden by individual components, e.g. [`UILabel`](./UILabel) (also overrides `grow` property of [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIControl:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIControl:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIControl:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIComponent.isFocusable`](./UIComponent#UIComponent:isFocusable).



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIControl:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`UIComponent.isKeyboardFocusable`](./UIComponent#UIComponent:isKeyboardFocusable).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIControl:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIControl:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIControl:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).style {#UIControl:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.style`](./UIComponent#UIComponent:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIControl:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIControl:dimensions}
{:.spec}

```typescript
Readonly<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIControl:position}
{:.spec}

```typescript
Readonly<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIControl:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleRole`](./UIComponent#UIComponent:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIControl:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleLabel`](./UIComponent#UIComponent:accessibleLabel).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIControl:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIControl:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIControl:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIControl:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-property.svg).managedId {#UIControl:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIControl:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIControl:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIControl:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIControl:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIControl:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#UIControl:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIControl:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIControl:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIControl:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIControl:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIControl:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIControl:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIControl:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIControl:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIControl:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIControl.Presets {#UIControl:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIComponent.Presets`](./UIComponent#UIComponent:Presets)</code></pre>
{:.declarationspec}

UIControl presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).textStyle {#UIControl:Presets:textStyle}
{:.spec}

```typescript
Partial<{}> | Partial<TextStyle>
```
{:.declarationspec}
Text style options (overrides).



## ![](/assets/icons/spec-property.svg).decoration {#UIControl:Presets:decoration}
{:.spec}

```typescript
Partial<{}> | Partial<Decoration>
```
{:.declarationspec}
Options for the appearance of this control (overrides).



## ![](/assets/icons/spec-property.svg).disabled {#UIControl:Presets:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Disable this control.



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UIControl:Presets:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Shrink or grow this control.



## ![](/assets/icons/spec-property.svg).style {#UIControl:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIControl:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIControl:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIControl:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIControl:Presets:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleRole`](./UIComponent#UIComponent:Presets:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIControl:Presets:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleLabel`](./UIComponent#UIComponent:Presets:accessibleLabel).



## ![](/assets/icons/spec-property.svg).requestFocus {#UIControl:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).

