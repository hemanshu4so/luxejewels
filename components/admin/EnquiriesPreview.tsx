'use client'

import type { Enquiry } from '@/types'

const mockEnquiries: Pick<Enquiry, 'id' | 'name' | 'status' | 'createdAt'> & { productName: string, time: string }[] = [
  { id: '1', name: 'Priya Sharma',  productName: 'Bridal Necklace Set',    time: '2h ago',  status: 'new'    as const, createdAt: '' },
  { id: '2', name: 'Anjali Patel',  productName: 'Diamond Solitaire Ring', time: '5h ago',  status: 'read'   as const, createdAt: '' },
  { id: '3', name: 'Meera Joshi',   productName: 'Gold Bangles (Set of 6)', time: '1d ago', status: 'replied' as const, createdAt: '' },
]

export default function EnquiriesPreview() {
  const statusColor = { 
    new: 'bg-green-100 text-green-700', 
    read: 'bg-blue-100 text-blue-700', 
    replied: 'bg-gray-100 text-gray-600' 
  }

  return (
    <div className="space-y-3">
      {mockEnquiries.map(enq => (
        <div key={enq.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold text-sm">
            {enq.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm">{enq.name}</p>
<p className="text-muted text-xs truncate">{enq.productName}</p>
          </div>
          <div className="text-right">
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusColor[enq.status as keyof typeof statusColor]}`}>
              {enq.status}
            </span>
            <p className="text-[10px] text-muted mt-1">{enq.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

