# UICloseLabel
#### See Also
`UILabel`, `UIExpandedLabel`, `UIParagraph`, `UIHeading1`, `UIHeading2`, `UIHeading3`, `tl`.

---
# UIHeading1
#### See Also
`UILabel`, `UICloseLabel`, `UIExpandedLabel`, `UIParagraph`, `UIHeading2`, `UIHeading3`, `tl`.

---
# UIHeading2
#### See Also
`UILabel`, `UICloseLabel`, `UIExpandedLabel`, `UIParagraph`, `UIHeading1`, `UIHeading3`, `tl`.

---
# UIHeading3
#### See Also
`UILabel`, `UICloseLabel`, `UIExpandedLabel`, `UIParagraph`, `UIHeading1`, `UIHeading2`, `tl`.

---
# UIExpandedLabel
#### See Also
`UILabel`, `UICloseLabel`, `UIParagraph`, `UIHeading1`, `UIHeading2`, `UIHeading3`, `tl`.

#### Example (preset)
```typescript
UIExpandedLabel.withText("If this text is too long it will be " +
  "cut off instead of wrapped and an ellipsis will appear at the end")
```

---
# UIParagraph
#### See Also
`UILabel`, `UICloseLabel`, `UIExpandedLabel`, `UIHeading1`, `UIHeading2`, `UIHeading3`, `tl`.

#### Example (preset)
```typescript
UIParagraph.withText("If this text is too long it will be " +
  "wrapped instead of cut off and grow to multiple lines")
```

---
# UILabel
#### See Also
`UICloseLabel`, `UIExpandedLabel`, `UIParagraph`, `UIHeading1`, `UIHeading2`, `UIHeading3`, `tl`.

#### Example (preset)
```typescript
UILabel.withText(tt("Hello, world!"))
```

---
# tl
#### See Also
`UILabel`, `UICloseLabel`, `UIExpandedLabel`, `UIParagraph`, `UIHeading1`, `UIHeading2`, `UIHeading3`, `tt`.

#### Example (preset)
```typescript
UIRow.with(
  tl("{b|@red}Warning: limit exceeded!")
)
```
