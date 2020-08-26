---
title: UICellTransition
nav: |

  #### Declarations
  * [type UICellTransition](#UICellTransition)
layout: doc_ref
---

## ![](/assets/icons/spec-type.svg)type UICellTransition {#UICellTransition}
{:.spec}

```typescript
enum UICellTransition {
    right = "right",
    left = "left",
    up = "up",
    down = "down",
    fade = "fade",
    rightFast = "right-fast",
    leftFast = "left-fast",
    upFast = "up-fast",
    downFast = "down-fast",
    fadeFast = "fade-fast"
}
```
{:.declarationspec}
Basic animated transition types, used for [`UICell.revealTransition`](./UICell#UICell:revealTransition) and [`UICell.exitTransition`](./UICell#UICell:exitTransition). More transitions may be available depending on platform and cell type.

