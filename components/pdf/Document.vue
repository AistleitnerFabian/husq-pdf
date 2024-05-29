<template>
   <div id="print-content">
      <div class="header">
         <slot name="header" />
      </div>
      <div class="content">
         <slot />
      </div>
      <div class="footer">
         <slot name="footer" />
      </div>
   </div>
</template>

<script setup lang="ts">
const props = defineProps<{
   headerHeight?: string;
   margin?: string;
   format?: "A4" | "A3" | "A5";
   orientation?: "portrait" | "landscape";
}>();

const format = props.format ?? "A4";
const orientation = props.orientation ?? "portrait";
const headerHeight = props.headerHeight ?? "0cm";

const injectPrintStyles = () => {
   const styleElement = document.createElement("style");
   styleElement.innerHTML = `
        @page {
          size: ${format} ${orientation};
        }
  `;
   document.head.appendChild(styleElement);
};
onMounted(() => {
   injectPrintStyles();
});
</script>

<style scoped>
@media print {
   .header {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
   }
}

.content {
   margin-top: v-bind(headerHeight);
}

@media print {
   .footer {
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
   }
}
</style>
