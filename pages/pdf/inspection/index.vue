<template>
  <document>
    <template #header>
      <pdf-header left="Left" center="Mid" right="Right"/>
    </template>
    <pdf-page>
      {{pageData()}}
      <h1 class="text-3xl">Firstname: {{pageData().firstName}}</h1>
    </pdf-page>
    <pdf-page>
      <h1 class="text-3xl">Lastname: {{pageData().firstName}}</h1>
    </pdf-page>
    <pdf-page>
      <h1 class="text-3xl">Age: {{pageData().age}}</h1>
    </pdf-page>
    <template #footer>
      <pdf-footer left="Left" center="Mid" right="Right"/>
    </template>
  </document>
</template>

<script setup lang="ts">
import {type Schema} from "@/types/pdf/inspection"
import {usePageData} from "~/composables/usePageData";
import Document from "~/components/pdf/Document.vue";

let pageData = () => usePageData<Schema>()
</script>