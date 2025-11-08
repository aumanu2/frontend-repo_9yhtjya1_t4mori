import { Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full bg-[#0b1220]/60 backdrop-blur supports-[backdrop-filter]:bg-[#0b1220]/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-400 via-sky-400 to-indigo-600 p-[1px] shadow-[0_0_25px_rgba(99,102,241,.35)]">
            <div className="h-full w-full rounded-[11px] bg-[#0b1220] flex items-center justify-center">
              <Rocket className="h-5 w-5 text-indigo-300" />
            </div>
          </div>
          <div className="">
            <p className="text-indigo-200/90 text-sm font-medium tracking-wide">Astra Data AI</p>
            <p className="text-white/80 text-xs">Conversational Data Analysis</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#app" className="text-white/70 hover:text-white transition-colors">Workspace</a>
          <a href="#get-started" className="text-white/70 hover:text-white transition-colors">Get Started</a>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-400 px-4 py-2 text-sm font-semibold text-[#0b1220] shadow-[0_10px_30px_-10px_rgba(99,102,241,.7)] hover:shadow-[0_12px_35px_-8px_rgba(56,189,248,.8)] transition-shadow">
          Launch App
        </button>
      </div>
    </header>
  )
}
