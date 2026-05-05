'use client'

import { useState } from "react"
import { mockProducts } from "@/lib/firebase"
import ProductCard from "@/components/website/ProductCard"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function CataloguePage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Gold", "Diamond", "Silver", "Kundan", "Bridal", "Platinum"]

  const filteredProducts = mockProducts.filter(product => 
    activeFilter === "All" || product.category === activeFilter
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white/50 gold-blur">
      <section className="section-container">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title gold-text"
        >
          Our Collections
        </motion.h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-20">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              initial={{ scale: 0.95, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative px-8 py-4 font-display font-semibold text-sm rounded-2xl transition-all duration-500 shadow-card overflow-hidden",
                activeFilter === filter
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal shadow-gold-lg ring-4 ring-gold-500/30"
                  : "bg-white/60 backdrop-blur-sm text-charcoal hover:bg-gold-50/80 hover:shadow-gold-lg border border-gray-200/50 hover:border-gold-200"
              )}
              onClick={() => setActiveFilter(filter)}
            >
              <span className="relative z-10">{filter}</span>
              {activeFilter === filter && (
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400/50 to-gold-500/50 blur-sm animate-pulse" />
              )}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full shadow-gold" />
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {filteredProducts.slice(0, 16).map((product: any, i: number) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <ProductCard product={product} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More CTA */}
        <div className="text-center mt-32">
          <motion.button 
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="luxury-button text-lg shadow-gold-lg"
          >
            Discover More Collections →
          </motion.button>
        </div>
      </section>
    </div>
  )
}
