import type { HeroCampaign } from '../hero-campaigns';
import { agendaProfessionals } from './agenda-professionals';
import { weeklySchedule, type Professional, type Schedule } from './schedule';

/**
 * PÁGINAS DIÁRIAS DO HERO (médicos do dia)
 *
 * Além das campanhas fixas de `app/hero-campaigns.ts`, o hero ganha uma página
 * para cada profissional desta lista que estiver atendendo HOJE na agenda
 * semanal (`app/agenda/schedule.ts`). As páginas são geradas no navegador a
 * partir da data atual (fuso de Pernambuco), então mudam sozinhas a cada dia,
 * sem precisar editar o hero.
 *
 * Como adicionar um médico:
 * 1. Confirme que ele já existe em `app/agenda/agenda-professionals.ts`
 *    (nome, área e foto). Se não existir, cadastre-o lá primeiro; nunca
 *    invente nome, especialidade ou foto.
 * 2. Coloque o `id` dele em `heroDoctorIds` abaixo, exatamente como está no
 *    cadastro (ex.: 'karina-hirose').
 * 3. A página só aparece nos dias em que esse `id` estiver em
 *    `weeklySchedule.appointments` para a data de hoje.
 *
 * Para retirar, basta remover o `id` desta lista; o cadastro permanente e a
 * agenda semanal não precisam ser alterados. A ordem das páginas segue a ordem
 * do dia na agenda semanal. As páginas usam o mesmo visual das campanhas e não
 * exibem nenhum título indicando que se trata de uma lista de médicos.
 */
export const heroDoctorIds: string[] = [
  // Aguardando a lista de nomes enviada pelo proprietário.
];

const bookingLink = 'https://api.whatsapp.com/send?phone=5587999156764';
const clinicTimeZone = 'America/Recife';

/** Data de hoje no formato AAAA-MM-DD, no fuso da clínica. */
export function clinicToday(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: clinicTimeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

const normalizeName = (name: string) => name.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/^(dra?|mt)\.?\s+/i, '').trim().toLowerCase();

export function getHeroDoctorCampaigns(
  isoDate: string,
  existing: HeroCampaign[] = [],
  schedule: Schedule = weeklySchedule,
  professionals: Professional[] = agendaProfessionals,
): HeroCampaign[] {
  const allowed = new Set(heroDoctorIds);
  const catalog = new Map(professionals.map(person => [person.id, person]));
  const alreadyShown = new Set(existing.map(campaign => normalizeName(campaign.professionalName)));
  const date = new Date(`${isoDate}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return [];
  const dayLabel = date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', timeZone: 'UTC' });
  const weekday = date.toLocaleDateString('pt-BR', { weekday: 'long', timeZone: 'UTC' });
  const seen = new Set<string>();
  return (schedule.appointments[isoDate] ?? []).flatMap(entry => {
    const id = typeof entry === 'string' ? entry : entry.professionalId;
    const note = typeof entry === 'string' ? undefined : entry.note;
    const person = catalog.get(id);
    if (!allowed.has(id) || seen.has(id) || !person?.photo || alreadyShown.has(normalizeName(person.name))) return [];
    seen.add(id);
    const detail = [person.area, note].filter(Boolean).join(' · ');
    return [{
      id: `dia-${isoDate}-${id}`,
      professionalName: person.name,
      eyebrow: `Dia ${dayLabel} · ${weekday.charAt(0).toUpperCase() + weekday.slice(1)}`,
      headline: person.name,
      schedule: detail ? `${detail}.` : '',
      image: person.photo,
      imageAlt: person.name,
      visual: 'portrait-cutout' as const,
      href: bookingLink,
      linkLabel: 'Agendar consulta',
    }];
  });
}
