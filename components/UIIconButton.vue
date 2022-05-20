<template>
  <button class="h-10 w-10 flex items-center justify-center">
    <UIIcon :icon="props.icon" class="fill-current" />
  </button>
</template>

<script setup lang="ts">
import { IconName } from "./UIIcon.vue";

const props = defineProps<{ icon: IconName }>();
</script>
