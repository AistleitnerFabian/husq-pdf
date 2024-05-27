<script setup lang="ts">
import {useBindUrl} from "~/composeables/useBindUrl";
import {capitalize, computed} from "vue";

type NumberSettingsProps = {
  name: string;
  path: string;
}

const props = defineProps<NumberSettingsProps>()
const { query, updateQueryParam } = useBindUrl(props.path)
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
