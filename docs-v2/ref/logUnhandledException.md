---
title: logUnhandledException
nav: |

  #### Declarations
  * [logUnhandledException()](#logUnhandledException)
layout: ref_doc
---

## ![](/assets/icons/spec-function.svg)logUnhandledException() {#logUnhandledException}
{:.spec}

```typescript
(error: any): void
```
{:.declarationspec}
Log given error and emit an event on the [`UnhandledErrorEmitter`](./UnhandledErrorEmitter) instance.

This function is particularly helpful to catch exceptions that are thrown by asynchronous functions, in a synchronous context.

#### Example
```typescript
import { logUnhandledException } from "typescene";
myActivity.activateAsync().catch(logUnhandledException);
```

### Handling errors
To handle errors in some other way (other than logging to the console), observe events on the singleton [`UnhandledErrorEmitter`](./UnhandledErrorEmitter) instance.

```typescript
UnhandledErrorEmitter.observe(class {
  onEvent(e: UnhandledErrorEvent) {
    if (e.error) {
      // ... (do something with the error, e.g.
      // send to reporting service back end)
    }
  }
})
```

