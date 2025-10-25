import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Target, Flag, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Trophy,
    title: 'Premium aesthetics',
    desc: 'Rich typography, cinematic imagery, and refined spacing built to reflect the exclusivity of your brand.'
  },
  {
    icon: Target,
    title: 'Conversion focused',
    desc: 'Clear CTAs, persuasive copy blocks, and lead-gen components engineered to drive bookings and inquiries.'
  },
  {
    icon: Flag,
    title: 'Course-ready performance',
    desc: 'Blazing-fast loads, strong SEO foundations, analytics hooks, and best-in-class accessibility.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Crafted for the modern golf experience</h2>
        <p className="mt-4 text-white/70">From championship courses to private coaching, we tailor landing pages that feel premium and perform flawlessly.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="h-12 w-12 rounded-xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center">
              <f.icon className="h-6 w-6 text-emerald-300" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-white/70">{f.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {["Responsive across devices","Easy content editing","Integrated analytics"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-300" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
