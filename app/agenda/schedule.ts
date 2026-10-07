/** Grupo de especialidades exibido no painel do profissional (título opcional, como na arte de divulgação). */
export type SpecialtyGroup = { title?: string; items: string[] };
export type Professional = { id: string; name: string; area?: string; photo?: string; heroPhoto?: string; bio?: string; summary?: string; specialties?: SpecialtyGroup[]; inactive?: boolean };
export type Schedule = {
  weekStart: string;
  status: 'reference' | 'confirmed';
  appointments: Record<string, (string | { professionalId: string; note?: string })[]>;
  /** Datas (AAAA-MM-DD) sem atendimento; exibidas como "Sem atendimento" em vez de "a confirmar". */
  closedDays?: string[];
};

// Semana enviada pelo usuário em 05/10/2026 (segunda 05/10 a sábado 10/10).
// O futuro /admin poderá fornecer este mesmo formato, sem alterar o componente.
// Robson (06/10) e Dhiego (08/10) foram cadastrados em 06/10/2026, com os dados recebidos nas artes da clínica.
export const weeklySchedule: Schedule = {
  weekStart: '2026-10-04',
  status: 'confirmed',
  closedDays: ['2026-10-04'],
  appointments: {
    '2026-10-05': ['ariane-matos', 'giselle-skarlet', 'ilka-gominho', 'joceane-ramos'],
    '2026-10-06': ['louise-torres', 'giselle-skarlet', 'itala-freire', 'ermita-galdina', 'maria-paula', 'layane-barros', 'robson-oliveira'],
    '2026-10-07': ['alexandre-torres', 'giselle-skarlet', 'silvania-melo', 'ludmila-magalhaes', 'karina-hirose'],
    '2026-10-08': ['ariane-matos', 'giselle-skarlet', 'maria-paula', 'itala-freire', 'ludmila-magalhaes', 'ademy-landim', 'dhiego-ramalho'],
    '2026-10-09': ['flora-carolina', 'edilma-carvalho', 'silvania-melo', 'giselle-skarlet', 'maria-paula', 'ludmila-magalhaes'],
    '2026-10-10': ['carolline-carvalho', 'ludmila-magalhaes', 'silvania-melo', 'giselle-skarlet', 'louise-torres'],
  },
};

export function getWeekDays(schedule: Schedule, professionals: Professional[]) {
  const start = new Date(`${schedule.weekStart}T12:00:00Z`);
  if (Number.isNaN(start.getTime()) || start.toISOString().slice(0, 10) !== schedule.weekStart) return [];
  const catalog = new Map(professionals.map(person => [person.id, person]));
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setUTCDate(start.getUTCDate() + index);
    const iso = date.toISOString().slice(0, 10);
    return {
      iso,
      weekday: date.toLocaleDateString('pt-BR', { weekday: 'long', timeZone: 'UTC' }),
      label: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', timeZone: 'UTC' }),
      closed: schedule.closedDays?.includes(iso) ?? false,
      people: [...new Set(schedule.appointments[iso] ?? [])].flatMap(entry => {
        const id = typeof entry === 'string' ? entry : entry.professionalId;
        const note = typeof entry === 'string' ? undefined : entry.note;
        const person = catalog.get(id);
        return person ? [{ ...person, note }] : [];
      }),
    };
  });
}
