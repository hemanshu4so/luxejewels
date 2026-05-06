import { Loader2 } from 'lucide-react'

export default function Loader({ label = 'Loading' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-10 text-sm text-muted">
      <Loader2 className="animate-spin text-gold-600" size={18} />
      {label}
    </div>
  )
}
