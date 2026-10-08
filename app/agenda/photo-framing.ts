/**
 * ENQUADRAMENTO DAS FOTOS NA SEÇÃO "PROFISSIONAIS"
 *
 * As fotos recortadas têm composições diferentes (corpo inteiro, sentado,
 * busto). Para que todos apareçam padronizados, da linha da cintura para
 * cima, cada foto recebe aqui a escala e a posição medidas a partir do rosto:
 * - scale: altura da imagem, em múltiplos da altura do cartão;
 * - faceTop: topo do rosto (0 a 1 da altura da imagem), que fica a 16% do topo do cartão;
 * - x: centro horizontal do rosto (0 a 1 da largura da imagem);
 * - faceY: centro vertical do rosto (0 a 1 da altura da imagem), usado no zoom;
 * - aspect: largura / altura da imagem;
 * - cut: lado em que a foto original corta o corpo; essa borda se dissolve
 *   suavemente para o corte não aparecer como uma linha reta.
 * O rosto fica sempre centralizado e na mesma altura do cartão, com a cintura
 * na borda inferior.
 * Os arquivos em public/profissionais/agenda/ já vêm recortados da cintura
 * para cima (mesmo critério usado na agenda e no painel); estes valores só
 * alinham o rosto dentro do cartão da equipe.
 * Fotos que já são um busto fechado (sem a cintura) ficam um pouco mais
 * próximas, sem deixar espaço vazio embaixo.
 *
 * Ao cadastrar ou trocar uma foto, acrescente/atualize a linha dela. Sem uma
 * linha aqui, a foto aparece inteira, como antes.
 */
export type PhotoFraming = { scale: number; faceTop: number; x: number; faceY: number; aspect: number; cut?: 'left' | 'right' | 'both' };

export const photoFraming: Record<string, PhotoFraming> = {
  '/profissionais/agenda/luiz-claudio.webp': { scale: 1.047, faceTop: 0.061, x: 0.518, faceY: 0.199, aspect: 0.656 },
  '/profissionais/agenda/reynaldo-martinez.webp': { scale: 1.093, faceTop: 0.099, x: 0.539, faceY: 0.231, aspect: 0.777 },
  '/profissionais/agenda/ademy-landim.webp': { scale: 1.065, faceTop: 0.078, x: 0.420, faceY: 0.214, aspect: 0.892 },
  '/profissionais/agenda/alexandre-torres.webp': { scale: 1.059, faceTop: 0.073, x: 0.473, faceY: 0.210, aspect: 0.798 },
  '/profissionais/agenda/ariane-matos.webp': { scale: 0.931, faceTop: 0.097, x: 0.435, faceY: 0.290, aspect: 1.077, cut: 'both' },
  '/profissionais/agenda/ermita-galdina.webp': { scale: 1.022, faceTop: 0.073, x: 0.456, faceY: 0.215, aspect: 0.812 },
  '/profissionais/agenda/eloisa-mello.webp': { scale: 1.102, faceTop: 0.106, x: 0.417, faceY: 0.237, aspect: 0.823 },
  '/profissionais/agenda/carolline-carvalho.webp': { scale: 1.048, faceTop: 0.060, x: 0.390, faceY: 0.198, aspect: 0.763 },
  '/profissionais/agenda/edilma-carvalho.webp': { scale: 1.063, faceTop: 0.074, x: 0.453, faceY: 0.211, aspect: 0.628 },
  '/profissionais/agenda/flora-carolina.webp': { scale: 0.981, faceTop: 0.144, x: 0.582, faceY: 0.304, aspect: 0.738 },
  '/profissionais/agenda/giselle-skarlet.webp': { scale: 1.089, faceTop: 0.097, x: 0.683, faceY: 0.230, aspect: 0.767 },
  '/profissionais/agenda/ilka-gominho.webp': { scale: 1.084, faceTop: 0.094, x: 0.452, faceY: 0.227, aspect: 0.887 },
  '/profissionais/agenda/karina-hirose.webp': { scale: 1.081, faceTop: 0.089, x: 0.567, faceY: 0.223, aspect: 0.646 },
  '/profissionais/agenda/layane-barros.webp': { scale: 1.071, faceTop: 0.081, x: 0.439, faceY: 0.217, aspect: 0.756 },
  '/profissionais/agenda/louise-torres.webp': { scale: 1.059, faceTop: 0.069, x: 0.640, faceY: 0.205, aspect: 0.744 },
  '/profissionais/agenda/ludmila-magalhaes.webp': { scale: 1.071, faceTop: 0.081, x: 0.447, faceY: 0.216, aspect: 0.681 },
  '/profissionais/agenda/maria-paula.webp': { scale: 1.102, faceTop: 0.107, x: 0.507, faceY: 0.239, aspect: 0.722 },
  '/profissionais/agenda/silvania-melo.webp': { scale: 1.072, faceTop: 0.081, x: 0.459, faceY: 0.216, aspect: 0.761 },
  '/profissionais/agenda/itala-freire.webp': { scale: 1.113, faceTop: 0.115, x: 0.399, faceY: 0.245, aspect: 0.827 },
  '/profissionais/agenda/joceane-ramos.webp': { scale: 0.949, faceTop: 0.115, x: 0.597, faceY: 0.277, aspect: 0.946 },
  '/profissionais/agenda/samuel-caetano.webp': { scale: 1.182, faceTop: 0.167, x: 0.417, faceY: 0.289, aspect: 0.882 },
  '/dentistry/luiz-eneas.webp': { scale: 1.071, faceTop: 0.080, x: 0.441, faceY: 0.216, aspect: 0.729 },
  '/dentistry/isadora-carvalho.webp': { scale: 1.089, faceTop: 0.096, x: 0.393, faceY: 0.229, aspect: 0.880 },
  '/dentistry/vinicius-belfort.webp': { scale: 1.109, faceTop: 0.111, x: 0.629, faceY: 0.242, aspect: 0.661 },
  '/profissionais/agenda/bryan-edipo.webp': { scale: 1.007, faceTop: 0.048, x: 0.466, faceY: 0.192, aspect: 0.835 },
  '/profissionais/agenda/debora-cordeiro.webp': { scale: 1.029, faceTop: 0.183, x: 0.444, faceY: 0.391, aspect: 0.950, cut: 'both' },
  '/profissionais/agenda/robson-oliveira.webp': { scale: 1.047, faceTop: 0.058, x: 0.534, faceY: 0.196, aspect: 0.695 },
  '/profissionais/agenda/vinicius-alves.webp': { scale: 1.075, faceTop: 0.083, x: 0.538, faceY: 0.217, aspect: 0.752 },
  '/profissionais/agenda/vinicius-aquino.webp': { scale: 1.076, faceTop: 0.085, x: 0.405, faceY: 0.220, aspect: 0.722, cut: 'right' },
  '/profissionais/agenda/cleobenysson-cruz.webp': { scale: 0.940, faceTop: 0.106, x: 0.561, faceY: 0.295, aspect: 0.960, cut: 'right' },
  '/profissionais/agenda/vivianne-araujo.webp': { scale: 1.095, faceTop: 0.100, x: 0.468, faceY: 0.232, aspect: 0.947 },
  '/profissionais/agenda/arielly-ferraz.webp': { scale: 1.038, faceTop: 0.098, x: 0.464, faceY: 0.237, aspect: 0.700 },
  '/profissionais/agenda/raquel-andrade.webp': { scale: 1.068, faceTop: 0.077, x: 0.537, faceY: 0.213, aspect: 0.961, cut: 'right' },
  '/profissionais/agenda/emiliane-cruz.webp': { scale: 1.084, faceTop: 0.091, x: 0.371, faceY: 0.224, aspect: 0.914, cut: 'right' },
  '/profissionais/agenda/nayara-kelly.webp': { scale: 1.095, faceTop: 0.102, x: 0.537, faceY: 0.234, aspect: 0.623 },
  '/profissionais/agenda/caio-alves.webp': { scale: 1.103, faceTop: 0.106, x: 0.821, faceY: 0.237, aspect: 0.783, cut: 'right' },
  '/profissionais/agenda/dhiego-ramalho.webp': { scale: 0.919, faceTop: 0.086, x: 0.548, faceY: 0.245, aspect: 0.855, cut: 'both' },
  '/profissionais/agenda/marcelo-amaral.webp': { scale: 0.921, faceTop: 0.050, x: 0.476, faceY: 0.207, aspect: 0.825, cut: 'right' },
  '/profissionais/agenda/renata-filgueira.webp': { scale: 1.088, faceTop: 0.094, x: 0.570, faceY: 0.227, aspect: 0.874, cut: 'left' },
  '/profissionais/agenda/suila-lima.webp': { scale: 1.053, faceTop: 0.066, x: 0.638, faceY: 0.203, aspect: 0.718 },
  '/profissionais/agenda/bruna-bastos.webp': { scale: 1.022, faceTop: 0.087, x: 0.435, faceY: 0.229, aspect: 0.690, cut: 'right' },
  '/profissionais/agenda/gracenilda-moura.webp': { scale: 1.054, faceTop: 0.065, x: 0.574, faceY: 0.202, aspect: 0.755 },
  '/profissionais/agenda/yara-marques.webp': { scale: 1.000, faceTop: 0.085, x: 0.495, faceY: 0.230, aspect: 0.667 },
  '/profissionais/agenda/thais-thesly.webp': { scale: 1.086, faceTop: 0.096, x: 0.520, faceY: 0.229, aspect: 0.721 },
  '/profissionais/agenda/eduardo-bastos.webp': { scale: 0.900, faceTop: 0.067, x: 0.516, faceY: 0.233, aspect: 0.792, cut: 'right' },
};

// Enquadramento dos retratos reconstruídos, mantendo os originais como referência.
export const reconstructedPhotoFraming: Record<string, PhotoFraming> = {
  '/profissionais/agenda/ariane-matos.webp': { scale: .94, faceTop: .08, x: .50, faceY: .22, aspect: 1.078 },
  '/profissionais/agenda/bruna-bastos.webp': { scale: 1.08, faceTop: .08, x: .50, faceY: .22, aspect: .689 },
  '/profissionais/agenda/caio-alves.webp': { scale: 1.05, faceTop: .08, x: .54, faceY: .22, aspect: .783 },
  '/profissionais/agenda/cleobenysson-cruz.webp': { scale: .96, faceTop: .08, x: .50, faceY: .22, aspect: .960 },
  '/profissionais/agenda/debora-cordeiro.webp': { scale: .98, faceTop: .08, x: .50, faceY: .22, aspect: .949 },
  '/profissionais/agenda/dhiego-ramalho.webp': { scale: 1.00, faceTop: .08, x: .50, faceY: .22, aspect: .800 },
  '/profissionais/agenda/eduardo-bastos.webp': { scale: 1.04, faceTop: .08, x: .50, faceY: .22, aspect: .792 },
  '/profissionais/agenda/emiliane-cruz.webp': { scale: .94, faceTop: .08, x: .50, faceY: .22, aspect: .914 },
  '/profissionais/agenda/joceane-ramos.webp': { scale: .97, faceTop: .08, x: .50, faceY: .22, aspect: .945 },
  '/profissionais/agenda/marcelo-amaral.webp': { scale: 1.00, faceTop: .08, x: .50, faceY: .22, aspect: .825 },
  '/profissionais/agenda/raquel-andrade.webp': { scale: .97, faceTop: .08, x: .50, faceY: .22, aspect: .962 },
  '/profissionais/agenda/renata-filgueira.webp': { scale: 1.00, faceTop: .08, x: .50, faceY: .22, aspect: .875 },
  '/profissionais/agenda/vinicius-aquino.webp': { scale: 1.07, faceTop: .08, x: .50, faceY: .22, aspect: .722 },
};
