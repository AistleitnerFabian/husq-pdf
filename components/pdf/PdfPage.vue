<template>
   <div class="break-before-page">
      <slot />
   </div>
</template>

<script setup lang="ts">
const props = defineProps<{
   headerHeight?: string;
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
          margin-top: ${headerHeight};
        }
  `;
   document.head.appendChild(styleElement);
};

onMounted(() => {
   injectPrintStyles();
});
</script>
