---
title: ManagedChangeEvent
nav: |

  #### Declarations
  * [**class ManagedChangeEvent**](#ManagedChangeEvent)
  * [.CHANGE](#ManagedChangeEvent:CHANGE)

  #### Inherited
  * [.name](#ManagedChangeEvent:name)
  * [.freeze()](#ManagedChangeEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ManagedChangeEvent {#ManagedChangeEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedEvent`](./ManagedEvent)</code></pre>
{:.declarationspec}

Event that is emitted when a change occurs to a managed object, list/map, or reference.

#### See Also
[`CHANGE`](./CHANGE), [`ManagedListChangeEvent`](./ManagedListChangeEvent)


### Constructor
```typescript
(name?: string): ManagedChangeEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).CHANGE <span class="spec_tag">static</span> {#ManagedChangeEvent:CHANGE}
{:.spec}

```typescript
Readonly<ManagedChangeEvent>
```
{:.declarationspec}
Frozen base change event that can be re-used instead of creating a new `ManagedChangeEvent` instance for every change.

**Note:** This event instance can be imported directly as [`CHANGE`](./CHANGE)<br>
(e.g. `import { CHANGE } from "typescene"`).



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

