---
title: ViewComponent
nav: |

  #### Declarations
  * [**class ViewComponent**](#ViewComponent)
  * [.formContext](#ViewComponent:formContext)
  * [.view](#ViewComponent:view)
  * [.onManagedStateActivatingAsync()](#ViewComponent:onManagedStateActivatingAsync)
  * [.render()](#ViewComponent:render)
  * [.removeViewAsync()](#ViewComponent:removeViewAsync)
  * [.requestFocus()](#ViewComponent:requestFocus)

  #### Inherited
  * [.renderContext](#ViewComponent:renderContext)
  * [.activationContext](#ViewComponent:activationContext)
  * [.isPresetComponent()](#ViewComponent:isPresetComponent)
  * [.getParentComponent()](#ViewComponent:getParentComponent)
  * [.getCompositeParent()](#ViewComponent:getCompositeParent)
  * [.propagateComponentEvent()](#ViewComponent:propagateComponentEvent)
  * [.managedId](#ViewComponent:managedId)
  * [.managedState](#ViewComponent:managedState)
  * [.getReferenceCount()](#ViewComponent:getReferenceCount)
  * [.getManagedReferrers()](#ViewComponent:getManagedReferrers)
  * [.getManagedParent()](#ViewComponent:getManagedParent)
  * [.emit()](#ViewComponent:emit)
  * [.propagateChildEvents()](#ViewComponent:propagateChildEvents)
  * [.activateManagedAsync()](#ViewComponent:activateManagedAsync)
  * [.deactivateManagedAsync()](#ViewComponent:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ViewComponent:destroyManagedAsync)
  * [.onManagedStateActiveAsync()](#ViewComponent:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ViewComponent:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ViewComponent:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ViewComponent:onManagedStateDestroyingAsync)

  #### Namespaced
  * [ViewComponent.PresetFor](#ViewComponent:PresetFor)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ViewComponent {#ViewComponent}
{:.spec}

Represents an application component that encapsulates a view made up of UI components (or other renderable components, such as nested `ViewComponent` instances).

The encapsulated view is created the first time this component is rendered. After that, all UI events are propagated from the encapsulated view to the `ViewComponent` instance.

**Note:** This class is similar in functionality to [`ViewActivity`](./ViewActivity), but `ViewComponent` views are created immediately, whereas view activities need to be activated first before their views are created.

### Constructor
```typescript
(): ViewComponent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).formContext {#ViewComponent:formContext}
{:.spec}

```typescript
ManagedRecord
```
{:.declarationspec}
Form state context, propagated from the parent composite object.



## ![](/assets/icons/spec-property.svg).view {#ViewComponent:view}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
The root component that makes up the content for this view, as a child component; only created when the `ViewComponent` is rendered.



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() {#ViewComponent:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Callback invoked when changing state to 'active', to be overridden.



## ![](/assets/icons/spec-method.svg).render() {#ViewComponent:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Render the encapsulated view for this component.

This method is called automatically after the root view component is created and/or when an application render context is made available or emits a change event, and should not be called directly.



## ![](/assets/icons/spec-method.svg).removeViewAsync() {#ViewComponent:removeViewAsync}
{:.spec}

```typescript
(deactivate?: boolean): Promise<void>
```
{:.declarationspec}
Remove the current view output, if any.

This method is called automatically after the root view component or render context is removed, and should not be called directly.



## ![](/assets/icons/spec-method.svg).requestFocus() {#ViewComponent:requestFocus}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Request input focus on the view component, if any.



## ![](/assets/icons/spec-property.svg).renderContext {#ViewComponent:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`AppComponent.renderContext`](./AppComponent#AppComponent:renderContext).



## ![](/assets/icons/spec-property.svg).activationContext {#ViewComponent:activationContext}
{:.spec}

```typescript
AppActivationContext
```
{:.declarationspec}
Inherited from [`AppComponent.activationContext`](./AppComponent#AppComponent:activationContext).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#ViewComponent:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#ViewComponent:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#ViewComponent:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#ViewComponent:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#ViewComponent:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#ViewComponent:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#ViewComponent:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ViewComponent:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ViewComponent:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#ViewComponent:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#ViewComponent:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#ViewComponent:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#ViewComponent:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#ViewComponent:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#ViewComponent:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#ViewComponent:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#ViewComponent:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#ViewComponent:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-type.svg)ViewComponent.PresetFor {#ViewComponent:PresetFor}
{:.spec}

```typescript
type PresetFor<TComponent, K extends keyof TComponent> = (presets: TComponent | Pick<TComponent, K>) => Function;
```
{:.declarationspec}
Shortcut type for declaring a static [`preset`](#ViewComponent:preset) method which accepts an object with presets with the same type as given properties of the view component itself.

