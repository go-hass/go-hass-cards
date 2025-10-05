import replace from '@rollup/plugin-replace';
import { BuildEnvironmentOptions, defineConfig, UserConfig } from "vite";
import dotenv from 'dotenv';

dotenv.config();

console.log({ 'process.env.NODE_ENV': process.env.NODE_ENV });

const isDev = process.env.NODE_ENV === 'development';
const input: NonNullable<BuildEnvironmentOptions['rollupOptions']>['input'] = {
  'go-hass-cards': "./src/index.ts",
}

if (isDev) {
  input['dev-loader'] = "./src/dev-loader.ts";
}

export default defineConfig({
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      input,
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'dev-loader' ? 'dev-loader.js' : 'go-hass-cards.js';
        }
      },
      plugins: [
        replace({
          '__DEV_URL__': JSON.stringify(process.env.DEV_URL),
          '__HA_URL__': JSON.stringify(process.env.HA_URL),
          'isDev': isDev,
        }),
      ]
    },
  }
});