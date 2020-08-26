---
title: Component
nav: |

  #### Declarations
  * [**class Component**](#Component)
  * [.with()](#Component:with)
  * [.preset()](#Component:preset)
  * [.presetBinding()](#Component:presetBinding)
  * [.presetBindingsFrom()](#Component:presetBindingsFrom)
  * [.presetActiveComponent()](#Component:presetActiveComponent)
  * [.isPresetComponent()](#Component:isPresetComponent)
  * [.getParentComponent()](#Component:getParentComponent)
  * [.getCompositeParent()](#Component:getCompositeParent)
  * [.propagateComponentEvent()](#Component:propagateComponentEvent)

  #### Inherited
  * [.managedId](#Component:managedId)
  * [.managedState](#Component:managedState)
  * [.getReferenceCount()](#Component:getReferenceCount)
  * [.getManagedReferrers()](#Component:getManagedReferrers)
  * [.getManagedParent()](#Component:getManagedParent)
  * [.emit()](#Component:emit)
  * [.propagateChildEvents()](#Component:propagateChildEvents)
  * [.activateManagedAsync()](#Component:activateManagedAsync)
  * [.deactivateManagedAsync()](#Component:deactivateManagedAsync)
  * [.destroyManagedAsync()](#Component:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#Component:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#Component:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#Component:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#Component:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#Component:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**Component.Composition**](#Component:Composition)
  * [.getBindings()](#Component:Composition:getBindings)
  * [.limitBindings()](#Component:Composition:limitBindings)
layout: ref_doc
pageintro: |
  Components are the building blocks of a Typescene application.
---

## ![](/assets/icons/spec-class.svg)class Component {#Component}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedObject`](./ManagedObject)</code></pre>
{:.declarationspec}

Component base class. Represents a managed object (see [`ManagedObject`](./ManagedObject)) that can be initialized from a 'preset' structure passed to its static [`with`](#Component:with) method.

Component property values may be bound (see [`bind`](./bind)) to properties of a 'composite' parent, i.e. the component that references sub components through a property decorated with the [`@compose`](./compose) decorator.

> **Note:** For a better understanding of how components are used in Typescene applications, read [this guide](/docs/guides/concepts/components).

### Constructor
```typescript
(): Component
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).with() <span class="spec_tag">static</span> {#Component:with}
{:.spec}

```typescript
[1]. <TComponentCtor extends ComponentConstructor<Component>>(this: ComponentCtorWithPreset<TComponentCtor>, ...rest: ComponentPresetRestType<TComponentCtor>): TComponentCtor
[2]. <TComponentCtor extends ComponentConstructor<Component>>(this: ComponentCtorWithPreset<TComponentCtor>, presets: new () => any, ...rest: ComponentPresetRestType<TComponentCtor>): "INVALID_PRESET_ARGUMENT"
[3]. <TComponentCtor extends ComponentConstructor<Component>>(this: ComponentCtorWithPreset<TComponentCtor>, presets: ComponentPresetArgType<TComponentCtor>, ...rest: ComponentPresetRestType<TComponentCtor>): TComponentCtor
```
{:.declarationspec}
Create a new component _constructor_, for which instances are automatically updated with given properties, bindings, event handlers, and other values.

- When an instance is activated, components included as preset properties are instantiated and assigned to properties with the same name as the preset object property.

- When an instance becomes a (nested) child component of an active _composite object_ (or upon activation of such an object), bindings are activated to reflect values from the composite object.

- Event handlers are added on all instances of the component class, using one of the following patterns:

   * `{ ... onEventName: "methodName()" }` to invoke given method directly on the first composite object that defines a method with this name, whenever an event with given name is emitted, passing the event as the first and only argument, or

   * `{ ... onEventName: "+OtherEvent" }` to emit another event with given name. The event is created and emitted using the [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent) method.

- Upon initialization of each instance, the `update` method is called with the remaining properties in the intializer argument, and all rest arguments (component classes) of the same type as the arguments to this method.



## ![](/assets/icons/spec-method.svg).preset() <span class="spec_tag">static</span> {#Component:preset}
{:.spec}

```typescript
(presets: object, ...rest: unknown[]): Function
```
{:.declarationspec}
Add bindings, components, and event handlers from given presets to the current component constructor. This method is called by [`Component.with`](./Component#Component:with) with the same arguments.

Component classes _may_ override this method and return the result of `super.preset(...)` if:

- the [`.with()`](#Component:with) function for a component class should accept custom type(s) for its arguments. The parameter signature for the [`preset`](#Component:preset) method is used to determine the parameter signature for [`.with()`](#Component:with) on a component class.

- component instances should be prepared in any way other than setting property values, adding bindings, or event handlers immediately after being constructed (using the returned callback).

**Returns:** A function (*must* be typed as `Function` even in derived classes) that is called by the constructor for each new instance, to apply remaining values from the preset object to the component object that is passed through `this`.



## ![](/assets/icons/spec-method.svg).presetBinding() <span class="spec_tag">static</span> {#Component:presetBinding}
{:.spec}

```typescript
<TComponent extends Component>(this: ComponentConstructor<TComponent>, propertyName: string, binding: Binding, applyBoundValue?: (this: TComponent, boundValue: any) => any): void
```
{:.declarationspec}
Add given binding to this component constructor, so that the property with given name *on all instances* will be updated with value(s) taken from the parent composite object. Optionally given function is used to set the property value using the updated (bound) value; otherwise, values are copied directly except for arrays, which are used to replace the values in a managed list (see [`ManagedList.replace`](./ManagedList#ManagedList:replace)).

**Note:** This method is used by [`preset`](#Component:preset) when the argument to [`.with()`](#Component:with) includes a binding (see [`bind`](./bind)). This method should not be used directly unless passing a binding to [`.with()`](#Component:with) is not possible.



## ![](/assets/icons/spec-method.svg).presetBindingsFrom() <span class="spec_tag">static</span> {#Component:presetBindingsFrom}
{:.spec}

```typescript
(...constructors: ComponentConstructor<Component>[]): void
```
{:.declarationspec}
Inherit bindings from given component constructor(s) on this constructor. Inherited bindings will be bound to the same parent composite object as bindings passed to [`.with()`](#Component:with) directly, to update bound properties of (nested) child instances.

**Note:** This method must be used by a custom [`preset`](#Component:preset) function if the preset component (may) have managed child objects (see [`@managedChild`](./managedChild)) of the given type and the constructor is not passed to `super.preset(...)`.



## ![](/assets/icons/spec-method.svg).presetActiveComponent() <span class="spec_tag">static</span> {#Component:presetActiveComponent}
{:.spec}

```typescript
(propertyName: string, constructor: ComponentConstructor<Component> & (new () => Component), ...include: ComponentConstructor<Component>[]): Composition
```
{:.declarationspec}
Add a sub component to this component; see [`compose`](./compose).

Given property must *already* be decorated with the [`@managedChild`](./managedChild) decorator. This method is intended for use by [`Component.preset`](./Component#Component:preset).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#Component:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if the class that this instance has been created from was itself created using [`Component.with`](./Component#Component:with) somewhere along the prototype chain.



## ![](/assets/icons/spec-method.svg).getParentComponent() {#Component:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
**[1]** Returns the current parent component. See [`@managedChild`](./managedChild) decorator.


**[2]** Returns the current parent component. See [`@managedChild`](./managedChild) decorator.



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#Component:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Returns the parent component that contains the [`@compose`](./compose) property which references this component (or the parent's parent if this component's parent is referenced by a [`@compose`](./compose) property instead, and so on).

If there is no component that (indirectly) references this component through a [`@compose`](./compose) property, this method returns undefined.



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#Component:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Create and emit an event with given name, a reference to this component, and an optional inner (propagated) event. The base implementation emits a plain [`ComponentEvent`](./ComponentEvent), but this method may be overridden to emit other events.

**Note:** This method is used by classes created using [`Component.with`](./Component#Component:with) if an event handler is specified using the `{ ... onEventName: "+OtherEvent" }` pattern.



## ![](/assets/icons/spec-property.svg).managedId {#Component:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#Component:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#Component:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#Component:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#Component:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#Component:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#Component:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#Component:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#Component:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#Component:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#Component:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#Component:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#Component:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#Component:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#Component:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-class.svg)Component.Composition {#Component:Composition}
{:.spec}

Represents the relationship between a composite parent component class and the active component class.

### Constructor
```typescript
(Composite: typeof Component, propertyName: string, ActiveComponent: ComponentConstructor<Component> & (new () => Component), ...include: ComponentConstructor<Component>[]): Composition
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).getBindings() {#Component:Composition:getBindings}
{:.spec}

```typescript
(): Binding[]
```
{:.declarationspec}
Returns a list of all bindings that should be bound to the composite parent.



## ![](/assets/icons/spec-method.svg).limitBindings() {#Component:Composition:limitBindings}
{:.spec}

```typescript
(...propertyNames: string[]): void
```
{:.declarationspec}
Remove all bindings that are to be bound to properties that are *not* included in the list of parameters; this causes any of those bindings on instances of the active component and its child component to be bound to the *parent composite* component instead.
