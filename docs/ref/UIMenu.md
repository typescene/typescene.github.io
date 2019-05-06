---
title: UIMenu
nav: |

  #### Declarations
  * [**class UIMenu**](#UIMenu)
  * [.builder](#UIMenu:builder)
  * [.render()](#UIMenu:render)
  * [.menu](#UIMenu:menu)
  * [.gravity](#UIMenu:gravity)
  * [.options](#UIMenu:options)
  * [.selected](#UIMenu:selected)

  #### Inherited
  * [.isPresetComponent()](#UIMenu:isPresetComponent)
  * [.getParentComponent()](#UIMenu:getParentComponent)
  * [.getCompositeParent()](#UIMenu:getCompositeParent)
  * [.propagateComponentEvent()](#UIMenu:propagateComponentEvent)
  * [.managedId](#UIMenu:managedId)
  * [.managedState](#UIMenu:managedState)
  * [.getReferenceCount()](#UIMenu:getReferenceCount)
  * [.getManagedReferrers()](#UIMenu:getManagedReferrers)
  * [.getManagedParent()](#UIMenu:getManagedParent)
  * [.emit()](#UIMenu:emit)
  * [.propagateChildEvents()](#UIMenu:propagateChildEvents)
  * [.activateManagedAsync()](#UIMenu:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIMenu:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIMenu:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIMenu:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIMenu:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIMenu:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIMenu:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIMenu:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIMenu.Presets**](#UIMenu:Presets)
  * [.options](#UIMenu:Presets:options)
  * [.gravity](#UIMenu:Presets:gravity)
  * [.onBuild](#UIMenu:Presets:onBuild)
  * [.onSelectMenuItem](#UIMenu:Presets:onSelectMenuItem)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIMenu {#UIMenu}
{:.spec}

Represents a menu that can be displayed on screen. The menu itself is built up dynamically using a platform dependent builder class.

### Constructor
```typescript
(): UIMenu
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).builder {#UIMenu:builder}
{:.spec}

```typescript
UIMenuBuilder
```
{:.declarationspec}
Menu builder, can be used to build up the menu before it is displayed.



## ![](/assets/icons/spec-method.svg).render() {#UIMenu:render}
{:.spec}

```typescript
(callback: RenderCallback<Output<UIRenderable, any>>): void
```
{:.declarationspec}
Build the current menu and render it using [`UIMenu.builder`](./UIMenu#UIMenu:builder).



## ![](/assets/icons/spec-property.svg).menu {#UIMenu:menu}
{:.spec}

```typescript
UIRenderable
```
{:.declarationspec}
The last menu that was built, as a child object.



## ![](/assets/icons/spec-property.svg).gravity {#UIMenu:gravity}
{:.spec}

```typescript
"start" | "end" | "stretch"
```
{:.declarationspec}
Menu gravity in relation to reference component (start/stretch/end).



## ![](/assets/icons/spec-property.svg).options {#UIMenu:options}
{:.spec}

```typescript
{ key: string; text: Stringable; }[]
```
{:.declarationspec}
List of initial menu options; for advanced menus use `onBuild` to build the menu dynamically.



## ![](/assets/icons/spec-property.svg).selected {#UIMenu:selected}
{:.spec}

```typescript
string
```
{:.declarationspec}
The key of the menu item that was last selected, if any.



## ![](/assets/icons/spec-method.svg).isPresetComponent() <span class="spec_tag">protected</span> {#UIMenu:isPresetComponent}
{:.spec}

```typescript
(): boolean
```
{:.declarationspec}
Inherited from [`Component.isPresetComponent`](./Component#Component:isPresetComponent).



## ![](/assets/icons/spec-method.svg).getParentComponent() {#UIMenu:getParentComponent}
{:.spec}

```typescript
[1]. (): Component
[2]. <TParent extends Component>(ParentClass: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getParentComponent`](./Component#Component:getParentComponent).



## ![](/assets/icons/spec-method.svg).getCompositeParent() {#UIMenu:getCompositeParent}
{:.spec}

```typescript
<TParent extends Component>(ParentClass?: ComponentConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`Component.getCompositeParent`](./Component#Component:getCompositeParent).



## ![](/assets/icons/spec-method.svg).propagateComponentEvent() {#UIMenu:propagateComponentEvent}
{:.spec}

```typescript
(name: string, inner?: ManagedEvent): void
```
{:.declarationspec}
Inherited from [`Component.propagateComponentEvent`](./Component#Component:propagateComponentEvent).



## ![](/assets/icons/spec-property.svg).managedId {#UIMenu:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIMenu:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIMenu:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIMenu:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIMenu:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIMenu:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIMenu:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIMenu:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIMenu:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIMenu:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIMenu:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIMenu:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIMenu:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIMenu:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIMenu:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIMenu.Presets {#UIMenu:Presets}
{:.spec}

UIMenu presets type, for use with [`Component.with`](./Component#Component:with).



## ![](/assets/icons/spec-property.svg).options {#UIMenu:Presets:options}
{:.spec}

```typescript
{ key: string; text: string; }[]
```
{:.declarationspec}
List of menu options; for advanced menus use `onBuild` to build the menu dynamically.



## ![](/assets/icons/spec-property.svg).gravity {#UIMenu:Presets:gravity}
{:.spec}

```typescript
"start" | "end" | "stretch"
```
{:.declarationspec}
Menu gravity in relation to reference component (start/stretch/end).



## ![](/assets/icons/spec-property.svg).onBuild {#UIMenu:Presets:onBuild}
{:.spec}

```typescript
ComponentEventHandler<UIMenu, ComponentEvent>
```
{:.declarationspec}
Event handler that is invoked every time just before the menu is rendered.



## ![](/assets/icons/spec-property.svg).onSelectMenuItem {#UIMenu:Presets:onSelectMenuItem}
{:.spec}

```typescript
ComponentEventHandler<UIMenu, UIMenuItemSelectedEvent>
```
{:.declarationspec}
Event handler that is invoked after a menu item has been picked.

