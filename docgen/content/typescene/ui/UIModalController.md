# UIMenu
#### Example
For an example of how UIMenu can be used, refer to `UIModalController`.

---
# UIModalController
#### Example (preset)
```typescript
UIModalController.with(
  { placement: UIRenderPlacement.DROPDOWN },
  UIIconButton.with({
    onClick: "+ShowModal",
    icon: "expandDown"
  }),
  UIMenu.with({
    onSelectMenuItem: "selectMenuItem()",
    onBuild() {
      this.builder.clear();
      this.builder.addOption("one", "First option");
      this.builder.addOption("second", "Second option");
      this.builder.addSeparator();
      this.builder.addOption("settings", "Settings...");
      this.builder.setRevealTransition("down-fast");
    }
  })
)
```
