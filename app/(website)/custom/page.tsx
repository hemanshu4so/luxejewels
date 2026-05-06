'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, DraftingCompass, Gem, MessageCircle, PencilRuler, Sparkles } from 'lucide-react'
import { getWhatsappUrl } from '@/lib/luxury-data'

const steps = [
  { icon: PencilRuler, title: 'Design Consultation', text: 'Share references, ceremony needs, budget, metal preference, and family heirloom context.' },
  { icon: DraftingCompass, title: 'Sketch & Material Edit', text: 'Our atelier proposes silhouettes, stones, gold purity, weight direction, and finishing notes.' },
  { icon: Gem, title: 'Craft & Fitting', text: 'Master artisans shape the piece with checkpoints for comfort, polish, clasp security, and final presentation.' },
]

export default function CustomPage() {
  return (
    <div className="bg-[#fbf6ec] text-charcoal">
      <section className="section-shell grid gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow">Bespoke atelier</p>
          <h1 className="mt-4 font-display text-5xl leading-tight sm:text-7xl">A jewel made around your story.</h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/64">From bridal redesigns to a solitaire setting or a temple gold heirloom, SKKL creates custom jewellery through a private, precise, emotionally rich process.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={getWhatsappUrl('Hi SKKL Jewellers, I would like to start a bespoke jewellery consultation.')} target="_blank" rel="noopener noreferrer" className="gold-button">
              <MessageCircle size={17} />
              Start on WhatsApp
            </a>
            <Link href="/contact#appointment" className="luxury-button">Book appointment <ArrowRight size={16} /></Link>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
          <Image src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1700&q=85" alt="Bespoke diamond jewellery design" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/62 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#e7cf8e]">Private atelier</p>
            <p className="mt-3 font-display text-4xl">Sketch. Stone. Setting. Ceremony.</p>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#15120f] py-20 text-white">
        <div className="section-shell">
          <p className="eyebrow text-[#e7cf8e]">The process</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">Luxury custom work should feel calm, clear, and beautifully guided.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[8px] border border-white/10 bg-white/5 p-7">
                <Icon className="text-[#e7cf8e]" size={30} />
                <p className="mt-8 text-xs uppercase tracking-[0.25em] text-white/38">Step {index + 1}</p>
                <h3 className="mt-3 font-display text-3xl">{title}</h3>
                <p className="mt-3 leading-7 text-white/62">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="rounded-[8px] border border-gold-700/18 bg-white/70 p-8 shadow-[0_24px_80px_rgba(26,26,26,0.08)] lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Sparkles className="text-gold-800" size={30} />
              <h2 className="mt-5 font-display text-4xl">Bring an old jewel. Leave with a renewed heirloom.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-charcoal/62">SKKL also supports heirloom redesigns, stone resetting, clasp upgrades, polishing, and ceremonial styling for family jewellery.</p>
            </div>
            <Link href="/contact" className="gold-button w-fit">Visit showroom</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
