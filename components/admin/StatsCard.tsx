'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { formatINR } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: number
  icon: LucideIcon
  trend: string
  color: string
  index: number
  loading: boolean
}

export default function StatsCard({ title, value, icon: Icon, trend, color, index, loading }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className={`
        relative overflow-hidden rounded-2xl p-6 h-full aspect-[4/3] bg-gradient-to-br
        from-${color}-50 to-${color}-100 dark:from-${color}-900/20 dark:to-${color}-800/10
        border border-${color}-200/50 hover:border-${color}-300/80
        hover:shadow-2xl hover:scale-[1.02] transition-all duration-500
        shadow-lg backdrop-blur-sm
      `}>
        
        {/* Icon */}
        <div className={`
          absolute -top-8 -right-8 w-24 h-24 rounded-2xl flex items-center justify-center
          bg-${color}-500 shadow-2xl border-4 border-white/20
        `}>
          <Icon className={`w-12 h-12 text-white drop-shadow-lg`} />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">
            {title}
          </p>
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-3xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-100 bg-clip-text text-transparent mb-2"
            key={value}
          >
            {loading ? '...' : (
              value >= 1000
                ? formatINR(value / 1000 * 1000) // Thousands
                : value.toLocaleString()
            )}
          </motion.div>
          
          <p className="text-xs font-medium bg-white/80 dark:bg-charcoal/80 px-2.5 py-1 rounded-full text-${color}-600 shadow-sm">
            {trend}
          </p>
        </div>

        {/* Sparkline placeholder */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </motion.div>
  )
}

