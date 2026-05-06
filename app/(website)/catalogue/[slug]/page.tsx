'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Gem, Heart, MessageCircle, Ruler, ShieldCheck, Sparkles } from 'lucide-react'
import ProductCard from '@/components/website/ProductCard'
import { formatPrice, getWhatsappUrl, mockProducts } from '@/lib/luxury-data'

export default function ProductDetail() {
  const params = useParams()
  const slug = params.slug as string
  const product = mockProducts.find((item) => item.slug === slug || item.id === slug)
  const [activeImage, setActiveImage] = useState(0)

  const related = useMemo(() => {
    if (!product) return []
    return mockProducts.filter((item) => item.id !== product.id && item.category === product.category).concat(mockProducts.filter((item) => item.id !== product.id)).slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="section-shell py-24 text-center">
        <p className="eyebrow">Catalogue</p>
        <h1 className="mt-4 font-display text-5xl">This jewel is no longer in the salon edit.</h1>
        <Link href="/catalogue" className="gold-button mt-8">Return to catalogue</Link>
      </div>
    )
  }

  const selectedImage = product.images[activeImage] ?? product.images[0] ?? '/images/placeholder.jpg'

  const specs = [
    { icon: ShieldCheck, label: 'Certification', value: product.purity || 'SKKL inspected' },
    { icon: Ruler, label: 'Gross weight', value: `${product.weight} grams` },
    { icon: Gem, label: 'Material', value: product.material },
    { icon: Sparkles, label: 'Occasion', value: product.occasion.join(', ') },
  ]

  return (
    <div className="bg-[#fbf6ec] text-charcoal">
      <section className="section-shell py-10">
        <Link href="/catalogue" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/54 transition hover:text-gold-800">
          <ArrowLeft size={17} />
          Back to catalogue
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} className="lg:sticky lg:top-32">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-[#e7dcc8] shadow-[0_28px_80px_rgba(26,26,26,0.14)]">
              <Image src={selectedImage} alt={product.name} fill priority className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/28 to-transparent" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button key={image} onClick={() => setActiveImage(index)} className={`relative aspect-square overflow-hidden rounded-[8px] border ${activeImage === index ? 'border-gold-700' : 'border-transparent'}`} aria-label={`View ${product.name} image ${index + 1}`}>
                  <Image src={image} alt="" fill className="object-cover" sizes="120px" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div>
              <p className="eyebrow">SKKL {product.category}</p>
              <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">{product.name}</h1>
              <p className="mt-5 text-xl font-semibold text-gold-800">{product.showPrice ? formatPrice(product.price) : 'Price on request'}</p>
            </div>

            <p className="text-lg leading-8 text-charcoal/64">{product.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-[8px] border border-gold-700/16 bg-white/64 p-5">
                  <Icon className="text-gold-800" size={22} />
                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-charcoal/42">{label}</p>
                  <p className="mt-2 font-medium text-charcoal">{value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[8px] border border-charcoal/10 bg-[#15120f] p-6 text-white shadow-[0_24px_70px_rgba(26,26,26,0.16)] lg:sticky lg:top-32">
              <p className="font-display text-3xl">Private enquiry</p>
              <p className="mt-2 text-sm leading-6 text-white/62">Ask for availability, video viewing, metal customization, or appointment styling.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={getWhatsappUrl(`Hi SKKL Jewellers, I am interested in ${product.name}. Please share details.`)} target="_blank" rel="noopener noreferrer" className="gold-button flex-1">
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
                <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/16 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-charcoal">
                  <Heart size={17} />
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Related pieces</p>
            <h2 className="mt-3 font-display text-4xl">Continue the salon edit.</h2>
          </div>
          <Link href="/catalogue" className="luxury-button w-fit">View all</Link>
        </div>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item, index) => (
            <ProductCard key={item.id} product={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  )
}
