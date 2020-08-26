---
title: AppException
nav: |

  #### Declarations
  * [**class AppException**](#AppException)
  * [.type()](#AppException:type)
  * [.code](#AppException:code)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class AppException <span class="spec_tag">abstract</span> {#AppException}
{:.spec}


<pre markdown="span"><code markdown="span">`extends Error`</code></pre>
{:.declarationspec}

Custom error type that contains properties for a code and localizable (I18n) message.

To extend, use the static [`AppException.type()`](./AppException#AppException:type) method, the base class cannot be instantiated.

**Note:** The `instanceof` operator cannot be used with typed errors; compare the [`code`](#AppException:code) property of an error instance to the _static_ [`code`](#AppException:code) property (or a known value) of an `AppException` class, e.g. `if (err.code === MyAppException.code) ...`.

### Constructor
```typescript
(..._data: any[]): AppException
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).type() <span class="spec_tag">static</span> {#AppException:type}
{:.spec}

```typescript
(code: string, message: string): { new (data?: string | number): AppException; code: string; }
```
{:.declarationspec}
Create an `AppException` class that sets given code and message when instantiated. Given message is formatted using [`strf`](./strf) when an error object is created, with constructor parameters passed through as values.



## ![](/assets/icons/spec-property.svg).code <span class="spec_tag">static</span> {#AppException:code}
{:.spec}

```typescript
string
```
{:.declarationspec}
Known error code for all instances of this error; should be checked instead of using the `instanceof` operator.

