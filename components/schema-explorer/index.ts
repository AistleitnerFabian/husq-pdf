export type SchemaExplorerProps<T extends SchemaType> = {
    schema: T;
    name: string;
    level: number;
    path: string;
}