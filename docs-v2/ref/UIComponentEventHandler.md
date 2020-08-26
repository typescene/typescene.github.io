---
title: UIComponentEventHandler
nav: |

  #### Declarations
  * [type UIComponentEventHandler](#UIComponentEventHandler)
layout: ref_doc
---

## ![](/assets/icons/spec-type.svg)type UIComponentEventHandler {#UIComponentEventHandler}
{:.spec}

```typescript
type UIComponentEventHandler<TComponent = UIComponent, TEvent = UIComponentEvent> = string | ((this: TComponent, e: TEvent) => void);
```
{:.declarationspec}
Event handler type (see [`Component.with`](./Component#Component:with)), as a string or function.

