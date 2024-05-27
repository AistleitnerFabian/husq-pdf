// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  devtools: { enabled: true },

  nitro: {
    preset: 'bun',
    experimental: {
      openAPI: true
    }
  },
})