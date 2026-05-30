import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { canarinhos } from '../data/site'

export default function CanarinhosPage() {
  const [activeCanarinho, setActiveCanarinho] = useState(0)
  const currentCanarinho = canarinhos[activeCanarinho]

  return (
    <section className="relative h-screen overflow-hidden bg-[#1e0304]">
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
            fontSize="8px"
            fontWeight="500"
            textLength="308"
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
    </section>
  )
}
