# Component:pageintro
Components are the building blocks of a Typescene application.

---
# Component
[**See also:** Concepts &gt; Components](/docs/concepts/components){:.block_link.doc}

---
# ComponentConstructor
This type is used to define parameters of `Component.preset`.
#### Example
```typescript
export class Application extends Component {
  static preset(presets: Application.Presets,
    ...activities: Array<ComponentConstructor | undefined>): Function {
    // ... use preset activities here
  }
  // ...
}
```

---
# ComponentEvent
This event is emitted by the `Component.propagateComponentEvent` method, which is used when a component preset is used to propagate events (e.g. `{ onClick: "+Select" }`, which tells Typescene to handle Click events by emitting a Select event; the emitted event will be of type `ComponentEvent`).

#### See Also
`UIComponentEvent`

---
# ComponentEventHandler
> **Note:** This type is used to declare event handlers on preset types, in places where both a string (e.g. `"myHandler()"`) or a function is allowed.

---
# bind
#### See Also
`bindf`, `Binding.addFilter` (includes a list of available filters)

---
# bindf
#### See Also
`bind`, `Binding.addFilter` (includes a list of available filters)
