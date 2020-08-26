---
title: UIMenuItemSelectedEvent
nav: |

  #### Declarations
  * [**class UIMenuItemSelectedEvent**](#UIMenuItemSelectedEvent)
  * [.key](#UIMenuItemSelectedEvent:key)

  #### Inherited
  * [.event](#UIMenuItemSelectedEvent:event)
  * [.source](#UIMenuItemSelectedEvent:source)
  * [.inner](#UIMenuItemSelectedEvent:inner)
  * [.name](#UIMenuItemSelectedEvent:name)
  * [.freeze()](#UIMenuItemSelectedEvent:freeze)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class UIMenuItemSelectedEvent {#UIMenuItemSelectedEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIComponentEvent`](./UIComponentEvent)</code></pre>
{:.declarationspec}

Event that is emitted on a menu or menu item when it is selected.

### Constructor
```typescript
(name: string, source: UIComponent, key: string): UIMenuItemSelectedEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).key {#UIMenuItemSelectedEvent:key}
{:.spec}

```typescript
string
```
{:.declarationspec}
The key of the menu item that was selected.



## ![](/assets/icons/spec-property.svg).event {#UIMenuItemSelectedEvent:event}
{:.spec}

```typescript
any
```
{:.declarationspec}
Inherited from [`UIComponentEvent.event`](./UIComponentEvent#UIComponentEvent:event).



## ![](/assets/icons/spec-property.svg).source {#UIMenuItemSelectedEvent:source}
{:.spec}

```typescript
TComponent
```
{:.declarationspec}
Inherited from [`ComponentEvent.source`](./ComponentEvent#ComponentEvent:source).



## ![](/assets/icons/spec-property.svg).inner {#UIMenuItemSelectedEvent:inner}
{:.spec}

```typescript
ManagedEvent
```
{:.declarationspec}
Inherited from [`ComponentEvent.inner`](./ComponentEvent#ComponentEvent:inner).



## ![](/assets/icons/spec-property.svg).name {#UIMenuItemSelectedEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#UIMenuItemSelectedEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

