---
title: AppComponent
nav: |

  #### Declarations
  * [**class AppComponent**](#AppComponent)
  * [.renderContext](#AppComponent:renderContext)
  * [.activationContext](#AppComponent:activationContext)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class AppComponent <span class="spec_tag">abstract</span> {#AppComponent}
{:.spec}


<pre markdown="span"><code markdown="span">`extends AppComponent_base`</code></pre>
{:.declarationspec}

Specialized [`Component`](./Component) that propagates application properties (abstract).

**Note:** This is a common base class to add shared bindings to activities and views, and is not intended for use in your application code.

### Constructor
```typescript
(): AppComponent
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).renderContext {#AppComponent:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Application render context, propagated from the parent composite object.



## ![](/assets/icons/spec-property.svg).activationContext {#AppComponent:activationContext}
{:.spec}

```typescript
AppActivationContext
```
{:.declarationspec}
Activation context, propagated from the parent composite object.

