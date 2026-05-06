'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { whatsappNumber } from '@/lib/luxury-data'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  const quickMessages = [
    'I want to see the SKKL bridal collection',
    "Please share today's gold and silver rates",
    'I would like to request a bespoke jewellery consultation',
    'Can I book a private showroom visit?',
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, scale: 0.88, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.88, y: 20 }} className="w-72 rounded-2xl border border-[#d8b76a]/25 bg-[#fffaf0] p-5 shadow-luxury">
            <div className="mb-4 flex items-center gap-3 border-b border-charcoal/10 pb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold">SKKL Concierge</p>
                <p className="flex items-center gap-1 text-xs text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Typically replies instantly
                </p>
              </div>
            </div>

            <p className="mb-3 text-sm text-muted">How may our jewellery concierge help?</p>

            <div className="space-y-2">
              {quickMessages.map((message) => (
                <a key={message} href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-transparent bg-white/70 p-3 text-xs transition-colors hover:border-green-200 hover:bg-green-50 hover:text-green-700">
                  {message}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button onClick={() => setOpen((value) => !value)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white shadow-xl shadow-green-900/20" aria-label="Chat on WhatsApp">
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping" />}
      </motion.button>
    </div>
  )
}
