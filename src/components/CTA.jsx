import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0e1627] to-[#0b1220] p-8 sm:p-12"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl animate-pulse" />
          </div>

          <div className="flex flex-col items-center text-center">
            <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white">Analyze your data in minutes</motion.h3>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-3 text-white/70 max-w-2xl">
              Upload a CSV or Excel file and start chatting with your dataset. Your first insights, charts, and code are just a few clicks away.
            </motion.p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <label className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/80 hover:bg-white/10 transition-colors">
                <input type="file" className="hidden" accept=".csv,.xlsx,.xls" />
                <span>Choose a file</span>
              </label>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 px-6 py-3 text-[#0b1220] font-semibold shadow-[0_20px_60px_-20px_rgba(52,211,153,.7)] hover:shadow-[0_24px_70px_-18px_rgba(163,230,53,.7)] transition-shadow">
                Start analyzing
              </motion.button>
            </div>
            <p className="mt-3 text-xs text-white/50">Max size 100MB. Securely processed in isolated sandboxes.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
