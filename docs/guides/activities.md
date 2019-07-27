---
permalink: /docs/guides/activities
layout: doc_subpage
title: Activities
description: A description of activity components as they are used in Typescene.
pageintro: Activities are extremely versatile, and they can be used in many different ways to control the state of your application.
nav: |
    * [Introduction](#introduction)
    * [No-op activity](#noop)
    * [View activity](#view)
    * [Path captures](#captures)
---

### Introduction {#introduction}

Activity components play an important role in Typescene applications. As a crucial part of the application architecture, they serve a dual purpose:

1. Activities act as an abstraction layer between the View (UI) and the current application 'state' or data model, to keep them in sync: the view is updated when the current state changes, and the state is updated in response to UI events.

2. Activities are 'entry points' that get invoked when the user navigates to specific parts of the application (e.g. screens, popup dialogs).

This is very similar to the role of a 'controller' in a typical Model-View-Controller (MVC) framework, however Typescene activities are much more flexible: since they are implemented as [components](/docs/guides/components), we can use *composition* to create an interlinked *hierarchy* of activities.

This guide highlights several usage scenarios and shows how activity components can be structured in a real-world application.

### No-op activity {#noop}

The following example shows an activity that gets activated, but doesn't do anything at all:

```typescript
import { AppActivity } from "typescene";
import { BrowserApplication } from "@typescene/webapp";

class NoopActivity extends AppActivity {
  path = "/";
}

const app = BrowserApplication.run(NoopActivity);
```

Despite the activity being 'empty', there are a number of things going on here:

1. The call to `BrowserApplication.run` creates a [preset constructor](/docs/guides/components#presets) for an `Application` class, with `NoopActivity` as a (preset) child component.
2. The resulting application component is instantiated and activated immediately (i.e. transitioned to the 'Active' life cycle [state](/docs/guides/components#state)) — which triggers [active composition](/docs/guides/component#compose) and creates an instance of all components listed in the call to `run`, in this case just `NoopActivity`.
3. The `NoopActivity` instance is [observed](/docs/guides/components#observers) automatically (an observer is added on the `AppActivity` base class). Among others, the observer watches the `path` property (i.e. `/` in this case) and tells the activity to *activate itself* when the path matches the 'current path' and *deactivate itself* when there is no longer a match.

The 'current path' is determined by the platform-specific **activation context**, created by the application itself and [bound](/docs/guides/components#bindings) between the `Application` instance and the `AppActivity` instance. In Web apps, the path refers to the part of the URL after `#/` by default.

> __Note__: many other frameworks use a central 'router' to create or activate activities based on the current path (URL). In Typescene, all activity instances are observed and activated *independently*, and state transitions are handled *asynchronously*. This means that multiple activities might be active at the same time.

### View activity {#view}

The following example shows how to turn an activity into a **view activity** — an activity that's *preset* with a child view (UI) component which is instantiated when the activity becomes Active, and destroyed when the activity is deactivated (again using [active composition](/docs/guides/component#compose)).

Depending on the [`placement`](/docs/ref/ViewActivity#ViewActivity:placement) property, the view is rendered immediately when created, and removed from the screen when destroyed. See [`UIRenderPlacement`](/docs/ref/UIRenderPlacement), and view activity classes such as [`PageViewActivity`](/docs/ref/PageViewActivity) which set a default value for this property. If the placement property is undefined (on a plain `ViewActivity` instance), the view isn't rendered automatically.

The renderer is defined by the platform-specific **render context**, created by the application itself and [bound](/docs/guides/components#bindings) just like the activation context. In Web apps, the renderer creates elements using the browser's DOM API.

```typescript
import { PageViewActivity } from "typescene";

import view from "./view";
// ^ separate file with view definition

export default class SimpleViewActivity
  extends PageViewActivity.with(view) {
  path = "/";

  // ... properties and event handlers go here
  // which can be used from the preset `view`
}
```

In summary:

* The Application instance provides an *activation context* and a *render context* that's specific to the runtime environment.
* The Activity component activates *itself* when appropriate, based on logic defined by the activation context.
* When the Activity component becomes active, View component(s) are created, including all preset (nested) child UI components.
* The view is rendered using the application-defined render context.
* When the activity deactivates itself again, the View (child) components get destroyed automatically, which removes the associated UI from the screen.

### Path captures {#captures}

The activity `path` property is matched against the 'current path' or URL, to activate and deactivate activities automatically. We don't just have to stick to absolute paths, though:

* `/some/path` is an absolute path: it matches only this path, nothing else.
* `/some/path/` matches this path as well as anything that starts with it, *including* `/some/path/below`.
* `/some/:id` matches anything (exluding slashes) in place of `:id`, and makes the captured string available on the activity's [`match`](/docs/ref/AppActivity#AppActivity:match) object (as a string property, i.e. `this.match["id"]`). Multiple captures can be used, e.g. `/some/:id/topics/:topic`.
* `/some/*glob` matches anything that starts with `/some/`, and captures the remainder (including slashes) as `this.match["glob"]`.
* `./some/path` adds the path of the *parent* activity as a prefix.

On a single activity, we can observe the `match` property to keep track of path captures as the user navigates through the application, as follows.

```typescript
import { PageViewActivity, managedChild } from "typescene";
import view from "./view";

export default class SomePageActivity
  extends PageViewActivity.with(view) {
  // capture :foo as this.match["foo"]:
  path = "/page/:foo";

  @managedChild
  foo?: MyData;  // ...assume this holds our data

  // ... more properties and event handlers go here
}
SomePageActivity.observe(class {
  constructor(public readonly activity: SomePageActivity) { }

  // called whenever path matches:
  onMatchChange() {
    if (this.activity.match) {
      let foo = this.activity.match["foo"];
      this.activity.foo = new MyData(foo);
    }
  }
})
```

---

#### Next steps

* Read more about [Advanced Activities](/docs/guides/advanced-activities).
* Refer to [Creating the UI](/docs/guides/ui) for information on how to define your application's views using UI components.
* Follow along with [Your first project](/docs/guides/first) to see a basic activity in action and start experimenting from there.