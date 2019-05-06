---
title: UIListCellAdapterEvent
nav: |

  #### Declarations
  * [**class UIListCellAdapterEvent**](#UIListCellAdapterEvent)
  * [.cell](#UIListCellAdapterEvent:cell)
  * [.object](#UIListCellAdapterEvent:object)

  #### Inherited
  * [.source](#UIListCellAdapterEvent:source)
  * [.event](#UIListCellAdapterEvent:event)
  * [.inner](#UIListCellAdapterEvent:inner)
  * [.name](#UIListCellAdapterEvent:name)
  * [.freeze()](#UIListCellAdapterEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIListCellAdapterEvent {#UIListCellAdapterEvent}
{:.spec}

Event that is emitted on a particular [`UIListCellAdapter`](./UIListCellAdapter).

### Constructor
```typescript
<TObject extends ManagedObject = ManagedObject>(name: string, source: UIComponent, cell: UICell, object?: TObject, event?: any): UIListCellAdapterEvent<TObject>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).cell {#UIListCellAdapterEvent:cell}
{:.spec}

```typescript
UICell
```
{:.declarationspec}
The cell that contains the component that originally emitted this event.



## ![](/assets/icons/spec-property.svg).object {#UIListCellAdapterEvent:object}
{:.spec}

```typescript
TObject
```
{:.declarationspec}
The object encapsulated by the [`UIListCellAdapter`](./UIListCellAdapter), if any.



## ![](/assets/icons/spec-property.svg).source {#UIListCellAdapterEvent:source}
{:.spec}

```typescript
TSource
```
{:.declarationspec}
Inherited from [`UIComponentEvent.source`](./UIComponentEvent#UIComponentEvent:source).



## ![](/assets/icons/spec-property.svg).event {#UIListCellAdapterEvent:event}
{:.spec}

```typescript
any
```
{:.declarationspec}
Inherited from [`UIComponentEvent.event`](./UIComponentEvent#UIComponentEvent:event).



## ![](/assets/icons/spec-property.svg).inner {#UIListCellAdapterEvent:inner}
{:.spec}

```typescript
ManagedEvent
```
{:.declarationspec}
Inherited from [`ComponentEvent.inner`](./ComponentEvent#ComponentEvent:inner).



## ![](/assets/icons/spec-property.svg).name {#UIListCellAdapterEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#UIListCellAdapterEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

