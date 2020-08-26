---
title: ManagedParentChangeEvent
nav: |

  #### Declarations
  * [**class ManagedParentChangeEvent**](#ManagedParentChangeEvent)
  * [.parent](#ManagedParentChangeEvent:parent)

  #### Inherited
  * [.name](#ManagedParentChangeEvent:name)
  * [.freeze()](#ManagedParentChangeEvent:freeze)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class ManagedParentChangeEvent {#ManagedParentChangeEvent}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedCoreEvent`](./ManagedCoreEvent)</code></pre>
{:.declarationspec}

Event that is emitted when a managed object is assigned to a managed child reference property (see [`@managedChild`](./managedChild) decorator); the child object emits this event, with [`parent`](#ManagedParentChangeEvent:parent) set to the _new_ parent object.

#### Example
The following example shows how this event can be observed on a component (or other managed object).

```typescript
class MyChildComponent extends Component { }

// observe the event on the above class:
MyChildComponent.observe(class {
  onManagedParentChange(e: ManagedParentChangeEvent) {
    if (e.parent instanceof MyParentComponent) {
      console.log("New parent: " + e.parent.foo);
    }
  }
})

class MyParentComponent extends Component {
  constructor (public readonly foo: string) {
    super();
  }

  // this is a managed child property so assigning
  // a component here triggers the event
  @managedChild
  foo = new MyChildComponent();
}

let c = new MyChildComponent();
let a = new MyParentComponent("a");
a.foo = c;  // => New parent: a
let b = new MyParentComponent("b");
b.foo = c;  // => New parent: b
```


### Constructor
```typescript
(parent: ManagedObject): ManagedParentChangeEvent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).parent {#ManagedParentChangeEvent:parent}
{:.spec}

```typescript
ManagedObject
```
{:.declarationspec}
The new parent object.



## ![](/assets/icons/spec-property.svg).name {#ManagedParentChangeEvent:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
Inherited from [`ManagedEvent.name`](./ManagedEvent#ManagedEvent:name).



## ![](/assets/icons/spec-method.svg).freeze() {#ManagedParentChangeEvent:freeze}
{:.spec}

```typescript
(): Readonly<this>
```
{:.declarationspec}
Inherited from [`ManagedEvent.freeze`](./ManagedEvent#ManagedEvent:freeze).

