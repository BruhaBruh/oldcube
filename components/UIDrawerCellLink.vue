<template>
  <NuxtLink
    :to="to"
    class="w-full rounded-lg h-10 px-4 flex items-center transition ease-in"
    :class="computedClass"
    style="min-height: 40px"
  >
    <UITypography variant="btn" tag="span"><slot /></UITypography>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ to: string }>();

const route = useRoute();

const active = computed(() => route.path === props.to);

const computedClass = computed(() => ({
  "text-gray-50 bg-primary-600 hover:bg-primary-600": active.value,
  "hover:bg-gray-200 dark:hover:bg-gray-700": !active.value,
}));
</script>
