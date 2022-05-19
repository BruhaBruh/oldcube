<template>
  <NuxtLink
    :to="props.to"
    class="border-b-2 px-2 flex items-center hover:text-gray-900 hover:bg-gray-200 dark:hover:text-gray-50 dark:hover:bg-gray-700"
    :class="computedClass"
  >
    <UITypography variant="h6" tag="span"><slot /></UITypography>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ to: string }>();

const route = useRoute();

const active = computed(() => route.path === props.to);

const computedClass = computed(() => ({
  "text-gray-900 border-primary-600 dark:text-gray-50": active.value,
  "text-gray-700 border-transparent dark:text-gray-200": !active.value,
}));
</script>
