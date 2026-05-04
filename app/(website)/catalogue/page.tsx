'use client'

import { mockProducts } from '@/lib/firebase'
import ProductCard from '@/components/website/ProductCard'
import { motion } from 'framer-motion'

export default function CataloguePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl text-center mb-16 gold-text"
        >
          Our Collections
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {(mockProducts as any[]).slice(0, 8).map((product: any, i: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ProductCard product={product} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
