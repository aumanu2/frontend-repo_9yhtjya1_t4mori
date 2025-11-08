import { ShieldCheck, Zap, Cpu } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    desc: 'Isolated sandboxes and encrypted processing for peace of mind.',
  },
  {
    icon: Zap,
    title: 'Lightning fast',
    desc: 'Optimized execution paths deliver insights in seconds, not minutes.',
  },
  {
    icon: Cpu,
    title: 'Smart automation',
    desc: 'Automatic code generation and chart selection tailored to your data.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,.06)] hover:shadow-[0_18px_60px_-24px_rgba(99,102,241,.55)] transition-all">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-sky-400/20 text-indigo-300 ring-1 ring-inset ring-white/10 shadow-inner">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
