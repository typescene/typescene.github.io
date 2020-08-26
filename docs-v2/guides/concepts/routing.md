---
permalink: /docs/guides/concepts/routing
docsection: concepts
layout: doc_subpage
title: Routing
description: A description of the automatic routing available for Typescene activities.
pageintro: Activities offer a simple way to route among them, using a single property that's available on all instances.
nav: |
    * [What is routing?](#what-is)
    * [Activity routing](#activities)
    * [Web applications](#web)
---

{:.TODO}
> **Coming soon** <br>
  This section is still in development. In the meantime, refer to the examples and reference documentation from the [documentation home page](/docs/).

### What is routing? {#what-is}

### Activity routing {#actvities}

Activity components contain a `path` property, which tells the application to activate and deactivate the activity based on a given URL-like pattern.

Once the pattern matches this `path` property, the activity is activated immediately. When the URL changes again and the `path` no longer matches, the activity is deactivated.

This way, we can add different screens to our app simply by creating new activities.

```typescript
import { PageViewActivity } from "typescene";

export default class AboutActivity extends PageViewActivity {
  path = "/about";
}
```

This works for ‘page’ activities as well as ‘dialog’ (popup) activities, and even for nested activities which can be shown within the view of a parent activity.

### Web applications {#web}

Web applications include two different routers:

- Full path router using the DOM History API
- Hash-based router (e.g. `/#/path` URLs)

{:.TODO}
> More to follow, stay tuned.