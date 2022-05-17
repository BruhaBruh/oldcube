<template>
  <header
    class="bg-gray-100 bg-opacity-50 backdrop-blur grid-container fixed top-0 z-10 w-full"
    :style="{ height: `${height}px` }"
  >
    <div class="col-span-2 flex items-center">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <Logo class="h-10 w-10" />
        <Typography variant="h3">OLDCUBE</Typography>
      </NuxtLink>
    </div>
    <nav class="col-span-8 flex items-stretch justify-center">
      <ul class="flex space-x-4 items-stretch justify-center">
        <li>
          <HeaderLink to="/news" :active="route.path === '/news'">
            Новости
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/wiki" :active="route.path === '/wiki'">
            Вики
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/updates" :active="route.path === '/updates'">
            Обновления
          </HeaderLink>
        </li>
      </ul>
    </nav>
    <div class="col-span-2 flex items-center justify-end">
      <Button color="primary">Войти</Button>
    </div>
  </header>
</template>

<script setup lang="ts">
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
