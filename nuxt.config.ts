// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        { href: "https://virenbar.ru/assets/css/bootstrap.css", rel: "stylesheet" },
        { href: "https://virenbar.ru/assets/css/styles.css", rel: "stylesheet" },
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css", rel: "stylesheet",
          integrity: "sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==",
          crossorigin: "anonymous", referrerpolicy: "no-referrer"
        }
      ]
    }
  },
  css: [
    "@/assets/css/link-icons.css"
  ],
  runtimeConfig: {
    public: {
      json: "",
      storage: ""
    }
  }
});
