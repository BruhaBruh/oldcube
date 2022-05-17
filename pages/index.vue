<template>
  <div>
    <Head>
      <Title>Главная</Title>
    </Head>
    <div
      class="h-screen relative overflow-hidden flex flex-col items-center justify-center text-gray-50 px-4"
    >
      <div class="absolute top-0 left-0 h-full w-full">
        <img
          class="object-cover min-h-full min-w-full"
          src="/img/landing-hero.png"
          alt=""
        />
        <div
          class="absolute top-0 left-0 bg-gray-900 bg-opacity-50 w-full h-full"
        />
      </div>
      <UITypography variant="h1" class="z-5 mb-6">OLDCUBE</UITypography>
      <UITypography variant="b1" class="z-5">
        Приватный сервер Minecraft
      </UITypography>
    </div>
  </div>
</template>
