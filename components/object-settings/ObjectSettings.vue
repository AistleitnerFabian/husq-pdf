<script setup lang="ts">

import {previewComponents} from "~/lib/utils/preview-components";

type SchemaType = {
  type: string;
  properties: Record<string, SchemaType>,
  items?: Record<string, SchemaType>[]
}

const props = defineProps<{ schema: SchemaType }>()
</script>

<template>
  <div class="p-4 gap-2">
    <p v-for="[name, el] in Object.entries(props.schema.properties)">
      <component :is="previewComponents[el.type]" :name="name" />
    </p>
  </div>
</template>