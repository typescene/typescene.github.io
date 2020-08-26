---
title: UIBeforeRenderEvent
nav: |

  #### Declarations
  * [**class UIBeforeRenderEvent**](#UIBeforeRenderEvent)
  * [.source](#UIBeforeRenderEvent:source)

  #### Inherited
  * [.name](#UIBeforeRenderEvent:name)
  * [.freeze()](#UIBeforeRenderEvent:freeze)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class UIBeforeRenderEvent {#UIBeforeRenderEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedEvent`](./ManagedEvent)</code></pre>
{:.declarationspec}

Event that is emitted on a particular UI component before it is fist rendered, __only once__. Should not be propagated.

> __Note:__ The `UIBeforeRenderEvent` is emitted only once, __before__ a component is rendered the first time, and can be observed using an `onBeforeRender` preset handler property. By contrast, a plain [`UIComponentEvent`](./UIComponentEvent) is emitted __each time after__ a UI component is rendered, i.e. whenever a change occurs to its display properties (or its child components'), which can be observed using an `onRendered` preset handler property.

### Constructor
```typescript
<TSource extends UIComponent>(source: TSource): UIBeforeRenderEvent<TSource>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).source {#UIBeforeRenderEvent:source}
{:.spec}

```typescript
TSource
```
{:.declarationspec}
Event source UI component.



## ![](/assets/icons/spec-property.svg).name {#UIBeforeRenderEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#UIBeforeRenderEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

