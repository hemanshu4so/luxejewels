'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState }                from 'react'
import { MessageCircle, X }        from 'lucide-react'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'

  const quickMessages = [
    'I want to see your bridal collection',
    'What are today\'s gold rates?',
    'I\'d like to request a custom piece',
    'Can I visit your showroom?',
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1,   y: 0  }}
            exit={{ opacity: 0,  scale: 0.8,   y: 20 }}
            className="bg-white dark:bg-charcoal rounded-2xl shadow-luxury p-5 w-72 border border-gray-100 dark:border-white/10"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-white/10">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">LuxeJewels Support</p>
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Typically replies instantly
                </p>
              </div>
            </div>

            <p className="text-sm text-muted mb-3">Hi! How can we help you? 💎</p>

            <div className="space-y-2">
              {quickMessages.map(msg => (
                <a
                  key={msg}
                  href={`https://wa.me/${number}?text=${encodeURIComponent(msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block text-xs p-3 rounded-xl bg-gray-50 dark:bg-white/5
                    hover:bg-green-50 dark:hover:bg-green-900/20
                    hover:text-green-700 transition-colors cursor-pointer
                    border border-transparent hover:border-green-200
                  "
                >
                  {msg}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          w-14 h-14 rounded-full
          bg-gradient-to-br from-green-400 to-green-600
          shadow-xl shadow-green-200/50
          flex items-center justify-center text-white
          relative
        "
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x"     initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={22} /></motion.div>
            : <motion.div key="chat"  initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.843L0 24l6.335-1.508A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.908 0-3.7-.498-5.25-1.371l-.375-.222-3.89.927.963-3.782-.245-.389A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </motion.div>
          }
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  )
}