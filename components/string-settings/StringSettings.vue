<script setup lang="ts">
import {useBindUrl} from "~/lib/utils/useBindUrl";
import {capitalize} from "@/lib/utils/ui";
import {computed} from "vue";
const props = defineProps<{ name: string }>()
const { query, updateQueryParam } = useBindUrl(props.name)
const title = computed(() => capitalize(props.name))
</script>

<template>
  <Input
      :id="props.name"
      :placeholder="title"
      v-model="query"
      @input="updateQueryParam"
  />
</template>
