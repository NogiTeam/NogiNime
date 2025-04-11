// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      site: 'https://noginime.com',
  integrations: [
    sitemap({
      filter: (page) =>
        page !== 'https://www.noginime.com/genres' &&
        page !== 'https://www.noginime.com/schedule' &&
        page !== 'https://www.noginime.com/completed' &&
        page !== 'https://www.noginime.com/ongoing',
    }),
  ],
      API_URL: envField.string({
        access: "public",
        context: "server",
      }),
    },
  },
}),

  output: "server",

  adapter: vercel(),

  integrations: [tailwind()],

  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});
