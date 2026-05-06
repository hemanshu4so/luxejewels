'use client'

import { categories } from '@/lib/luxury-data'

export default function CatalogueFilters({ active = 'all', onChange }: { active?: string; onChange?: (value: string) => void }) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      {categories.map((category) => (
        <button key={category.value} onClick={() => onChange?.(category.value)} className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] ${active === category.value ? 'bg-charcoal text-cream' : 'border border-charcoal/10 bg-white text-charcoal/64'}`}>
          {category.label}
        </button>
      ))}
    </div>
  )
}
