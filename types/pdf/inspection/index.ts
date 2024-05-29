 
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Schema {
  style: "default" | "new-york";
  typescript?: boolean;
  options?: [] | [[] | [string]];
  tailwind: {
    config: string;
    css: string;
    baseColor: string;
    cssVariables: boolean;
    [k: string]: unknown;
  };
  framework?: "nuxt" | "vite" | "laravel" | "astro";
  aliases: {
    utils: string;
    components: string;
    ui?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
