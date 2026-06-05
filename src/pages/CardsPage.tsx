import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RotateCcw, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { holographicCards, CARD_YEARS, type CardYear, cardsBg, cardsGlow } from '../data/site'

const mobileBg = '/images/mobile-cards-bg.jpg'

export default function CardsPage() {
  const [activeYear, setActiveYear] = useState<CardYear>('1958')
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section className="relative h-screen overflow-hidden bg-[#0d1011]">
      {/* Desktop Version */}
      <div className="hidden lg:block h-full">
        <img src={cardsBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" loading="lazy" />
        <img src={cardsGlow} alt="" className="pointer-events-none absolute h-[115%] w-[115%] top-[-7%] left-1/2 -translate-x-[48%] mix-blend-screen opacity-75" loading="lazy" />

        <div className="relative h-full">
          <div className="absolute left-[7.8vw] top-[18%] z-10">
            <h2 className="font-sans font-bold leading-[0.98] tracking-[0] text-[clamp(2.9rem,4.64vw,4rem)]">
              Cards<br />holográficos
            </h2>
            <p className="mt-3 font-sans text-[19px] font-normal leading-snug">
              A história da torcida<br />em versão colecionável.
            </p>
            <motion.button
              type="button"
              onClick={() => setIsFlipped(f => !f)}
              className="mt-8 flex items-center justify-center gap-3 rounded-full bg-[#ea1d2c] border-[3px] border-black px-9 py-4 font-sans text-[16px] font-bold shadow-[0_6px_0_black]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ y: 3, boxShadow: '0 3px 0 #000' }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              {isFlipped ? 'Ver frente' : 'Ver verso'} <RotateCcw size={19} />
            </motion.button>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute"
              initial={{ left: '38%', top: '18%', width: '27.5vw', rotate: -9, opacity: 0, y: 60 }}
              animate={!isFlipped
                ? { left: '38%', top: '18%', width: '27.5vw', rotate: -9, opacity: 1, y: 0 }
                : { left: '54%', top: '32%', width: '17.5vw', rotate: 11.5, opacity: 1, y: 0 }
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
              initial={{ left: '54%', top: '32%', width: '17.5vw', rotate: 11.5, opacity: 0, y: 60 }}
              animate={!isFlipped
                ? { left: '54%', top: '32%', width: '17.5vw', rotate: 11.5, opacity: 1, y: 0 }
                : { left: '38%', top: '18%', width: '27.5vw', rotate: -9, opacity: 1, y: 0 }
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

          <div className="absolute bottom-[5%] left-1/2 z-20 flex -translate-x-[calc(50%+9px)] gap-3">
            {CARD_YEARS.map(year => (
              <motion.button
                key={year}
                type="button"
                onClick={() => { setActiveYear(year); setIsFlipped(false) }}
                className={`rounded-full px-6 py-[7px] min-w-[101px] text-center font-['Sul_Sans_Test',sans-serif] text-[14px] font-black transition-colors ${
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
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden">
        <div className="absolute inset-0 bg-black">
          <img src={mobileBg} alt="" className="absolute inset-0 h-full w-full scale-110 object-cover" />
        </div>

        {/* Spacer para o header fixo */}
        <div className="h-[110px]" />

        {/* Content */}
        <div className="relative z-10 px-5">
          <motion.h2
            className="font-sans text-[34px] font-bold leading-[1.05] tracking-[-0.5px] text-white"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            Cards holográficos
          </motion.h2>
          <motion.p
            className="mt-2 font-sans text-[15px] font-normal leading-snug text-white/85"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
          >
            A história da torcida em versão colecionável.
          </motion.p>

          {/* Flip Button */}
          <motion.button
            type="button"
            onClick={() => setIsFlipped(f => !f)}
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#ea1d2c] border-2 border-black px-6 py-3 font-sans text-[15px] font-bold text-white shadow-[0_4px_0_#000]"
            whileTap={{ y: 2, boxShadow: '0 2px 0 #000' }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            {isFlipped ? 'Ver frente' : 'Ver verso'} <RotateCcw size={16} />
          </motion.button>
        </div>

        {/* Cards - área centralizada */}
        <div className="pointer-events-none absolute inset-x-0 top-[230px] bottom-[230px]">
          <motion.div
            className="absolute"
            initial={{ left: '5%', top: '8%', width: '65%', rotate: -9, opacity: 0, y: 60 }}
            animate={!isFlipped
              ? { left: '5%', top: '8%', width: '65%', rotate: -9, opacity: 1, y: 0 }
              : { left: '52%', top: '28%', width: '42%', rotate: 11.5, opacity: 1, y: 0 }
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
            initial={{ left: '52%', top: '28%', width: '42%', rotate: 11.5, opacity: 0, y: 60 }}
            animate={!isFlipped
              ? { left: '52%', top: '28%', width: '42%', rotate: 11.5, opacity: 1, y: 0 }
              : { left: '5%', top: '8%', width: '65%', rotate: -9, opacity: 1, y: 0 }
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

        {/* Year Pills */}
        <div className="absolute bottom-[110px] left-0 right-0 z-20">
          <div className="flex justify-center gap-1.5 px-5">
            {CARD_YEARS.map(year => (
              <motion.button
                key={year}
                type="button"
                onClick={() => { setActiveYear(year); setIsFlipped(false) }}
                className={`shrink-0 rounded-full px-3 py-1.5 min-w-[52px] text-center font-['Sul_Sans_Test',sans-serif] text-[12px] font-black transition-colors ${
                  activeYear === year
                    ? 'bg-[#ffd000] text-black shadow-[0_2px_0_#000]'
                    : 'border border-white/70 bg-transparent text-white'
                }`}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 420, damping: 20 }}
              >
                {year}
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-3 left-5 right-5 z-20">
          <Link to="/como-colecionar" className="block">
            <motion.button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#ea1d2c] px-6 py-4 font-sans text-[15px] font-bold text-white"
              whileTap={{ scale: 0.97 }}
            >
              Quero colecionar
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
