<template>
   <pdf-document margin="1cm" header-height="1cm" footer-height="1.5cm">
      <template #header>
         <pdf-header>
           <template v-slot:left><span>Left</span></template>
           <template v-slot:center><span>Center</span></template>
           <template v-slot:right><span>Right</span></template>
         </pdf-header>
      </template>

      <pdf-page>
         <h1 v-for="index in 100" :key="index" class="text-4xl">
            Hello world {{ index }}
         </h1>
      </pdf-page>

      <template #footer>
         <pdf-footer>
           <template v-slot:left><span>Left</span></template>
           <template v-slot:center><span>Center</span></template>
           <template v-slot:right><span>Right</span></template>
         </pdf-footer>
      </template>
   </pdf-document>
</template>

<script setup lang="ts">
import { type Schema } from "~/types/documents/test";
import { usePageData } from "~/composables/usePageData";
import PdfPage from "~/components/pdf/PdfPage.vue";

const pageData = usePageData<Schema>();
</script>
