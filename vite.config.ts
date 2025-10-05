import replace from '@rollup/plugin-replace';
import { defineConfig } from "vite";
import dotenv from 'dotenv';

dotenv.config();

console.log({ 'process.env.NODE_ENV': process.env.NODE_ENV });

export default defineConfig({
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
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
          'isDev': process.env.NODE_ENV === 'development',
        }),
      ]
    },
  }
});