---
title: ComponentPresetRestType
nav: |

  #### Declarations
  * [type ComponentPresetRestType](#ComponentPresetRestType)
layout: ref_doc
---

## ![](/assets/icons/spec-type.svg)type ComponentPresetRestType {#ComponentPresetRestType}
{:.spec}

```typescript
type ComponentPresetRestType<TComponentCtor extends ComponentConstructor> = TComponentCtor extends {
    preset: (presets: ComponentPresetType<TComponentCtor>, ...rest: infer TRest) => void;
} ? TRest : never;
```
{:.declarationspec}
Inferred type of the rest arguments to [`Component.with`](./Component#Component:with) for a specific component constructor.

**Note:** This type is used by Typescene internally and should not be used by your application code.

