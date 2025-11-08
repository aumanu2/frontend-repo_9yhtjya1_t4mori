import { Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-30 w-full bg-[#0b1220]/60 backdrop-blur supports-[backdrop-filter]:bg-[#0b1220]/50 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ rotate: 4 }} className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 via-lime-400 to-emerald-600 p-[1px] shadow-[0_0_25px_rgba(52,211,153,.35)]">
            <div className="h-full w-full rounded-[11px] bg-[#0b1220] flex items-center justify-center">
              <Rocket className="h-5 w-5 text-emerald-300" />
            </div>
          </motion.div>
          <div>
            <p className="text-emerald-200/90 text-sm font-medium tracking-wide">Astra Data AI</p>
            <p className="text-white/80 text-xs">Conversational Data Analysis</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#app" className="text-white/70 hover:text-white transition-colors">Workspace</a>
          <a href="#get-started" className="text-white/70 hover:text-white transition-colors">Get Started</a>
        </div>
        <motion.button whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-400 to-lime-300 px-4 py-2 text-sm font-semibold text-[#0b1220] shadow-[0_10px_30px_-10px_rgba(52,211,153,.7)] hover:shadow-[0_12px_35px_-8px_rgba(163,230,53,.7)] transition-shadow">
          Launch App
        </motion.button>
      </div>
    </motion.header>
  )
}
