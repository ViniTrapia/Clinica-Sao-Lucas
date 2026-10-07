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
 * - cut: lado em que a foto original corta o corpo; esse lado fica sempre
 *   encostado na borda do cartão para o corte não aparecer.
 * O rosto fica sempre na mesma altura do cartão e a cintura na borda inferior.
 * Fotos que já são um busto fechado (sem a cintura) ficam um pouco mais
 * próximas, sem deixar espaço vazio embaixo.
 *
 * Ao cadastrar ou trocar uma foto, acrescente/atualize a linha dela. Sem uma
 * linha aqui, a foto aparece inteira, como antes.
 */
export type PhotoFraming = { scale: number; faceTop: number; x: number; faceY: number; aspect: number; cut?: 'left' | 'right' | 'both' };

export const photoFraming: Record<string, PhotoFraming> = {
  '/profissionais/agenda/luiz-claudio.webp': { scale: 1.259, faceTop: 0.055, x: 0.444, faceY: 0.170, aspect: 0.647 },
  '/profissionais/agenda/reynaldo-martinez.webp': { scale: 1.854, faceTop: 0.058, x: 0.538, faceY: 0.136, aspect: 0.490 },
  '/profissionais/agenda/ademy-landim.webp': { scale: 1.479, faceTop: 0.058, x: 0.437, faceY: 0.156, aspect: 0.658 },
  '/profissionais/agenda/alexandre-torres.webp': { scale: 1.312, faceTop: 0.075, x: 0.462, faceY: 0.185, aspect: 0.681 },
  '/profissionais/agenda/ariane-matos.webp': { scale: 0.931, faceTop: 0.098, x: 0.435, faceY: 0.290, aspect: 1.077, cut: 'both' },
  '/profissionais/agenda/ermita-galdina.webp': { scale: 1.022, faceTop: 0.073, x: 0.438, faceY: 0.215, aspect: 0.846 },
  '/profissionais/agenda/eloisa-mello.webp': { scale: 1.749, faceTop: 0.067, x: 0.417, faceY: 0.149, aspect: 0.518 },
  '/profissionais/agenda/carolline-carvalho.webp': { scale: 1.288, faceTop: 0.049, x: 0.397, faceY: 0.161, aspect: 0.628 },
  '/profissionais/agenda/edilma-carvalho.webp': { scale: 1.475, faceTop: 0.054, x: 0.453, faceY: 0.152, aspect: 0.453 },
  '/profissionais/agenda/flora-carolina.webp': { scale: 0.981, faceTop: 0.144, x: 0.549, faceY: 0.304, aspect: 0.827 },
  '/profissionais/agenda/giselle-skarlet.webp': { scale: 1.149, faceTop: 0.091, x: 0.654, faceY: 0.218, aspect: 0.773 },
  '/profissionais/agenda/ilka-gominho.webp': { scale: 1.829, faceTop: 0.073, x: 0.450, faceY: 0.152, aspect: 0.560 },
  '/profissionais/agenda/karina-hirose.webp': { scale: 1.545, faceTop: 0.063, x: 0.534, faceY: 0.156, aspect: 0.496 },
  '/profissionais/agenda/layane-barros.webp': { scale: 1.905, faceTop: 0.046, x: 0.498, faceY: 0.122, aspect: 0.479 },
  '/profissionais/agenda/louise-torres.webp': { scale: 1.433, faceTop: 0.081, x: 0.630, faceY: 0.182, aspect: 0.633 },
  '/profissionais/agenda/ludmila-magalhaes.webp': { scale: 1.130, faceTop: 0.077, x: 0.448, faceY: 0.205, aspect: 0.681 },
  '/profissionais/agenda/maria-paula.webp': { scale: 1.350, faceTop: 0.087, x: 0.502, faceY: 0.195, aspect: 0.646 },
  '/profissionais/agenda/silvania-melo.webp': { scale: 1.493, faceTop: 0.058, x: 0.459, faceY: 0.155, aspect: 0.547 },
  '/profissionais/agenda/itala-freire.webp': { scale: 1.464, faceTop: 0.087, x: 0.410, faceY: 0.186, aspect: 0.669 },
  '/profissionais/agenda/joceane-ramos.webp': { scale: 0.949, faceTop: 0.115, x: 0.578, faceY: 0.277, aspect: 1.043 },
  '/profissionais/agenda/samuel-caetano.webp': { scale: 1.854, faceTop: 0.106, x: 0.446, faceY: 0.184, aspect: 0.619 },
  '/dentistry/luiz-eneas.webp': { scale: 1.071, faceTop: 0.080, x: 0.441, faceY: 0.216, aspect: 0.729 },
  '/dentistry/isadora-carvalho.webp': { scale: 1.089, faceTop: 0.096, x: 0.393, faceY: 0.229, aspect: 0.880 },
  '/dentistry/vinicius-belfort.webp': { scale: 1.109, faceTop: 0.111, x: 0.629, faceY: 0.242, aspect: 0.661 },
  '/profissionais/agenda/bryan-edipo.webp': { scale: 1.007, faceTop: 0.048, x: 0.466, faceY: 0.192, aspect: 0.835 },
  '/profissionais/agenda/debora-cordeiro.webp': { scale: 1.029, faceTop: 0.184, x: 0.444, faceY: 0.391, aspect: 0.950, cut: 'both' },
  '/profissionais/agenda/robson-oliveira.webp': { scale: 1.086, faceTop: 0.054, x: 0.533, faceY: 0.188, aspect: 0.665 },
  '/profissionais/agenda/vinicius-alves.webp': { scale: 1.220, faceTop: 0.073, x: 0.538, faceY: 0.192, aspect: 0.662 },
  '/profissionais/agenda/vinicius-aquino.webp': { scale: 1.103, faceTop: 0.083, x: 0.405, faceY: 0.215, aspect: 0.704, cut: 'right' },
  '/profissionais/agenda/cleobenysson-cruz.webp': { scale: 0.940, faceTop: 0.106, x: 0.561, faceY: 0.295, aspect: 0.960, cut: 'right' },
  '/profissionais/agenda/vivianne-araujo.webp': { scale: 1.168, faceTop: 0.094, x: 0.468, faceY: 0.218, aspect: 0.887 },
  '/profissionais/agenda/arielly-ferraz.webp': { scale: 1.038, faceTop: 0.098, x: 0.464, faceY: 0.237, aspect: 0.700 },
  '/profissionais/agenda/raquel-andrade.webp': { scale: 1.241, faceTop: 0.067, x: 0.537, faceY: 0.183, aspect: 0.827, cut: 'right' },
  '/profissionais/agenda/emiliane-cruz.webp': { scale: 1.241, faceTop: 0.079, x: 0.434, faceY: 0.196, aspect: 0.887, cut: 'right' },
  '/profissionais/agenda/nayara-kelly.webp': { scale: 1.095, faceTop: 0.102, x: 0.537, faceY: 0.234, aspect: 0.623 },
  '/profissionais/agenda/caio-alves.webp': { scale: 1.220, faceTop: 0.096, x: 0.823, faceY: 0.215, aspect: 0.717, cut: 'right' },
  '/profissionais/agenda/dhiego-ramalho.webp': { scale: 0.921, faceTop: 0.088, x: 0.548, faceY: 0.247, aspect: 0.854, cut: 'both' },
  '/profissionais/agenda/marcelo-amaral.webp': { scale: 0.921, faceTop: 0.050, x: 0.476, faceY: 0.207, aspect: 0.825, cut: 'right' },
  '/profissionais/agenda/renata-filgueira.webp': { scale: 1.095, faceTop: 0.094, x: 0.570, faceY: 0.226, aspect: 0.869, cut: 'left' },
  '/profissionais/agenda/suila-lima.webp': { scale: 1.103, faceTop: 0.063, x: 0.638, faceY: 0.194, aspect: 0.685 },
  '/profissionais/agenda/bruna-bastos.webp': { scale: 1.022, faceTop: 0.087, x: 0.435, faceY: 0.229, aspect: 0.690, cut: 'right' },
  '/profissionais/agenda/gracenilda-moura.webp': { scale: 1.095, faceTop: 0.062, x: 0.574, faceY: 0.195, aspect: 0.727 },
  '/profissionais/agenda/yara-marques.webp': { scale: 1.000, faceTop: 0.085, x: 0.495, faceY: 0.230, aspect: 0.667 },
  '/profissionais/agenda/thais-thesly.webp': { scale: 1.086, faceTop: 0.096, x: 0.520, faceY: 0.229, aspect: 0.721 },
  '/profissionais/agenda/eduardo-bastos.webp': { scale: 0.900, faceTop: 0.067, x: 0.516, faceY: 0.233, aspect: 0.792, cut: 'right' },
};
