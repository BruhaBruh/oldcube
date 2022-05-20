<template>
  <div
    class="grid min-h-screen"
    style="grid-template-rows: max-content 1fr max-content"
  >
    <!-- <Html class="dark"></Html> -->
    <UIDrawer />
    <UIHeader />
    <slot />
    <UIFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "%s - OLDCUBE",
});
</script>
