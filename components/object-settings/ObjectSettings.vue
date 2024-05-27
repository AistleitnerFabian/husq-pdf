<script setup lang="ts">

import {previewComponents} from "~/lib/utils/preview-components";
import {computed} from "vue";
import {capitalize} from "~/lib/utils/ui";

type SchemaType = {
  type: string;
  properties: Record<string, SchemaType>,
  items?: Record<string, SchemaType>[]
}

type ObjectSettingsProps = {
  name: string;
  path: string;
  schema: SchemaType
}

const props = defineProps<ObjectSettingsProps>()
const properties = computed(() => props.schema.properties)
const title = computed(() => {
  if(!isNaN(parseInt(props.name))) {
    return `Item ${props.name}`
  }

  return capitalize(props.name)
})
</script>

<template>
  <div class="space-y-2">
    <h1>{{title}}</h1>
    <div v-for="[name, el] in Object.entries(properties)">
      <component
          :key="name"
          :is="previewComponents[el.type]"
          :schema="el"
          :name="name"
          :path="`${props.path ? props.path + '.' : ''}${name}`"
      />
    </div>
  </div>
</template>