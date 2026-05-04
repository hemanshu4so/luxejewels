'use client'

import { mockRates } from '@/lib/firebase'
import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'


export default function RatesPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-cream to-gold-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl text-center mb-4 gold-text"
        >
          Today's Metal Rates
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-muted text-xl mb-16"
        >
          Updated {new Date(mockRates.updatedAt).toLocaleDateString()}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: 'Gold 24K', value: mockRates.gold24k, color: 'gold-500' },
            { label: 'Gold 22K', value: mockRates.gold22k, color: 'gold-400' },
            { label: 'Silver 999', value: mockRates.silver, color: 'gray-400' }
          ].map((rate, i) => (
            <motion.div
              key={rate.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl text-center shadow-luxury"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingUp size={24} className={`text-${rate.color}`} />
                <span className="font-display text-3xl font-bold">₹{rate.value}</span>
              </div>
              <div className="text-sm uppercase tracking-wider text-muted">
                per gram
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
