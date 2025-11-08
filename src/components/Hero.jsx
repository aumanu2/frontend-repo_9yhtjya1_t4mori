export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" aria-labelledby="hero-heading">
      {/* Calmer brand background with emerald → lime energy */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0b1220] to-[#0b1220]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(52,211,153,0.18),rgba(11,18,32,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_30%,rgba(163,230,53,0.18),rgba(11,18,32,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_120%,rgba(34,197,94,0.12),rgba(11,18,32,0))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,.9)]" />
            Live, interactive data agent
          </span>
          <h1 id="hero-heading" className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-lime-300">
            A modern Data Analysis AI Agent
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
            Upload a dataset, ask anything in plain language, and watch insights, charts, and production‑ready code unfold in seconds.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 px-6 py-3 text-[#0b1220] font-semibold shadow-[0_20px_60px_-20px_rgba(52,211,153,.7)] hover:shadow-[0_24px_70px_-18px_rgba(163,230,53,.7)] transition-shadow">
              Get started
            </a>
            <a href="#app" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/85 hover:bg-white/10 transition-colors">
              Explore the workspace
            </a>
          </div>

          {/* Glass chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Chip>Glass panels</Chip>
            <Chip>Secure sandboxes</Chip>
            <Chip>Auto Python</Chip>
            <Chip>Interactive charts</Chip>
          </div>
        </div>

        {/* Glassmorphic teaser panel */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,.06)] max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-4">
              <p className="text-white/60">Upload</p>
              <p className="mt-1 text-white/85">CSV, Excel, Parquet</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-4">
              <p className="text-white/60">Chat</p>
              <p className="mt-1 text-white/85">Ask anything about your data</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-4">
              <p className="text-white/60">Generate</p>
              <p className="mt-1 text-white/85">Insights, code, visuals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  )
}
