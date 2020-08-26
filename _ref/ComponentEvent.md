---
title: ComponentEvent
nav: |

  #### Declarations
  * [**class ComponentEvent**](#ComponentEvent)
  * [.source](#ComponentEvent:source)
  * [.inner](#ComponentEvent:inner)

  #### Inherited
  * [.name](#ComponentEvent:name)
  * [.freeze()](#ComponentEvent:freeze)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class ComponentEvent {#ComponentEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedEvent`](./ManagedEvent)</code></pre>
{:.declarationspec}

Event that is emitted on a particular [`Component`](./Component) instance, with reference to the source component as [`source`](#ComponentEvent:source).

This event is emitted by the [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent) method, which is used when a component preset is used to propagate events (e.g. `{ onClick: "+Select" }`, which tells Typescene to handle Click events by emitting a Select event; the emitted event will be of type `ComponentEvent`).

#### See Also
[`UIComponentEvent`](./UIComponentEvent)

### Constructor
```typescript
<TComponent extends Component = Component>(name: string, source: TComponent, inner?: ManagedEvent): ComponentEvent<TComponent>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).source {#ComponentEvent:source}
{:.spec}

```typescript
TComponent
```
{:.declarationspec}
Source component.



## ![](/assets/icons/spec-property.svg).inner {#ComponentEvent:inner}
{:.spec}

```typescript
ManagedEvent
```
{:.declarationspec}
Encapsulated event (i.e. propagated event if this event was emitted by [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent)).



## ![](/assets/icons/spec-property.svg).name {#ComponentEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#ComponentEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

