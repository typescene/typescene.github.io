---
title: UIBeforeFirstRenderEvent
nav: |

  #### Declarations
  * [**class UIBeforeFirstRenderEvent**](#UIBeforeFirstRenderEvent)
  * [.source](#UIBeforeFirstRenderEvent:source)

  #### Inherited
  * [.name](#UIBeforeFirstRenderEvent:name)
  * [.freeze()](#UIBeforeFirstRenderEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIBeforeFirstRenderEvent {#UIBeforeFirstRenderEvent}
{:.spec}

Event that is emitted on a particular UI component before it is fist rendered, only once. Should not be propagated.

### Constructor
```typescript
<TSource extends UIComponent>(source: TSource): UIBeforeFirstRenderEvent<TSource>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).source {#UIBeforeFirstRenderEvent:source}
{:.spec}

```typescript
TSource
```
{:.declarationspec}
Event source UI component.



## ![](/assets/icons/spec-property.svg).name {#UIBeforeFirstRenderEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#UIBeforeFirstRenderEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

