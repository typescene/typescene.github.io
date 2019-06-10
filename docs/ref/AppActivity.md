---
title: AppActivity
nav: |

  #### Declarations
  * [**class AppActivity**](#AppActivity)
  * [.name](#AppActivity:name)
  * [.path](#AppActivity:path)
  * [.match](#AppActivity:match)
  * [.getParentActivity()](#AppActivity:getParentActivity)
  * [.getApplication()](#AppActivity:getApplication)
  * [.activateAsync()](#AppActivity:activateAsync)
  * [.deactivateAsync()](#AppActivity:deactivateAsync)
  * [.destroyAsync()](#AppActivity:destroyAsync)
  * [.isActive()](#AppActivity:isActive)
  * [.deactivated](#AppActivity:deactivated)

  #### Inherited
  * [.renderContext](#AppActivity:renderContext)
  * [.activationContext](#AppActivity:activationContext)

  #### Namespaced
  * [**AppActivity.Presets**](#AppActivity:Presets)
  * [.name](#AppActivity:Presets:name)
  * [.path](#AppActivity:Presets:path)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class AppActivity {#AppActivity}
{:.spec}

Activity base class. Represents a component of an application, which can be activated and deactivated independently. Can be used for activities that are activated independently of the UI; otherwise refer to any of the [`ViewActivity`](./ViewActivity) classes.

### Constructor
```typescript
(name?: string, path?: string): AppActivity
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).name {#AppActivity:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Optional human readable name for this activity.



## ![](/assets/icons/spec-property.svg).path {#AppActivity:path}
{:.spec}

```typescript
string
```
{:.declarationspec}
Optional activation path; if set to a string, this activity is automatically activated and deactivated asynchronously, depending on the current target path (e.g. URL path, handled by a platform dependent [`AppActivationContext`](./AppActivationContext) instance).



## ![](/assets/icons/spec-property.svg).match {#AppActivity:match}
{:.spec}

```typescript
Readonly<MatchedPath>
```
{:.declarationspec}
The path segments that were captured *last* based on the target path, as matched by the [`AppActivationContext`](./AppActivationContext), for a path such as `foo/bar/:id`, `foo/*name`, or `./:id`. This property is set when the activity is activated through [`activateAsync`](#AppActivity:activateAsync).



## ![](/assets/icons/spec-method.svg).getParentActivity() {#AppActivity:getParentActivity}
{:.spec}

```typescript
(): AppActivity
```
{:.declarationspec}
Returns the activity instance that contains a managed child reference that (indirectly) points to this activity instance.



## ![](/assets/icons/spec-method.svg).getApplication() {#AppActivity:getApplication}
{:.spec}

```typescript
(): Application
```
{:.declarationspec}
Returns the parent application that contains this activity, if any.



## ![](/assets/icons/spec-method.svg).activateAsync() {#AppActivity:activateAsync}
{:.spec}

```typescript
(match?: MatchedPath): Promise<void>
```
{:.declarationspec}
Activate this activity, based on given captured path segments (returned by [`AppActivationContext.match`](./AppActivationContext#AppActivationContext:match), for a path such as `foo/bar/:id`, `foo/*name`, or `./:id`). This method is called automatically when the activity path matches the current target path, and can be overridden to validate the captured path segments before activation.



## ![](/assets/icons/spec-method.svg).deactivateAsync() {#AppActivity:deactivateAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Deactivate this activity.



## ![](/assets/icons/spec-method.svg).destroyAsync() {#AppActivity:destroyAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Destroy this activity.



## ![](/assets/icons/spec-method.svg).isActive() {#AppActivity:isActive}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Returns true if this activity is currently active.



## ![](/assets/icons/spec-property.svg).deactivated {#AppActivity:deactivated}
{:.spec}

```typescript
number
```
{:.declarationspec}
The time (result of `Date.now()`) when this activity was last deactivated; or undefined if this activity has never been deactivated.



## ![](/assets/icons/spec-property.svg).renderContext {#AppActivity:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`AppComponent.renderContext`](./AppComponent#AppComponent:renderContext).



## ![](/assets/icons/spec-property.svg).activationContext {#AppActivity:activationContext}
{:.spec}

```typescript
AppActivationContext
```
{:.declarationspec}
Inherited from [`AppComponent.activationContext`](./AppComponent#AppComponent:activationContext).





---

## ![](/assets/icons/spec-interface.svg)AppActivity.Presets {#AppActivity:Presets}
{:.spec}

Activity presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).name {#AppActivity:Presets:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Human readable name for this activity.



## ![](/assets/icons/spec-property.svg).path {#AppActivity:Presets:path}
{:.spec}

```typescript
string
```
{:.declarationspec}
(Partial) activation path, see [`AppActivity.path`](./AppActivity#AppActivity:path).

