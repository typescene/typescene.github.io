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

