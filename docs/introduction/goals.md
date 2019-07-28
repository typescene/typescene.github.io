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

With so many great platforms and tools available today, it's easier than ever to build a rich interactive Web application. You can hide every implementation detail of the DOM API, shrinking your code to the bare minimum and leaving the rest to a framework of your choice. So why do we need yet _another_ framework to choose from?

### Maintainability {#maintainability}

All of this progress in Web development has come at a cost. Have you ever opened a years-old project that used the favorite Web framework-du-jour, and tried to make sense of it now? Would you be able to _maintain_ such a piece of software, in the same way you could open up an old WinForms or Cocoa application on Windows or Mac and have it compile just fine?

Sure enough, modern package managers solve some of the compatibility issues, but library APIs are constantly in flux. New ideas come in and 'legacy' ones disappear. Who will remember the (hypothetical) peculiarities of the ‘willUpdate’ method in version 14.2.132 of framework X? If constantly upgrading to the latest version is not an option, we're setting ourselves up for trouble down the road.

This might not be an issue for one-offs and personal projects that you’re constantly working on, but _maintainability_ is a major concern for any software that needs to be supported by a business or other organization in the long term. Most code isn't updated constantly (big apps like Facebook or Twitter), or written once and then forgotten, but rather something in between.

Here's where the design goals of the Typescene framework come in.

### Design Goals {#goals}

* __No revisions to the architecture, *ever*.__ Code shouldn't have to be completely rewritten to be compatible with the next major version of Typescene. We all have better things to do.
* __No runtime dependencies on external libraries, *at all*.__ This makes it possible to re-build your app as long as you can compile TypeScript code (which is probably a very long time).
* __No-nonsense object-oriented (OO), event-driven approach.__ As developers, we tend to view UI elements as dynamic 'widgets', and OO fits this model perfectly. Event-driven UI programming has been the standard for decades and is very easy to follow for new developers, so there's no need to reinvent the wheel here.
* __Strongly typed.__ Your future self (or colleague) will thank you if your text editor can help you figure out what your code means, highlight errors before compiling, and can even suggest ways to refactor your code. Auto-completion and automatic imports work out of the box in editors such as Visual Studio Code.
* __(Minimal) framework, not just a library.__ Typescene provides you with a complete runtime environment out of the box, for a consistent foundation that works for apps of any size — you'll only need external modules to import complex UI components or application behaviors that aren't included in the framework itself.

Most importantly, Typescene hasn't been invented overnight, it's _not_ a Minimum Viable Product that introduces some clever new paradigm. It's the result of years of practical experimentation, refactoring, and validation — built to last, and ready to support modern applications in the real world.

### Further reading

Learn more about [how Typescene works](/docs/introduction/overview).
