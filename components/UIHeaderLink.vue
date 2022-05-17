<template>
  <NuxtLink
    class="px-1 h-full flex items-center border-b-2"
    :class="computedClass"
  >
    <UITypography variant="h4">
      <slot />
    </UITypography>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ active?: boolean }>();

const computedClass = computed(() => ({
  "text-gray-600 hover:text-gray-700 border-transparent hover:border-primary-600":
    !props.active,
  "text-gray-900 border-primary-600": props.active,
}));
</script>
