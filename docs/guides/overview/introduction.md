---
redirect_from: /docs/introduction/overview
permalink: /docs/introduction
docsection: overview
layout: doc_subpage
title: Introduction
description: An introduction to Typescene's architecture
pageintro: Typescene is a full-scope framework that helps to manage both the application state and the user interface. This page introduces the most important concepts.
nav: |
  * [Components](#components)
  * [Application state](#state)
  * [Activities](#activities)
  * [Services](#services)
  * [Views](#views)
  * [Bindings and event handlers](#bindings-events)
  * [Custom view components](#custom-views)
---

### Components {#components}

At the highest level, a Typescene application is made up of only a few building blocks:

* __Activities__ represent the current application state, and define event handlers.
* __Views__ describe the user interface, as a tree structure of UI elements.
* __Services__ represent the global state. These can be referenced from all other components.

Since Typescene is an object oriented framework, all of these building blocks are defined as classes that can be *extended* by your application:

```typescript
import { PageViewActivity } from "typescene";

class MyActivity extends PageViewActivity {
  // ...your code here
}
```

> **Note:** If you're confused by the `import` and `class` statements in the code above, make sure you are familiar with newer JavaScript standards—beginning with ES6, also referred to as ECMAScript 2015. The TypeScript language extends these modern JavaScript features with *types*, although using TypeScript with Typescene is optional. All code for Typescene apps can be compiled back to the ES5 standard, to support older browsers such as Internet Explorer 9.
>
> Set your preference for code samples below:
>
> {% include TSJS_span.md %}

However, activities, views, and services are not just plain objects. They inherit their core functionality from Typescene's `Component` class. Here's what you need to know about components:

**1. Events:** Components can emit events. For example, view components emit events with names such as `Click`, `FocusIn` and `FocusOut` to communicate user actions.

**2. Observers:** Component properties and events are observable. This is how the view is updated automatically without having to manually re-render.

**3. Life cycles:** Components have 'life cycle' states, ranging from _created_ (initial state), to _active_, _inactive_, and _destroyed_.

**4. References:** Components can be linked together using special 'managed' properties. This allows them to observe *each other's* events and life cycle state. Additionally, managed *parent-child* references allow child components to find and observe their parent components.

> For a more in-depth description of components, refer to the [Components](/docs/guides/concepts/components) page.

---

### Application state {#state}

At any time, the state of a running Typescene application is determined by the following:

* Which activities are in the **active** state (as opposed to just *created* or *inactive*).
* The properties of these activities, and possibly the data structures that are referenced through these properties.
* The global state, encapsulated by Service components.

The user interface (UI) displays a representation of the current application state, using View components. These automatically observe their parent activity's properties.

The following diagram shows how everything works together in a typical application.

![architecture diagram](/docs/guides/images/architecture.png)
{:.fullWidthImage}

The router and renderer are managed by the application instance itself, and work mostly in the background. You can safely ignore these components for now, as we focus on _activities_, _services_, and _views_.

### Activities {#activities}

Typically, activities are created by the application immediately after it starts. To create more activities, we can add activity *classes* to the application's definition, usually in `app.ts`:

```typescript
import { BrowserApplication } from "@typescene/webapp";
import MainActivity from "./activities/main/activity";
import OtherActivity from "./activities/other/activity";

const app = BrowserApplication.run(
  MainActivity,
  OtherActivity,
  // ... add other activities here
);
```

While these activities are *created* by the application, they're not *activated* right away. Activating activities is necessary to make them part of the 'current' state and display their associated view(s). This can be done manually, or using the built-in URL-based router.

The built-in router uses the activity's `path` property:

{% include TSJS.md %}
{:TS}
```typescript
import { PageViewActivity } from "typescene";

class MyActivity extends PageViewActivity {
  path = "/about";

  async onManagedStateActiveAsync() {
    // ... run when the activity is activated
    // (when the URL is /#/about or /about)
  }
}
```

{:JS}
```javascript
import { PageViewActivity } from "typescene";

class MyActivity extends PageViewActivity {
  constructor() {
    super();
    this.path = "/about";
  }

  async onManagedStateActiveAsync() {
    // ... run when the activity is activated
    // (when the URL is /#/about or /about)
  }
}
```

See [routing](/docs/guides/concepts/routing) to learn more about using the `path` property for automatic activation.

> **Tip:** For more complex applications you can also use activities in other configurations, and control their life cycles independently. This is useful for e.g. master-detail interfaces (parent-child activities), or activities that are loaded dynamically (async import or otherwise).
>
> To learn more about activities, refer to the [Activities](/docs/guides/concepts/activities) guide.

### Services {#services}

Not all of the application's state can be managed within activities alone—some ‘state’ is better managed at a global (session) level. Typescene provides the concept of *services* to account for state that's unrelated to the current activity, and may be accessed by any component at any time.

As an example, we may want to manage *authentication* state as a service in our application. To create a service, we’ll need to extend the `ManagedService` class first, and 'register' a single instance of our class:

{% include TSJS.md %}
{:TS}
```typescript
import { ManagedService } from "typescene";

export default class LoginService extends ManagedService {
  name = "App.Login";
  // ... properties and methods here,
  // e.g. a constructor to find and check saved login state,
  // and a method to determine if the user is logged in
}

// usually in app.ts:
new LoginService().register();
```

{:JS}
```javascript
import { ManagedService } from "typescene";

export default class LoginService extends ManagedService {
  constructor() {
    super();
    this.name = "App.Login";
  }
  // ... properties and methods here,
  // e.g. a constructor to find and check saved login state,
  // and a method to determine if the user is logged in
}

// usually in app.ts:
new LoginService().register();
```

Now, we can reference this service instance from components *anywhere* else in our application, using only its name (and type, if you are using TypeScript).

{:TS}
We can use a *decorator* to make a property refer to a service automatically:

{:JS}
We can use the `service` function to add the property to our class (or actually, its prototype):

{% include TSJS.md %}
{:TS}
```typescript
export class MyComponent extends Component {
  @service("App.Login")
  loginService!: LoginService;
  // ... use `this.loginService` from any method
}
```

{:JS}
```javascript
export class MyComponent extends Component {
  // ... use `this.loginService` from any method
}
service("App.Login", MyComponent, "loginService");
```

Services are especially useful for API connections, shared storage, or interacting with service workers. In general, any part of your application that is not related to the UI is a good candidate for wrapping into a service. On the other hand, you don't need to rewrite existing code if you already manage 'global' state another way, since services are a completely optional part of a Typescene application.

> To learn more about services, refer to the [Services](/docs/guides/concepts/services) guide.

---

### Views {#views}

To represent the user interface, abstract UI components are grouped into tree-like structures called *views*. Views can be rendered independently, but typically each view is associated with a single activity.

The easiest way to associate a view with an activity is by extending the `ViewActivity` class, and adding a reference to the view directly to the class definition:

```typescript
import { PageViewActivity } from "typescene";

// import the view from another file:
import view from "./view";

export default class MainActivity
  extends PageViewActivity.with(view) {
  // ...                   ^^^^^^^^^^
}
```

This adds the view as a *sub component* of the activity. The view **only** exists while the activity is in the 'active' state; views get destroyed immediately when the parent activity becomes inactive.

Moreover, views recognize the activity that created them as their 'composite' parent. This relationship extends to the view's entire component tree structure—even if a view creates a lot of nested components (a label inside of a form, inside of a container for example), all of these components can find their way back to the activity component.

#### JSX and preset components

The view itself can be described using plain JavaScript, TypeScript, *or* JSX (i.e. XML-in-JavaScript)—often in a separate file that's imported by the activity, as illustrated above.

Here's an example view written using JSX:

```tsx
import JSX from "typescene/JSX";

export default (
  <cell background="yellow">
    <row>
      <label>Hello, world!</label>
    </row>
  </cell>
)
```

And here's the same example written in plain JavaScript code:

```typescript
import { UICell, UIRow, UILabel } from "typescene";

export default UICell.with(
  { background: "yellow" },
  UIRow.with(
    UILabel.withText("Hello, world!")
  )
)
```

Notice that JSX looks like HTML, but it's not: the JSX code is simply another way to describe the same structure of `UICell`, `UIRow`, and `UILabel` components that's created by the second example. This is not a component *object*, however: both of these files export a **constructor** (technically, a class—since classes are represented by their constructor functions in JavaScript).

We call the result a 'preset' constructor, because it encapsulates a given set of properties as well as other component constructors that get added (preset) to each instance automatically.

```typescript
const MyButton = UIButton.with({ label: "Foo" });
const btn = new MyButton();
btn.label  // => "Foo"
```

Preset constructors are not unique to views; *any* component can be described using a preset constructor. The static `with` method is available on every class that extends `Component`, sometimes accompanied by shortcut methods such as `withText`, or `withHeight`.

The activity uses the view's *preset* constructor to create the view itself, so that it can immediately initialize itself using the encapsulated properties and nested component constructors as required.

> **Summary:** Views in Typescene are defined using **static** 'preset' structures that get instantiated only when needed. You can use JSX or plain JavaScript / TypeScript to write view code, but both result in a constructor, *not* the view instance itself.

### Bindings and event handlers {#bindings-events}

Since views are described as static structures, we can't just use variables and (activity) properties like we would in a function. Instead, we'll use *bindings:* these act as 'placeholders' that tell the component to **observe a property** on the composite parent once the view is actually created, and then update the value whenever the observed property value changes.

```tsx
export default (
  <row hidden={bind("hideRow")}>
    <label>{ bind("labelText") }</label>
  </row>
)
```

In the example above, we can hide the `<row>` component using its `hidden` property by setting the activity's `hideRow` property; and we can set the `<label>`'s text by changing the value of the `labelText` property on the activity.

Bindings provide a convenient way to keep the UI in sync with the application state, by linking property values between the activity and the view.

> Refer to [Bindings and formatting](/docs/guides/howto/bindings) for further details and advanced use cases.

Similarly, *event handlers* can be used to refer to an activity **method**:

```tsx
export default (
  <form onSubmit="handleSubmit()">
    <row>
      <textfield placeholder="Foo" onChange="textChanged()" />
    </row>
  </form>
)
```

In this example, we'll need to define `textChanged` and `handleSubmit` methods on the activity. These methods are invoked automatically whenever the corresponding events are emitted by the view.

Event handlers receive the emitted event as a single parameter. This can be used to find the component that emitted the event, as well as details of the event itself.

{% include TSJS.md %}
{:TS}
```typescript
class MyActivity extends PageViewComponent.with(view) {
  // ... other properties and methods

  textChanged(e: UIComponentEvent) {
    e.name  // => "Change"
    e.source  // => UITextField component
  }
}
```

{:JS}
```javascript
class MyActivity extends PageViewComponent.with(view) {
  // ... other properties and methods

  textChanged(e) {
    e.name  // => "Change"
    e.source  // => UITextField component
  }
}
```

By strictly separating the activity and the view using bindings and event handlers, we get much 'cleaner' view code that's free of any business logic. The following code works too, but it isn't recommended:

```tsx
export default (
  <button onClick={e=>{/* ...do something... */}}>OK</button>
)
```

> **Tip:** Since event handlers have access to view component *instances*, they provide an alternative to bindings in cases where updating the view is more work than changing a single property.
>
> The `onBeforeRender` event handler is often used to modify the view immediately before it is first rendered, or to capture a reference to the view component and store it as a property of the activity.

### Custom view components {#custom-views}

If parts of your UI can be reused in different places, it's a good idea to split these parts off into their own components. You can then import these components into other view modules, and recombine them as needed.

There are several ways to do this. For details and examples, see [Using JSX](/docs/guides/howto/jsx) for an approach that uses JSX. Refer to [Using view factories](/docs/guides/howto/view-factories) for a pure JavaScript / TypeScript based approach.

#### Rendering

All UI components are rendered by a separate 'renderer' class, mostly invisible to the rest of the application. For Web apps, the renderer is the only part that interacts directly with the DOM, which means that you usually don't have to write code to update the DOM yourself. See the guide on [Rendering](/docs/guides/concepts/rendering) for details.

---

### Next steps

Now that you've learned the basics, you can take the following steps:

* Follow a practical approach and take a look at a 'Hello, world!' [example application](/docs/guides/quickstart/hello-world).
* Alternatively, learn more about [components](/docs/guides/concepts/components) to understand how they can be used to structure your data, before moving on to a detailed look at [activities](/docs/guides/concepts/activities) and [views](/docs/guides/concepts/views).