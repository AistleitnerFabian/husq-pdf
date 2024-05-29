<script setup lang="ts">

import type {LucideIcon} from "lucide-vue-next";

type NestedPropertyButtonProps = {
  icon: LucideIcon
  text: string;
  subtext: string
  path: string;
  schema: SchemaType
}

const selection = inject<EditorSelectionProvider>("__hqpdf_selection")
const select = () => {
  selection?.setSelection({
    path: props.path,
    schema: props.schema,
    name: props.text
  })
}

const props = defineProps<NestedPropertyButtonProps>()
</script>

<template>
  <div class="'w-full rounded h-7 select-none flex items-center'" @click="select">
    <Button variant="ghost" size="xs" class="flex flex-1 justify-start gap-x-2 transition-none">
      <component :is="props.icon" class="size-4 text-primary" />
      <span class="flex-1 text-left">{{ props.text }}</span>
      <span class="text-xs font-mono text-zinc-500 !font-normal">{{props.subtext}}</span>
    </Button>
  </div>
</template>