<script setup lang="ts">
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "~/components/ui/resizable";
import {previewComponents} from "~/lib/utils/preview-components";

const response = await fetch("schema.json")
const schema = await response.json()
const component = previewComponents["object"]
</script>

<template>
  <div class="dark p-4 h-screen bg-background">
    <ResizablePanelGroup direction="horizontal" class="h-full rounded-lg border">
      <ResizablePanel id="handle-demo-panel-1" :default-size="25">
        <div class="p-4 space-y-2 text-foreground">
          <component :is="component" :schema="schema" path="" />
        </div>
      </ResizablePanel>
      <ResizableHandle id="handle-demo-handle-1"/>
      <ResizablePanel id="handle-demo-panel-2" :default-size="75">
        <NuxtLayout name="preview">
          <slot/>
        </NuxtLayout>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>