---
title: UIRenderableConstructor
nav: |

  #### Declarations
  * [type UIRenderableConstructor](#UIRenderableConstructor)
layout: doc_ref
---

## ![](/assets/icons/spec-type.svg)type UIRenderableConstructor {#UIRenderableConstructor}
{:.spec}

```typescript
type UIRenderableConstructor = ComponentConstructor<UIRenderable> & (new () => UIRenderable);
```
{:.declarationspec}
Type definition for a constructor of a component that can be instantiated and rendered on its own (see [`UIRenderable`](./UIRenderable)).

