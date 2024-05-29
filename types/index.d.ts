type SchemaObjectType = {
   type: "object";
   description?: string;
   properties: Record<string, SchemaType>;
};

type SchemaArrayType = {
   type: "array";
   description?: string;
   items: SchemaType[];
};

type SchemaPrimitiveType = {
   type: "string" | "integer";
   description?: string;
};

type SchemaType = SchemaObjectType | SchemaArrayType | SchemaPrimitiveType;

type EditorSelection<T extends SchemaType> = {
   name: string;
   path: string;
   schema: T;
};

type EditorSelectionProvider = {
   selection: Ref<EditorSelection<SchemaType>>;
   setSelection: (selection: EditorSelection<SchemaType>) => void;
};
