# ![](/assets/icons/build.svg) The get-it-done framework
{:.displaytitle--section}

When you need to get something done, you need a tool that works reliably, right away. If you're spending time putting different bits and pieces together for every project, you're probably not using the right tool. What's more, without a one-stop solution, you may be spending time updating lots of dependencies and figuring out if they are all compatible with one another.

Typescene lets you get started right away with minimal effort. It uses a simple, consistent pattern that's easy to understand — a modern version of the Object Oriented (OO) event-driven approach that succesful GUI libraries have been using for the longest time. From the start, you're encouraged to structure your application in a way that's highly maintainable, without limiting you to a particular setup.

Like most JavaScript frameworks, Typescene is distributed using the NPM package manager.

```bash
npx create-typescene-webapp my-project
cd my-project
```

All source code for your application is in a `src/` folder, including configuration files for TypeScript and your bundler of choice (currently Webpack and Parcel are supported out of the box).

**1.** `src/app.ts` — the application entry point.

```typescript
BrowserApplication.run(
  MainActivity,
  // ... add activities here
);
```

**2.** `src/activities/main/activity.ts` — a first Activity, similar to the Controller in an MVC approach.

```typescript
export default class MainActivity extends
  PageViewActivity.with(view) {

  path = "/";  // route

  // ... reference data here to populate views
  // and define event handlers
  foo = "Hello"
  doSomething() { }
}
```

**3.** `src/activities/main/view.ts` — the main view. This module exports a static hierarchy of component _factories_ (using `Component.with(...)`), initialized with property values, bindings, and event handler references that are applied every time the component is created.

```typescript
export default UICell.with(
  UICenterRow.with(
    UILabel.withText(bindf("${foo}, world!")),
    UIPrimaryButton.with({
      label: "Do something",
      onClick: "doSomething()"
    })
  )
)
```

**4.** `src/services/...` — loosely coupled components that provide data and other services (e.g. login session, business rules, internationalization) to the rest of the application. These are referenced _by name_ from other parts of your application.

That's all you need to get started. Now, just add views (UI), activities (state and logic), and services to your app, and bundle using Webpack, Parcel, or another bundler. See the [architecture overview](/docs/introduction/overview) guide for details.

---

**Q. Should I use Typescene for my next app?** -- A. Sure! Read the [documentation](/docs) and use the guides to familiarize yourself with the framework and to learn to write idiomatic Typescene app code for best results.

**Q. Should I use Typescene for my website or blog?** -- A. **No**, probably not. Typescene was developed for applications that resemble desktop or mobile apps, not server-generated content.

**Q. Can I use plain JavaScript instead of TypeScript?** -- A. Yes, for your own code you can stick with JavaScript (ES6+), although all of the Typescene documentation is written with TypeScript in mind.

**Q. Can I use HTML or JSX to create my views?** -- A. No, JSX is not supported out of the box. There are genuine benefits to using a _single language_ throughout your project, and the component factory pattern used by Typescene doesn't sacrifice readability: `<foo x="y">...</foo>` simply turns into `Foo.with({ x: "y" }, ...)`.

**Q. Does Typescene include a calendar / pagination / tag cloud / other UI widget?** -- A. Not the main package, no. The aim is to include only 'primitive' components, which can be combined into other components and published as separate NPM packages.

**Q. Why _yet another_ JavaScript framework...?** -- Typescene is genuinely different from the other options currently available in ways that actually benefit developers, with a dependency-less design that focuses on simplicity and maintainability.

Read more about [Typescene's design goals](/docs/introduction/goals).


