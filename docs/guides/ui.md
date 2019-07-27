---
permalink: /docs/guides/ui
layout: doc_subpage
title: Creating the UI
description: A description of the various options that are available when creating a UI using Typescene.
pageintro: The user interface (UI) of your application can be put together using UI components, which provide many options for styling and layout.
nav: |
    * [Using UI components](#using)
    * [UI Components by type](#ref)
---

### Using UI components {#using}

<div style="position: relative">
  <section class="wrapper refblock_container">
      <div class="refblock">
          <div class="refblock_block">
              <h3><a href="/docs/guides/ui/using-jsx">Using JSX</a></h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <p><a href="/docs/guides/ui/using-jsx">Read more ▸</a></p>
          </div>
      </div>
      <div class="refblock">
          <div class="refblock_block">
              <h3><a href="/docs/guides/ui/using-factories">Using constructor factories</a></h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <p><a href="/docs/guides/ui/using-factories">Read more ▸</a></p>
          </div>
      </div>
  </section>
</div>

#### Note on source files

While Typescene doesn't *require* you to organize your files in a certain way, it's definitely recommended to keep views separate from your other code. Typically, views are spread across source files as follows.

* `view.ts` file next to your activity source code, for views that are very simple and span only a few lines; OR
* `view/index.ts` file, if the view contains more than one file. Note that the import statement `import view from "./view"` works just as well as the first option.
* `view/*` — other files in the `view` folder, which may export view component constructors just like `view.ts` above. These can be imported and used within preset component tree structures.

