<template>
  <pdf-page>
    <h1 class="text-3xl">Firstname: {{pageData().firstName}}</h1>
    <h1 class="text-3xl">Lastname: {{pageData().firstName}}</h1>
    <h1 class="text-3xl">Age: {{pageData().age}}</h1>
  </pdf-page>

  <pdf-page>
    <h1 class="text-3xl">Firstname: {{pageData().firstName}}</h1>
    <h1 class="text-3xl">Lastname: {{pageData().firstName}}</h1>
    <h1 class="text-3xl">Age: {{pageData().age}}</h1>
  </pdf-page>
</template>

<script setup lang="ts">
  import { type Schema } from "@/types/pdf/inspection"
  import {usePageData} from "@/composeables/usePageData";
  let pageData = () => usePageData<Schema>()
</script>