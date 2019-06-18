# UIFormContextController
> __Note:__ Preset constructors for this class (see example) only accept __one__ child component. To wrap multiple components, use multiple `UIFormContextController` constructors, or wrap child components in a `UICell`.

#### Example (preset)
```typescript
UIFormContextController.with(
  { formContext: bind("inputContext") },
  UICell.with(
    UIRow.with(
      UITextField.withName("firstName", "First name"),
      UITextField.withName("lastName", "Last name")
    ),
    UIRow.with(
      UITextField.withName("country", "Country")
    )
  )
)
```
