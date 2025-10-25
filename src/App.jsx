import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-950 to-black text-white">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />

      <footer className="border-t border-white/10 mt-20">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Greenline Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
