<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";
import { SelectGroup, type SelectGroupProps } from "radix-vue";
import { cn } from "@/lib/utils/ui";

const props = defineProps<
   SelectGroupProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
   const { class: _, ...delegated } = props;

   return delegated;
});
</script>

<template>
   <SelectGroup :class="cn('w-full p-1', props.class)" v-bind="delegatedProps">
      <slot />
   </SelectGroup>
</template>
