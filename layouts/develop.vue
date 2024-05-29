<script setup lang="ts">
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "~/components/ui/resizable";
import {watchDebounced} from "@vueuse/core";
import {explorerMapping} from "~/lib/utils/explorer-mapping";
import AppHeader from "~/components/header/app-header.vue";
import {Separator} from "~/components/ui/separator";
import {editorMapping} from "~/lib/utils/editor-mapping";

const route = useRoute()
const response = await fetch("schema.json")
const schema: SchemaType = await response.json()
const documentName = useCurrentDocument()

const storedSelectionString = localStorage.getItem("__hqpdf_selection")
const storedSelection = JSON.parse(storedSelectionString ?? "")
const selectionRef = ref<EditorSelection<SchemaType>>(storedSelection)

provide<EditorSelectionProvider>("__hqpdf_selection", {
  selection: selectionRef,
  setSelection: (v: EditorSelection<SchemaType>) => {
    selectionRef.value = v
    localStorage.setItem("__hqpdf_selection", JSON.stringify(v))
  }
})

watchDebounced(
    () => route.fullPath,
    refresh,
    { debounce: 750 }
)

function refresh() {
  refreshNuxtData("pdf-preview")
}

</script>

<template>
  <div class="text-foreground bg-background">
    <div class="px-4 pb-4 h-screen flex flex-col">
      <AppHeader/>
      <ResizablePanelGroup direction="horizontal" class="rounded-lg border flex-1">
        <ResizablePanel :default-size="25">
          <div class="p-4 text-sm space-y-4 h-full overflow-y-auto">
            <h2>Schema Explorer</h2>
            <Separator />
            <div>
              <component
                  :is="explorerMapping[schema.type]"
                  :schema="schema"
                  :level="0"
                  :name="documentName"
                  path=""
              />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle/>
        <ResizablePanel :default-size="50">
          <NuxtLayout name="preview">
            <slot/>
          </NuxtLayout>
        </ResizablePanel>
        <ResizableHandle/>
        <ResizablePanel :default-size="25">
          <div class="p-4 space-y-4 h-full overflow-y-auto">
            <h2 class="text-sm">Property editor</h2>
            <Separator />
            <div v-if="selectionRef">
              <component
                  :is="editorMapping[selectionRef.schema.type]"
                  :selection="selectionRef"
                  :key="selectionRef.path"
              />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  </div>
</template>
