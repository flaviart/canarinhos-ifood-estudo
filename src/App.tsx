import { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

const assets = {
  heroBg: 'https://www.figma.com/api/mcp/asset/10eca87b-26e9-4778-b69d-5130351771ee',
  heroCanarinhos: 'https://www.figma.com/api/mcp/asset/bd4bb975-1ea9-4289-bb71-8ea0dd4ae361',
  logo: 'https://www.figma.com/api/mcp/asset/128d381a-313f-43e6-91e6-8cf31e088e8a',
}

const navItems = [
  { label: 'Coleção', progress: 0 },
  { label: 'Os Canarinhos', progress: 0.15 },
  { label: 'Cards holográficos', progress: 0.96 },
  { label: 'Como colecionar', progress: 1 },
]

const canarinhos = [
  {
    number: '58',
    label: 'CANARINHO 58',
    index: '#01',
    title: 'O PIONEIRO',
    description: 'O Canarinho que apresentou o futebol brasileiro para o mundo.',
    bg: 'https://www.figma.com/api/mcp/asset/5cf5b72b-a033-4313-9001-09dfbb915d00',
    image: 'https://www.figma.com/api/mcp/asset/2309ef24-9312-4eaf-8384-21c209290a1f',
    seal: 'https://www.figma.com/api/mcp/asset/468288a1-659a-4533-b0f1-828c792b2f49',
  },
  {
    number: '62',
    label: 'CANARINHO 62',
    index: '#02',
    title: 'O PIONEIRO',
    description: 'O Canarinho que apresentou o futebol brasileiro para o mundo.',
    bg: 'https://www.figma.com/api/mcp/asset/c8ebd62a-3361-43e1-89e5-811111fb2039',
    image: 'https://www.figma.com/api/mcp/asset/3aa69fcd-81c3-4ff6-bb1f-b7ce873fa2c2',
    seal: 'https://www.figma.com/api/mcp/asset/d9e204a3-4c12-4970-b318-2d0f39672d69',
  },
  {
    number: '70',
    label: 'CANARINHO 70',
    index: '#03',
    title: 'O PIONEIRO',
    description: 'O Canarinho que apresentou o futebol brasileiro para o mundo.',
    bg: 'https://www.figma.com/api/mcp/asset/7a80c30d-ec6c-4d46-9cf8-ea7c4ad9076b',
    image: 'https://www.figma.com/api/mcp/asset/135ab46a-a378-484b-96e5-f26d93a232f4',
    seal: 'https://www.figma.com/api/mcp/asset/16c1b763-518c-47a9-ad62-dc0ccb2ad4d8',
  },
  {
    number: '94',
    label: 'CANARINHO 94',
    index: '#04',
    title: 'O PAI DOS PENALTIS',
    description: 'O Canarinho que apresentou o futebol brasileiro para o mundo.',
    bg: 'https://www.figma.com/api/mcp/asset/0ae4bb1a-c07a-43a7-a92d-dcb3e3ee3c46',
    image: 'https://www.figma.com/api/mcp/asset/122b34c5-4854-4d76-8789-c41e541099a4',
    seal: 'https://www.figma.com/api/mcp/asset/c6546c40-104a-478d-8fa0-da2b58cd9d51',
  },
  {
    number: '02',
    label: 'CANARINHO 02',
    index: '#05',
    title: 'O PAI DOS PENALTIS',
    description: 'O Canarinho que apresentou o futebol brasileiro para o mundo.',
    bg: 'https://www.figma.com/api/mcp/asset/1b21bf28-09e6-42a4-a4e2-62e478d506fc',
    image: 'https://www.figma.com/api/mcp/asset/bd45c566-51e4-45b0-833f-8cf6a63c58df',
    seal: 'https://www.figma.com/api/mcp/asset/1998d66b-dda4-4770-ab41-c3eb51db8eeb',
  },
]

function scrollToProgress(progress: number) {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  window.scrollTo({ top: scrollable * progress, behavior: 'smooth' })
}

function App() {
  const [activeSection, setActiveSection] = useState('Coleção')
  const [activeCanarinho, setActiveCanarinho] = useState(0)
  const { scrollYProgress } = useScroll()
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const sealRotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.09, 0.14], [1, 1, 0])
  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.04, 0.10], [1, 1, 0])
  const heroBlur = useTransform(scrollYProgress, [0, 0.10, 0.14], ['blur(0px)', 'blur(0px)', 'blur(8px)'])
  const collectionOpacity = useTransform(scrollYProgress, [0.10, 0.16], [0, 1])
  const collectionScale = useTransform(scrollYProgress, [0.10, 0.15], [1.07, 1])
  const collectionBlur = useTransform(scrollYProgress, [0.10, 0.15], ['blur(8px)', 'blur(0px)'])
  const transitionFlashOpacity = useTransform(scrollYProgress, [0.09, 0.13, 0.18], [0, 0.22, 0])
  const sweepX = useTransform(scrollYProgress, [0.08, 0.19], ['-120%', '120%'])
  const sweepOpacity = useTransform(scrollYProgress, [0.08, 0.13, 0.19], [0, 0.35, 0])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.15) {
      setActiveSection('Coleção')
      setActiveCanarinho(0)
      return
    }

    setActiveSection('Os Canarinhos')

    const RANGE_START = 0.15
    const RANGE_END = 0.96
    const itemProgress = (latest - RANGE_START) / (RANGE_END - RANGE_START)
    const nextIndex = Math.min(canarinhos.length - 1, Math.max(0, Math.floor(itemProgress * canarinhos.length)))
    setActiveCanarinho(nextIndex)
  })

  const currentCanarinho = canarinhos[activeCanarinho]

  return (
    <main className="h-[1200vh] bg-[#0d1011] text-white">
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

      <section className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)] opacity-[0.18]" />
        <motion.div
          className="pointer-events-none absolute inset-0 z-40 bg-[#ffd000] mix-blend-screen"
          style={{ opacity: transitionFlashOpacity }}
        />
        <motion.div
          className="pointer-events-none absolute top-0 z-40 h-full w-[42vw] rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-2xl"
          style={{ x: sweepX, opacity: sweepOpacity }}
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
            <a
              href="#como-colecionar"
              className="inline-flex w-full max-w-[312px] items-center justify-center gap-8 rounded-full bg-[#ea1d2c] px-6 py-3 font-['Inter',sans-serif] text-base font-bold"
            >
              Quero colecionar
              <span className="grid size-5 place-items-center rounded-full bg-white text-[#ea1d2c]">
                <Play size={10} fill="currentColor" />
              </span>
            </a>
            <a
              href="#os-canarinhos"
              className="inline-flex w-full max-w-[312px] items-center justify-center gap-8 rounded-full border border-white bg-black/35 px-6 py-3 font-['Inter',sans-serif] text-base font-bold"
            >
              Conheça os Canarinhos
              <span className="grid size-5 place-items-center rounded-full bg-white text-[#0d1011]">
                <Play size={10} fill="currentColor" />
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10"
          style={{ opacity: collectionOpacity }}
        >
          <motion.img src={currentCanarinho.bg} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ scale: collectionScale, filter: collectionBlur }} />

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
              a historia
              <br />
              da torcida.
            </motion.h2>

            <motion.div
              key={`info-${activeCanarinho}`}
              className="mt-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="-rotate-1 rounded-full border border-black bg-[#ffd000] px-7 py-3 text-center font-['Inter',sans-serif] text-[23px] font-black tracking-[0.2em] text-black shadow-[0_4px_0_#000]">
                {currentCanarinho.label}
              </div>
              <div className="mt-4 flex items-end gap-3 font-['Inter',sans-serif]">
                <strong className="text-[42px] font-black leading-none tracking-[-0.03em]">{currentCanarinho.index}</strong>
                <h3 className="pb-1 text-[26px] font-black uppercase leading-none">{currentCanarinho.title}</h3>
              </div>
              <p className="mt-2 max-w-[310px] font-['Inter',sans-serif] text-base font-medium leading-snug tracking-[0.025em]">
                {currentCanarinho.description}
              </p>
            </motion.div>
          </div>

          <motion.p
            key={`number-${activeCanarinho}`}
            className="pointer-events-none absolute left-[33%] top-[6%] z-0 font-display text-[min(48vw,702px)] leading-none tracking-[0.02em] text-[#fff2d7]/25"
            initial={{ opacity: 0, scale: 1.12, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentCanarinho.number}
          </motion.p>

          <motion.img
            key={`canarinho-${activeCanarinho}`}
            src={currentCanarinho.image}
            alt={currentCanarinho.label}
            className="absolute bottom-0 left-[21.25%] z-10 max-h-[85vh] w-[57.5vw] object-contain object-bottom"
            initial={{ opacity: 0, y: 80, scale: 0.88, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="absolute right-[8.1vw] top-[22%] z-30 flex flex-col items-center gap-4">
            {canarinhos.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => scrollToProgress(0.15 + index * 0.162)}
                className={`grid rounded-full border border-[#5b110e] bg-[#821916] p-1.5 transition-all duration-300 ${
                  activeCanarinho === index ? 'size-[44px] opacity-100' : 'size-[37px] opacity-55 saturate-50'
                }`}
                aria-label={`Mostrar ${item.label}`}
              >
                <img src={item.seal} alt="" className="size-full rounded-full object-cover" />
              </button>
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
      </section>
    </main>
  )
}

export default App
