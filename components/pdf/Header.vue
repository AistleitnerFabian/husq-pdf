<template>
  <div class="mx-4 flex flex-row items-center justify-between border-b pdf-header">
      <slot name="left" />
      <slot name="center" />
      <slot name="right" />
   </div>
</template>
<style>
.pdf-header {
   height: var(--pdf-header-height);
}
</style>
