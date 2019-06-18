# UIColumn:pageintro
This component displays controls in a vertical arrangement.

---
# UIColumn
#### Example (preset)
```typescript
UIColumn.with(
  { spacing: 8 },
  UICloseRow.with(tl("Enter your name:")),
  UICloseRow.with(UITextField.withName("fullName"))
)
```
