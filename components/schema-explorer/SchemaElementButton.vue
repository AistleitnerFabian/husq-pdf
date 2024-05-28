<script setup lang="ts">
import {ChevronDown, ChevronRight, type LucideIcon} from 'lucide-vue-next'
import {cn} from "~/lib/utils";

type SchemaElementButtonProps = {
  text: string;
  subtext: string;
  schema: SchemaType;
  level: number;
  icon: LucideIcon;
  isOpen?: boolean;
  collapsable?: boolean;
  path: string;
}
const props = defineProps<SchemaElementButtonProps>()
const selection = inject<EditorSelectionProvider>("__hqpdf_selection")
const select = () => {
  selection?.setSelection({
    path: props.path,
    schema: props.schema,
    name: props.text
  })
}

const isSelected = ref(false)
watch(
    () => selection?.selection.value,
    () => {isSelected.value = selection?.selection.value?.path === props.path}
)
</script>

<template>
  <div
      :style="{ paddingLeft: props.level * 1.25 + 'rem'}"
      :class="cn(
          'w-full rounded h-7 pr-4',
         'select-none flex items-center',
      )">
    <Button
        @click="$emit('collapse')"
        variant="ghost"
        v-if="props.collapsable"
        size="xs"
        class="transition-none"
    >
      <ChevronRight v-if="!props.isOpen" class="size-4 text-zinc-500" />
      <ChevronDown v-else class="size-4 text-zinc-500" />
    </Button>
    <div v-else class="size-8"/>

    <Button
        @click="select"
        variant="ghost"
        size="xs"
        :class="cn(
            'flex flex-1 justify-start gap-x-2 transition-none',
            isSelected && 'bg-accent'
        )">
      <component :is="props.icon" class="size-4 text-primary" />
      <span class="flex-1 text-left">{{ props.text }}</span>
      <span class="text-xs font-mono text-zinc-500 !font-normal">{{props.subtext}}</span>
    </Button>
  </div>
</template>

<style scoped>

</style>