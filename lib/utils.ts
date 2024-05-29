import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function op(path: string, name: string) {
   return path ? `${path}.${name}` : name;
}

export function ap(path: string, index: number) {
   return `${path}[${index}]`;
}

export function separateFields(schema: SchemaObjectType) {
   const primitives: Record<string, SchemaType> = {};
   const nested: Record<string, SchemaType> = {};

   for (const key in schema.properties) {
      const property = schema.properties[key];
      if (property.type === "object" || property.type === "array") {
         nested[key] = property;
      } else {
         primitives[key] = property;
      }
   }

   return {
      primitives,
      nested,
   };
}

export function pathObj(path: string, obj: any) {
   const dotnot = path.replace(/\[(\d+)\]/g, ".$1");
   const keys = dotnot.split(".");

   let current = obj;
   for (const key of keys) {
      const keyTmp = isNaN(Number(key)) ? key : Number(key);
      if (keyTmp in current) {
         current = current[keyTmp];
      } else {
         return undefined;
      }
   }

   return current;
}
