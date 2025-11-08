import { motion } from 'framer-motion'

export default function Hero() {
  const barHeights = [62, 120, 90, 150, 80, 130, 110, 170, 95, 140]

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-labelledby="hero-heading">
      {/* Data grid background */}
      <div className="absolute inset-0 z-0">
        <svg className="h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#a3e635" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="glow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#10b981" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#glow)" />
          {/* grid */}
          {Array.from({ length: 24 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={800} stroke="url(#g1)" strokeWidth="1" />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`h${i}`} x1={0} y1={i * 50} x2={1200} y2={i * 50} stroke="url(#g1)" strokeWidth="1" />
          ))}
          {/* shimmering sweep */}
          <motion.rect
            initial={{ x: -1200 }}
            animate={{ x: 1200 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            y={0}
            width={200}
            height={800}
            fill="#a3e635"
            opacity={0.06}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
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

        {/* Data visuals: bar + line + scatter */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,.06)]"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70">Revenue by segment</p>
              <span className="text-xs text-emerald-300">auto‑generated chart</span>
            </div>
            <div className="mt-4 h-40 flex items-end gap-2">
              {barHeights.map((h, i) => (
                <motion.div
                  key={i}
                  className="w-6 rounded-t-lg bg-gradient-to-t from-emerald-500/70 to-lime-300/80"
                  initial={{ height: h * 0.7 }}
                  animate={{ height: [h * 0.7, h, h * 0.85, h] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.05 }}
                />
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 text-xs text-white/60">
              <div>North</div><div>EMEA</div><div>APAC</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-[#0d1526]/60 backdrop-blur p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70">Query latency (p95)</p>
              <span className="text-xs text-lime-300">Python + SQL</span>
            </div>
            <svg className="mt-4 h-40 w-full" viewBox="0 0 400 160">
              <defs>
                <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#a3e635" />
                </linearGradient>
              </defs>
              <polyline
                points="0,110 40,100 80,120 120,90 160,95 200,80 240,75 280,70 320,68 360,64 400,60"
                fill="none"
                stroke="url(#line)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.9"
              />
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.circle
                  key={i}
                  cx={40 + i * 40}
                  cy={[100, 120, 90, 95, 80, 75, 70, 68, 64][i]}
                  r="4"
                  fill="#a3e635"
                  initial={{ opacity: 0.6, r: 3 }}
                  animate={{ opacity: [0.6, 1, 0.6], r: [3, 5, 3] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.12 }}
                />
              ))}
            </svg>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/70">SELECT p95_latency FROM logs</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/70">pandas.groupby()</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/70">seaborn.lineplot()</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
