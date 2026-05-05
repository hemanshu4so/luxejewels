'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/website/ProductCard'

const filters = ['All', 'Gold', 'Diamond', 'Silver']

const products = [
  { id: 1, name: 'Regal Gold Ring', category: 'Gold' },
  { id: 2, name: 'Imperial Diamond Necklace', category: 'Diamond' },
  { id: 3, name: 'Celestial Silver Bracelet', category: 'Silver' },
  { id: 4, name: 'Heritage Gold Bangle', category: 'Gold' },
  { id: 5, name: 'Solitaire Grace Pendant', category: 'Diamond' },
  { id: 6, name: 'Moonlight Silver Anklet', category: 'Silver' },
]

export default function CataloguePage() {
  const [active, setActive] = useState('All')
  const visible = useMemo(() => active === 'All' ? products : products.filter(p => p.category === active), [active])

  return (
    <main className="relative overflow-hidden bg-[#FAF7F2] py-20">
      <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#f2ca2a]/20 blur-3xl" />
      <section className="relative mx-auto max-w-7xl px-6">
        <motion.h1 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-playfair text-4xl text-[#1A1A1A] sm:text-5xl">
          Our Signature Catalogue
        </motion.h1>
        <div className="mt-3 h-1 w-32 rounded-full bg-gradient-to-r from-[#e6b800] via-[#f2ca2a] to-[#c49a00]" />

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActive(filter)} className={`rounded-full px-6 py-2 text-sm tracking-wide transition ${active === filter ? 'bg-gradient-to-r from-[#e6b800] via-[#f2ca2a] to-[#c49a00] text-[#1A1A1A] shadow-[0_10px_20px_rgba(230,184,0,0.35)]' : 'bg-white text-[#1A1A1A]/70 shadow-sm hover:text-[#1A1A1A]'}`}>
              {filter}
            </button>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((p) => (
            <motion.div key={p.id} variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
