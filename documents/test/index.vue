<template>
   <pdf-document margin="1cm" header-height="1cm" footer-height="1.5cm">
      <template #header>
         <pdf-header>this is my header</pdf-header>
      </template>

      <pdf-page>
         <h1 v-for="index in 100" :key="index" class="text-4xl">
            Hello world {{ index }}
         </h1>
      </pdf-page>

      <template #footer>
         <pdf-footer>this is my footer</pdf-footer>
      </template>
   </pdf-document>
</template>

<script setup lang="ts">
import { type Schema } from "~/types/documents/test";
import { usePageData } from "~/composables/usePageData";
import PdfPage from "~/components/pdf/PdfPage.vue";

const pageData = usePageData<Schema>();
</script>
