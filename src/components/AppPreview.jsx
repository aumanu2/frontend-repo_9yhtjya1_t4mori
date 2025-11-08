import { Play, UploadCloud, MessageSquare, BarChart3, FileCode, Send } from 'lucide-react'
import { useState, useRef } from 'react'

export default function AppPreview() {
  const [messages, setMessages] = useState([
    { role: 'user', content: 'Load sales.csv and summarize revenue by month.' },
    { role: 'assistant', content: 'Loaded 12,453 rows. Created a monthly revenue pivot and line chart.' },
  ])
  const inputRef = useRef(null)

  return (
    <section id="app" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid xl:grid-cols-3 gap-10 items-stretch">
          {/* Chat panel */}
          <div className="xl:col-span-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden flex flex-col">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MessageSquare className="h-4 w-4" />
                <span>Chat</span>
              </div>
              <button className="inline-flex items-center gap-2 text-indigo-300 text-sm">
                <UploadCloud className="h-4 w-4" /> Upload
              </button>
            </div>

            <div className="flex-1 p-5 space-y-3 overflow-auto max-h-[420px]">
              {messages.map((m, i) => (
                <div key={i} className={m.role === 'user' ? 'flex justify-start' : 'flex justify-start'}>
                  <div className={`rounded-xl px-3 py-2 text-sm max-w-[85%] ${
                    m.role === 'user'
                      ? 'bg-white/5 text-white/80'
                      : 'bg-indigo-500/10 ring-1 ring-indigo-400/20 text-indigo-50/90'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                const el = inputRef.current
                if (!el) return
                const value = el.value.trim()
                if (!value) return
                setMessages((prev) => [...prev, { role: 'user', content: value }])
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
                  className="flex-1 rounded-xl bg-[#0e1627] border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                />
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-400 px-3 py-2 text-[#0b1220] text-sm font-semibold">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Results + Code panel */}
          <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <BarChart3 className="h-4 w-4" />
                <span>Results</span>
              </div>
              <button className="inline-flex items-center gap-2 text-indigo-300 text-sm">
                <Play className="h-4 w-4" /> Run
              </button>
            </div>

            <div className="p-6 grid lg:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 bg-[#0d1526]/70 p-4">
                <p className="text-xs uppercase tracking-wide text-white/50">Visuals</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-500/20 to-sky-400/10 ring-1 ring-white/10" />
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-500/20 to-sky-400/10 ring-1 ring-white/10" />
                  <div className="col-span-2 h-24 rounded-lg bg-white/5 ring-1 ring-white/10" />
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0d1526]/70 p-4">
                <p className="text-xs uppercase tracking-wide text-white/50">Generated Code</p>
                <div className="mt-3 text-[12px] leading-relaxed font-mono text-white/80 bg-black/30 rounded-lg p-3 ring-1 ring-white/10">
                  <pre className="whitespace-pre-wrap">{`import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('sales.csv')\ndf['month'] = pd.to_datetime(df['date']).dt.to_period('M')\npivot = df.groupby('month')['revenue'].sum()\npivot.plot(kind='line')\nplt.title('Monthly Revenue')\nplt.show()`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <MiniFeature icon={UploadCloud} title="Drag & drop" />
          <MiniFeature icon={MessageSquare} title="Conversational" />
          <MiniFeature icon={FileCode} title="Auto Python" />
          <MiniFeature icon={BarChart3} title="Interactive charts" />
        </div>
      </div>
    </section>
  )
}

function MiniFeature({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80">
      <Icon className="h-4 w-4 text-indigo-300" />
      <span className="text-sm">{title}</span>
    </div>
  )
}
