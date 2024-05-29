<template>
   <div id="print-content">
      <div class="header">
         <slot name="header" />
      </div>
      <div class="content">
         <slot />
      </div>
      <div class="footer">
         <slot name="footer" />
      </div>
   </div>
</template>

<script>
export default {
   name: "DocumentComponent",
};
</script>

<style scoped>
@media print {
   .header {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
   }
}

@media print {
   .footer {
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
   }
}
</style>
