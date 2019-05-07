---
permalink: /docs/introduction/goals
layout: doc_subpage
title: Introduction
description: An introduction to the Typescene framework and an explanation of its design principles.
pageintro: Typescene is a no-nonsense, zero-dependency, strongly typed, minimal framework that helps to build maintainable applications for the Web.
nav: |
    * [Maintainability](#maintainability)
    * [Design Goals](#goals)
---

With so many great platforms and tools that are available for Web development today, it’s easier than ever to build a rich interactive Web application. You can hide every unfortunate implementation detail of the DOM API, shrinking your code to the bare minimum and leaving the rest to a framework. So why do we need yet _another_ framework?

### Maintainability {#maintainability}

All of this progress comes at a cost. Have you ever opened a years-old project that used the favorite Web framework-du-jour, and tried to make sense of it now? Would you be able to _maintain_ such a piece of software, in the same way you could open up an old WinForms or Cocoa application on Windows or Mac and have it compile just fine?

Sure enough, modern package managers solve some of the compatibility issues, but library APIs are constantly in flux. New ideas come in and ‘legacy’ ones disappear. Who will remember the (hypothetical) peculiarities of the ‘willUpdate’ method in version 14.2.132 of framework X? If constantly upgrading to the latest versions is not an option, we’re setting ourselves up for trouble down the road.

This might not be an issue for one-offs and personal projects that you’re constantly working on, but _maintainability_ is a major concern for any software that needs to be supported by a business or other organization in the long term.

Much of the code we’re writing now is intended to be write-once, update-constantly (like Facebook or Dropbox), or write-once, update-never — however most of the software in the world actually fits somewhere in between.

Here’s where the main design goals of the Typescene framework come in.

### Design Goals {#goals}

* __No revisions to the architecture, *ever*.__ Code shouldn’t have to be completely rewritten to be compatible with the next major version of Typescene. We all have better things to do.
* __No runtime dependencies on external libraries, *at all*.__ This makes it possible to re-build your app as long as you can compile TypeScript code. (Bundlers such as Webpack still have a lot of dependencies during compile-time, but technically you could run your code without a bundler so this shouldn’t be a major concern for the longevity of your app).
* __No-nonsense object-oriented UI component model.__ We have long viewed UI elements as dynamic ‘widgets’, and OO fits this model perfectly. Your app is not a static document, we really _don’t need to bring in an intermediate language like XML/HTML_ and we also _don’t need functional paradigms_ to express our UI. Separation of logic and UI is good, but changing our mental models is just an unnecessary burden.
* __Strongly typed.__ Your future self (or colleague) will thank you when your editor knows exactly what everything in your code means, highlight errors before compiling, and can even suggest to refactor your code for you.
* __(Minimal) framework, not a library.__ Typescene provides all basic functionality out of the box, and doesn’t need other ‘libraries’ for a complete runtime environment. However, Typescene doesn’t provide a full UI toolkit either with hundreds of reusable components, that’s best served by external modules.

Importantly, Typescene hasn’t been invented overnight. It’s the result of years of practical experimentation, refactoring, and real-world validation to balance flexibility with stability. It’s _not_ a Minimum Viable Product that we put out into the world to try some new approach. If anything, it’s a look back at the most successful UI frameworks of the past, with a wink to the future.

### Further details

Learn more about the [Typescene architecture](/docs/introduction/overview).
