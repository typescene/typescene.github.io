---
title: ComponentEventHandler
nav: |

  #### Declarations
  * [type ComponentEventHandler](#ComponentEventHandler)
layout: doc_ref
---

## ![](/assets/icons/spec-type.svg)type ComponentEventHandler {#ComponentEventHandler}
{:.spec}

```typescript
type ComponentEventHandler<TComponent = Component, TEvent = ComponentEvent> = string | ((this: TComponent, e: TEvent) => void);
```
{:.declarationspec}
Event handler type, can be used to define the type of a preset event handler as a string or function.

> **Note:** This type is used to declare event handlers on preset types, in places where both a string (e.g. `"myHandler()"`) or a function is allowed.

