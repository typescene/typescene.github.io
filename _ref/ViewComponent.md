---
title: ViewComponent
nav: |

  #### Declarations
  * [**class ViewComponent**](#ViewComponent)
  * [.with()](#ViewComponent:with)
  * [.presetChildView()](#ViewComponent:presetChildView)
  * [.view](#ViewComponent:view)
  * [.render()](#ViewComponent:render)
  * [.beforeRender()](#ViewComponent:beforeRender)
  * [.removeViewAsync()](#ViewComponent:removeViewAsync)
  * [.requestFocus()](#ViewComponent:requestFocus)

  #### Inherited
  * [.renderContext](#ViewComponent:renderContext)
  * [.activationContext](#ViewComponent:activationContext)
  * [.isPresetComponent()](#ViewComponent:isPresetComponent)
  * [.getParentComponent()](#ViewComponent:getParentComponent)
  * [.getBoundParentComponent()](#ViewComponent:getBoundParentComponent)
  * [.propagateComponentEvent()](#ViewComponent:propagateComponentEvent)
  * [.managedId](#ViewComponent:managedId)
  * [.managedState](#ViewComponent:managedState)
  * [.getReferenceCount()](#ViewComponent:getReferenceCount)
  * [.getManagedReferrers()](#ViewComponent:getManagedReferrers)
  * [.getManagedParent()](#ViewComponent:getManagedParent)
  * [.emit()](#ViewComponent:emit)
  * [.emitChange()](#ViewComponent:emitChange)
  * [.propagateChildEvents()](#ViewComponent:propagateChildEvents)
  * [.activateManagedAsync()](#ViewComponent:activateManagedAsync)
  * [.deactivateManagedAsync()](#ViewComponent:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ViewComponent:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ViewComponent:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ViewComponent:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ViewComponent:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ViewComponent:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ViewComponent:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**ViewComponent.PresetViewComponentConstructor**](#ViewComponent:PresetViewComponentConstructor)
  * [.with()](#ViewComponent:PresetViewComponentConstructor:with)
  * [ViewComponent.PresetType](#ViewComponent:PresetType)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class ViewComponent {#ViewComponent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`AppComponent`](./AppComponent) implements [`UIRenderable`](./UIRenderable)</code></pre>
{:.declarationspec}

Represents an application component that encapsulates a view as a bound component. Bindings and event handlers in nested view components are bound to the ViewComponent instance itself, and events are propagated by default.

**Note:** This class is similar in functionality to [`ViewActivity`](./ViewActivity), but `ViewComponent` views are created immediately, whereas view activities need to be activated first before their views are created.

#### Example
```typescript
class MyView extends ViewComponent.with({
  // view declaration goes here, JSX is allowed too:
  view: UICell.with(
    UIRow.with(
      UIButton.withLabel("Click me", "buttonClicked()")
    ),
    // include content like so:
    UIViewRenderer.withBoundContent()
  ),
  
  // optional list of properties that can be preset, and default values:
  defaults: {
    foo: "bar",
  },

  // optional list of properties that will contain preset content
  // in the order in which they can be preset (default is 'content')
  content: ["content"],

  // optional event handler (useful if not using a class)
  event(e) {
    // ... handle events here
  }
}) {
  buttonClicked(e: UIComponentEvent<UIButton>) {
    // ... or handle events individually here
  }

  // any other class methods, constructor etc. can go here ...
}

// use the above class as follows (or use JSX syntax) -- 
const view = UICell.with(
  // ...
  MyView.with(
    { foo: "xyz" },
    UIRow.with(/* ... */)
  )
)
```

### Constructor
```typescript
(): ViewComponent
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).with() <span class="spec_tag">static</span> {#ViewComponent:with}
{:.spec}

```typescript
[1]. <T extends typeof ViewComponent, PresetT = object, ContentPropertiesT extends string = "content">(this: T, options?: { defaults?: PresetT | (() => PresetT); content?: ContentPropertiesT[]; view: typeof Component | ComponentConstructor<...>; event?: (e: any) => void | ... 1 more ... | ManagedEvent[]; }): PresetType<...>
[2]. <T extends typeof ViewComponent>(this: T, presets: PresetArgType<T>): T
[3]. <T extends typeof ViewComponent>(this: T, presets: PresetArgType<T>, content_0: UIRenderableConstructor, ...content_1: UIRenderableConstructor[]): T
[4]. <T extends typeof ViewComponent>(this: T, content_0: UIRenderableConstructor, ...content_1: UIRenderableConstructor[]): T
```
{:.declarationspec}
**[1]** Declare a view component class with given properties and view


**[2]** Declare a view component class with given preset properties


**[3]** Declare a view component class with given preset properties and content


**[4]** Declare a view component class with given view or content.

> **Note:** The `ViewComponent` class overrides the standard [`Component.with`](./Component#Component:with) method to be able to return a type that is compatible with JSX syntax, while remaining compatible with the original type. Common usage is more straightforward than the type definition suggests -- refer to the example above.




## ![](/assets/icons/spec-method.svg).presetChildView() <span class="spec_tag">static</span> {#ViewComponent:presetChildView}
{:.spec}

```typescript
<TViewComponent>(this: (new (...args: never[]) => TViewComponent) & typeof ViewComponent, propertyName: keyof TViewComponent, View: UIRenderableConstructor, boundProperties?: true | (keyof TViewComponent)[]): void
```
{:.declarationspec}
Create a child view of given type automatically for each instance of the view component. Bindings for given properties are bound to the ViewComponent instance, others are ignored so that their values will be taken from the containing bound parent instead of the ViewComponent itself.

- `propertyName` — The property that will be set. This property must _already_ be a designated managed child property (see [`@managedChild`](./managedChild)).

- `View` — The (preset) constructor for the child view. This constructor will be used to create a child component for each `ViewComponent` instance.

- `boundProperties` — A list of properties for which bindings (on the child component) should be bound to the `ViewComponent` instance, instead of the original parent. Alternatively, set this to `true` to bind _all_ bindings on the `ViewComponent` instance.



## ![](/assets/icons/spec-property.svg).view {#ViewComponent:view}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
The root component that makes up the content for this view, bound to the `ViewComponent` itself.



## ![](/assets/icons/spec-method.svg).render() {#ViewComponent:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Render the encapsulated view for this component. This method should not be called directly; it is called automatically based on changes to the application render context.



## ![](/assets/icons/spec-method.svg).beforeRender() <span class="spec_tag">protected</span> {#ViewComponent:beforeRender}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Method that is called immediately before the view is rendered; can be overridden.



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
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#ViewComponent:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



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
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
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



## ![](/assets/icons/spec-method.svg).emitChange() {#ViewComponent:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



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



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#ViewComponent:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



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

## ![](/assets/icons/spec-interface.svg)ViewComponent.PresetViewComponentConstructor {#ViewComponent:PresetViewComponentConstructor}
{:.spec}

The result of ViewComponent.with(...), used like any other preset component constructor.



## ![](/assets/icons/spec-method.svg).with() {#ViewComponent:PresetViewComponentConstructor:with}
{:.spec}

```typescript
(presets: { [P in keyof PresetT]?: Type | PresetT[P]; } | { [eventName: string]: string; }, ...content: UIRenderableConstructor[]): PresetType<PresetT, ContentPropertiesT>
```
{:.declarationspec}
Declare a view component class with given preset properties and content.



---

## ![](/assets/icons/spec-type.svg)ViewComponent.PresetType {#ViewComponent:PresetType}
{:.spec}

```typescript
type PresetType<PresetT, ContentPropertiesT extends string> = {
        [P in keyof typeof ViewComponent]: typeof ViewComponent[P];
    } & PresetViewComponentConstructor<PresetT, ContentPropertiesT>;
```
{:.declarationspec}
The result of ViewComponent.with(...), used like any other preset component constructor.

