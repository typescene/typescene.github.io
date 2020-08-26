---
title: ManagedChangeEvent
nav: |

  #### Declarations
  * [**class ManagedChangeEvent**](#ManagedChangeEvent)

  #### Inherited
  * [.name](#ManagedChangeEvent:name)
  * [.freeze()](#ManagedChangeEvent:freeze)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class ManagedChangeEvent {#ManagedChangeEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedEvent`](./ManagedEvent)</code></pre>
{:.declarationspec}

Event that is emitted when a change occurs to a managed object, list/map, or reference; this triggers the same observer method(s) as changing the actual value of a (managed) reference property.

#### See Also
[`CHANGE`](./CHANGE), [`ManagedListChangeEvent`](./ManagedListChangeEvent)


### Constructor
```typescript
(name?: string): ManagedChangeEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).name {#ManagedChangeEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#ManagedChangeEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

