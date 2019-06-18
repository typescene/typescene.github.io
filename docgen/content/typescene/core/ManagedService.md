# ManagedService:pageintro
Services contain data and logic that are not related to a particular activity or view.

---
# ManagedService
### Registering services
A single instance of a service needs to be registered for other components to be able to reference the service using its name.

The preferred format for service names is `Namespace.CamelCaseName`.

#### Example
```typescript
class MyService extends ManagedService {
  name = "App.MyService";
  doSomething() {
    console.log("I am " + this.name);
  }
}

// register a singleton to be able to reference it
new MyService().register();

// reference a service from any managed object
class MyComponent extends Component {
  @service("App.MyService")
  svc?: MyService;

  foo() {
    if (this.svc) this.svc.doSomething()
  }
}

let c = new MyComponent();
c.foo();  // => I am App.MyService
```

### Observing services
**Note:** service reference properties (on other components) are only set when they are first accessed by your code. Before the property is read, the service is not referenced at all. This means that events are also _only_ observable after the service reference has been read __at least once__.

If your activity relies on a service to emit an event (e.g. a session/login service, to communicate that the user has connected to your application back end), it is necessary to read the service property once, for example in the activity constructor or `onManagedStateActiveAsync` method.
