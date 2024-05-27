<template>
  Test
  <Input/>
  {{ parseQuery(route.query) }}
  <p class="mt-60">test</p>
  <p class="mt-60">test</p>
  <p class="mt-60">test</p>
  <p class="mt-60">test</p>
  <p class="mt-60">test</p>
  <p class="mt-60">test</p>
  <p class="mt-60">end</p>
</template>

<script setup lang="ts">
import {parseQuery} from "~/utils/parseQuery";

const route = useRoute()
</script>

<style scoped>

</style>