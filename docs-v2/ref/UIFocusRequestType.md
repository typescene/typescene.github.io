---
title: UIFocusRequestType
nav: |

  #### Declarations
  * [type UIFocusRequestType](#UIFocusRequestType)
layout: ref_doc
---

## ![](/assets/icons/spec-type.svg)type UIFocusRequestType {#UIFocusRequestType}
{:.spec}

```typescript
const enum UIFocusRequestType {
    SELF = 0,
    FORWARD = 1,
    REVERSE = -1
}
```
{:.declarationspec}
Focus request type, used by [`UIComponent.requestFocus`](./UIComponent#UIComponent:requestFocus).

