<script setup lang="ts">

import {previewComponents} from "~/lib/utils/preview-components";
import {computed} from "vue";

type SchemaType = {
  type: string;
  properties: Record<string, SchemaType>,
  items?: Record<string, SchemaType>[]
}

type ObjectSettingsProps = {
  name: string;
  schema: SchemaType
}

const props = defineProps<ObjectSettingsProps>()
const properties = computed(() => props.schema.properties)
</script>

<template>
  <div v-for="[name, el] in Object.entries(properties)">
    <component
        :key="name"
        :is="previewComponents[el.type]"
        :schema="el"
        :name="name"
    />
  </div>
</template>