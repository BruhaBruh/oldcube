<template>
  <header
    class="bg-gray-100 bg-opacity-50 backdrop-blur grid-container fixed top-0 z-10 w-full"
    :style="{ height: `${height}px` }"
  >
    <div class="sm:col-span-2 lg:col-span-1 xl:col-span-3 flex items-center">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <UILogo class="h-10 w-10" />
        <UITypography variant="h3" class="hidden sm:block">
          OLDCUBE
        </UITypography>
      </NuxtLink>
    </div>
    <nav
      class="lg:col-span-2 xl:col-span-6 hidden lg:flex items-stretch justify-center"
    >
      <ul class="flex space-x-4 items-stretch justify-center">
        <li>
          <UIHeaderLink to="/news" :active="route.path === '/news'">
            Новости
          </UIHeaderLink>
        </li>
        <li>
          <UIHeaderLink to="/wiki" :active="route.path === '/wiki'">
            Вики
          </UIHeaderLink>
        </li>
        <li>
          <UIHeaderLink to="/updates" :active="route.path === '/updates'">
            Обновления
          </UIHeaderLink>
        </li>
      </ul>
    </nav>
    <div
      class="sm:col-span-2 lg:col-span-1 xl:col-span-3 flex items-center justify-end"
    >
      <button
        class="flex lg:hidden items-center justify-center text-gray-900 h-10 w-10"
      >
        <ChevronDownIcon class="w-6 h-6 text-current" />
      </button>
      <UIButton color="primary" class="hidden lg:flex">Войти</UIButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/outline";
const route = useRoute();

//#region Header height on scroll
const height = ref(96);

const eventListener = (e: Event & { currentTarget: Window }) => {
  const scrollY = e.currentTarget.scrollY;

  const value = scrollY / 24;

  const newValue = 96 - value;

  if (newValue < 64) {
    height.value = 64;
  } else {
    height.value = newValue;
  }
};

onMounted(() => {
  window.addEventListener("scroll", eventListener);
  window.addEventListener("resize", eventListener);
});

onUnmounted(() => {
  window.removeEventListener("scroll", eventListener);
  window.removeEventListener("resize", eventListener);
});
//#endregion
</script>
