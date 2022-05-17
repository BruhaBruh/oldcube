<template>
  <main
    class="grid-container py-16 relative"
    :style="{ paddingTop: `${paddingTop}px` }"
  >
    <slot />
  </main>
</template>

<script setup lang="ts">
const props = defineProps<{ disablePadding?: boolean }>();

const paddingTop = ref(props.disablePadding ? 64 : 96 + 64);

const eventListener = (e: Event & { currentTarget: Window }) => {
  const scrollY = e.currentTarget.scrollY;

  const value = scrollY / 24;

  const newValue = 96 - value;

  if (newValue < 64) {
    paddingTop.value = props.disablePadding ? 64 : 64 + 64;
  } else {
    paddingTop.value = props.disablePadding ? 64 : newValue + 64;
  }
};

onMounted(() => {
  if (props.disablePadding) return;
  window.addEventListener("scroll", eventListener);
  window.addEventListener("resize", eventListener);
});

onUnmounted(() => {
  window.removeEventListener("scroll", eventListener);
  window.removeEventListener("resize", eventListener);
});
</script>
