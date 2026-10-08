# Mapa do projeto

## Tecnologia e publicação

- Site estático em React + Vite. `pnpm build` gera a pasta `dist/` (configuração em `vite.static.config.ts`).
- **Produção:** Cloudflare Workers com assets estáticos (`wrangler.jsonc`, pasta `./dist`). Cada merge na `main` publica sozinho.
  - Endereços: https://clinicasaolucas.app.br, https://www.clinicasaolucas.app.br e https://clinica-sao-lucas.vinici360.workers.dev.
- **Cópia antiga:** GitHub Pages em https://vinitrapia.github.io/Clinica-Sao-Lucas/ (workflow `.github/workflows/deploy-pages.yml`, com o prefixo `/Clinica-Sao-Lucas/`). As imagens usam `app/asset-url.ts`, que acompanha esse prefixo.
- A **prévia da Cloudflare nos PRs falha sempre**. É um problema antigo da configuração de prévias, não do código; o deploy de produção funciona. Não perca tempo tentando consertar isso dentro de um PR de outra coisa.

## Verificação antes de publicar

```bash
pnpm install
npx tsc --noEmit
pnpm lint
pnpm build                     # já roda scripts/check-hero-photos.mjs antes do vite build
node scripts/check-hero-photos.mjs --sheet folha.png   # conferência a olho dos recortes do hero
```

O padrão de trabalho com o Vinícius: prints de computador, tablet e celular **antes** de publicar, e publicar só depois que ele aprovar.

## Onde fica cada parte do site

| Parte | Componente | Estilos | Dados / imagens |
|---|---|---|---|
| Página inteira, seção Profissionais | `app/page.tsx` | `app/globals.css`, `app/portrait-framing.css` | `app/agenda/photo-framing.ts` (enquadramento por foto) |
| Hero (campanhas + médicos do dia) | `app/HeroCampaigns.tsx` | `app/hero-campaigns.css` | `app/hero-campaigns.ts`, `app/agenda/hero-doctors.ts`, `public/profissionais/hero/`, `public/campaigns/` |
| Agenda semanal (cards e quadro "+N") | `app/agenda/WeeklySchedule.tsx` | `app/agenda/weekly.css` | `app/agenda/schedule.ts` |
| Painel ao clicar no profissional da agenda | `app/agenda/ProfessionalPanel.tsx` | `app/agenda/professional-panel.css` | campo `specialties` do cadastro |
| Odontologia (dentistas) | `app/DentistrySection.tsx` | `app/dentistry.css` | `public/dentistry/` |
| Galeria do interior da clínica | `app/ClinicGallery.tsx` | `app/clinic-gallery.css` | `public/clinic-gallery/` |
| Cadastro permanente dos profissionais | — | — | `app/agenda/agenda-professionals.ts` |

## Cadastro, agenda e hero

- **Cadastro permanente:** `app/agenda/agenda-professionals.ts`. Cada profissional tem `id`, `name`, `area`, `photo` (agenda, painel e seção Profissionais), `heroPhoto` opcional (recorte do hero), `bio` e `specialties`.
- **Inativos:** quem não atende mais fica no cadastro com `"inactive": true`. Isso o tira da seção Profissionais, mas não apaga. Para voltar, basta remover a marcação. Nunca apague um profissional do cadastro.
- **Agenda da semana:** `weeklySchedule` em `app/agenda/schedule.ts`. Hoje vai de **04/10 a 10/10/2026** (domingo 04/10 em `closedDays`, "Sem atendimento"). Uma ocorrência pode ter observação própria com `{ professionalId, note }` (ex.: "Louise (E.D.A)" vira `{ professionalId: 'louise-torres', note: 'E.D.A' }`), sem criar profissional novo.
- **Médicos do dia no hero:** `heroDoctorIds` em `app/agenda/hero-doctors.ts`. Cada `id` dessa lista que estiver na agenda de hoje (fuso America/Recife) ganha uma página no hero, gerada no navegador. Lista atual: alexandre-torres, louise-torres, ilka-gominho, ademy-landim, luiz-claudio, robson-oliveira, dhiego-ramalho.
- **Campanhas manuais:** `heroCampaigns` em `app/hero-campaigns.ts` (hoje vazia na `main`). Toda campanha com data deve ter `date` (último dia); ela sai sozinha no dia seguinte.
- **Dias sem nenhuma página no hero** mostram a fachada da clínica (`clinicFacadeFallbackEnabled`).

## Outros arquivos de referência

- `construcoes.md`: registro de design ("Sites Incríveis"). Cada mudança visual grande ganhou uma linha. A skill "Sites Incríveis" que o Vinícius cita não está disponível nas sessões do Claude; o critério usado tem sido esse arquivo e o estilo existente do site.
- `BRIEF.md`: brief da abertura (hero).
- `README.md`: instruções curtas, incluindo os médicos do dia no hero.
