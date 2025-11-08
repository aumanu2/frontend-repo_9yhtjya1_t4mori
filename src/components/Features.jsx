import { BarChart3, Code2, MessageSquare, Upload } from 'lucide-react'

const features = [
  {
    icon: Upload,
    title: 'Easy Uploads',
    desc: 'Drag-and-drop CSV or Excel files up to 100MB — we handle the rest.',
  },
  {
    icon: MessageSquare,
    title: 'Chat with your data',
    desc: 'Ask natural language questions and get conversational answers.',
  },
  {
    icon: Code2,
    title: 'Auto code generation',
    desc: 'We generate and execute safe Python code in an isolated sandbox.',
  },
  {
    icon: BarChart3,
    title: 'Visual insights',
    desc: 'See interactive charts and tables powered by matplotlib & plotly.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-[1]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for effortless analysis</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Everything you need to go from raw data to insights in minutes.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[inset_0_1px_0_0_rgba(255,255,255,.06)] hover:shadow-[0_20px_80px_-30px_rgba(42,190,201,.6)] transition-all">
              <div className="p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-400/20 text-cyan-300 ring-1 ring-inset ring-white/10 shadow-inner">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
