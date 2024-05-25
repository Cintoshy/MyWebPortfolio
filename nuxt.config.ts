// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Mark Louis Odavar",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "Mark Louis Odavar's professional portfolio",
        },
        {
          name: "keywords",
          content: "Mark Louis Odavar, portfolio, web developer, projects",
        },
        { name: "author", content: "Mark Louis Odavar" },
        { name: "robots", content: "index, follow" },
      ],
    },

    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt", "nuxt-swiper"],

  css: ["@/assets/css/main.css"],
});
