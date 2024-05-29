<template>
   <pdf-page>
      <h1 class="mb-32 text-3xl">{{ pageData().name }}</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 break-before-page text-3xl">Page break</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="mb-32 text-3xl">Hello</h1>
      <h1 class="text-3xl">Hello</h1>
   </pdf-page>
</template>

<script setup lang="ts">
import { type Schema } from "@/types/pdf/test";
import { usePageData } from "~/composables/usePageData";
import PdfPage from "~/components/pdf/PdfPage.vue";

const pageData = () => usePageData<Schema>();
</script>
