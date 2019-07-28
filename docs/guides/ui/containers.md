---
permalink: /docs/guides/ui/containers
layout: doc_subpage
title: Containers
description: A description of the container model and various layout options.
pageintro: Container components provide many options for layout and rendering.
nav: |
    * [Using UI components](#using)
    * [Styling and layout](#styling)
    * [Container layouts](#containers)
    * [UI Components by type](#ref)
---

### Container layouts {#containers}

Typescene uses a layout model that relies on *flexbox* positioning (i.e. CSS Flexible Box Layout, as implemented by modern browsers) to fit components within a parent container. Containers can be nested to achieve pretty much any desired layout.

* Each container has a primary axis (horizontal or vertical) along which its child components are *distributed*.
* Components can be grouped at the start, end, or in the center, or they can be spread out evenly within the available space.
* Perpendicular to the primary axis, components are also *aligned* on one side, in the center, or stretched from side to side.
* Components may override their own alignment, referred to as *gravity*.
* Components may control the amount they are stretched (or *grown*) within their parent container along the primary axis, relative to other components. For controls, this is referred to as *shrinkwrap*, where buttons and labels are shrinkwrapped (i.e. not grown) by default while e.g. text input fields are not shrinkwrapped (grown to the available width) — but only along the *primary* axis.
* Additionally, components may be *wrapped* automatically just like text across multiple lines, or content can be *clipped* to stay within the container's bounds.
* If a component's gravity is set to `overlay`, the component is placed on top of its parent component, positioned relative to its bounds, with controls for the distance to top, right, bottom, and left sides (i.e. CSS *absolute* positioning).

Most container components default to vertical distribution and stretched alignment — with the exception of `UIRow`, which lays out its child components along the horizontal axis and aligns them according to the 'baseline' model, to align text in individual components along a single line.

```typescript
// vertical distribution, stretched:
UICell.with(
  { background: "@green" },
  // vertical distribution, not stretched:
  UIFlowCell.with(
    // horizontal distribution:
    UIRow.with(
      UILabel.withText("Left side (LTR)"),
      UISpacer,  // fill available space in the row
      UILinkButton.withLabel("Cancel"),
      UIPrimaryButton.withLabel("OK")
    ),
    // horizontal divider:
    UISeparator,
    // another row:
    UIRow.with(
      // stacked components:
      UIColumn.with(
        { dimensions: { grow: 1 } },
	      UITextField.withName("myTextInput"),
        UILabel.withText("Text underneath")
      ),
      // shrinkwrapped button on the side:
      UIPrimaryButton.with({
        position: { gravity: "start" }, // top
        label: "Go"
      })
    )
	)
)
```
