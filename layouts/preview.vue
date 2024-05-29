<template>
   <div class="size-full">
      <div v-if="pending" class="absolute left-1/2 z-10 mt-6 -translate-x-1/2">
         <div
            class="flex items-center gap-2 rounded-full border bg-background p-2 px-4 animate-in slide-in-from-top-3"
         >
            <Loader2 class="size-3 animate-spin text-primary" />
            <span class="text-sm">Refreshing document...</span>
         </div>
      </div>

      <div v-if="pending && !data" class="space-y-4 p-8">
         <Skeleton class="mx-auto h-[842px] w-[595px]" />
         <Skeleton class="mx-auto h-[842px] w-[595px]" />
      </div>

      <ScrollArea v-else class="h-full w-full p-8">
         <div v-for="(_, index) in data.pages" :key="index" class="mb-4">
            <VuePDF
               :pdf="data.pdf"
               :page="index + 1"
               class="!flex justify-center drop-shadow-xl"
            />
         </div>
      </ScrollArea>
   </div>
</template>

<script setup lang="ts">
import { usePDF, VuePDF } from "@tato30/vue-pdf";
import { usePageData } from "~/composables/usePageData";
import { Skeleton } from "~/components/ui/skeleton";
import { Loader2 } from "lucide-vue-next";

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
