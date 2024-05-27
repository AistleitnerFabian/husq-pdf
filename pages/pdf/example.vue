<template>
  Test
  <Input/>
  {{ parseQuery(route.query) }}
</template>

<script setup lang="ts">
import {parseQuery} from "~/utils/parseQuery";

const route = useRoute()
</script>

<style scoped>

</style>