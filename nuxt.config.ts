// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Mark Louis Odavar",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          key: "description",
          name: "description",
          content: "Mark Louis Odavar's professional portfolio",
        },
        {
          key: "keywords",
          name: "keywords",
          content: "Mark Louis Odavar, portfolio, web developer, projects",
        },
        { name: "author", content: "Mark Louis Odavar" },
        { name: "robots", content: "index, follow" },
        {
          key: "og:title",
          property: "og:title",
          content: "Mark Louis Odavar",
        },
        {
          key: "og:description",
          property: "og:description",
          content: "Mark Louis Odavar's professional portfolio",
        },
        {
          key: "og:image",
          property: "og:image",
          content: "https://www.marklouisodavar.cloud/logo.jpg",
        },
        {
          key: "og:url",
          property: "og:url",
          content: "https://www.marklouisodavar.cloud/",
        },
      ],
    },

    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt", "nuxt-swiper"],

  css: ["@/assets/css/main.css"],
});
