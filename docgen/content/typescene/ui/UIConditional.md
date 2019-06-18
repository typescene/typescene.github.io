# UIConditional
> __Note:__ Preset constructors for this class (see example) only accept __one__ child component. To wrap multiple components, use multiple `UIConditional` constructors, or wrap child components in a `UICell`.

#### Example (preset)
```typescript
UIConditional.with(
  { state: bind("showRegion") },
  UICell.with(
    UIRow.with(
      tl("Only rendered when state is true")
    )
  )
)
```
