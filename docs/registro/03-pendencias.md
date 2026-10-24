# Pendências

Marque quem está cuidando de cada item (Codex ou Claude) e em qual branch. Ao resolver, mova para "Resolvidas recentemente" com a data e o PR.

## Em andamento

Nenhuma pendência desta entrega.

## Aguardando o Vinícius

- **Dr. Fábio Lisandro**: cadastrado em 17/10 (aguardando aprovação do branch). Falta o Vinícius informar em que dias ele atende e, se quiser, a lista de especialidades; a foto enviada é um busto fechado.
- **Outubro Rosa no hero**: pronto no branch `claude/outubro-rosa-hero-2vuvs9`, **sem PR e não publicado**. O Vinícius gostou só da versão de celular (a arte original inteira) e vai pedir ao cliente artes novas. Formato pedido para todas as artes do hero daqui em diante: retrato 4:5, 2160 × 2700 px (computador e tablet) e 1290 × 1612 px (celular), PNG ou JPG em qualidade máxima, sRGB, 5% de margem; opcional, a foto da pessoa em PNG transparente. A campanha deve sair sozinha depois de 31/10 (`date: '2026-10-31'`). O branch saiu de uma `main` antiga (antes dos PRs #16 a #21): atualize antes de continuar.
- **Dados para o SEO local** (relatório de 11/10): se o número (87) 99915-6764 também recebe ligações ou se há telefone fixo (para um link `tel:`) e outras cidades atendidas (`areaServed`). Nada disso foi inventado; o schema em `index.html` só tem o que o site já mostra.
- **Perfil da Empresa no Google** (decisão do Vinícius em 11/10): por enquanto o site **não** leva ao Google. O endereço da seção Contato deixou de ser link (antes abria uma busca no Maps) e o schema fica sem coordenadas e sem o link do perfil, porque o perfil ainda não está bom. O endereço continua exatamente como está, sem número (a clínica não tem número no momento). Só voltar a pôr link ou coordenadas quando o Vinícius pedir.
- **Agenda da próxima semana**: a agenda atual vai até sábado 31/10. Aguardar a lista seguinte do Vinícius.

## Sugestões ainda não pedidas

- Fotos ainda pequenas: Giselle Skarlet, Flora Carolina e MT. Samuel Caetano (aparecem um pouco ampliadas no painel). Pedir fotos maiores.
- Endereço no contato: "Av. Cel. Jerônimo Píres". Em português o nome Pires não leva acento; confirmar com o Vinícius antes de mudar.
- Fotos novas para Débora, Ariane, Cleobenysson, Dhiego (busto sem cintura) e Caio (corte junto ao rosto).
- Itens do relatório de SEO de 11/10 que mudam o visual e por isso ficaram de fora: endereço e telefone no rodapé, mapa incorporado (a política de segurança atual bloqueia o iframe do Maps), avaliações no site, perguntas frequentes e páginas próprias por serviço e por profissional. Precisam de aprovação e, em parte, de dados reais (convênios, estacionamento, avaliações).

## Resolvidas recentemente

- 08/10 — **Revisão para o lançamento** (branch `claude/resumo-codex-wjqp2p`, aguardando aprovação): 18 fotos da agenda em alta resolução, gola do Dr. Alexandre na agenda e na equipe, acentos das áreas, nome da cidade, numeração do hero legível, cabeçalhos de segurança e retirada de `/teste-bracos.html`. Ver [`historico.md`](historico.md).

- 08/10 — **Retratos reconstruídos, hero e perfis da equipe** publicados pelo PR #23. Domínio `clinicasaolucas.app.br` conferido após o merge: retrato reconstruído no hero, 39 perfis para 39 profissionais ativos, painel de perfil no celular e nenhuma imagem quebrada na página carregada. Detalhes em [`historico.md`](historico.md) e [`02-fotos-e-recortes.md`](02-fotos-e-recortes.md#retratos-reconstruídos-em-0810).
- 08/10 — **MT. Samuel Caetano** não estava na lista da clínica, mas o Vinícius confirmou que foi um erro: ele continua atendendo e fica no site, ativo.
- 08/10 — Lista de profissionais de 08/10 aplicada (PR #20).
- 08/10 — Pescoço do Dr. Alexandre no hero (PR #21).
