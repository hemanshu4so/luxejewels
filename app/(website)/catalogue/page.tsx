'use client'

import { useState, useMemo, Suspense }   from 'react'
import { motion, AnimatePresence }        from 'framer-motion'
import { SlidersHorizontal, LayoutGrid, List, X } from 'lucide-react'
import ProductCard        from '@/components/website/ProductCard'
import CatalogueFilters   from '@/components/website/CatalogueFilters'
import { useProducts }    from '@/hooks/useProducts'
import type { FilterState } from '@/types'

const defaultFilters: FilterState = {
  category:  'all',
  occasion:  'all',
  minPrice:  0,
  maxPrice:  500000,
  minWeight: 0,
  maxWeight: 100,
  search:    '',
  sortBy:    'newest',
}

export default function CataloguePage() {
  const [filters,      setFilters]      = useState<FilterState>(defaultFilters)
  const [filterOpen,   setFilterOpen]   = useState(false)
  const [viewMode,     setViewMode]     = useState<'grid' | 'list'>('grid')
  const { products, loading }           = useProducts()

  const filtered = useMemo(() => {
    let result = [...products]

    if (filters.category !== 'all')
      result = result.filter(p => p.category === filters.category)

    if (filters.occasion !== 'all')
      result = result.filter(p => p.occasion.includes(filters.occasion as any))

    if (filters.search)
      result = result.filter(p =>
        p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(filters.search.toLowerCase()))
      )

    if (filters.minWeight || filters.maxWeight < 100)
      result = result.filter(p =>
        p.weight >= filters.minWeight && p.weight <= filters.maxWeight
      )

    switch (filters.sortBy) {
      case 'price-asc':  result.sort((a,b) => (a.price||0) - (b.price||0)); break
      case 'price-desc': result.sort((a,b) => (b.price||0) - (a.price||0)); break
      case 'weight-asc': result.sort((a,b) => a.weight - b.weight); break
      default: result.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    return result
  }, [products, filters])

  const activeFilterCount = [
    filters.category !== 'all',
    filters.occasion !== 'all',
    filters.search !== '',
    filters.minWeight > 0 || filters.maxWeight < 100,
  ].filter(Boolean).length

  return (
    <div className="min-h-screen bg-cream dark:bg-charcoal">

      {/* ── Page Header ── */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-charcoal/90 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,184,0,0.1),transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <p className="text-gold-400 text-xs tracking-[0.4em] uppercase mb-4">
            Curated for You
          </p>
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Our Collections
          </h1>
          <p className="text-white/50 max-w-md mx-auto">
            {filtered.length} exquisite pieces crafted for every moment
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Category Pills ── */}
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-none mb-8">
          {['all','gold','silver','diamond','bridal','kundan','polki'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilters(f => ({ ...f, category: cat as any }))}
              className={`
                shrink-0 px-5 py-2 rounded-full text-sm font-medium tracking-wide
                transition-all duration-300 border capitalize
                ${filters.category === cat
                  ? 'bg-gold-500 text-white border-gold-500 shadow-gold'
                  : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-gold-400'
                }
              `}
            >
              {cat === 'all' ? 'All Jewellery' : cat}
            </button>
          ))}
        </div>

        {/* ── Toolbar ── */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-gold-400 transition-colors text-sm font-medium"
            >
              <SlidersHorizontal size={15} />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-gold-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <select
              value={filters.sortBy}
              onChange={e => setFilters(f => ({ ...f, sortBy: e.target.value as any }))}
              className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm outline-none focus:border-gold-400"
            >
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="weight-asc">Weight: Light First</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-lg transition-colors ${viewMode==='grid' ? 'bg-gold-50 text-gold-600' : 'hover:bg-gray-100 dark:hover:bg-white/5'}`}
            >
              <LayoutGrid size={17} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-lg transition-colors ${viewMode==='list' ? 'bg-gold-50 text-gold-600' : 'hover:bg-gray-100 dark:hover:bg-white/5'}`}
            >
              <List size={17} />
            </button>
          </div>
        </div>

        {/* ── Products Grid ── */}
        {loading ? (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rounded-3xl bg-gray-100 dark:bg-white/5 animate-pulse aspect-[3/4]" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">💎</p>
            <h3 className="font-display text-2xl mb-2">No pieces found</h3>
            <p className="text-muted">Try adjusting your filters</p>
            <button onClick={() => setFilters(defaultFilters)} className="mt-4 text-gold-600 hover:underline text-sm">
              Clear all filters
            </button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filters.category}-${filters.sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`
                grid gap-6
                ${viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1 sm:grid-cols-2'
                }
              `}
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* ── Filter Drawer ── */}
      <CatalogueFilters
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        onChange={setFilters}
        onReset={() => setFilters(defaultFilters)}
      />
    </div>
  )
}