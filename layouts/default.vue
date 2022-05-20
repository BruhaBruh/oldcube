<template>
  <div
    class="grid min-h-screen"
    style="grid-template-rows: max-content 1fr max-content"
  >
    <!-- <Html class="dark"></Html> -->
    <Html :class="computedClass"></Html>
    <UIDrawer />
    <UIHeader />
    <slot />
    <UIFooter />
  </div>
</template>

<script setup lang="ts">
import { useUIStore } from "~~/stores/ui";

useHead({
  titleTemplate: "%s - OLDCUBE",
});

const uiStore = useUIStore();

const computedClass = computed(() => {
  const classes = { "overflow-hidden": uiStore.menuIsOpen };

  return Object.keys(classes)
    .filter((key) => classes[key])
    .join(" ");
});
</script>
