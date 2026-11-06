// Builds optimized portrait assets from the original photos in the project root.
// pic1.jpeg = high-resolution source, pic.png = background-removed cutout (same framing).
// The cutout's alpha mask is upscaled and applied to the high-res photo so the face stays sharp.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const hi = sharp('pic1.jpeg');
const { width, height } = await hi.metadata();

const rawAlpha = await sharp('pic.png')
  .ensureAlpha()
  .extractChannel('alpha')
  .resize(width, height, { kernel: 'lanczos3' })
  .blur(0.8)
  .raw()
  .toBuffer();

const rgb = await sharp('pic1.jpeg').removeAlpha().raw().toBuffer();
const rgba = Buffer.alloc(width * height * 4);

for (let y = 0; y < height; y++) {
  // Smooth bottom fade starting at 75% down to 100%
  let yFade = 1;
  const yRel = y / height;
  if (yRel > 0.75) {
    // Smooth cosine rolloff to 0
    yFade = Math.cos(((yRel - 0.75) / 0.25) * (Math.PI / 2));
  }

  for (let x = 0; x < width; x++) {
    const i = y * width + x;

    // Smooth edge fade on left & right extremes (outer 3%) so shoulders melt into dark background
    let xFade = 1;
    const xRel = x / width;
    if (xRel < 0.04) {
      xFade = xRel / 0.04;
    } else if (xRel > 0.96) {
      xFade = (1 - xRel) / 0.04;
    }

    const a = Math.round(rawAlpha[i] * yFade * xFade);

    rgba[i * 4] = rgb[i * 3];
    rgba[i * 4 + 1] = rgb[i * 3 + 1];
    rgba[i * 4 + 2] = rgb[i * 3 + 2];
    rgba[i * 4 + 3] = a;
  }
}

const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 88, alphaQuality: 92 }).toFile(`${OUT}/portrait-${w}.webp`);
  console.log(`Generated ${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">PRAKASH</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">AI / ML DEVELOPER • FULL-STACK • PYTHON</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('images built successfully with smooth background blending');
