'use client'

import { useState }          from 'react'
import { motion }            from 'framer-motion'
import { Save, Loader2, TrendingUp } from 'lucide-react'
import { db }                from '@/lib/firebase'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

interface Props { compact?: boolean }

export default function RatesForm({ compact = false }: Props) {
  const [rates, setRates] = useState({ gold24k: '', gold22k: '', silver: '' })
  const [saving, setSaving] = useState(false)
  const [saved,  setSaved]  = useState(false)

  const handleSave = async () => {
    if (!rates.gold24k || !rates.gold22k || !rates.silver) return
    setSaving(true)
    try {
      await setDoc(doc(db, 'settings', 'metalRates'), {
        gold24k:   Number(rates.gold24k),
        gold22k:   Number(rates.gold22k),
        silver:    Number(rates.silver),
        updatedAt: serverTimestamp(),
        updatedBy: 'admin',
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } finally {
      setSaving(false)
    }
  }

  const rateFields = [
    { key: 'gold24k', label: 'Gold 24K', placeholder: '7200', unit: '₹/g', color: 'text-yellow-500' },
    { key: 'gold22k', label: 'Gold 22K', placeholder: '6600', unit: '₹/g', color: 'text-yellow-400' },
    { key: 'silver',  label: 'Silver',   placeholder: '85',   unit: '₹/g', color: 'text-gray-400'   },
  ]

  return (
    <div className={compact ? 'space-y-3' : 'space-y-5'}>
      {!compact && (
        <p className="text-sm text-muted">
          Rates update live across the website header ticker and rates page.
        </p>
      )}

      {rateFields.map(field => (
        <div key={field.key}>
          {!compact && (
            <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">
              {field.label}
            </label>
          )}
          <div className="relative">
            <span className={`absolute left-3 top-1/2 -translate-y-1/2 font-semibold text-sm ${field.color}`}>
              ₹
            </span>
            <input
              type="number"
              value={rates[field.key as keyof typeof rates]}
              onChange={e => setRates(r => ({ ...r, [field.key]: e.target.value }))}
              placeholder={compact ? `${field.label}: ${field.placeholder}` : field.placeholder}
              className="w-full pl-7 pr-12 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:border-gold-400 outline-none text-sm"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted">
              {field.unit}
            </span>
          </div>
        </div>
      ))}

      <motion.button
        type="button"
        onClick={handleSave}
        disabled={saving || !rates.gold24k}
        whileTap={{ scale: 0.97 }}
        className={`
          w-full flex items-center justify-center gap-2
          py-2.5 rounded-xl font-medium text-sm
          transition-all duration-200
          ${saved
            ? 'bg-green-500 text-white'
            : 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:opacity-90'
          }
          disabled:opacity-50
        `}
      >
        {saving ? <Loader2 size={14} className="animate-spin" /> :
         saved   ? '✓ Rates Updated!' :
         <><Save size={14} /> Update Live Rates</>
        }
      </motion.button>
    </div>
  )
}