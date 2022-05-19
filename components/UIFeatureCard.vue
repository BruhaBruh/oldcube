<template>
  <article
    class="flex flex-col space-y-2 rounded-2xl shadow p-4 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
  >
    <UITypography
      variant="h6"
      tag="div"
      class="flex items-center justify-center h-8 px-3 w-max bg-primary-600 text-gray-50 rounded-full"
      >{{ props.label }}</UITypography
    >
    <UITypography variant="h6" tag="p">
      <slot />
    </UITypography>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string }>();
</script>
