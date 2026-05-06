'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Gem, HandHeart, ShieldCheck } from 'lucide-react'

const milestones = [
  { year: '1951', title: 'The first promise', text: 'Late Shri Karshanji Bhai Lodhiya begins jewellery craftsmanship in Shapur with limited resources, handmade skill, and transparent trust.' },
  { year: 'Early years', title: 'Karigar discipline', text: 'Traditional desi diya flame work, tube light hours, and hand-finished detailing shape the SKKL way of working.' },
  { year: 'Today', title: 'Modern standards', text: 'Hardik Lodhiya carries the house forward with custom design, clearer consultation, and a premium showroom experience.' },
  { year: '2026', title: 'Digital heritage', text: 'The SKKL experience expands into a cinematic online salon for discovery, enquiry, and appointment booking.' },
]

export default function AboutPage() {
  return (
    <div className="bg-[#fbf6ec] text-charcoal">
      <section className="section-shell grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Our heritage</p>
          <h1 className="mt-4 font-display text-5xl leading-tight sm:text-7xl">A legacy of craft, passed through generations.</h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/64">
            SKKL Jewellers is built on a simple luxury promise: purity you can trust, craft you can feel, and jewellery that becomes part of a family history.
          </p>
          <Link href="/contact#appointment" className="gold-button mt-8 w-fit">Book a private visit <ArrowRight size={16} /></Link>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_30px_86px_rgba(26,26,26,0.14)]">
          <Image src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1700&q=85" alt="SKKL heritage jewellery craft" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/56 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[8px] border border-white/18 bg-black/22 p-5 text-white backdrop-blur">
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#e7cf8e]">House belief</p>
            <p className="mt-2 font-serif text-2xl">Jewellery should outlive trends and still feel intimate.</p>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#15120f] py-20 text-white">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#e7cf8e]">Generations</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">From counter trust to couture-level bridal craft.</h2>
          </div>
          <div className="mt-12 grid gap-5 border-l border-[#e7cf8e]/24 pl-7">
            {milestones.map((milestone, index) => (
              <motion.div key={milestone.year} initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative rounded-[8px] border border-white/10 bg-white/5 p-6">
                <span className="absolute -left-[37px] top-7 h-4 w-4 rounded-full bg-[#e7cf8e]" />
                <div className="grid gap-4 md:grid-cols-[120px_1fr]">
                  <p className="font-display text-4xl text-[#e7cf8e]">{milestone.year}</p>
                  <div>
                    <h3 className="font-display text-3xl">{milestone.title}</h3>
                    <p className="mt-2 leading-7 text-white/62">{milestone.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Purity first', text: 'BIS hallmarked gold, documented diamonds, and transparent rate conversations.' },
            { icon: Gem, title: 'Material intelligence', text: 'Gold, platinum, polki, kundan, emeralds, pearls, and diamonds selected for lasting beauty.' },
            { icon: HandHeart, title: 'Human luxury', text: 'Private consultations that respect family context, budget, ceremony, and styling needs.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[8px] border border-gold-700/16 bg-white/66 p-7 shadow-sm">
              <Icon size={28} className="text-gold-800" />
              <h3 className="mt-6 font-display text-3xl">{title}</h3>
              <p className="mt-3 leading-7 text-charcoal/62">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
