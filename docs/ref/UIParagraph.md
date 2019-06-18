---
title: UIParagraph
nav: |

  #### Declarations
  * [UIParagraph](#UIParagraph)
layout: ref_doc
---

## ![](/assets/icons/spec-var.svg)UIParagraph {#UIParagraph}
{:.spec}

```typescript
typeof UILabel
```
{:.declarationspec}
Shortcut for [`UILabel`](./UILabel) constructor preset with the `paragraph` style set, which automatically wraps text across multiple lines.

#### See Also
[`UILabel`](./UILabel), [`UICloseLabel`](./UICloseLabel), [`UIExpandedLabel`](./UIExpandedLabel), [`UIHeading1`](./UIHeading1), [`UIHeading2`](./UIHeading2), [`UIHeading3`](./UIHeading3), [`tl`](./tl).

#### Example (preset)
```typescript
UIParagraph.withText("If this text is too long it will be " +
  "wrapped instead of cut off and grow to multiple lines")
```

