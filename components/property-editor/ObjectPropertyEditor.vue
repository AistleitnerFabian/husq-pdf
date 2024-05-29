<script setup lang="ts">
import {editorMapping} from "~/lib/utils/editor-mapping";
import {op, separateFields} from "~/lib/utils";
import {Braces, Brackets} from "lucide-vue-next";
import NestedPropertyButton from "~/components/property-editor/NestedPropertyButton.vue";

type ArrayPropertyEditorProps = {
  selection: EditorSelection<SchemaObjectType>
}

const props = defineProps<ArrayPropertyEditorProps>()
const { value } = computed(() => separateFields(props.selection.schema))
</script>

<template>
  <div class="space-y-6">
    <component
        :is="editorMapping[schema.type]"
        v-for="[name, schema] in Object.entries(value.primitives)"
        :key="props.selection.path + '.' + name"
        :selection="{
          path: op(props.selection.path, name),
          schema: schema,
          name: name
        }"
    />

    <div v-if="Object.keys(value.nested).length > 0" class="space-y-2">
      <Separator />

      <h3 class="text-sm">Nested properties</h3>
      <nested-property-button
          v-for="[name, schema] in Object.entries(value.nested)"
          :key="op(props.selection.path, name)"
          :text="name"
          :subtext="schema.type"
          :icon="schema.type == 'object' ? Braces : Brackets"
          :schema="schema"
          :path="op(props.selection.path, name)"
      />
    </div>
  </div>
</template>