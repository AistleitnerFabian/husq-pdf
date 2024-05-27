<script setup lang="ts">

import {ResizableHandle, ResizablePanelGroup, ResizablePanel} from "~/components/ui/resizable";
import schema from "../"
import {previewComponents} from "~/lib/utils/preview-components";
</script>

<template>
  <div class="p-4 h-screen">
    <ResizablePanelGroup direction="horizontal" class="h-full rounded-lg border">
      <ResizablePanel id="handle-demo-panel-1" :default-size="25">
        <component :is="previewComponents[schema]"  />
      </ResizablePanel>
      <ResizableHandle id="handle-demo-handle-1" />
      <ResizablePanel id="handle-demo-panel-2" :default-size="75">
        <slot />
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>
