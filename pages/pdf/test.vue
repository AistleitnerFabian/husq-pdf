<template>

</template>

<script setup lang="ts">
  import { type Schema } from "@/types/pdf/test"
  import {usePageData} from "@/composeables/usePageData";
  let pageData = () => usePageData<Schema>()
</script>