<template>
  <aside
    class="fixed top-0 right-0 max-w-xs w-full ml-4 z-5 h-screen overflow-y-auto bg-gray-100 dark:bg-gray-800 p-4 pt-20 transition ease-in shadow-lg select-none flex flex-col items-stretch space-y-4 overscroll-contain"
    id="drawer"
    :class="computedClass"
  >
    <UIDrawerCellLink class="lg:hidden" to="/">Главная</UIDrawerCellLink>
    <UIDrawerCellLink class="lg:hidden" to="/wiki">Вики</UIDrawerCellLink>
    <UIDrawerCellLink class="lg:hidden" to="/stats"
      >Статистика</UIDrawerCellLink
    >
    <UIDivider class="h-0 lg:hidden border-t w-full" />
    <UILink
      class="lg:hidden"
      style="justify-content: start"
      variant="solid"
      color="primary"
      to="/auth"
      >Авторизация</UILink
    >
  </aside>
</template>

<script setup lang="ts">
import { useUIStore } from "~~/stores/ui";

const uiStore = useUIStore();

const computedClass = computed(() => ({
  "opacity-0 translate-x-full": !uiStore.menuIsOpen,
}));

const clickHandler = (e: MouseEvent) => {
  const ids = e.composedPath().map((v) => (v as HTMLElement).id);
  if (ids.includes("drawer") || ids.includes("drawer-btn")) return;
  uiStore.closeMenu();
};

onMounted(() => {
  watchEffect(() => {
    if (uiStore.menuIsOpen) {
      window.addEventListener("resize", uiStore.closeMenu, { once: true });
      window.addEventListener("click", clickHandler);
    } else {
      window.removeEventListener("click", clickHandler);
    }
  });
});
</script>
