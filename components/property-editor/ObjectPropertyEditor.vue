<script setup lang="ts">
import {editorMapping} from "~/lib/utils/editor-mapping";
import {op} from "~/lib/utils";

type ArrayPropertyEditorProps = {
  selection: EditorSelection<SchemaObjectType>
}

const props = defineProps<ArrayPropertyEditorProps>()
const primitiveProperties = computed(() => {
  return Object.entries(props.selection.schema.properties).filter(([name, schema]) => {
    return schema.type == "integer" || schema.type == "string"
  })
})
</script>

<template>
  <div class="space-y-4">
    <component
        v-for="[name, schema] of primitiveProperties"
        :is="editorMapping[schema.type]"
        :key="props.selection.path + '.' + name"
        :selection="{
          path: op(props.selection.path, name),
          schema: schema,
          name: name
        }"
    />
  </div>
</template>