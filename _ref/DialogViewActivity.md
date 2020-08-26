---
title: DialogViewActivity
nav: |

  #### Declarations
  * [**class DialogViewActivity**](#DialogViewActivity)

  #### Inherited
  * [.view](#DialogViewActivity:view)
  * [.placement](#DialogViewActivity:placement)
  * [.modalShadeOpacity](#DialogViewActivity:modalShadeOpacity)
  * [.render()](#DialogViewActivity:render)
  * [.removeViewAsync()](#DialogViewActivity:removeViewAsync)
  * [.restoreFocus()](#DialogViewActivity:restoreFocus)
  * [.firstFocused](#DialogViewActivity:firstFocused)
  * [.lastFocused](#DialogViewActivity:lastFocused)
  * [.showDialogAsync()](#DialogViewActivity:showDialogAsync)
  * [.showConfirmationDialogAsync()](#DialogViewActivity:showConfirmationDialogAsync)
  * [.name](#DialogViewActivity:name)
  * [.path](#DialogViewActivity:path)
  * [.match](#DialogViewActivity:match)
  * [.getParentActivity()](#DialogViewActivity:getParentActivity)
  * [.getApplication()](#DialogViewActivity:getApplication)
  * [.activateAsync()](#DialogViewActivity:activateAsync)
  * [.destroyAsync()](#DialogViewActivity:destroyAsync)
  * [.isActive()](#DialogViewActivity:isActive)
  * [.activated](#DialogViewActivity:activated)
  * [.deactivated](#DialogViewActivity:deactivated)
  * [.renderContext](#DialogViewActivity:renderContext)
  * [.activationContext](#DialogViewActivity:activationContext)
  * [.isPresetComponent()](#DialogViewActivity:isPresetComponent)
  * [.getParentComponent()](#DialogViewActivity:getParentComponent)
  * [.getBoundParentComponent()](#DialogViewActivity:getBoundParentComponent)
  * [.propagateComponentEvent()](#DialogViewActivity:propagateComponentEvent)
  * [.managedId](#DialogViewActivity:managedId)
  * [.managedState](#DialogViewActivity:managedState)
  * [.getReferenceCount()](#DialogViewActivity:getReferenceCount)
  * [.getManagedReferrers()](#DialogViewActivity:getManagedReferrers)
  * [.getManagedParent()](#DialogViewActivity:getManagedParent)
  * [.emit()](#DialogViewActivity:emit)
  * [.emitChange()](#DialogViewActivity:emitChange)
  * [.propagateChildEvents()](#DialogViewActivity:propagateChildEvents)
  * [.activateManagedAsync()](#DialogViewActivity:activateManagedAsync)
  * [.deactivateManagedAsync()](#DialogViewActivity:deactivateManagedAsync)
  * [.destroyManagedAsync()](#DialogViewActivity:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#DialogViewActivity:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#DialogViewActivity:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#DialogViewActivity:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#DialogViewActivity:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#DialogViewActivity:onManagedStateDestroyingAsync)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class DialogViewActivity {#DialogViewActivity}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ViewActivity`](./ViewActivity)</code></pre>
{:.declarationspec}

Represents an application activity with a view that is rendered as a modal dialog (when active). The activity is destroyed automatically when a `CloseModal` event is emitted on the view instance.

**Note:** Use [`UIComponent.position`](./UIComponent#UIComponent:position) ([`UIStyle.Position`](./UIStyle#UIStyle:Position), specifically the `gravity` property) to determine the position of the dialog UI.

### Constructor
```typescript
(): DialogViewActivity
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).view {#DialogViewActivity:view}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
Inherited from [`ViewActivity.view`](./ViewActivity#ViewActivity:view).



## ![](/assets/icons/spec-property.svg).placement {#DialogViewActivity:placement}
{:.spec}

```typescript
UIRenderPlacement
```
{:.declarationspec}
Inherited from [`ViewActivity.placement`](./ViewActivity#ViewActivity:placement).



## ![](/assets/icons/spec-property.svg).modalShadeOpacity {#DialogViewActivity:modalShadeOpacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ViewActivity.modalShadeOpacity`](./ViewActivity#ViewActivity:modalShadeOpacity).



## ![](/assets/icons/spec-method.svg).render() {#DialogViewActivity:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`ViewActivity.render`](./ViewActivity#ViewActivity:render).



## ![](/assets/icons/spec-method.svg).removeViewAsync() {#DialogViewActivity:removeViewAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ViewActivity.removeViewAsync`](./ViewActivity#ViewActivity:removeViewAsync).



## ![](/assets/icons/spec-method.svg).restoreFocus() {#DialogViewActivity:restoreFocus}
{:.spec}

```typescript
(firstFocused?: boolean): void
```
{:.declarationspec}
Inherited from [`ViewActivity.restoreFocus`](./ViewActivity#ViewActivity:restoreFocus).



## ![](/assets/icons/spec-property.svg).firstFocused {#DialogViewActivity:firstFocused}
{:.spec}

```typescript
UIComponent
```
{:.declarationspec}
Inherited from [`ViewActivity.firstFocused`](./ViewActivity#ViewActivity:firstFocused).



## ![](/assets/icons/spec-property.svg).lastFocused {#DialogViewActivity:lastFocused}
{:.spec}

```typescript
UIComponent
```
{:.declarationspec}
Inherited from [`ViewActivity.lastFocused`](./ViewActivity#ViewActivity:lastFocused).



## ![](/assets/icons/spec-method.svg).showDialogAsync() {#DialogViewActivity:showDialogAsync}
{:.spec}

```typescript
(View: UIRenderableConstructor, eventHandler?: (this: DialogViewActivity, e: ManagedEvent) => void): Promise<ViewActivity>
```
{:.declarationspec}
Inherited from [`ViewActivity.showDialogAsync`](./ViewActivity#ViewActivity:showDialogAsync).



## ![](/assets/icons/spec-method.svg).showConfirmationDialogAsync() {#DialogViewActivity:showConfirmationDialogAsync}
{:.spec}

```typescript
(message: string | { toString(): string; } | Stringable[], title?: Stringable, confirmButtonLabel?: Stringable, cancelButtonLabel?: Stringable): Promise<...>
```
{:.declarationspec}
Inherited from [`ViewActivity.showConfirmationDialogAsync`](./ViewActivity#ViewActivity:showConfirmationDialogAsync).



## ![](/assets/icons/spec-property.svg).name {#DialogViewActivity:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`AppActivity.name`](./AppActivity#AppActivity:name).



## ![](/assets/icons/spec-property.svg).path {#DialogViewActivity:path}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`AppActivity.path`](./AppActivity#AppActivity:path).



## ![](/assets/icons/spec-property.svg).match {#DialogViewActivity:match}
{:.spec}

```typescript
Readonly<MatchedPath>
```
{:.declarationspec}
Inherited from [`AppActivity.match`](./AppActivity#AppActivity:match).



## ![](/assets/icons/spec-method.svg).getParentActivity() {#DialogViewActivity:getParentActivity}
{:.spec}

```typescript
(): AppActivity
```
{:.declarationspec}
Inherited from [`AppActivity.getParentActivity`](./AppActivity#AppActivity:getParentActivity).



## ![](/assets/icons/spec-method.svg).getApplication() {#DialogViewActivity:getApplication}
{:.spec}

```typescript
(): Application
```
{:.declarationspec}
Inherited from [`AppActivity.getApplication`](./AppActivity#AppActivity:getApplication).



## ![](/assets/icons/spec-method.svg).activateAsync() {#DialogViewActivity:activateAsync}
{:.spec}

```typescript
(match?: MatchedPath): Promise<void>
```
{:.declarationspec}
Inherited from [`AppActivity.activateAsync`](./AppActivity#AppActivity:activateAsync).



## ![](/assets/icons/spec-method.svg).destroyAsync() {#DialogViewActivity:destroyAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`AppActivity.destroyAsync`](./AppActivity#AppActivity:destroyAsync).



## ![](/assets/icons/spec-method.svg).isActive() {#DialogViewActivity:isActive}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`AppActivity.isActive`](./AppActivity#AppActivity:isActive).



## ![](/assets/icons/spec-property.svg).activated {#DialogViewActivity:activated}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`AppActivity.activated`](./AppActivity#AppActivity:activated).



## ![](/assets/icons/spec-property.svg).deactivated {#DialogViewActivity:deactivated}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`AppActivity.deactivated`](./AppActivity#AppActivity:deactivated).



## ![](/assets/icons/spec-property.svg).renderContext {#DialogViewActivity:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`AppComponent.renderContext`](./AppComponent#AppComponent:renderContext).



## ![](/assets/icons/spec-property.svg).activationContext {#DialogViewActivity:activationContext}
{:.spec}

```typescript
AppActivationContext
```
{:.declarationspec}
Inherited from [`AppComponent.activationContext`](./AppComponent#AppComponent:activationContext).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#DialogViewActivity:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#DialogViewActivity:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#DialogViewActivity:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#DialogViewActivity:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#DialogViewActivity:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#DialogViewActivity:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#DialogViewActivity:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#DialogViewActivity:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#DialogViewActivity:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#DialogViewActivity:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#DialogViewActivity:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#DialogViewActivity:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#DialogViewActivity:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#DialogViewActivity:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#DialogViewActivity:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#DialogViewActivity:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#DialogViewActivity:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#DialogViewActivity:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#DialogViewActivity:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#DialogViewActivity:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

