# Component:pageintro
Components are the building blocks of a Typescene application.

---
# Component
> **Note:** For a better understanding of how components are used in Typescene applications, read [this guide](/docs/guides/concepts/components).

---
# compose
> **Note:** For a better understanding of how components are used in Typescene applications, read [this guide](/docs/guides/concepts/components).

---
# ComponentConstructor
This type is mostly used to define parameters of overridden implementations of `Component.preset`.
#### Example
The following example is part of the code for the actual `Application` class:
```typescript
export class Application extends Component {
  static preset(presets: Application.Presets,
    ...activities: Array<ComponentConstructor &
        (new () => AppActivity)>): Function {
    // ...
  }
  // ...
}
```

---
# ComponentEvent
Primarily, this event is emitted by the `Component.propagateComponentEvent` method, which is used when a [component preset](/docs/guides/concepts/components#presets) includes a propagated event definition (i.e. `"+OtherEvent"`).
#### See Also
`UIComponentEvent`

---
# ComponentEventHandler
Primarily used in interface definitions for the first argument to an overridden `Component.preset` method.
#### Example
```typescript
export interface MyComponentPresets {
  // ...
  onSomeEvent: ComponentEventHandler<MyComponent>;
}
```

---
# bind
#### Example
```typescript
// view code
export default UICell.with(
  UIRow.with(
    UILabel.with({
      hidden: bind("!showLabel"),
      text: bind("labelText")
    }),
    UIListController.with(
      { items: bind("myListItems") },
      // ...
    )
  )
)
```

#### See Also
`bindf`, `Binding.addFilter` (includes a list of available filters)

---
# bindf
#### Example
```typescript
// view code
export default UICell.with(
  UIRow.with(
    UIButton.with({
      text: bindf("Add ${custItems.count} item#{/s} to cart|tt")
    })
  )
)
```

#### See Also
`bind`, `Binding.addFilter` (includes a list of available filters)
