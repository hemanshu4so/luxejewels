'use client'


import HeroSection from '@/components/website/HeroSection'
import ProductCard from '@/components/website/ProductCard'
import { motion } from 'framer-motion'

const featuredProducts = [
  { id: '1', name: 'Royal Bridal Set', category: 'bridal', slug: 'royal-bridal-set' },
  { id: '2', name: 'Gold Bangles', category: 'gold', slug: 'gold-bangles' },
  { id: '3', name: 'Diamond Halo Ring', category: 'diamond', slug: 'diamond-halo' },
  { id: '4', name: 'Kundan Necklace', category: 'kundan', slug: 'kundan-necklace' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
     
      <HeroSection />
      
      {/* Featured Collections */}
      <section className="py-20 bg-cream/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl text-center mb-16 gold-text"
          >
            Featured Collections
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-4xl font-light mb-6 text-charcoal"
          >
            Crafted with Love Since 1987
          </motion.h3>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Generations of artistry in every piece. From our family to yours, 
            each jewel carries stories of love, heritage, and timeless elegance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-md mx-auto text-center">
          <motion.h4 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-display text-3xl mb-6"
          >
            Ready to Find Your Perfect Piece?
          </motion.h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/catalogue" className="bg-gold-500 text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-gold-400 transition-all">
              Explore Collections
            </a>
            <a href="/contact" className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-charcoal transition-all">
              Visit Showroom
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
