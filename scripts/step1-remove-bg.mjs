/**
 * Step 1: Remove background using @imgly/background-removal-node (uses its own sharp 0.32).
 * Saves result as a tmp file for the main build script to consume.
 */
import removeBackground from '@imgly/background-removal-node';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const srcPath = path.join(ROOT, 'pic1.jpeg');
const outPath = path.join(ROOT, 'pic.png');

console.log('⏳ Removing background — first run downloads a small AI model (~50 MB)…');

const srcBuffer = readFileSync(srcPath);
const blob = new Blob([srcBuffer], { type: 'image/jpeg' });

const resultBlob = await removeBackground(blob, {
  model: 'medium',
  output: { format: 'image/png', quality: 1 },
});

const arrayBuf = await resultBlob.arrayBuffer();
const resultBuf = Buffer.from(arrayBuf);
writeFileSync(outPath, resultBuf);

console.log(`✅ pic.png saved — background removed (${Math.round(resultBuf.length / 1024)} KB)`);

