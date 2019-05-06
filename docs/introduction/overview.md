---
permalink: /docs/introduction/overview
layout: doc_subpage
title: Architecture Overview
nav: |
    * [Components](#components)
    * [Managed Objects](#managedobjects)
---

### Components {#components}

Typescene provides only a handful of main building blocks, or Components. These work together to make your application behave and look the way you want:

* __Application__, the component that kicks all the others off.
* __Activity__, which represents the current application state and contains most of the logic.
* __View and UI components__, which capture the current UI state at varying levels of abstraction, and can be rendered independently.
* __Service__, a background component that can be referenced by name from any other component, to capture global state and provide application-wide logic.

Most importantly, Components are specially equipped with a way to reference each other all the way down a tree structure, as well as up towards the (application) root component. They can also observe events that occur on all referenced components.

```typescript
// if 'foo' is a component property
component.foo = otherComponent;
// ... 'component' is now the parent
otherComponent.getParentComponent();
```

This makes it possible to decouple behaviors in higher-level components (e.g. activities) from implementation details in more specific ones (e.g. views), while still allowing specific components to reference data and logic defined by its parent components. This form of dependency inversion is the most important aspect of Typescene’s architecture.

#### Example

Consider a simple to-do list application. We might break this application up into the following components:

1. `TodoListApplication`
2. `TodoListService`, which reads the user’s list from storage and provides access to this data (the ‘model’)
3. `MainActivity`, contains logic for validating input and interacting with the model, which is provided by TodoListService when ready
4. `MainView`, a representation of the application’s full page UI
5. `TodoListView`, a representation of the list itself

It’s clear that all of these components depend on the component(s) above them, even if the higher-level components reference the ones below them.

* Events flow from bottom to top (e.g. button clicks, which originate in the view), invoking event handlers at a higher level.
* Data flows from top to bottom, supplying lower level components with values from services and activities.

### Managed Objects {#managedobjects}

So, can we just create Components as JavaScript objects, and store to-do list items as strings in a plain old Array to update the TodoListView? Well, no.

There are some issues with JavaScript’s native data structures that quickly stand out when we try to use them for UI programming. Take arrays, for example:

```javascript
// this is fine...?
let a = ["0"];
a[2] = "2";
a[3] = "2";
a[100000] = a;
```

It’s clear that if we were to render this array as some kind of list, we’d run into issues. Most of the array elements here are missing. Not `undefined`, but not defined either: arrays can have ’gaps‘. They’re not guaranteed to hold certain types of values either, and they might contain duplicates.

Instead, what we need is a way to __uniquely identify objects__, and force them to relate to each other in __consistent ways__.

Typescene defines a set of classes for this purpose:

_(TODO: to be continued)_
