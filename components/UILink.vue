<template>
  <NuxtLink
    class="h-10 rounded-lg px-4 flex items-center justify-center space-x-2 transition ease-in cursor-pointer"
    :class="computedClass"
    style="min-height: 40px"
  >
    <template v-if="props.icon">
      <UIIcon :icon="props.icon" class="w-6 h-6 fill-current" />
    </template>
    <UITypography variant="btn" tag="span"><slot /></UITypography>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ButtonColor, ButtonVariant } from "./UIButton.vue";
import { IconName } from "./UIIcon.vue";

const props = defineProps<{
  variant: ButtonVariant;
  color: ButtonColor;
  icon?: IconName;
}>();

const computedClass = computed(() => {
  switch (props.variant) {
    case "solid":
      return {
        "disabled:text-gray-500 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed":
          true,
        "dark:disabled:text-gray-400 dark:disabled:bg-gray-500 dark:disabled:hover:bg-gray-500":
          true,
        "bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-gray-50":
          props.color === "primary",
        "bg-gray-700 hover:bg-gray-600 active:bg-gray-700 text-gray-50":
          props.color === "secondary",
        "dark:bg-gray-200 dark:hover:bg-gray-300 dark:active:bg-gray-200 dark:text-gray-900":
          props.color === "secondary",
      };
    case "outline":
    case "text":
      return {
        "border border-current": props.variant === "outline",
        "disabled:text-gray-400 disabled:hover:text-gray-400 disabled:cursor-not-allowed":
          true,
        "dark:disabled:text-gray-500 dark:disabled:hover:text-gray-500": true,
        "text-primary-600 hover:text-primary-500 active:text-primary-700":
          props.color === "primary",
        "text-gray-700 hover:text-gray-600 active:text-gray-700":
          props.color === "secondary",
        "dark:text-gray-200 dark:hover:text-gray-300 dark:active:text-gray-200":
          props.color === "secondary",
      };
    default:
      return {};
  }
});
</script>
