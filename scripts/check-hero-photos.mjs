// Confere os recortes dos médicos do hero (campo `heroPhoto` em app/agenda/agenda-professionals.ts)
// antes do build. Falha quando um recorte tem erro de enquadramento que o site deixaria visível:
// sem transparência, cabeça encostada no topo, corpo cortado pela lateral ou recorte que não chega
// à base da foto (retrato "flutuando").
//
// `node scripts/check-hero-photos.mjs --sheet saida.png` também gera uma folha com todos os
// recortes sobre o azul do hero, para conferir a olho o que a checagem automática não mede
// (por exemplo, fundo aparecendo entre o pescoço e a gola, como já aconteceu).
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const root = new URL('..', import.meta.url).pathname;
const catalog = readFileSync(join(root, 'app/agenda/agenda-professionals.ts'), 'utf8');
const photos = [...new Set([...catalog.matchAll(/"heroPhoto":\s*"([^"]+)"/g)].map(match => match[1]))];

const problems = [];
const checked = [];
for (const photo of photos) {
  const file = join(root, 'public', photo);
  if (!existsSync(file)) {
    problems.push(`${photo}: arquivo não encontrado.`);
    continue;
  }
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const meta = await sharp(file).metadata();
  const opaque = (x, y) => data[(y * width + x) * 4 + 3] > 128;
  const rowHas = y => { for (let x = 0; x < width; x++) if (opaque(x, y)) return true; return false; };
  const fail = message => problems.push(`${photo}: ${message}`);

  if (!meta.hasAlpha) fail('o recorte não tem fundo transparente.');
  if (height < 700) fail(`resolução baixa (${width}x${height}); use pelo menos 700 px de altura.`);
  if (rowHas(0)) fail('a cabeça encosta no topo da imagem (fica cortada no hero).');
  for (let y = 0; y < Math.round(height * 0.55); y++) {
    if (opaque(0, y) || opaque(width - 1, y)) {
      fail(`o corpo encosta na lateral da imagem na altura ${Math.round((y / height) * 100)}% (fica cortado no hero).`);
      break;
    }
  }
  let base = 0;
  for (let x = 0; x < width; x++) if (opaque(x, height - 1)) base++;
  if (base < width * 0.3) fail('o recorte não chega à base da imagem (o retrato fica flutuando no hero).');
  checked.push({ photo, file, width, height });
}

const sheetIndex = process.argv.indexOf('--sheet');
if (sheetIndex > -1 && process.argv[sheetIndex + 1]) {
  const tile = 420;
  const tiles = await Promise.all(checked.map(({ file }) =>
    sharp(file).resize({ height: tile, width: tile, fit: 'contain', background: { r: 17, g: 39, b: 101, alpha: 1 } }).flatten({ background: '#112765' }).png().toBuffer()));
  await sharp({ create: { width: tiles.length * (tile + 10), height: tile, channels: 3, background: '#ffffff' } })
    .composite(tiles.map((input, index) => ({ input, left: index * (tile + 10), top: 0 })))
    .png().toFile(process.argv[sheetIndex + 1]);
  console.log(`Folha de conferência gerada em ${process.argv[sheetIndex + 1]}.`);
}

if (problems.length) {
  console.error('Recortes do hero com problema:\n' + problems.map(problem => `- ${problem}`).join('\n'));
  process.exit(1);
}
console.log(`Recortes do hero conferidos: ${checked.length} ok.`);
