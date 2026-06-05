import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { comoColetarBg, mobileComoColetarBg, comoColetarCanarinhos, comoColetarCanarinhosMobile, comoColetarInstrucoes, comoColetarInfo } from '../data/site'

export default function ComoColecionarPage() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div className="absolute inset-0">
          <img src={comoColetarBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>

        <div
          className="absolute overflow-hidden pointer-events-none"
          style={{ left: 'calc(50% + 15.5vw)', top: 'calc(50% - 10.6%)', width: 'min(54.4vw, 784px)', height: 'min(23.36vw, 336px)', transform: 'translate(-50%, -50%)' }}
        >
          <motion.img
            src={comoColetarCanarinhos}
            alt="Os cinco Canarinhos"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="absolute left-[7.8vw] top-[17%] flex flex-col items-start">
          <motion.div
            className="mb-5 inline-flex items-center rounded-full bg-[#ffd000] px-5 py-1"
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-[10px] font-bold tracking-[1.5px] text-black">COLEÇÃO OFICIAL</span>
          </motion.div>
          <motion.h2
            className="font-sans text-[clamp(2.9rem,4.64vw,4rem)] font-bold leading-[0.98] tracking-[0] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            Como<br />colecionar?
          </motion.h2>
          <motion.p
            className="mt-3 font-sans text-[19px] font-normal leading-snug text-white"
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
          style={{ left: '7.8vw', bottom: 'calc(8% + 8px)', width: '27.2%' }}
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
          loading="lazy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden">
        <div className="absolute inset-0">
          <img src={mobileComoColetarBg} alt="" className="absolute inset-0 h-full w-full scale-110 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </div>

        <div className="relative z-10 flex h-full flex-col overflow-y-auto px-5 pb-[160px] pt-[110px]">
          <motion.div
            className="inline-flex w-fit items-center rounded-full bg-[#ffd000] px-3 py-1"
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-[9px] font-bold tracking-[1.5px] text-black">COLEÇÃO OFICIAL</span>
          </motion.div>

          <motion.h2
            className="mt-3 font-sans text-[30px] font-bold leading-[1.1] tracking-[-0.5px] text-white whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Como colecionar?
          </motion.h2>

          <motion.p
            className="mt-2 font-sans text-[14px] font-normal leading-snug text-white/85"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Faça pedidos, junte selos e complete a coleção:
          </motion.p>

          {/* 5 canarinhos */}
          <motion.div
            className="mt-4 flex w-full items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={comoColetarCanarinhosMobile}
              alt="Os cinco Canarinhos"
              className="w-full object-contain"
              loading="lazy"
            />
          </motion.div>

          {/* Info + Instruções (stacked) */}
          <motion.img
            src={comoColetarInfo}
            alt="Informações de coleta"
            className="mt-4 w-full"
            loading="lazy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.img
            src={comoColetarInstrucoes}
            alt="Como colecionar - 3 passos"
            className="mt-3 w-full"
            loading="lazy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* CTA fixo no rodapé */}
        <div className="absolute bottom-5 left-5 right-5 z-20">
          <Link to="/canarinhos" className="block">
            <motion.button
              type="button"
              className="flex w-full items-center justify-center rounded-full border-2 border-[#ea1d2c] bg-white px-6 py-4 font-sans text-[16px] font-bold text-[#ea1d2c]"
              whileTap={{ scale: 0.97 }}
            >
              Peça no iFood
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

