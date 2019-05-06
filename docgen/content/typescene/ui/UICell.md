# UICell:pageintro
The `UICell` component groups other components together within its own visual boundaries.

---
# UICell
### Using `with`
A component _factory_ can be constructed using the static `with` method.
```typescript
const MyCell = UICell.with(
    {
        background: "@background",
        dimensions: { height: 128, width: 128 }
    },
    UIRow.with( /* ... */ )
)
```
The resulting factory can be used in a call to `with` on another class (e.g. `PageViewActivity`) or constructed directly using `new MyCell()`.