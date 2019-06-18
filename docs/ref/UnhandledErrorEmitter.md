---
title: UnhandledErrorEmitter
nav: |

  #### Declarations
  * [**class UnhandledErrorEmitter**](#UnhandledErrorEmitter)
  * [.emitError()](#UnhandledErrorEmitter:emitError)
  * [.instance](#UnhandledErrorEmitter:instance)

  #### Inherited
  * [.managedId](#UnhandledErrorEmitter:managedId)
  * [.managedState](#UnhandledErrorEmitter:managedState)
  * [.getReferenceCount()](#UnhandledErrorEmitter:getReferenceCount)
  * [.getManagedReferrers()](#UnhandledErrorEmitter:getManagedReferrers)
  * [.getManagedParent()](#UnhandledErrorEmitter:getManagedParent)
  * [.emit()](#UnhandledErrorEmitter:emit)
  * [.propagateChildEvents()](#UnhandledErrorEmitter:propagateChildEvents)
  * [.activateManagedAsync()](#UnhandledErrorEmitter:activateManagedAsync)
  * [.deactivateManagedAsync()](#UnhandledErrorEmitter:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UnhandledErrorEmitter:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UnhandledErrorEmitter:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UnhandledErrorEmitter:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UnhandledErrorEmitter:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UnhandledErrorEmitter:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UnhandledErrorEmitter:onManagedStateDestroyingAsync)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UnhandledErrorEmitter {#UnhandledErrorEmitter}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedObject`](./ManagedObject)</code></pre>
{:.declarationspec}

Singleton managed object class that logs errors and emits an [`UnhandledErrorEvent`](./UnhandledErrorEvent) for otherwise unhandled exceptions.

The (single) instance of this class can be observed to capture errors as [`UnhandledErrorEvent`](./UnhandledErrorEvent) events, to handle errors in different ways.

### Constructor
```typescript
(): UnhandledErrorEmitter
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).emitError() <span class="spec_tag">static</span> {#UnhandledErrorEmitter:emitError}
{:.spec}

```typescript
(error: any): void
```
{:.declarationspec}
Log and emit given error.



## ![](/assets/icons/spec-property.svg).instance <span class="spec_tag">static</span> {#UnhandledErrorEmitter:instance}
{:.spec}

```typescript
UnhandledErrorEmitter
```
{:.declarationspec}
Singleton instance of this class (read-only).



## ![](/assets/icons/spec-property.svg).managedId {#UnhandledErrorEmitter:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UnhandledErrorEmitter:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UnhandledErrorEmitter:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UnhandledErrorEmitter:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

