'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type Product = {
  id: string
  name: string
  image: string
  price?: string
}

export default function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={product.image || '/images/placeholder.jpg'}
          alt={product.name}
          className="w-full h-60 object-cover"
        />

        {/* Wishlist Button */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
        >
          {wishlisted ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        {product.price && (
          <p className="text-yellow-600 font-medium mt-1">
            ₹ {product.price}
          </p>
        )}
      </div>
    </motion.div>
  )
}