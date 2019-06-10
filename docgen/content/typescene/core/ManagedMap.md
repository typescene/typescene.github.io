# ManagedMap:pageintro
Managed maps contain indexed sets of references to other managed objects.

---
# ManagedMap:top
### Managed objects
This class is part of a group of _managed object_ classes. See [Understanding components](/docs/guides/components) for details.

#### See also {#see_also}
`ManagedList`, `ManagedObject`, `ManagedReference`.

---
# ManagedMap

#### Child references

If a managed object property that is decorated with `@managedChild` gets assigned a `ManagedMap` instance, the parent-child relationship will extend to the items in this `ManagedMap`. In other words, the items in a `ManagedMap` that is itself a managed child object, will become managed children of the map itself.

In this case, removing objects from the `ManagedMap` object will destroy these objects. Adding objects to the `ManagedMap` will 'move' them from their current parent, if any.
