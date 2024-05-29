<template>
   <div class="document">
      <div class="document-header">
         <slot name="header" />
      </div>

      <div class="document-footer">
         <slot name="footer" />
      </div>

      <table class="size-full">
         <thead>
            <tr>
               <td>
                  <div class="document-header-space" />
               </td>
            </tr>
         </thead>

         <tbody>
            <tr>
               <td>
                  <slot name="default" />
               </td>
            </tr>
         </tbody>

         <tfoot>
            <tr>
               <td>
                  <div class="document-footer-space" />
               </td>
            </tr>
         </tfoot>
      </table>
   </div>
</template>

<script setup lang="ts">
const props = defineProps<{
   headerHeight?: string;
   footerHeight?: string;
   margin?: string;
   format?: "A4" | "A3" | "A5";
   orientation?: "portrait" | "landscape";
}>();

const injectPrintStyles = () => {
   const styleElement = document.createElement("style");
   styleElement.innerHTML = `
        :root {
          --pdf-margin: ${props.margin};
          --pdf-header-height: ${props.headerHeight};
          --pdf-format: ${props.format};
          --pdf-orientation: ${props.orientation};
          --pdf-footer-height: ${props.footerHeight};
        }
  `;
   document.head.appendChild(styleElement);
};
onMounted(() => {
   injectPrintStyles();
});
</script>

<style scoped>
.document {
   print-color-adjust: exact;
}
.document-header,
.document-header-space {
   height: var(--pdf-header-height);
}
.document-footer,
.document-footer-space {
   height: var(--pdf-footer-height);
}
.document-header {
   position: fixed;
   top: 0;
   width: 100%;
}
.document-footer {
   position: fixed;
   bottom: 0;
   width: 100%;
}
</style>
