export type HeroCampaign = {
  id: string;
  professionalName: string;
  eyebrow: string;
  headline: string;
  schedule: string;
  image: string;
  mobileImage?: string;
  imageAlt: string;
  /** Último dia (AAAA-MM-DD, fuso de Pernambuco) em que a campanha aparece; no dia seguinte ela sai do site sozinha. */
  date?: string;
  imagePosition?: string;
  visual?: 'photo' | 'portrait-cutout';
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
export const heroCampaigns: HeroCampaign[] = [];

/** Indica se a campanha ainda deve aparecer em `isoDate` (hoje, no fuso da clínica). */
export const isCampaignActive = (campaign: HeroCampaign, isoDate: string) => !campaign.date || campaign.date >= isoDate;

/**
 * Aprovado pelo proprietário: nos dias sem nenhuma página no hero (sem campanha
 * vigente e sem médico do dia na agenda) aparece a fachada da clínica. Nos
 * demais dias a fachada nem é baixada.
 */
export const clinicFacadeFallbackEnabled = true;
