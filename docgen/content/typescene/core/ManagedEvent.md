# ManagedEvent
> **Note:** To learn more about components, managed objects, and events, refer to [this guide](/docs/guides/components).

---
# CHANGE
This event (instance) can be emitted directly to avoid instantiating a new event object for each change event.
#### Example
```typescript
import { ManagedRecord, CHANGE } from "typescene";
let myObject = ManagedRecord.create({ foo: "bar" });
myObject.foo = "FOO";
myObject.emit(CHANGE);
```

---
# ManagedChangeEvent.CHANGE
**Note:** This event instance can be imported directly as `CHANGE`<br>
(e.g. `import { CHANGE } from "typescene"`).

---
# ManagedChangeEvent
#### See Also
`CHANGE`, `ManagedListChangeEvent`
