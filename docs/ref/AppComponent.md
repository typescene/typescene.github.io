---
title: AppComponent
nav: |

  #### Declarations
  * [**class AppComponent**](#AppComponent)
  * [.renderContext](#AppComponent:renderContext)
  * [.activationContext](#AppComponent:activationContext)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class AppComponent <span class="spec_tag">abstract</span> {#AppComponent}
{:.spec}

Specialized [`Component`](./Component) that propagates application properties (abstract).

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

