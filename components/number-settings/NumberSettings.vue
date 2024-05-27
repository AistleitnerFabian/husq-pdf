<script setup lang="ts">
import {Label} from "radix-vue";
import {useBindUrl} from "~/lib/utils/useBindUrl";
import {capitalize, computed} from "vue";

const props = defineProps<{ name: string }>()
const { query, updateQueryParam } = useBindUrl(props.name)
const title = computed(() => capitalize(props.name))
</script>

<template>
  <Input
      :id="props.name"
      type="number"
      :placeholder="title"
      v-model="query"
      @input="updateQueryParam"
  />
</template>
