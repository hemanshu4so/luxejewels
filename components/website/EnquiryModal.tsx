'use client'

import Modal from '@/components/ui/Modal'
import { getWhatsappUrl } from '@/lib/luxury-data'

export default function EnquiryModal({ open, onClose, productName = 'a SKKL jewel' }: { open: boolean; onClose: () => void; productName?: string }) {
  return (
    <Modal open={open} onClose={onClose} title="Private enquiry">
      <p className="text-sm leading-6 text-charcoal/62">Our concierge can share availability, appointment slots, and customization guidance.</p>
      <a href={getWhatsappUrl(`Hi SKKL Jewellers, I would like to enquire about ${productName}.`)} target="_blank" rel="noopener noreferrer" className="gold-button mt-6 w-full">
        Continue on WhatsApp
      </a>
    </Modal>
  )
}
