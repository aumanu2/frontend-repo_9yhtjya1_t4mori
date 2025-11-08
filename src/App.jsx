import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AppPreview from './components/AppPreview.jsx';
import CTA from './components/CTA.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white selection:bg-emerald-400/30 selection:text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[40vh] w-[40vh] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[45vh] w-[45vh] rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <AppPreview />
      <CTA />

      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60">
          © {new Date().getFullYear()} Data Analysis AI Agent — Built with a green–yellow energy.
        </div>
      </footer>
    </div>
  );
}
