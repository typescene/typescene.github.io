# UIFormContextController
> __Note:__ Preset constructors for this class (see example) only accept __one__ child component. To wrap multiple components, use multiple `UIFormContextController` constructors, or wrap child components in a `UICell`.

### Form Context
The form context record is used by input components (e.g. text field, toggle/checkbox, and custom input components) to synchronize values displayed with the properties of any managed object.

* Input components have a `name` property that's used to identify the form context record property.
* The form context record itself is provided by the `UIFormContextController` component, usually through a binding on its `formContext` property (see example below).
* The form context record must already be created — this might be an instance of `ManagedRecord` or a custom class.
* When the input value changes, the property is updated along with the new value.
* When the form context record is set, or when a change event is emitted on the form context record, the displayed input value is updated. Note that simply changing the property value is not enough to trigger an update since properties themselves are not observable.

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
