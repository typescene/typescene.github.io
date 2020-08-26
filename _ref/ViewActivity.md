---
title: ViewActivity
nav: |

  #### Declarations
  * [**class ViewActivity**](#ViewActivity)
  * [.view](#ViewActivity:view)
  * [.placement](#ViewActivity:placement)
  * [.modalShadeOpacity](#ViewActivity:modalShadeOpacity)
  * [.render()](#ViewActivity:render)
  * [.removeViewAsync()](#ViewActivity:removeViewAsync)
  * [.restoreFocus()](#ViewActivity:restoreFocus)
  * [.firstFocused](#ViewActivity:firstFocused)
  * [.lastFocused](#ViewActivity:lastFocused)
  * [.showDialogAsync()](#ViewActivity:showDialogAsync)
  * [.showConfirmationDialogAsync()](#ViewActivity:showConfirmationDialogAsync)

  #### Inherited
  * [.name](#ViewActivity:name)
  * [.path](#ViewActivity:path)
  * [.match](#ViewActivity:match)
  * [.getParentActivity()](#ViewActivity:getParentActivity)
  * [.getApplication()](#ViewActivity:getApplication)
  * [.activateAsync()](#ViewActivity:activateAsync)
  * [.destroyAsync()](#ViewActivity:destroyAsync)
  * [.isActive()](#ViewActivity:isActive)
  * [.activated](#ViewActivity:activated)
  * [.deactivated](#ViewActivity:deactivated)
  * [.renderContext](#ViewActivity:renderContext)
  * [.activationContext](#ViewActivity:activationContext)
  * [.isPresetComponent()](#ViewActivity:isPresetComponent)
  * [.getParentComponent()](#ViewActivity:getParentComponent)
  * [.getBoundParentComponent()](#ViewActivity:getBoundParentComponent)
  * [.propagateComponentEvent()](#ViewActivity:propagateComponentEvent)
  * [.managedId](#ViewActivity:managedId)
  * [.managedState](#ViewActivity:managedState)
  * [.getReferenceCount()](#ViewActivity:getReferenceCount)
  * [.getManagedReferrers()](#ViewActivity:getManagedReferrers)
  * [.getManagedParent()](#ViewActivity:getManagedParent)
  * [.emit()](#ViewActivity:emit)
  * [.emitChange()](#ViewActivity:emitChange)
  * [.propagateChildEvents()](#ViewActivity:propagateChildEvents)
  * [.activateManagedAsync()](#ViewActivity:activateManagedAsync)
  * [.deactivateManagedAsync()](#ViewActivity:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ViewActivity:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ViewActivity:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ViewActivity:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ViewActivity:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ViewActivity:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ViewActivity:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**ViewActivity.Presets**](#ViewActivity:Presets)
  * [.placement](#ViewActivity:Presets:placement)
  * [.modalShadeOpacity](#ViewActivity:Presets:modalShadeOpacity)
  * [.name](#ViewActivity:Presets:name)
  * [.path](#ViewActivity:Presets:path)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class ViewActivity {#ViewActivity}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`AppActivity`](./AppActivity) implements [`UIRenderable`](./UIRenderable)</code></pre>
{:.declarationspec}

View activity base class. Represents an application activity with content that can be rendered when activated.

**Note:** Nothing is rendered if the [`placement`](#ViewActivity:placement) property is undefined (default). Make sure this property is set to a [`UIRenderPlacement`](./UIRenderPlacement) value before rendering, or use a specific view activity class such as [`PageViewActivity`](./PageViewActivity).

#### See Also
[`PageViewActivity`](./PageViewActivity), [`DialogViewActivity`](./DialogViewActivity).



### Constructor
```typescript
(name?: string, path?: string): ViewActivity
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).view {#ViewActivity:view}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
The root component that makes up the content for this view, as a child component.



## ![](/assets/icons/spec-property.svg).placement {#ViewActivity:placement}
{:.spec}

```typescript
UIRenderPlacement
```
{:.declarationspec}
View placement mode, determines if and how view is rendered when activated.



## ![](/assets/icons/spec-property.svg).modalShadeOpacity {#ViewActivity:modalShadeOpacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Modal shade backdrop opacity behind content (0-1), if supported by placement mode.



## ![](/assets/icons/spec-method.svg).render() {#ViewActivity:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Render the view for this activity and display it, if it is not currently visible.

This method is called automatically after the root view component is created and/or when an application render context is made available or emits a change event, and should not be called directly.



## ![](/assets/icons/spec-method.svg).removeViewAsync() {#ViewActivity:removeViewAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Remove the view output that was rendered by [`ViewActivity.render`](./ViewActivity#ViewActivity:render), if any.

This method is called automatically after the root view component or render context is removed, and should not be called directly.



## ![](/assets/icons/spec-method.svg).restoreFocus() {#ViewActivity:restoreFocus}
{:.spec}

```typescript
(firstFocused?: boolean): void
```
{:.declarationspec}
Request input focus on the last (or first) focused UI component, if any.



## ![](/assets/icons/spec-property.svg).firstFocused {#ViewActivity:firstFocused}
{:.spec}

```typescript
UIComponent
```
{:.declarationspec}
The UI component that was focused first, if any.



## ![](/assets/icons/spec-property.svg).lastFocused {#ViewActivity:lastFocused}
{:.spec}

```typescript
UIComponent
```
{:.declarationspec}
The UI component that was most recently focused, if any.



## ![](/assets/icons/spec-method.svg).showDialogAsync() {#ViewActivity:showDialogAsync}
{:.spec}

```typescript
(View: UIRenderableConstructor, eventHandler?: (this: DialogViewActivity, e: ManagedEvent) => void): Promise<ViewActivity>
```
{:.declarationspec}
Create an instance of given view component, wrapped in a singleton dialog view activity, and adds it to the application to be displayed immediately.

- `View` — A view component constructor.

- `eventHandler` — A function that is invoked for all events that are emitted by the view; if no function is specified, only the `CloseModal` event is handled (emitted e.g. when clicking outside of the modal view area) by destroying the view activity instance.

**Returns:** A promise that resolves to the view _activity_ instance after it has been activated.

**Note:** Use to the [`Application.showViewActivityAsync`](./Application#Application:showViewActivityAsync) method to show a view that is already encapsulated in an activity instance.



## ![](/assets/icons/spec-method.svg).showConfirmationDialogAsync() {#ViewActivity:showConfirmationDialogAsync}
{:.spec}

```typescript
(message: string | { toString(): string; } | Stringable[], title?: Stringable, confirmButtonLabel?: Stringable, cancelButtonLabel?: Stringable): Promise<...>
```
{:.declarationspec}
Display a confirmation/alert dialog with given content. If the 'cancel' button label is not provided, the dialog will only contain a 'confirm' button. All strings are automatically translated to the current locale using the [`strf`](./strf) function.

- `message` — The message to be displayed, or multiple message paragraphs (for arrays).

- `title` — The dialog title, displayed at the top of the dialog (optional).

- `confirmButtonLabel` — The label for the 'confirm' button.

- `cancelButtonLabel` — The label for the 'cancel' button, if any.

**Returns:** A promise that resolves to true if the OK button was clicked, false otherwise.



## ![](/assets/icons/spec-property.svg).name {#ViewActivity:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`AppActivity.name`](./AppActivity#AppActivity:name).



## ![](/assets/icons/spec-property.svg).path {#ViewActivity:path}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`AppActivity.path`](./AppActivity#AppActivity:path).



## ![](/assets/icons/spec-property.svg).match {#ViewActivity:match}
{:.spec}

```typescript
Readonly<MatchedPath>
```
{:.declarationspec}
Inherited from [`AppActivity.match`](./AppActivity#AppActivity:match).



## ![](/assets/icons/spec-method.svg).getParentActivity() {#ViewActivity:getParentActivity}
{:.spec}

```typescript
(): AppActivity
```
{:.declarationspec}
Inherited from [`AppActivity.getParentActivity`](./AppActivity#AppActivity:getParentActivity).



## ![](/assets/icons/spec-method.svg).getApplication() {#ViewActivity:getApplication}
{:.spec}

```typescript
(): Application
```
{:.declarationspec}
Inherited from [`AppActivity.getApplication`](./AppActivity#AppActivity:getApplication).



## ![](/assets/icons/spec-method.svg).activateAsync() {#ViewActivity:activateAsync}
{:.spec}

```typescript
(match?: MatchedPath): Promise<void>
```
{:.declarationspec}
Inherited from [`AppActivity.activateAsync`](./AppActivity#AppActivity:activateAsync).



## ![](/assets/icons/spec-method.svg).destroyAsync() {#ViewActivity:destroyAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`AppActivity.destroyAsync`](./AppActivity#AppActivity:destroyAsync).



## ![](/assets/icons/spec-method.svg).isActive() {#ViewActivity:isActive}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`AppActivity.isActive`](./AppActivity#AppActivity:isActive).



## ![](/assets/icons/spec-property.svg).activated {#ViewActivity:activated}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`AppActivity.activated`](./AppActivity#AppActivity:activated).



## ![](/assets/icons/spec-property.svg).deactivated {#ViewActivity:deactivated}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`AppActivity.deactivated`](./AppActivity#AppActivity:deactivated).



## ![](/assets/icons/spec-property.svg).renderContext {#ViewActivity:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`AppComponent.renderContext`](./AppComponent#AppComponent:renderContext).



## ![](/assets/icons/spec-property.svg).activationContext {#ViewActivity:activationContext}
{:.spec}

```typescript
AppActivationContext
```
{:.declarationspec}
Inherited from [`AppComponent.activationContext`](./AppComponent#AppComponent:activationContext).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#ViewActivity:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#ViewActivity:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#ViewActivity:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#ViewActivity:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#ViewActivity:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#ViewActivity:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#ViewActivity:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ViewActivity:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ViewActivity:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#ViewActivity:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#ViewActivity:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#ViewActivity:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#ViewActivity:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#ViewActivity:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#ViewActivity:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#ViewActivity:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#ViewActivity:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#ViewActivity:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#ViewActivity:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#ViewActivity:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)ViewActivity.Presets {#ViewActivity:Presets}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`AppActivity.Presets`](./AppActivity#AppActivity:Presets)</code></pre>
{:.declarationspec}

View activity presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).placement {#ViewActivity:Presets:placement}
{:.spec}

```typescript
UIRenderPlacement
```
{:.declarationspec}
View placement mode.



## ![](/assets/icons/spec-property.svg).modalShadeOpacity {#ViewActivity:Presets:modalShadeOpacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Modal shade backdrop opacity behind content (0-1), if supported by placement mode.



## ![](/assets/icons/spec-property.svg).name {#ViewActivity:Presets:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`AppActivity.Presets.name`](./AppActivity#AppActivity:Presets:name).



## ![](/assets/icons/spec-property.svg).path {#ViewActivity:Presets:path}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`AppActivity.Presets.path`](./AppActivity#AppActivity:Presets:path).

