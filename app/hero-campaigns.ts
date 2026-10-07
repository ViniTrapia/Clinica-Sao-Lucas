export type HeroCampaign = {
  id: string;
  professionalName: string;
  eyebrow: string;
  headline: string;
  schedule: string;
  image: string;
  mobileImage?: string;
  /** Arte pronta exibida inteira no celular, no lugar da composição com texto do site. */
  mobileArtwork?: string;
  imageAlt: string;
  /** Último dia (AAAA-MM-DD, fuso de Pernambuco) em que a campanha aparece; no dia seguinte ela sai do site sozinha. */
  date?: string;
  imagePosition?: string;
  visual?: 'photo' | 'portrait-cutout';
  /** Paleta da página: `pink` para campanhas como o Outubro Rosa; sem valor, a azul padrão. */
  theme?: 'pink';
  /** Itens numerados exibidos abaixo do título (computador e tablet). */
  points?: string[];
  href?: string;
  linkLabel?: string;
};

/**
 * Campanhas ativas do hero.
 *
 * Cada nova propaganda entra como um item desta lista. Toda campanha de
 * atendimento em uma data específica deve informar `date` (AAAA-MM-DD): ela
 * pode ser cadastrada antes e continua no hero até o fim desse dia; a partir do
 * dia seguinte é retirada automaticamente do site, sem precisar editar nada.
 * Depois de passada a data, o item pode ser apagado desta lista quando
 * convier. Campanhas sem `date` ficam até serem removidas à mão.
 */
export const heroCampaigns: HeroCampaign[] = [
  {
    id: 'outubro-rosa-2026',
    professionalName: 'Outubro Rosa',
    eyebrow: 'Outubro Rosa · Prevenção ao câncer de mama',
    headline: 'Fique atenta aos sinais.',
    schedule: '',
    points: [
      'Alteração na assimetria da mama;',
      'Desvio ou inversão do mamilo;',
      'Alteração na cor do mamilo;',
      'Secreção transparente, rosada ou avermelhada.',
    ],
    image: '/campaigns/outubro-rosa-cutout.webp',
    mobileImage: '/campaigns/outubro-rosa-cutout-mobile.webp',
    imageAlt: 'Mulher sorridente de camiseta rosa, de braços cruzados.',
    mobileArtwork: '/campaigns/outubro-rosa-arte.webp',
    date: '2026-10-31',
    visual: 'portrait-cutout',
    theme: 'pink',
    href: 'https://api.whatsapp.com/send?phone=5587999156764',
    linkLabel: 'Agendar consulta',
  },
];

/** Indica se a campanha ainda deve aparecer em `isoDate` (hoje, no fuso da clínica). */
export const isCampaignActive = (campaign: HeroCampaign, isoDate: string) => !campaign.date || campaign.date >= isoDate;

/**
 * Aprovado pelo proprietário: nos dias sem nenhuma página no hero (sem campanha
 * vigente e sem médico do dia na agenda) aparece a fachada da clínica. Nos
 * demais dias a fachada nem é baixada.
 */
export const clinicFacadeFallbackEnabled = true;
