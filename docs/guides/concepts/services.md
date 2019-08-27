---
permalink: /docs/guides/concepts/services
docsection: concepts
layout: doc_subpage
title: Services
description: A description of Typescene service components.
pageintro: Most applications need to refer to data that isn't specific to a particular activity or view. Typescene offers Service components that can be made available from any other component.
nav: |
    * [What are services?](#what-is)
    * [Creating](#creating)
    * [Using](#using)
---

{:.TODO}
> **Coming soon** <br>
  This section is still in development. In the meantime, refer to the examples and reference documentation from the [documentation home page](/docs).

### What are services? {#what-is}

In a real-life application, not all data can be managed within a single tree structure of activities and views. In those cases, _service_ components can be used, for ‘global’ state and logic.

Services exist outside of the application/activity components tree, and are instead registered by name (string). They are loosely coupled to other components using properties that are ‘decorated’ with the `@service` function, referencing the exact same name.

### Creating services {#creating}

To create a service component, extend the `ManagedService` class and call the `register` method on a new instance. Make sure that the service name is unique and not likely to cause confusion once your application grows larger.

```typescript
class LoginService extends ManagedService {
  name = "App.Login";

  // properties and methods here...
  isLoggedIn() { return false; }
}

new LoginService().register();
```

### Using services {#using}

Properties that are decorated with the `@service` _decorator_ are automatically assigned to the last service component that has been registered with a particular service name. As soon as another service is registered with that name, the service property will change to reference the new service instead.

```typescript
class MyComponent extends Component {
  @service("App.Login")
  login?: LoginService;  // set automatically

  doSomething() {
    if (this.login && this.login.isLoggedIn()) {
      // ...
    }
  }
}
```
