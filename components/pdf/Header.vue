<template>
   <div class="pdf-header">
      <slot />
   </div>
</template>
<style>
.pdf-header {
   height: var(--pdf-header-height);
   print-color-adjust: exact;
}
</style>
