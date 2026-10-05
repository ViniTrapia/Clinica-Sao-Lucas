# Clínica São Lucas

Site institucional em React + Vite, com layout responsivo e animações discretas.

## Abrir para editar

- Página e conteúdo: app/page.tsx
- Aparência, espaçamentos e animações: app/globals.css
- Fotos finais: public/profissionais/*.webp

Instale com pnpm install e inicie com pnpm dev. Para gerar os arquivos de hospedagem, use pnpm build. A saída fica em dist.

## Médicos do dia no hero

Além das campanhas fixas (app/hero-campaigns.ts), o hero mostra automaticamente uma página para cada médico que atende no dia, conforme a agenda semanal. As páginas usam o mesmo visual das campanhas e mudam sozinhas a cada dia, no navegador.

- Quais profissionais podem aparecer: lista heroDoctorIds em app/agenda/hero-doctors.ts (ids do cadastro em app/agenda/agenda-professionals.ts).
- Em quais dias aparecem: weeklySchedule.appointments em app/agenda/schedule.ts.
- Para incluir um médico, cadastre-o em agenda-professionals.ts (se ainda não existir) e adicione o id em heroDoctorIds. Para retirar, remova o id. As instruções completas estão no comentário do próprio arquivo.

## Fotografias

Os dez retratos foram separados do fundo pelo Canva. Os rostos não foram gerados novamente. A foto de destaque da Dra. Louise usa os pixels da fotografia original e a máscara de recorte fornecida pelo Canva; o fundo, os textos e as marcas da arte original não integram a abertura. Os recortes pequenos têm resolução limitada pela agenda enviada. Substituir pelos arquivos originais será a melhor maneira de melhorar sua nitidez.

Uma variante feita com edição generativa foi avaliada anteriormente, mas NÃO foi usada no site entregue.

## Antes de divulgar ao público

Confirmar WhatsApp geral, endereço, Instagram, horários, textos institucionais e informações profissionais. A imagem da agenda não foi tratada como agenda atual. O número de exames do anúncio não foi presumido como contato geral da clínica.

## Escopo

Sem cadastro, banco de dados, pagamentos ou sistema de agendamento. Os botões navegam até as seções; o WhatsApp aguarda um número confirmado. A seção institucional aguarda uma foto real da clínica.
