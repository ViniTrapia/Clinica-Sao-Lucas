export type HeroCampaign = {
  id: string;
  professionalName: string;
  eyebrow: string;
  headline: string;
  schedule: string;
  image: string;
  mobileImage?: string;
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
 * campanha pelo nome, basta remover o item correspondente. A fachada fica
 * guardada e não é baixada enquanto existir uma campanha ativa.
 */
export const heroCampaigns: HeroCampaign[] = [
  {
    id: 'marcelo-amaral-dia-28',
    professionalName: 'Dr. Marcelo Amaral',
    eyebrow: '28/09 · Atendimento especial',
    headline: 'Dr. Marcelo Amaral',
    schedule: 'Ortopedista e Traumatologista.',
    image: '/campaigns/marcelo-amaral-cutout.webp',
    mobileImage: '/campaigns/marcelo-amaral-cutout-mobile.webp',
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
    mobileImage: '/campaigns/bruna-bastos-cutout-mobile.webp',
    imageAlt: 'Dra. Bruna Bastos',
    visual: 'portrait-cutout',
    href: 'https://api.whatsapp.com/send?phone=5587999156764',
    linkLabel: 'Agendar consulta',
  },
];

/**
 * Só deve ser ativado depois de confirmar com o proprietário quando a última
 * campanha for retirada. Mantê-lo falso evita baixar a fachada sem necessidade.
 */
export const clinicFacadeFallbackEnabled = false;
