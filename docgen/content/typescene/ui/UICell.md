# UICell:pageintro
The `UICell` component groups other components together within its own boundaries.

---
# UICell
#### See Also
`UICoverCell`, `UIFlowCell`, `UIListCellAdapter`.

#### Example (preset)
```typescript
const MyCell = UICell.with(
    {
        background: "@background",
        dimensions: { height: 128, width: 128 }
    },
    UIRow.with( /* ... */ )
)
```
