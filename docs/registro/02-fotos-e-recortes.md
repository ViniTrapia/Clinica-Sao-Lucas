# Fotos e recortes

## Onde está cada foto

| Pasta | Usada em | Campo no cadastro |
|---|---|---|
| `public/profissionais/agenda/<id>.webp` | cards da agenda, painel ao clicar e seção Profissionais | `photo` |
| `public/profissionais/hero/<id>.webp` | páginas dos médicos do dia no hero | `heroPhoto` |
| `public/dentistry/*.webp` | seção Odontologia (Luiz Enéas, Isadora Carvalho, Vinícius Belfort) | — |
| `public/campaigns/` | campanhas manuais do hero | — |
| `public/clinic-gallery/` | galeria do interior da clínica | — |

Os arquivos soltos em `public/profissionais/*.{jpg,png,webp}` são fotos antigas; só servem de reserva quando um profissional não tem `photo`.

Todas as fotos de profissionais são recortes com fundo transparente. Os originais (artes da TV da clínica, 1920×1080) vieram no zip `wetransfer_png_2026-10-06_2254.zip` da pasta do projeto do Claude; os recortes dos 21 profissionais novos foram feitos localmente, porque a rede do ambiente do Claude bloqueia o download do Canva.

## Padrão de enquadramento (decidido pelo Vinícius)

- **Todos da cintura para cima**, com o rosto na mesma altura e do mesmo tamanho, inclusive quem está sentado.
- **Ninguém cortado:** nem a cabeça no topo, nem ombro, braço ou jaleco na lateral.
- **Nenhum corte reto visível:** quando a foto original corta o corpo na lateral, a borda deve se dissolver suavemente.
- **Nenhum fundo entre o pescoço e a gola ou os ombros** (falha de remoção de fundo).

Como cada seção aplica isso:

- **Agenda e painel:** os próprios arquivos de `public/profissionais/agenda/` já foram recortados da cintura para cima (PR #12). Seis fotos tinham margem transparente embutida e foram aparadas: Carolline, Silvania, Luiz Cláudio, Eloisa, Edilma e Ariane.
- **Seção Profissionais:** `app/agenda/photo-framing.ts` guarda, por foto, escala, topo do rosto e centro do rosto, e `app/portrait-framing.css` aplica. O campo `cut` (`left`, `right`, `both`) dissolve a borda onde a foto original corta o corpo (PR #13). **Ao trocar uma foto de `agenda/`, atualize a linha dela nesse arquivo.**
- **Odontologia:** as fotos não podem passar da largura da placa laranja do nome. A da Dra. Isadora é mais larga e ficou um pouco menor, com as laterais suavizadas (PRs #18 e #19).
- **Hero:** recortes próprios em alta resolução (PR #2), conferidos pelo build (ver abaixo).

Limitação conhecida: as fotos originais de Débora, Ariane, Cleobenysson e Dhiego são um busto fechado, sem a cintura, e por isso aparecem um pouco mais próximos. Só fotos novas resolvem. A foto do Dr. Caio Alves termina logo ao lado do rosto, então a borda ainda aparece um pouco na seção Profissionais.

## Checagem automática do hero

`scripts/check-hero-photos.mjs` roda antes de todo `pnpm build` e barra a publicação se um recorte de `heroPhoto`:

- não tiver transparência;
- tiver menos de 700 px de altura;
- tiver a cabeça encostando no topo;
- tiver o corpo encostando na lateral **nos 55% de cima da imagem** (ver o problema abaixo);
- não chegar à base (retrato "flutuando").

`--sheet folha.png` gera uma folha com todos os recortes sobre o azul do hero. O `AGENTS.md` exige olhar essa folha antes de publicar um recorte novo, porque defeitos como fundo atrás do pescoço não são medidos automaticamente.

## Hero: defeito em aberto

Na madrugada de 08/10 o Vinícius apontou recortes do hero com ombro e braço cortados (Dr. Ademy e Dr. Alexandre nos prints dele) e pediu para parar: **ele vai terminar isso no Codex**. Nada dessa correção foi publicado.

Diagnóstico feito pelo Claude:

1. **A checagem só olha os 55% de cima de cada foto.** Por isso deixou passar três recortes cujo braço termina em linha reta na lateral. Medição dos arquivos atuais na `main`:

   | Recorte | Largura × altura (px) | Encosta na lateral |
   |---|---|---|
   | `ademy-landim.webp` | 702 × 877 | direita, a partir de 56% da altura |
   | `dhiego-ramalho.webp` | 646 × 807 | esquerda a partir de 64%, direita a partir de 58% |
   | `ilka-gominho.webp` | 603 × 754 | direita, a partir de 68% |
   | alexandre, louise, luiz-claudio, robson | — | não encostam |

2. **O CSS do hero encosta o retrato na borda direita do cartão**, o que corta ombro ou cotovelo de quase todos, inclusive o Alexandre, mesmo com o recorte certo:
   - no celular (`max-width:700px`), `app/hero-campaigns.css` usa `right:0` no `picture` do `.hero-campaign-portrait-cutout`;
   - no computador, durante a rolagem, o cartão encolhe e o retrato chega na borda.

3. **Dr. Alexandre:** o PR #21 recompôs a gola do jaleco atrás do pescoço **só no recorte do hero**. A foto da agenda e da seção Profissionais (`public/profissionais/agenda/alexandre-torres.webp`) usa o mesmo recorte original e **ainda tem o mesmo defeito**.

### Rascunho que pode ser aproveitado

O branch `claude/project-thread-6v6vw6` tem um commit sem PR e não publicado (`94fdc2a`, "wip: recortes do hero longe da borda e checagem da lateral na foto inteira"). Ele:

- dissolve a borda cortada dos recortes de Ademy, Dhiego e Ilka;
- afasta o retrato da borda direita em todas as larguras (`right:4%` no celular, variável `--hero-photo-right` no computador) e reduz um pouco a largura;
- faz a checagem olhar a lateral **na altura inteira** da foto;
- acrescenta ao `AGENTS.md` a regra de que o corpo não pode terminar em linha reta na lateral.

Ele foi interrompido antes de ser conferido em todas as telas. Use como ponto de partida, não como solução pronta, e confira computador (incluindo durante a rolagem), tablet e celular.
