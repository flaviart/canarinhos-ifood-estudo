import { Link, Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const navItems = [
  { label: 'Coleção', path: '/' },
  { label: 'Os Canarinhos', path: '/canarinhos' },
  { label: 'Cards holográficos', path: '/cards' },
  { label: 'Como colecionar', path: '/como-colecionar' },
]

export default function Layout() {
  const location = useLocation()
  const currentPath = location.pathname
  const activeSection = navItems.find(i => i.path === currentPath)?.label ?? 'Coleção'
  const isComoColecionar = currentPath === '/como-colecionar'

  return (
    <div className="min-h-screen bg-[#0d1011] text-white">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-[7.8vw] py-6">
        <motion.div
          className="flex items-center gap-12"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <Link to="/" className="block h-10 w-[75px]">
            <img src="/images/logo.svg" alt="iFood" className="h-full w-full object-contain" />
          </Link>

          <nav className="hidden items-center gap-11 font-sans text-[15px] font-normal lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="group relative text-left"
              >
                {item.label}
                {activeSection === item.label && (
                  <motion.span layoutId="active-nav" className="absolute -bottom-3 left-0 h-px w-full bg-[#ea1d2c]" />
                )}
              </Link>
            ))}
          </nav>
        </motion.div>

        <Link to="/como-colecionar">
          <motion.button
            type="button"
            className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-sans text-[15px] font-bold transition-colors ${
              isComoColecionar
                ? 'bg-white text-[#ea1d2c]'
                : 'bg-[#ea1d2c] text-white'
            }`}
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          >
            Peça no iFood
            <ArrowRight size={16} />
          </motion.button>
        </Link>
      </header>

      <motion.main
        key={currentPath}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Outlet />
      </motion.main>
    </div>
  )
}
