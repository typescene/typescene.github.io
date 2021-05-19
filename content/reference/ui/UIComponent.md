# UIComponent:pageintro
This is the base class of all UI (view) components.

---
# UIComponent
> __Note:__ This class should not be instantiated on its own. Instead, use one of the predefined UI components such as `UIButton` and `UILabel`, or create your own view component using the `ViewComponent` class.

[**See also:** Concepts &gt; Views](/docs/concepts/views){:.block_link.doc}

---
# UIBeforeRenderEvent
> __Note:__ The `UIBeforeRenderEvent` is emitted only once, __before__ a component is rendered the first time, and can be observed using an `onBeforeRender` preset handler property. By contrast, a plain `UIComponentEvent` is emitted __each time after__ a UI component is rendered, i.e. whenever a change occurs to its display properties (or its child components'), which can be observed using an `onRendered` preset handler property.

---
# UIComponentEvent
> __Note:__ To emit this event on a UI component, use the `UIComponent.propagateComponentEvent` method.

---
# UIFocusRequestEvent
> __Note:__ This event is emitted by the `UIComponent.requestFocus` method, and should not be emitted directly by the application.
