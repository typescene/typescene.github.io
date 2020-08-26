---
title: UITextField
nav: |

  #### Declarations
  * [**class UITextField**](#UITextField)
  * [.withName()](#UITextField:withName)
  * [.style](#UITextField:style)
  * [.shrinkwrap](#UITextField:shrinkwrap)
  * [.isFocusable()](#UITextField:isFocusable)
  * [.isKeyboardFocusable()](#UITextField:isKeyboardFocusable)
  * [.render()](#UITextField:render)
  * [.type](#UITextField:type)
  * [.multiline](#UITextField:multiline)
  * [.placeholder](#UITextField:placeholder)
  * [.value](#UITextField:value)
  * [.name](#UITextField:name)
  * [.form](#UITextField:form)

  #### Inherited
  * [.applyStyle()](#UITextField:applyStyle)
  * [.applyControlStyle()](#UITextField:applyControlStyle)
  * [.applyTextStyle()](#UITextField:applyTextStyle)
  * [.textStyle](#UITextField:textStyle)
  * [.controlStyle](#UITextField:controlStyle)
  * [.disabled](#UITextField:disabled)
  * [.propagateComponentEvent()](#UITextField:propagateComponentEvent)
  * [.requestFocus()](#UITextField:requestFocus)
  * [.requestFocusNext()](#UITextField:requestFocusNext)
  * [.requestFocusPrevious()](#UITextField:requestFocusPrevious)
  * [.hidden](#UITextField:hidden)
  * [.dimensions](#UITextField:dimensions)
  * [.position](#UITextField:position)
  * [.accessibleRole](#UITextField:accessibleRole)
  * [.accessibleLabel](#UITextField:accessibleLabel)
  * [.revealTransition](#UITextField:revealTransition)
  * [.exitTransition](#UITextField:exitTransition)
  * [.lastRenderOutput](#UITextField:lastRenderOutput)
  * [.isPresetComponent()](#UITextField:isPresetComponent)
  * [.getParentComponent()](#UITextField:getParentComponent)
  * [.getCompositeParent()](#UITextField:getCompositeParent)
  * [.managedId](#UITextField:managedId)
  * [.managedState](#UITextField:managedState)
  * [.getReferenceCount()](#UITextField:getReferenceCount)
  * [.getManagedReferrers()](#UITextField:getManagedReferrers)
  * [.getManagedParent()](#UITextField:getManagedParent)
  * [.emit()](#UITextField:emit)
  * [.propagateChildEvents()](#UITextField:propagateChildEvents)
  * [.activateManagedAsync()](#UITextField:activateManagedAsync)
  * [.deactivateManagedAsync()](#UITextField:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UITextField:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UITextField:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UITextField:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UITextField:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UITextField:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UITextField:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UITextField.Presets**](#UITextField:Presets)
  * [.type](#UITextField:Presets:type)
  * [.multiline](#UITextField:Presets:multiline)
  * [.placeholder](#UITextField:Presets:placeholder)
  * [.value](#UITextField:Presets:value)
  * [.name](#UITextField:Presets:name)
  * [.textStyle](#UITextField:Presets:textStyle)
  * [.controlStyle](#UITextField:Presets:controlStyle)
  * [.disabled](#UITextField:Presets:disabled)
  * [.shrinkwrap](#UITextField:Presets:shrinkwrap)
  * [.style](#UITextField:Presets:style)
  * [.hidden](#UITextField:Presets:hidden)
  * [.dimensions](#UITextField:Presets:dimensions)
  * [.position](#UITextField:Presets:position)
  * [.accessibleRole](#UITextField:Presets:accessibleRole)
  * [.accessibleLabel](#UITextField:Presets:accessibleLabel)
  * [.requestFocus](#UITextField:Presets:requestFocus)
  * [.revealTransition](#UITextField:Presets:revealTransition)
  * [.exitTransition](#UITextField:Presets:exitTransition)
  * [UITextField.InputType](#UITextField:InputType)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UITextField {#UITextField}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIControl`](./UIControl)</code></pre>
{:.declarationspec}

Represents a text field component.

#### Example (preset)
```typescript
UITextField.with({
  name: "foo",
  placeholder: tt("First name"),
  value: bind("firstName"),
  onChange: "updateFirstName()"
})
```


### Constructor
```typescript
(): UITextField
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).withName() <span class="spec_tag">static</span> {#UITextField:withName}
{:.spec}

```typescript
(name: string, placeholder?: string): typeof UITextField
```
{:.declarationspec}
Creates a preset text field class with given name and placeholder, if any.



## ![](/assets/icons/spec-property.svg).style {#UITextField:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set; when this is set to an instance of [`UIStyle`](./UIStyle), the individual style object properties (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)) are set to read-only objects taken from the [`UIStyle`](./UIStyle) instance. To override individual properties, set these properties *after* setting [`style`](#UITextField:style), or use [`Component.with`](./Component#Component:with) to create a new constructor.



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UITextField:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to shrink this element to use as little space as possible within its container, set to false to expand; defaults to true but may be overridden by individual components (also overrides `grow` property of [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UITextField:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused directly using mouse or touch, or manually using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus). This method may be overridden by derived component classes, but the value returned must always be the same.



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UITextField:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused using the keyboard *or* other methods; a true return value implies the same for [`UIComponent.isFocusable`](./UIComponent#UIComponent:isFocusable). This method may be overridden by derived component classes, but the value returned must always be the same.



## ![](/assets/icons/spec-method.svg).render() {#UITextField:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Trigger asynchronous rendering for this component, and all contained components (if any). Rendered output is passed to given callback (from the application level [`UIRenderContext`](./UIRenderContext), or from a containing UI component).



## ![](/assets/icons/spec-property.svg).type {#UITextField:type}
{:.spec}

```typescript
string
```
{:.declarationspec}
Input type as string, defaults to `text`.



## ![](/assets/icons/spec-property.svg).multiline {#UITextField:multiline}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to enable multiline input; also suppresses the EnterKeyPress event.



## ![](/assets/icons/spec-property.svg).placeholder {#UITextField:placeholder}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Placeholder text.



## ![](/assets/icons/spec-property.svg).value {#UITextField:value}
{:.spec}

```typescript
string
```
{:.declarationspec}
Input value.



## ![](/assets/icons/spec-property.svg).name {#UITextField:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Form context property name.



## ![](/assets/icons/spec-property.svg).form {#UITextField:form}
{:.spec}

```typescript
{ formContext: any; }
```
{:.declarationspec}
Form component (updated automatically before rendering).



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UITextField:applyStyle}
{:.spec}

```typescript
(style: UIStyle): void
```
{:.declarationspec}
Inherited from [`UIControl.applyStyle`](./UIControl#UIControl:applyStyle).



## ![](/assets/icons/spec-method.svg).applyControlStyle() <span class="spec_tag">protected</span> {#UITextField:applyControlStyle}
{:.spec}

```typescript
(controlStyle: Partial<ControlStyle>): void
```
{:.declarationspec}
Inherited from [`UIControl.applyControlStyle`](./UIControl#UIControl:applyControlStyle).



## ![](/assets/icons/spec-method.svg).applyTextStyle() <span class="spec_tag">protected</span> {#UITextField:applyTextStyle}
{:.spec}

```typescript
(textStyle: Partial<TextStyle>): void
```
{:.declarationspec}
Inherited from [`UIControl.applyTextStyle`](./UIControl#UIControl:applyTextStyle).



## ![](/assets/icons/spec-property.svg).textStyle {#UITextField:textStyle}
{:.spec}

```typescript
TextStyle
```
{:.declarationspec}
Inherited from [`UIControl.textStyle`](./UIControl#UIControl:textStyle).



## ![](/assets/icons/spec-property.svg).controlStyle {#UITextField:controlStyle}
{:.spec}

```typescript
ControlStyle
```
{:.declarationspec}
Inherited from [`UIControl.controlStyle`](./UIControl#UIControl:controlStyle).



## ![](/assets/icons/spec-property.svg).disabled {#UITextField:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.disabled`](./UIControl#UIControl:disabled).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UITextField:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Inherited from [`UIComponent.propagateComponentEvent`](./UIComponent#UIComponent:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).requestFocus() {#UITextField:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UITextField:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusNext`](./UIComponent#UIComponent:requestFocusNext).



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UITextField:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`UIComponent.requestFocusPrevious`](./UIComponent#UIComponent:requestFocusPrevious).



## ![](/assets/icons/spec-property.svg).hidden {#UITextField:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.hidden`](./UIComponent#UIComponent:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UITextField:dimensions}
{:.spec}

```typescript
Dimensions
```
{:.declarationspec}
Inherited from [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UITextField:position}
{:.spec}

```typescript
Position
```
{:.declarationspec}
Inherited from [`UIComponent.position`](./UIComponent#UIComponent:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UITextField:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleRole`](./UIComponent#UIComponent:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UITextField:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.accessibleLabel`](./UIComponent#UIComponent:accessibleLabel).



## ![](/assets/icons/spec-property.svg).revealTransition {#UITextField:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.revealTransition`](./UIComponent#UIComponent:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UITextField:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.exitTransition`](./UIComponent#UIComponent:exitTransition).



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UITextField:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Inherited from [`UIComponent.lastRenderOutput`](./UIComponent#UIComponent:lastRenderOutput).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UITextField:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UITextField:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UITextField:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-property.svg).managedId {#UITextField:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UITextField:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UITextField:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UITextField:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UITextField:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UITextField:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UITextField:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UITextField:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UITextField:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UITextField:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UITextField:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UITextField:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UITextField:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UITextField:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UITextField:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UITextField.Presets {#UITextField:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIControl.Presets`](./UIControl#UIControl:Presets)</code></pre>
{:.declarationspec}

UITextField presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).type {#UITextField:Presets:type}
{:.spec}

```typescript
string
```
{:.declarationspec}
Input type as string, defaults to `text`.



## ![](/assets/icons/spec-property.svg).multiline {#UITextField:Presets:multiline}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to enable multiline input.



## ![](/assets/icons/spec-property.svg).placeholder {#UITextField:Presets:placeholder}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Placeholder text.



## ![](/assets/icons/spec-property.svg).value {#UITextField:Presets:value}
{:.spec}

```typescript
Stringable
```
{:.declarationspec}
Input value.



## ![](/assets/icons/spec-property.svg).name {#UITextField:Presets:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Form state property.



## ![](/assets/icons/spec-property.svg).textStyle {#UITextField:Presets:textStyle}
{:.spec}

```typescript
Partial<{}> | Partial<TextStyle>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.textStyle`](./UIControl#UIControl:Presets:textStyle).



## ![](/assets/icons/spec-property.svg).controlStyle {#UITextField:Presets:controlStyle}
{:.spec}

```typescript
Partial<{}> | Partial<ControlStyle>
```
{:.declarationspec}
Inherited from [`UIControl.Presets.controlStyle`](./UIControl#UIControl:Presets:controlStyle).



## ![](/assets/icons/spec-property.svg).disabled {#UITextField:Presets:disabled}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.disabled`](./UIControl#UIControl:Presets:disabled).



## ![](/assets/icons/spec-property.svg).shrinkwrap {#UITextField:Presets:shrinkwrap}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIControl.Presets.shrinkwrap`](./UIControl#UIControl:Presets:shrinkwrap).



## ![](/assets/icons/spec-property.svg).style {#UITextField:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.style`](./UIComponent#UIComponent:Presets:style).



## ![](/assets/icons/spec-property.svg).hidden {#UITextField:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.hidden`](./UIComponent#UIComponent:Presets:hidden).



## ![](/assets/icons/spec-property.svg).dimensions {#UITextField:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.dimensions`](./UIComponent#UIComponent:Presets:dimensions).



## ![](/assets/icons/spec-property.svg).position {#UITextField:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.position`](./UIComponent#UIComponent:Presets:position).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UITextField:Presets:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleRole`](./UIComponent#UIComponent:Presets:accessibleRole).



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UITextField:Presets:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.accessibleLabel`](./UIComponent#UIComponent:Presets:accessibleLabel).



## ![](/assets/icons/spec-property.svg).requestFocus {#UITextField:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.requestFocus`](./UIComponent#UIComponent:Presets:requestFocus).



## ![](/assets/icons/spec-property.svg).revealTransition {#UITextField:Presets:revealTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.revealTransition`](./UIComponent#UIComponent:Presets:revealTransition).



## ![](/assets/icons/spec-property.svg).exitTransition {#UITextField:Presets:exitTransition}
{:.spec}

```typescript
UITransitionType
```
{:.declarationspec}
Inherited from [`UIComponent.Presets.exitTransition`](./UIComponent#UIComponent:Presets:exitTransition).



---

## ![](/assets/icons/spec-type.svg)UITextField.InputType {#UITextField:InputType}
{:.spec}

```typescript
type InputType = "text" | "password" | "number" | "date" | "color";
```
{:.declarationspec}
Standardized input type names.

