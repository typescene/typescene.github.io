---
template: doc_guide
title: Understanding data models
description: |
  Learn how to model data using records and lists.
---

<section>

### Data models

It's important to maintain an accurate data model for any reasonably complex application. JavaScript objects and arrays provide plenty of flexibility to do so. However, by themselves, plain objects and arrays fall short in ways that make them less than ideal for representing data in a UI.

Therefore, Typescene provides its own classes for modeling 'managed' data. These allow for observing changes and events, and ensure consistency within lists and maps.

</section>

```typescript
// This is perfectly fine in JS:
let myArray = [{ a: 1 }, {}, , 3];
myArray[1000000] = "One million";
myArray.forEach((v) => console.log(v));
// ... an array with 4 values, 2 'gaps'

// Example Typescene data structure:
class Person extends ManagedRecord {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
}
let myList = new ManagedList().restrict(Person);
myList.add(new Person("Alice"));
myList.add(new Person("Bob"));
myList.add(3); // ...ERROR
```

---

<section>

### Displaying data

Because managed data models allow for observing changes, they make view bindings even more useful: view components will automatically update bound content -- either when a managed list or map changes, or when a 'Change' event is emitted.

</section>

```typescript
// TODO: record list used from activity, shown in view
```

<footer>

### Related

For much more information about managed data models, refer to these in-depth articles:

[**Component**<br>Components are the main building blocks of a Typescene application](/docs/concepts/components){:.block_link.doc}

[**Lists and maps**<br>Managed lists and maps represent ordered and associative sets of objects](/docs/concepts/lists-maps){:.block_link.doc}

### Next

{{guides:content/en/docs/guides/basics/add-}}

</footer>
