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
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class Component {#Component}
{:.spec}

Represents an object that can be initialized from a static structure, optionally containing nested components which may contain bindings to properties on the composite parent object (see [`@compose`](./compose) decorator).

### Constructor
```typescript
(): Component
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).with() <span class="spec_tag">static</span> {#Component:with}
{:.spec}

```typescript
[1]. <TComponentCtor extends ComponentConstructor<Component>, TPreset extends ComponentPresetType<TComponentCtor>, TRest extends ComponentPresetRestType<TComponentCtor>>(this: TComponentCtor & { ...; }, presets: { [P in keyof TPreset]?: TPreset[P] | { isComponentBinding(): true; }; } & { ...; }, ...rest: TRest): TComponentCtor
[2]. <TComponentCtor extends ComponentConstructor<Component>, TRest extends ComponentPresetRestType<TComponentCtor>>(this: TComponentCtor & { preset: Function; }, ...rest: TRest): TComponentCtor
[3]. <TComponentCtor extends ComponentConstructor<Component>, TPreset extends ComponentPresetType<TComponentCtor>, TRest extends ComponentPresetRestType<TComponentCtor>>(this: TComponentCtor & { ...; }, presets: Exclude<{ [P in keyof TPreset]?: TPreset[P] | { isComponentBinding(): true; }; }, { ...; }>, ...rest: TRest): TComponentCtor
```
{:.declarationspec}
Create a new constructor, for which instances are automatically updated with given properties, bindings, event handlers, and other values.

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
Add bindings, components, and event handlers from given presets to the current component constructor. This method is called by [`Component.with`](./Component#Component:with), and should be called by all derived classes as well, through `super`.

Any rest parameters accepted by overriding methods are passed down from [`Component.with`](./Component#Component:with) as well, except plain objects which are interpreted as preset objects.

**Returns:** A function (*must* be typed as `Function` even in derived classes) that is called by the constructor for each new instance, to apply remaining values from the preset object to the component object that is passed through `this`.



## ![](/assets/icons/spec-method.svg).presetBinding() <span class="spec_tag">static</span> {#Component:presetBinding}
{:.spec}

```typescript
<TComponent extends Component>(this: ComponentConstructor<TComponent>, propertyName: string, binding: Binding, applyBoundValue?: (this: TComponent, boundValue: any) => any): void
```
{:.declarationspec}
Add given binding to this component constructor, so that the property with given name *on all instances* will be updated with value(s) taken from the parent composite object. Optionally given function is used to set the property value using the updated (bound) value; otherwise, values are copied directly except for arrays, which are used to replace the values in a managed list (see [`ManagedList.replace`](./ManagedList#ManagedList:replace)).



## ![](/assets/icons/spec-method.svg).presetBindingsFrom() <span class="spec_tag">static</span> {#Component:presetBindingsFrom}
{:.spec}

```typescript
(...constructors: ComponentConstructor<Component>[]): void
```
{:.declarationspec}
Inherit bindings from given component constructor(s) on this constructor, so that all inherited bindings will be bound on the parent composite object and (nested) child instances of given constructors can be updated as and when needed.



## ![](/assets/icons/spec-method.svg).presetActiveComponent() <span class="spec_tag">static</span> {#Component:presetActiveComponent}
{:.spec}

```typescript
(propertyName: string, constructor: ((new (...args: any[]) => Component) & (new () => Component)) | ((new (a: never, b: never, c: never, d: never, e: never, f: never) => Component) & (new () => Component)), ...include: ComponentConstructor<...>[]): void
```
{:.declarationspec}
Add a sub component to this component that is automatically constructed when this component is activated, using given constructor. This component will serve as the composite parent object of all instances (i.e. the target object for all bindings on the component and child components). Sub components are destroyed immediately when the component is deactivated or destroyed.

In addition, bindings on all other component classes passed as rest parameters are added on this composite component. This may be necessary if further nested components are added dynamically (e.g. as nested children) and the component constructor itself does not include all of the same bindings.

Given properties must *already* be decorated with the [`@managedChild`](./managedChild) decorator. This method is intended for use by [`Component.preset`](./Component#Component:preset).



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
Create and emit an event with given name and a reference to this component. The base implementation emits a plain [`ComponentEvent`](./ComponentEvent), but this method may be overridden to emit other events.

This method is used by classes created using [`Component.with`](./Component#Component:with) if an event handler is specified using the `{ ... onEventName: "+OtherEvent" }` pattern.



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

