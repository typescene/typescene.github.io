---
title: onPropertyEvent
nav: |

  #### Declarations
  * [@onPropertyEvent](#onPropertyEvent)
layout: ref_doc
---

## ![](/assets/icons/spec-decorator.svg)@onPropertyEvent {#onPropertyEvent}
{:.spec}

```typescript
(...observedProperties: string[]): MethodDecorator
```
{:.declarationspec}
Observer method decorator: amend decorated method to turn it into a handler for events on managed objects that are referred to by given managed reference property/ies (decorated with [`@managed`](./managed), [`@managedChild`](./managedChild), [`@managedDependency`](./managedDependency), or [`@compose`](./compose)).

**Note:** This decorator is intended for use on methods that are part of an observer class, see [`ManagedObject.observe`](./ManagedObject#ManagedObject:observe).

#### Example
```typescript
class Person extends ManagedObject {
    constructor (public name: string) { }
    @managed spouse?: Person;
    @managed friends = new ManagedList<Person>()
        .propagateEvents();
}

class PersonObserver {
    constructor (public readonly person: Person) { }

    // handle ALL events emitted on .spouse and
    // .friends (which propagates list item events)
    @onPropertyEvent("spouse", "friends")
    handleEvent(_value: any, e: ManagedEvent) {
        if (e instanceof BirthdayEvent) {
            console.log(this.person.name +
                " wishes " + e.person.name +
                " a happy birthday");
        }
    }
}
Person.observe(PersonObserver);

class BirthdayEvent extends ManagedEvent {
    constructor(public readonly person: Person) {
        super("Birthday");
    }
}

let p1 = new Person("John");
let p2 = new Person("Judie");
let p3 = new Person("Trudy");
p1.spouse = p2;
p3.friends.add(p2);
p2.emit(new BirthdayEvent(p2));
```


