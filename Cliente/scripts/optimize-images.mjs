import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const outDir = path.join(publicDir, 'optimized');

const jobs = [
  { src: 'referix-logo.png', out: 'logo.webp', w: 256, q: 85 },
  { src: 'referix-logo.png', out: 'logo-sm.webp', w: 128, q: 85 },
  { src: 'referix-logo.png', out: 'favicon-32.png', w: 32, q: 90, format: 'png' },
  { src: 'referix-logo.png', out: 'favicon-192.png', w: 192, q: 90, format: 'png' },
  { src: 'ChatGPT Image 11 jun 2026, 19_58_53.png', out: 'hero.webp', w: 900, q: 78 },
  { src: 'ChatGPT Image 11 jun 2026, 20_06_54.png', out: 'promo-banner.webp', w: 1000, q: 78 },
  { src: 'Gemini_Generated_Image_2hqvfn2hqvfn2hqv.png', out: 'industry-seguros.webp', w: 600, q: 75 },
  { src: 'Gemini_Generated_Image_nzbn5jnzbn5jnzbn.png', out: 'industry-servicios.webp', w: 600, q: 75 },
  { src: 'Gemini_Generated_Image_x336z4x336z4x336.png', out: 'industry-retail.webp', w: 600, q: 75 },
  { src: 'ChatGPT Image 11 jun 2026, 20_05_49.png', out: 'industry-redes.webp', w: 600, q: 75 },
  { src: 'Gemini_Generated_Image_uj78t9uj78t9uj78.png', out: 'industry-general.webp', w: 600, q: 75 },
  { src: '1000738876.jpg', out: 'industry-inmobiliaria.webp', w: 600, q: 75 },
  { src: '1000738866.jpg', out: 'step-01.webp', w: 400, q: 78 },
  { src: '1000738867.jpg', out: 'step-02.webp', w: 400, q: 78 },
  { src: '1000738868.jpg', out: 'step-03.webp', w: 400, q: 78 },
  { src: '1000738869.jpg', out: 'step-04.webp', w: 400, q: 78 },
  { src: '1000738868.jpg', out: 'screen-dashboard.webp', w: 400, q: 78 },
  { src: '1000738876.jpg', out: 'screen-catalogo.webp', w: 400, q: 78 },
  { src: '1000738867.jpg', out: 'screen-clientes.webp', w: 400, q: 78 },
  { src: '1000738869.jpg', out: 'screen-premios.webp', w: 400, q: 78 },
  { src: '1000739110.jpg', out: 'screen-ranking.webp', w: 400, q: 78 },
  { src: '1000739119.jpg', out: 'screen-perfil.webp', w: 400, q: 78 },
  { src: '1000739120.jpg', out: 'screen-stats.webp', w: 400, q: 78 },
  { src: '1000738879.jpg', out: 'prize-01.webp', w: 400, q: 75 },
  { src: '1000738880.jpg', out: 'prize-02.webp', w: 400, q: 75 },
  { src: '1000738881.jpg', out: 'prize-03.webp', w: 400, q: 75 },
];

// Thumbnails for carousel (tiny)
const thumbJobs = [
  'screen-dashboard.webp', 'screen-catalogo.webp', 'screen-clientes.webp',
  'screen-premios.webp', 'screen-ranking.webp', 'screen-perfil.webp', 'screen-stats.webp',
].map((name) => ({
  src: path.join(outDir, name),
  out: name.replace('.webp', '-thumb.webp'),
  w: 96,
  q: 70,
  fromOptimized: true,
}));

fs.mkdirSync(outDir, { recursive: true });

async function processJob({ src, out, w, q, format, fromOptimized }) {
  const input = fromOptimized ? src : path.join(publicDir, src);
  const output = path.join(outDir, out);

  if (!fs.existsSync(input)) {
    console.warn(`⚠ Saltando (no existe): ${src}`);
    return null;
  }

  let pipeline = sharp(input).resize(w, null, { withoutEnlargement: true, fit: 'inside' });

  if (format === 'png') {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  } else {
    pipeline = pipeline.webp({ quality: q, effort: 4 });
  }

  await pipeline.toFile(output);
  const inSize = fs.statSync(input).size;
  const outSize = fs.statSync(output).size;
  const saved = Math.round((1 - outSize / inSize) * 100);
  console.log(`✓ ${out} — ${(outSize / 1024).toFixed(0)} KB (ahorro ~${saved}%)`);
  return { out, outSize };
}

console.log('Optimizando imágenes...\n');
const results = [];
for (const job of jobs) {
  const r = await processJob(job);
  if (r) results.push(r);
}
for (const job of thumbJobs) {
  const r = await processJob(job);
  if (r) results.push(r);
}

const totalKB = results.reduce((s, r) => s + r.outSize, 0) / 1024;
console.log(`\nListo. ${results.length} archivos en public/optimized/ (~${totalKB.toFixed(0)} KB total)`);
