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
            <UITypography variant="h1" tag="h1" class="text-center">{{
              config.project.name
            }}</UITypography>
            <UITypography variant="b1" tag="p" class="text-center mt-4">{{
              config.project.description
            }}</UITypography>
            <div
              class="flex flex-col md:flex-row items-center justify-center dark mt-8"
            >
              <UIButton variant="solid" color="secondary">
                Купить проходку
              </UIButton>
              <UILink
                :to="{ path: '/', hash: '#features' }"
                @click="handleClickAboutServer"
                variant="text"
                color="secondary"
                class="mt-1 md:mt-0 md:ml-4"
                >О сервере</UILink
              >
            </div>
            <UITypography variant="b2" tag="p" class="text-center mt-2">{{
              config.project.minecraftVersion
            }}</UITypography>
          </article>
        </section>
      </div>
    </div>
    <!-- #endregion -->
    <!-- #region Features -->
    <div id="features" class="container py-16 gap-y-8">
      <template v-for="feature in config.features">
        <UIFeatureCard
          class="col-span-2 md:col-span-4 lg:col-span-3"
          :label="feature.chip"
          >{{ feature.label }}</UIFeatureCard
        >
      </template>
    </div>
    <!-- #endregion -->
  </div>
</template>

<script setup lang="ts">
import { config } from "~~/stores/config";
import { useUIStore } from "~~/stores/ui";

const uiStore = useUIStore();

const handleClickAboutServer = () => {
  const features = document.querySelector("#features") as HTMLElement;

  window.scrollTo({ top: features.offsetTop, left: 0, behavior: "smooth" });
};
</script>
