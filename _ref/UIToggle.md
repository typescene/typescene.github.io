---
title: UIToggle
nav: |

  #### Declarations
  * [**class UIToggle**](#UIToggle)
  * [.withName()](#UIToggle:withName)
  * [.isFocusable()](#UIToggle:isFocusable)
  * [.isKeyboardFocusable()](#UIToggle:isKeyboardFocusable)
  * [.label](#UIToggle:label)
  * [.highlightColor](#UIToggle:highlightColor)
  * [.state](#UIToggle:state)
  * [.name](#UIToggle:name)
  * [.formContext](#UIToggle:formContext)

  #### Inherited
  * [.applyStyle()](#UIToggle:applyStyle)
  * [.textStyle](#UIToggle:textStyle)
  * [.decoration](#UIToggle:decoration)
  * [.disabled](#UIToggle:disabled)
  * [.shrinkwrap](#UIToggle:shrinkwrap)
  * [.propagateComponentEvent()](#UIToggle:propagateComponentEvent)
  * [.render()](#UIToggle:render)
  * [.requestFocus()](#UIToggle:requestFocus)
  * [.requestFocusNext()](#UIToggle:requestFocusNext)
  * [.requestFocusPrevious()](#UIToggle:requestFocusPrevious)
  * [.style](#UIToggle:style)
  * [.hidden](#UIToggle:hidden)
  * [.dimensions](#UIToggle:dimensions)
  * [.position](#UIToggle:position)
  * [.accessibleRole](#UIToggle:accessibleRole)
  * [.accessibleLabel](#UIToggle:accessibleLabel)
  * [.lastRenderOutput](#UIToggle:lastRenderOutput)
  * [.isPresetComponent()](#UIToggle:isPresetComponent)
  * [.getParentComponent()](#UIToggle:getParentComponent)
  * [.getBoundParentComponent()](#UIToggle:getBoundParentComponent)
  * [.managedId](#UIToggle:managedId)
  * [.managedState](#UIToggle:managedState)
  * [.getReferenceCount()](#UIToggle:getReferenceCount)
  * [.getManagedReferrers()](#UIToggle:getManagedReferrers)
  * [.getManagedParent()](#UIToggle:getManagedParent)
  * [.emit()](#UIToggle:emit)
  * [.emitChange()](#UIToggle:emitChange)
  * [.propagateChildEvents()](#UIToggle:propagateChildEvents)
  * [.activateManagedAsync()](#UIToggle:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIToggle:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIToggle:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIToggle:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIToggle:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIToggle:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIToggle:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIToggle:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIToggle.Presets**](#UIToggle:Presets)
  * [.label](#UIToggle:Presets:label)
  * [.highlightColor](#UIToggle:Presets:highlightColor)
  * [.state](#UIToggle:Presets:state)
  * [.name](#UIToggle:Presets:name)
  * [.textStyle](#UIToggle:Presets:textStyle)
  * [.decoration](#UIToggle:Presets:decoration)
  * [.disabled](#UIToggle:Presets:disabled)
  * [.shrinkwrap](#UIToggle:Presets:shrinkwrap)
  * [.style](#UIToggle:Presets:style)
  * [.hidden](#UIToggle:Presets:hidden)
  * [.dimensions](#UIToggle:Presets:dimensions)
  * [.position](#UIToggle:Presets:position)
  * [.accessibleRole](#UIToggle:Presets:accessibleRole)
  * [.accessibleLabel](#UIToggle:Presets:accessibleLabel)
  * [.requestFocus](#UIToggle:Presets:requestFocus)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class UIToggle {#UIToggle}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIControl`](./UIControl)</code></pre>
{:.declarationspec}

Represents a toggle component with an optional text label.

### Constructor
```typescript
(): UIToggle
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).withName() <span class="spec_tag">static</span> {#UIToggle:withName}
{:.spec}

```typescript
(name: string, label?: Stringable): typeof UIToggle
```
{:.declarationspec}
Creates a preset toggle class with given name and label, if any.



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIToggle:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused directly using mouse or touch, or manually using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus). This method may be overridden by derived component classes, but the return value must be constant for each instance.



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIToggle:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused using the keyboard as well as using other methods (rather than direct manipulation only). This method may be overridden by derived component classes, but the return value must be constant for each instance.



## ![](/assets/icons/spec-property.svg).label {#UIToggle:label}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Label text, if any.



## ![](/assets/icons/spec-property.svg).highlightColor {#UIToggle:highlightColor}
{:.spec}

```typescript
string | UIColor
```
{:.declarationspec}
Highlight (background) color, if any.



## ![](/assets/icons/spec-property.svg).state {#UIToggle:state}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Current toggle state, true for 'on' state, false for 'off'.



## ![](/assets/icons/spec-property.svg).name {#UIToggle:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Form context property name.



## ![](/assets/icons/spec-property.svg).formContext {#UIToggle:formContext}
{:.spec}

```typescript
UIFormContext<any>
```
{:.declarationspec}
Bound form context, if any.



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIToggle:applyStyle}
{:.spec}

```typescript
(style?: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIControl.applyStyle`](./UIControl#UIControl:applyStyle).



## ![](/assets/icons/spec-property.svg).textStyle {#UIToggle:textStyle}
{:.spec}

```typescript
Readonly<TextStyle>
```
{:.declarationspec}
Inherited from [`UIControl.textStyle`](./UIControl#UIControl:textStyle).



## ![](/assets/icons/spec-property.svg).decoration {#UIToggle:decoration}
{:.spec}

```typescript
Readonly<Decoration>
```
{:.declarationspec}
Inherited from [`UIControl.decoration`](./UIControl#UIControl:decoration).



## ![](/assets/icons/spec-property.svg).disabled {#UIToggle:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.disabled`](./UIControl#UIControl:disabled).



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UIToggle:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.shrinkwrap`](./UIControl#UIControl:shrinkwrap).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIToggle:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIToggle:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIComponent.render`](./UIComponent#UIComponent:render).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIToggle:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIToggle:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIToggle:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).style {#UIToggle:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.style`](./UIComponent#UIComponent:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIToggle:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIToggle:dimensions}
{:.spec}

```typescript
Readonly<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIToggle:position}
{:.spec}

```typescript
Readonly<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIToggle:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleRole`](./UIComponent#UIComponent:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIToggle:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleLabel`](./UIComponent#UIComponent:accessibleLabel).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIToggle:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIToggle:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIToggle:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIToggle:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-property.svg).managedId {#UIToggle:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIToggle:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIToggle:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIToggle:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIToggle:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIToggle:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#UIToggle:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIToggle:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIToggle:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIToggle:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIToggle:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIToggle:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIToggle:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIToggle:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIToggle:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIToggle:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIToggle.Presets {#UIToggle:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIControl.Presets`](./UIControl#UIControl:Presets)</code></pre>
{:.declarationspec}

UIToggle presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).label {#UIToggle:Presets:label}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Label text, if any.



## ![](/assets/icons/spec-property.svg).highlightColor {#UIToggle:Presets:highlightColor}
{:.spec}

```typescript
string | UIColor
```
{:.declarationspec}
Highlight (background) color, if any.



## ![](/assets/icons/spec-property.svg).state {#UIToggle:Presets:state}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Toggle state.



## ![](/assets/icons/spec-property.svg).name {#UIToggle:Presets:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Form state property.



## ![](/assets/icons/spec-property.svg).textStyle {#UIToggle:Presets:textStyle}
{:.spec}

```typescript
Partial<{}> | Partial<TextStyle>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.textStyle`](./UIControl#UIControl:Presets:textStyle).



## ![](/assets/icons/spec-property.svg).decoration {#UIToggle:Presets:decoration}
{:.spec}

```typescript
Partial<{}> | Partial<Decoration>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.decoration`](./UIControl#UIControl:Presets:decoration).



## ![](/assets/icons/spec-property.svg).disabled {#UIToggle:Presets:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.disabled`](./UIControl#UIControl:Presets:disabled).



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UIToggle:Presets:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.shrinkwrap`](./UIControl#UIControl:Presets:shrinkwrap).



## ![](/assets/icons/spec-property.svg).style {#UIToggle:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UIToggle:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UIToggle:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UIToggle:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIToggle:Presets:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleRole`](./UIComponent#UIComponent:Presets:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIToggle:Presets:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleLabel`](./UIComponent#UIComponent:Presets:accessibleLabel).



## ![](/assets/icons/spec-property.svg).requestFocus {#UIToggle:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).

