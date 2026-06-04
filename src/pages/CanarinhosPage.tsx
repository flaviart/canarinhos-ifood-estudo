import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { canarinhos } from '../data/site'

const mobileBg = '/images/mobile-canarinhos-bg.png'

export default function CanarinhosPage() {
  const [activeCanarinho, setActiveCanarinho] = useState(0)
  const currentCanarinho = canarinhos[activeCanarinho]

  return (
    <section className="relative h-screen overflow-hidden bg-[#1e0304]">
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <AnimatePresence>
          <motion.img
            key={`bg-${activeCanarinho}`}
            src={currentCanarinho.bg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
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
            className="font-sans text-[clamp(2.9rem,4.64vw,4rem)] font-bold leading-[0.98] tracking-[0]"
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

          <div className="mt-6 flex gap-2">
            {canarinhos.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveCanarinho(index)}
                className={`flex cursor-pointer items-center gap-2 rounded-xl border px-2 py-1.5 transition-all duration-300 ${
                  activeCanarinho === index
                    ? 'border-white/50 bg-white/15 shadow-[0_0_16px_rgba(255,255,255,0.1)]'
                    : 'border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.08]'
                }`}
                aria-label={`Mostrar ${item.label}`}
              >
                <img src={item.seal} alt="" className="size-7 rounded-full object-cover" />
                <span className={`font-sans text-sm font-bold leading-none transition-colors duration-300 ${
                  activeCanarinho === index ? 'text-white' : 'text-white/45'
                }`}>
                  {item.number}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-12">
            <motion.div
              key={`label-${activeCanarinho}`}
              className="inline-flex -rotate-1 items-center rounded-full border border-black bg-[#ffd000] px-5 py-2 font-sans text-[21px] font-black tracking-[0.15em] text-black shadow-[0_4px_0_#000]"
              initial={{ opacity: 0, y: 12, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentCanarinho.label}
            </motion.div>
            <motion.div
              key={`idxtitle-${activeCanarinho}`}
              className="mt-4 flex items-baseline gap-3 font-sans"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <strong className="text-[51px] font-black leading-[0.85] tracking-[0]">{currentCanarinho.index}</strong>
              <h3 className="text-[29px] font-black uppercase leading-none">{currentCanarinho.title}</h3>
            </motion.div>
            <motion.p
              key={`desc-${activeCanarinho}`}
              className="mt-4 max-w-[460px] whitespace-pre-line font-sans text-[16px] font-normal leading-snug tracking-[0.01em]"
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
            className="pointer-events-none absolute left-[57.75%] top-[5%] z-0 -translate-x-1/2 font-display text-[min(44vw,632px)] leading-none tracking-[0.02em] text-[#fff2d7]/25"
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

        <motion.div
          className="absolute bottom-[8%] right-[7.8vw] z-30 hidden size-[102px] items-center justify-center rounded-full bg-[#ea1d2c] shadow-[0_18px_40px_rgba(0,0,0,0.35)] lg:flex"
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
            <text
              fill="white"
              fontFamily="'Albert Sans', sans-serif"
              fontSize="12px"
              fontWeight="500"
              textLength="300"
              lengthAdjust="spacing"
            >
              <textPath href="#seal-circle" startOffset="0%">
                ★ COLECIONÁVEIS OFICIAIS ★ RUMO AO HEXA
              </textPath>
            </text>
          </motion.svg>
          <div className="grid size-[58px] place-items-center overflow-hidden rounded-full bg-white">
            <img src={currentCanarinho.seal} alt="" className="size-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden">
        <div className="absolute inset-0 bg-black">
          <img src={mobileBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Spacer para o header fixo */}
        <div className="h-[110px]" />

        {/* Content scrollable */}
        <div className="relative z-10 flex h-[calc(100vh-72px)] flex-col px-5 pb-[140px]">
          <motion.h2
            className="font-sans text-[34px] font-bold leading-[1.05] tracking-[-0.5px] text-white"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            Colecione a
            <br />
            história da torcida.
          </motion.h2>

          {/* Tabs */}
          <div className="mt-5 flex gap-1">
            {canarinhos.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveCanarinho(index)}
                className={`flex flex-1 items-center justify-center gap-1 rounded-lg border px-1 py-1.5 transition-all ${
                  activeCanarinho === index
                    ? 'border-white/60 bg-white/15 shadow-[0_0_16px_rgba(255,255,255,0.1)]'
                    : 'border-white/10 bg-white/[0.04]'
                }`}
                aria-label={`Mostrar ${item.label}`}
                aria-pressed={activeCanarinho === index}
              >
                <img src={item.seal} alt="" className="size-5 rounded-full object-cover" />
                <span className={`font-sans text-[12px] font-bold leading-none ${
                  activeCanarinho === index ? 'text-white' : 'text-white/45'
                }`}>
                  {item.number}
                </span>
              </button>
            ))}
          </div>

          {/* Área do canarinho: watermark + imagem */}
          <div className="relative mt-4 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={`number-${activeCanarinho}`}
                className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center font-display text-[clamp(320px,90vw,520px)] leading-none tracking-[0.02em] text-[#fff2d7]/30"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
              >
                {currentCanarinho.number}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.img
                key={`canarinho-${activeCanarinho}`}
                src={currentCanarinho.image}
                alt={currentCanarinho.label}
                className="absolute bottom-0 left-1/2 z-10 h-[105%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          {/* Badge */}
          <motion.div
            key={`label-${activeCanarinho}`}
            className="-rotate-1 mx-auto inline-flex items-center rounded-full border-[3px] border-black bg-[#ffd000] px-7 py-3 shadow-[0_5px_0_#000]"
            initial={{ opacity: 0, y: 12, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-[19px] font-black tracking-[0.15em] text-black">
              {currentCanarinho.label}
            </span>
          </motion.div>

          {/* Index + Title */}
          <motion.div
            key={`idxtitle-${activeCanarinho}`}
            className="mt-3 flex items-baseline justify-center gap-3"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <strong className="font-sans text-[40px] font-black leading-[0.85] tracking-[-1px] text-white">
              {currentCanarinho.index}
            </strong>
            <h3 className="font-sans text-[22px] font-black uppercase leading-none text-white">
              {currentCanarinho.title}
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            key={`desc-${activeCanarinho}`}
            className="mt-2 whitespace-pre-line text-center font-sans text-[14px] font-normal leading-snug text-white/85"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.27, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentCanarinho.description}
          </motion.p>
        </div>

        {/* CTA fixo no rodapé */}
        <div className="absolute bottom-5 left-5 right-5 z-20">
          <Link to="/cards" className="block">
            <motion.button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#ea1d2c] px-6 py-4 font-sans text-[15px] font-bold text-white"
              whileTap={{ scale: 0.97 }}
            >
              Cards holográficos
              <span className="grid size-6 place-items-center rounded-full bg-white text-[#ea1d2c]">
                <Play size={10} fill="currentColor" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
