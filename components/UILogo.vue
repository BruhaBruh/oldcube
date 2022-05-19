<template>
  <img :width="size" :height="size" src="/img/logo.png" alt="" />
</template>

<script setup lang="ts">
defineProps<{
  size?: number;
}>();
</script>
