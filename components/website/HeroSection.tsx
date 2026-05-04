'use client'

import { useRef }                       from 'react'
import Link                             from 'next/link'
import Image                            from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play }             from 'lucide-react'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y      = useTransform(scrollYProgress, [0, 1], ['0%',  '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden flex items-center">

      {/* ── Parallax Background ── */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/placeholder.jpg"
          alt="Luxury jewellery"
          fill
          priority
          className="object-cover object-center scale-110"
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        {/* Gold dust effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(230,184,0,0.15),transparent_60%)]" />
      </motion.div>

      {/* ── Floating Jewellery Particles ── */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold-400"
          style={{
            left:   `${20 + i * 12}%`,
            top:    `${30 + (i % 3) * 15}%`,
          }}
          animate={{
            y:       [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale:   [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat:   Infinity,
            delay:    i * 0.4,
          }}
        />
      ))}

      {/* ── Content ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-xs tracking-[0.3em] uppercase font-medium">
              New Collection 2025
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.05] mb-6"
          >
            Where{' '}
            <span className="gold-shimmer">Elegance</span>
            <br />
            <em className="font-light">Meets Eternity</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/70 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-xl"
          >
            Handcrafted with generations of artistry. Each piece tells a story
            of love, heritage, and extraordinary craftsmanship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/catalogue"
              className="
                group flex items-center gap-2 px-8 py-4
                bg-gradient-to-r from-gold-500 to-gold-600
                text-white font-semibold rounded-full
                hover:shadow-gold-lg hover:scale-105
                transition-all duration-300 text-sm tracking-wide
              "
            >
              Explore Collections
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="
              group flex items-center gap-3 px-8 py-4
              glass text-white font-medium rounded-full
              hover:bg-white/20 transition-all duration-300
              text-sm tracking-wide
            ">
              <span className="
                w-8 h-8 rounded-full bg-white/20 flex items-center justify-center
                group-hover:bg-gold-500 transition-colors duration-300
              ">
                <Play size={12} className="ml-0.5" fill="currentColor" />
              </span>
              Our Story
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-6 mt-12"
          >
            {[
              { num: '35+', label: 'Years Heritage' },
              { num: '50K+', label: 'Happy Families' },
              { num: 'BIS', label: 'Hallmarked' },
              { num: 'IGI', label: 'Certified Diamonds' },
            ].map((badge, i) => (
              <div key={i} className="text-center">
                <div className="text-gold-400 font-display text-xl font-bold">{badge.num}</div>
                <div className="text-white/50 text-[10px] tracking-widest uppercase">{badge.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent"
        />
      </motion.div>
    </section>
  )
}