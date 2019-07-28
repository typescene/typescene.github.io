---
title: UIFormContextController
nav: |

  #### Declarations
  * [**class UIFormContextController**](#UIFormContextController)
  * [.formContext](#UIFormContextController:formContext)

  #### Inherited
  * [.renderContext](#UIFormContextController:renderContext)
  * [.content](#UIFormContextController:content)
  * [.render()](#UIFormContextController:render)
  * [.isPresetComponent()](#UIFormContextController:isPresetComponent)
  * [.getParentComponent()](#UIFormContextController:getParentComponent)
  * [.getCompositeParent()](#UIFormContextController:getCompositeParent)
  * [.propagateComponentEvent()](#UIFormContextController:propagateComponentEvent)
  * [.managedId](#UIFormContextController:managedId)
  * [.managedState](#UIFormContextController:managedState)
  * [.getReferenceCount()](#UIFormContextController:getReferenceCount)
  * [.getManagedReferrers()](#UIFormContextController:getManagedReferrers)
  * [.getManagedParent()](#UIFormContextController:getManagedParent)
  * [.emit()](#UIFormContextController:emit)
  * [.propagateChildEvents()](#UIFormContextController:propagateChildEvents)
  * [.activateManagedAsync()](#UIFormContextController:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIFormContextController:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIFormContextController:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIFormContextController:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIFormContextController:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIFormContextController:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIFormContextController:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIFormContextController:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIFormContextController.Presets**](#UIFormContextController:Presets)
  * [.formContext](#UIFormContextController:Presets:formContext)
  * [.onFormContextChange](#UIFormContextController:Presets:onFormContextChange)
  * [.onEnterKeyPress](#UIFormContextController:Presets:onEnterKeyPress)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIFormContextController {#UIFormContextController}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`UIRenderableController`](./UIRenderableController)</code></pre>
{:.declarationspec}

Renderable wrapper that injects a form context record, to be used by (nested) child input controls.

**Note:** This wrapper does not group content in a cell; see also [`UIForm`](./UIForm).

> __Note:__ Preset constructors for this class (see example) only accept __one__ child component. To wrap multiple components, use multiple `UIFormContextController` constructors, or wrap child components in a [`UICell`](./UICell).

### Form Context
The form context record is used by input components (e.g. text field, toggle/checkbox, and custom input components) to synchronize values displayed with the properties of any managed object.

* Input components have a `name` property that's used to identify the form context record property.
* The form context record itself is provided by the `UIFormContextController` component, usually through a binding on its [`formContext`](#UIFormContextController:formContext) property (see example below).
* The form context record must already be created — this might be an instance of [`ManagedRecord`](./ManagedRecord) or a custom class.
* When the input value changes, the property is updated along with the new value.
* When the form context record is set, or when a change event is emitted on the form context record, the displayed input value is updated. Note that simply changing the property value is not enough to trigger an update since properties themselves are not observable.

#### Example (preset)
```typescript
UIFormContextController.with(
  { formContext: bind("inputContext") },
  UICell.with(
    UIRow.with(
      UITextField.withName("firstName", "First name"),
      UITextField.withName("lastName", "Last name")
    ),
    UIRow.with(
      UITextField.withName("country", "Country")
    )
  )
)
```


### Constructor
```typescript
(content?: UIRenderable): UIFormContextController
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).formContext {#UIFormContextController:formContext}
{:.spec}

```typescript
ManagedRecord
```
{:.declarationspec}
Form state context; defaults to an empty managed record.



## ![](/assets/icons/spec-property.svg).renderContext {#UIFormContextController:renderContext}
{:.spec}

```typescript
UIRenderContext
```
{:.declarationspec}
Inherited from [`UIRenderableController.renderContext`](./UIRenderableController#UIRenderableController:renderContext).



## ![](/assets/icons/spec-property.svg).content {#UIFormContextController:content}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
Inherited from [`UIRenderableController.content`](./UIRenderableController#UIRenderableController:content).



## ![](/assets/icons/spec-method.svg).render() {#UIFormContextController:render}
{:.spec}

```typescript
(callback?: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Inherited from [`UIRenderableController.render`](./UIRenderableController#UIRenderableController:render).



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIFormContextController:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIFormContextController:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIFormContextController:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIFormContextController:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIFormContextController:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIFormContextController:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIFormContextController:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIFormContextController:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIFormContextController:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIFormContextController:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIFormContextController:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIFormContextController:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIFormContextController:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIFormContextController:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIFormContextController:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIFormContextController:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIFormContextController:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIFormContextController:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIFormContextController:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIFormContextController.Presets {#UIFormContextController:Presets}
{:.spec}

UIFormStateController presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).formContext {#UIFormContextController:Presets:formContext}
{:.spec}

```typescript
ManagedRecord
```
{:.declarationspec}
Form state object; must be a (binding to a) managed record, see [`ManagedRecord`](./ManagedRecord).



## ![](/assets/icons/spec-property.svg).onFormContextChange {#UIFormContextController:Presets:onFormContextChange}
{:.spec}

```typescript
ComponentEventHandler<UIFormContextController, ComponentEvent>
```
{:.declarationspec}
Event handler for any change to the form state.



## ![](/assets/icons/spec-property.svg).onEnterKeyPress {#UIFormContextController:Presets:onEnterKeyPress}
{:.spec}

```typescript
ComponentEventHandler<UIFormContextController, ComponentEvent>
```
{:.declarationspec}
Event handler for Enter key presses (ignoring Enter key presses on multiline text fields and buttons, which do not emit the EnterKeyPress event).

