'use client'

import { X } from 'lucide-react'

export default function Modal({ open, title, children, onClose }: { open: boolean; title?: string; children: React.ReactNode; onClose: () => void }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-[8px] bg-[#fffaf0] p-6 shadow-luxury">
        <div className="mb-4 flex items-center justify-between gap-4">
          {title && <h2 className="font-display text-2xl">{title}</h2>}
          <button onClick={onClose} className="ml-auto rounded-full p-2 hover:bg-black/5" aria-label="Close modal">
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
