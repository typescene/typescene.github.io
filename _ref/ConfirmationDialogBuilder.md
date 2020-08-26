---
title: ConfirmationDialogBuilder
nav: |

  #### Declarations
  * [**class ConfirmationDialogBuilder**](#ConfirmationDialogBuilder)
  * [.setTitle()](#ConfirmationDialogBuilder:setTitle)
  * [.addMessage()](#ConfirmationDialogBuilder:addMessage)
  * [.setConfirmButtonLabel()](#ConfirmationDialogBuilder:setConfirmButtonLabel)
  * [.setCancelButtonLabel()](#ConfirmationDialogBuilder:setCancelButtonLabel)
  * [.build()](#ConfirmationDialogBuilder:build)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class ConfirmationDialogBuilder <span class="spec_tag">abstract</span> {#ConfirmationDialogBuilder}
{:.spec}

Confirmation/alert dialog builder, platform dependent, used by [`ViewActivity.showConfirmationDialogAsync`](./ViewActivity#ViewActivity:showConfirmationDialogAsync) (abstract).

**Note:** Typescene provides a platform dependent implementation by default. You can implement your own dialog builder by extending this class and assigning a constructor reference to [`UITheme.ConfirmationDialogBuilder`](./UITheme#UITheme:ConfirmationDialogBuilder).

### Constructor
```typescript
(): ConfirmationDialogBuilder
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).setTitle() <span class="spec_tag">abstract</span> {#ConfirmationDialogBuilder:setTitle}
{:.spec}

```typescript
(title: Stringable): this
```
{:.declarationspec}
Set the dialog title.



## ![](/assets/icons/spec-method.svg).addMessage() <span class="spec_tag">abstract</span> {#ConfirmationDialogBuilder:addMessage}
{:.spec}

```typescript
(message: Stringable): this
```
{:.declarationspec}
Add a block of text to be displayed as a paragraph.



## ![](/assets/icons/spec-method.svg).setConfirmButtonLabel() <span class="spec_tag">abstract</span> {#ConfirmationDialogBuilder:setConfirmButtonLabel}
{:.spec}

```typescript
(label: Stringable): this
```
{:.declarationspec}
Set the text label of the primary confirmation button.



## ![](/assets/icons/spec-method.svg).setCancelButtonLabel() <span class="spec_tag">abstract</span> {#ConfirmationDialogBuilder:setCancelButtonLabel}
{:.spec}

```typescript
(label: Stringable): this
```
{:.declarationspec}
Set the text label of the cancel button.



## ![](/assets/icons/spec-method.svg).build() <span class="spec_tag">abstract</span> {#ConfirmationDialogBuilder:build}
{:.spec}

```typescript
(): UIRenderableConstructor
```
{:.declarationspec}
Build a constructor for a renderable dialog with the current options, which should emit a `CloseModal` or `Confirm` event when closing the dialog.

