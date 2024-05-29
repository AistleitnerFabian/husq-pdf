<template>
  <div class="h-12 bg-background flex w-full items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="border rounded size-8 flex justify-center items-center">
        <span class="-translate-y-0.5 text-primary">qp</span>
      </div>
      <p>Husq.pdf</p>
    </div>

    <DocumentSelect/>
  </div>
</template>

<script setup lang="ts">

import DocumentSelect from "~/components/header/document-select.vue";
</script>