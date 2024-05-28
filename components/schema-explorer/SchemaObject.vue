<template>
  <schema-element-button
      :text="props.name"
      :subtext="schema.type"
      :icon="Folder"
      :level="props.level"
      :is-open="isOpen"
      :collapsable="true"
      @click="isOpen = !isOpen"
  />
  <div v-show="isOpen" v-for="[name, item] in Object.entries(props.schema.properties)">
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
import {Folder, FolderClosed, FolderOpen} from "lucide-vue-next";

type SchemaExplorerProps = {
  schema: SchemaObjectType;
  name: string;
  level: number;
}

const props = defineProps<SchemaExplorerProps>()
const isOpen = ref(true)
</script>


<style scoped>

</style>