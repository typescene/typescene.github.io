---
title: UIColor
nav: |

  #### Declarations
  * [**class UIColor**](#UIColor)
  * [.toString()](#UIColor:toString)
  * [.text()](#UIColor:text)
  * [.alpha()](#UIColor:alpha)
  * [.lum()](#UIColor:lum)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIColor {#UIColor}
{:.spec}

Represents a single color (read-only).

### Constructor
```typescript
(colorName?: string): UIColor
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).toString() {#UIColor:toString}
{:.spec}

```typescript
(): string
```
{:.declarationspec}
Return a CSS-compatible string representation.



## ![](/assets/icons/spec-method.svg).text() {#UIColor:text}
{:.spec}

```typescript
(): UIColor
```
{:.declarationspec}
Return a new `UIColor` instance for a contrasting text color.



## ![](/assets/icons/spec-method.svg).alpha() {#UIColor:alpha}
{:.spec}

```typescript
(alpha: number): UIColor
```
{:.declarationspec}
Return a new `UIColor` instance with given alpha value (0-1) applied, for higher transparency.



## ![](/assets/icons/spec-method.svg).lum() {#UIColor:lum}
{:.spec}

```typescript
(lum: number, contrast?: boolean): UIColor
```
{:.declarationspec}
Return a new `UIColor` instance with given luminosity value (between -1 and 1) applied, for darker or lighter colors; set `contrast` parameter to true to invert the scale for dark colors (i.e. move closer to/away from mid-grey instead of strictly lower and higher luminosity).

