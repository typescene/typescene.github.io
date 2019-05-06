---
title: UIMenuBuilder
nav: |

  #### Declarations
  * [**class UIMenuBuilder**](#UIMenuBuilder)
  * [.clear()](#UIMenuBuilder:clear)
  * [.addOption()](#UIMenuBuilder:addOption)
  * [.addSelectionGroup()](#UIMenuBuilder:addSelectionGroup)
  * [.addSeparator()](#UIMenuBuilder:addSeparator)
  * [.setGravity()](#UIMenuBuilder:setGravity)
  * [.setRevealTransition()](#UIMenuBuilder:setRevealTransition)
  * [.setExitTransition()](#UIMenuBuilder:setExitTransition)
  * [.build()](#UIMenuBuilder:build)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIMenuBuilder <span class="spec_tag">abstract</span> {#UIMenuBuilder}
{:.spec}

Dynamic menu builder, platform dependent (abstract).

### Constructor
```typescript
(): UIMenuBuilder
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).clear() <span class="spec_tag">abstract</span> {#UIMenuBuilder:clear}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Remove all current menu items.



## ![](/assets/icons/spec-method.svg).addOption() <span class="spec_tag">abstract</span> {#UIMenuBuilder:addOption}
{:.spec}

```typescript
(key: string, text: string, icon?: string, hint?: string, hintIcon?: string, textStyle?: Partial<TextStyle>, hintStyle?: Partial<TextStyle>): this
```
{:.declarationspec}
Add a menu option with given key, text, icon, and hint.



## ![](/assets/icons/spec-method.svg).addSelectionGroup() <span class="spec_tag">abstract</span> {#UIMenuBuilder:addSelectionGroup}
{:.spec}

```typescript
(options: { key: string; text: string; }[], selectedKey?: string, textStyle?: Partial<TextStyle>): this
```
{:.declarationspec}
Add a list of selectable menu options.



## ![](/assets/icons/spec-method.svg).addSeparator() <span class="spec_tag">abstract</span> {#UIMenuBuilder:addSeparator}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Add a menu separator.



## ![](/assets/icons/spec-method.svg).setGravity() <span class="spec_tag">abstract</span> {#UIMenuBuilder:setGravity}
{:.spec}

```typescript
(gravity: "start" | "end" | "stretch"): this
```
{:.declarationspec}
Set the alignment of the menu to its related component (`start`, `stretch`, or `end`), if applicable.



## ![](/assets/icons/spec-method.svg).setRevealTransition() <span class="spec_tag">abstract</span> {#UIMenuBuilder:setRevealTransition}
{:.spec}

```typescript
(transition: UITransitionType): this
```
{:.declarationspec}
Set the animation that plays when the menu is displayed, if applicable.



## ![](/assets/icons/spec-method.svg).setExitTransition() <span class="spec_tag">abstract</span> {#UIMenuBuilder:setExitTransition}
{:.spec}

```typescript
(transition: UITransitionType): this
```
{:.declarationspec}
Set the animation that plays when the menu is removed, if applicable.



## ![](/assets/icons/spec-method.svg).build() <span class="spec_tag">abstract</span> {#UIMenuBuilder:build}
{:.spec}

```typescript
(): UIRenderableConstructor
```
{:.declarationspec}
Build a constructor for a menu with the current options, which should emit a `SelectMenuItem` event (of type [`UIMenuItemSelectedEvent`](./UIMenuItemSelectedEvent)) when an item is selected, and a `CloseModal` event to close the menu.

