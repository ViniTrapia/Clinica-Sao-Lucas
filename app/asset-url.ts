const reconstructedPortraits = new Set([
  'agenda/ariane-matos', 'agenda/bruna-bastos', 'agenda/caio-alves',
  'agenda/cleobenysson-cruz', 'agenda/debora-cordeiro', 'agenda/dhiego-ramalho',
  'agenda/eduardo-bastos', 'agenda/emiliane-cruz', 'agenda/joceane-ramos',
  'agenda/marcelo-amaral', 'agenda/raquel-andrade', 'agenda/renata-filgueira',
  'agenda/vinicius-aquino',
  'hero/ademy-landim', 'hero/dhiego-ramalho', 'hero/ilka-gominho',
]);

export function assetUrl(path: string) {
  const match = /^\/profissionais\/(agenda|hero)\/([^/]+)\.webp$/.exec(path);
  const key = match && `${match[1]}/${match[2]}`;
  const resolved = key && reconstructedPortraits.has(key)
    ? `/profissionais/reconstruidos/${key}.webp`
    : path;
  return `${import.meta.env.BASE_URL}${resolved.replace(/^\/+/, '')}`;
}
