'use client'

import { Suspense } from 'react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/website/ProductCard'
import { categories, mockProducts } from '@/lib/luxury-data'
import type { Category } from '@/types'

type CategoryFilter = Category | 'all'

function CatalogueContent() {
  const searchParams = useSearchParams()
  const initialCategory = (searchParams.get('category') || 'all') as CategoryFilter
  const [category, setCategory] = useState<CategoryFilter>(initialCategory)
  const [query, setQuery] = useState(searchParams.get('search') || '')
  const [sort, setSort] = useState('featured')

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    const filtered = mockProducts.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category
      const matchesQuery = !normalized || [product.name, product.category, product.material, product.description, ...product.tags].join(' ').toLowerCase().includes(normalized)
      return matchesCategory && matchesQuery
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-asc') return (a.price || 0) - (b.price || 0)
      if (sort === 'price-desc') return (b.price || 0) - (a.price || 0)
      if (sort === 'weight-desc') return b.weight - a.weight
      return Number(b.featured) - Number(a.featured)
    })
  }, [category, query, sort])

  return (
    <div className="bg-[#fbf6ec] text-charcoal">
      <section className="relative overflow-hidden bg-[#15120f] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(216,183,106,0.18),transparent_34%)]" />
        <div className="section-shell relative">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="eyebrow text-[#e7cf8e]">Catalogue</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">
            A private salon edit of SKKL signatures.
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">Filter ceremonial bridal pieces, daily gold, diamonds, kundan, polki, platinum, and silver with an experience designed for quiet discovery.</p>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="rounded-[8px] border border-gold-700/18 bg-white/70 p-4 shadow-[0_20px_60px_rgba(26,26,26,0.06)] backdrop-blur">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            <label className="flex min-h-12 items-center gap-3 rounded-full border border-charcoal/10 bg-[#fffaf0] px-4">
              <Search size={18} className="text-gold-700" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by jewel, material, stone, occasion..." className="w-full bg-transparent text-sm outline-none placeholder:text-charcoal/38" />
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              {categories.map((item) => (
                <button key={item.value} onClick={() => setCategory(item.value as CategoryFilter)} className={`h-11 shrink-0 rounded-full px-5 text-xs font-semibold uppercase tracking-[0.18em] transition ${category === item.value ? 'bg-charcoal text-cream' : 'border border-charcoal/10 bg-white/70 text-charcoal/62 hover:text-charcoal'}`}>
                  {item.label}
                </button>
              ))}
            </div>
            <label className="flex h-12 items-center gap-2 rounded-full border border-charcoal/10 bg-[#fffaf0] px-4 text-sm text-charcoal/64">
              <SlidersHorizontal size={17} />
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="bg-transparent outline-none">
                <option value="featured">Featured</option>
                <option value="price-asc">Price low to high</option>
                <option value="price-desc">Price high to low</option>
                <option value="weight-desc">Weight high to low</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.22em] text-charcoal/45">{visible.length} pieces available</p>
          <p className="hidden text-sm text-charcoal/50 sm:block">Every enquiry opens a private WhatsApp consultation.</p>
        </div>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {visible.length === 0 && (
          <div className="my-20 rounded-[8px] border border-gold-700/18 bg-white/70 p-12 text-center">
            <p className="font-display text-3xl">No jewels matched that search.</p>
            <p className="mt-3 text-charcoal/58">Try a broader material, collection, or occasion.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default function CataloguePage() {
  return (
    <Suspense fallback={<div className="section-shell py-24 text-center text-muted">Preparing the SKKL catalogue...</div>}>
      <CatalogueContent />
    </Suspense>
  )
}
