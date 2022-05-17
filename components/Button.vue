<template>
  <button
    class="h-10 rounded-sm focus:ring focus:ring-opacity-50 flex items-center justify-center px-3"
    :class="computedClass"
  >
    <Typography variant="btn">
      <slot>Кнопка</slot>
    </Typography>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: "primary" | "secondary" | "tertiary";
}>();

const computedClass = computed<Record<string, boolean>>(() => ({
  "text-gray-50 bg-primary-600 hover:bg-primary-500 active:bg-primary-700 focus:ring-primary-400 disabled:text-gray-600 disabled:bg-gray-400":
    props.color === "primary",
  "text-gray-900 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-400 border border-gray-600 disabled:text-gray-400 disabled:border-gray-400 disabled:bg-gray-50":
    props.color === "secondary",
  "text-gray-900 hover:text-gray-800 active:text-gray-700 focus:ring-gray-400 disabled:text-gray-400":
    props.color === "tertiary",
}));
</script>
