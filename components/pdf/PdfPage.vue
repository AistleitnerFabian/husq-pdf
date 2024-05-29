<template>
   <div class="break-before-page">
      <div class="content">
         <slot />
      </div>
   </div>
</template>

<style>
@page {
   size: A4;

   @bottom-left {
      content: counter(page);
   }
}

.content {
   margin-top: 20mm;
   margin-left: 10mm;
}
</style>
