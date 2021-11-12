---
template: doc_guide
title: Understanding views
description: |
  Learn how user interfaces are described using view components.
---

<section>

**Note:**<br>
For a more in-depth explanation, refer to this article about views.

</section>

[**Concepts &gt; Views**<br>Views represent the user interface of a Typescene application](/docs/concepts/views){:.block_link.doc}

---

<section>

**View structure**<br>
A Typescene app is displayed (or 'rendered') using a **hierarchy** of UI components such as buttons, text labels, dividers, and various containers.

In the application source code, this parent-child structure is _described_ using method calls. Note that this doesn't include any code that deals with user input or program state.

</section>

```typescript
const myView = UICell.with(
  UIRow.with(
    { height: 80 },
    UILabel.with({ text: "Do you want to continue?" })
  ),
  UIRow.with(
    UIOutlineButton.with({ label: "No" }),
    UIPrimaryButton.with({ label: "Yes" })
  )
);
```

---

<section>

**Optional: JSX syntax**<br>
Typescene also supports JSX / TSX syntax. JSX looks like HTML, but each tag is simply transformed into a method call under the hood.

</section>

```jsx
// Same as above:
const myView = (
  <cell>
    <row height={80}>
      <label>Do you want to continue?</label>
    </row>
    <row>
      <outlinebutton label="No" />
      <primarybutton label="Yes" />
    </row>
  </cell>
);
```

---

<section>

While we describe (or _declare_) views using the `with` method, this method doesn't actually _create_ view component objects. Each call returns a **class**.

These classes encapsulate the information that was passed to `with`. When an instance is created (using `new`), the constructor immediately adds properties and nested components.

_(These are called 'preset' classes, and they're also used with other types of components -- not just with views.)_

</section>

```typescript
// Create a regular label:
let myLabel = new UILabel();
console.log(myLabel.text); // => ""

// A preset label class:
let RedHelloLabel = UILabel.with({
  text: "Hello",
  textStyle: { color: "red" },
});

// Create a label from this preset:
let myRedLabel = new RedHelloLabel();
myRedLabel.text; // => "Hello"

// `myView` (above) is a preset class, too:
let v = new myView();
console.log(v.content.first().height); // => 80
```

---

<section>

**Referencing views**<br>
You'll rarely need to instantiate a view class with `new` yourself. Instead, you'll get to pass the view _class_ to an activity or custom view component. Those will use the preset class to create a view instance automatically when needed, and listen for events (read more about events later on).

</section>

```typescript
// Create a preset activity using this view class:
class MyActivity extends PageViewActivity.with(myView) {
  onClick() {
    // ... and use the current view instance:
    let row = this.view.content.first();
    console.log(row.height); // => 80
  }
}
```

---

<section>

**Bindings**<br>
To update view components (instances) after they've been rendered on screen, you can't just update the original preset _class_ anymore.

Instead, Typescene apps use 'bindings' on presets. It automatically **links** each view instance property that was assigned a binding in its preset class, to one of the activity's properties. After that, updating the property of the activity will also update the corresponding view property.

</section>

```typescript
const myView = UICell.with(
  UILabel.with({
    // Bind `text` to the `message` property below:
    text: bind("message"),
    textStyle: { bold: true }
  })
);

class MyActivity extends PageViewActivity.with(view) {
  // Update this to update the label text:
  message = "Hello, world!";

  onClick() {
    this.message = "You clicked.";
  }
}
```

---

<footer>

### Next

{{guides:content/en/docs/guides/basics/anatomy-events}}

</footer>
