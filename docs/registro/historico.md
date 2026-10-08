# Histórico de mudanças

Entradas mais novas no topo. Formato e regras em [`README.md`](README.md#como-registrar-uma-mudança-vale-para-codex-e-claude).

## 2026-10-08 — Revisão para o lançamento: fotos nítidas, textos e segurança
- Quem: Claude
- Onde: branch `claude/resumo-codex-wjqp2p` (PR de revisão) — não publicado até a aprovação do Vinícius.
- O que mudou: 17 fotos da agenda, do painel e da seção Profissionais que estavam pequenas e apareciam borradas no painel foram refeitas a partir das artes da TV, com 1,8× a 2,9× mais resolução (Arielly, Bryan, Carolline, Edilma, Eloisa, Ermita, Ítala, Karina, Layane, Ludmila, Maria Paula, Nayara, Reynaldo, Silvania, Suila, Thais, Vivianne). O enquadramento é o mesmo de antes (mesma área e proporção, inclusive o espelhamento da Layane), então `photo-framing.ts` não mudou. A mancha clara ao lado do ombro da Layane saiu. A foto do Dr. Alexandre na agenda e na equipe passou a usar o recorte do hero já corrigido no PR #21, que fecha a gola atrás do pescoço.
- Textos: acentos nas áreas (Fonoaudióloga, Psicóloga, Psicóloga Clínica e Neuropsicóloga, Psicóloga Infantil, Terapeuta Ocupacional, Procedimentos Estéticos, Ultrassonografia) e o nome da cidade unificado como "Belém do São Francisco" (havia "de" e "do" misturados).
- Hero: a numeração 01/02 ganhou um fundo azul translúcido, porque sobre o jaleco branco ela sumia. No celular (até 520 px), a pedido do Vinícius, o retrato dos médicos do dia ficou bem maior (de 55–79% para 66–91% da altura do hero), sem encostar no texto: a especialidade quebra a linha (`max-width:min(25ch,44vw)`) e o link "Agendar consulta" ficou com 150 px. Conferido nos 6 médicos do hero de 320 a 520 px por medição automática de sobreposição.
- Segurança: `public/_headers` adiciona cabeçalhos de proteção (sem enquadramento em outros sites, HSTS, nosniff, permissões de câmera/microfone desligadas), cache longo para `/assets/` e `noindex` no endereço `workers.dev`. A página de comparação `/teste-bracos.html` saiu do site público.
- Arquivos: `public/profissionais/agenda/*.webp` (18), `app/agenda/agenda-professionals.ts`, `app/hero-campaigns.css`, `app/page.tsx`, `app/ClinicGallery.tsx`, `app/layout.tsx`, `index.html`, `public/_headers`.
- Atenção: os recortes usam a parte visível das artes; onde a faixa azul da arte cobre o corpo (fim da foto de Carolline, Ermita, Karina e Ludmila), a parte de baixo continua vindo da foto anterior, com transição suave. Giselle, Flora e Samuel não puderam ser melhorados (sem arte ou arte diferente da foto); Robson, Louise, Ademy e Ilka já tinham boa resolução e ficaram como estavam.

## 2026-10-08 — Retratos reconstruídos, hero e perfis da equipe
- Quem: Codex.
- Onde: PR #23, branch `codex/portrait-framing`, partindo da `main` após o PR #22 — publicado.
- O que mudou: após o Vinícius aprovar visualmente a prévia, 16 recortes com braços ou laterais cortadas passaram a usar versões reconstruídas em `public/profissionais/reconstruidos/` (3 do hero e 13 da agenda/equipe). Os originais continuam em `public/profissionais/{agenda,hero}/` para comparação e reversão. `app/asset-url.ts` escolhe as versões novas para toda a página; `app/agenda/photo-framing.ts` enquadra os novos arquivos na equipe.
- Hero: em telas grandes o retrato começa maior, diminui durante a rolagem e termina mais à direita, com espaço entre corpo e texto. Após a revisão local do Vinícius, o retrato final no computador ficou um pouco maior (23% da largura e 74% da altura no estado fechado). Tablet e celular conservam recuos próprios. Alterações em `app/HeroCampaigns.tsx` e `app/hero-campaigns.css`.
- Perfis: os 21 cadastros que não tinham `bio` receberam textos curtos e individuais, baseados apenas nas áreas, resumos e especialidades já registrados em `app/agenda/agenda-professionals.ts`. São 15 profissionais ativos e 6 inativos; todos os 39 ativos agora mostram perfil no hover, foco e painel móvel, sem mudar o estilo.
- Comparação: `/teste-bracos.html` mostrava originais e novos recortes lado a lado (retirada do site público na revisão para o lançamento; continua no histórico do git). A página principal usa as versões reconstruídas.
- Verificação: script do hero agora analisa toda a lateral da foto efetivamente servida. Codex conferiu o hero aberto e fechado no computador, além de tablet e celular; `tsc --noEmit`, ESLint, checagem dos 7 recortes do hero e build Vite passaram. Após o merge, conferiu `clinicasaolucas.app.br`: 39 cards ativos, 39 perfis, imagem reconstruída no hero, perfil móvel e nenhuma imagem quebrada na página carregada.

## 2026-10-08 — Registro compartilhado criado
- Quem: Claude
- Onde: esta pasta (`docs/registro/`) — só documentação, nada do site mudou.
- O que mudou: resumo de tudo o que foi feito de 05/10 a 08/10 para Codex e Claude trabalharem juntos.

## 2026-10-08 — Pescoço do Dr. Alexandre no hero e checagem dos recortes
- Quem: Claude
- Onde: PR #21 — publicado
- O que mudou: a remoção de fundo tinha apagado a gola do jaleco atrás do pescoço no recorte do hero; a gola foi recomposta. O build passou a conferir todos os recortes do hero (`scripts/check-hero-photos.mjs`) e o `AGENTS.md` ganhou a regra da folha de conferência.
- Arquivos: `public/profissionais/hero/alexandre-torres.webp`, `scripts/check-hero-photos.mjs`, `package.json`, `AGENTS.md`.
- Atenção: a checagem só olha os 55% de cima da foto e deixou passar Ademy, Dhiego e Ilka. A foto da agenda do Alexandre continua com o defeito. Ver `02-fotos-e-recortes.md`.

## 2026-10-08 — Lista de profissionais ativos de 08/10
- Quem: Claude
- Onde: PR #20 — publicado
- O que mudou: Débora Cordeiro, Nayara Kelly e Suila Lima voltaram à seção Profissionais; Dr. Vinícius Alves saiu (inativo). Continuam inativos: Emiliane Cruz, Gracenilda Moura, Raquel Andrade, Vinícius Aquino e Yara Marques. MT. Samuel Caetano mantido. Seção com 39 pessoas, sem separar por categoria.
- Arquivos: `app/agenda/agenda-professionals.ts`.

## 2026-10-07 — Profissionais inativos e Dr./Dra. com ponto
- Quem: Claude
- Onde: PR #17 — publicado
- O que mudou: criada a marcação `inactive: true` (tira da seção Profissionais sem apagar). Todos os "Dr"/"Dra" passaram a ter ponto (Luiz Cláudio, Reynaldo, Ariane, Ermita).
- Arquivos: `app/agenda/agenda-professionals.ts`, `app/agenda/schedule.ts`, `app/page.tsx`.

## 2026-10-07 — Odontologia: destaque dos dentistas
- Quem: Claude
- Onde: PRs #15, #16, #18 e #19 — publicados
- O que mudou: CRO, nome e área num bloco próprio em destaque (#15). Os cards com moldura (#16) foram **retirados a pedido** (#18): os dentistas voltaram a ficar direto no fundo, com a placa laranja do nome embaixo e brilho na placa selecionada. Fotos limitadas à largura da placa; a da Dra. Isadora teve as laterais suavizadas (#19).
- Arquivos: `app/DentistrySection.tsx`, `app/dentistry.css`, `public/dentistry/`.
- Atenção: o Vinícius pediu para mexer só no bloco de identidade do dentista, nada mais na seção.

## 2026-10-07 — Centralizar a seção Profissionais
- Quem: Claude
- Onde: PR #13 — publicado
- O que mudou: todos centralizados pelo rosto, na mesma altura do cartão; bordas cortadas das fotos originais se dissolvem.
- Arquivos: `app/agenda/photo-framing.ts`, `app/portrait-framing.css`, `app/page.tsx`.

## 2026-10-07 — Enquadramento padronizado da cintura para cima
- Quem: Claude
- Onde: PR #12 — publicado
- O que mudou: seção Profissionais, Odontologia, hero, cards da agenda e painel seguem o mesmo padrão. Recortes da agenda refeitos nos próprios arquivos; margens transparentes aparadas; fotos do hero apoiadas na base.
- Arquivos: `public/profissionais/agenda/`, `public/profissionais/hero/`, `public/dentistry/`, `app/agenda/photo-framing.ts`, `app/portrait-framing.css`.

## 2026-10-07 — Novo visual da agenda e quadro "+N"
- Quem: Claude
- Onde: PRs #11 e #14 — publicados
- O que mudou: cada profissional num card azul arredondado com o nome em caixa alta numa faixa laranja (altura igual em todos) e a especialidade fora do card, no fundo branco. O painel ao clicar mostra o retrato inteiro em fundo claro com os arcos da marca. O quadro "+N Profissionais disponíveis" segue o mesmo visual.
- Arquivos: `app/agenda/WeeklySchedule.tsx`, `app/agenda/weekly.css`, `app/agenda/ProfessionalPanel.tsx`, `app/agenda/professional-panel.css`, `construcoes.md`.

## 2026-10-06 — Painel de especialidades ao clicar na agenda
- Quem: Claude
- Onde: PR #10 — publicado
- O que mudou: clique na foto da agenda abre painel com retrato, área, apresentação, especialidades e "Agendar consulta" (WhatsApp). 21 profissionais novos cadastrados a partir das artes da TV da clínica, com fotos recortadas localmente; especialidades transcritas no campo `specialties`.
- Atenção: Dr. Caio Alves não tem especialidades na arte; Luiz Cláudio, Flora Carolina e Samuel Caetano não estavam no arquivo (painel só com área e apresentação).

## 2026-10-06 — Hero: datas, animação e fachada
- Quem: Claude
- Onde: PRs #7, #8 e #9 — publicados
- O que mudou: campanhas manuais com `date` saem sozinhas no dia seguinte (as do Dr. Marcelo Amaral e da Dra. Bruna Bastos, de 28/09, foram retiradas e a lista ficou vazia); ajuste da animação e do enquadramento das páginas diárias; nos dias sem nenhuma página o hero mostra a fachada da clínica.
- Arquivos: `app/hero-campaigns.ts`, `app/HeroCampaigns.tsx`, `app/hero-campaigns.css`, `AGENTS.md`.

## 2026-10-05/06 — Publicação na Cloudflare e domínio
- Quem: Claude e Vinícius
- Onde: PRs #5 e #6 — publicados
- O que mudou: `wrangler.jsonc` publica a pasta `dist` no Worker `clinica-sao-lucas`; domínio clinicasaolucas.app.br e www ligados ao Worker.
- Atenção: a prévia da Cloudflare nos PRs falha sempre; produção funciona.

## 2026-10-05 — Médicos do dia no hero e agenda de 05 a 10/10
- Quem: Claude
- Onde: PRs #2 e #3 — publicados
- O que mudou: o hero gera uma página por médico do dia a partir da agenda semanal, no mesmo visual das campanhas e sem indicar o cargo. Recortes do hero em alta resolução. Agenda de 04 a 10/10 (domingo sem atendimento). Dr. Luiz Cláudio incluído (#3).
- Arquivos: `app/agenda/hero-doctors.ts`, `app/agenda/schedule.ts`, `public/profissionais/hero/`, `README.md`, `AGENTS.md`.

## 2026-10-05 — Galeria do interior da clínica
- Quem: Claude
- Onde: PR #1 — publicado
- O que mudou: ambientes em cartões (2 colunas no computador, 1 no celular) com fotos nítidas e cores reais; visualizador ampliado com setas, teclado e deslizar; legenda do vídeo no topo.
- Arquivos: `app/ClinicGallery.tsx`, `app/clinic-gallery.css`.
