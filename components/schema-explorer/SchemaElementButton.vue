<script setup lang="ts">
import {type LucideIcon, ChevronRight, ChevronDown} from 'lucide-vue-next'
import {cn} from "~/lib/utils";

type SchemaElementButtonProps = {
  text: string;
  subtext: string;
  level: number;
  icon: LucideIcon;
  isOpen?: boolean;
  collapsable?: boolean;
}
const props = defineProps<SchemaElementButtonProps>()

</script>

<template>
  <button
      :style="{ paddingLeft: props.level + 0.5 + 'rem'}"
      :class="cn(
          'w-full rounded hover:bg-accent py-1 pr-4 active:opacity-80',
         'cursor-pointer select-none flex gap-x-2 items-center'
      )">
    <div v-if="props.collapsable">
      <ChevronRight v-if="!props.isOpen" class="size-4 text-zinc-500" />
      <ChevronDown v-else class="size-4 text-zinc-500" />
    </div>
    <div v-else class="size-4"/>

    <component :is="props.icon" class="size-4 text-primary" />
    <span class="flex flex-1">{{ props.text }}</span>
    <div class="text-sm text-zinc-500">{{props.subtext}}</div>
  </button>
</template>

<style scoped>

</style>