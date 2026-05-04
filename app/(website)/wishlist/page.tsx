'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-cream py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="w-24 h-24 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-gold-500" />
          </div>
          <h1 className="font-display text-5xl font-bold text-charcoal mb-4">
            Your Wishlist
          </h1>
          <p className="text-xl text-muted max-w-md mx-auto">
            Save your favorite pieces and we'll notify you when they're available.
          </p>
        </div>
        
        <div className="text-center">
          <Link href="/catalogue" className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-gold-lg transition-all">
            Start Shopping
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
