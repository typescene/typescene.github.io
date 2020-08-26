---
title: UIFocusRequestEvent
nav: |

  #### Declarations
  * [**class UIFocusRequestEvent**](#UIFocusRequestEvent)
  * [.source](#UIFocusRequestEvent:source)
  * [.direction](#UIFocusRequestEvent:direction)

  #### Inherited
  * [.name](#UIFocusRequestEvent:name)
  * [.freeze()](#UIFocusRequestEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIFocusRequestEvent {#UIFocusRequestEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedEvent`](./ManagedEvent)</code></pre>
{:.declarationspec}

Event that is emitted on a particular UI component when it requests focus for itself or a sibling component; handled by the component renderer if possible. Should not be propagated.

> __Note:__ This event is emitted by the [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus) method, and is usually not emitted directly by the application.


### Constructor
```typescript
<TSource extends UIComponent>(source: TSource, direction?: UIFocusRequestType): UIFocusRequestEvent<TSource>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).source {#UIFocusRequestEvent:source}
{:.spec}

```typescript
TSource
```
{:.declarationspec}
Event source UI component.



## ![](/assets/icons/spec-property.svg).direction {#UIFocusRequestEvent:direction}
{:.spec}

```typescript
UIFocusRequestType
```
{:.declarationspec}
Focus direction.



## ![](/assets/icons/spec-property.svg).name {#UIFocusRequestEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#UIFocusRequestEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

