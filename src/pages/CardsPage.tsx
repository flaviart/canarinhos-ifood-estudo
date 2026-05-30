import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import { holographicCards, CARD_YEARS, type CardYear, cardsBg, cardsGlow } from '../data/site'

export default function CardsPage() {
  const [activeYear, setActiveYear] = useState<CardYear>('1958')
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section className="relative h-screen overflow-hidden bg-[#0d1011]">
      <img src={cardsBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" loading="lazy" />
      <img src={cardsGlow} alt="" className="pointer-events-none absolute h-[115%] w-[115%] top-[-7%] left-1/2 -translate-x-[48%] mix-blend-screen opacity-75" loading="lazy" />

      <div className="relative h-full">
        <div className="absolute left-[7.8vw] top-[21%] z-10">
          <h2 className="font-sans font-bold leading-[0.98] tracking-[0] text-[clamp(3.6rem,5.8vw,5rem)]">
            Cards<br />holográficos
          </h2>
          <p className="mt-4 font-sans text-[24px] font-normal leading-snug">
            A história da torcida<br />em versão colecionável.
          </p>
          <motion.button
            type="button"
            onClick={() => setIsFlipped(f => !f)}
            className="mt-8 flex items-center gap-4 rounded-full bg-[#ea1d2c] border-[3px] border-black px-11 py-5 font-sans text-[20px] font-bold shadow-[0_6px_0_black]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ y: 3, boxShadow: '0 3px 0 #000' }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            {isFlipped ? 'Ver frente' : 'Ver verso'} <RotateCcw size={24} />
          </motion.button>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute"
            initial={{ left: '42%', top: '17%', width: '20vw', rotate: -9, opacity: 0, y: 60 }}
            animate={!isFlipped
              ? { left: '42%', top: '17%', width: '20vw', rotate: -9, opacity: 1, y: 0 }
              : { left: '60%', top: '29%', width: '13vw', rotate: 11.5, opacity: 1, y: 0 }
            }
            style={{ zIndex: isFlipped ? 1 : 2, scale: 1.2 }}
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
            initial={{ left: '60%', top: '29%', width: '13vw', rotate: 11.5, opacity: 0, y: 60 }}
            animate={!isFlipped
              ? { left: '60%', top: '29%', width: '13vw', rotate: 11.5, opacity: 1, y: 0 }
              : { left: '40%', top: '17%', width: '20vw', rotate: -9, opacity: 1, y: 0 }
            }
            style={{ zIndex: isFlipped ? 2 : 1, scale: 1.2 }}
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
    </section>
  )
}
