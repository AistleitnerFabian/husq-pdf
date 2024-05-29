<template>
   <pdf-document>
      <pdf-page header-height="0mm">
         <h1 class="text-3xl">Elias</h1>
      </pdf-page>

      <pdf-page header-height="0mm">
         <h1 class="text-3xl">Florian</h1>
      </pdf-page>

      <pdf-page header-height="0mm">
         <h1 class="text-3xl">Fabian</h1>
      </pdf-page>
   </pdf-document>
</template>

<script setup lang="ts">
import { type Schema } from "~/types/documents/test";
import { usePageData } from "~/composables/usePageData";
import PdfPage from "~/components/pdf/PdfPage.vue";

const pageData = usePageData<Schema>();
</script>
