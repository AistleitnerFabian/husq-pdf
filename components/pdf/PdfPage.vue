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
  margin: 20mm;
}

</style>