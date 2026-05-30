import { motion } from 'framer-motion'
import { comoColetarBg, comoColetarCanarinhos, comoColetarInstrucoes, comoColetarInfo } from '../data/site'

export default function ComoColecionarPage() {
  return (
    <section className="relative h-screen overflow-hidden">
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
    </section>
  )
}
