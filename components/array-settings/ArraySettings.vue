<script setup lang="ts">
import {previewComponents} from "~/lib/utils/preview-components";
import {usePageData} from "~/composeables/usePageData";

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
const model = usePageData() as any
const items = ref<any[]>(model[props.path] ?? [])
const record = props.schema.items[0]

const addItem = () => {
  items.value.push(record)
}
</script>

<template>
  <div v-for="(_, index) in items" class="space-y-2">
    <component
        :name="index.toString()"
        :path="`${props.path}[${index}]`"
        :is="previewComponents[record.type]"
        :schema="record"
        :key="props.name"
    />
  </div>
  <Button @click="addItem">+</Button>
</template>