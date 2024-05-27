<script setup lang="ts">
import {useBindUrl} from "~/composeables/useBindUrl";
import {capitalize} from "@/lib/utils/ui";
import {computed} from "vue";

type StringSettingsProps = {
  name: string;
  path: string;
}

const props = defineProps<StringSettingsProps>()
const { query, updateQueryParam } = useBindUrl(props.path)
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
