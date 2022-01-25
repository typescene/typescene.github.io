---
showInNav: true
output: docs/goals.html
template: doc_article
title: Why Typescene?
description: Goals for the Typescene framework.
pageintro: With so many great platforms and tools available today, it's easier than ever to build a web application. Why choose yet _another_ framework?
---

## Interactive apps {#apps}

The web platform has come a long way. No longer just a library of 'hypertext' content, it's become a medium for connecting with others, organizing information, and doing business. In an attempt to help developers keep their pace in this new landscape, an abundance of tools have sprung up in the past few years.

Fueled by technological advancements and generous open-source development, JavaScript frameworks in particular have added support for the ever growing range of web experiences — allowing for the development of anything from blogs to news websites, from chat apps to ERP systems, all using the same fundamentals.

Typescene takes a different approach: rather than providing a one-size-fits-all solution, it focuses **specifically** on fully interactive, client-side rendered apps and widgets.

In other words, Typescene isn’t going to help you build a blog or other website. It _doesn’t_ support SEO, SSR, or progressive enhancement, and never will. However, if you’re building an app that provides a more ‘native’-like experience, dealing with complex state, background network requests, modals, or internationalization, then Typescene may be the framework for you.

## Maintainability {#maintainability}

Another key point of focus for Typescene is support for long-running development life cycles. Most apps require maintenance after go-live, sometimes even _years_ later. Although at first they might run for a long time exactly the way they were built, at some point it may be necessary to apply a fix or update part of the application logic.

However, updating 'old' apps using modern web technologies can be challenging. Despite following industry standard practices with tools such as NPM (for package management), developers often find that their apps are propped up by a tangled mess of dependencies. Even if only a small piece of code needs to be changed, incompatible changes in dependencies may cause unrelated parts of the code or project tooling to break, requiring more work to build and deploy the exact same code base.

To prevent issues like these in the future, Typescene simply _avoids package dependencies completely_, and is not dependent on a particular build system (e.g. bundler, package manager). As long as the source code is available, and build tooling works, 'old' projects can be maintained without further changes.

On top of that, Typescene's design promotes writing maintainable code in other ways — from the object-oriented, type-safe architecture, to the ‘loose’ coupling of UI and program logic. While perhaps not as groundbreaking as other frameworks' designs, the proven methods used by Typescene are based on industry experience, and should give developers confidence that their code can be understood by others and maintained long into the future.

## Goals {#goals}

The Typescene framework has been created with the following considerations in mind:

- **No runtime dependencies on external libraries.** This makes it possible to re-build your app as long as you can compile TypeScript code.
- **Traditional object-oriented (OO), event-driven approach.** Developers and designers tend to view UI elements as dynamic 'widgets', and OO fits this model perfectly. Event-driven UI programming has been the standard for decades and is easy to understand, there's no need to reinvent the wheel here.
- **Strongly typed.** Your future self (or co-worker) will thank you if your text editor can help to analyze, check, or even refactor your code. Auto-completion and automatic imports should work out of the box in modern code editors.
- **Backwards and forwards compatibility** Code shouldn't have to be rewritten to be compatible with the next version of Typescene. This has been the standard for many desktop GUI platforms for a long time.
- **Not too big, not too small.** Typescene provides a complete runtime environment _out of the box_, for a consistent foundation that works for apps of any size — you'll only need external packages to import complex UI components or application-specific functionality.

---

### Get started

Excited? [Read the introduction](/docs/introduction) to learn how Typescene works.
