'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, MessageCircle } from 'lucide-react'
import type { Product } from '@/types'
import { formatPrice, getWhatsappUrl } from '@/lib/luxury-data'

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const href = `/catalogue/${product.slug}`
  const image = product.images[0] ?? '/images/placeholder.jpg'

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.04 }}
      className="gpu-layer group overflow-hidden rounded-[8px] border border-[#d8b76a]/22 bg-[#fffaf0]/85 shadow-[0_22px_60px_rgba(26,26,26,0.09)] backdrop-blur transition duration-700 hover:-translate-y-1 hover:shadow-[0_30px_78px_rgba(26,26,26,0.16)]"
    >
      <Link href={href} className="block">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#ede2cd]">
          <Image src={image} alt={product.name} fill quality={76} className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/54 via-black/4 to-transparent opacity-80" />
          <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-700">SKKL signature</p>
            <Link href={href}>
              <h3 className="mt-2 font-display text-2xl leading-tight tracking-wide text-charcoal transition group-hover:text-gold-800">{product.name}</h3>
            </Link>
          </div>
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/10 bg-white/60 text-charcoal/70 transition hover:text-gold-700" aria-label="Save to wishlist" type="button">
            <Heart size={17} />
          </button>
        </div>
        <p className="mt-3 line-clamp-2 min-h-[44px] text-sm leading-6 text-charcoal/62">{product.description}</p>

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-charcoal/10 pt-4">
          <div>
            <p className="text-xs text-charcoal/50">{product.weight}g · {product.purity}</p>
            <p className="mt-1 font-semibold text-charcoal">{product.showPrice ? formatPrice(product.price) : 'Price on request'}</p>
          </div>
          <a href={getWhatsappUrl(`Hi SKKL Jewellers, I would like to enquire about ${product.name}.`)} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#15251c] text-white transition hover:bg-[#1f7a45]" aria-label={`Enquire about ${product.name}`}>
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
