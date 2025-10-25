import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$1,250',
    tagline: 'Perfect for single offers or events',
    features: [
      'Custom premium landing page',
      'Mobile-first responsive',
      'Basic SEO + analytics',
      '1 round of revisions',
    ],
    cta: 'Choose Starter',
    highlight: false,
  },
  {
    name: 'Elite',
    price: '$2,900',
    tagline: 'Best for clubs and coaching brands',
    features: [
      'High-conversion layout system',
      'Copy refinement & brand polish',
      'Advanced SEO + performance',
      'Integrations (CRM, booking)',
      '3 rounds of revisions',
    ],
    cta: 'Choose Elite',
    highlight: true,
  },
  {
    name: 'Pro Suite',
    price: '$4,800',
    tagline: 'Scale campaigns and memberships',
    features: [
      'Variant testing + optimization',
      'Section library & components',
      'Priority support & SLAs',
      'CMS + multi-page flow',
    ],
    cta: 'Choose Pro Suite',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
        <p className="mt-4 text-white/70">Invest once. Launch fast. Own the experience. Payment plans available on request.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            viewport={{ once: true, amount: 0.4 }}
            className={[
              'rounded-2xl border p-6 flex flex-col',
              plan.highlight ? 'border-emerald-400/30 bg-emerald-500/10' : 'border-white/10 bg-white/5'
            ].join(' ')}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              {plan.highlight && (
                <span className="text-xs font-semibold rounded-full bg-emerald-400/20 text-emerald-200 px-2 py-1 border border-emerald-400/30">Most popular</span>
              )}
            </div>
            <div className="mt-3">
              <div className="text-3xl font-semibold">{plan.price}</div>
              <div className="text-white/70 text-sm mt-1">{plan.tagline}</div>
            </div>

            <ul className="mt-6 space-y-3 text-sm flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-300 mt-0.5" />
                  <span className="text-white/90">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={[
                'mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition',
                plan.highlight ? 'bg-emerald-400 text-emerald-950 hover:bg-emerald-300' : 'border border-white/15 bg-white/5 hover:bg-white/10'
              ].join(' ')}
            >
              {plan.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>

      <div id="contact" className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold">Ready to launch?</h4>
            <p className="text-white/70 mt-2 max-w-2xl">Share your goals and brand assets. We’ll map a conversion-focused page, timeline, and deliverables within 24 hours.</p>
          </div>
          <form className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input type="text" placeholder="Your name" className="rounded-xl bg-black/30 border border-white/15 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
            <input type="email" placeholder="Email" className="rounded-xl bg-black/30 border border-white/15 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold px-6 py-3 transition">
              Request proposal
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
