import { formatFileSize } from '@/utils/file-size';
import path from 'path';

console.log('\n🚀 Starting HASS utils build process...\n');

function getUtil(filename: string): Bun.BuildConfig {
  return {
    entrypoints: [`./frontend/src/${filename}`],
    outdir: `./src/hass/${path.dirname(filename)}`,
  };
}

const start = performance.now();
const result = await Bun.build({
  ...getUtil('common/navigate.ts'),
  plugins: [],
  splitting: true,
  minify: false,
  define: {
    __DEMO__: '',
  },
});

if (!result.success) {
  console.error('Build failed:', result.logs);
  process.exit(1);
}

const end = performance.now();

const outputTable = await Promise.all(
  result.outputs.map(async (output) => {
    const file = Bun.file(output.path);
    const content = await file.text();
    await file.write(['/*\n * Auto-generated file. Do not edit directly.\n */', '', content].join('\n'));
    return {
      File: output.path.replace(/^.+\/src\/hass\//, ''),
      Type: output.kind,
      Size: formatFileSize(output.size),
    };
  }),
);

console.table(outputTable);
const buildTime = (end - start).toFixed(2);

console.log(`\n✅ Build completed in ${buildTime}ms\n`);
