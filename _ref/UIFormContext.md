---
title: UIFormContext
nav: |

  #### Declarations
  * [**class UIFormContext**](#UIFormContext)
  * [.create()](#UIFormContext:create)
  * [.get()](#UIFormContext:get)
  * [.has()](#UIFormContext:has)
  * [.set()](#UIFormContext:set)
  * [.unset()](#UIFormContext:unset)
  * [.clear()](#UIFormContext:clear)
  * [.serialize()](#UIFormContext:serialize)
  * [.required()](#UIFormContext:required)
  * [.test()](#UIFormContext:test)
  * [.validate()](#UIFormContext:validate)
  * [.validateAll()](#UIFormContext:validateAll)
  * [.errorCount](#UIFormContext:errorCount)
  * [.valid](#UIFormContext:valid)
  * [.errors](#UIFormContext:errors)

  #### Inherited
  * [.isPresetComponent()](#UIFormContext:isPresetComponent)
  * [.getParentComponent()](#UIFormContext:getParentComponent)
  * [.getBoundParentComponent()](#UIFormContext:getBoundParentComponent)
  * [.propagateComponentEvent()](#UIFormContext:propagateComponentEvent)
  * [.managedId](#UIFormContext:managedId)
  * [.managedState](#UIFormContext:managedState)
  * [.getReferenceCount()](#UIFormContext:getReferenceCount)
  * [.getManagedReferrers()](#UIFormContext:getManagedReferrers)
  * [.getManagedParent()](#UIFormContext:getManagedParent)
  * [.emit()](#UIFormContext:emit)
  * [.emitChange()](#UIFormContext:emitChange)
  * [.propagateChildEvents()](#UIFormContext:propagateChildEvents)
  * [.activateManagedAsync()](#UIFormContext:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIFormContext:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIFormContext:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIFormContext:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIFormContext:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIFormContext:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIFormContext:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIFormContext:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIFormContext.ValidationTest**](#UIFormContext:ValidationTest)
  * [.name](#UIFormContext:ValidationTest:name)
  * [.value](#UIFormContext:ValidationTest:value)
  * [.required()](#UIFormContext:ValidationTest:required)
  * [.typeOf()](#UIFormContext:ValidationTest:typeOf)
  * [.assert()](#UIFormContext:ValidationTest:assert)
layout: doc_ref
---

## ![](/assets/icons/spec-class.svg)class UIFormContext {#UIFormContext}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`Component`](./Component)</code></pre>
{:.declarationspec}

Represents form field data that can be used by input field components. By default, a `formContext` property on [`AppActivity`](./AppActivity) or [`ViewComponent`](./ViewComponent) instances is used, but an alternative form context instance may be bound using a [`UIForm`](./UIForm) or [`UIFormContextController`](./UIFormContextController) component.


To create a typed form context instance, use the static [`create`](#UIFormContext:create) method instead of the constructor.

### Constructor
```typescript
<TData = any>(): UIFormContext<TData>
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).create() <span class="spec_tag">static</span> {#UIFormContext:create}
{:.spec}

```typescript
<TData extends object>(values: TData): UIFormContext<TData>
```
{:.declarationspec}
Create a typed instance with given values.



## ![](/assets/icons/spec-method.svg).get() {#UIFormContext:get}
{:.spec}

```typescript
<K extends keyof TData>(name: K): TData[K]
```
{:.declarationspec}
Retrieve the value for a field with given name.



## ![](/assets/icons/spec-method.svg).has() {#UIFormContext:has}
{:.spec}

```typescript
(name: string): boolean
```
{:.declarationspec}
Returns true if the field with given name is set (but might be `undefined`).



## ![](/assets/icons/spec-method.svg).set() {#UIFormContext:set}
{:.spec}

```typescript
(name?: keyof TData, value?: any, validate?: boolean, silent?: boolean): void
```
{:.declarationspec}
Set the value for a field with given name.

- `name` — Name of the field to set.

- `value` — New field value.

- `validate` — Set to true to automatically run the validation test for this field, if any.

- `silent` — Set to true to avoid emitting a change event after setting the value; this means that bound components will not be updated immediately, since the field value itself cannot be observed directly.



## ![](/assets/icons/spec-method.svg).unset() {#UIFormContext:unset}
{:.spec}

```typescript
(name: keyof TData): void
```
{:.declarationspec}
Remove the value for a field with given name, including any associated error, and emit a change event. The field will also no longer be validated.



## ![](/assets/icons/spec-method.svg).clear() {#UIFormContext:clear}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Remove all field values from this instance, including any associated errors, and emit a change event. None of the existing fields will be validated anymore, until they are set again (using [`set()`](#UIFormContext:set)).



## ![](/assets/icons/spec-method.svg).serialize() {#UIFormContext:serialize}
{:.spec}

```typescript
(): any
```
{:.declarationspec}
Returns a plain object that contains properties for all fields and their values.



## ![](/assets/icons/spec-method.svg).required() {#UIFormContext:required}
{:.spec}

```typescript
(name: keyof TData, description?: string): this
```
{:.declarationspec}
Add a validation test for a field with given name, which results in an error if the current value is undefined, null, false, or an empty string (but not the number '0'). The description is used for generating error messages.



## ![](/assets/icons/spec-method.svg).test() {#UIFormContext:test}
{:.spec}

```typescript
<K extends keyof TData>(name: K, f: (test: ValidationTest<TData[K]>) => void): this
```
{:.declarationspec}
Add a validation test for a field with given name, replacing the current test for the same name, if any. The function is called whenever the field value changes (unless prevented using the respective parameter for the [`set()`](#UIFormContext:set) method) and upon invocation of [`validate()`](#UIFormContext:validate) and [`validateAll()`](#UIFormContext:validateAll) methods. If the function throws an error, either directly or using the methods of the [`UIFormContext.ValidationTest`](./UIFormContext#UIFormContext:ValidationTest) instance (single parameter), the resulting error is added to the [`errors`](#UIFormContext:errors) object.



## ![](/assets/icons/spec-method.svg).validate() {#UIFormContext:validate}
{:.spec}

```typescript
(name: keyof TData): boolean
```
{:.declarationspec}
Validate the current value of a field with given name; updates the `error` object, but does _not_ emit a change event. To add validation tests, use the [`test()`](#UIFormContext:test) method.



## ![](/assets/icons/spec-method.svg).validateAll() {#UIFormContext:validateAll}
{:.spec}

```typescript
(): this
```
{:.declarationspec}
Validate the current values of all fields that have been set; updates the `error` object, but does _not_ emit a change event.



## ![](/assets/icons/spec-property.svg).errorCount {#UIFormContext:errorCount}
{:.spec}

```typescript
number
```
{:.declarationspec}
The number of errors that have been recorded after validation of one or more fields.

**Note:** This starts out at 0, and is only updated when values are set and/or validated. To retrieve the total number of errors for this instance, call [`validateAll()`](#UIFormContext:validateAll) before reading this property.



## ![](/assets/icons/spec-property.svg).valid {#UIFormContext:valid}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if there are currently no recorded errors.

**Note:** This **only** reflects validated fields; call [`validateAll()`](#UIFormContext:validateAll) before reading this property to ensure all fields are tested first.



## ![](/assets/icons/spec-property.svg).errors {#UIFormContext:errors}
{:.spec}

```typescript
{ [name in keyof TData]: Error; }
```
{:.declarationspec}
All errors that have been recorded after validating one or more fields; see also [`errorCount`](#UIFormContext:errorCount).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIFormContext:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIFormContext:getParentComponent}
{:.spec}

```typescript
<TParent extends Component = Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getBoundParentComponent() {#UIFormContext:getBoundParentComponent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getBoundParentComponent`](./Component#Component:getBoundParentComponent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIFormContext:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIFormContext:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIFormContext:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIFormContext:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIFormContext:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIFormContext:getManagedParent}
{:.spec}

```typescript
<TParent extends ManagedObject = ManagedObject>(ParentClass?: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIFormContext:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).emitChange() {#UIFormContext:emitChange}
{:.spec}

```typescript
(name?: string): void
```
{:.declarationspec}
Inherited from [`ManagedObject.emitChange`](./ManagedObject#ManagedObject:emitChange).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIFormContext:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIFormContext:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIFormContext:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIFormContext:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIFormContext:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIFormContext:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIFormContext:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIFormContext:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIFormContext:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-class.svg)UIFormContext.ValidationTest {#UIFormContext:ValidationTest}
{:.spec}

Encapsulates the current value for a specific form field, as passed to validation test functions; see [`UIFormContext.test()`](./UIFormContext#UIFormContext:test).

### Constructor
```typescript
<TValue>(name: string, value?: TValue): ValidationTest<TValue>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).name {#UIFormContext:ValidationTest:name}
{:.spec}

```typescript
string
```
{:.declarationspec}
The name of the form field being validated.



## ![](/assets/icons/spec-property.svg).value {#UIFormContext:ValidationTest:value}
{:.spec}

```typescript
TValue
```
{:.declarationspec}
The current form field value.



## ![](/assets/icons/spec-method.svg).required() {#UIFormContext:ValidationTest:required}
{:.spec}

```typescript
(description?: string): this
```
{:.declarationspec}
Throws an error when the current value is undefined, null, false, or an empty string (but not the number '0'); the resulting error refers to the field name, or given description.



## ![](/assets/icons/spec-method.svg).typeOf() {#UIFormContext:ValidationTest:typeOf}
{:.spec}

```typescript
(typeName: string): this
```
{:.declarationspec}
Throws an error when the type of the current field value (result of the `typeof` operator) does _not_ match given type.



## ![](/assets/icons/spec-method.svg).assert() {#UIFormContext:ValidationTest:assert}
{:.spec}

```typescript
(condition: boolean, errorMessage: string): this
```
{:.declarationspec}
Throws an error when the given parameter is false; the resulting error is an instance of [`AppException`](./AppException) with given error message.

