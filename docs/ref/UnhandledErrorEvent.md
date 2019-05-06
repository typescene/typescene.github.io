---
title: UnhandledErrorEvent
nav: |

  #### Declarations
  * [**class UnhandledErrorEvent**](#UnhandledErrorEvent)
  * [.error](#UnhandledErrorEvent:error)

  #### Inherited
  * [.name](#UnhandledErrorEvent:name)
  * [.freeze()](#UnhandledErrorEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UnhandledErrorEvent {#UnhandledErrorEvent}
{:.spec}

Event that is emitted by [`UnhandledErrorEmitter`](./UnhandledErrorEmitter) for each unhandled error.

### Constructor
```typescript
(error: any): UnhandledErrorEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).error {#UnhandledErrorEvent:error}
{:.spec}

```typescript
any
```
{:.declarationspec}
The error that occurred.



## ![](/assets/icons/spec-property.svg).name {#UnhandledErrorEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#UnhandledErrorEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

