'use client'


import HeroSection from '@/components/website/HeroSection'
import ProductCard from '@/components/website/ProductCard'
import { motion } from 'framer-motion'

const featuredProducts = [
  { id: '1', name: 'Royal Bridal Set', category: 'bridal', slug: 'royal-bridal-set', price: 525000 },
  { id: '2', name: 'Gold Bangles', category: 'gold', slug: 'gold-bangles', price: 125000 },
  { id: '3', name: 'Diamond Halo Ring', category: 'diamond', slug: 'diamond-halo', price: 325000 },
  { id: '4', name: 'Kundan Necklace', category: 'kundan', slug: 'kundan-necklace', price: 450000 },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      {/* Featured Collections */}
      <section className="section-container bg-gradient-to-b from-cream/50 to-white gold-blur">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title gold-text"
        >
          Featured Collections
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProductCard product={product} index={i} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-light mb-8 text-charcoal"
          >
            Crafted with Love Since 1987
          </motion.h3>
          <p className="text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-12">
            Generations of artistry in every piece. From our family to yours, each jewel carries stories of love, heritage, and timeless elegance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="luxury-card text-left"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mb-6 shadow-gold">
                <span className="text-2xl font-bold text-white drop-shadow-glow">35+</span>
              </div>
              <h4 className="font-display text-2xl font-semibold mb-3 gold-text">Years of Excellence</h4>
              <p className="text-muted">Three generations crafting heirloom quality jewellery</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="luxury-card text-left"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-gold">
                <span className="text-2xl font-bold text-white drop-shadow-glow">BIS</span>
              </div>
              <h4 className="font-display text-2xl font-semibold mb-3 gold-text">Hallmarked Gold</h4>
              <p className="text-muted">Certified purity you can trust</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="luxury-card text-left"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-gold">
                <span className="text-2xl font-bold text-white drop-shadow-glow">IGI</span>
              </div>
              <h4 className="font-display text-2xl font-semibold mb-3 gold-text">Certified Diamonds</h4>
              <p className="text-muted">International quality assurance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-b from-charcoal/95 to-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h4 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-display text-4xl md:text-5xl mb-8 text-white font-light"
          >
            Ready to Find Your Perfect Piece?
          </motion.h4>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Begin your journey with our expert jewellers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              href="/catalogue" 
              whileHover={{ scale: 1.05, y: -4 }}
              className="luxury-button text-lg shadow-gold-xl"
            >
              Explore Collections →
            </motion.a>
            <motion.a 
              href="/contact" 
              whileHover={{ scale: 1.05 }}
              className="px-10 py-5 rounded-2xl border-2 border-white/50 text-white font-semibold backdrop-blur-sm hover:bg-white/20 hover:shadow-gold-lg transition-all duration-500"
            >
              Book Consultation
            </motion.a>
          </div>
        </div>
      </section>
    </>
  )
}
