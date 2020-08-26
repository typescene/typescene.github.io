---
title: AppActivationContext
nav: |

  #### Declarations
  * [**class AppActivationContext**](#AppActivationContext)
  * [.target](#AppActivationContext:target)
  * [.navigate()](#AppActivationContext:navigate)
  * [.match()](#AppActivationContext:match)

  #### Inherited
  * [.managedId](#AppActivationContext:managedId)
  * [.managedState](#AppActivationContext:managedState)
  * [.getReferenceCount()](#AppActivationContext:getReferenceCount)
  * [.getManagedReferrers()](#AppActivationContext:getManagedReferrers)
  * [.getManagedParent()](#AppActivationContext:getManagedParent)
  * [.emit()](#AppActivationContext:emit)
  * [.propagateChildEvents()](#AppActivationContext:propagateChildEvents)
  * [.activateManagedAsync()](#AppActivationContext:activateManagedAsync)
  * [.deactivateManagedAsync()](#AppActivationContext:deactivateManagedAsync)
  * [.destroyManagedAsync()](#AppActivationContext:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#AppActivationContext:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#AppActivationContext:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#AppActivationContext:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#AppActivationContext:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#AppActivationContext:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**AppActivationContext.MatchedPath**](#AppActivationContext:MatchedPath)
  * [.path](#AppActivationContext:MatchedPath:path)
  * [[...]](#AppActivationContext:MatchedPath:::::)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class AppActivationContext {#AppActivationContext}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedObject`](./ManagedObject)</code></pre>
{:.declarationspec}

Represents the application state using a single path in URL format. Used by [`Application`](./Application) and [`AppActivity`](./AppActivity) classes to implement routing behaviors.

**Note:** An instance of this object is provided by the [`Application`](./Application) object (e.g. `BrowserApplication`), and is also available on all activities and views as [`activationContext`](/docs/ref/AppComponent#AppComponent:activationContext).

### Constructor
```typescript
(): AppActivationContext
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).target {#AppActivationContext:target}
{:.spec}

```typescript
string
```
{:.declarationspec}
The current full target path, in URL format without leading or trailing slashes (e.g. `foo/bar/123`), defaults to the empty string. Changes to this property automatically result in a change event being emitted on the object itself.



## ![](/assets/icons/spec-method.svg).navigate() {#AppActivationContext:navigate}
{:.spec}

```typescript
(_path: string): void
```
{:.declarationspec}
Navigate to given (relative) path, in URL format or `:back` to go back in history; to be overridden, the base implementation does nothing.



## ![](/assets/icons/spec-method.svg).match() {#AppActivationContext:match}
{:.spec}

```typescript
(path: string, activity?: AppActivity): MatchedPath
```
{:.declarationspec}
Check if given activity path matches the current target path.

- `path` — The activity path to match, without leading slashes (e.g. `foo/bar`). Paths with a trailing slash (e.g. `foo/bar/`) match the exact path as well as sub paths. Paths may contain partial captures as either `:foo` or `*foo`, matching a single segment without slashes and the full remainder of the target path, respectively - but *not* an empty segment. The prefix `./` is replaced with the path (string) of the closest parent activity that has a [`AppActivity.path`](./AppActivity#AppActivity:path) string property.

- `activity` — The activity that is used to search for parent activities if necessary.

**Returns:** An object with properties for all partial captures *if* given path matches the current target, or undefined otherwise.



## ![](/assets/icons/spec-property.svg).managedId {#AppActivationContext:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#AppActivationContext:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#AppActivationContext:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#AppActivationContext:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#AppActivationContext:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#AppActivationContext:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#AppActivationContext:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#AppActivationContext:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#AppActivationContext:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#AppActivationContext:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#AppActivationContext:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#AppActivationContext:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#AppActivationContext:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#AppActivationContext:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#AppActivationContext:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)AppActivationContext.MatchedPath {#AppActivationContext:MatchedPath}
{:.spec}

Captured path segments, matched by [`AppActivationContext.match`](./AppActivationContext#AppActivationContext:match).



## ![](/assets/icons/spec-property.svg).path {#AppActivationContext:MatchedPath:path}
{:.spec}

```typescript
string
```
{:.declarationspec}
The full path that was matched.



## ![](/assets/icons/spec-property.svg)[...] {#AppActivationContext:MatchedPath:::::}
{:.spec}

```typescript
[captureId: string]: string;
```
{:.declarationspec}
Any captured path segments from the matching activity path.

