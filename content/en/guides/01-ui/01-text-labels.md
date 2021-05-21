---
layout: doc_guide
guide: ui
slug: ui-text-labels
title: Displaying text using label components
description: |
  Static text can be displayed using label components
pageintro: |
  The UILabel component can be used to display text.
---

<section markdown="block">
**Step 1**<br>
Make sure your activity references the correct view component.
</section>

```typescript
import { view } from "./view";

class MainActivity extends PageViewComponent.with(view) {
  // ... activity methods
}
```

---

<section markdown="block">
**Step 2 (JSX)**<br>
Add a label somewhere in your view, and add the text between the `<label>` and `</label>` tags.
</section>

```jsx
// view.tsx
export default (
  <cell>
    <centerrow>
      <label>Text goes here</label>
    </centerrow>
  </cell>
)
```
{:.pre_first_note}

---

<section markdown="block">
**Alternative (without JSX)**<br>
Use the static `UILabel.withText()` method to create a component factory for a label that contains given text.
</section>

```typescript
// view.ts
export default UICell.with(
  UICenterRow.with(
    UILabel.withText("Text goes here")
  )
)
```
{:.pre_first_note}

---

<footer markdown="block">
### Next

{% include guidelink.md match="ui-text-bindings" %}

## See also

* [`UILabel`](/docs/ref/UILabel) class reference documentation.
* Other types of label components.
</footer>

