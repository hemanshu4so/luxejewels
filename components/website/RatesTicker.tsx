'use client'

import type { MetalRates } from '@/types'

interface Props {
  rates: MetalRates | null
}

export default function RatesTicker({ rates }: Props) {
  if (!rates) {
    return <div className="py-0.5 text-center text-xs text-gold-400/60">Loading live SKKL rates...</div>
  }

  const items = [
    { label: 'Gold 24K', value: `₹${rates.gold24k.toLocaleString('en-IN')}/g` },
    { label: 'Gold 22K', value: `₹${rates.gold22k.toLocaleString('en-IN')}/g` },
    { label: 'Silver 999', value: `₹${rates.silver.toLocaleString('en-IN')}/g` },
    { label: 'SKKL live desk', value: new Date(rates.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) },
  ]

  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <div className="flex animate-ticker items-center gap-16">
        {[...items, ...items].map((item, index) => (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2 text-xs">
            <span className="text-[10px] uppercase tracking-widest text-gold-400/70">{item.label}</span>
            <span className="font-semibold tracking-wider text-gold-300">{item.value}</span>
            <span className="mx-4 text-gold-600/40">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
