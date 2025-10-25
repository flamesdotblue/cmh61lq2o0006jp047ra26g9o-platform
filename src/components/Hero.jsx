import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />
        <svg className="absolute inset-0 opacity-[0.08]" width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
            <Star className="h-4 w-4 text-yellow-400" />
            Premium Golf Landing Pages
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl leading-[1.05] font-['Mona_Sans',Inter,system-ui]">
            Elevate your golf brand with a landing page that converts
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Crafted for clubs, courses, coaches, and premium events. Lightning-fast, SEO‑optimized, and visually stunning—so your audience books faster and scrolls longer.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold px-6 py-3 transition">
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium transition">
              Explore features
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            {[
              { label: 'Avg. conversion lift', value: '+38%' },
              { label: 'PageSpeed score', value: '98/100' },
              { label: 'Launch time', value: '< 7 days' },
              { label: 'Client satisfaction', value: '4.9/5' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-emerald-300 font-semibold">{s.value}</div>
                <div className="text-white/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
