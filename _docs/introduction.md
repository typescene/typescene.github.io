---
redirect_from: /docs/introduction/overview
docsection: overview
layout: doc_subpage
title: Introduction
description: An introduction to Typescene's architecture
pageintro: Typescene is a complete, object oriented front-end framework that helps to manage both the application state and the user interface.
nav: |
  * [Application architecture](#architecture)
  * [Components](#components)
  * [Projects](#projects)
---

## Application architecture {#architecture}

All Typescene applications are made up of a few different parts — whether the app is a large-scale enterprise desktop tool, or a small add-on to an existing site.

* **Views** describe the user interface, as a tree structure of UI elements: buttons, checkboxes, text labels, but also containers that manage layout using rows and columns.
* **Activities** represent the underlying state, and define event handlers. A single application may contain one or more activities, reflecting the different 'places' within your app, such as different screens or popup dialogs. Activities are _activated_ independently to display their corresponding views.
* **Services** provide access to the global state. You can think of these as objects that hold global variables and methods, accessible from elsewhere in your app. Services usually provide access to data, through Web APIs or a local database, but they may also serve other purposes, for example to provide localizations based on the user's language.

> **Note:** Typescene is especially well suited for developing _interactive applications_ such as desktop or mobile ‘app-like’ experiences, not for content-heavy websites like blogs or corporate websites. The architecture is purposely designed to fit these types of applications, and is not a good fit for general purpose Web pages (although individual interactive parts could be made with Typescene).

## Components {#components}

As an object-oriented framework, Typescene defines _classes_ for different parts of an application.

For example, a text label in the app's user interface is represented by the `UILabel` class, and an activity that displays a full-screen view derives from the `PageViewActivity` class, while the entire app is an instance of `Application`.

These classes don't stand on their own: they are all sub classes of the same `Component` class. This class defines the core functionality that is used by all others, which makes them work together seamlessly.

Let's go through an example to understand what this means.

#### Example

The most _visible_ part of a Typescene application is the UI, as represented by the 'view'. This consists of a (potentially large) number of components that are linked together, in a hierarchy of containers and interactive elements.

In Typescene, these components are described in a _declarative_ way, i.e. the view is described without if-statements, loops, or expressions, at the top level of a source code file.

```jsx
// declaration using JSX syntax:
const view = (
  <centerrow>
    <label>Hello, world!</label>
  </centerrow>
);

// OR, without JSX syntax:
const view = UICenterRow.with(
  UILabel.with({
    text: "Hello, world!"
  })
);
```

It's important to understand that the resulting variable `view` holds a **class**, not a component object. This is what we call a _preset constructor:_ a constructor that's ready to create components with predefined properties and sub components. In object oriented terminology, this is a _factory_, not an object.

To create the actual `UICenterRow` object that contains a `UILabel` with the text "Hello, world!", you would need to use the `new` keyword:

```typescript
let myRow = new view();
```

However, Typescene takes component declarations even further: the preset view constructor is passed to the Activity class to create a _preset_ activity constructor. Then, that gets passed to the Application class to create a _preset_ application constructor.

```typescript
// an activity that uses this view:
class MyActivity extends PageViewActivity.with(view) {
  path = "/";
  // ...
}

// an application that uses this activity:
class MyApplication extends BrowserApplication.with(MyActivity) {
  // ...
}

let app = new MyApplication();
app.activate();
```

### Bindings and events

Linking the view to the activity class serves another purpose: when the activity wakes up it creates an instance of the view, and _binds_ the view components to the activity object.

Because the view is _bound_ to the activity, we can use 'bindings' and event handlers in view component declarations, to identify properties and methods of the activity:

```jsx
// using JSX syntax:
const view = (
  <centerrow>
    <label onClick="addCount()">
      Count: {bind("count")}
    </label>
  </centerrow>
);

// OR, without JSX syntax:
const view = UICenterRow.with(
  UILabel.with({
    onClick: "addCount()",
    text: bindf("Count: ${count}")
  })
);
```

**Event handlers** are an important feature components. Events can be 'emitted' by a component to signal that something has happened, which can be picked up by other components. Events are used by UI components when the user interacts with the element on screen, but other components may use them as well — for example, a component that encapsulates part of a data model may signal that the data has changed through a `Change` event.

In the example above, the `onClick` property instructs Typescene to call the `addCount` method of the activity whenever a `Click` event occurs.

**Bindings** work the other way around: when a property of the view is _bound_ using `bind(...)` or `bindf(...)` in the view declaration, any changes to a corresponding property of the activity (or other bound component) are passed through to the view property.

In the example above, the label text is bound to the `count` property. Setting this property on the activity object will trigger an update of the label text in the view.

Now, the number displayed by the label goes up every time the label itself is clicked:

```typescript
// an activity that works with the view above
class MyActivity extends PageViewActivity.with(view) {
  path = "/";
  count = 0;
  addCount() { this.count++ }
}
```

Note that the activity code above doesn't create view components directly, nor does it need to know the exact structure of the UI — it only provides the data to be displayed, and defines event handlers to update this data when needed. As a result, the view can be changed at any point without having to worry about the activity code, and activities can also be changed independently of each other.

### Other component features

Under the hood, the `Component` class provides a lot more plumbing that’s used across views, activities, and services:

- Components can be stored in special 'managed' lists rather than plain Arrays, to avoid issues with duplicates and gaps. Events can be handled for all components in one go.
- Properties of components that reference other components can be 'managed' by Typescene to allow it to link and unlink components automatically.
- Component _observers_ handle property changes as well as events. This is how views are actually rendered, for example — by observing changes to the component object.
- A range of _states_ (i.e. created, active, inactive, and destroyed) help components to manage their lifecycle and perform actions when their state changes.

> **See also:** Read the [Components documentation](/docs/concepts/components) for more in-depth information on the common infrastructure that’s used by components.

## Projects {#projects}

While small apps may contain only a single activity and view, large applications often consist of different screens and complex interlinked data models. In practice, the larger the application grows, the more important it becomes to separate data and business logic from the view layer.

With this in mind, it's a good idea to organize Typescene projects by activity (encapsulating the view) and service (encapsulating the data model), to be able to change one without the other.

On disk, Typescene apps are often organized as follows — although this isn’t required in any way:

* An **Activities** folder, with each activity in a separate sub folder
    * Each activity usually requires only a single class file,
    * Related views should be kept together with the activity, possibly referencing more (partial) view code in a separate subfolder.
* A **Services** folder, with services and model classes;
* A **Shared** folder, with shared classes and functions that are reused throughout the app; notably this includes custom view components as well, if they are used from different activities.

For existing (Web app or website) projects, the use of Typescene might be limited to a separate 'widget' that’s pulled in by one or more pages. Typescene facilitates this as well:

* The main view output of the application can be 'mounted' to a single DOM element on the page if needed, instead of filling the entire screen.
* Modal dialogs (popups) can be displayed e.g. after the user presses a button, which block input to the rest of the page while the app is active.
* Multiple applications may be created at the same time, each with their own set of activities.

### Deployment

To run a Typescene app, it’s necessary to compile and _bundle_ all of the code into a single `.js` file, possibly including the Typescene library code itself. Different bundlers exist to handle this process, many of which are usable out of the box.

The recommended way of getting started with a new Web application is using the [`create-typescene-webapp`](/docs/installation#create) tool, which installs a bundler and configures it appropriately for a new Typescene app. Afterwards, the configuration can be changed to suit the needs of each project.

Alternatively, a pre-compiled UMD module (a plain .js-file that works in the browser) is also available, which may be used by apps that are included on existing websites.

---

### Next steps

Now that you're familiar with the basics, you can take the following steps:

* Follow a practical approach and [create an app](/docs/installation) to experiment with.
* Alternatively, learn more about [components](/docs/concepts/components) for a detailed understanding of how they work, before moving on to [activities](/docs/concepts/activities) and [views](/docs/concepts/views).
