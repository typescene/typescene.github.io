---
title: ComponentEventHandler
nav: |

  #### Declarations
  * [type ComponentEventHandler](#ComponentEventHandler)
layout: ref_doc
---

## ![](/assets/icons/spec-type.svg)type ComponentEventHandler {#ComponentEventHandler}
{:.spec}

```typescript
type ComponentEventHandler<TComponent = Component, TEvent = ComponentEvent> = string | ((this: TComponent, e: TEvent) => void);
```
{:.declarationspec}
Event handler type, can be used to define the type of a preset event handler as a string or function.

