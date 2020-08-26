---
title: ManagedService
nav: |

  #### Declarations
  * [**class ManagedService**](#ManagedService)
  * [.find()](#ManagedService:find)
  * [.link()](#ManagedService:link)
  * [.name](#ManagedService:name)
  * [.register()](#ManagedService:register)

  #### Inherited
  * [.managedId](#ManagedService:managedId)
  * [.managedState](#ManagedService:managedState)
  * [.getReferenceCount()](#ManagedService:getReferenceCount)
  * [.getManagedReferrers()](#ManagedService:getManagedReferrers)
  * [.getManagedParent()](#ManagedService:getManagedParent)
  * [.emit()](#ManagedService:emit)
  * [.emitChange()](#ManagedService:emitChange)
  * [.propagateChildEvents()](#ManagedService:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedService:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedService:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedService:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedService:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedService:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedService:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedService:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedService:onManagedStateDestroyingAsync)
layout: doc_ref
pageintro: |
  Services contain data and logic that are not related to a particular activity or view.
---

## ![](/assets/icons/spec-class.svg)class ManagedService <span class="spec_tag">abstract</span> {#ManagedService}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedObject`](./ManagedObject)</code></pre>
{:.declarationspec}

Managed service base class. Represents a service that can be referenced by other classes using the [`@service`](./service) decorator (or [`ManagedService.link`](./ManagedService#ManagedService:link) method) after registering the object with a known name.

[**See also:** Concepts &gt; Services](/docs/concepts/services){:.block_link.doc}

### Constructor
```typescript
(name?: string): ManagedService
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).find() <span class="spec_tag">static</span> {#ManagedService:find}
{:.spec}

```typescript
(name: string): ManagedService
```
{:.declarationspec}
Retrieve the currently active service with given name (case insensitive).

**Note:** Services may be registered and destroyed. To obtain a reference that is always up to date, use the [`@service`](./service) decorator on a class property or the static [`link`](#ManagedService:link) method.



## ![](/assets/icons/spec-method.svg).link() <span class="spec_tag">static</span> {#ManagedService:link}
{:.spec}

```typescript
(serviceName: string, TargetClass: Function, propertyName: string): void
```
{:.declarationspec}
Adds a property to the prototype of given class, so that the property always references the last registered service with given name (case insensitive).

The value of the target property becomes undefined when the service is destroyed, and updates immediately when a new service is registered with the same name.

**Note:** Changes and events can be observed by an observer, but only after the property has been *read at least once*.



## ![](/assets/icons/spec-property.svg).name <span class="spec_tag">abstract</span> {#ManagedService:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
The name of this service, set only once by the service constructor. The preferred format for service names is `Namespace.CamelCaseName`.



## ![](/assets/icons/spec-method.svg).register() {#ManagedService:register}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Register this service, making it available through properties decorated with the [`@service`](./service) decorator until the service object is destroyed (either directly using `.destroyManagedAsync()`, or when another service is registered with the same name).



## ![](/assets/icons/spec-property.svg).managedId {#ManagedService:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#ManagedService:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#ManagedService:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#ManagedService:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#ManagedService:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#ManagedService:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#ManagedService:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#ManagedService:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#ManagedService:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#ManagedService:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#ManagedService:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#ManagedService:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#ManagedService:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#ManagedService:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#ManagedService:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#ManagedService:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).
