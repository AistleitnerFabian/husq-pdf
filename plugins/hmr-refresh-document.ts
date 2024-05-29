export default defineNuxtPlugin((nuxtApp) => {
   if (process.client && import.meta.hot) {
      import.meta.hot.on("vite:beforeUpdate", (data) => {
         refreshNuxtData("pdf-preview").then(() => {});
      });
   }
});
