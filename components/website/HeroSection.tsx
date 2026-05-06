'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Gem, Landmark } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.28])

  return (
    <section ref={ref} className="relative flex min-h-[calc(100svh-104px)] items-center overflow-hidden bg-[#0F0F0F] py-20 text-white sm:py-24 lg:py-28">
      <motion.div style={{ y: reduceMotion ? 0 : y }} className="gpu-layer absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=2400&q=88"
          alt="SKKL Jewellers heritage luxury jewellery closeup"
          fill
          priority
          quality={82}
          className="scale-105 object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,15,0.94),rgba(43,24,16,0.72)_46%,rgba(15,15,15,0.18))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_42%,rgba(198,162,90,0.25),transparent_34%),radial-gradient(circle_at_72%_20%,rgba(248,245,239,0.12),transparent_22%),linear-gradient(0deg,rgba(15,15,15,0.82),transparent_44%)]" />
        <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(#F8E6B1_1px,transparent_1px)] [background-size:16px_16px]" />
      </motion.div>

      {!reduceMotion && [...Array(10)].map((_, index) => (
        <motion.span
          key={index}
          className="gpu-layer absolute hidden h-1 w-1 rounded-full bg-[#e9d08b] sm:block"
          style={{ left: `${12 + index * 7}%`, top: `${18 + (index % 5) * 13}%` }}
          animate={{ y: [0, -16, 0], opacity: [0.16, 0.72, 0.16], scale: [1, 1.45, 1] }}
          transition={{ duration: 5.6 + index * 0.22, repeat: Infinity, delay: index * 0.23, ease: 'easeInOut' }}
        />
      ))}

      <motion.div style={{ opacity }} className="section-shell relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/8 px-4 py-2 backdrop-blur-md">
            <Gem size={15} className="text-[#e9d08b]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#f8e6b1]">The Magnificent Indian Jeweller Since 1951</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 1, ease: 'easeOut' }} className="font-display text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl xl:text-[6.7rem]">
            Where Heritage Meets Modern Luxury
            <span className="mt-5 block font-serif text-3xl font-light italic text-[#e7cf8e] sm:text-5xl lg:text-6xl">SKKL Jewellers</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.9 }} className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl sm:leading-9">
            For over seven decades, SKKL Jewellers has blended heritage craftsmanship, purity, trust, and modern elegance into jewellery that becomes part of family memories.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.7 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/catalogue" className="gold-button">
              Explore Collection
              <ArrowRight size={16} />
            </Link>
            <Link href="#heritage" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/8 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white hover:text-charcoal">
              Discover Heritage
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['70+', 'Years of trust'],
              ['BIS', 'Hallmarked gold'],
              ['1951', 'Shapur roots'],
              ['1:1', 'Custom consults'],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-[#e7cf8e]/35 pl-4">
                <p className="font-display text-2xl text-[#e7cf8e]">{value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/48">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65, duration: 0.8 }} className="absolute bottom-0 right-8 hidden max-w-xs rounded-[8px] border border-white/14 bg-black/22 p-5 backdrop-blur-xl lg:block">
          <div className="flex items-start gap-3">
            <Landmark className="mt-1 text-[#e7cf8e]" size={22} />
            <div>
              <p className="font-display text-xl">Soni Karshanji Kurji Lodhiya</p>
              <p className="mt-2 text-sm leading-6 text-white/60">A Shapur jewellery house where family trust, craft, and transparency remain the real luxury.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
