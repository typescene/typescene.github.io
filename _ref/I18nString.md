---
title: I18nString
nav: |

  #### Declarations
  * [**class I18nString**](#I18nString)
  * [.format](#I18nString:format)
  * [.text](#I18nString:text)
  * [.update()](#I18nString:update)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class I18nString {#I18nString}
{:.spec}

Encapsulates a string, which is translated and formatted lazily (i.e. the first time [`toString`](./toString) is called), as well as any input values.

Before formatting, the string is automatically translated using the [`I18nService.getText()`](./I18nService#I18nService:getText) method of the currently registered I18n service, if any.

**Note:** Objects of this class are returned by the [`strf`](./strf) function, refer to this function for valid format string placeholders.

### Constructor
```typescript
(format: string | { toString(): string; }, values?: any[]): I18nString
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).format {#I18nString:format}
{:.spec}

```typescript
{ toString(): string; }
```
{:.declarationspec}
Original format string.



## ![](/assets/icons/spec-property.svg).text {#I18nString:text}
{:.spec}

```typescript
string
```
{:.declarationspec}
Translated format string, if any.



## ![](/assets/icons/spec-method.svg).update() {#I18nString:update}
{:.spec}

```typescript
(values: any[]): this
```
{:.declarationspec}
Updates input values to given values; this clears the current result, if any.

