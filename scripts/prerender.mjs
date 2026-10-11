import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import react from '@vitejs/plugin-react';
import { build } from 'vite';

const rootMarker = '<div id="root"></div>';

/**
 * Pré-renderização da página inicial (plugin do `vite.static.config.ts`).
 *
 * O React monta o site no navegador; sem isto, o HTML entregue tem só
 * `<div id="root"></div>` e quem não executa JavaScript (Bing, ChatGPT,
 * prévias do WhatsApp...) vê a página vazia. Depois do build do navegador,
 * gera o HTML da página com `app/prerender.tsx` e o coloca dentro do `#root`
 * de `dist/index.html`. No navegador, `app/main.tsx` só hidrata esse HTML,
 * então visual e animações continuam os mesmos.
 */
export function prerender() {
  let config;
  return {
    name: 'clinica-sao-lucas:prerender',
    apply: 'build',
    configResolved(resolved) {
      config = resolved;
    },
    // writeBundle só roda quando o build do navegador termina e grava os arquivos.
    writeBundle: {
      order: 'post',
      sequential: true,
      async handler() {
        const serverDir = path.resolve(config.root, 'node_modules/.cache/prerender');
        await build({
          configFile: false,
          root: config.root,
          base: config.base,
          mode: config.mode,
          logLevel: 'warn',
          publicDir: false,
          plugins: [react()],
          build: {
            ssr: 'app/prerender.tsx',
            outDir: serverDir,
            emptyOutDir: true,
            rolldownOptions: { output: { entryFileNames: 'prerender.mjs' } },
          },
        });
        try {
          const { render } = await import(`${pathToFileURL(path.join(serverDir, 'prerender.mjs')).href}?t=${Date.now()}`);
          const page = render();
          const file = path.resolve(config.root, config.build.outDir, 'index.html');
          const html = await readFile(file, 'utf8');
          if (!html.includes(rootMarker)) throw new Error(`Pré-renderização: ${rootMarker} não encontrado em ${file}.`);
          await writeFile(file, html.replace(rootMarker, () => `<div id="root">${page}</div>`));
        } finally {
          await rm(serverDir, { recursive: true, force: true });
        }
      },
    },
  };
}
