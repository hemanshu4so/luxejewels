'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Search, MessageCircle } from 'lucide-react'

interface ProductCardProps {
  product: any
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl shadow-card hover:shadow-gold-xl hover:-translate-y-3 transition-all duration-700 cursor-pointer product-card-hover bg-white/70 backdrop-blur-sm border border-gray-100/50"
      whileHover={{ scale: 1.05 }}
    >
      {/* Image Container with overlay */}
      <div className="relative w-full h-[280px] overflow-hidden rounded-2xl">
        <Image
          src={product.image || "/images/placeholder.jpg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Gold shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-transparent to-gold-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm" />
        {/* Quick actions */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2 translate-y-2 group-hover:translate-y-0">
          <button className="w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl shadow-card hover:shadow-gold-lg transition-all duration-300 flex items-center justify-center">
            <Heart className="w-5 h-5 text-charcoal hover:text-red-500 transition-colors" />
          </button>
          <Link href={`/catalogue/${product.slug || product.id}`} className="w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl shadow-card hover:shadow-gold-lg transition-all duration-300 flex items-center justify-center">
            <Search className="w-5 h-5 text-charcoal hover:text-gold-600 transition-colors" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-display text-xl font-semibold text-charcoal mb-3 group-hover:text-gold-700 transition-colors line-clamp-2">
          {product.name || 'Luxury Masterpiece'}
        </h3>
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold gold-text">
            ₹{product.price?.toLocaleString() || '1,25,000'}
          </span>
          <span className="px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full">
            {product.category || 'Gold'}
          </span>
        </div>
        <div className="flex gap-3">
          <Link
            href={`/catalogue/${product.slug || product.id}`}
            className="flex-1 text-center luxury-button text-sm py-3 shadow-gold hover:shadow-gold-lg"
          >
            View Details
          </Link>
          <button className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl shadow-lg hover:shadow-gold-lg hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full blur-sm opacity-70" />
    </motion.div>
  )
}
