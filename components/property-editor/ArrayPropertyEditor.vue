<script setup lang="ts">
import {useBindUrl} from "~/composables/useBindUrl";

type ArrayPropertyEditorProps = {
  selection: EditorSelection<SchemaArrayType>
}
const props = defineProps<ArrayPropertyEditorProps>()
const { query, setQueryParams } = useBindUrl(props.selection.path)
</script>

<template>
  <h2 class="text-lg">Array</h2>
  <span>{{query}}</span>
</template>

<style scoped>

</style>