---
title: FormContextChangeEvent
nav: |

  #### Declarations
  * [**class FormContextChangeEvent**](#FormContextChangeEvent)
  * [.formContext](#FormContextChangeEvent:formContext)

  #### Inherited
  * [.source](#FormContextChangeEvent:source)
  * [.inner](#FormContextChangeEvent:inner)
  * [.name](#FormContextChangeEvent:name)
  * [.freeze()](#FormContextChangeEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class FormContextChangeEvent {#FormContextChangeEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ComponentEvent`](./ComponentEvent)</code></pre>
{:.declarationspec}

Event that is emitted when the form context of a [`UIForm`](./UIForm) or [`UIFormContextController`](./UIFormContextController) has been changed.

**Note:** Despite its name, this event does **not** inherit from [`ManagedChangeEvent`](./ManagedChangeEvent).

### Constructor
```typescript
(name: string, source: Component, inner?: ManagedEvent): FormContextChangeEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).formContext {#FormContextChangeEvent:formContext}
{:.spec}

```typescript
ManagedObject
```
{:.declarationspec}
The current form context object.



## ![](/assets/icons/spec-property.svg).source {#FormContextChangeEvent:source}
{:.spec}

```typescript
Component
```
{:.declarationspec}
Inherited from [`ComponentEvent.source`](./ComponentEvent#ComponentEvent:source).



## ![](/assets/icons/spec-property.svg).inner {#FormContextChangeEvent:inner}
{:.spec}

```typescript
ManagedEvent
```
{:.declarationspec}
Inherited from [`ComponentEvent.inner`](./ComponentEvent#ComponentEvent:inner).



## ![](/assets/icons/spec-property.svg).name {#FormContextChangeEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#FormContextChangeEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

