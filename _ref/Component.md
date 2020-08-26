---
title: Component
nav: |

  #### Declarations
  * [**class Component**](#Component)
  * [.with()](#Component:with)
  * [.preset()](#Component:preset)
  * [.presetBinding()](#Component:presetBinding)
  * [.presetBindingsFrom()](#Component:presetBindingsFrom)
  * [.presetBoundComponent()](#Component:presetBoundComponent)
  * [.isPresetComponent()](#Component:isPresetComponent)
  * [.getParentComponent()](#Component:getParentComponent)
  * [.getBoundParentComponent()](#Component:getBoundParentComponent)
  * [.propagateComponentEvent()](#Component:propagateComponentEvent)

  #### Inherited
  * [.managedId](#Component:managedId)
  * [.managedState](#Component:managedState)
  * [.getReferenceCount()](#Component:getReferenceCount)
  * [.getManagedReferrers()](#Component:getManagedReferrers)
  * [.getManagedParent()](#Component:getManagedParent)
  * [.emit()](#Component:emit)
  * [.emitChange()](#Component:emitChange)
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
  * [**Component.BoundComposition**](#Component:BoundComposition)
  * [.getBindings()](#Component:BoundComposition:getBindings)
  * [.limitBindings()](#Component:BoundComposition:limitBindings)
layout: doc_ref
pageintro: |
  Components are the building blocks of a Typescene application.
---

## ![](/assets/icons/spec-class.svg)class Component {#Component}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedObject`](./ManagedObject)</code></pre>
{:.declarationspec}

Component base class. Represents a managed object (see [`ManagedObject`](./ManagedObject)) that can be instantiated using a 'preset' constructor, i.e. the result of a call to the static [`with`](#Component:with) method.

When components are constructed, they are initialized with preset values for given properties, as well as preset bindings for properties which should automatically observe properties on the nearest parent component that (indirectly) references this component using the `@managedBound` decorator.

[**See also:** Concepts &gt; Components](/docs/concepts/components){:.block_link.doc}

### Constructor
```typescript
(): Component
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).with() <span class="spec_tag">static</span> {#Component:with}
{:.spec}

```typescript
[1]. <TComponentCtor extends ComponentConstructor<Component>>(this: WithPresetType<TComponentCtor>, ...rest: PresetRestType<TComponentCtor>): TComponentCtor
[2]. <TComponentCtor extends ComponentConstructor<Component>>(this: WithPresetType<TComponentCtor>, presets: new () => any, ...rest: PresetRestType<TComponentCtor>): "INVALID_PRESET_ARGUMENT"
[3]. <TComponentCtor extends ComponentConstructor<Component>>(this: WithPresetType<...>, presets: PresetArgType<TComponentCtor>, ...rest: PresetRestType<TComponentCtor>): TComponentCtor
```
{:.declarationspec}
Create a new component constructor, which automatically initializes new instances with given properties, bindings, event handlers, and other values.



## ![](/assets/icons/spec-method.svg).preset() <span class="spec_tag">static</span> {#Component:preset}
{:.spec}

```typescript
(presets: object, ...rest: unknown[]): Function
```
{:.declarationspec}
Add bindings, components, and event handlers from given presets to the current component constructor. This method is called by [`Component.with`](./Component#Component:with) with the same arguments.

Component classes may override this method and return the result of `super.preset(...)`, to add further presets and bindings using static methods on this component class.

**Returns:** A function (*must* be typed as `Function` even in derived classes) that is called by the constructor for each new instance, to apply remaining values from the preset object to the component object that is passed through `this`.



## ![](/assets/icons/spec-method.svg).presetBinding() <span class="spec_tag">static</span> {#Component:presetBinding}
{:.spec}

```typescript
<TComponent extends Component>(this: ComponentConstructor<TComponent>, propertyName: string, binding: Binding, applyBoundValue?: (this: TComponent, boundValue: any) => any): void
```
{:.declarationspec}
Add given binding to this component constructor, so that the property with given name *on all instances* will be updated with value(s) taken from the bound parent object. Optionally given function is used to set the property value using the updated (bound) value; otherwise, values are copied directly except for arrays, which are used to replace the values in a managed list (see [`ManagedList.replace`](./ManagedList#ManagedList:replace)).

**Note:** This method is used by [`preset`](#Component:preset) when the argument to [`.with()`](#Component:with) includes a binding (see [`bind`](./bind)). This method should not be used directly unless passing a binding to [`.with()`](#Component:with) is not possible.



## ![](/assets/icons/spec-method.svg).presetBindingsFrom() <span class="spec_tag">static</span> {#Component:presetBindingsFrom}
{:.spec}

```typescript
(...constructors: ComponentConstructor<Component>[]): void
```
{:.declarationspec}
Inherit bindings from given component constructor(s) on this constructor. Inherited bindings will be bound to the same bound parent object as bindings passed to [`.with()`](#Component:with) directly, to update bound properties of (nested) child instances.

**Note:** This method must be used by a custom [`preset`](#Component:preset) function if the preset component (may) have managed child objects (see [`@managedChild`](./managedChild)) of the given type and the constructor is not passed to `super.preset(...)` or `presetBoundComponent(...)`.



## ![](/assets/icons/spec-method.svg).presetBoundComponent() <span class="spec_tag">static</span> {#Component:presetBoundComponent}
{:.spec}

```typescript
(propertyName: string, ...constructors: ComponentConstructor<Component>[]): BoundComposition
```
{:.declarationspec}
Make this component the _bound_ parent component for given child component type(s). When a component is assigned to given property, making it a child component, its bindings are bound to the current instance (i.e. the bound parent).

**Returns:** An object that represents the bound parent-child composition, and contains methods that can be used to fine-tune binding behavior.

**Note:** Given property _must_ already be designated as a managed child property (see [`@managedChild`](./managedChild) decorator).



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
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Returns the current parent component. If a class reference is specified, finds the nearest parent of given type. See [`@managedChild`](./managedChild) decorator.



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#Component:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Returns the parent component that is the source of all bound values on this component (and possibly child components).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#Component:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Create and emit an event with given name, a reference to this component, and an optional inner (propagated) event. The base implementation emits a plain [`ComponentEvent`](./ComponentEvent), but this method may be overridden to emit other events.

**Note:** If the component is already in the 'destroyed' state (see [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState)), then no event is emitted and this method returns immediately.

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
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
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



## ![](/assets/icons/spec-method.svg).emitChange() {#Component:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



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

## ![](/assets/icons/spec-class.svg)Component.BoundComposition {#Component:BoundComposition}
{:.spec}

Represents the relationship between a parent component class and a bound component class, to keep track of all bindings that are found on the bound component and its child components.

### Constructor
```typescript
(Composite: typeof Component, ...include: ComponentConstructor<Component>[]): BoundComposition
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).getBindings() {#Component:BoundComposition:getBindings}
{:.spec}

```typescript
(): Binding[]
```
{:.declarationspec}
Returns a list of all bindings that should be bound to the composite parent.



## ![](/assets/icons/spec-method.svg).limitBindings() {#Component:BoundComposition:limitBindings}
{:.spec}

```typescript
(...propertyNames: string[]): void
```
{:.declarationspec}
Remove all bindings that are to be bound to properties that are *not* included in the list of parameters; this causes any of those bindings on instances of the active component and its child component to be bound to the *parent composite* component instead.

