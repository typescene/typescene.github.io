---
title: Stringable
nav: |

  #### Declarations
  * [type Stringable](#Stringable)
layout: ref_doc
---

## ![](/assets/icons/spec-type.svg)type Stringable {#Stringable}
{:.spec}

```typescript
type Stringable = string | {
    toString(): string;
};
```
{:.declarationspec}
String type or object with toString method.

This type is mostly used for properties of UI preset definitions that take a string or a 'stringable' object such as the result of [`tt`](./tt), e.g. [`UILabel.Presets.text`](./UILabel#UILabel:Presets:text).


