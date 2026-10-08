# Registro compartilhado — Codex e Claude

Esta pasta é **só de informação**. Nada aqui altera o site: nenhum arquivo desta pasta é importado pelo código nem entra no build.

Ela existe para que o **Codex** e o **Claude** (projeto na nuvem) trabalhem no mesmo repositório sem um desfazer o trabalho do outro e sem precisar redescobrir o que já foi feito. Toda mudança importante no site, feita por qualquer um dos dois, deve ser registrada aqui.

## Ordem de leitura antes de começar qualquer tarefa

1. [`AGENTS.md`](../../AGENTS.md), na raiz: regras permanentes do projeto. Elas valem acima de tudo o que está nesta pasta.
2. [`03-pendencias.md`](03-pendencias.md): o que está em aberto e quem está cuidando.
3. As últimas entradas de [`historico.md`](historico.md): o que mudou recentemente.
4. Conforme a tarefa:
   - [`01-mapa-do-projeto.md`](01-mapa-do-projeto.md): onde fica cada parte do site, como publicar e como verificar.
   - [`02-fotos-e-recortes.md`](02-fotos-e-recortes.md): onde está cada foto, como cada seção enquadra e o diagnóstico em aberto do hero.
   - [`04-preferencias-do-vinicius.md`](04-preferencias-do-vinicius.md): decisões e correções do Vinícius que devem orientar qualquer mudança.

## Como registrar uma mudança (vale para Codex e Claude)

Ao terminar uma mudança importante (publicada ou deixada num branch):

1. Acrescente uma entrada **no topo** de [`historico.md`](historico.md), no formato abaixo.
2. Atualize [`03-pendencias.md`](03-pendencias.md): marque o que foi resolvido e inclua o que ficou em aberto.
3. Se a mudança alterar onde algo fica ou como funciona, atualize o arquivo correspondente (`01-...` ou `02-...`).
4. Se o Vinícius corrigir algo de forma que valha para o futuro, registre em `04-preferencias-do-vinicius.md`.

```markdown
## AAAA-MM-DD — Título curto
- Quem: Codex | Claude
- Onde: PR #N (ou branch `nome`, ou commit `abc1234`) — publicado / não publicado
- O que mudou: uma ou duas frases sobre o que o visitante vê.
- Arquivos: caminhos principais.
- Atenção: o que o outro precisa saber (limitações, decisões, o que não mexer).
```

Correções pequenas (um erro de digitação, um ajuste de 1 px) não precisam de entrada.

## Para não haver conflito

- Antes de começar, atualize a `main` (`git pull`) e leia as pendências: se uma tarefa estiver marcada como "em andamento" por um dos dois, não mexa nos mesmos arquivos sem combinar com o Vinícius.
- Ao começar algo longo, marque em `03-pendencias.md` quem está fazendo (Codex ou Claude) e em qual branch.
- Comece sempre de uma `main` atualizada; os dois trabalham por branch e PR, e o merge na `main` é o que publica o site.

## Situação em 08/10/2026

- O PR #22, com este registro compartilhado, já está na `main`.
- O Codex aplicou os retratos reconstruídos e o novo enquadramento do hero somente no branch `codex/portrait-framing` e no site local. A produção aguarda a revisão do Vinícius; detalhes em [`02-fotos-e-recortes.md`](02-fotos-e-recortes.md#reconstruções-aprovadas-para-a-prévia-local-em-0810).
