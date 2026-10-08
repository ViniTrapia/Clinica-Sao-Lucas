# Pendências

Marque quem está cuidando de cada item (Codex ou Claude) e em qual branch. Ao resolver, mova para "Resolvidas recentemente" com a data e o PR.

## Em andamento

- **Recortes do hero com ombro/braço cortado** — Codex (a pedido do Vinícius, 08/10).
  Ademy, Dhiego e Ilka têm o braço cortado em linha reta; o CSS do hero encosta o retrato na borda direita no celular e durante a rolagem no computador. Diagnóstico e rascunho aproveitável em [`02-fotos-e-recortes.md`](02-fotos-e-recortes.md#hero-defeito-em-aberto).
  Junto com isso: reforçar `scripts/check-hero-photos.mjs` para olhar a foto inteira.

## Aguardando o Vinícius

- **Dr. Fábio Lisandro**: está na lista atual da clínica, mas não tem cadastro no site. O Vinícius vai mandar foto, especialidade e demais dados. Só cadastrar quando chegarem; não inventar nada.
- **Outubro Rosa no hero**: pronto no branch `claude/outubro-rosa-hero-2vuvs9`, **sem PR e não publicado**. O Vinícius gostou só da versão de celular (a arte original inteira) e vai pedir ao cliente artes novas. Formato pedido para todas as artes do hero daqui em diante: retrato 4:5, 2160 × 2700 px (computador e tablet) e 1290 × 1612 px (celular), PNG ou JPG em qualidade máxima, sRGB, 5% de margem; opcional, a foto da pessoa em PNG transparente. A campanha deve sair sozinha depois de 31/10 (`date: '2026-10-31'`). O branch saiu de uma `main` antiga (antes dos PRs #16 a #21): atualize antes de continuar.
- **Agenda da próxima semana**: a agenda atual vai até sábado 10/10. A partir de 11/10, sem agenda nova, o hero não terá médicos do dia e mostrará a fachada. Aguardar a lista do Vinícius.

## Sugestões ainda não pedidas

- Foto do Dr. Alexandre na agenda e na seção Profissionais: o mesmo defeito da gola que o PR #21 corrigiu no hero (ver `02-fotos-e-recortes.md`). O Claude ofereceu corrigir; o Vinícius ainda não respondeu.
- Fotos novas para Débora, Ariane, Cleobenysson, Dhiego (busto sem cintura) e Caio (corte junto ao rosto).

## Resolvidas recentemente

- 08/10 — **MT. Samuel Caetano** não estava na lista da clínica, mas o Vinícius confirmou que foi um erro: ele continua atendendo e fica no site, ativo.
- 08/10 — Lista de profissionais de 08/10 aplicada (PR #20).
- 08/10 — Pescoço do Dr. Alexandre no hero (PR #21).
