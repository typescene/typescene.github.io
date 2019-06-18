---
title: ComponentConstructor
nav: |

  #### Declarations
  * [type ComponentConstructor](#ComponentConstructor)
layout: ref_doc
---

## ![](/assets/icons/spec-type.svg)type ComponentConstructor {#ComponentConstructor}
{:.spec}

```typescript
type ComponentConstructor<TComponent extends Component = Component> = (new (...args: any[]) => TComponent) | (new (a: never, b: never, c: never, d: never, e: never, f: never) => TComponent);
```
{:.declarationspec}
Generic constructor type for Component, matching both parameterless constructors and those with one or more required parameters.

For a constructable type, combine with a specific function type, e.g. `ComponentConstructor & (new () => MyComponent)`.

This type is mostly used to define parameters of overridden implementations of [`Component.preset`](./Component#Component:preset).
#### Example
The following example is part of the code for the actual [`Application`](./Application) class:
```typescript
export class Application extends Component {
  static preset(presets: Application.Presets,
    ...activities: Array<ComponentConstructor &
        (new () => AppActivity)>): Function {
    // ...
  }
  // ...
}
```

