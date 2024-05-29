<template>
   <div class="break-before-page">
      <div class="content">
         <slot />
      </div>
   </div>
</template>

<script setup lang="ts">
const props = defineProps<{
   headerHeight: string;
   format?: "A4" | "A3" | "A5";
   orientation?: "portrait" | "landscape";
}>();

const format = props.format ?? "A4";
const orientation = props.orientation ?? "portrait";

const injectPrintStyles = () => {
   const styleElement = document.createElement("style");
   styleElement.innerHTML = `
    @media print {
      @page {
        size: ${format} ${orientation};
        margin: ${props.headerHeight};
      }
    }
  `;
   document.head.appendChild(styleElement);
};

onMounted(() => {
   injectPrintStyles();
});
</script>
