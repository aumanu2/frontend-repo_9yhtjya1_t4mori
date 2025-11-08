import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-labelledby="hero-heading">
      {/* 3D animation */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient brand glows over 3D (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-[-20%] left-[-10%] h-[55vh] w-[55vh] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[60vh] w-[60vh] rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,.9)] animate-pulse" />
            Data‑native AI for analytics teams
          </motion.span>

          <motion.h1
            id="hero-heading"
            className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-lime-300"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Chat with your data. Generate insights, SQL, and notebooks.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Connect CSV, Excel, Parquet, or a warehouse. Ask questions in plain English and instantly get validated queries, rich visualizations, and production‑ready Python.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#get-started"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 px-6 py-3 text-[#0b1220] font-semibold shadow-[0_20px_60px_-20px_rgba(52,211,153,.7)] hover:shadow-[0_24px_70px_-18px_rgba(163,230,53,.7)] transition-shadow"
            >
              Upload a dataset
            </motion.a>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2 }}
              href="#app"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition-colors"
            >
              Try a sample analysis
            </motion.a>
          </motion.div>

          {/* Data capability chips */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          >
            {['SQL generation', 'Schema inference', 'Anomaly detection', 'Interactive dashboards'].map((t) => (
              <motion.span
                key={t}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs text-white/75"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating glass cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,.06)] max-w-5xl"
        >
          <div className="grid sm:grid-cols-4 gap-4 text-sm">
            {[
              { h: 'Ingest', p: 'CSV · Excel · Parquet · JSONL' },
              { h: 'Explore', p: 'Descriptive stats & profiling' },
              { h: 'Model', p: 'Forecasting & clustering' },
              { h: 'Visualize', p: 'Auto charts & dashboards' },
            ].map((card) => (
              <motion.div
                key={card.h}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-4 hover:border-emerald-400/20 transition-colors"
              >
                <p className="text-white/60">{card.h}</p>
                <p className="mt-1 text-white/90">{card.p}</p>
              </motion.div>
            ))}
          </div>

          {/* Mini metrics */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[{k:'Rows processed',v:'12.4M'}, {k:'Datasets',v:'3,129'}, {k:'Avg. latency',v:'1.3s'}, {k:'Models',v:'+25'}].map((m) => (
              <div key={m.k} className="rounded-lg border border-white/10 bg-white/5 py-3">
                <p className="text-xs text-white/50">{m.k}</p>
                <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-300">{m.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
