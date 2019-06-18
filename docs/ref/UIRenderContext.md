---
title: UIRenderContext
nav: |

  #### Declarations
  * [**class UIRenderContext**](#UIRenderContext)
  * [.emitRenderChange()](#UIRenderContext:emitRenderChange)
  * [.clear()](#UIRenderContext:clear)
  * [.getRenderCallback()](#UIRenderContext:getRenderCallback)

  #### Inherited
  * [.managedId](#UIRenderContext:managedId)
  * [.managedState](#UIRenderContext:managedState)
  * [.getReferenceCount()](#UIRenderContext:getReferenceCount)
  * [.getManagedReferrers()](#UIRenderContext:getManagedReferrers)
  * [.getManagedParent()](#UIRenderContext:getManagedParent)
  * [.emit()](#UIRenderContext:emit)
  * [.propagateChildEvents()](#UIRenderContext:propagateChildEvents)
  * [.activateManagedAsync()](#UIRenderContext:activateManagedAsync)
  * [.deactivateManagedAsync()](#UIRenderContext:deactivateManagedAsync)
  * [.destroyManagedAsync()](#UIRenderContext:destroyManagedAsync)
  * [.onManagedStateActivatingAsync()](#UIRenderContext:onManagedStateActivatingAsync)
  * [.onManagedStateActiveAsync()](#UIRenderContext:onManagedStateActiveAsync)
  * [.onManagedStateDeactivatingAsync()](#UIRenderContext:onManagedStateDeactivatingAsync)
  * [.onManagedStateInactiveAsync()](#UIRenderContext:onManagedStateInactiveAsync)
  * [.onManagedStateDestroyingAsync()](#UIRenderContext:onManagedStateDestroyingAsync)

  #### Namespaced
  * [**UIRenderContext.RenderCallback**](#UIRenderContext:RenderCallback)
  * [**UIRenderContext.Output**](#UIRenderContext:Output)
  * [.source](#UIRenderContext:Output:source)
  * [.element](#UIRenderContext:Output:element)
  * [.placement](#UIRenderContext:Output:placement)
  * [.placementRef](#UIRenderContext:Output:placementRef)
  * [.modalShadeOpacity](#UIRenderContext:Output:modalShadeOpacity)
  * [.modalShadeClickToClose](#UIRenderContext:Output:modalShadeClickToClose)
  * [.detach](#UIRenderContext:Output:detach)
layout: ref_doc
---

## ![](/assets/icons/spec-class.svg)class UIRenderContext <span class="spec_tag">abstract</span> {#UIRenderContext}
{:.spec}


<pre markdown="span"><code markdown="span">extends [`ManagedObject`](./ManagedObject)</code></pre>
{:.declarationspec}

Base application render context, to be extended with platform specific render implementation.

### Constructor
```typescript
(): UIRenderContext
```
{:.declarationspec}



## ![](/assets/icons/spec-method.svg).emitRenderChange() {#UIRenderContext:emitRenderChange}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Emit a change event for this context, e.g. when the viewport orientation or current locale changes. This will trigger all views to re-render if needed.



## ![](/assets/icons/spec-method.svg).clear() <span class="spec_tag">abstract</span> {#UIRenderContext:clear}
{:.spec}

```typescript
(): void
```
{:.declarationspec}
Remove all rendered output from the screen.



## ![](/assets/icons/spec-method.svg).getRenderCallback() <span class="spec_tag">abstract</span> {#UIRenderContext:getRenderCallback}
{:.spec}

```typescript
(): RenderCallback<Output<never, never>>
```
{:.declarationspec}
Returns a callback that can be used to render an output element to the screen asynchronously.



## ![](/assets/icons/spec-property.svg).managedId {#UIRenderContext:managedId}
{:.spec}

```typescript
number
```
{:.declarationspec}
Inherited from [`ManagedObject.managedId`](./ManagedObject#ManagedObject:managedId).



## ![](/assets/icons/spec-property.svg).managedState {#UIRenderContext:managedState}
{:.spec}

```typescript
ManagedState
```
{:.declarationspec}
Inherited from [`ManagedObject.managedState`](./ManagedObject#ManagedObject:managedState).



## ![](/assets/icons/spec-method.svg).getReferenceCount() <span class="spec_tag">protected</span> {#UIRenderContext:getReferenceCount}
{:.spec}

```typescript
(): number
```
{:.declarationspec}
Inherited from [`ManagedObject.getReferenceCount`](./ManagedObject#ManagedObject:getReferenceCount).



## ![](/assets/icons/spec-method.svg).getManagedReferrers() <span class="spec_tag">protected</span> {#UIRenderContext:getManagedReferrers}
{:.spec}

```typescript
(): ManagedObject[]
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedReferrers`](./ManagedObject#ManagedObject:getManagedReferrers).



## ![](/assets/icons/spec-method.svg).getManagedParent() <span class="spec_tag">protected</span> {#UIRenderContext:getManagedParent}
{:.spec}

```typescript
[1]. (): ManagedObject
[2]. <TParent extends ManagedObject>(ParentClass: ManagedObjectConstructor<TParent>): TParent
```
{:.declarationspec}
Inherited from [`ManagedObject.getManagedParent`](./ManagedObject#ManagedObject:getManagedParent).



## ![](/assets/icons/spec-method.svg).emit() {#UIRenderContext:emit}
{:.spec}

```typescript
<TEvent extends ManagedEvent = ManagedEvent, TConstructorArgs extends any[] = any[]>(e: string | TEvent | (new (...args: TConstructorArgs) => TEvent), ...constructorArgs: TConstructorArgs): this
```
{:.declarationspec}
Inherited from [`ManagedObject.emit`](./ManagedObject#ManagedObject:emit).



## ![](/assets/icons/spec-method.svg).propagateChildEvents() <span class="spec_tag">protected</span> {#UIRenderContext:propagateChildEvents}
{:.spec}

```typescript
[1]. (f?: (this: this, e: ManagedEvent, propertyName: string) => void | ManagedEvent | ManagedEvent[]): this
[2]. (...types: (ManagedEvent | (new (...args: any[]) => ManagedEvent))[]): this
```
{:.declarationspec}
Inherited from [`ManagedObject.propagateChildEvents`](./ManagedObject#ManagedObject:propagateChildEvents).



## ![](/assets/icons/spec-method.svg).activateManagedAsync() <span class="spec_tag">protected</span> {#UIRenderContext:activateManagedAsync}
{:.spec}

```typescript
(): Promise<any>
```
{:.declarationspec}
Inherited from [`ManagedObject.activateManagedAsync`](./ManagedObject#ManagedObject:activateManagedAsync).



## ![](/assets/icons/spec-method.svg).deactivateManagedAsync() <span class="spec_tag">protected</span> {#UIRenderContext:deactivateManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.deactivateManagedAsync`](./ManagedObject#ManagedObject:deactivateManagedAsync).



## ![](/assets/icons/spec-method.svg).destroyManagedAsync() <span class="spec_tag">protected</span> {#UIRenderContext:destroyManagedAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.destroyManagedAsync`](./ManagedObject#ManagedObject:destroyManagedAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActivatingAsync() <span class="spec_tag">protected</span> {#UIRenderContext:onManagedStateActivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActivatingAsync`](./ManagedObject#ManagedObject:onManagedStateActivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateActiveAsync() <span class="spec_tag">protected</span> {#UIRenderContext:onManagedStateActiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateActiveAsync`](./ManagedObject#ManagedObject:onManagedStateActiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDeactivatingAsync() <span class="spec_tag">protected</span> {#UIRenderContext:onManagedStateDeactivatingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDeactivatingAsync`](./ManagedObject#ManagedObject:onManagedStateDeactivatingAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateInactiveAsync() <span class="spec_tag">protected</span> {#UIRenderContext:onManagedStateInactiveAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateInactiveAsync`](./ManagedObject#ManagedObject:onManagedStateInactiveAsync).



## ![](/assets/icons/spec-method.svg).onManagedStateDestroyingAsync() <span class="spec_tag">protected</span> {#UIRenderContext:onManagedStateDestroyingAsync}
{:.spec}

```typescript
(): Promise<void>
```
{:.declarationspec}
Inherited from [`ManagedObject.onManagedStateDestroyingAsync`](./ManagedObject#ManagedObject:onManagedStateDestroyingAsync).





---

## ![](/assets/icons/spec-interface.svg)UIRenderContext.RenderCallback {#UIRenderContext:RenderCallback}
{:.spec}

Callback function that accepts rendered output and returns a next callback.



---

## ![](/assets/icons/spec-class.svg)UIRenderContext.Output {#UIRenderContext:Output}
{:.spec}

Encapsulates a rendered output element, to be placed on screen by a platform specific `UIRenderContext` instance.

### Constructor
```typescript
<TComponent extends UIRenderable = UIRenderable, TElement = any>(source: TComponent, element: TElement, placement?: UIRenderPlacement, reference?: UIComponent): Output<TComponent, TElement>
```
{:.declarationspec}



## ![](/assets/icons/spec-property.svg).source {#UIRenderContext:Output:source}
{:.spec}

```typescript
TComponent
```
{:.declarationspec}
The rendered component.



## ![](/assets/icons/spec-property.svg).element {#UIRenderContext:Output:element}
{:.spec}

```typescript
TElement
```
{:.declarationspec}
The rendered element, as a platform-dependent object or handle.



## ![](/assets/icons/spec-property.svg).placement {#UIRenderContext:Output:placement}
{:.spec}

```typescript
UIRenderPlacement
```
{:.declarationspec}
Placement mode, used by `UIRenderContext` for root output elements.



## ![](/assets/icons/spec-property.svg).placementRef {#UIRenderContext:Output:placementRef}
{:.spec}

```typescript
UIComponent
```
{:.declarationspec}
Placement reference for dropdowns and popovers.



## ![](/assets/icons/spec-property.svg).modalShadeOpacity {#UIRenderContext:Output:modalShadeOpacity}
{:.spec}

```typescript
number
```
{:.declarationspec}
Modal shade opacity behind content (0-1).



## ![](/assets/icons/spec-property.svg).modalShadeClickToClose {#UIRenderContext:Output:modalShadeClickToClose}
{:.spec}

```typescript
boolean
```
{:.declarationspec}
True if clicking on the modal shade area should emit `CloseModal` on the modal view component.



## ![](/assets/icons/spec-property.svg).detach {#UIRenderContext:Output:detach}
{:.spec}

```typescript
() => void
```
{:.declarationspec}
Handler function, added by a previous parent renderer (if any), to detach the visible element from the previous parent's tree structure; any other renderer should call this method before adding the element to a new parent.

