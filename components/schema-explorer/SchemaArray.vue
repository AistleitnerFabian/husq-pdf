<template>
   <schema-element-button
      :text="props.name"
      :subtext="schema.type"
      :icon="Brackets"
      :level="props.level"
      :is-open="isOpen"
      :path="props.path"
      :collapsable="true"
      :schema="props.schema"
      @collapse="isOpen = !isOpen"
   />
   <div v-show="isOpen">
      <div v-for="(_, index) in data" :key="ap(props.path, index)">
         <component
            :is="explorerMapping[itemSchema.type]"
            :schema="itemSchema"
            :name="`${name} ${index}`"
            :level="props.level + 1"
            :path="ap(props.path, index)"
         />
      </div>
   </div>
</template>

<script setup lang="ts">
import { explorerMapping } from "~/lib/utils/explorer-mapping";
import SchemaElementButton from "./SchemaElementButton.vue";
import { Brackets } from "lucide-vue-next";
import type { SchemaExplorerProps } from "./";
import { watchPageData } from "~/composables/usePageData";
import { ap, pathObj } from "~/lib/utils";
import type { Ref } from "vue";

type SchemaArrayProps = SchemaExplorerProps<SchemaArrayType>;

const props = defineProps<SchemaArrayProps>();
const pageData: Ref<any> = watchPageData();
const data = computed(() => pathObj(props.path, pageData.value));

const itemSchema = props.schema.items[0];
const isOpen = ref(true);
</script>

<style scoped></style>
