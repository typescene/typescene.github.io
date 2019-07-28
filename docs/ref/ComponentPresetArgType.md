---
title: ComponentPresetArgType
nav: |

  #### Declarations
  * [type ComponentPresetArgType](#ComponentPresetArgType)
layout: ref_doc
---

## ![](/assets/icons/spec-type.svg)type ComponentPresetArgType {#ComponentPresetArgType}
{:.spec}

```typescript
type ComponentPresetArgType<TComponentCtor extends ComponentConstructor> = {
    [P in keyof ComponentPresetType<TComponentCtor>]?: ComponentPresetType<TComponentCtor>[P] | Binding.Type;
} & {
    [P: string]: any;
};
```
{:.declarationspec}
Inferred type of the argument to [`Component.with`](./Component#Component:with) for a specific component constructor.

