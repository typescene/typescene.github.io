---
title: shadowObservable
nav: |

  #### Declarations
  * [@shadowObservable](#shadowObservable)
layout: doc_ref
---

## ![](/assets/icons/spec-decorator.svg)@shadowObservable {#shadowObservable}
{:.spec}

```typescript
(shadowPropertyName: string, forceAsync?: boolean): PropertyDecorator
```
{:.declarationspec}
Observed property decorator: use given property as the shadow (writable) property for decorated property.

The decorated property itself (which _must_ have a property getter) will not be observed, and given property is observed instead. However, the 'current value' passed to observer methods will still be the value that is obtained through the getter of the decorated property.

- `shadowPropertyName` — the name of the shadow property that should be observed instead.

- `forceAsync` — if true, forces observers to observe this property asynchronously _only_, to prevent the occurance of side effects when setting the value of the shadow property; any attempt to observe the decorated property using a synchronous observer method (without `...Async`) results in an error.

