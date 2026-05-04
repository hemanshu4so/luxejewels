'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Heart } from 'lucide-react'

export default function ProductDetail() {
  const params = useParams()
  const slug = params.slug as string

  const product = {
    name: 'Royal Bridal Necklace Set',
    images: ['/images/placeholder.jpg'],
    price: 125000,
    weight: '25.5g',
    purity: '22K Gold',
    description: 'Exquisite bridal necklace set with polki diamonds and uncut diamonds. Perfect for the modern bride.',
    details: [
      '22K Hallmarked Gold',
      '1.25 Carat Polki Diamonds',
      'Handcrafted by master artisans',
      'Lifetime polishing warranty'
    ]
  }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <Link href="/catalogue" className="inline-flex items-center gap-2 text-muted hover:text-gold-600 mb-8">
          <ArrowLeft size={20} />
          Back to Catalogue
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-luxury">
              <Image
                src="/images/placeholder.jpg"
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-display text-4xl font-bold text-charcoal mb-2">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-gold-600">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-lg text-muted">
                  {product.weight} | {product.purity}
                </span>
              </div>
            </div>

            <p className="text-lg text-muted leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 bg-white/50 rounded-xl">
                {product.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full" />
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href="#"
                  className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 px-6 rounded-xl font-semibold text-center hover:shadow-gold-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Enquire on WhatsApp
                </a>
                <button className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center hover:shadow-gold">
                  <Heart size={24} className="text-charcoal" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
