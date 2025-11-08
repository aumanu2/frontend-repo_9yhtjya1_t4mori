import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AppPreview from './components/AppPreview'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white selection:bg-emerald-400/30 selection:text-white">
      {/* Ambient, minimal glows aligned to green data theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <AppPreview />
      <CTA />

      <footer className="py-10 border-t border-white/10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Astra Data AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
