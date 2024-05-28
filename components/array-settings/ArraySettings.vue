<script setup lang="ts">
import {previewComponents} from "~/lib/utils/preview-components";
import {computed} from "vue";
import {capitalize} from "~/lib/utils/ui";

type SchemaType = {
  type: string;
  properties?: Record<string, SchemaType>,
  items: SchemaType[]
}

type ArraySettingsProps = {
  name: string
  path: string
  schema: SchemaType
}

const props = defineProps<ArraySettingsProps>()
const title = computed(() => capitalize(props.name))
const items = reactive(props.schema.items)
</script>

<template>
  <h1>{{title}}</h1>
  <div v-for="(record, index) in items" class="space-y-2">
    <component
        :name="index.toString()"
        :path="`${props.path}[${index}]`"
        :is="previewComponents[record.type]"
        :schema="record"
        :key="props.name"
    />
  </div>
</template>