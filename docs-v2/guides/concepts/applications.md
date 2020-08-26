---
permalink: /docs/guides/concepts/applications
docsection: concepts
layout: doc_subpage
title: Applications
description: A description of Typescene application components.
pageintro: Application components can be used to start and stop your application, and create some of your components right away.
nav: |
    * [Web applications](#web)
---

{:.TODO}
> **Coming soon** <br>
  This section is still in development. In the meantime, refer to the examples and reference documentation from the [documentation home page](/docs/).

### Web applications {#web}

The `@typescene/webapp` package exports a few browser-specific classes and functions, primarily the `BrowserApplication` class. This is a ‘platform specific’ [`Application`](/docs/ref/Application) class that includes support for URL-based routing as well as methods for rendering components to the DOM.

```typescript
let app = BrowserApplication.run(
  MainActivity,
  // ... more activities
);
```
