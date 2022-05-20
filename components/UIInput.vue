<template>
  <div
    class="h-10 rounded-lg focus-within:ring text-gray-500 dark:text-gray-400 px-3 space-x-2 flex items-center input-wrapper"
    :class="computedClass"
    style="min-height: 40px"
    @click="handleClickOnInput"
  >
    <template v-if="props.icon">
      <UIIcon
        :icon="props.icon"
        class="fill-current h-7 w-7"
        style="min-width: 28px; min-height: 28px"
      />
    </template>
    <input
      class="bg-transparent flex-1 outline-none focus:ring-0 dark:text-gray-50 text-gray-900 placeholder:text-gray-500 disabled:text-gray-500 dark:placeholder:text-gray-400 dark:disabled:text-gray-400 text-sm input"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :value="props.modelValue"
      :type="props.type"
      style="width: 1px"
      @input="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
import { IconName } from "./UIIcon.vue";

const props = defineProps<{
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  modelValue?: string;
  type?: string;
  icon?: IconName;
}>();
const emit = defineEmits<{
  (event: "update:modelValue", newValue: string): void;
}>();

const handleClickOnInput = (e: MouseEvent) => {
  const wrapper = e
    .composedPath()
    .find((v) =>
      (v as HTMLElement).classList.contains("input-wrapper")
    ) as HTMLElement;

  wrapper.childNodes.forEach((v: HTMLElement) => {
    if (!v.classList.contains("input")) return;
    v.focus();
  });
};

const updateValue = (e: InputEvent) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};

const computedClass = computed(() => ({
  "hover:ring-1 bg-gray-200 dark:bg-gray-700": !props.disabled,
  "bg-gray-400 dark:bg-gray-500": props.disabled,
}));
</script>
