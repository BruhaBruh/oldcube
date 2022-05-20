<template>
  <UIPaper tag="article" class="flex flex-col space-y-2 p-4">
    <UITypography
      variant="h6"
      tag="div"
      class="flex items-center justify-center h-8 px-3 w-max bg-primary-600 text-gray-50 rounded-full"
      >{{ props.label }}</UITypography
    >
    <UITypography variant="h6" tag="p">
      <slot />
    </UITypography>
  </UIPaper>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string }>();
</script>
