---
title: UIScrollEvent
nav: |

  #### Declarations
  * [**class UIScrollEvent**](#UIScrollEvent)
  * [.source](#UIScrollEvent:source)
  * [.horizontalVelocity](#UIScrollEvent:horizontalVelocity)
  * [.verticalVelocity](#UIScrollEvent:verticalVelocity)
  * [.scrolledDown](#UIScrollEvent:scrolledDown)
  * [.scrolledUp](#UIScrollEvent:scrolledUp)
  * [.scrolledLeft](#UIScrollEvent:scrolledLeft)
  * [.scrolledRight](#UIScrollEvent:scrolledRight)
  * [.atTop](#UIScrollEvent:atTop)
  * [.atBottom](#UIScrollEvent:atBottom)
  * [.atLeft](#UIScrollEvent:atLeft)
  * [.atRight](#UIScrollEvent:atRight)

  #### Inherited
  * [.event](#UIScrollEvent:event)
  * [.inner](#UIScrollEvent:inner)
  * [.name](#UIScrollEvent:name)
  * [.freeze()](#UIScrollEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIScrollEvent {#UIScrollEvent}
{:.spec}

Event that is emitted when the user scrolls up or down in a `UIScrollContainer *.

### Constructor
```typescript
(name: string, source: UIComponent, inner?: ManagedEvent, event?: any): UIScrollEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).source {#UIScrollEvent:source}
{:.spec}

```typescript
UIScrollContainer
```
{:.declarationspec}
The source [`UIScrollContainer`](./UIScrollContainer) instance.



## ![](/assets/icons/spec-property.svg).horizontalVelocity {#UIScrollEvent:horizontalVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Horizontal scrolling velocity (screens widths per second).



## ![](/assets/icons/spec-property.svg).verticalVelocity {#UIScrollEvent:verticalVelocity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Horizontal scrolling velocity (screens heights per second).



## ![](/assets/icons/spec-property.svg).scrolledDown {#UIScrollEvent:scrolledDown}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if (last) scrolled down.



## ![](/assets/icons/spec-property.svg).scrolledUp {#UIScrollEvent:scrolledUp}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if (last) scrolled up.



## ![](/assets/icons/spec-property.svg).scrolledLeft {#UIScrollEvent:scrolledLeft}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if (last) scrolled left.



## ![](/assets/icons/spec-property.svg).scrolledRight {#UIScrollEvent:scrolledRight}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if (last) scrolled right.



## ![](/assets/icons/spec-property.svg).atTop {#UIScrollEvent:atTop}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if the [`UIScrollContainer`](./UIScrollContainer) is scrolled to the top.



## ![](/assets/icons/spec-property.svg).atBottom {#UIScrollEvent:atBottom}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if the [`UIScrollContainer`](./UIScrollContainer) is scrolled to the bottom.



## ![](/assets/icons/spec-property.svg).atLeft {#UIScrollEvent:atLeft}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if the [`UIScrollContainer`](./UIScrollContainer) is scrolled to the left.



## ![](/assets/icons/spec-property.svg).atRight {#UIScrollEvent:atRight}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if the [`UIScrollContainer`](./UIScrollContainer) is scrolled to the right.



## ![](/assets/icons/spec-property.svg).event {#UIScrollEvent:event}
{:.spec}

```typescript
any
```
{:.declarationspec}
Inherited from [`UIComponentEvent.event`](./UIComponentEvent#UIComponentEvent:event).



## ![](/assets/icons/spec-property.svg).inner {#UIScrollEvent:inner}
{:.spec}

```typescript
ManagedEvent
```
{:.declarationspec}
Inherited from [`ComponentEvent.inner`](./ComponentEvent#ComponentEvent:inner).



## ![](/assets/icons/spec-property.svg).name {#UIScrollEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#UIScrollEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

