---
showInNav: true
output: docs/goals.html
template: doc_article
title: Why Typescene?
description: An introduction to the Typescene framework and an explanation of its design principles.
pageintro: With so many great platforms and tools available today, it's easier than ever to build a Web application. So why do we need yet _another_ framework to choose from?
---

## Web apps {#apps}

The web platform has come a long way. No longer just a repository of 'hypertext' content, the web has become a tool for connecting with others and getting things done.

As a result, development environments and frameworks have evolved too, to support the developers that build an ever broader range of user experiences — from blogs to news websites, and from email apps to ERP systems. Most popular JavaScript frameworks are able to support as many use of these 'Web app' use cases as possible, fueled by technological advancements, open-source development, and a thriving ecosystem of compatible packages on NPM.

However, Typescene takes another approach. Taking cues from desktop and mobile GUI frameworks, it is focused on _desktop-like_ or _mobile app_ experiences that are rendered on the client-side _only_. Without having to support 'read-only' web pages, text styling, SEO, progressive enhancement, rehydration, and other features unrelated to such applications, Typescene centralizes important concepts such as program state, event handling, modals and navigation, making them more accessible as a core element of the framework.

## Maintainability {#maintainability}

Another result of the rapid evolution of the web, is that we now face serious issues with compatibility and maintenance of older projects: *o*pen up a years-old project that was written in a fashionable framework-du-jour, and you'll inevitably run into a few incompatible changes that have been made to the framework _and_ its dependencies along the way.

Often it's simply not possible anymore to open an older project, fix a bug quickly, recompile and redeploy.

Sure enough, modern package managers have solved some of the direct versioning issues. But not everything can be automated: APIs are constantly in flux, with new ideas coming in and 'legacy' ones disappearing fast. Sometimes a small change can have large effects: the (hypothetical) peculiarities of a ‘willUpdate’ method that was changed in version 14.2.132 of a framework may lock module dependencies to a particular version as well.

Clearly this is not always an issue — one-off apps don't need maintenance at all, and both personal projects and big corporate apps may be worked on all the time. However, _maintainability is a major concern for any software that needs to be supported by a business or other organization in the long term, but isn't constantly updated_.

This is where the design goals of the Typescene framework come in, catering to **workhorse** apps that needs to be maintainable in the long run.

## Design Goals {#goals}

- **No runtime dependencies on external libraries.** This makes it possible to re-build your app as long as you can compile TypeScript code (which is probably a very long time).
- **Traditional object-oriented (OO), event-driven approach.** As developers, we tend to view UI elements as dynamic 'widgets', and OO fits this model perfectly. Event-driven UI programming has been the standard for decades and is easy to understand for new developers, so there's no need to reinvent the wheel here.
- **Strongly typed.** Your future self (or co-worker) will thank you if your text editor can help you figure out what your code means, highlight errors before compiling, and can even suggest ways to refactor your code. Auto-completion and automatic imports should work out of the box in editors such as Visual Studio Code.
- **No revisions to the architecture, _ever_.** Code shouldn't have to be completely rewritten to be compatible with the next major version of Typescene. We all have better things to do. This has been the standard for many desktop GUI platforms for a long time, and can be brought to the web, too.
- **Not too big, not too small.** Typescene provides you with a complete runtime environment out of the box, for a consistent foundation that works for apps of any size — you'll only need external modules to import complex UI components or application behaviors that aren't included in the framework itself.

Most importantly, Typescene hasn't been invented overnight, it's _not_ a Minimum Viable Product that introduces some clever new paradigm. It's the result of years of practical experimentation, refactoring, and validation — built to last, and ready to support modern applications in the real world.

---

### Further reading

Learn more about [how Typescene works](/docs/introduction).
