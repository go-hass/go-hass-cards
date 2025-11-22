import fs, { watch } from 'fs';
import { formatFileSize } from '@/utils/file-size';

const distDir = './dist';

console.log('\n🚀 Starting build process...\n');

const isDev = process.env.NODE_ENV === 'development';

async function build(_event?: fs.WatchEventType, filename?: string | null) {
  if (filename) {
    console.log(`File changed: ${filename}`);
  }
  const start = performance.now();
  const result = await Bun.build({
    plugins: [],
    entrypoints: ['./src/go-hass-cards.ts', isDev && './src/dev-loader.ts'].filter(Boolean),
    outdir: distDir,
    splitting: true,
    minify: true,
    define: {
      __DEV_URL__: process.env.DEV_URL ? JSON.stringify(process.env.DEV_URL) : '',
      isDev: isDev ? 'true' : '',
    },
  });

  if (!result.success) {
    console.error('Build failed:', result.logs);
    process.exit(1);
  }

  const end = performance.now();

  const outputTable = result.outputs
    .map((output) => ({ File: output.path.split('/').pop(), Type: output.kind, Size: formatFileSize(output.size) }))
    .filter(Boolean);

  console.table(outputTable);
  const buildTime = (end - start).toFixed(2);

  console.log(`\n✅ Build completed in ${buildTime}ms\n`);
}

if (isDev) {
  console.log('🛠️  Development mode enabled. Watching for file changes...\n');
  watch('./src', { recursive: true }, (...args) => build(...args).catch(console.error));
  await build().catch(console.error);
} else {
  await build();
}
