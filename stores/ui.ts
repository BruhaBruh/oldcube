import { defineStore } from "pinia";

type UIState = {
  menuIsOpen: boolean;
};

type UIGetters = {};

type UIActions = {
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
};

export const useUIStore = defineStore<"ui", UIState, UIGetters, UIActions>(
  "ui",
  {
    state: () => ({
      menuIsOpen: false,
    }),
    actions: {
      openMenu() {
        this.menuIsOpen = true;
      },
      closeMenu() {
        this.menuIsOpen = false;
      },
      toggleMenu() {
        this.menuIsOpen = !this.menuIsOpen;
      },
    },
  }
);
