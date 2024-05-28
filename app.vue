<template>
  <NuxtLayout :name="mode">
    <RouterView/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useLayoutMode} from "~/composables/useLayoutMode";

const mode = useLayoutMode()

</script>