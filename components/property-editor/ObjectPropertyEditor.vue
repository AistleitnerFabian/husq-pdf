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
        v-for="[name, schema] in Object.entries(value.primitives)"
        :is="editorMapping[schema.type]"
        :key="props.selection.path + '.' + name"
        :selection="{
          path: op(props.selection.path, name),
          schema: schema,
          name: name
        }"
    />

    <div class="space-y-2" v-if="Object.keys(value.nested).length > 0">
      <Separator />

      <h3 class="text-sm">Nested properties</h3>
      <nested-property-button
          v-for="[name, schema] in Object.entries(value.nested)"
          :text="name"
          :subtext="schema.type"
          :icon="schema.type == 'object' ? Braces : Brackets"
          :schema="schema"
          :path="op(props.selection.path, name)"
      />
    </div>
  </div>
</template>