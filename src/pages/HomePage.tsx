import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const assets = {
  heroBg: '/images/hero-bg.jpg',
  heroCanarinhos: '/images/hero-canarinhos.png',
  heroBgMobile: '/images/mobile-home-bg.jpg',
  heroCanarinhosMobile: '/images/hero-canarinhos-mobile.png',
}

export default function HomePage() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#1e0304]">
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <img src={assets.heroBg} alt="" className="h-full w-full object-cover" />
        </motion.div>

        <div className="relative z-10 mx-auto h-screen max-w-[1440px] px-6">
          <motion.p
            className="absolute left-1/2 top-[15%] z-20 w-full -translate-x-1/2 text-center text-[12px] font-medium uppercase tracking-[0.4em] text-[#ffd000]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
          >
            5 colecionáveis <span className="text-[#ea1d2c]">★</span> 5 títulos mundiais{' '}
            <span className="text-[#ea1d2c]">★</span> uma missão.
          </motion.p>

          <motion.h1
            className="pointer-events-none absolute left-1/2 top-[17%] z-0 -translate-x-1/2 font-display text-[min(28vw,416px)] leading-none tracking-[0.02em] text-[#fff2d7]/25"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          >
            CANARINHOS
          </motion.h1>

          <motion.img
            src={assets.heroCanarinhos}
            alt="Cinco Canarinhos colecionáveis"
            className="absolute bottom-0 left-1/2 z-10 h-[82vh] w-auto max-w-none -translate-x-1/2"
            initial={{ opacity: 0, y: 56, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.35, ease: 'easeOut' }}
          />

          <motion.div
            className="absolute bottom-[7%] left-1/2 z-20 flex w-full -translate-x-1/2 flex-col items-center justify-center gap-4 px-6 sm:flex-row"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.86, ease: 'easeOut' }}
          >
            <Link to="/canarinhos">
              <motion.button
                type="button"
                className="group inline-flex w-full max-w-[272px] items-center justify-center gap-6 rounded-full bg-[#ea1d2c] px-6 py-3 font-sans text-[14px] font-bold"
                whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(234,29,44,0.55)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 320, damping: 14 }}
              >
                Conheça os canarinhos
                <motion.span
                  className="grid size-4 place-items-center rounded-full bg-white text-[#ea1d2c]"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  <Play size={8} fill="currentColor" />
                </motion.span>
              </motion.button>
            </Link>
            <Link to="/como-colecionar">
              <motion.button
                type="button"
                className="group inline-flex w-full max-w-[272px] items-center justify-center gap-6 rounded-full border border-white/70 bg-black/35 px-6 py-3 font-sans text-[14px] font-bold transition-colors hover:bg-white hover:text-black"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 320, damping: 14 }}
              >
                Quero colecionar
                <motion.span
                  className="grid size-4 place-items-center rounded-full bg-white text-[#0d1011] group-hover:bg-black group-hover:text-white"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  <Play size={8} fill="currentColor" />
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <img src={assets.heroBgMobile} alt="" className="h-full w-full object-cover" />
        </motion.div>

        {/* Spacer para o header fixo */}
        <div className="h-[72px]" />

        {/* Text */}
        <div className="relative z-10 px-5">
          <motion.p
            className="text-center text-[10px] font-medium uppercase leading-relaxed tracking-[0.1em] text-[#ffd000] whitespace-nowrap"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
          >
            5 TÍTULOS MUNDIAIS <span className="text-[#ea1d2c]">★</span> 5 COLECIONÁVEIS
          </motion.p>

          <motion.h1
            className="pointer-events-none mt-0 text-center font-display text-[clamp(150px,46vw,260px)] leading-[0.95] tracking-[0.02em] text-[#fff2d7]/30"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          >
            CANAR
            <br />
            INHOS
          </motion.h1>
        </div>

        {/* Canarinhos Image */}
        <motion.img
          src={assets.heroCanarinhosMobile}
          alt="Cinco Canarinhos colecionáveis"
          className="absolute top-[72%] left-1/2 z-10 w-[160vw] max-w-none -translate-x-1/2 -translate-y-[60%] object-contain"
          initial={{ opacity: 0, y: 56, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.35, ease: 'easeOut' }}
        />

        {/* Buttons */}
        <motion.div
          className="absolute bottom-3 left-5 right-5 z-20 flex flex-col gap-3"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.86, ease: 'easeOut' }}
        >
          <Link to="/canarinhos" className="block">
            <motion.button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#ea1d2c] px-6 py-4 font-sans text-[15px] font-bold text-white"
              whileTap={{ scale: 0.97 }}
            >
              Conheça os Canarinhos
              <span className="grid size-6 place-items-center rounded-full bg-white text-[#ea1d2c]">
                <Play size={10} fill="currentColor" />
              </span>
            </motion.button>
          </Link>
          <Link to="/como-colecionar" className="block">
            <motion.button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-white bg-black/40 px-6 py-4 font-sans text-[15px] font-bold text-white"
              whileTap={{ scale: 0.97 }}
            >
              Quero colecionar
              <span className="grid size-6 place-items-center rounded-full bg-white text-[#0d1011]">
                <Play size={10} fill="currentColor" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

