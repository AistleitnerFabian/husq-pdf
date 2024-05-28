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
    <div  v-for="(item, index) in props.schema.items">
      <component
          :is="explorerMapping[item.type]"
          :schema="item"
          :name="`[${index}]`"
          :level="props.level + 1"
          :path="`${props.path}[${index}]`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {explorerMapping} from "~/lib/utils/explorer-mapping";
import SchemaElementButton from "./SchemaElementButton.vue";
import {Brackets} from "lucide-vue-next";
import type {SchemaExplorerProps} from "./";

type SchemaArrayProps = SchemaExplorerProps<SchemaArrayType>

const props = defineProps<SchemaArrayProps>()
const isOpen = ref(true)
</script>


<style scoped>

</style>