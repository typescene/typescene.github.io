---
title: UIComponent
nav: |

  #### Declarations
  * [**class UIComponent**](#UIComponent)
  * [.propagateComponentEvent()](#UIComponent:propagateComponentEvent)
  * [.render()](#UIComponent:render)
  * [.isFocusable()](#UIComponent:isFocusable)
  * [.isKeyboardFocusable()](#UIComponent:isKeyboardFocusable)
  * [.requestFocus()](#UIComponent:requestFocus)
  * [.requestFocusNext()](#UIComponent:requestFocusNext)
  * [.requestFocusPrevious()](#UIComponent:requestFocusPrevious)
  * [.applyStyle()](#UIComponent:applyStyle)
  * [.style](#UIComponent:style)
  * [.hidden](#UIComponent:hidden)
  * [.dimensions](#UIComponent:dimensions)
  * [.position](#UIComponent:position)
  * [.accessibleRole](#UIComponent:accessibleRole)
  * [.accessibleLabel](#UIComponent:accessibleLabel)
  * [.lastRenderOutput](#UIComponent:lastRenderOutput)

  #### Inherited
  * [.isPresetComponent()](#UIComponent:isPresetComponent)
  * [.getParentComponent()](#UIComponent:getParentComponent)
  * [.getBoundParentComponent()](#UIComponent:getBoundParentComponent)
  * [.managedId](#UIComponent:managedId)
  * [.managedState](#UIComponent:managedState)
  * [.getReferenceCount()](#UIComponent:getReferenceCount)
  * [.getManagedReferrers()](#UIComponent:getManagedReferrers)
  * [.getManagedParent()](#UIComponent:getManagedParent)
  * [.emit()](#UIComponent:emit)
  * [.emitChange()](#UIComponent:emitChange)
  * [.propagateChildEvents()](#UIComponent:propagateChildEvents)
  * [.activateManagedAsync()](#UIComponent:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIComponent:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIComponent:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIComponent:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIComponent:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIComponent:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIComponent:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIComponent:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIComponent.Presets**](#UIComponent:Presets)
  * [.style](#UIComponent:Presets:style)
  * [.hidden](#UIComponent:Presets:hidden)
  * [.dimensions](#UIComponent:Presets:dimensions)
  * [.position](#UIComponent:Presets:position)
  * [.accessibleRole](#UIComponent:Presets:accessibleRole)
  * [.accessibleLabel](#UIComponent:Presets:accessibleLabel)
  * [.requestFocus](#UIComponent:Presets:requestFocus)
  * [**UIComponent.DynamicRendererWrapper**](#UIComponent:DynamicRendererWrapper)
  * [.render()](#UIComponent:DynamicRendererWrapper:render)
  * [.removeAsync()](#UIComponent:DynamicRendererWrapper:removeAsync)
layout: doc_ref
pageintro: |
  This is the base class of all UI (view) components.
---

## ![](/assets/icons/spec-class.svg)class UIComponent <span class="spec_tag">abstract</span> {#UIComponent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`Component`](./Component) implements [`UIRenderable`](./UIRenderable)</code></pre>
{:.declarationspec}

Represents a visible part of the user interface.

> __Note:__ This class should not be instantiated on its own. Instead, use one of the predefined UI components such as [`UIButton`](./UIButton) and [`UILabel`](./UILabel), or create your own view component using the [`ViewComponent`](./ViewComponent) class.

[**See also:** Concepts &gt; Views](/docs/concepts/views){:.block_link.doc}

### Constructor
```typescript
(): UIComponent
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIComponent:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent, event?: any): void
```
{:.declarationspec}
Create and emit a UI event with given name and a reference to this component, as well as an optional platform event; see [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-method.svg).render() {#UIComponent:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Trigger asynchronous rendering for this component, and all contained components (if any). Rendered output is passed to given callback (from the application level [`UIRenderContext`](./UIRenderContext), or from a containing UI component).



## ![](/assets/icons/spec-method.svg).isFocusable() {#UIComponent:isFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused directly using mouse or touch, or manually using [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus). This method may be overridden by derived component classes, but the return value must be constant for each instance.



## ![](/assets/icons/spec-method.svg).isKeyboardFocusable() {#UIComponent:isKeyboardFocusable}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this component can be focused using the keyboard as well as using other methods (rather than direct manipulation only). This method may be overridden by derived component classes, but the return value must be constant for each instance.



## ![](/assets/icons/spec-method.svg).requestFocus() {#UIComponent:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Request input focus on this component.

**Note:** Not all components can be focused. Components can only be focused after they are rendered, so consider using this method inside of a `Rendered` event handler.



## ![](/assets/icons/spec-method.svg).requestFocusNext() {#UIComponent:requestFocusNext}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Request input focus for the next sibling component.



## ![](/assets/icons/spec-method.svg).requestFocusPrevious() {#UIComponent:requestFocusPrevious}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Request input focus for the previous sibling component.



## ![](/assets/icons/spec-method.svg).applyStyle() <span class="spec_tag">protected</span> {#UIComponent:applyStyle}
{:.spec}

```typescript
(style?: UIStyle): void
```
{:.declarationspec}
Applies given style set to individual style objects (e.g. [`UIComponent.dimensions`](./UIComponent#UIComponent:dimensions)). This method is overridden by derived classes to copy only applicable styles.



## ![](/assets/icons/spec-property.svg).style {#UIComponent:style}
{:.spec}

```typescript
UIStyle
```
{:.declarationspec}
Combined style set, as an instance of [`UIStyle`](./UIStyle); individual style object properties can be overridden, which will not affect the [`style`](#UIComponent:style) property.

**Note:** When this property is preset (using `.with(...)`), the preset value is _mixed in_ to the current style set, rather than replacing it altogether. The result is always applied before individual style objects such as [`dimensions`](#UIComponent:dimensions) and [`position`](#UIComponent:position). However, setting this property directly on a component instance will completely remove existing styles.



## ![](/assets/icons/spec-property.svg).hidden {#UIComponent:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to hide this component from view (does not stop the component from being rendered).



## ![](/assets/icons/spec-property.svg).dimensions {#UIComponent:dimensions}
{:.spec}

```typescript
Readonly<Dimensions>
```
{:.declarationspec}
Options for the dimensions of this component.



## ![](/assets/icons/spec-property.svg).position {#UIComponent:position}
{:.spec}

```typescript
Readonly<Position>
```
{:.declarationspec}
Options for the positioning of this component within parent component(s).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIComponent:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
WAI-ARIA role for this component, if applicable.



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIComponent:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
WAI-ARIA label text for this component (not tooltip), if applicable.



## ![](/assets/icons/spec-property.svg).lastRenderOutput {#UIComponent:lastRenderOutput}
{:.spec}

```typescript
Output<this, any>
```
{:.declarationspec}
Last rendered output, if any; set by the renderer.



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIComponent:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIComponent:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIComponent:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-property.svg).managedId {#UIComponent:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIComponent:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIComponent:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIComponent:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIComponent:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIComponent:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#UIComponent:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIComponent:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIComponent:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIComponent:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIComponent:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIComponent:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIComponent:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIComponent:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIComponent:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIComponent:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIComponent.Presets {#UIComponent:Presets}
{:.spec}

UIComponent base presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).style {#UIComponent:Presets:style}
{:.spec}

```typescript
string | UIStyle
```
{:.declarationspec}
Style set (either an instance of [`UIStyle`](./UIStyle) *or* the name of a style set defined in [`UITheme.current`](./UITheme#UITheme:current)), which is *mixed into* the current style set on the component, before setting any other style properties.



## ![](/assets/icons/spec-property.svg).hidden {#UIComponent:Presets:hidden}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to hide this component from view (does not stop the component from being rendered).



## ![](/assets/icons/spec-property.svg).dimensions {#UIComponent:Presets:dimensions}
{:.spec}

```typescript
Partial<{}> | Partial<Dimensions>
```
{:.declarationspec}
Options for the dimensions of this component (overrides).



## ![](/assets/icons/spec-property.svg).position {#UIComponent:Presets:position}
{:.spec}

```typescript
Partial<{}> | Partial<Position>
```
{:.declarationspec}
Options for the positioning of this component within parent component(s) (overrides).



## ![](/assets/icons/spec-property.svg).accessibleRole {#UIComponent:Presets:accessibleRole}
{:.spec}

```typescript
string
```
{:.declarationspec}
WAI-ARIA role for this component, if applicable.



## ![](/assets/icons/spec-property.svg).accessibleLabel {#UIComponent:Presets:accessibleLabel}
{:.spec}

```typescript
string
```
{:.declarationspec}
WAI-ARIA label text for this component (not tooltip), if applicable.



## ![](/assets/icons/spec-property.svg).requestFocus {#UIComponent:Presets:requestFocus}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Set to true to request focus immediately after rendering for the first time; cannot be used together with `onRendered`.



---

## ![](/assets/icons/spec-class.svg)UIComponent.DynamicRendererWrapper {#UIComponent:DynamicRendererWrapper}
{:.spec}

Stateful renderer for dynamic content (used by [`UIRenderableController`](./UIRenderableController), [`ViewComponent`](./ViewComponent), etc.).

### Constructor
```typescript
(): DynamicRendererWrapper
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).render() {#UIComponent:DynamicRendererWrapper:render}
{:.spec}

```typescript
(content?: UIRenderable, callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Render given content using given callback, or previously stored callback.



## ![](/assets/icons/spec-method.svg).removeAsync() {#UIComponent:DynamicRendererWrapper:removeAsync}
{:.spec}

```typescript
(): Promise<unknown>
```
{:.declarationspec}
Remove previously rendered output.

