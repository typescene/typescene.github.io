---
title: UIComponentEvent
nav: |

  #### Declarations
  * [**class UIComponentEvent**](#UIComponentEvent)
  * [.source](#UIComponentEvent:source)
  * [.event](#UIComponentEvent:event)

  #### Inherited
  * [.inner](#UIComponentEvent:inner)
  * [.name](#UIComponentEvent:name)
  * [.freeze()](#UIComponentEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIComponentEvent {#UIComponentEvent}
{:.spec}

Event that is emitted on a particular UI component, propagated by all parent UI components.

### Constructor
```typescript
<TSource extends UIComponent = UIComponent>(name: string, source: TSource, inner?: ManagedEvent, event?: any): UIComponentEvent<TSource>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).source {#UIComponentEvent:source}
{:.spec}

```typescript
TSource
```
{:.declarationspec}
Event source UI component.



## ![](/assets/icons/spec-property.svg).event {#UIComponentEvent:event}
{:.spec}

```typescript
any
```
{:.declarationspec}
Platform event, if any.



## ![](/assets/icons/spec-property.svg).inner {#UIComponentEvent:inner}
{:.spec}

```typescript
ManagedEvent
```
{:.declarationspec}
Inherited from [`ComponentEvent.inner`](./ComponentEvent#ComponentEvent:inner).



## ![](/assets/icons/spec-property.svg).name {#UIComponentEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#UIComponentEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

