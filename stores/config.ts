export const config = {
  project: {
    name: "OLDCUBE",
    description: "Приватный Minecraft сервер",
    minecraftVersion: "Java Edition 1.18.2",
  },
  apiOrigin: "https://api.oldcube.local",
  publicLinks: [
    {
      to: "/",
      label: "Главная",
    },
    {
      to: "/wiki",
      label: "Вики",
    },
    {
      to: "/stats",
      label: "Статистика",
    },
  ],
  features: [
    {
      chip: "Валюта",
      label: "Валютой сервера являются алмазы",
    },
    {
      chip: "Города",
      label: "Игроки возводят общество",
    },
    {
      chip: "Общение",
      label: "На сервере есть Plasmo Voice",
    },
    {
      chip: "Скины",
      label: "Библиотека скинов в личном кабинете",
    },
  ],
};
