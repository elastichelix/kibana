<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-public](./kibana-plugin-core-public.md) &gt; [SimpleSavedObject](./kibana-plugin-core-public.simplesavedobject.md)

## SimpleSavedObject class

This class is a very simple wrapper for SavedObjects loaded from the server with the [SavedObjectsClient](./kibana-plugin-core-public.savedobjectsclient.md)<!-- -->.

It provides basic functionality for creating/saving/deleting saved objects, but doesn't include any type-specific implementations.

<b>Signature:</b>

```typescript
export declare class SimpleSavedObject<T = unknown> 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(client, { id, type, version, attributes, error, references, migrationVersion, coreMigrationVersion, namespaces, updated\_at: updatedAt, })](./kibana-plugin-core-public.simplesavedobject._constructor_.md) |  | Constructs a new instance of the <code>SimpleSavedObject</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_version?](./kibana-plugin-core-public.simplesavedobject._version.md) |  | SavedObjectType&lt;T&gt;\['version'\] | <i>(Optional)</i> |
|  [attributes](./kibana-plugin-core-public.simplesavedobject.attributes.md) |  | T |  |
|  [coreMigrationVersion](./kibana-plugin-core-public.simplesavedobject.coremigrationversion.md) |  | SavedObjectType&lt;T&gt;\['coreMigrationVersion'\] |  |
|  [error](./kibana-plugin-core-public.simplesavedobject.error.md) |  | SavedObjectType&lt;T&gt;\['error'\] |  |
|  [id](./kibana-plugin-core-public.simplesavedobject.id.md) |  | SavedObjectType&lt;T&gt;\['id'\] |  |
|  [migrationVersion](./kibana-plugin-core-public.simplesavedobject.migrationversion.md) |  | SavedObjectType&lt;T&gt;\['migrationVersion'\] |  |
|  [namespaces](./kibana-plugin-core-public.simplesavedobject.namespaces.md) |  | SavedObjectType&lt;T&gt;\['namespaces'\] | Space(s) that this saved object exists in. This attribute is not used for "global" saved object types which are registered with <code>namespaceType: 'agnostic'</code>. |
|  [references](./kibana-plugin-core-public.simplesavedobject.references.md) |  | SavedObjectType&lt;T&gt;\['references'\] |  |
|  [type](./kibana-plugin-core-public.simplesavedobject.type.md) |  | SavedObjectType&lt;T&gt;\['type'\] |  |
|  [updatedAt](./kibana-plugin-core-public.simplesavedobject.updatedat.md) |  | SavedObjectType&lt;T&gt;\['updated\_at'\] |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [delete()](./kibana-plugin-core-public.simplesavedobject.delete.md) |  |  |
|  [get(key)](./kibana-plugin-core-public.simplesavedobject.get.md) |  |  |
|  [has(key)](./kibana-plugin-core-public.simplesavedobject.has.md) |  |  |
|  [save()](./kibana-plugin-core-public.simplesavedobject.save.md) |  |  |
|  [set(key, value)](./kibana-plugin-core-public.simplesavedobject.set.md) |  |  |

