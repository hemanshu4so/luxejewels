'use client'

import { motion } from 'framer-motion'
import { Activity, ArrowUpRight, Clock, Gem, Info, TrendingUp } from 'lucide-react'
import { mockRates } from '@/lib/luxury-data'

const rateCards = [
  { label: 'Gold 24K', value: mockRates.gold24k, unit: 'per gram', note: 'Pure gold benchmark', accent: 'from-[#a9782b] to-[#f2d98d]' },
  { label: 'Gold 22K', value: mockRates.gold22k, unit: 'per gram', note: 'Jewellery gold guide', accent: 'from-[#b88935] to-[#ffe4a5]' },
  { label: 'Silver 999', value: mockRates.silver, unit: 'per gram', note: 'Fine silver rate', accent: 'from-[#8d969b] to-[#f1f4f3]' },
]

export default function RatesPage() {
  const updated = new Date(mockRates.updatedAt).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })

  return (
    <div className="bg-[#fbf6ec] text-charcoal">
      <section className="relative overflow-hidden bg-[#15120f] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(216,183,106,0.18),transparent_30%)]" />
        <div className="section-shell relative">
          <p className="eyebrow text-[#e7cf8e]">Live precious metal desk</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">Today&apos;s gold and silver rates.</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/62">
            <span className="inline-flex items-center gap-2"><Clock size={16} />Updated {updated}</span>
            <span className="inline-flex items-center gap-2"><Activity size={16} />Indicative showroom rate</span>
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {rateCards.map((rate, index) => (
            <motion.div key={rate.label} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="relative overflow-hidden rounded-[8px] border border-gold-700/16 bg-white/72 p-7 shadow-[0_24px_70px_rgba(26,26,26,0.08)]">
              <div className={`absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br ${rate.accent} opacity-24`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <Gem className="text-gold-800" size={28} />
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700"><TrendingUp size={13} />Live</span>
                </div>
                <p className="mt-8 text-xs uppercase tracking-[0.28em] text-charcoal/44">{rate.label}</p>
                <p className="mt-3 font-display text-5xl">₹{rate.value.toLocaleString('en-IN')}</p>
                <p className="mt-2 text-sm text-charcoal/54">{rate.unit} · {rate.note}</p>
                <div className="mt-7 flex items-center gap-2 border-t border-charcoal/10 pt-5 text-sm text-charcoal/58">
                  <ArrowUpRight size={16} className="text-green-700" />
                  Trend shown for showroom guidance
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-[8px] border border-gold-700/16 bg-[#15120f] p-7 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <Info className="shrink-0 text-[#e7cf8e]" size={24} />
            <div>
              <h2 className="font-display text-3xl">Rate note</h2>
              <p className="mt-3 max-w-3xl leading-7 text-white/62">
                Final jewellery estimates vary by purity, wastage, craftsmanship, stone quality, taxes, and design complexity. SKKL confirms exact pricing during enquiry or showroom consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
