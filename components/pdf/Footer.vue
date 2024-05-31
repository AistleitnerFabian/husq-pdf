<template>
  <div class="mx-4 flex flex-row items-center justify-between border-t pdf-footer">
    <slot name="left" />
    <slot name="center" />
    <slot name="right" />
  </div>
</template>
<style>
.pdf-footer {
   height: var(--pdf-footer-height);
}
</style>
