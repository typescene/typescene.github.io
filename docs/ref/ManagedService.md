---
title: ManagedService
nav: |

  #### Declarations
  * [**class ManagedService**](#ManagedService)
  * [.find()](#ManagedService:find)
  * [.name](#ManagedService:name)
  * [.register()](#ManagedService:register)

  #### Inherited
  * [.managedId](#ManagedService:managedId)
  * [.managedState](#ManagedService:managedState)
  * [.getReferenceCount()](#ManagedService:getReferenceCount)
  * [.getManagedReferrers()](#ManagedService:getManagedReferrers)
  * [.getManagedParent()](#ManagedService:getManagedParent)
  * [.emit()](#ManagedService:emit)
  * [.propagateChildEvents()](#ManagedService:propagateChildEvents)
  * [.activateManagedAsync()](#ManagedService:activateManagedAsync)
  * [.deactivateManagedAsync()](#ManagedService:deactivateManagedAsync)
  * [.destroyManagedAsync()](#ManagedService:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#ManagedService:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#ManagedService:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#ManagedService:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#ManagedService:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#ManagedService:onManagedStateDestroyingAsync)
layout: ref_doc
pageintro: |
  Services contain data and logic that are not related to a particular activity or view.
---

## ![](/assets/icons/spec-class.svg)class ManagedService <span class="spec_tag">abstract</span> {#ManagedService}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedObject`](./ManagedObject)</code></pre>
{:.declarationspec}

Managed service base class. Represents a service that can be referenced by other classes using the [`@service`](./service) decorator after registering the object with a well known name.

### Registering services
A single instance of a service needs to be registered for other components to be able to reference the service using its name.

The preferred format for service names is `Namespace.CamelCaseName`.

#### Example
```typescript
class MyService extends ManagedService {
  name = "App.MyService";
  doSomething() {
    console.log("I am " + this.name);
  }
}

// register a singleton to be able to reference it
new MyService().register();

// reference a service from any managed object
class MyComponent extends Component {
  @service("App.MyService")
  svc?: MyService;

  foo() {
    if (this.svc) this.svc.doSomething()
  }
}

let c = new MyComponent();
c.foo();  // => I am App.MyService
```

### Observing services
**Note:** service reference properties (on other components) are only set when they are first accessed by your code. Before the property is read, the service is not referenced at all. This means that events are also _only_ observable after the service reference has been read __at least once__.

If your activity relies on a service to emit an event (e.g. a session/login service, to communicate that the user has connected to your application back end), it is necessary to read the service property once, for example in the activity constructor or `onManagedStateActiveAsync` method.


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

**Note:** Services may be registered and destroyed. To obtain a reference that is always up to date, use the [`@service`](./service) decorator on a class property.



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
(): void
```
{:.declarationspec}
Register this service, making it available through properties decorated with the [`@service`](./service) decorator until the service object is destroyed (either directly, or when another service is registered with the same name).



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
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
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

