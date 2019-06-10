# ManagedReference:pageintro
Managed reference objects encapsulate references to other managed objects.

---
# ManagedReference:top
### Managed objects
This class is part of a group of _managed object_ classes. See [Understanding components](/docs/guides/components) for details.

#### See also {#see_also}
`ManagedList`, `ManagedMap`, `ManagedObject`.

---
#ManagedReference

This class can be used to _encapsulate_ references to managed objects, not as a property of another managed object but as a stand-alone 'reference object'.

#### Child references

If a managed object property that is decorated with `@managedChild` gets assigned a `ManagedReference` instance, the parent-child relationship will extend to the target of this `ManagedReference` instance. In other words, the target of a `ManagedReference` that is itself a managed child object, will become a managed child itself.

In this case, changing the target of the `ManagedReference` object will destroy the previously referenced object.
