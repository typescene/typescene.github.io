---
title: ComponentConstructor
nav: |

  #### Declarations
  * [type ComponentConstructor](#ComponentConstructor)

  #### Namespaced
  * [ComponentConstructor.PresetType](#ComponentConstructor:PresetType)
  * [ComponentConstructor.PresetArgType](#ComponentConstructor:PresetArgType)
  * [ComponentConstructor.PresetRestType](#ComponentConstructor:PresetRestType)
layout: doc_ref
---

## ![](/assets/icons/spec-type.svg)type ComponentConstructor {#ComponentConstructor}
{:.spec}

```typescript
type ComponentConstructor<TComponent extends Component = Component> = new (...args: never[]) => TComponent;
```
{:.declarationspec}
Generic constructor type for Component classes.

This type is used to define parameters of [`Component.preset`](./Component#Component:preset).
#### Example
```typescript
export class Application extends Component {
  static preset(presets: Application.Presets,
    ...activities: Array<ComponentConstructor | undefined>): Function {
    // ... use preset activities here
  }
  // ...
}
```





---

## ![](/assets/icons/spec-type.svg)ComponentConstructor.PresetType {#ComponentConstructor:PresetType}
{:.spec}

```typescript
type PresetType<TComponentCtor extends ComponentConstructor> = TComponentCtor extends {
        preset: (presets: infer TPreset) => void;
    } ? TPreset : any;
```
{:.declarationspec}
Inferred partial type of the argument to [`Component.with`](./Component#Component:with) without bindings, for a specific component constructor.



---

## ![](/assets/icons/spec-type.svg)ComponentConstructor.PresetArgType {#ComponentConstructor:PresetArgType}
{:.spec}

```typescript
type PresetArgType<TComponentCtor extends ComponentConstructor> = {
        [P in keyof PresetType<TComponentCtor>]?: PresetType<TComponentCtor>[P] | Binding.Type;
    } & {
        [P: string]: any;
    };
```
{:.declarationspec}
Inferred type of the argument to [`Component.with`](./Component#Component:with) for a specific component constructor.



---

## ![](/assets/icons/spec-type.svg)ComponentConstructor.PresetRestType {#ComponentConstructor:PresetRestType}
{:.spec}

```typescript
type PresetRestType<TComponentCtor extends ComponentConstructor> = TComponentCtor extends {
        preset: (presets: PresetType<TComponentCtor>, ...rest: infer TRest) => void;
    } ? TRest : never;
```
{:.declarationspec}
Inferred type of the rest arguments to [`Component.with`](./Component#Component:with) for a specific component constructor.

