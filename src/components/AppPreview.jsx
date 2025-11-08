import { Play, UploadCloud, MessageSquare, BarChart3, FileCode, Send, LineChart } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AppPreview() {
  const [messages, setMessages] = useState([
    { role: 'user', content: 'Load sales.csv and summarize revenue by month.' },
    { role: 'assistant', content: 'Loaded 12,453 rows. Created a monthly revenue pivot and line chart.' },
  ])
  const inputRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages])

  return (
    <section id="app" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid xl:grid-cols-3 gap-10 items-stretch">
          {/* Chat panel */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="xl:col-span-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden flex flex-col">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MessageSquare className="h-4 w-4" />
                <span>Chat</span>
              </div>
              <button className="inline-flex items-center gap-2 text-emerald-300 text-sm">
                <UploadCloud className="h-4 w-4" /> Upload
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 p-5 space-y-3 overflow-auto max-h-[420px]">
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className={m.role === 'user' ? 'flex justify-start' : 'flex justify-start'}
                  >
                    <div
                      className={`rounded-xl px-3 py-2 text-sm max-w-[85%] ${
                        m.role === 'user'
                          ? 'bg-white/5 text-white/80'
                          : 'bg-emerald-500/10 ring-1 ring-emerald-400/20 text-emerald-50/90'
                      }`}
                    >
                      {m.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                const el = inputRef.current
                if (!el) return
                const value = el.value.trim()
                if (!value) return
                setMessages((prev) => [...prev, { role: 'user', content: value }])
                // playful assistant typing animation
                setTimeout(() => {
                  setMessages((prev) => [
                    ...prev,
                    {
                      role: 'assistant',
                      content: 'Working... extracting columns, validating types, and running a quick aggregation.'
                    },
                  ])
                }, 400)
                el.value = ''
              }}
              className="p-4 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  name="prompt"
                  type="text"
                  placeholder="Ask a question about your data..."
                  className="flex-1 rounded-xl bg-[#0e1627] border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
                <motion.button type="submit" whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 px-3 py-2 text-[#0b1220] text-sm font-semibold">
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Results + Code panel */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <BarChart3 className="h-4 w-4" />
                <span>Results</span>
              </div>
              <button className="inline-flex items-center gap-2 text-emerald-300 text-sm">
                <Play className="h-4 w-4" /> Run
              </button>
            </div>

            <div className="p-6 grid lg:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-white/10 bg-[#0d1526]/70 p-4">
                <p className="text-xs uppercase tracking-wide text-white/50">Visuals</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {/* Trend card with data glyphs */}
                  <motion.div whileHover={{ scale: 1.02 }} className="aspect-video rounded-lg ring-1 ring-white/10 p-3 bg-gradient-to-br from-emerald-500/10 to-lime-400/10">
                    <div className="h-full w-full grid grid-cols-12 gap-1">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="col-span-1 flex flex-col justify-end">
                          <div className="w-full rounded-sm bg-emerald-400/70" style={{ height: `${20 + Math.abs(Math.sin(i))*70}%` }} />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="aspect-video rounded-lg ring-1 ring-white/10 p-3 bg-gradient-to-br from-emerald-500/10 to-lime-400/10">
                    <div className="h-full w-full grid grid-cols-6 gap-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-full rounded-md bg-white/10 grid place-items-center">
                          <span className="text-[10px] text-emerald-200">f{i+1}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} className="col-span-2 h-24 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-between px-4">
                    <div className="text-xs text-white/60">
                      <p className="uppercase tracking-wide">Key metrics</p>
                      <p className="text-white/80">ARPU +7.2% · Churn −1.1% · LTV +5.4%</p>
                    </div>
                    <LineChart className="h-6 w-6 text-emerald-300" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-xl border border-white/10 bg-[#0d1526]/70 p-4">
                <p className="text-xs uppercase tracking-wide text-white/50">Generated Code</p>
                <motion.div whileHover={{ y: -2 }} className="mt-3 text-[12px] leading-relaxed font-mono text-white/80 bg-black/30 rounded-lg p-3 ring-1 ring-white/10">
                  <pre className="whitespace-pre-wrap">{`-- SQL generated from natural language\nWITH monthly AS (\n  SELECT DATE_TRUNC('month', date) AS month, SUM(revenue) AS revenue\n  FROM sales\n  GROUP BY 1\n)\nSELECT month, revenue,\n       revenue - LAG(revenue) OVER (ORDER BY month) AS delta\nFROM monthly\nORDER BY month;`}</pre>
                </motion.div>

                <p className="mt-4 text-xs uppercase tracking-wide text-white/50">Python</p>
                <motion.div whileHover={{ y: -2 }} className="mt-2 text-[12px] leading-relaxed font-mono text-white/80 bg-black/30 rounded-lg p-3 ring-1 ring-white/10">
                  <pre className="whitespace-pre-wrap">{`import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('sales.csv')\ndf['month'] = pd.to_datetime(df['date']).dt.to_period('M')\npivot = df.groupby('month')['revenue'].sum().reset_index()\nsns.lineplot(data=pivot, x='month', y='revenue', color="#22c55e")\nplt.title('Monthly Revenue')\nplt.tight_layout()\nplt.show()`}</pre>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <MiniFeature icon={UploadCloud} title="Drag & drop" subtitle="CSV · Excel · Parquet" />
          <MiniFeature icon={MessageSquare} title="Conversational" subtitle="English → SQL/Python" />
          <MiniFeature icon={FileCode} title="Auto code" subtitle="Validated snippets" />
          <MiniFeature icon={BarChart3} title="Charts" subtitle="Interactive visuals" />
        </motion.div>
      </div>
    </section>
  )
}

function MiniFeature({ icon: Icon, title, subtitle }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-emerald-300" />
        <div>
          <p className="text-sm">{title}</p>
          {subtitle && <p className="text-[10px] text-white/50">{subtitle}</p>}
        </div>
      </div>
    </motion.div>
  )
}
