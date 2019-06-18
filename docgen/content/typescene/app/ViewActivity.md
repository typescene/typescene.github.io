# ViewActivity
> __Note:__ Most activities either display a full page view (see `PageViewActivity`) or a dialog (see `DialogViewActivity`), so it is usually not necessary to use this base class.

---
# DialogViewActivity
#### Example
```typescript
class MyModalDialogActivity
  extends DialogViewActivity.with(view) {
  // Make sure to position the root ^ 'view' component

  // Don't remove the view when clicked/tapped outside:
  modalShadeClickToClose = false;

  // ... other properties and event handlers
}
```

---
# DialogViewActivity.placement
**Note:** This property is set to `DIALOG` to display the view as a dialog.

---
# PageViewActivity
#### Example
```typescript
// import a preset view constructor from ./view/index.ts:
import view from "./view";

class MyPageActivity
  extends PageViewActivity.with(view) {
  // activate this activity when browser URL is "...#/sample"
  path = "/sample";

  // called while activating the activity:
  async onManagedStateActivatingAsync() {
    await super.onManagedStateActivatingAsync();
    // ...
  }
}
```
