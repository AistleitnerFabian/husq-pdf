<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
<Input :placeholder="props.name" :value="props.name" />
</template>
