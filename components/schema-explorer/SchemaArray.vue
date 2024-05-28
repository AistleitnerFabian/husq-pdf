<template>
  <schema-element-button
      :text="props.name"
      :subtext="schema.type"
      :icon="Brackets"
      :level="props.level"
      :is-open="isOpen"
      :collapsable="true"
      @click="isOpen = !isOpen"
  />
  <div v-show="isOpen" v-for="item in props.schema.items">
    <div>
      <component
          :is="mapping[item.type]"
          :schema="item"
          :name="name"
          :level="props.level + 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {mapping} from "~/lib/utils/mapping";
import SchemaElementButton from "~/components/schema-explorer/SchemaElementButton.vue";
import {Brackets} from "lucide-vue-next";

type SchemaExplorerProps = {
  schema: SchemaArrayType;
  name: string;
  level: number;
}

const props = defineProps<SchemaExplorerProps>()
const isOpen = ref(true)
</script>


<style scoped>

</style>