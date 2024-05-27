<template>
  <div >
    My name is {{ pageData().name }} and i am {{ pageData().age }} years old
  </div>
</template>

<script setup lang="ts">
  import { type Schema } from "@/types/pdf/test"
  import {usePageData} from "@/composeables/usePageData";
  let pageData = () => usePageData<Schema>()
</script>