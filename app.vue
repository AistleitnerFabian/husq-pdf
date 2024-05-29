<template>
   <NuxtLayout :name="mode">
      <NuxtPage />
   </NuxtLayout>
</template>

<script setup lang="ts">
import { useLayoutMode } from "~/composables/useLayoutMode";

const mode = useLayoutMode();
</script>
