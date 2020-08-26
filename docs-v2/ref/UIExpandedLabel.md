---
title: UIExpandedLabel
nav: |

  #### Declarations
  * [UIExpandedLabel](#UIExpandedLabel)
layout: ref_doc
---

## ![](/assets/icons/spec-var.svg)UIExpandedLabel {#UIExpandedLabel}
{:.spec}

```typescript
typeof UILabel
```
{:.declarationspec}
Shortcut for [`UILabel`](./UILabel) constructor preset such that the label takes up as much space as possible.

#### See Also
[`UILabel`](./UILabel), [`UICloseLabel`](./UICloseLabel), [`UIParagraph`](./UIParagraph), [`UIHeading1`](./UIHeading1), [`UIHeading2`](./UIHeading2), [`UIHeading3`](./UIHeading3), [`tl`](./tl).

#### Example (preset)
```typescript
UIExpandedLabel.withText("If this text is too long it will be " +
  "cut off instead of wrapped and an ellipsis will appear at the end")
```

