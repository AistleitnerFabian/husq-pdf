<script setup lang="ts">

import SchemaElementButton from "~/components/schema-explorer/SchemaElementButton.vue";
import {TextCursorInput} from "lucide-vue-next";

type SchemaPropertyProps = {
  schema: SchemaPrimitiveType;
  name: string;
  level: number;
}

const props = defineProps<SchemaPropertyProps>()
</script>

<template>
  <schema-element-button
      :text="props.name"
      :level="props.level"
      :icon="TextCursorInput"
      :subtext="schema.type"
  />
</template>

<style scoped>

</style>