---
template: doc_guide
title: Understanding events
description: |
  Learn how events can be used in views and other components.
---

<section>

### What are events?

Events are _signals_ that are sent from a component to other components, i.e. those that hold a reference to it.

Events are represented as objects: instances of the `ManagedEvent` class, or one of the specialized classes that extend it. Each class may have different properties, but all events have a `name` property.

</section>

```typescript
class MyComponent extends Component {
  doSomething() {
    // Send a custom event:
    let myEvent = new ManagedEvent("Foo");
    console.log(myEvent.name); // => Foo
    this.emit(myEvent);

    // To signal that some data has changed,
    // send a 'Change' event:
    this.emitChange();
    this.emitChange("CustomEventName");

    // To signal that a user event happened,
    // send an 'Action' event:
    this.emitAction("Confirmed");
  }
}
```

---

<section>

### Handling view events with presets

The most common use case for events is handling user input. The easiest way to set this up, is by including event _presets_ in the view declaration (call to `with`).

Event presets specify that when an event is emitted by one component, it should immediately _also_ emit another event, with a new name. The event can then easily be handled by the activity using that name.

**Note:** There are of course other ways to handle events, and the default behavior can be overridden, too. This example just shows the most basic event handling code between views and activities.

</section>

```typescript
// A view with event presets:
const view = UICell.with(
  UIRow.with(UILabel.withText("Do you want to continue?")),
  UIRow.with(
    UIOutlineButton.with({
      label: "No",
      onClick: "+Abort", // Click => Abort
    }),
    UIOutlineButton.with({
      label: "Yes",
      onClick: "+Confirm", // Click => Confirm
    })
  )
);

// Handle events in the activity:
class MyActivity extends DialogViewActivity.with(view) {
  // This would handle every single click, anywhere:
  onClick(e: ActionEvent) {
    // ... not very useful for large views.
  }

  // This handles only clicks on 'No':
  onAbort(e: ActionEvent) {
    // ... abort!
  }

  // This handles only clicks on 'Yes':
  onConfirm(e: ActionEvent) {
    // ... confirm.
  }
}
```

---

<footer>

### Related

To read more about events, and event handling outside of views and activities, refer to this in-depth article about the `Component` class:

[**Component**<br>Components are the main building blocks of a Typescene application](/docs/concepts/components){:.block_link.doc}

### Next

{{guides:content/en/docs/guides/basics/anatomy-data}}

</footer>
