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

// Semana enviada pelo usuário em 14/11/2026 (segunda 16/11 a domingo 22/11).
// Começa na segunda porque a lista vai até o domingo 22/11 (Joceane); o domingo 15/11 não teve atendimento.
// Terça veio escrita como "17/08" na lista; foi lida como 17/11.
// Sexta 20/11 é feriado. Thaline, Rodrigo e Milena (segunda 16/11; Milena também na quinta 19/11)
// ainda não têm cadastro; ficam de fora até chegarem foto e área.
// O futuro /admin poderá fornecer este mesmo formato, sem alterar o componente.
export const weeklySchedule: Schedule = {
  weekStart: '2026-11-16',
  status: 'confirmed',
  appointments: {
    '2026-11-16': ['ariane-matos', 'giselle-skarlet', 'ilka-gominho'],
    '2026-11-17': ['louise-torres', 'giselle-skarlet', 'itala-freire', 'ermita-galdina', 'maria-paula', 'caio-alves', 'mamografia'],
    '2026-11-18': ['alexandre-torres', 'giselle-skarlet', 'silvania-melo', 'ludmila-magalhaes', 'eduardo-bastos'],
    '2026-11-19': ['alexandre-torres', 'ariane-matos', 'giselle-skarlet', 'maria-paula', 'itala-freire', 'ademy-landim'],
    '2026-11-21': ['carolline-carvalho', 'ludmila-magalhaes', 'silvania-melo', 'giselle-skarlet', 'samuel-caetano', 'louise-torres', 'joceane-ramos'],
    '2026-11-22': ['joceane-ramos'],
  },
  closedDays: ['2026-11-20'],
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
