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