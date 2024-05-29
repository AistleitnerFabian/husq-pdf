// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/eslint"],
   devtools: { enabled: true },

   vite: {
      optimizeDeps: {
         esbuildOptions: {
            target: "esnext",
         },
      },
   },

   nitro: {
      preset: "bun",
      experimental: {
         openAPI: true,
      },
   },
});
