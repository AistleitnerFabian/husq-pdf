<template>
   <div class="mx-4 flex h-10 flex-row items-center justify-between border-t">
      <span>{{ props.left }}</span>
      <span>{{ props.center }}</span>
      <span>{{ props.right }}</span>
   </div>
</template>
<script setup lang="ts">
const props = defineProps<{ left: string; center: string; right: string }>();
</script>
