---
permalink: /docs/guides/ui/using-factories
layout: doc_subpage
title: Using constructor factories
description: How to use constructor factories for programming Typescene views.
nav: |
    * [The with method](#with)
    * [Views](#views)
    * [Custom views](#custom)
    * [UI Components](#ref)
---

### All UI Components by type {#ref}

The following sections list all the UI components that are included in the `typescene` main module. Refer to the linked reference documentation for details about each component.

#### Containers

* [UICell](/docs/ref/UICell), [UICoverCell](/docs/ref/UICoverCell), [UIFlowCell](/docs/ref/UIFlowCell) — cells contain other components, and can be decorated with a border, drop shadow, etc. Cover cells are positioned to *cover* their parent container; flow cells are *not* stretched in the primary dimension.
* [UIRow](/docs/ref/UIRow), [UICloseRow](/docs/ref/UICloseRow), [UICenterRow](/docs/ref/UICenterRow), [UIOppositeRow](/docs/ref/UIOppositeRow) — rows contain other components in a horizontal configuration. Close rows do not apply padding between components; center/opposite rows align components accordingly.
* [UIColumn](/docs/ref/UIColumn), [UICloseColumn](/docs/ref/UICloseColumn) — columns contain other components in a vertical configuration. Close columns do not apply padding between components.
* [UIScrollContainer](/docs/ref/UIScrollContainer) — scroll containers allow their content to scroll in one or two directions, *if* the cell and its parents is restricted in those directions (e.g. within a cover cell).

#### Controls

* [UIButton](/docs/ref/UIButton), [UIIconButton](/docs/ref/UIIconButton), [UILargeButton](/docs/ref/UILargeButton), [UISmallButton](/docs/ref/UISmallButton), [UILinkButton](/docs/ref/UILinkButton), [UIOutlineButton](/docs/ref/UIOutlineButton), [UIBorderlessButton](/docs/ref/UIBorderlessButton), [UIPrimaryButton](/docs/ref/UIPrimaryButton) — buttons with various default styles.
* [UILabel](/docs/ref/UILabel), [UICloseLabel](/docs/ref/UICloseLabel), [UIExpandedLabel](/docs/ref/UIExpandedLabel), [UIParagraph](/docs/ref/UIParagraph), [UIHeading1](/docs/ref/UIHeading1), [UIHeading2](/docs/ref/UIHeading2), [UIHeading3](/docs/ref/UIHeading3) — labels with various default styles. Close labels do not apply minimum line height; expanded labels do *not* shrinkwrap text horizontally.
* [UITextField](/docs/ref/UITextField), [UIBorderlessTextField](/docs/ref/UIBorderlessTextField) — text field input, single line or multi line.
* [UIImage](/docs/ref/UIImage) — image control, with image loaded from a URL.
* [UIToggle](/docs/ref/UIToggle) — check box or toggle control.
* [UISeparator](/docs/ref/UISeparator) — horizontal (default) or vertical line.
* [UISpacer](/docs/ref/UISpacer) — empty component with set dimensions.

#### Others

* [ViewComponent](/docs/ref/ViewComponent) — base class for custom UI components. Acts as a composite parent for child view components.
* [UIConditional](/docs/ref/UIConditional) — controller (wrapper for a single component) that renders a its contents only if one of its properties is set to true.
* [UIFormContextController](/docs/ref/UIFormContextController) — controller (wrapper for a single component) that introduces a form context binding, which can be used by some controls.
* [UIListController](/docs/ref/UIListController) — controller for a managed list, which renders a list item adapter for every list item.
* [UIListCellAdapter](/docs/ref/UIListCellAdapter) — list item adapter (for use with list controller) that encapsulates a cell with arbitrary content.
* [UIMenu](/docs/ref/UIMenu) — menu controller; often used with a modal controller to show a modal menu.
* [UIModalController](/docs/ref/UIModalController) — modal controller for a single component that shows another component modally when an event occurs on the first one (e.g. Button showing a modal dropdown menu).
* [UISelectionController](/docs/ref/UISelectionController) — controller for a hierarchy of components that deselects other components when one is selected (i.e. when a Select event occurs, often on a cell).
* [UIStyleController](/docs/ref/UIStyleController) — controller (wrapper for a single component) that sets the style of a component based on the value of one of its properties, and a list of styles.
* [UIViewRenderer](/docs/ref/UIViewRenderer) — component that renders another component in its place dynamically (e.g. a bound activity or view component).

#### Methods

The following methods are also helpful within preset UI component structures. Refer to the linked reference documentation for details.

* [tl](/docs/ref/tl) — creates a 'translated text label', i.e. a label component with translated text, and properties taken from tags in its string parameter.
* [bind](/docs/ref/bind), [bindf](/docs/ref/bindf) — bind properties on one component to values on its composite parent (not specific to UI, see [Understanding components](/docs/guides/components)).

