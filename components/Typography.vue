<template>
  <h1 v-if="props.variant === 'h1'" :class="computedClass"><slot /></h1>
  <h2 v-else-if="props.variant === 'h2'" :class="computedClass"><slot /></h2>
  <h3 v-else-if="props.variant === 'h3'" :class="computedClass"><slot /></h3>
  <h4 v-else-if="props.variant === 'h4'" :class="computedClass"><slot /></h4>
  <h5 v-else-if="props.variant === 'h5'" :class="computedClass"><slot /></h5>
  <h6 v-else-if="props.variant === 'h6'" :class="computedClass"><slot /></h6>
  <p v-else-if="props.variant === 'b1'" :class="computedClass"><slot /></p>
  <p v-else-if="props.variant === 'b2'" :class="computedClass"><slot /></p>
  <span v-else-if="props.variant === 'btn'" :class="computedClass"
    ><slot
  /></span>
  <span v-else-if="props.variant === 'ht'" :class="computedClass"
    ><slot
  /></span>
  <template v-else>
    <slot />
  </template>
</template>

<script setup lang="ts">
type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "b1"
  | "b2"
  | "btn"
  | "ht";

const props = defineProps<{
  variant: TypographyVariant;
}>();

const computedClass = computed<Record<string, boolean>>(() => ({
  "text-4xl font-semibold font-jost": props.variant === "h1",
  "text-3xl font-semibold font-jost": props.variant === "h2",
  "text-2xl font-semibold font-jost": props.variant === "h3",
  "text-xl font-semibold font-jost": props.variant === "h4",
  "text-lg font-semibold font-jost": props.variant === "h5",
  "text-base font-semibold font-jost": props.variant === "h6",
  "text-base": props.variant === "b1",
  "text-sm": props.variant === "b2",
  "text-base font-semibold font-jost uppercase": props.variant === "btn",
  "text-xs": props.variant === "ht",
}));
</script>
