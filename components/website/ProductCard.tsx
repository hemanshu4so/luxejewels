'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }: any) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group overflow-hidden rounded-xl border border-gold-200/40 bg-white/80 backdrop-blur shadow-[0_20px_50px_rgba(26,26,26,0.08)] hover:shadow-[0_0_40px_rgba(230,184,0,0.28)]"
    >
      <div className="relative h-[260px] w-full overflow-hidden">
        <Image src="/images/placeholder.jpg" alt="product" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="font-playfair text-xl tracking-wide text-charcoal">{product?.name || 'Luxury Jewellery'}</h3>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-charcoal/50">Signature Collection</p>

        <div className="mt-5 flex gap-3">
          <Link href={`/catalogue/${product?.id || 'demo'}`} className="flex-1 rounded-full border border-charcoal/20 py-2.5 text-center text-sm tracking-wide text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-cream">
            View
          </Link>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-gradient-to-r from-[#e6b800] via-[#f2ca2a] to-[#c49a00] py-2.5 text-center text-sm font-medium tracking-wide text-charcoal shadow-[0_10px_24px_rgba(230,184,0,0.35)] transition hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(230,184,0,0.5)]">
            Enquire
          </a>
        </div>
      </div>
    </motion.article>
  )
}
