<template>
  <div class="size-full">
    <ScrollArea :class="isInPreviewMode ? 'h-screen' : 'h-full'" class="bg-muted dark:bg-background">
      <div v-if="pending" class="absolute left-1/2 z-10 mt-6 -translate-x-1/2">
        <div
            class="flex items-center gap-2 rounded-full border bg-background p-2 px-4  animate-in slide-in-from-top-3">
          <Loader2 class="size-3 animate-spin text-primary"/>
          <span class="text-sm">Refreshing document...</span>
        </div>
      </div>

      <div class="absolute z-10 right-4 bottom-4 flex flex-col w-fit gap-0.5">
        <Button variant="outline" class="p-2 h-fit" @click="modifyPreviewScale(0.1)">
          <Plus class="size-4"/>
        </Button>
        <Button variant="outline" class="p-2 h-fit" @click="modifyPreviewScale(-0.1)">
          <Minus class="size-4"/>
        </Button>
      </div>

      <div v-if="pending && !data" class="space-y-4 p-8">
        <Skeleton class="mx-auto h-[842px] w-[595px]"/>
        <Skeleton class="mx-auto h-[842px] w-[595px]"/>
      </div>

      <div v-else class="p-8 drop-shadow-md">
        <div v-for="(_, index) in data.pages" :key="index" class="mb-4">
          <VuePDF
              :scale="previewScale"
              :pdf="data.pdf"
              :page="index + 1"
              class="!flex justify-center"
          />
        </div>
      </div>
    </ScrollArea>
  </div>
</template>

<script setup lang="ts">
import { usePDF, VuePDF } from "@tato30/vue-pdf";
import { usePageData } from "~/composables/usePageData";
import { Skeleton } from "~/components/ui/skeleton";
import { Loader2, Minus, Plus } from "lucide-vue-next";

const isInPreviewMode: Ref<boolean> = ref(useLayoutMode().value == Mode.PREVIEW)

const previewScale : Ref<number> = ref(1)
const modifyPreviewScale = (mod: number) => {
  const newScale = previewScale.value + mod
  if (newScale >= 0.2 && newScale <= 2) {
    previewScale.value = newScale
  }
}

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

const {pending, data} = useAsyncData("pdf-preview", getPdfFile);
</script>
