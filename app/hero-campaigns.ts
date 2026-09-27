export type HeroCampaign = {
  id: string;
  professionalName: string;
  eyebrow: string;
  headline: string;
  schedule: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  visual?: 'photo' | 'portrait-cutout';
  href?: string;
  linkLabel?: string;
};

/**
 * Campanhas ativas do hero.
 *
 * Cada nova propaganda entra como um item desta lista. Para retirar uma
 * campanha pelo nome, basta remover o item correspondente. O hero mantém a
 * fachada original quando a lista está vazia.
 */
export const heroCampaigns: HeroCampaign[] = [
  {
    id: 'marcelo-amaral-dia-28',
    professionalName: 'Dr. Marcelo Amaral',
    eyebrow: 'Dia 28 · Atendimento especial',
    headline: 'Dr. Marcelo Amaral',
    schedule: 'Ortopedista e Traumatologista.',
    image: '/campaigns/marcelo-amaral-cutout.webp',
    imageAlt: 'Dr. Marcelo Amaral',
    visual: 'portrait-cutout',
    href: 'https://api.whatsapp.com/send?phone=5587999156764',
    linkLabel: 'Agendar consulta',
  },
  {
    id: 'bruna-bastos-28-09',
    professionalName: 'Dra. Bruna Bastos',
    eyebrow: '28/09 · Segunda-feira',
    headline: 'Dra. Bruna Bastos',
    schedule: 'Ginecologista, obstetrícia e ultrassonografia.',
    image: '/campaigns/bruna-bastos-cutout.webp',
    imageAlt: 'Dra. Bruna Bastos',
    visual: 'portrait-cutout',
    href: 'https://api.whatsapp.com/send?phone=5587999156764',
    linkLabel: 'Agendar consulta',
  },
];
