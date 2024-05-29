<template>
   <div :class="name">
      <slot />
   </div>
</template>

<script setup lang="ts">
const props = defineProps<{
   name: string;
   headerHeight: string;
   format?: "A4" | "A3" | "A5";
   orientation?: "portrait" | "landscape";
}>();

const name = props.name;
const format = props.format ?? "A4";
const orientation = props.orientation ?? "portrait";

const injectPrintStyles = () => {
   const styleElement = document.createElement("style");
   styleElement.innerHTML = `
      @media print {
        @page ${name} {
          size: ${format} ${orientation};
          margin-top: ${props.headerHeight};
          page-break-after: avoid !important;
          page-break-before: avoid !important;
          page-break-inside: avoid !important;
        }
      }

      .${name} {
        page: ${name};
      }
  `;
   document.head.appendChild(styleElement);
};

onMounted(() => {
   injectPrintStyles();
});
</script>
