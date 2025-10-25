import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Our membership waitlist doubled in six weeks. The page feels luxurious and it loads instantly.',
    name: 'Charlotte M.',
    role: 'Director, Pinecrest Club'
  },
  {
    quote: 'Bookings went up 42% after launch. Clean copy, clear CTAs, and it looks phenomenal on mobile.',
    name: 'Liam R.',
    role: 'Head Coach, Fairway Academy'
  },
  {
    quote: 'By far the smoothest web project we’ve run. Elite performance scores and brand-perfect visuals.',
    name: 'Sanjay P.',
    role: 'CMO, Links & Co.'
  },
]

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Trusted by leading golf brands</h2>
        <p className="mt-4 text-white/70">Premium results come from premium execution. Here’s what partners say.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex gap-1 text-yellow-300">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
            <blockquote className="mt-4 text-white/90">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-white/70">
              <span className="font-medium text-white">{t.name}</span> — {t.role}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
