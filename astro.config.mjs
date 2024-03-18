import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import prefetch from '@astrojs/prefetch';
import node from '@astrojs/node';
import vercel from "@astrojs/vercel/serverless";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), react(), prefetch(), db()],
  output: 'server',
  adapter: vercel()
});