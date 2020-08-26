---
redirect-from: /docs/guides/first
permalink: /docs/guides/quickstart/project
docsection: quickstart
layout: doc_subpage
title: First project
description: Quick Start guide that introduces a full Web application project using the Typescene framework.
pageintro: Follow along with these steps to create a fully interactive Typescene Web application project.
nav: |
    * [Setup](#setup)
    * [Service and model](#service)
    * [Main activity](#activity)
    * [View](#view)
---

__Source code:__ The code for this example project is available on GitHub: [typescene/first-project](https://github.com/typescene/first-project){:target="_blank"} (TypeScript) and [typescene/first-project-js](https://github.com/typescene/first-project-js){:target="_blank"} (JavaScript). Don't forget to run `npm install` after cloning this repository to your computer.

__View online:__ The final output can be seen in action [here](/first-project){:target="_blank"}.

### Setup {#setup}

In this guide, we'll build a 'Todo list' application that lets you enter tasks, mark them as done, and remove them.

At a high level, we're going to create the following components:

* A **service** that keeps track of the data model,
* An **activity** to represent the 'main' screen of the app, and
* A **view** that describes the UI for the main screen.

As the foundation for our application code, we'll use the output of the `create-typescene-webapp` CLI tool. Refer to [this guide](/docs/guides/quickstart/hello-world) for instructions.

> **Tip:** This project can be made to work with both TypeScript and JavaScript (using Babel to transpile ES6). Set your preference below:
>
> {% include TSJS_span.md %}

The following command creates the folder and installs all of the required dependencies:

{:TS}
```bash
npx create-typescene-webapp first-project --jsx
```

{:JS}
```bash
npx create-typescene-webapp first-project --jsx --js
```

Source files can be edited using any editor that can save plain text files, but an IDE or editor that is optimized for TypeScript can speed up your workflow significantly—even if you are not using TypeScript for your own code. [Microsoft VS Code](https://code.visualstudio.com){:target="_blank"} is an excellent choice.

---

### Service and model {#service}

We'll start with a Todo 'service', to represent the current list of todo items. We _could_ contain this list inside of our activity, but in real-world applications it's often better to encapsulate the data model in a service.

Let's create a `src/services` folder specifically for our service. Then, create a `src/services/TodoService.ts`{:TS} `src/services/TodoService.js`{:JS} file and open it in your editor.

> **Note:** It's good practice to keep services together in a separate `services` folder, away from activities and views—although Typescene doesn't enforce or require any particular folder structure.

#### Todo model

To represent our todo items, we'll create a class that's an extension of the `ManagedRecord` class. Managed records come with some additional methods that make them an excellent starting point for most data models.

{% include TSJS.md %}
{:TS}
```typescript
import { ManagedRecord } from "typescene";

/** Represents a single to-do item */
export class TodoItem extends ManagedRecord {
  constructor(public text: string) {
    super();
  }
  complete?: boolean;
}
```

{:JS}
```javascript
import { ManagedRecord } from "typescene";

/** Represents a single to-do item */
export class TodoItem extends ManagedRecord {
  constructor(text) {
    super();
    this.text = text;
    this.complete = false;
  }
}
```

#### Service class

Now we can add the service class itself, which keeps track of a list of `TodoItem` objects.

* Instead of a regular `Array`, we'll use a [`ManagedList`](/docs/ref/ManagedList) object. 'Managed lists' are part of the Typescene framework, and are meant specifically for keeping track of component lists.

* The list is _restricted_ to instances of the `TodoItem` class. This enables type checking at runtime, but also narrows the compile-time type (in TypeScript, or in a compatible code editor).

* We'll mark the list property as a _managed child_ reference, which enforces a strict parent-child relationship between the service itself and the (managed) list items. This way, when we destroy a list item it immediately gets removed from the list.

* Finally, the list is set up to _propagate_ events from the individual items onto the list object itself. We'll see later on why this can be useful.

Add the following code underneath the code for the `TodoItem` class:

{% include TSJS.md %}
{:TS}
```typescript
import {
  CHANGE, managedChild, ManagedList, ManagedRecord,
  ManagedService, observe
} from "typescene";

export default class TodoService extends ManagedService {
  name = "App.Todo";

  @managedChild
  readonly items = new ManagedList()
    .restrict(TodoItem)
    .propagateEvents();

  nCompleted = 0;
  nRemaining = 0;

  addItem(text: string) {
    if (text) this.items.add(new TodoItem(text));
  }

  removeCompleted() {
    this.items.forEach(it => {
      if (it.complete) this.items.remove(it);
    });
  }
}
```

{:JS}
```javascript
import {
  CHANGE, managedChild, ManagedList, ManagedRecord,
  ManagedService, observe
} from "typescene";

export default class TodoService extends ManagedService {
  constructor () {
    super();
    this.name = "App.Todo";
    managedChild(this, "items");
    this.items = new ManagedList()
      .restrict(TodoItem)
      .propagateEvents();
    this.nCompleted = 0;
    this.nRemaining = 0;
  }

  addItem(text) {
    if (text) this.items.add(new TodoItem(text));
  }

  removeCompleted() {
    this.items.forEach(it => {
      if (it.complete) this.items.remove(it);
    });
  }
}
```

One part is still missing here: note that the class includes `nCompleted` and `nRemaining` properties that are supposed to hold the number of completed and remaining todos—_but we're never updating them directly_.

We'll use a powerful Typescene feature to update these properties instead: we'll _observe_ changes to the `items` list and update our service properties accordingly.

{:TS}
In TypeScript, we can use a _decorator_ to add the observer: add the following property to the bottom of the `TodoService` class, before its closing `}` bracket:

{:JS}
Add the following code below the `TodoService` class:

{% include TSJS.md %}
{:TS}
```typescript
@observe
static TodoServiceObserver = class {
  constructor(public readonly svc: TodoService) { }
  onItemsChangeAsync() {
    let nCompleted = this.svc.items
      .pluck("complete")
      .filter(b => b).length;
    let total = this.svc.items.count;
    this.svc.nCompleted = nCompleted;
    this.svc.nRemaining = total - nCompleted;
    this.svc.emit(CHANGE);
  }
}
```

{:JS}
```javascript
import { observe } from "typescene";

observe(TodoService, class {
  constructor(svc) {
    this.svc = svc
  }
  onItemsChangeAsync() {
      let nCompleted = this.svc.items
        .pluck("complete")
        .filter(b => b).length;
      let total = this.svc.items.count;
      this.svc.nCompleted = nCompleted;
      this.svc.nRemaining = total - nCompleted;
      this.svc.emit(CHANGE);
  }
})
```

> **Note:** In the TypeScript version, writing the observer class as an 'inner' class allows us to access private properties (if any) of the observed class. In JavaScript we don't need to worry about property visibility at all, so adding the observer outside of the observed class is fine.

After adding the observer, an instance of the observer class is created automatically when the `TodoService` instance is created. The observer's `onItemsChangeAsync` method is called (asynchronously) whenever a change occurs to the `items` list. This method can then count the completed items and update the service's properties.

To finish adding our service, we'll need to create an instance (a 'singleton' object) and register it in the main file of our app. Add the following lines to `src/app.ts`{:TS}`src/app.js`{:JS}:

```typescript
import TodoService from "./services/TodoService";
new TodoService().register();
```

---

### Main Activity {#activity}

Now that we have our data model set up, we'll continue with the Activity.

Activities represent the application state (i.e. what the user is currently 'working on'), and contain event handlers for the associated view. In the case of our 'todo' app, we'll only need one activity.

A `MainActivity` file is already included in the output generated by `create-typescene-webapp`. Find the `src/activities/main/activity.ts`{:TS} `src/activities/main/activity.js`{:JS} file, and open it in your editor.

#### Service reference

{:TS}
Add the following lines right underneath the `path` property:

{:JS}
Add the following code to the bottom of the file:

{% include TSJS.md %}
{:TS}
```typescript
@service("App.Todo")
todoService!: TodoService;
```

{:JS}
```javascript
service("App.Todo", MainActivity, "todoService");
```

{:TS}
> __Note:__ The code above requires `service` and `TodoService` to be imported at the top of the file. If you're using Visual Studio Code, a lightbulb shows up when you select these IDs — click the icon and you'll find an option to add imports automatically. Alternatively, check the example repository for the finished activity source file.

{:JS}
> __Note:__ The code above requires `service` to be imported at the top of the file. If you're using Visual Studio Code, a lightbulb shows up when you select the ID — click the icon and you'll find an option to add an import automatically. Alternatively, check the example repository for the finished activity source file.

This does the following:

{:TS}
1. The [`@service`](/docs/ref/service) decorator turns the ordinary `todoService` property into a *service property*, which keeps the property value up to date as services are registered, destroyed, or replaced.
2. `"App.Todo"` is the exact name of the service that we're looking for, provided to the decorator as a string parameter.
3. `todoService` is the name of the property that we're adding to the activity class.
4. `!: TodoService` is a TypeScript type annotation that tells the compiler that our `todoService` property refers to an instance of our `TodoService` class, even if we're not setting that property directly.

{:JS}
1. The [`service(...)`](/docs/ref/service) function adds a property, and keeps it up to date as services are registered, destroyed, or replaced.
2. `"App.Todo"` is the exact name of the service that we're looking for.
3. `MainActivity` is the class to which we want to add a property.
4. `todoService` is the name of the property that we're adding to the activity class prototype.

#### Form context

Our user interface needs to contain a form for entering new todo items (as text). Forms in Typescene are usually linked to a _record_ object that contains properties for all of the input fields. These properties can then be updated either by the activity, or by the input UI elements themselves.

{:TS}
We call this record the 'form context'. Let's create this record and store it in a `formInput` property within our class:

{:JS}
We call this record the 'form context'. Let's create it in the `MainActivity` constructor:

{% include TSJS.md %}
{:TS}
```typescript
@managedChild
formInput = ManagedRecord.create({
  newTask: ""
});
```

{:JS}
```javascript
export default class MainActivity
  extends PageViewActivity.with(view) {
  constructor() {
    super();
    this.path = "/";

    managedChild(this, "formInput");
    this.formInput = ManagedRecord.create({
      newTask: ""
    });
  }
  // ...
}
```

#### Event handlers

Next, the activity needs to be able to handle events that come in from the view. Let’s add some handler methods for adding a task, removing all completed tasks, and toggling the state of a task.

Add the following methods to our `MainActivity` class:

{% include TSJS.md %}
{:TS}
```typescript
// add a few imports:
import {
  CHANGE, managedChild, ManagedRecord,
  PageViewActivity, service, UIListCellAdapterEvent
} from "typescene";
import { TodoItem } from "../../services/TodoService";

export default class MainActivity
  extends PageViewActivity.with(view) {
  // ...

  addTask() {
    this.todoService.addItem(this.formInput.newTask);
    this.formInput.newTask = "";
    this.formInput.emit(CHANGE);
  }

  toggleTask(e: UIListCellAdapterEvent<TodoItem>) {
    if (e.object instanceof TodoItem) {
      e.object.complete = !e.object.complete;
      e.object.emit(CHANGE);
    }
  }

  removeCompleted() {
    this.todoService.removeCompleted();
  }
}
```

{:JS}
```javascript
// add a few imports:
import {
  CHANGE, managedChild, ManagedRecord,
  PageViewActivity, service
} from "typescene";
import { TodoItem } from "../../services/TodoService";

export default class MainActivity
  extends PageViewActivity.with(view) {
  // ...

  addTask() {
    this.todoService.addItem(this.formInput.newTask);
    this.formInput.newTask = "";
    this.formInput.emit(CHANGE);
  }

  toggleTask(e) {
    if (e.object instanceof TodoItem) {
      e.object.complete = !e.object.complete;
      e.object.emit(CHANGE);
    }
  }

  removeCompleted() {
    this.todoService.removeCompleted();
  }
}
```

> **Note:** The `toggleTask` method receives a [`UIListCellAdapterEvent`](/docs/ref/UIListCellAdapterEvent), a special type of event that’s emitted by the 'list item cell' we'll create in the view. This event automatically includes a reference to the list item’s *object*, i.e. the `TodoItem` instance, which is how we know which item to update.
>
> After updating the `complete` property, we'll also need to emit an event on the `TodoItem`. This event then gets _propagated_ on the list itself, so that it can finally trigger the `onItemsChangeAsync` method of our service observer.

---

### View {#view}

Now that we have a service to store our data, and an activity to manage it, we can create a view to display it. We'll use JSX syntax to create our view code in `src/activities/main/view.tsx`{:TS}`src/activities/main/view.jsx`{:JS}.

We'll divide the view into four regions:
1. A heading with the title of the app,
2. a form to enter new task names,
3. the current list of items,
4. a footer that shows a status bar when the list is not empty.

Since we'll want the entire page to scroll up and down, we start with a [`<scrollcontainer>`](/docs/ref/UIScrollContainer) component. Within, we'll want to restrict the width of the page and add some padding while keeping all content at the top of the page, which can be achieved using the [`<flowcell>`](/docs/ref/UIFlowCell) component.

#### Page header

Here's a start for the page header within the two wrapper components:

{%raw%}
```tsx
export default HMR.enableViewReload(
  module,
  <scrollcontainer>
    <flowcell
      dimensions={{ width: 640, maxWidth: "100vw" }}
      position={{ gravity: "center" }}
      padding={{ top: 32, x: 16 }}
    >
      <row>
        <label icon="check" iconSize={40} iconColor="@green" />
        <h1>Todo</h1>
      </row>
      <spacer dimensions={{ height: 32 }} />
    </flowcell>
  </scrollcontainer>
)
```
{%endraw%}

#### Entry form

For the task input form, well use a [`<form>`](/docs/ref/UIForm) component. We'll bind the form context to the `formInput` record that we've added to our activity above.

The form itself consists of a text field and a button:

* The text field has a `name` property that's set to the _name of the form context's property_ that the text field should use to read and write the input value.
* The text field and button share a common event handler `addTask()`, which refers to the `addTask` method that exists on the activity component.

Add the following code to the `UIFlowCell` wrapper:

{%raw%}
```tsx
(
  // ... add this within the <flowcell> above:
  <form
    padding={{ x: 16, y: 8 }}
    borderColor="@separator"
    borderThickness={1}
    formContext={bind("formInput")}
  >
    <row>
      <borderlesstextfield
        name="newTask"
        placeholder="Enter a task..."
        onEnterKeyPress="addTask()"
        requestFocus
      />
      <borderlessbutton
        label="Add"
        onClick="addTask()"
      />
    </row>
  </form>
  <spacer dimensions={{ height: 16 }} />
)
```
{%endraw%}

#### Task list

For the list of current tasks, we'll use the [`<list>`](/docs/ref/UIListController) component.

* We'll need to bind the `items` property to a managed list: in this case we can bind directly to the `items` list of the `TodoService`. The service is referenced by the Activity using its `todoService` property, so we'll pass `bind("todoService.items")` here.

* The `<list>` element receives two component constructors (JSX elements): the first one is the item 'template' that gets used for every list item, and the second one is for the container component (this is optional—a default container is used if none is specified). The `<list>` component immediately creates the container, and then keeps it in sync with the items in the list by adding, removing, and reordering instances of the item template.

{%raw%}
```tsx
(
  <list items={bind("todoService.items")}>
    {/* --- List item template --- */}
    <listcell
      padding={{ x: 16, y: 8 }}
      onToggleTask="toggleTask()"
    >
      <row>
        <toggle
          state={bind("object.complete")}
          onChange="+ToggleTask"
        />
        <expandedlabel
          text={bind("object.text")}
          onClick="+ToggleTask"
        />
      </row>
    </listcell>

    {/* --- List container --- */}
    <flowcell separator={{ type: "line" }} />
  </list>
)
```
{%endraw%}

> **Note:** The `onClick` and `onChange` properties don't refer to an event handler method here, but are set up to emit a custom `ToggleTask` event from _within_ the `<listcell>`. This event gets 'propagated' to the list cell adapter itself, which wraps it into the [`UIListCellAdapterEvent`](/docs/ref/UIListCellAdapterEvent) that gets handled by the `toggleTask` method.

#### Footer

Finally, we'll add a footer. The footer cell can be hidden when it's not needed by binding its `hidden` property to the `count` property of our managed list—except we need to _show_ the list when count is nonzero, so the binding to use for `hidden` is `bind("!todoService.items.count")`.

The message that's displayed in the footer is bound using the [`bindf`](/docs/ref/bindf) function, which formats one or more bindings within a single output string. When _one_ of the bound values changes, the overall string binding also changes.

{%raw%}
```tsx
(
  <flowcell hidden={bind("!todoService.items.count")}>
    <separator />
    <spacer />
    <centerrow>
      <label textStyle={{ color: "@text/50%" }}>
        { bindf("${todoService.nRemaining} task#{/s} remaining") }
      </label>
      <linkbutton
        label="Remove completed"
        hidden={bind("!todoService.nCompleted")}
        onClick="removeCompleted()"
      />
    </centerrow>
  </flowcell>
)
```
{%endraw%}

The final versions of all these files can be found here:

{:TS}
* [`TodoService.ts`](https://github.com/typescene/first-project/blob/master/src/services/TodoService.ts){:target="_blank"} — service and model;
* [`activity.ts`](https://github.com/typescene/first-project/blob/master/src/activities/main/activity.ts){:target="_blank"} — main activity;
* [`view.tsx`](https://github.com/typescene/first-project/blob/master/src/activities/main/view.tsx){:target="_blank"} — view.

{:JS}
* [`TodoService.js`](https://github.com/typescene/first-project-js/blob/master/src/services/TodoService.js){:target="_blank"} — service and model;
* [`activity.js`](https://github.com/typescene/first-project-js/blob/master/src/activities/main/activity.js){:target="_blank"} — main activity;
* [`view.jsx`](https://github.com/typescene/first-project-js/blob/master/src/activities/main/view.jsx){:target="_blank"} — view.

That's all — we've created a service, an activity, and a view. Run the `npm run start` command on the command line to see your app in action. Thanks to the `HMR` code above (for 'Hot Module Reload', a feature of both Webpack and Parcel) you can make changes to the view's source code, save the file, and instantly see your changes in the browser. Note that changes to the activity or service require a full reload, since those would affect the state of the running application.

### Next steps

For a more complex example, check out the RealWorld front-end implementation in [this repo](https://github.com/typescene/typescene-realworld-example-app){:target="_blank"}.

Return to the [docs index](/docs/) to find out which concept you would like to learn more about.
