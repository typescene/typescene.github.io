# UIListController
#### Example (preset)
```typescript
UIListController.with(
  { items: bind("fooItems") },

  // cell adapter:
  UIListCellAdapter.with(
    {
      // ... (preset UICell properties)
    },

    // ...UICell content, can bind to "object":
    tl("Item: ${object.name}")
  ),

  // list container (optional):
  UIColumn.with({
    separator: { type: "line" }
  })
)
```
