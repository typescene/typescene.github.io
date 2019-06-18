# AppActivityList
**Note:** This class is used internally to represent 'preset' activities of an `Application` constructor. An instance of this class is available as `Application.activities`.
#### Example
The following example defines an activity class that instantiates three other activities when activated, as child components.
```typescript
class MyActivity extends AppActivity {
  @compose(AppActivityList.with(
    OneActivity,
    TwoActivity,
    ThreeActivity
  ))
  activities?: AppActivityList;

  // ...
}
```