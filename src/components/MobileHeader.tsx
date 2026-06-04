import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { navItems } from '../data/site'

export default function MobileHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-black/95 via-black/70 to-transparent px-4 py-4 lg:hidden">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Página inicial">
          <img src="/images/logo.svg" alt="iFood" className="h-[36px] w-auto" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex shrink-0 flex-col gap-[7px] p-2"
        >
          <span className="h-[3px] w-8 rounded-full bg-white" />
          <span className="h-[3px] w-8 rounded-full bg-white" />
          <span className="h-[3px] w-8 rounded-full bg-white" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.aside
              key="drawer"
              className="fixed right-0 top-0 z-[70] flex h-full w-[82vw] max-w-[340px] flex-col bg-[#0d1011] px-6 py-6 shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              <div className="flex items-center justify-between">
                <img src="/images/logo.svg" alt="iFood" className="h-[40px] w-auto" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="grid size-9 place-items-center rounded-full border border-white/25 transition-colors hover:border-white/60"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-bold transition-colors ${
                        isActive
                          ? 'bg-white/10 text-white'
                          : 'text-white/65 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#ea1d2c]" aria-hidden="true" />
                      )}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-auto pt-6">
                <Link
                  to="/como-colecionar"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ea1d2c] px-6 py-3.5 text-[14px] font-bold text-white transition-transform active:scale-95"
                >
                  Peça no iFood
                  <ArrowRight size={13} />
                </Link>
                <p className="mt-4 text-center text-[11px] text-white/40">
                  5 canarinhos. 5 títulos. Uma missão.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
