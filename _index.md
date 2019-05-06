# ![](/assets/icons/build.svg) The get-it-done framework
{:.displaytitle--section}

When you need to get something done, you need a tool that works reliably, right away. Spending time putting bits and pieces together every time before you even get going doesn’t sound like a great solution. Yet that’s what some frameworks expect you to do.

Typescene encourages a consistent structure for each project, and offers flexibility when you need it later on.

```bash
mkdir my-project && cd my-project
npm init -y
npm install -D typescript parcel-bundler
npm install @typescene/webapp  # ✔
```

The recommended place for all source code is in a `src/` folder, including TypeScript's `tsconfig.json` file. For [Parcel](https://parceljs.org/), you should also add the required `index.html` file here. [Webpack](https://webpack.js.org/) also works, which has its own ways of emitting HTML.

```bash
mkdir src && cd src
npx tsc --init  # create tsconfig.json
```

Now, your application needs some code:

 1. `src/app.ts` — the app’s entry point.

    ```typescript
    const MyApp = BrowserApplication.with(MainActivity);
    new MyApp().activateAsync();
    // ... this is a Promise, so you can use .catch(...)
    ```

 2. `src/activities/main/activity.ts` — a first Activity, which works a bit like the Controller in an MVC model.

    ```typescript
    export class MainActivity extends
        PageViewActivity.with(view) {

        path = "/"

        // ... reference data here to populate the view
        // and define event handlers
        foo = "Hello"
        doSomething() { }
    }
    ```

 3. `src/activities/main/view/index.ts` — the view. This consists of a hierarchy of component factories (`Component.with(...)` for any Component), initialized with property values, bindings, and event handler references.

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

4. `src/services/...` — application-wide components that provide data and other services (e.g. login session, business rules, i18n) to the rest of the application.

That’s all! Add activities, views, and services to develop your app. See the [architecture overview](/docs/introduction/overview) guide for details, and get ready for your [first project](/docs/guides/first).

---

**Q. Should I use Typescene for my next app?** -- A. Sure! Read the [documentation](/docs) and use the guides to familiarize yourself with the framework and to learn to write idiomatic Typescene app code for best results.

**Q. Should I use Typescene for my website or blog?** -- A. **No**, probably not. Typescene was developed for applications that resemble desktop or mobile apps, not server-generated content.

**Q. Why is there no create-typescript-app or other generator?** -- A. Generators are used to hide complexities in setting up your environment. We'd rather get rid of those complexities in the first place 😁. If you must, you can create or use a starter repository to kickstart your project.

**Q. Can I use HTML or JSX to create my views?** -- A. No, support for JSX would require lots more boilerplate code. We believe that there are genuine benefits to using a _single language_ throughout your project, and the component factory pattern used by Typescene doesn't sacrifice readability: `<foo x="y">...</foo>` simply turns into `Foo.with({ x: "y" }, ...)`.

**Q. Does Typescene include a calendar / pagination / tag cloud / other specific widget?** -- A. Not the main package, no. The aim is to include only 'primitive' components, which can be combined into other components and published as separate NPM packages.

**Q. Why _another_ JavaScript framework...?** -- We believe Typescene is genuinely different from the other options currently available, in ways that benefit real-world developers.

Read more about [Typescene's design goals](/docs/introduction/goals).


