import { useState } from 'react'
import { ArrowRight, Play, RotateCcw } from 'lucide-react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

const assets = {
  heroBg: '/images/hero-bg.jpg',
  heroCanarinhos: '/images/hero-canarinhos.png',
  logo: '/images/logo.svg',
}

const navItems = [
  { label: 'Coleção', progress: 0 },
  { label: 'Os Canarinhos', progress: 0.11 },
  { label: 'Cards holográficos', progress: 0.72 },
  { label: 'Como colecionar', progress: 0.85 },
]

const canarinhos = [
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
    title: 'O PIONEIRO',
    description: 'O Canarinho que apresentou o futebol brasileiro para o mundo.',
    bg: '/images/canarinho-62-bg.jpg',
    image: '/images/canarinho-62.png',
    seal: '/images/canarinho-62-seal.png',
  },
  {
    number: '70',
    label: 'CANARINHO 70',
    index: '#03',
    title: 'O PIONEIRO',
    description: 'O Canarinho que apresentou o futebol brasileiro para o mundo.',
    bg: '/images/canarinho-70-bg.jpg',
    image: '/images/canarinho-70.png',
    seal: '/images/canarinho-70-seal.png',
  },
  {
    number: '94',
    label: 'CANARINHO 94',
    index: '#04',
    title: 'O PAI DOS PENALTIS',
    description: 'O Canarinho que apresentou o futebol brasileiro para o mundo.',
    bg: '/images/canarinho-94-bg.jpg',
    image: '/images/canarinho-94.png',
    seal: '/images/canarinho-94-seal.png',
  },
  {
    number: '02',
    label: 'CANARINHO 02',
    index: '#05',
    title: 'O PAI DOS PENALTIS',
    description: 'O Canarinho que apresentou o futebol brasileiro para o mundo.',
    bg: '/images/canarinho-02-bg.jpg',
    image: '/images/canarinho-02.png',
    seal: '/images/canarinho-02-seal.png',
  },
]

const holographicCards: Record<string, { front: string; back: string }> = {
  '1958': { front: '/images/card-1958-front.png', back: '/images/card-1958-back.png' },
  '1962': { front: '/images/card-1962-front.png', back: '/images/card-1962-back.png' },
  '1970': { front: '/images/card-1970-front.png', back: '/images/card-1970-back.png' },
  '1994': { front: '/images/card-1994-front.png', back: '/images/card-1994-back.png' },
  '2002': { front: '/images/card-2002-front.png', back: '/images/card-2002-back.png' },
}
const CARD_YEARS = ['1958', '1962', '1970', '1994', '2002'] as const
type CardYear = (typeof CARD_YEARS)[number]
const cardsBg = '/images/cards-bg.jpg'
const cardsGlow = '/images/cards-glow.png'
const comoColetarBg = '/images/como-coletar-bg.jpg'
const comoColetarCanarinhos = '/images/como-coletar-canarinhos.png'
const comoColetarInstrucoes = '/images/como-coletar-instrucoes.png'
const comoColetarInfo = '/images/como-coletar-info.png'

function scrollToProgress(progress: number) {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  window.scrollTo({ top: scrollable * progress, behavior: 'smooth' })
}

function App() {
  const [activeSection, setActiveSection] = useState('Coleção')
  const [activeCanarinho, setActiveCanarinho] = useState(0)
  const [activeYear, setActiveYear] = useState<CardYear>('1958')
  const [isFlipped, setIsFlipped] = useState(false)
  const { scrollYProgress } = useScroll()
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const sealRotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0])
  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.04, 0.08], [1, 1, 0])
  const heroBlur = useTransform(scrollYProgress, [0, 0.09, 0.12], ['blur(0px)', 'blur(0px)', 'blur(8px)'])
  const collectionOpacity = useTransform(scrollYProgress, [0.08, 0.12, 0.68, 0.71], [0, 1, 1, 0])
  const collectionScale = useTransform(scrollYProgress, [0.08, 0.11], [1.07, 1])
  const collectionBlur = useTransform(scrollYProgress, [0.08, 0.11], ['blur(8px)', 'blur(0px)'])
  const transitionFlashOpacity = useTransform(scrollYProgress, [0.07, 0.10, 0.14], [0, 0.22, 0])
  const sweepX = useTransform(scrollYProgress, [0.06, 0.14], ['-120%', '120%'])
  const sweepOpacity = useTransform(scrollYProgress, [0.06, 0.10, 0.14], [0, 0.35, 0])
  const cardsHoloOpacity = useTransform(scrollYProgress, [0.68, 0.72, 0.73, 0.75], [0, 1, 1, 0])
  const comoColetarOpacity = useTransform(scrollYProgress, [0.73, 0.77], [0, 1])
  // Transitions: Os Canarinhos → Cards holográficos
  const transitionFlashOpacity2 = useTransform(scrollYProgress, [0.665, 0.685, 0.71], [0, 0.22, 0])
  const sweepX2 = useTransform(scrollYProgress, [0.655, 0.71], ['-120%', '120%'])
  const sweepOpacity2 = useTransform(scrollYProgress, [0.655, 0.685, 0.71], [0, 0.35, 0])
  // Transitions: Cards holográficos → Como colecionar
  const transitionFlashOpacity3 = useTransform(scrollYProgress, [0.715, 0.735, 0.76], [0, 0.22, 0])
  const sweepX3 = useTransform(scrollYProgress, [0.705, 0.76], ['-120%', '120%'])
  const sweepOpacity3 = useTransform(scrollYProgress, [0.705, 0.735, 0.76], [0, 0.35, 0])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.11) {
      setActiveSection('Coleção')
      setActiveCanarinho(0)
      return
    }

    if (latest >= 0.74) {
      setActiveSection('Como colecionar')
      return
    }

    if (latest >= 0.70) {
      setActiveSection('Cards holográficos')
      const yearIndex = Math.min(4, Math.max(0, Math.floor((latest - 0.70) * 100)))
      setActiveYear(CARD_YEARS[yearIndex])
      return
    }

    setActiveSection('Os Canarinhos')

    const RANGE_START = 0.11
    const RANGE_END = 0.70
    const itemProgress = (latest - RANGE_START) / (RANGE_END - RANGE_START)
    const nextIndex = Math.min(canarinhos.length - 1, Math.max(0, Math.floor(itemProgress * canarinhos.length)))
    setActiveCanarinho(nextIndex)
  })

  const currentCanarinho = canarinhos[activeCanarinho]

  return (
    <main className="h-[1600vh] bg-[#0d1011] text-white">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-[7.8vw] py-6">
        <motion.div
          className="flex items-center gap-12"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <button type="button" onClick={() => scrollToProgress(0)} className="block h-10 w-[75px]">
            <img src={assets.logo} alt="iFood" className="h-full w-full object-contain" />
          </button>

          <nav className="hidden items-center gap-11 font-['Inter',sans-serif] text-sm font-normal lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToProgress(item.progress)}
                className="group relative text-left"
              >
                {item.label}
                {activeSection === item.label && (
                  <motion.span layoutId="active-nav" className="absolute -bottom-3 left-0 h-px w-full bg-[#ea1d2c]" />
                )}
              </button>
            ))}
          </nav>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => scrollToProgress(1)}
          className="inline-flex items-center gap-2 rounded-full bg-[#ea1d2c] px-7 py-3 font-['Inter',sans-serif] text-sm font-bold text-white"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
        >
          Peça no iFood
          <ArrowRight size={14} />
        </motion.button>
      </header>

      <div className="fixed right-5 top-[10vh] z-50 hidden h-[80vh] flex-col items-center lg:flex">
        <div className="relative h-full w-[2px] overflow-hidden rounded-full bg-white/15">
          <motion.div
            className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-[#ea1d2c]"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      </div>

      <section className="sticky top-0 h-screen overflow-hidden bg-[#1e0304]">
        {/* Transition: Hero → Os Canarinhos */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-40 bg-[#ffd000] mix-blend-screen"
          style={{ opacity: transitionFlashOpacity }}
        />
        <motion.div
          className="pointer-events-none absolute top-0 z-40 h-full w-[42vw] rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-2xl"
          style={{ x: sweepX, opacity: sweepOpacity }}
        />
        {/* Transition: Os Canarinhos → Cards holográficos */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-40 bg-[#ffd000] mix-blend-screen"
          style={{ opacity: transitionFlashOpacity2 }}
        />
        <motion.div
          className="pointer-events-none absolute top-0 z-40 h-full w-[42vw] rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-2xl"
          style={{ x: sweepX2, opacity: sweepOpacity2 }}
        />
        {/* Transition: Cards holográficos → Como colecionar */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-40 bg-[#ffd000] mix-blend-screen"
          style={{ opacity: transitionFlashOpacity3 }}
        />
        <motion.div
          className="pointer-events-none absolute top-0 z-40 h-full w-[42vw] rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-2xl"
          style={{ x: sweepX3, opacity: sweepOpacity3 }}
        />

        <motion.div
          className="absolute inset-0"
          style={{ scale: bgScale, opacity: heroOpacity, filter: heroBlur }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <img
            src={assets.heroBg}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto h-screen max-w-[1440px] px-6 lg:px-0"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="absolute left-1/2 top-[15%] z-20 w-full -translate-x-1/2 text-center text-[15px] font-medium uppercase tracking-[0.4em] text-[#ffd000]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
          >
            5 colecionáveis <span className="text-[#ea1d2c]">★</span> 5 títulos mundiais{' '}
            <span className="text-[#ea1d2c]">★</span> uma missão.
          </motion.p>

          <motion.h1
            className="pointer-events-none absolute left-1/2 top-[17%] z-0 -translate-x-1/2 font-display text-[35vw] leading-none tracking-[0.02em] text-[#fff2d7]/25 lg:text-[382px]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          >
            CANARINHOS
          </motion.h1>

          <motion.img
            src={assets.heroCanarinhos}
            alt="Cinco Canarinhos colecionáveis"
            className="absolute bottom-0 left-1/2 z-10 w-[min(100vw,1440px)] max-h-[90vh] -translate-x-1/2 object-contain object-bottom"
            initial={{ opacity: 0, y: 56, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.35, ease: 'easeOut' }}
          />

          <motion.div
            className="absolute bottom-[7%] left-1/2 z-20 flex w-full -translate-x-1/2 flex-col items-center justify-center gap-4 px-6 sm:flex-row"
            style={{ opacity: buttonsOpacity }}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.86, ease: 'easeOut' }}
          >
            <motion.button
              type="button"
              onClick={() => scrollToProgress(0.85)}
              className="group inline-flex w-full max-w-[312px] items-center justify-center gap-8 rounded-full bg-[#ea1d2c] px-6 py-3 font-['Inter',sans-serif] text-base font-bold"
              whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(234,29,44,0.55)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 320, damping: 14 }}
            >
              Quero colecionar
              <motion.span
                className="grid size-5 place-items-center rounded-full bg-white text-[#ea1d2c]"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
              >
                <Play size={10} fill="currentColor" />
              </motion.span>
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollToProgress(0.11)}
              className="group inline-flex w-full max-w-[312px] items-center justify-center gap-8 rounded-full border border-white/70 bg-black/35 px-6 py-3 font-['Inter',sans-serif] text-base font-bold transition-colors hover:bg-white hover:text-black"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 320, damping: 14 }}
            >
              Conheça os Canarinhos
              <motion.span
                className="grid size-5 place-items-center rounded-full bg-white text-[#0d1011] group-hover:bg-black group-hover:text-white"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
              >
                <Play size={10} fill="currentColor" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10"
          style={{ opacity: collectionOpacity }}
        >
          <AnimatePresence>
            <motion.img
              key={`bg-${activeCanarinho}`}
              src={currentCanarinho.bg}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ scale: collectionScale, filter: collectionBlur }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              loading="lazy"
            />
          </AnimatePresence>

          <div className="absolute left-[7.8vw] top-[17%] z-20">
            <motion.h2
              key={`headline-${activeCanarinho}`}
              className="font-['Inter',sans-serif] text-[clamp(3rem,5vw,4.45rem)] font-black leading-[0.98] tracking-[-0.05em]"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Colecione
              <br />
              a história
              <br />
              da torcida.
            </motion.h2>

            <div className="mt-12">
              <motion.div
                key={`label-${activeCanarinho}`}
                className="-rotate-1 rounded-full border border-black bg-[#ffd000] px-7 py-3 text-center font-['Inter',sans-serif] text-[23px] font-black tracking-[0.2em] text-black shadow-[0_4px_0_#000]"
                initial={{ opacity: 0, y: 12, scale: 0.93 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {currentCanarinho.label}
              </motion.div>
              <motion.div
                key={`idxtitle-${activeCanarinho}`}
                className="mt-4 flex items-end gap-3 font-['Inter',sans-serif]"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <strong className="text-[42px] font-black leading-none tracking-[-0.03em]">{currentCanarinho.index}</strong>
                <h3 className="pb-1 text-[26px] font-black uppercase leading-none">{currentCanarinho.title}</h3>
              </motion.div>
              <motion.p
                key={`desc-${activeCanarinho}`}
                className="mt-2 max-w-[310px] font-['Inter',sans-serif] text-base font-medium leading-snug tracking-[0.025em]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.27, ease: [0.16, 1, 0.3, 1] }}
              >
                {currentCanarinho.description}
              </motion.p>
            </div>
          </div>

          <AnimatePresence>
            <motion.p
              key={`number-${activeCanarinho}`}
              className="pointer-events-none absolute left-[57.75%] top-[5%] z-0 -translate-x-1/2 font-display text-[min(42vw,608px)] leading-none tracking-[0.02em] text-[#fff2d7]/25"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -70 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentCanarinho.number}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence>
            <motion.img
              key={`canarinho-${activeCanarinho}`}
              src={currentCanarinho.image}
              alt={currentCanarinho.label}
              className="absolute bottom-0 left-[21.25%] z-10 max-h-[90vh] w-[73vw] object-contain object-bottom pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              loading="lazy"
            />
          </AnimatePresence>

          <div className="absolute right-[8.1vw] top-[22%] z-30 flex flex-col items-center gap-4">
            {canarinhos.map((item, index) => (
              <div key={item.number} className="group relative flex items-center">
                <span className="pointer-events-none absolute right-[calc(100%+12px)] whitespace-nowrap rounded-full bg-black/75 px-3 py-1 font-['Inter',sans-serif] text-[11px] font-semibold tracking-[0.08em] text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                  {item.label}
                </span>
                <button
                  type="button"
                  onClick={() => scrollToProgress(0.11 + index * 0.12)}
                  className={`grid rounded-full border border-[#5b110e] bg-[#821916] p-1.5 transition-all duration-300 ${
                    activeCanarinho === index ? 'size-[44px] opacity-100' : 'size-[37px] opacity-55 saturate-50'
                  }`}
                  aria-label={`Mostrar ${item.label}`}
                >
                  <img src={item.seal} alt="" className="size-full rounded-full object-cover" />
                </button>
              </div>
            ))}
          </div>

          <motion.div
            className="absolute bottom-[8%] right-[7.8vw] z-30 hidden size-[128px] items-center justify-center rounded-full bg-[#ea1d2c] shadow-[0_18px_40px_rgba(0,0,0,0.35)] lg:flex"
            style={{ rotate: sealRotate }}
            initial={{ opacity: 0, scale: 0.75, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1, ease: 'easeOut' }}
          >
            <motion.svg
              viewBox="0 0 128 128"
              className="absolute inset-0 size-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <defs>
                <path
                  id="seal-circle"
                  d="M 64,64 m -49,0 a 49,49 0 1,1 98,0 a 49,49 0 1,1 -98,0"
                />
              </defs>
              <text className="fill-white font-['Inter',sans-serif] text-[7px] font-bold uppercase tracking-[0.22em]">
                <textPath href="#seal-circle" startOffset="50%" textAnchor="middle">
                  Rumo ao hexa ★ Colecionáveis oficiais ★
                </textPath>
              </text>
            </motion.svg>
            <div className="grid size-[73px] place-items-center overflow-hidden rounded-full bg-white">
              <img src={currentCanarinho.seal} alt="" className="size-full object-cover" />
            </div>
          </motion.div>
        </motion.div>

        {/* Cards Holográficos */}
        <motion.div
          className={`absolute inset-0 z-20 ${activeSection === 'Cards holográficos' ? '' : 'pointer-events-none'}`}
          style={{ opacity: cardsHoloOpacity }}
        >
          <div className="absolute inset-0 bg-[#0d1011]">
            <img src={cardsBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" loading="lazy" />
            <img src={cardsGlow} alt="" className="pointer-events-none absolute h-[115%] w-[115%] top-[-7%] left-1/2 -translate-x-[48%] mix-blend-screen opacity-75" loading="lazy" />
          </div>

          <div className="relative h-full">
            <div className="absolute left-[7.8vw] top-[21%] z-10">
              <h2 className="font-['Inter',sans-serif] font-black leading-[1.05] text-[clamp(30px,3.8vw,56px)]">
                Cards<br />holográficos
              </h2>
              <p className="mt-4 font-['Inter',sans-serif] text-[clamp(13px,1.2vw,17px)] font-normal leading-snug">
                A história da torcida<br />em versão colecionável.
              </p>
              <motion.button
                type="button"
                onClick={() => setIsFlipped(f => !f)}
                className="mt-8 flex items-center gap-3 rounded-full bg-[#ea1d2c] border-[3px] border-black px-9 py-4 font-['Inter',sans-serif] text-[clamp(13px,1.2vw,17px)] font-medium shadow-[0_6px_0_black]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ y: 3, boxShadow: '0 3px 0 #000' }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                Virar card <RotateCcw size={22} />
              </motion.button>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute"
                initial={{ left: '39%', top: '10%', width: '20vw', rotate: -9 }}
                animate={!isFlipped
                  ? { left: '39%', top: '10%', width: '20vw', rotate: -9 }
                  : { left: '63%', top: '24%', width: '13vw', rotate: 11.5 }
                }
                style={{ zIndex: isFlipped ? 1 : 2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 28 }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`front-${activeYear}`}
                    src={holographicCards[activeYear].front}
                    className="w-full drop-shadow-2xl"
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="absolute"
                initial={{ left: '63%', top: '24%', width: '13vw', rotate: 11.5 }}
                animate={!isFlipped
                  ? { left: '63%', top: '24%', width: '13vw', rotate: 11.5 }
                  : { left: '39%', top: '10%', width: '20vw', rotate: -9 }
                }
                style={{ zIndex: isFlipped ? 2 : 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 28 }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`back-${activeYear}`}
                    src={holographicCards[activeYear].back}
                    className="w-full drop-shadow-xl"
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="absolute bottom-[10%] left-1/2 z-20 flex -translate-x-[calc(50%+9px)] gap-6">
              {CARD_YEARS.map(year => (
                <motion.button
                  key={year}
                  type="button"
                  onClick={() => { setActiveYear(year); setIsFlipped(false) }}
                  className={`rounded-full px-8 py-[9px] min-w-[126px] text-center font-['Sul_Sans_Test',sans-serif] text-[18px] font-black transition-colors ${
                    activeYear === year
                      ? 'bg-[#ffd000] text-black shadow-[0_3px_0_black]'
                      : 'border border-white bg-transparent text-white'
                  }`}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 20 }}
                >
                  {year}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Como Colecionar */}
        <motion.div
          className={`absolute inset-0 z-30 overflow-hidden ${activeSection === 'Como colecionar' ? '' : 'pointer-events-none'}`}
          style={{ opacity: comoColetarOpacity }}
        >
          <div className="absolute inset-0">
            <img src={comoColetarBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>

          <div
            className="absolute overflow-hidden pointer-events-none"
            style={{ left: 'calc(50% + 15.5vw)', top: 'calc(50% - 10.6%)', width: 'min(49.3vw, 710px)', height: 'min(21.2vw, 305px)', transform: 'translate(-50%, -50%)' }}
          >
            <motion.img
              src={comoColetarCanarinhos}
              alt="Os cinco Canarinhos"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              key={`img-canarinhos-${activeSection}`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="absolute left-[7.8vw] top-[17%] flex flex-col items-start">
            <motion.div
              className="mb-5 inline-flex items-center rounded-full bg-[#ffd000] px-6 py-[5px]"
              key={`badge-${activeSection}`}
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-['Inter',sans-serif] text-[clamp(10px,0.82vw,11.9px)] font-bold tracking-[1.5px] text-black">COLEÇÃO OFICIAL</span>
            </motion.div>
            <motion.h2
              className="font-['Inter',sans-serif] text-[clamp(42px,5vw,72px)] font-bold leading-[0.93] tracking-[-0.02em] text-white"
              key={`title-${activeSection}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              Como<br />colecionar?
            </motion.h2>
            <motion.p
              className="mt-3 font-['Inter',sans-serif] text-[clamp(14px,1.6vw,23px)] font-normal leading-[1.13] text-white"
              key={`desc-${activeSection}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              Faça pedidos, junte selos<br />e complete a coleção:
            </motion.p>
          </div>

          <motion.img
            src={comoColetarInfo}
            alt="Informações de coleta"
            className="absolute pointer-events-none"
            style={{ left: '7.8vw', bottom: '8%', width: '27.2%' }}
            key={`img-info-${activeSection}`}
            loading="lazy"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.img
            src={comoColetarInstrucoes}
            alt="Como colecionar - 3 passos"
            className="absolute pointer-events-none"
            style={{ left: '38.1%', bottom: '8%', width: '54.1%' }}
            key={`img-instr-${activeSection}`}
            loading="lazy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </section>
    </main>
  )
}

export default App
