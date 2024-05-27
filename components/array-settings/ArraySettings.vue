<script setup lang="ts">

import {previewComponents} from "~/lib/utils/preview-components";

type SchemaType = {
  type: string;
  properties: Record<string, SchemaType>,
  items?: SchemaType[]
}

const props = defineProps<{ schema: SchemaType }>()
</script>

<template>
  <div class="p-4 gap-2">
    <p v-for="record in props.schema.items">
      <component :is="previewComponents[record.type]" />
    </p>
  </div>
</template>