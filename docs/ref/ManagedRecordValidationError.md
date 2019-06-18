---
title: ManagedRecordValidationError
nav: |

  #### Declarations
  * [**interface ManagedRecordValidationError**](#ManagedRecordValidationError)
  * [.isValidationError](#ManagedRecordValidationError:isValidationError)
  * [.errors](#ManagedRecordValidationError:errors)
layout: ref_doc
---

## ![](/assets/icons/spec-interface.svg)interface ManagedRecordValidationError {#ManagedRecordValidationError}
{:.spec}


<pre markdown="span"><code markdown="span">`extends Error`</code></pre>
{:.declarationspec}

Constructor for `ManagedRecordValidationError` errors, may be used by the [`ManagedRecord.validate`](./ManagedRecord#ManagedRecord:validate) method to encapsulate multiple errors.

If the arguments list includes another validation error, its encapsulated errors are added to the list instead of the `ManagedRecordValidationError` object itself.

#### See Also
[`ManagedRecord.validate()`](./ManagedRecord#ManagedRecord:validate), [`ManagedRecord.isValidationError()`](./ManagedRecord#ManagedRecord:isValidationError)

#### Example
```typescript
// class that extends some other class defined elsewhere
class MyRecord extends SomeOtherRecord {
  // this property is validated below:
  name?: string;

  validate() {
    // validate other fields first
    let errors: any[] = [];
    try { super.validate() }
    catch (err) { errors.push(err) }

    // validate own property:
    if (!this.name) {
      errors.push("Name cannot be left blank");
    }
    if (errors.length) {
      throw new ManagedRecordValidationError(...errors);
    }
  }
}
```




## ![](/assets/icons/spec-property.svg).isValidationError {#ManagedRecordValidationError:isValidationError}
{:.spec}

```typescript
true
```
{:.declarationspec}
Validation error flag, always set to true.



## ![](/assets/icons/spec-property.svg).errors {#ManagedRecordValidationError:errors}
{:.spec}

```typescript
({} | Error)[]
```
{:.declarationspec}
List of encapsulated errors.

