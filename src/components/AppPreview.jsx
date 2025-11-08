import { Play, UploadCloud, MessageSquare, BarChart3, FileCode } from 'lucide-react'

export default function AppPreview() {
  return (
    <section id="app" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3">data.csv</span>
              </div>
              <button className="inline-flex items-center gap-2 text-cyan-300 text-sm">
                <Play className="h-4 w-4" /> Run
              </button>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 bg-[#0d1b2a]/70 p-4">
                <p className="text-xs uppercase tracking-wide text-white/50">Chat</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div className="rounded-lg bg-white/5 p-3 text-white/80 w-fit">Show me sales by region</div>
                  <div className="rounded-lg bg-cyan-500/10 ring-1 ring-inset ring-cyan-400/20 p-3 text-cyan-50/90 w-[85%]">
                    Generated a grouped bar chart by region with total sales and count of orders.
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0d1b2a]/70 p-4">
                <p className="text-xs uppercase tracking-wide text-white/50">Results</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-400/10 ring-1 ring-white/10" />
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-400/10 ring-1 ring-white/10" />
                  <div className="col-span-2 h-24 rounded-lg bg-white/5 ring-1 ring-white/10" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">A workspace designed for analysis</h3>
            <p className="mt-3 text-white/70">
              Upload, converse, and iterate with an AI that understands your data. Code is generated and executed securely, and results appear as charts, tables, and clear explanations.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Feature icon={UploadCloud} title="Drag & drop uploads" />
              <Feature icon={MessageSquare} title="Natural language chat" />
              <Feature icon={FileCode} title="Generated Python code" />
              <Feature icon={BarChart3} title="Interactive visuals" />
            </div>
            <a href="#get-started" className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 px-5 py-3 text-[#0a1628] font-semibold shadow-[0_20px_60px_-20px_rgba(42,190,201,.8)] hover:shadow-[0_24px_70px_-18px_rgba(42,190,201,1)] transition-shadow">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80">
      <Icon className="h-4 w-4 text-cyan-300" />
      <span className="text-sm">{title}</span>
    </div>
  )
}
