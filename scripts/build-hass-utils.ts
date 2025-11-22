import { formatFileSize } from '@/utils/file-size';

const distDir = './src/hass/utils';

console.log('\n🚀 Starting HASS utils build process...\n');

const getUtilFile = (filename: string) => `./frontend/src/${filename}`;

const start = performance.now();
const result = await Bun.build({
  plugins: [],
  entrypoints: [getUtilFile('common/navigate.ts')],
  outdir: distDir,
  splitting: true,
  minify: false,
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
