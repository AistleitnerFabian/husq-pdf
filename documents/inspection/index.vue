<template>
   <document>
      <template #header>
         <pdf-header left="Left" center="Mid" right="Right" />
      </template>
      <pdf-page header-height="200">
         <div class="mt-20">
            {{ pageData().framework }}
            <h1 class="text-3xl">{{ pageData().style }}</h1>
         </div>
      </pdf-page>
      <pdf-page>
         <h1 class="text-3xl">Lastname: {{ pageData().firstName }}</h1>
      </pdf-page>
      <pdf-page>
         <h1 class="text-3xl">Age: {{ pageData().age }}</h1>
      </pdf-page>
      <template #footer>
         <pdf-footer left="Left" center="Mid" right="Right" />
      </template>
   </document>
</template>

<script setup lang="ts">
import { type Schema } from "~/types/documents/inspection";
import { usePageData } from "~/composables/usePageData";
import Document from "~/components/pdf/Document.vue";

const pageData = () => usePageData<Schema>();
</script>
