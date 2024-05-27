<script setup lang="ts">
import {Label} from "radix-vue";
import {useBindUrl} from "~/composeables/useBindUrl";

type BooleanSettingsProps = {
  name: string;
  path: string;
}

const props = defineProps<BooleanSettingsProps>()
const { query, updateQueryParam } = useBindUrl(props.name)
</script>

<template>
  <div class="flex justify-between items-center">
    <Label :htmlFor="props.name">{{props.name}}</Label>
    <Checkbox :id="props.name" v-model="query" @input="updateQueryParam" />
  </div>
</template>
