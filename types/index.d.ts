type SchemaObjectType = {
    type: "object";
    properties: Record<string, SchemaType>,
}

type SchemaArrayType = {
    type: "array";
    items: SchemaType[]
}

type SchemaPrimitiveType = {
    type: "string" | "integer"
}

type SchemaType = |
    SchemaObjectType |
    SchemaArrayType |
    SchemaPrimitiveType

type EditorSelection<T extends SchemaType> = {
    name: string;
    path: string;
    schema: T;
}

type EditorSelectionProvider = {
    selection: Ref<EditorSelection<SchemaType>>
    setSelection: (selection: EditorSelection<SchemaType>) => void
}