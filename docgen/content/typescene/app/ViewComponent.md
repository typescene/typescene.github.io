# ViewComponent:pageintro
Use this base class to create your own view components without an activity.

---
# ViewComponent
### Enabling preset types
Use the `PresetFor` type to declare a static `preset` method (which is used by the type definition of the `with` method), to add strong typing for arguments to preset constructors. Alternatively, you may define an actual `preset` method implementation and provide a type for the first parameter.

#### Example
The following example shows how to create a view component that can be used from any other view.

```typescript
// ./view.ts
export default UICell.with(
  UIRow.with(
    { onClick: "doSomething()" },
    tl("You have ${nMessages} message#{/s}")
  )
)

// ./MyViewComponent.ts
import { ViewComponent } from "typescene";
import view from "./view";
export class MyViewComponent extends ViewComponent.with(view) {
  // declare a preset function to make `with` accept
  // values for all unique non-method properties
  static preset: ViewComponent.PresetFor<MyViewComponent>;

  // bound by the view, preset by `with`:
  nMessages = 0;

  doSomething() { /* event handler */ }
}

// some other view preset:
UICell.with(
  // ...
  MyViewComponent.with({
    nMessages: bind("userMessages")
  })
)
```
