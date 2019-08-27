---
redirect_from: /docs/guides/activities
permalink: /docs/guides/concepts/activities
docsection: concepts
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

This is very similar to the role of a 'controller' in a typical Model-View-Controller (MVC) framework, however Typescene activities are much more flexible: since they are implemented as [components](/docs/guides/concepts/components), we can use *composition* to create an interlinked *hierarchy* of activities.

This guide highlights several basic usage scenarios and shows how activity components can be structured in a real-world application.

### No-op activity {#noop}

The following example shows an activity that gets activated, but doesn't do anything at all:

{% include TSJS.md %}
{:TS}
```typescript
import { AppActivity } from "typescene";
import { BrowserApplication } from "@typescene/webapp";

class NoopActivity extends AppActivity {
  path = "/";
}

const app = BrowserApplication.run(NoopActivity);
```

{:JS}
```javascript
import { AppActivity } from "typescene";
import { BrowserApplication } from "@typescene/webapp";

class NoopActivity extends AppActivity {
  constructor() {
    super();
    this.path = "/";
  }
}

const app = BrowserApplication.run(NoopActivity);
```

Even though this activity is 'empty', there are a number of things going on here:

1. The call to `BrowserApplication.run` on the last line creates a [preset constructor](/docs/guides/concepts/components#presets) for an `Application` class, with `NoopActivity` as its only child component.
2. An instance of `NoopActivity` is created when the application is activated (i.e. transitioned to the 'Active' [state](/docs/guides/concepts/components#state)), which happens right away.
3. The `NoopActivity` observes its own properties as well as the parent application. If the activity's `path` property matches the app's current path, the activity *activates itself*. In this case, the `/` path always matches so the activity is activated immediately.

The 'current path' is determined by the **activation context**, as created by the application. In Web apps, the path refers to the part of the URL after `#/` by default, but can be changed to use the full path instead (using the DOM History API).

> __Note:__ many other frameworks use a central 'router' component to create or activate activities based on the current path (URL). In Typescene, routing is decentralized: all activity instances are observed and activated *independently*, and state transitions are handled *asynchronously*. This means that multiple activities can be active at the same time.

### View activity {#view}

The following example shows how an activity can be turned into a **view activity** — an activity that's *preset* with a child view (UI) component. The view is instantiated when the activity becomes Active, and destroyed when the activity is deactivated.

{% include TSJS.md %}
{:TS}
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

{:JS}
```javascript
import { PageViewActivity } from "typescene";

import view from "./view";
// ^ separate file with view definition

export default class SimpleViewActivity
  extends PageViewActivity.with(view) {
  constructor() {
    super();
    this.path = "/"
  }

  // ... properties and event handlers go here
  // which can be used from the preset `view`
}
```

Whether and how the view is rendered depends on the activity's [`placement`](/docs/ref/ViewActivity#ViewActivity:placement) property. The [`PageViewActivity`](/docs/ref/PageViewActivity) class sets this property to `PAGE`, which does pretty much what you'd expect it to do.

The renderer is defined by the platform-specific **render context**, created by the application itself just like the activation context. In Web apps, the renderer creates DOM elements using the browser's API.

In summary:

* The Application instance provides an *activation context* and a *render context* that's specific to the runtime environment.
* The Activity component activates *itself* when appropriate, based on logic defined by the activation context.
* When the Activity component becomes active, View component(s) are created, including all preset (nested) child UI components.
* The view is rendered automatically depending on its 'placement'.
* When the activity deactivates itself again, the View (child) component gets destroyed automatically, which removes the associated UI from the screen.

### Path captures {#captures}

The activity `path` property is matched against the 'current path' or URL, to activate and deactivate activities automatically. We don't just have to stick to absolute paths, though:

* `/some/path` is an absolute path: it matches only this path, nothing else.
* `/some/path/` matches this path as well as anything that starts with it (note the slash character at the end), *including* `/some/path/below`.
* `/some/:id` matches anything (exluding slashes) in place of `:id`, and makes the captured string available on the activity's [`match`](/docs/ref/AppActivity#AppActivity:match) object (as a string property, i.e. `this.match["id"]`). Multiple captures can be used, e.g. `/some/:id/topics/:topic`.
* `/some/*glob` matches anything that starts with `/some/`, and captures the remainder (including slashes) as `this.match["glob"]`.
* `./some/path` (starting with a dot character) adds the path of the *parent* activity as a prefix.

On a single activity, we can observe the `match` property to keep track of path captures as the user navigates through the application, as follows.

{% include TSJS.md %}
{:TS}
```typescript
import { PageViewActivity, managedChild, observe } from "typescene";
import view from "./view";

export default class SomePageActivity
  extends PageViewActivity.with(view) {
  // capture :foo as this.match["foo"]:
  path = "/page/:foo";

  @managedChild
  foo?: MyData;  // ...assume this holds our data

  // ... more properties and event handlers go here

  @observe
  static SomePageActivityObserver = class {
    constructor(public readonly activity: SomePageActivity) {}

    // called whenever path matches:
    onMatchChange() {
      if (this.activity.match) {
        let foo = this.activity.match["foo"];
        this.activity.foo = new MyData(foo);
      }
    }
  }
}
```

{:JS}
```javascript
import { PageViewActivity, managedChild, observe } from "typescene";
import view from "./view";

export default class SomePageActivity
  extends PageViewActivity.with(view) {
  constructor() {
    // capture :foo as this.match["foo"]:
    this.path = "/page/:foo";

    // assume `.foo` holds our data
    managedChild(this, "foo");
  }

  // ... more properties and event handlers go here
}
observe(SomePageActivity, class {
  constructor(activity) {
    this.activity = activity;
  }

  // called whenever path matches:
  onMatchChange() {
    if (this.activity.match) {
      let foo = this.activity.match["foo"];
      this.activity.foo = new MyData(foo);
    }
  }
});
```

---

#### Next steps

* Read more about [Advanced Activities](/docs/guides/howto/advanced-activities).
* Refer to [Views](/docs/guides/concepts/views) for information on how to define your application's views using UI components.
* Follow along with the [Counter](/docs/guides/quickstart/counter) example to see a basic activity in action and start experimenting from there.
