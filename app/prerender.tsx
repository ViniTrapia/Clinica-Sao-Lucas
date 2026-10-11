import { renderToString } from 'react-dom/server';
import Home from './page';

/**
 * Usado só no build (`scripts/prerender.mjs`): gera o HTML inicial da página,
 * que vai dentro do `#root` de `dist/index.html`. Assim buscadores, IAs e
 * prévias de link que não executam JavaScript leem o conteúdo do site.
 */
export function render() {
  return renderToString(<Home/>);
}
