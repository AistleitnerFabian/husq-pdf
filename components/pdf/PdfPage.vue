<template>
   <div :class="cn('print', name)">
      <slot />
   </div>
</template>

<script setup lang="ts">
import { cn } from "~/lib/utils";

const props = defineProps<{
   name: string;
   headerHeight?: string;
   format?: "A4" | "A3" | "A5";
   orientation?: "portrait" | "landscape";
}>();

const name = props.name;
const format = props.format ?? "A4";
const orientation = props.orientation ?? "portrait";
const headerHeight = props.headerHeight ?? "0cm";

const injectPrintStyles = () => {
   const styleElement = document.createElement("style");
   styleElement.innerHTML = `
        .${name} {
          page: ${name};
        }

        @page ${name} {
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
