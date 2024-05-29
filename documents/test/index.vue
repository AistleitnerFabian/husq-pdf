<template>
   <pdf-page name="Elias" header-height="0mm">
      <h1 class="text-3xl">Elias</h1>
   </pdf-page>

   <pdf-page name="Floro" header-height="0mm">
      <h1 class="text-3xl">Florian</h1>
   </pdf-page>

   <pdf-page name="Fabian" header-height="0mm">
      <h1 class="text-3xl">Fabian</h1>
   </pdf-page>
</template>

<script setup lang="ts">
import { type Schema } from "~/types/documents/test";
import { usePageData } from "~/composables/usePageData";
import PdfPage from "~/components/pdf/PdfPage.vue";

const pageData = usePageData<Schema>();
</script>
