---
title: I18nService
nav: |

  #### Declarations
  * [**class I18nService**](#I18nService)
  * [.get()](#I18nService:get)
  * [.register()](#I18nService:register)
  * [.name](#I18nService:name)
  * [.locale](#I18nService:locale)
  * [.decimalSeparator](#I18nService:decimalSeparator)
  * [.loadTexts()](#I18nService:loadTexts)
  * [.getText()](#I18nService:getText)
  * [.getPlural()](#I18nService:getPlural)
  * [.format()](#I18nService:format)

  #### Inherited
  * [.managedId](#I18nService:managedId)
  * [.managedState](#I18nService:managedState)
  * [.getReferenceCount()](#I18nService:getReferenceCount)
  * [.getManagedReferrers()](#I18nService:getManagedReferrers)
  * [.getManagedParent()](#I18nService:getManagedParent)
  * [.emit()](#I18nService:emit)
  * [.emitChange()](#I18nService:emitChange)
  * [.propagateChildEvents()](#I18nService:propagateChildEvents)
  * [.activateManagedAsync()](#I18nService:activateManagedAsync)
  * [.deactivateManagedAsync()](#I18nService:deactivateManagedAsync)
  * [.destroyManagedAsync()](#I18nService:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#I18nService:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#I18nService:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#I18nService:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#I18nService:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#I18nService:onManagedStateDestroyingAsync)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class I18nService <span class="spec_tag">abstract</span> {#I18nService}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedService`](./ManagedService)</code></pre>
{:.declarationspec}

Abstract base class definition for a [`ManagedService`](./ManagedService) that provides internationalization features.

To implement i18n in an application, extend this class and register an instance for the current locale before rendering the UI. Alternatively, use [`UIRenderContext.emitRenderChange`](./UIRenderContext#UIRenderContext:emitRenderChange) after registering a new service to update the UI.

**Note:** The service name _must_ remain `"Core.I18n"` (default, assigned by this base class) for internationalization features to work properly.

### Constructor
```typescript
(name?: string): I18nService
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).get() <span class="spec_tag">static</span> {#I18nService:get}
{:.spec}

```typescript
(): I18nService
```
{:.declarationspec}
Returns the currently registered I18n service, if any.



## ![](/assets/icons/spec-method.svg).register() {#I18nService:register}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Register this service, making it available through properties decorated with the [`@service`](./service) decorator until the service object is destroyed (either directly using `.destroyManagedAsync()`, or when another service is registered with the same name).



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



## ![](/assets/icons/spec-property.svg).decimalSeparator {#I18nService:decimalSeparator}
{:.spec}

```typescript
string
```
{:.declarationspec}
Decimal separator used by [`strf`](./strf) and [`bindf`](./bindf); defaults to `.`.



## ![](/assets/icons/spec-method.svg).loadTexts() <span class="spec_tag">protected</span> {#I18nService:loadTexts}
{:.spec}

```typescript
(source: string[][]): void
```
{:.declarationspec}
Load translations for use by [`getText`](#I18nService:getText); given source must be an array of tuples (i.e. arrays with 2 elements: the original key or string in the source language, and its translation).



## ![](/assets/icons/spec-method.svg).getText() {#I18nService:getText}
{:.spec}

```typescript
(str: string): string
```
{:.declarationspec}
Returns a translation for given string. The string may contain formatting placeholders such as %s, these should exist in the translation as well, although their order may be changed.

If a translation is not found, the input string is returned as-is.

**Note:** This method is called automatically by [`strf`](./strf) and [`bindf`](./bindf), and it should not be necessary to call this method directly.



## ![](/assets/icons/spec-method.svg).getPlural() {#I18nService:getPlural}
{:.spec}

```typescript
(n: number, forms: string[]): string
```
{:.declarationspec}
Pick one of the given plural forms, based on given number. Can be overridden for languages that have plural forms that are different from English and Germanic languages.

**Note:** This method is called automatically by [`strf`](./strf) and [`bindf`](./bindf), and it should not be necessary to call this method directly.



## ![](/assets/icons/spec-method.svg).format() <span class="spec_tag">abstract</span> {#I18nService:format}
{:.spec}

```typescript
(value: any, ...type: string[]): string
```
{:.declarationspec}
Returns a formatted string for given value, using given type specification(s) if needed, e.g. `date`, `datetime`, etc.

**Note:** This method is called automatically by [`strf`](./strf), [`bind`](./bind), and [`bindf`](./bindf). Any types supported here can be used with the `|local:...` binding filter and `%{local:...}` string format placeholder.



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
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
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



## ![](/assets/icons/spec-method.svg).emitChange() {#I18nService:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



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

