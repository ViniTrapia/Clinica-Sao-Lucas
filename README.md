# Clínica São Lucas

Site institucional em React + Vite, com layout responsivo e animações discretas.

## Abrir para editar

- Página e conteúdo: app/page.tsx; cadastro de profissionais: app/agenda/agenda-professionals.ts
- Aparência, espaçamentos e animações: app/globals.css, app/hero-campaigns.css e estilos das seções
- Retratos: public/profissionais/agenda/, public/profissionais/hero/ e public/profissionais/reconstruidos/

Instale com pnpm install e inicie com pnpm dev. Para gerar os arquivos de hospedagem, use pnpm build. A saída fica em dist.

## Médicos do dia no hero

Além das campanhas fixas (app/hero-campaigns.ts), o hero mostra automaticamente uma página para cada médico que atende no dia, conforme a agenda semanal. As páginas usam o mesmo visual das campanhas e mudam sozinhas a cada dia, no navegador.

- Quais profissionais podem aparecer: lista heroDoctorIds em app/agenda/hero-doctors.ts (ids do cadastro em app/agenda/agenda-professionals.ts).
- Em quais dias aparecem: weeklySchedule.appointments em app/agenda/schedule.ts.
- Para incluir um médico, cadastre-o em agenda-professionals.ts (se ainda não existir) e adicione o id em heroDoctorIds. Para retirar, remova o id. As instruções completas estão no comentário do próprio arquivo.

## Fotografias

Os retratos da equipe vêm das fotos e artes fornecidas pela clínica. Para 16 recortes com braços ou laterais cortadas, foram criadas versões reconstruídas aprovadas na prévia local e aplicadas pelo PR #23. As fotos originais continuam no repositório; `app/asset-url.ts` direciona o site às versões de `public/profissionais/reconstruidos/`. Veja o histórico e as limitações em `docs/registro/02-fotos-e-recortes.md`.

## Antes de divulgar ao público

Confirmar WhatsApp geral, endereço, Instagram, horários, textos institucionais e informações profissionais. A imagem da agenda não foi tratada como agenda atual. O número de exames do anúncio não foi presumido como contato geral da clínica.

## Escopo

Sem cadastro, banco de dados, pagamentos ou sistema de agendamento. Os botões navegam até as seções; o WhatsApp aguarda um número confirmado. A seção institucional aguarda uma foto real da clínica.
