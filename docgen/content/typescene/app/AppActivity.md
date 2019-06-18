# AppActivity
#### Example
```typescript
export class MyActivity extends AppActivity {
  path = "/";

  async onManagedStateActiveAsync() {
    await super.onManagedStateActiveAsync();
    console.log("MyActivity is now active");
    // not associated with a view
  }
}
```
