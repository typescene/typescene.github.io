---
title: Application
nav: |

  #### Declarations
  * [**class Application**](#Application)
  * [.run()](#Application:run)
  * [.active](#Application:active)
  * [.name](#Application:name)
  * [.activities](#Application:activities)
  * [.renderContext](#Application:renderContext)
  * [.activationContext](#Application:activationContext)
  * [.activate()](#Application:activate)
  * [.activateAsync()](#Application:activateAsync)
  * [.deactivateAsync()](#Application:deactivateAsync)
  * [.destroyAsync()](#Application:destroyAsync)
  * [.navigate()](#Application:navigate)
  * [.add()](#Application:add)
  * [.showViewActivityAsync()](#Application:showViewActivityAsync)

  #### Inherited
  * [.isPresetComponent()](#Application:isPresetComponent)
  * [.getParentComponent()](#Application:getParentComponent)
  * [.getCompositeParent()](#Application:getCompositeParent)
  * [.propagateComponentEvent()](#Application:propagateComponentEvent)
  * [.managedId](#Application:managedId)
  * [.managedState](#Application:managedState)
  * [.getReferenceCount()](#Application:getReferenceCount)
  * [.getManagedReferrers()](#Application:getManagedReferrers)
  * [.getManagedParent()](#Application:getManagedParent)
  * [.emit()](#Application:emit)
  * [.propagateChildEvents()](#Application:propagateChildEvents)
  * [.activateManagedAsync()](#Application:activateManagedAsync)
  * [.deactivateManagedAsync()](#Application:deactivateManagedAsync)
  * [.destroyManagedAsync()](#Application:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#Application:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#Application:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#Application:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#Application:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#Application:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**Application.Presets**](#Application:Presets)
  * [.name](#Application:Presets:name)
  * [.renderContext](#Application:Presets:renderContext)
  * [.activationContext](#Application:Presets:activationContext)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class Application {#Application}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`Component`](./Component)</code></pre>
{:.declarationspec}

Represents the application itself, encapsulates activities ([`AppActivity`](./AppActivity) components) and contexts for rendering and activation using URL-like paths.

Use the static [`run`](#Application:run) method to create and activate an application using a set of activity constructors, or create an application class that includes activities as sub components (properties decorated using the [`@compose`](./compose) decorator). For a manually created class, an instance must be created and activated (see [`activate`](#Application:activate)) for the application to start.

**Note:** Do not use the `Application` class directly, as it will __not__ initialize rendering or activation contexts. Instead, use platform specific application classes such as `BrowserApplication` that is exported by the `@typescene/webapp` package.

### Constructor
```typescript
(): Application
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).run() <span class="spec_tag">static</span> {#Application:run}
{:.spec}

```typescript
<T extends Application>(this: typeof Application & (new () => T), ...activities: (ComponentConstructor<Component> & (new () => AppActivity))[]): T
```
{:.declarationspec}
Create an application that includes given activities, and start it immediately.

**Returns:** the application instance.

**Note:** Calling this method directly on `Application` creates an application without any context (i.e. [`activationContext`](#Application:activationContext) and [`renderContext`](#Application:renderContext)). Instead, use a constructor that is meant for a specific platform (e.g. `BrowserApplication`).



## ![](/assets/icons/spec-property.svg).active <span class="spec_tag">static</span> {#Application:active}
{:.spec}

```typescript
ManagedList<Application>
```
{:.declarationspec}
All `Application` instances that are currently active.



## ![](/assets/icons/spec-property.svg).name {#Application:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
The application name.



## ![](/assets/icons/spec-property.svg).activities {#Application:activities}
{:.spec}

```typescript
AppActivityList
```
{:.declarationspec}
List of root activities, as child components.



## ![](/assets/icons/spec-property.svg).renderContext {#Application:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Application render context as a managed child object, propagated to all (nested) [`AppComponent`](./AppComponent) instances.



## ![](/assets/icons/spec-property.svg).activationContext {#Application:activationContext}
{:.spec}

```typescript
AppActivationContext
```
{:.declarationspec}
Activity activation context as a managed child object, propagated to all (nested) [`AppComponent`](./AppComponent) instances.



## ![](/assets/icons/spec-method.svg).activate() {#Application:activate}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Activate this application asynchronously, immediately creating all primary activities; any errors during activation are handled by logging them to the console (uses [`UnhandledErrorEmitter`](./UnhandledErrorEmitter)).

**Returns:** the application itself.



## ![](/assets/icons/spec-method.svg).activateAsync() {#Application:activateAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Activate this application, immediately creating all primary activities.



## ![](/assets/icons/spec-method.svg).deactivateAsync() {#Application:deactivateAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Deactivate this application, immediately destroying all actvities.



## ![](/assets/icons/spec-method.svg).destroyAsync() {#Application:destroyAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Destroy this application, immediately destroying all activities.



## ![](/assets/icons/spec-method.svg).navigate() {#Application:navigate}
{:.spec}

```typescript
(path: string): this
```
{:.declarationspec}
Navigate to given (relative) path, or go back in history if argument is `:back`, using the current [`Application.activationContext`](./Application#Application:activationContext).



## ![](/assets/icons/spec-method.svg).add() {#Application:add}
{:.spec}

```typescript
(...activities: AppActivity[]): this
```
{:.declarationspec}
Add given activities to the application. Activities with matching paths will be activated immediately (see [`AppActivity.path`](./AppActivity#AppActivity:path)).



## ![](/assets/icons/spec-method.svg).showViewActivityAsync() {#Application:showViewActivityAsync}
{:.spec}

```typescript
<TViewActivity extends AppActivity & { render: Function; }>(viewActivity: TViewActivity): Promise<TViewActivity>
```
{:.declarationspec}
Add given view activity to the application, and activate it immediately regardless of [`AppActivity.path`](./AppActivity#AppActivity:path); this causes corresponding views to be rendered if possible.

**Returns:** A promise that resolves to the view activity after it has been activated.



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#Application:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#Application:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#Application:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#Application:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#Application:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#Application:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#Application:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#Application:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#Application:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#Application:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#Application:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#Application:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#Application:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#Application:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#Application:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#Application:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#Application:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#Application:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#Application:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)Application.Presets {#Application:Presets}
{:.spec}

Application presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).name {#Application:Presets:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Human readable application name.



## ![](/assets/icons/spec-property.svg).renderContext {#Application:Presets:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Platform dependent application render context.



## ![](/assets/icons/spec-property.svg).activationContext {#Application:Presets:activationContext}
{:.spec}

```typescript
AppActivationContext
```
{:.declarationspec}
Platform dependent activation context (router).

