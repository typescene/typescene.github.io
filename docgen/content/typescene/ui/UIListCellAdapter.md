# UIListCellAdapter
#### Example (preset)
```typescript
UIListController.with(
  { items: "fooList" },
  UIListCellAdapter.with(
    {
      // ... (preset UICell properties)
    },

    // ...UICell content, can bind to "object":
    tl("Item: ${object.name}")
  )
)
```
