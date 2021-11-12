---
template: doc_guide
title: Adding activities
description: |
  Extend your app with multiple activities.
---

<section>

**Page navigation**\
A Typescene application can automatically activate and deactivate activities using _paths_. In the browser, the path is determined by the URL (e.g. `/some/page` or `#/some/page`). Even if the app is usually contained on a single HTML page, you can create multiple pages or screens, in addition to modal dialogs, as separate activities.

To enable path-based routing, you can set the `path` property of any activity to a target path or pattern. The application will make sure that the right activity (or activities) are activated, and their views are displayed as a result.

</section>

```typescript
// TODO: app with two pages, a nav button, and app property to enable hash routing
```

---

<footer>

### Related

For more details on activities and routing, refer to this in-depth article about activities:

[**Activities**<br>Activities represent program state, handle events, and facilitate navigation](/docs/concepts/activities){:.block_link.doc}

### Next

{{guides:content/en/docs/guides/basics/add-view-components}}

</footer>
