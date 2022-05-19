<template>
  <div>
    <Head>
      <Title>Главная</Title>
    </Head>
    <!-- #region Hero -->
    <div
      class="bg-primary-600 text-gray-50 min-h-screen overflow-hidden relative pt-24 pb-8 grid"
      style="z-index: 1"
    >
      <UIConfetti
        class="absolute top-0 left-0 min-h-full min-w-full"
        style="z-index: -1"
      />
      <div class="container h-full">
        <section class="col-span-full flex items-center">
          <article class="w-full">
            <UITypography variant="h1" tag="h1" class="text-center"
              >OLDCUBE</UITypography
            >
            <UITypography variant="b1" tag="p" class="text-center mt-4"
              >Приватный Minecraft сервер</UITypography
            >
            <div
              class="flex flex-col md:flex-row items-center justify-center dark mt-8"
            >
              <UIButton variant="solid" color="secondary">
                Купить проходку
              </UIButton>
              <UIButton variant="text" color="secondary" class="mt-1 md:mt-0"
                >О сервере</UIButton
              >
            </div>
            <UITypography variant="b2" tag="p" class="text-center mt-2"
              >Java Edition 1.18.2</UITypography
            >
          </article>
        </section>
      </div>
    </div>
    <div class="container py-16 gap-y-8">
      <UIFeatureCard
        class="col-span-2 md:col-span-4 lg:col-span-3"
        label="Валюта"
        >Валютой сервера являются алмазы</UIFeatureCard
      >
      <UIFeatureCard
        class="col-span-2 md:col-span-4 lg:col-span-3"
        label="Города"
        >Игроки возводят общество</UIFeatureCard
      >
      <UIFeatureCard
        class="col-span-2 md:col-span-4 lg:col-span-3"
        label="Общение"
        >На сервере есть Plasmo Voice</UIFeatureCard
      >
      <UIFeatureCard
        class="col-span-2 md:col-span-4 lg:col-span-3"
        label="Скины"
        >Библиотека скинов в личном кабинете</UIFeatureCard
      >
    </div>
    <!-- #endregion -->
  </div>
</template>
