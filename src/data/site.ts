export const canarinhos = [
  {
    number: '58',
    label: 'CANARINHO 58',
    index: '#01',
    title: 'O PIONEIRO',
    description: 'O Canarinho que apresentou o futebol brasileiro para o mundo.',
    bg: '/images/canarinho-58-bg.jpg',
    image: '/images/canarinho-58.png',
    seal: '/images/canarinho-58-seal.png',
  },
  {
    number: '62',
    label: 'CANARINHO 62',
    index: '#02',
    title: 'O BI-CAMPEÃO',
    description: 'O Canarinho que driblou, venceu e ainda separou uma fatia para comemorar.',
    bg: '/images/canarinho-62-bg.jpg',
    image: '/images/canarinho-62.png',
    seal: '/images/canarinho-62-seal.png',
  },
  {
    number: '70',
    label: 'CANARINHO 70',
    index: '#03',
    title: 'O TRI',
    description: 'O Canarinho que carrega nas costas uma das seleções mais inesquecíveis da história.',
    bg: '/images/canarinho-70-bg.jpg',
    image: '/images/canarinho-70.png',
    seal: '/images/canarinho-70-seal.png',
  },
  {
    number: '94',
    label: 'CANARINHO 94',
    index: '#04',
    title: 'O PAI DOS PÊNALTIS',
    description: 'O Canarinho que manteve a calma, decidiu no detalhe e trouxe o título de volta.',
    bg: '/images/canarinho-94-bg.jpg',
    image: '/images/canarinho-94.png',
    seal: '/images/canarinho-94-seal.png',
  },
  {
    number: '02',
    label: 'CANARINHO 02',
    index: '#05',
    title: 'O ARTILHEIRO DE CASA',
    description: 'O Canarinho que guardou na coleção a lembrança do título mais recente do Brasil.',
    bg: '/images/canarinho-02-bg.jpg',
    image: '/images/canarinho-02.png',
    seal: '/images/canarinho-02-seal.png',
  },
]

export const holographicCards: Record<string, { front: string; back: string }> = {
  '1958': { front: '/images/card-1958-front.png', back: '/images/card-1958-back.png' },
  '1962': { front: '/images/card-1962-front.png', back: '/images/card-1962-back.png' },
  '1970': { front: '/images/card-1970-front.png', back: '/images/card-1970-back.png' },
  '1994': { front: '/images/card-1994-front.png', back: '/images/card-1994-back.png' },
  '2002': { front: '/images/card-2002-front.png', back: '/images/card-2002-back.png' },
}

export const CARD_YEARS = ['1958', '1962', '1970', '1994', '2002'] as const
export type CardYear = (typeof CARD_YEARS)[number]

export const cardsBg = '/images/cards-bg.jpg'
export const cardsGlow = '/images/cards-glow.png'
export const comoColetarBg = '/images/como-coletar-bg.jpg'
export const comoColetarCanarinhos = '/images/como-coletar-canarinhos.png'
export const comoColetarInstrucoes = '/images/como-coletar-instrucoes.png'
export const comoColetarInfo = '/images/como-coletar-info.png'
