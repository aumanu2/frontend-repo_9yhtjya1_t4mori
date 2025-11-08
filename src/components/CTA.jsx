export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f2438] to-[#0a1628] p-8 sm:p-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Analyze your data in minutes</h3>
            <p className="mt-3 text-white/70 max-w-2xl">
              Upload a CSV or Excel file and start chatting with your dataset. Your first insights, charts, and code are just a few clicks away.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <label className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/80 hover:bg-white/10 transition-colors">
                <input type="file" className="hidden" accept=".csv,.xlsx,.xls" />
                <span>Choose a file</span>
              </label>
              <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-3 text-[#0a1628] font-semibold shadow-[0_20px_60px_-20px_rgba(42,190,201,.8)] hover:shadow-[0_24px_70px_-18px_rgba(42,190,201,1)] transition-shadow">
                Start analyzing
              </button>
            </div>
            <p className="mt-3 text-xs text-white/50">Max size 100MB. Securely processed in isolated sandboxes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
