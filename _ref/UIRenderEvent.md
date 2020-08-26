---
title: UIRenderEvent
nav: |

  #### Declarations
  * [**class UIRenderEvent**](#UIRenderEvent)
  * [.source](#UIRenderEvent:source)
  * [.renderCallback](#UIRenderEvent:renderCallback)

  #### Inherited
  * [.name](#UIRenderEvent:name)
  * [.freeze()](#UIRenderEvent:freeze)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class UIRenderEvent {#UIRenderEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedEvent`](./ManagedEvent)</code></pre>
{:.declarationspec}

Event that is emitted on a particular UI component when it is rendered, to be handled by a platform specific renderer (observer). Should not be propagated.

### Constructor
```typescript
<TSource extends UIComponent>(source: TSource, renderCallback: RenderCallback<Output<UIRenderable, any>>): UIRenderEvent<TSource>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).source {#UIRenderEvent:source}
{:.spec}

```typescript
TSource
```
{:.declarationspec}
Event source UI component.



## ![](/assets/icons/spec-property.svg).renderCallback {#UIRenderEvent:renderCallback}
{:.spec}

```typescript
RenderCallback<Output<UIRenderable, any>>
```
{:.declarationspec}
Initial render callback, to be called only once. The callback always returns a new callback that can be used for further updates.



## ![](/assets/icons/spec-property.svg).name {#UIRenderEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#UIRenderEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

