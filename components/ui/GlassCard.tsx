import { cn } from '@/lib/utils'

export default function GlassCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('rounded-[8px] border border-white/30 bg-white/60 p-6 shadow-sm backdrop-blur', className)}>{children}</div>
}
