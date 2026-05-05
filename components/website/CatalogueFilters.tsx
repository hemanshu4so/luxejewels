import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface CatalogueFiltersProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function CatalogueFilters({ activeFilter, onFilterChange }: CatalogueFiltersProps) {
  const filters = ['All', 'Gold', 'Diamond', 'Silver', 'Kundan', 'Bridal', 'Platinum']

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-20 p-2">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            'group relative px-8 py-4 font-display font-medium text-sm rounded-2xl transition-all duration-500 overflow-hidden',
            activeFilter === filter
              ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal shadow-gold-lg ring-4 ring-gold-400/30 backdrop-blur-sm'
              : 'bg-white/70 text-charcoal shadow-card hover:shadow-gold hover:bg-gold-50 hover:-translate-y-1 border border-gray-200/50 hover:border-gold-200'
          )}
          onClick={() => onFilterChange(filter)}
        >
          <span className="relative z-10">{filter}</span>
          {activeFilter === filter && (
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          )}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      ))}
    </div>
  )
}
