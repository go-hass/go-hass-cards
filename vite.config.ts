import replace from '@rollup/plugin-replace';
import { defineConfig } from "vite";
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      external: ["lit"],
      input: {
        'dev-loader': "./src/dev-loader.ts",
        'go-hass-cards': "./src/index.ts",
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'dev-loader' ? 'dev-loader.js' : 'go-hass-cards.js';
        }
      },
      plugins: [
        replace({
          '__DEV_URL__': JSON.stringify(process.env.DEV_URL),
          '__HA_URL__': JSON.stringify(process.env.HA_URL),
        }),
      ]
    },
  }
});