---
showInNav: true
output: docs/js-ts.html
template: doc_article
title: JavaScript vs TypeScript
description: Comparison of JavaScript and TypeScript language support for Typescene applications
---

The TypeScript language adds a number of enhancements to the JavaScript (or technically, ECMAScript) language. Some of these enhancements have made their way into most modern JavaScript platforms, however some of the features used by Typescene will not be available. There are workarounds for all of these issues.

> **Note:** While it is possible to use Typescene with 'plain' JavaScript code, it is _strongly recommended_ to use TypeScript. All of the examples on this documentation website are written in TypeScript, although they can easily be rewritten to JavaScript using the rules below.

## Types {#types}

TypeScript includes 'type annotations', which informs the compiler of expected runtime types. When copying examples from TypeScript to JavaScript, these can simply be left out.

```typescript
// typescript function
function usingTypeScript(p: number): string {
  /* ... */
}

// this can be rewritten as:
function usingJavaScript(p) {
  /* ... */
}
```

Some editors (e.g. Visual Studio Code) will still use the type information that is available from the `typescene` module itself for its auto-completion features. This will not affect the resulting JavaScript code.

## Class properties {#properties}

Modern versions of JavaScript and TypeScript both support classes. However, TypeScript allows properties to be listed in the main body of the class, while JavaScript does not.

Since property declarations without initializers are pointless in JavaScript anyway, they can be left out. Initializers should be moved to the constructor function:

```typescript
// TypeScript class:
class MyComponent extends Component {
  foo = 123;
  bar?: string;
}

// JavaScript class:
class MyComponent extends Component {
  constructor() {
    super();
    this.foo = 123;
  }
}
```

## Property decorators {#decorators}

Typescene provides 'decorators' to modify the attributes of a property on all instances of a class. These include e.g. `@managed`, `@component`, and `@service`.

```typescript
// TypeScript decorators:
class MyComponent extends Component {
  @component
  ref = new MyOtherComponent();
}
```

To achieve the same effect in JavaScript, decorator functions should be called on their own, passing in the class prototype and property name as arguments (option 1 below). However, for cleaner code, these functions can _also_ be called on component instances—at a slight performance cost (option 2 below).

```javascript
// option 1:
class MyComponent extends Component {
  constructor() {
    super();
    this.ref = new MyOtherComponent();
  }
}
component(MyComponent.prototype, "ref");

// option 2:
class MyComponent extends Component {
  constructor() {
    super();
    component(this, "ref");
    this.ref = new MyOtherComponent();
  }
}
```

## Classes {#classes}

While not recommended (and in most cases, unnecessary), it is possible to use Typescene without the use of the `class` keyword altogether.

You can use pure functions and prototypes instead, but remember to (A) call the original constructor, (B) set the correct prototype, and (C) copy static methods on extended classes as well:

```javascript
// import Typescene classes:
var UILabel = typescene.UILabel;
var PageViewActivity = typescene.PageViewActivity;
var BrowserApplication = typescene.BrowserApplication;

// define a view (same as TypeScript):
var view = UILabel.withText("Hello, world!");

// create a JavaScript 'class' analog:
var _super = PageViewActivity.with(view).prototype;
function MyActivity() {
  _super.constructor.call(this); // (A)
  this.path = "/";
}
MyActivity.prototype = Object.create(_super); // (B)
for (var p in _super.constructor) {
  if (Object.hasOwnProperty.call(_super.constructor, p)) {
    MyActivity[p] = _super.constructor[p]; // (C)
  }
}
BrowserApplication.run(MyActivity);
```

It is highly recommended to use the modern `class` syntax, either by targeting modern platforms if possible, _or_ by using a transpiler such as the Babel toolkit. This makes your code much easier to understand and less error-prone.
