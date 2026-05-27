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
          className="font-['Inter',sans-serif] text-[clamp(3rem,5vw,4.45rem)] font-bold leading-[0.98] tracking-[-0.05em]"
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
            className="-rotate-1 rounded-full border border-black bg-[#ffd000] px-7 py-3 text-center font-['Inter',sans-serif] text-[23px] font-bold tracking-[0.2em] text-black shadow-[0_4px_0_#000]"
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
            <strong className="text-[42px] font-bold leading-none tracking-[-0.03em]">{currentCanarinho.index}</strong>
            <h3 className="pb-1 text-[26px] font-bold uppercase leading-none">{currentCanarinho.title}</h3>
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
              onClick={() => setActiveCanarinho(index)}
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
            fontFamily="'Inter', sans-serif"
            fontSize="10px"
            fontWeight="500"
            textLength="308"
            lengthAdjust="spacing"
          >
            <textPath href="#seal-circle" startOffset="0%">
              ★ COLECIONÁVEIS OFICIAIS ★ RUMO AO HEXA ★
            </textPath>
          </text>
        </motion.svg>
        <div className="grid size-[73px] place-items-center overflow-hidden rounded-full bg-white">
          <img src={currentCanarinho.seal} alt="" className="size-full object-cover" />
        </div>
      </motion.div>
    </section>
  )
}
