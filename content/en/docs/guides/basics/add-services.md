---
template: doc_guide
title: Adding services
description: |
  Extend your app with services to use data models across activities and views.
---

<section>

**Data sources**<br>
Services are components that can be made available from _any_ other component within your app. As such, they work well for representing sources (and destinations) of data such as databases and APIs, when combined with records, lists, and maps.

</section>

```typescript
// TODO: simple CRUD data service
```

---

<section>

**Other uses**<br>
Services can also be used to centralize business logic or program state. Anything that doesn't depend on or 'belong to' the current activity is usually better managed using a service.

</section>

```typescript
// TODO: user auth service
```

---

<footer>

### Related

[**ManagedService**<br>Represents a service that can be referenced by other classes](/docs/ref/ManagedService){:.block_link.class}

</footer>