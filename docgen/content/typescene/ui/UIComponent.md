# UIComponent:pageintro
This is the base class of all UI (view) components.

---
# UIComponent
> __Note:__ This class should not be instantiated on its own. Instead, use one of the predefined UI components such as `UIButton` and `UILabel`, a shortcut function such as `tl`, or create your own view component using the `ViewComponent` class.

---
# UIBeforeRenderEvent
> __Note:__ The `UIBeforeRenderEvent` is emitted only once, __before__ a component is rendered the first time, and can be observed using an `onBeforeRender` preset handler property. By contrast, a plain `UIComponentEvent` is emitted __each time after__ a UI component is rendered, i.e. whenever a change occurs to its display properties (or its child components'), which can be observed using an `onRendered` preset handler property.

#### Example (preset)
The following example shows how to observe this event using a preset view constructor. An event handler on the Activity class can be used to store a reference to rendered UI components (from `.source`), which may be useful to update component instances when needed.

```typescript
export default UICell.with(
  UIRow.with(
    tl("Enter your name: "),
    UITextField.with({
      onBeforeRender: "textFieldRendered()",
      onChange: "textFieldChanged()"
    })
  )
)
```

---
# UIComponentEvent
> __Note:__ To emit this event on a UI component, use the `UIComponent.propagateComponentEvent` method.

---
# UIFocusRequestEvent
> __Note:__ This event is emitted by the `UIComponent.requestFocus` method, and is usually not emitted directly by the application.
