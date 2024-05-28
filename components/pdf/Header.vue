<template>
  <div class="flex justify-between flex-row border-b h-10 items-center mx-4">
    <span>{{props.left}}</span>
    <span>{{props.center}}</span>
    <span>{{props.right}}</span>

  </div>
</template>
<script setup lang="ts">

const props = defineProps<{left: string, center: string, right:string}>()

</script>