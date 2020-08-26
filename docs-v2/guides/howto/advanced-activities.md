---
redirect-from: /docs/guides/advanced-activities
permalink: /docs/guides/howto/advanced-activities
docsection: howto
layout: doc_subpage
title: Advanced Activities
description: A description of some advanced concepts regarding activity components.
pageintro: Activities are extremely versatile, and they can be used in many different ways to control the state of your application.
nav: |
    * [Dynamic child activities](#dynamic)
    * [Fixed child activities](#fixed)
    * [Dynamic imports](#imports)
---

{:.TODO}
> **Coming soon** <br>
  This section is still in development. In the meantime, refer to the examples and reference documentation from the [documentation home page](/docs/).

### Dynamic child activities {#dynamic}

On a single activity, we can observe the `match` property to keep track of path captures as the user navigates through the application, as follows (this is the final example of the [Activities](/docs/guides/concepts/activities) guide).

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

One issue with the example above is that only a *single* activity is created, for all values of `:foo`. If the activity needs to hold more data than just a single property for each page, then it becomes less practical to update the activity from its observer when the matching path changes.

Instead, we can create one child activity for *each* page, with a unique captured value:

```typescript
import { managedChild, ManagedMap,
  PageViewActivity } from "typescene";
import view from "./view";

export class UniqueViewActivity
  extends PageViewActivity.with(view) {
  constructor(public readonly foo: string) {
    // `foo` is unique for every page
    super();
  }

  // ... more properties and event handlers go here
}

export default class WrapperActivity extends AppActivity {
  path = "/unique/:foo";

  /** List of all unique child activities */
  @managedChild
  activities = new ManagedMap<UniqueViewActivity>();

  /** Reuse or add a new unique child activity */
  async createUniqueActivityAsync(foo: string) {
    let activity = this.activities.get(foo);
    if (!activity) {
      activity = new UniqueViewActivity(foo);
      this.activities.set(foo, activity);
    }
    for (let a of this.activities.objects()) {
      if (a.isActive()) await a.deactivateAsync();
    }

    // activate manually, since path is undefined:
    await activity.activateAsync();
  }
}
WrapperActivity.observe(class {
  constructor(public readonly activity: WrapperActivity) { }

  // called whenever path matches:
  async onMatchChangeAsync() {
    if (this.activity.match) {
      let foo = this.activity.match["foo"];
      await this.activity.createUniqueActivityAsync(foo);
    }
  }
})
```

Here, we fill the [`ManagedMap`](/docs/ref/ManagedMap) structure with child activities and activate them one by one.

However, after a while this structure might fill up with different activities, and we may not want to keep all of the old activities around anymore. Activities still take up memory after being *deactivated*. Instead, we can *destroy* them by changing our `createUniqueActivityAsync` method slightly:

```typescript
async createUniqueActivityAsync(foo: string) {
  let activity = this.activities.get(foo);
  if (!activity) {
    activity = new UniqueViewActivity(foo);
    this.activities.set(foo, activity);
  }
  let threshold = Date.now() - DISCARD_AFTER_MS;
  for (let a of this.activities.objects()) {
    if (a === activity) continue;
    else if (a.isActive()) {
      await a.deactivateAsync();
    }
    else if (a.deactivated! < threshold) {
      // this activity is too old to keep:
      await a.destroyAsync();
    }
  }
  await activity.activateAsync();
}
```

This is a common pattern for applications that provide a way to 'browse' data, and guarantees that the most recent data is still in memory when the user uses the *back* button or gesture.

### Fixed child activities {#fixed}

If there is a fixed set of pages (e.g. `/pages/about`, `pages/friends`, etc) that we want to group together as child activities, we don't need to use path captures or observers at all:

```typescript
// AboutPageActivity.ts
export default class AboutPageActivity
  extends PageViewActivity.with(view) {
  path = "./about";
  // ...
}

// FriendsPageActivity.ts
export default class FriendsPageActivity
  extends FriendsPageActivity.with(view) {
	path = "./friends";
  // ...
}

// activity.ts
export default class PagesWrapperActivity
  extends AppActivity {
  path = "/pages/";

  // child activities (only one can be active):

  @managedChild
  aboutPage = new AboutPageActivity();

  @managedChild
  friendsPage = new FriendsPageActivity();
}
```

Alternatively, we can turn the `PagesWrapperActivity` class into a `PageViewActivity` class, and the others into plain `ViewActivity` classes. This would mean that the wrapper activity renders a page to the screen, while the child activities' views aren't rendered automatically.

We can then embed the child activity views into the wrapper view using the [`UIViewRenderer`](/docs/ref/UIViewRenderer) component — which accepts any view *or* view activity to render as nested content, like so:

```typescript
// '/pages' wrapper view:
export default UICell.with(
  // ... other content here, e.g. sidebar, top nav

  UICell.with(
    // only one gets rendered at a time:
    UIViewRenderer.with({ view: bind("aboutPage") }),
    UIViewRenderer.with({ view: bind("friendsPage") })
  )
)
```

> __Note:__ While at first glance it may seem that the wrapper now includes both pages at once, remember that the view component(s) of a view activity *only* exist while the activity itself is active; as soon as the activity is deactivated, the view gets destroyed. Therefore, only one of the `UIViewRenderer` components gets to render their view at a time, since the activities' paths cannot match at the same time.

### Dynamic imports {#imports}

Since 'bundlers' such as Webpack bundle *all* source code for the application in a single JavaScript file, the more activities your application contains the bigger the output file grows. This may negatively affect load-time performance.

An elegant way to reduce the main file size, is to 'break out' certain activities into their own files, including all of the components that are uniquely referenced by those activities (e.g. views, child activities). Webpack and other bundlers support this feature through the `import()` function, which loads modules asynchronously over the network and tells the bundler *not* to include the imported module in the main JavaScript file.

The example below shows one way to achieve this behavior. You'll need to make sure that your bundler is set up for *module splitting* for this to work.

```typescript
// activity.ts
export class DynamicActivity
  extends PageViewActivity.with(view) {
  path = "./";
  // ...this is a normal activity
}

// stub.ts
export class StubActivity extends AppActivity {
  path = "/dynamic";

  // dynamically loaded activity:
  @managedChild
  activity?: AppActivity;

  async onManagedStateActiveAsync() {
    await super.onManagedStateActiveAsync();

    // create the activity after import:
    let { DynamicActivity } = await import("./activity");
    this.activity = new DynamicActivity();
  }
  async onManagedStateInactiveAsync() {
    await super.onManagedStateInactiveAsync();

    // destroy the activity again:
    this.activity = undefined;
  }
}
```

Note that we don't need to activate the 'real' activity instance after assigning it to the managed child reference property `this.activity`, because the path `./` always matches the same path as the *parent* activity, i.e. the `StubActivity` instance.

---

#### Next steps

* Refer to [Views](/docs/guides/concepts/views) for information on how to define your application's views using UI components.
* Follow along with the [Counter](/docs/guides/quickstart/counter) example to see a basic activity in action and start experimenting from there.
