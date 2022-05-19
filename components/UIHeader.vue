<template>
  <header
    class="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 h-16 flex items-stretch justify-center z-10 fixed top-0 left-0 w-full"
  >
    <div class="container">
      <p class="flex items-center md:col-span-2">
        <NuxtLink to="/" class="flex items-center space-x-1">
          <UILogo class="w-10 h-10" />
          <UITypography variant="h6" tag="span" class="hidden md:inline"
            >OLDCUBE</UITypography
          >
        </NuxtLink>
      </p>

      <nav class="hidden col-span-8 lg:flex items-stretch justify-center">
        <ul class="flex items-stretch space-x-4">
          <li class="flex items-stretch">
            <UIHeaderLink to="/">Главная</UIHeaderLink>
          </li>
          <li class="flex items-stretch">
            <UIHeaderLink to="/wiki">Вики</UIHeaderLink>
          </li>
          <li class="flex items-stretch">
            <UIHeaderLink to="/stats">Статистика</UIHeaderLink>
          </li>
        </ul>
      </nav>

      <div
        class="flex items-center justify-end md:col-start-8 lg:col-start-11 lg:col-span-2"
      >
        <UIButton class="hidden lg:flex" variant="solid" color="primary"
          >Авторизация</UIButton
        >
        <button class="h-10 w-10 flex items-center justify-center lg:hidden">
          <UIIcon icon="menu" class="fill-current" />
        </button>
      </div>
    </div>
  </header>
</template>
