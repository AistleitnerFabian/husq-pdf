<template>
   <schema-element-button
      :text="props.name"
      :subtext="schema.type"
      :icon="Braces"
      :level="props.level"
      :is-open="isOpen"
      :path="props.path"
      :collapsable="true"
      :schema="props.schema"
      @collapse="isOpen = !isOpen"
   />
   <div
      v-for="[name, item] in Object.entries(props.schema.properties)"
      v-show="isOpen"
      :key="op(props.path, name)"
   >
      <div>
         <component
            :is="explorerMapping[item.type]"
            :schema="item"
            :name="name"
            :level="props.level + 1"
            :path="op(props.path, name)"
         />
      </div>
   </div>
</template>

<script setup lang="ts">
import { explorerMapping } from "~/lib/utils/explorer-mapping";
import SchemaElementButton from "~/components/schema-explorer/SchemaElementButton.vue";
import { Braces } from "lucide-vue-next";
import type { SchemaExplorerProps } from "./index";
import { op } from "~/lib/utils";

type SchemaObjectProps = SchemaExplorerProps<SchemaObjectType>;
const props = defineProps<SchemaObjectProps>();
const isOpen = ref(true);
</script>

<style scoped></style>
