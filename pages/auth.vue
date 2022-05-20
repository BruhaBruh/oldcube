<template>
  <div>
    <Head>
      <Title>Авторизация</Title>
    </Head>
    <section class="container min-h-screen pt-24 pb-8">
      <UIPaper
        class="col-span-2 md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-5 px-4 py-6 space-y-6 h-max"
      >
        <UITypography variant="h1" tag="h1" class="text-center hidden md:block"
          >Авторизация</UITypography
        >
        <UITypography variant="h3" tag="h1" class="text-center md:hidden"
          >Авторизация</UITypography
        >
        <!-- #region Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <UIInput
            v-model="login"
            placeholder="Minecraft никнейм"
            icon="account-circle"
          />
          <UIInput
            v-model="password"
            placeholder="Пароль"
            type="password"
            icon="lock"
          />
          <UIButton color="primary" variant="solid" class="w-full"
            >Войти</UIButton
          >
        </form>
        <!-- #endregion -->
        <!-- #region Divider -->
        <div class="flex items-center space-x-2">
          <UIDivider class="border-t flex-1" />
          <UITypography variant="ht" tag="span" class="text-gray-500"
            >ИЛИ</UITypography
          >
          <UIDivider class="border-t flex-1" />
        </div>
        <!-- #endregion -->
        <!-- #region Socials -->
        <div
          class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"
        >
          <UIButton
            color="primary"
            variant="solid"
            class="flex-1 bg-twitch hover:bg-twitch active:bg-twitch hover:bg-opacity-90"
            icon="twitch"
            >Twitch</UIButton
          >
          <UIButton
            color="primary"
            variant="solid"
            class="flex-1 bg-discord hover:bg-discord active:bg-discord hover:bg-opacity-90"
            icon="discord"
            >Discord</UIButton
          >
        </div>
        <!-- #endregion -->
      </UIPaper>
    </section>
  </div>
</template>

<script setup lang="ts">
const login = ref("");
const password = ref("");

const form = computed(() => ({ login: login.value, password: password.value }));

const handleSubmit = (e: Event) => {
  console.log(form.value);
};
</script>
