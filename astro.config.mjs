import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [mdx()],
  redirects: {
    '/portfolio/pinocchio': {
      status: 301,
      destination: '/work/cs50/'
    },
    '/portfolio/flack': {
      status: 301,
      destination: '/work/cs50/'
    },
    '/portfolio/biblio': {
      status: 301,
      destination: '/work/cs50/'
    },
    '/portfolio/dotahead': {
      status: 301,
      destination: '/work/cs50/'
    }
  }
});
