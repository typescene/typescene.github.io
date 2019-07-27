---
permalink: /docs/guides/ui/using-jsx
layout: doc_subpage
title: Using JSX
description: How to use JSX for programming Typescene views.
nav: |
    * [What is JSX?](#what)
    * [Requirements](#requirements)
    * [Views](#views)
    * [Custom views](#custom)
    * [Intrinsic elements](#intrinsic)
---

### What is JSX? {#what}

JSX refers to "XML-in-JavaScript", a relatively new technology that is supported by TypeScript (and Babel, for a JS-only solution).

Source files that include JSX code _must_ be handled by a compiler or transpiler, because most runtime environments such as browsers do not support JSX natively.

With JSX, regular JavaScript (or TypeScript) code can be mixed with a derivative of XML, treating XML markup as a literal expression similar to a string, number, or object literal.

The following code is valid JSX code:

```tsx
const h = "Hello, world!";
const p = <p>{h}</p>
```

The compiler actually translates the `<p>` element to a function call under the hood, including XML properties as a plain object, and the content(s) or the element as one or more values or nested function calls.

Typescene leverages JSX to allow you to write views as embedded XML inside of TypeScript or JavaScript source code. Note that this is not the same as including raw HTML, since JSX is only translated to a tree structure of UI components, not any kind of rendered output.

### Requirements {#requirements}



### Views {#views}


### Custom views {#custom}


### Intrinsic elements {#intrinsic}


