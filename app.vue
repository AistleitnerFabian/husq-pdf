<template>
  <NuxtLayout :name="mode">
    <RouterView/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useLayoutMode} from "~/composeables/useLayoutMode";

const mode = useLayoutMode()

</script>