<script setup lang="ts">
import {
   ResizableHandle,
   ResizablePanel,
   ResizablePanelGroup,
} from "~/components/ui/resizable";
import { watchDebounced } from "@vueuse/core";
import { explorerMapping } from "~/lib/utils/explorer-mapping";
import { Separator } from "~/components/ui/separator";
import { editorMapping } from "~/lib/utils/editor-mapping";
import AppHeader from "~/components/header/AppHeader.vue";

const route = useRoute();

const response = await fetch("schema.json");
const schema: SchemaType = await response.json();
const documentName = useCurrentDocument();

const storedSelectionString = localStorage.getItem("__hqpdf_selection");
const storedSelection = JSON.parse(storedSelectionString ?? "null");
const selectionRef = ref<EditorSelection<SchemaType>>(storedSelection);

provide<EditorSelectionProvider>("__hqpdf_selection", {
   selection: selectionRef,
   setSelection: (v: EditorSelection<SchemaType>) => {
      selectionRef.value = v;
      localStorage.setItem("__hqpdf_selection", JSON.stringify(v));
   },
});

watchDebounced(() => route.fullPath, refresh, { debounce: 750 });

function refresh() {
   refreshNuxtData("pdf-preview");
}
</script>

<template>
   <TooltipProvider>
      <div class="bg-background text-foreground">
         <div class="flex h-screen flex-col px-4 pb-4">
            <AppHeader />
            <ResizablePanelGroup
               direction="horizontal"
               class="flex-1 rounded-lg border"
            >
               <ResizablePanel :default-size="25">
                  <div class="h-full space-y-4 overflow-y-auto p-4 text-sm">
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

               <ResizableHandle />
               <ResizablePanel :default-size="50">
                  <NuxtLayout name="preview">
                     <slot />
                  </NuxtLayout>
               </ResizablePanel>
               <ResizableHandle />
               <ResizablePanel :default-size="25">
                  <div class="h-full space-y-4 overflow-y-auto p-4">
                     <h2 class="text-sm">Property editor</h2>
                     <Separator />
                     <div v-if="selectionRef">
                        <component
                           :is="editorMapping[selectionRef.schema.type]"
                           :key="selectionRef.path"
                           :selection="selectionRef"
                        />
                     </div>
                  </div>
               </ResizablePanel>
            </ResizablePanelGroup>
         </div>
      </div>
   </TooltipProvider>
</template>
