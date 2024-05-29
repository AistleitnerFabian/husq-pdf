<template>
   <pdf-page name="Elias" header-height="0mm">
      <h1 class="text-3xl">{{ pageData }}</h1>
   </pdf-page>

   <pdf-page name="Floro" header-height="0mm">
      <h1 class="text-3xl">{{ pageData }}</h1>
   </pdf-page>
</template>

<script setup lang="ts">
import { type Schema } from "~/types/documents/test";
import { usePageData } from "~/composables/usePageData";
import PdfPage from "~/components/pdf/PdfPage.vue";

const pageData = usePageData<Schema>();
</script>
