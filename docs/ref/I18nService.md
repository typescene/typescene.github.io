---
title: I18nService
nav: |

  #### Declarations
  * [**class I18nService**](#I18nService)
  * [.name](#I18nService:name)
  * [.locale](#I18nService:locale)
  * [.tt()](#I18nService:tt)
  * [.getNonTranslatable()](#I18nService:getNonTranslatable)
  * [.getPlural()](#I18nService:getPlural)

  #### Inherited
  * [.register()](#I18nService:register)
  * [.managedId](#I18nService:managedId)
  * [.managedState](#I18nService:managedState)
  * [.getReferenceCount()](#I18nService:getReferenceCount)
  * [.getManagedReferrers()](#I18nService:getManagedReferrers)
  * [.getManagedParent()](#I18nService:getManagedParent)
  * [.emit()](#I18nService:emit)
  * [.propagateChildEvents()](#I18nService:propagateChildEvents)
  * [.activateManagedAsync()](#I18nService:activateManagedAsync)
  * [.deactivateManagedAsync()](#I18nService:deactivateManagedAsync)
  * [.destroyManagedAsync()](#I18nService:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#I18nService:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#I18nService:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#I18nService:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#I18nService:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#I18nService:onManagedStateDestroyingAsync)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class I18nService <span class="spec_tag">abstract</span> {#I18nService}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedService`](./ManagedService)</code></pre>
{:.declarationspec}

Abstract base class definition for a [`ManagedService`](./ManagedService) that provides internationalization features.

To implement i18n in an application, extend this class and register an instance for the current locale before rendering the UI. Alternatively, use [`UIRenderContext.emitRenderChange`](./UIRenderContext#UIRenderContext:emitRenderChange) after registering a new service to update the UI. In the application's implementation of the `I18nService` class, the methods [`tt`](./tt) and and [`getNonTranslatable`](#I18nService:getNonTranslatable) must be defined.

**Note:** The service name _must_ remain `"Core.I18n"` (default, assigned by this base class) for global functions such as 'tt' to work.

#### See Also
[`tt`](./tt), [`tl`](./tl), [`Binding.addFilter`](./Binding#Binding:addFilter) (includes 'tt' filter)

#### Example
The following example is a minimal implementation of an I18n service:

```typescript
export class NL_I18nService extends I18nService {
  locale = "nl-NL";

  /** Translate and/or format given value */
  tt(value: any, type: string) {
    switch (type) {
      case "translate":
        // ... (translate string using lookup table)
        // or add to non-translatable list
        this._nonTranslatable[value] = "";
        return value;
      case "datetime"
        // ... (format Date value somehow)
        return "...";
    }
    return value;
  }

  /** Get list of non-translatable strings */
  getNonTranslatable() {
    return this._nonTranslatable;
  }

  private _nonTranslatable: any = {};
}
```

To activate the locale for the service defined above, the application would need to register an instance of this service (as `"Core.I18n"`). In a real-world application the available services would probably be stored in a list, but you can also create them manually:

```typescript
let i18n = new NL_I18nService();
i18n.register();
```

### Constructor
```typescript
(name?: string): I18nService
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).name {#I18nService:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
The name of this service, set only once by the service constructor. The preferred format for service names is `Namespace.CamelCaseName`.



## ![](/assets/icons/spec-property.svg).locale <span class="spec_tag">abstract</span> {#I18nService:locale}
{:.spec}

```typescript
string
```
{:.declarationspec}
Locale identifier (e.g. `en-US`).



## ![](/assets/icons/spec-method.svg).tt() <span class="spec_tag">abstract</span> {#I18nService:tt}
{:.spec}

```typescript
(value: any, type: string): string
```
{:.declarationspec}
Translate and/or format given value, based on given type string (defaults to 'translate' for strings passed to the [`tt`](./tt) function, or 'datetime' for Date values).

**Note:** Use the [`tt`](./tt) function instead where possible, which also removes `***{...}***` tags which can be used for unique string identifiers or comments to translators. This method should not need to remove those tags by itself.



## ![](/assets/icons/spec-method.svg).getNonTranslatable() <span class="spec_tag">abstract</span> {#I18nService:getNonTranslatable}
{:.spec}

```typescript
(): { [text: string]: any; }
```
{:.declarationspec}
Returns an object with property names set to strings that should have been translated, but for which a translation was not available (abstract).



## ![](/assets/icons/spec-method.svg).getPlural() {#I18nService:getPlural}
{:.spec}

```typescript
(n: any, forms: string[]): string
```
{:.declarationspec}
Pick one of the given plural forms, based on given number (or given array/ManagedList length). Can be overridden for languages that require more advanced logic.


The default implementation chooses the first form for `n >= 1 && n < 2 || n <= -1 && n > -2` and the second form otherwise (i.e. options are 1 or 0/many). If more than two forms are given, this implementation chooses the form based on `Math.floor(Math.abs(n))` (i.e. options are 0, 1, 2, ..., many).



## ![](/assets/icons/spec-method.svg).register() {#I18nService:register}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Inherited from [`ManagedService.register`](./ManagedService#ManagedService:register).



## ![](/assets/icons/spec-property.svg).managedId {#I18nService:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#I18nService:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#I18nService:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#I18nService:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#I18nService:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#I18nService:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#I18nService:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#I18nService:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#I18nService:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#I18nService:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#I18nService:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#I18nService:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#I18nService:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#I18nService:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#I18nService:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).

