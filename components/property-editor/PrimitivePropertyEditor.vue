<script setup lang="ts">
import {useBindUrl} from "~/composables/useBindUrl";
import {TextCursorInput} from "lucide-vue-next";

type PrimitivePropertyEditorProps = {
  selection: EditorSelection<SchemaPrimitiveType>
}
const props = defineProps<PrimitivePropertyEditorProps>()
const { query, updateQueryParam } = useBindUrl(props.selection.path)
</script>

<template>
  <div class="space-y-0.5">
    <property-editor-header
        :name="props.selection.name"
        :type="props.selection.schema.type"
        :icon="TextCursorInput"
    />

    <span class="text-xs text-zinc-500" v-if="props.selection.schema.description">
      {{ props.selection.schema.description }}
    </span>

    <Input
        v-model="query"
        @input="updateQueryParam"
        :placeholder="props.selection.name"
    />
  </div>
</template>

<style scoped>

</style>