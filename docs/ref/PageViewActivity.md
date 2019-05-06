---
title: PageViewActivity
nav: |

  #### Declarations
  * [**class PageViewActivity**](#PageViewActivity)
  * [.placement](#PageViewActivity:placement)

  #### Inherited
  * [.view](#PageViewActivity:view)
  * [.modalShadeOpacity](#PageViewActivity:modalShadeOpacity)
  * [.modalShadeClickToClose](#PageViewActivity:modalShadeClickToClose)
  * [.render()](#PageViewActivity:render)
  * [.removeViewAsync()](#PageViewActivity:removeViewAsync)
  * [.restoreFocus()](#PageViewActivity:restoreFocus)
  * [.firstFocused](#PageViewActivity:firstFocused)
  * [.lastFocused](#PageViewActivity:lastFocused)
  * [.showDialogAsync()](#PageViewActivity:showDialogAsync)
  * [.showConfirmationDialogAsync()](#PageViewActivity:showConfirmationDialogAsync)
  * [.name](#PageViewActivity:name)
  * [.path](#PageViewActivity:path)
  * [.match](#PageViewActivity:match)
  * [.getParentActivity()](#PageViewActivity:getParentActivity)
  * [.getApplication()](#PageViewActivity:getApplication)
  * [.activateAsync()](#PageViewActivity:activateAsync)
  * [.deactivateAsync()](#PageViewActivity:deactivateAsync)
  * [.destroyAsync()](#PageViewActivity:destroyAsync)
  * [.isActive()](#PageViewActivity:isActive)
  * [.deactivated](#PageViewActivity:deactivated)
  * [.renderContext](#PageViewActivity:renderContext)
  * [.activationContext](#PageViewActivity:activationContext)
  * [.isPresetComponent()](#PageViewActivity:isPresetComponent)
  * [.getParentComponent()](#PageViewActivity:getParentComponent)
  * [.getCompositeParent()](#PageViewActivity:getCompositeParent)
  * [.propagateComponentEvent()](#PageViewActivity:propagateComponentEvent)
  * [.managedId](#PageViewActivity:managedId)
  * [.managedState](#PageViewActivity:managedState)
  * [.getReferenceCount()](#PageViewActivity:getReferenceCount)
  * [.getManagedReferrers()](#PageViewActivity:getManagedReferrers)
  * [.getManagedParent()](#PageViewActivity:getManagedParent)
  * [.emit()](#PageViewActivity:emit)
  * [.propagateChildEvents()](#PageViewActivity:propagateChildEvents)
  * [.activateManagedAsync()](#PageViewActivity:activateManagedAsync)
  * [.deactivateManagedAsync()](#PageViewActivity:deactivateManagedAsync)
  * [.destroyManagedAsync()](#PageViewActivity:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#PageViewActivity:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#PageViewActivity:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#PageViewActivity:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#PageViewActivity:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#PageViewActivity:onManagedStateDestroyingAsync)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class PageViewActivity {#PageViewActivity}
{:.spec}

Represents an application activity with a view that is rendered as a full page.

### Constructor
```typescript
(name?: string, path?: string): PageViewActivity
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).placement {#PageViewActivity:placement}
{:.spec}

```typescript
UIRenderPlacement
```
{:.declarationspec}
View placement mode, determines if and how view is rendered when activated.



## ![](/assets/icons/spec-property.svg).view {#PageViewActivity:view}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
Inherited from [`ViewActivity.view`](./ViewActivity#ViewActivity:view).



## ![](/assets/icons/spec-property.svg).modalShadeOpacity {#PageViewActivity:modalShadeOpacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ViewActivity.modalShadeOpacity`](./ViewActivity#ViewActivity:modalShadeOpacity).



## ![](/assets/icons/spec-property.svg).modalShadeClickToClose {#PageViewActivity:modalShadeClickToClose}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
Inherited from [`ViewActivity.modalShadeClickToClose`](./ViewActivity#ViewActivity:modalShadeClickToClose).



## ![](/assets/icons/spec-method.svg).render() {#PageViewActivity:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`ViewActivity.render`](./ViewActivity#ViewActivity:render).



## ![](/assets/icons/spec-method.svg).removeViewAsync() {#PageViewActivity:removeViewAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ViewActivity.removeViewAsync`](./ViewActivity#ViewActivity:removeViewAsync).



## ![](/assets/icons/spec-method.svg).restoreFocus() {#PageViewActivity:restoreFocus}
{:.spec}

```typescript
(firstFocused?: boolean): void
```
{:.declarationspec}
Inherited from [`ViewActivity.restoreFocus`](./ViewActivity#ViewActivity:restoreFocus).



## ![](/assets/icons/spec-property.svg).firstFocused {#PageViewActivity:firstFocused}
{:.spec}

```typescript
UIComponent
```
{:.declarationspec}
Inherited from [`ViewActivity.firstFocused`](./ViewActivity#ViewActivity:firstFocused).



## ![](/assets/icons/spec-property.svg).lastFocused {#PageViewActivity:lastFocused}
{:.spec}

```typescript
UIComponent
```
{:.declarationspec}
Inherited from [`ViewActivity.lastFocused`](./ViewActivity#ViewActivity:lastFocused).



## ![](/assets/icons/spec-method.svg).showDialogAsync() {#PageViewActivity:showDialogAsync}
{:.spec}

```typescript
(View: UIRenderableConstructor, modalShadeClickToClose?: boolean, eventHandler?: (this: DialogViewActivity, e: ManagedEvent) => void): Promise<ViewActivity>
```
{:.declarationspec}
Inherited from [`ViewActivity.showDialogAsync`](./ViewActivity#ViewActivity:showDialogAsync).



## ![](/assets/icons/spec-method.svg).showConfirmationDialogAsync() {#PageViewActivity:showConfirmationDialogAsync}
{:.spec}

```typescript
(message: string | string[], title?: string, confirmButtonLabel?: string, cancelButtonLabel?: string): Promise<boolean>
```
{:.declarationspec}
Inherited from [`ViewActivity.showConfirmationDialogAsync`](./ViewActivity#ViewActivity:showConfirmationDialogAsync).



## ![](/assets/icons/spec-property.svg).name {#PageViewActivity:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`AppActivity.name`](./AppActivity#AppActivity:name).



## ![](/assets/icons/spec-property.svg).path {#PageViewActivity:path}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`AppActivity.path`](./AppActivity#AppActivity:path).



## ![](/assets/icons/spec-property.svg).match {#PageViewActivity:match}
{:.spec}

```typescript
Readonly<MatchedPath>
```
{:.declarationspec}
Inherited from [`AppActivity.match`](./AppActivity#AppActivity:match).



## ![](/assets/icons/spec-method.svg).getParentActivity() {#PageViewActivity:getParentActivity}
{:.spec}

```typescript
(): AppActivity
```
{:.declarationspec}
Inherited from [`AppActivity.getParentActivity`](./AppActivity#AppActivity:getParentActivity).



## ![](/assets/icons/spec-method.svg).getApplication() {#PageViewActivity:getApplication}
{:.spec}

```typescript
(): Application
```
{:.declarationspec}
Inherited from [`AppActivity.getApplication`](./AppActivity#AppActivity:getApplication).



## ![](/assets/icons/spec-method.svg).activateAsync() {#PageViewActivity:activateAsync}
{:.spec}

```typescript
(match?: MatchedPath): Promise<void>
```
{:.declarationspec}
Inherited from [`AppActivity.activateAsync`](./AppActivity#AppActivity:activateAsync).



## ![](/assets/icons/spec-method.svg).deactivateAsync() {#PageViewActivity:deactivateAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`AppActivity.deactivateAsync`](./AppActivity#AppActivity:deactivateAsync).



## ![](/assets/icons/spec-method.svg).destroyAsync() {#PageViewActivity:destroyAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`AppActivity.destroyAsync`](./AppActivity#AppActivity:destroyAsync).



## ![](/assets/icons/spec-method.svg).isActive() {#PageViewActivity:isActive}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`AppActivity.isActive`](./AppActivity#AppActivity:isActive).



## ![](/assets/icons/spec-property.svg).deactivated {#PageViewActivity:deactivated}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`AppActivity.deactivated`](./AppActivity#AppActivity:deactivated).



## ![](/assets/icons/spec-property.svg).renderContext {#PageViewActivity:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`AppComponent.renderContext`](./AppComponent#AppComponent:renderContext).



## ![](/assets/icons/spec-property.svg).activationContext {#PageViewActivity:activationContext}
{:.spec}

```typescript
AppActivationContext
```
{:.declarationspec}
Inherited from [`AppComponent.activationContext`](./AppComponent#AppComponent:activationContext).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#PageViewActivity:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#PageViewActivity:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#PageViewActivity:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#PageViewActivity:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#PageViewActivity:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#PageViewActivity:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#PageViewActivity:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#PageViewActivity:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#PageViewActivity:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#PageViewActivity:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#PageViewActivity:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#PageViewActivity:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#PageViewActivity:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#PageViewActivity:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#PageViewActivity:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#PageViewActivity:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#PageViewActivity:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#PageViewActivity:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#PageViewActivity:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

