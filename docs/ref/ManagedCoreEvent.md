---
title: ManagedCoreEvent
nav: |

  #### Declarations
  * [**class ManagedCoreEvent**](#ManagedCoreEvent)
  * [.ACTIVE](#ManagedCoreEvent:ACTIVE)
  * [.INACTIVE](#ManagedCoreEvent:INACTIVE)
  * [.DESTROYED](#ManagedCoreEvent:DESTROYED)
  * [.isCoreEvent()](#ManagedCoreEvent:isCoreEvent)

  #### Inherited
  * [.name](#ManagedCoreEvent:name)
  * [.freeze()](#ManagedCoreEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ManagedCoreEvent {#ManagedCoreEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedEvent`](./ManagedEvent)</code></pre>
{:.declarationspec}

Core event that is _not propagated_ by default (see [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents)).

**Note:** These events are emitted by Typescene internally and should not be emitted by your application.

### Constructor
```typescript
(name?: string): ManagedCoreEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).ACTIVE <span class="spec_tag">static</span> {#ManagedCoreEvent:ACTIVE}
{:.spec}

```typescript
Readonly<ManagedCoreEvent>
```
{:.declarationspec}
Event that is emitted for all managed objects after activation.

**Note:** This event is emitted by Typescene internally and should not be emitted by your application.



## ![](/assets/icons/spec-property.svg).INACTIVE <span class="spec_tag">static</span> {#ManagedCoreEvent:INACTIVE}
{:.spec}

```typescript
Readonly<ManagedCoreEvent>
```
{:.declarationspec}
Event that is emitted for all managed objects after deactivation.

**Note:** This event is emitted by Typescene internally and should not be emitted by your application.



## ![](/assets/icons/spec-property.svg).DESTROYED <span class="spec_tag">static</span> {#ManagedCoreEvent:DESTROYED}
{:.spec}

```typescript
Readonly<ManagedCoreEvent>
```
{:.declarationspec}
Event that is emitted for all managed objects after they are destroyed.

**Note:** Handlers on objects that referenced the destroyed object will be unable to access the destroyed object through its own managed property, since the reference is immediately set to undefined.

**Note:** This event is emitted by Typescene internally and should not be emitted by your application.



## ![](/assets/icons/spec-method.svg).isCoreEvent() <span class="spec_tag">static</span> {#ManagedCoreEvent:isCoreEvent}
{:.spec}

```typescript
(event: ManagedEvent): event is ManagedCoreEvent
```
{:.declarationspec}
Returns true if given event is a core event.



## ![](/assets/icons/spec-property.svg).name {#ManagedCoreEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#ManagedCoreEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

