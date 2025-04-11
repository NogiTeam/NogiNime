// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      API_URL: envField.string({
        access: "public",
        context: "server",
      }),
    },
  },

  site: 'https://noginime.com',

  output: "server",

  adapter: vercel(),

  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        page !== 'https://www.noginime.com/genres' &&
        page !== 'https://www.noginime.com/schedule' &&
        page !== 'https://www.noginime.com/completed' &&
        page !== 'https://www.noginime.com/ongoing',
    }),
  ],

  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});
