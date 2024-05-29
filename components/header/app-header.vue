<template>
   <div class="flex h-12 w-full items-center justify-between bg-background">
      <div class="flex items-center gap-2">
         <div class="flex size-8 items-center justify-center rounded border">
            <span class="-translate-y-0.5 text-primary">qp</span>
         </div>
         <p>Husq.pdf</p>
      </div>

      <DocumentSelect />
   </div>
</template>

<script setup lang="ts">
import DocumentSelect from "~/components/header/document-select.vue";
</script>
