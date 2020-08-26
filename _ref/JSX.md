---
title: JSX
nav: |

  #### Declarations
  * [JSX()](#JSX)

  #### Namespaced
  * [**JSX.JSX.**](#JSX:JSX:)
  * [JSX.intrinsicTags](#JSX:intrinsicTags)
  * [**JSX.FactoryType**](#JSX:FactoryType)
  * [**JSX.DefaultFactoryType**](#JSX:DefaultFactoryType)
  * [JSX.ViewComponentPresetArgType](#JSX:ViewComponentPresetArgType)
  * [JSX.tag](#JSX:tag)
layout: doc_ref
---

## ![](/assets/icons/spec-function.svg)JSX() {#JSX}
{:.spec}

```typescript
(f: any, presets: any, ...rest: any[]): typeof Component & ComponentConstructor<UIRenderable>
```
{:.declarationspec}
JSX support for Typescene UI components.





---

## ![](/assets/icons/spec-namespace.svg)JSX.JSX. {#JSX:JSX:}
{:.spec}

TypeScript JSX typing information.



---

## ![](/assets/icons/spec-var.svg)JSX.intrinsicTags {#JSX:intrinsicTags}
{:.spec}

```typescript
{ [tag: string]: { with: Function; }; }
```
{:.declarationspec}
References to JSX factory functions for all intrinsic tags.



---

## ![](/assets/icons/spec-interface.svg)JSX.FactoryType {#JSX:FactoryType}
{:.spec}

Helper type to describe a JSX component factory.



---

## ![](/assets/icons/spec-interface.svg)JSX.DefaultFactoryType {#JSX:DefaultFactoryType}
{:.spec}


<pre markdown="span"><code markdown="span">`extends FactoryType<T, ComponentConstructor.PresetType<T>>`</code></pre>
{:.declarationspec}

Helper to describe a JSX component factory for a standard UI component.



---

## ![](/assets/icons/spec-type.svg)JSX.ViewComponentPresetArgType {#JSX:ViewComponentPresetArgType}
{:.spec}

```typescript
type ViewComponentPresetArgType<TComponent extends typeof ViewComponent, K extends keyof InstanceType<TComponent> = Exclude<{
        [P in keyof InstanceType<TComponent>]: InstanceType<TComponent>[P] extends Function ? never : P;
    }[keyof InstanceType<TComponent>], keyof ViewComponent>> = Pick<InstanceType<TComponent>, K>;
```
{:.declarationspec}
Type definition for the automatic component preset type of [`ViewComponent`](./ViewComponent) classes.



---

## ![](/assets/icons/spec-function.svg)JSX.tag {#JSX:tag}
{:.spec}

```typescript
<T extends typeof Component & ComponentConstructor<UIRenderable> & (new () => UIRenderable)>(C: T): FactoryType<T, PresetArgType<T>> & { ...; }
```
{:.declarationspec}
Returns JSX-compatible factory function for given component class.

