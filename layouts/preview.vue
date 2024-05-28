<template>
  <div class="size-full">
    <div class="p-8 space-y-4" v-if="pending">
      <Skeleton class="w-[595px] h-[842px] mx-auto" />
      <Skeleton class="w-[595px] h-[842px] mx-auto" />
    </div>

    <div v-if="!pending && data" class="w-full min-h-screen h-full p-8 overflow-y-auto">
      <div v-for="(_, index) in data.pages" class="mb-4">
        <VuePDF :pdf="data.pdf" :page="index + 1" class="!flex justify-center drop-shadow-xl"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {usePDF, VuePDF} from '@tato30/vue-pdf'
import {usePageData} from "~/composables/usePageData";
import {Skeleton} from "~/components/ui/skeleton";

async function getPdfFile(): Promise<any> {
  const pageData = usePageData()

  const response = await fetch(`/api/generate/${useCurrentDocument()}`, {
    method: "POST",
    body: JSON.stringify(pageData),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const arrayBuf = await response.arrayBuffer()
  const uint8 = new Uint8Array(arrayBuf)
  return usePDF(uint8)
}

const { pending, data } = useAsyncData("pdf-preview", getPdfFile)
</script>