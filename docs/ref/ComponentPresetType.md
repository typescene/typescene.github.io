---
title: ComponentPresetType
nav: |

  #### Declarations
  * [type ComponentPresetType](#ComponentPresetType)
layout: ref_doc
---

## ![](/assets/icons/spec-type.svg)type ComponentPresetType {#ComponentPresetType}
{:.spec}

```typescript
type ComponentPresetType<TComponentCtor extends ComponentConstructor> = TComponentCtor extends {
    preset: (presets: infer TPreset) => void;
} ? TPreset : any;
```
{:.declarationspec}
Inferred type of the argument to [`Component.with`](./Component#Component:with) for a specific component constructor.

**Note:** This type is used by Typescene internally and should not be used by your application code.

