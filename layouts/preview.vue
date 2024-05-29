<template>
   <div class="size-full">
      <div v-if="pending" class="space-y-4 p-8">
         <Skeleton class="mx-auto h-[842px] w-[595px]" />
         <Skeleton class="mx-auto h-[842px] w-[595px]" />
      </div>

      <div v-if="!pending && data" class="h-full w-full overflow-y-auto p-8">
         <div v-for="(_, index) in data.pages" :key="index" class="mb-4">
            <VuePDF
               :pdf="data.pdf"
               :page="index + 1"
               class="!flex justify-center drop-shadow-xl"
            />
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { usePDF, VuePDF } from "@tato30/vue-pdf";
import { usePageData } from "~/composables/usePageData";
import { Skeleton } from "~/components/ui/skeleton";

async function getPdfFile(): Promise<any> {
   const pageData = usePageData();

   const response = await fetch(`/api/generate/${useCurrentDocument()}`, {
      method: "POST",
      body: JSON.stringify(pageData),
      headers: {
         "Content-Type": "application/json",
      },
   });

   const arrayBuf = await response.arrayBuffer();
   const uint8 = new Uint8Array(arrayBuf);
   return usePDF(uint8);
}

const { pending, data } = useAsyncData("pdf-preview", getPdfFile);
</script>
