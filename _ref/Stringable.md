---
title: Stringable
nav: |

  #### Declarations
  * [type Stringable](#Stringable)
layout: doc_ref
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

