---
title: AnonymousObserver
nav: |

  #### Declarations
  * [**class AnonymousObserver**](#AnonymousObserver)
  * [.target](#AnonymousObserver:target)

  #### Namespaced
  * [**AnonymousObserver.Custom**](#AnonymousObserver:Custom)
  * [.addEventHandler()](#AnonymousObserver:Custom:addEventHandler)
  * [.addPropertyEventHandler()](#AnonymousObserver:Custom:addPropertyEventHandler)
  * [.addPropertyChangeHandler()](#AnonymousObserver:Custom:addPropertyChangeHandler)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class AnonymousObserver {#AnonymousObserver}
{:.spec}

Anonymous observer class, used by the [`observe`](./observe) function if no predefined observer class is specified. This class provides static methods to add event handlers and property change handlers.

### Constructor
```typescript
<T extends ManagedObject>(target: T): AnonymousObserver<T>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).target {#AnonymousObserver:target}
{:.spec}

```typescript
T
```
{:.declarationspec}
The observed target instance, set by the constructor. This reference is also passed to callbacks registered using one of the static methods.





---

## ![](/assets/icons/spec-interface.svg)AnonymousObserver.Custom {#AnonymousObserver:Custom}
{:.spec}

Static method definitions for `AnonymousObserver`.



## ![](/assets/icons/spec-method.svg).addEventHandler() {#AnonymousObserver:Custom:addEventHandler}
{:.spec}

```typescript
(handler: (target: T, e: ManagedEvent) => void, async?: boolean, rateLimit?: number): this
```
{:.declarationspec}
Add an event handler to this anonymous observer; the handler gets invoked for each event that is emitted on the target object, either immediately or asynchronously, optionally rate limited at given interval (in ms; only if asynchronous).



## ![](/assets/icons/spec-method.svg).addPropertyEventHandler() {#AnonymousObserver:Custom:addPropertyEventHandler}
{:.spec}

```typescript
<K extends keyof T>(propertyName: K, handler: (target: T, value: T[K], e: ManagedEvent) => void, async?: boolean, rateLimit?: number): this
```
{:.declarationspec}
Add an event handler for given property to this anonymous observer; the handler gets invoked for each event that is emitted on the object referenced by given property, either immediately or asynchronously, optionally rate limited at given interval (in ms; only if asynchronous).



## ![](/assets/icons/spec-method.svg).addPropertyChangeHandler() {#AnonymousObserver:Custom:addPropertyChangeHandler}
{:.spec}

```typescript
<K extends keyof T>(propertyName: K, handler: (target: T, value: T[K], e?: ManagedEvent) => void, async?: boolean, rateLimit?: number): this
```
{:.declarationspec}
Add a change handler for given property to this anonymous observer; the handler gets invoked each time the property value is changed OR a change event is emitted on a referenced object, either immediately or asynchronously, optionally rate limited at given interval (in ms; only if asynchronous).

