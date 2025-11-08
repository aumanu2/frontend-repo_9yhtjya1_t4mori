import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Subtle gradient background without negative z-index */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(99,102,241,0.18),rgba(11,18,32,0))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1526]/40 via-[#0b1220]/80 to-[#0b1220]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-32 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-indigo-200 via-white to-sky-200">
              Meet your Data Analysis AI Agent
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">
              Upload your datasets, chat in natural language, and watch insights, code, and interactive visuals appear instantly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-sky-400 px-6 py-3 text-[#0b1220] font-semibold shadow-[0_20px_60px_-20px_rgba(99,102,241,.7)] hover:shadow-[0_24px_70px_-18px_rgba(56,189,248,.8)] transition-shadow">
                Upload a File
              </a>
              <a href="#app" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-white/80 hover:bg-white/5 transition-colors">
                See the Workspace
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 justify-center lg:justify-start">
              <div className="h-2 w-2 rounded-full bg-sky-300 animate-pulse shadow-[0_0_20px_rgba(125,211,252,0.8)]" />
              <p className="text-sm text-white/60">Runs analysis in secure isolated sandboxes</p>
            </div>
          </div>

          {/* Spline cover */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-[#0d1526]/60 backdrop-blur">
            <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}
