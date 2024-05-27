<script setup lang="ts">
import {previewComponents} from "~/lib/utils/preview-components";
import {computed} from "vue";

type SchemaType = {
  type: string;
  properties?: Record<string, SchemaType>,
  items?: SchemaType[]
}

type ArraySettingsProps = {
  name: string
  schema: SchemaType
}

const props = defineProps<ArraySettingsProps>()
const items = computed(() => props.schema.items)
</script>

<template>
  <div v-for="(record, index) in items" class="space-y-2">
    <component
        :key="props.name"
        :is="previewComponents[record.type]"
        :schema="record"
        :name="index.toString()"
    />
  </div>
</template>