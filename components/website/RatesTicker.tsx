'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'
import type { MetalRates }          from '@/types'

interface Props { rates: MetalRates | null }

export default function RatesTicker({ rates }: Props) {
  if (!rates) return (
    <div className="text-center text-xs text-gold-400/60 py-0.5">
      Loading live rates...
    </div>
  )

  const items = [
    { label: 'Gold 24K', value: `₹${rates.gold24k.toLocaleString('en-IN')}/g` },
    { label: 'Gold 22K', value: `₹${rates.gold22k.toLocaleString('en-IN')}/g` },
    { label: 'Silver',   value: `₹${rates.silver.toLocaleString('en-IN')}/g`  },
    { label: '✦ Today\'s Rates Updated:', value: new Date(rates.updatedAt).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }) },
  ]

  const tickerContent = [...items, ...items] // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <div className="flex animate-ticker gap-16 items-center">
        {tickerContent.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-xs">
            <span className="text-gold-400/70 tracking-widest uppercase text-[10px]">
              {item.label}
            </span>
            <span className="text-gold-300 font-semibold tracking-wider">
              {item.value}
            </span>
            <span className="text-gold-600/40 mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}