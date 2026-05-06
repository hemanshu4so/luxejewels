'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Gem,
  HandHeart,
  Instagram,
  MessageCircle,
  Palette,
  PenLine,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WandSparkles,
} from 'lucide-react'
import { getWhatsappUrl, mockProducts } from '@/lib/luxury-data'

const fallbackImage = '/images/placeholder.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export function AnimatedText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'left',
  dark = false,
}: {
  eyebrow: string
  title: string
  copy?: string
  align?: 'left' | 'center'
  dark?: boolean
}) {
  return (
    <AnimatedText className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`eyebrow ${dark ? 'text-[#C6A25A]' : ''}`}>{eyebrow}</p>
      <h2 className={`mt-5 font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl ${dark ? 'text-[#F8F5EF]' : 'text-[#2B1810]'}`}>{title}</h2>
      {copy ? <p className={`luxury-copy mt-7 ${dark ? 'text-white/62' : 'text-charcoal/64'}`}>{copy}</p> : null}
    </AnimatedText>
  )
}

export function PremiumButton({
  href,
  children,
  variant = 'gold',
}: {
  href: string
  children: React.ReactNode
  variant?: 'gold' | 'dark' | 'ghost'
}) {
  const className =
    variant === 'gold'
      ? 'gold-button'
      : variant === 'dark'
        ? 'luxury-button'
        : 'inline-flex items-center justify-center gap-2 rounded-full border border-white/22 bg-white/8 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur transition duration-300 hover:border-[#C6A25A] hover:bg-[#C6A25A] hover:text-[#2B1810]'

  return (
    <Link href={href} className={className}>
      {children}
      <ArrowRight size={16} />
    </Link>
  )
}

export function LuxuryCard({
  icon: Icon,
  title,
  copy,
  dark = false,
  delay = 0,
}: {
  icon: typeof ShieldCheck
  title: string
  copy: string
  dark?: boolean
  delay?: number
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={`gpu-layer group rounded-[8px] border p-6 transition duration-700 sm:p-7 ${
        dark
          ? 'border-white/10 bg-white/[0.045] shadow-[0_24px_70px_rgba(0,0,0,0.22)] hover:border-[#C6A25A]/55 hover:bg-white/[0.07] hover:shadow-[0_0_44px_rgba(198,162,90,0.14)]'
          : 'border-[#C6A25A]/20 bg-white/68 shadow-[0_24px_70px_rgba(43,24,16,0.07)] hover:-translate-y-1 hover:border-[#C6A25A]/55 hover:shadow-[0_28px_80px_rgba(198,162,90,0.16)]'
      }`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-full border ${dark ? 'border-[#C6A25A]/28 bg-[#C6A25A]/10 text-[#E8CF94]' : 'border-[#C6A25A]/30 bg-[#F8F5EF] text-[#9D7731]'}`}>
        <Icon size={22} />
      </div>
      <h3 className={`mt-6 font-display text-2xl ${dark ? 'text-[#F8F5EF]' : 'text-[#2B1810]'}`}>{title}</h3>
      <p className={`mt-3 text-sm leading-7 ${dark ? 'text-white/58' : 'text-charcoal/62'}`}>{copy}</p>
    </motion.div>
  )
}

const timeline = [
  {
    year: '1951',
    title: 'A flame, a bench, and a promise',
    copy: 'Late Shri Karshanji Bhai Lodhiya began with extremely limited resources, shaping handmade jewellery through patience, skill, and absolute honesty.',
  },
  {
    year: 'Early years',
    title: 'Craft beneath humble light',
    copy: 'Traditional desi diya flame work, long hours beneath tube light, and careful hand finishing became the foundation of the family reputation.',
  },
  {
    year: 'Generations',
    title: 'Trust became the real ornament',
    copy: 'Families returned because purity was explained clearly, pricing stayed transparent, and every relationship was treated with warmth.',
  },
  {
    year: 'Today',
    title: 'Modernized by Hardik Lodhiya',
    copy: 'The house now blends digital consultation, custom design, and a premium showroom experience while preserving the values that built SKKL.',
  },
]

export function HeritageTimeline() {
  return (
    <section id="heritage" className="cinematic-section relative overflow-hidden bg-[#120f0d] text-white">
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#C6A25A_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(198,162,90,0.2),transparent_28%),linear-gradient(180deg,rgba(15,15,15,0),rgba(15,15,15,0.72))]" />
      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Heritage story"
            title="From a small artisan bench in Shapur to a trusted jewellery house."
            copy="SKKL was not built by spectacle. It was built by steady hands, clear words, and families who came back with the next generation."
            dark
          />
          <div className="relative space-y-5 border-l border-[#C6A25A]/24 pl-7">
            <div className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C6A25A] to-transparent shadow-[0_0_28px_rgba(198,162,90,0.55)]" />
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.85, delay: index * 0.08, ease: 'easeOut' }}
                className="gpu-layer relative rounded-[8px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-md sm:p-7"
              >
                <span className="absolute -left-[38px] top-7 h-4 w-4 rounded-full border border-[#F8E6B1] bg-[#C6A25A] shadow-[0_0_22px_rgba(198,162,90,0.72)]" />
                <p className="font-display text-3xl text-[#E4C978]">{item.year}</p>
                <h3 className="mt-2 font-display text-2xl text-[#F8F5EF]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/62">{item.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutSKKLSection() {
  return (
    <section className="luxury-section cinematic-section">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About SKKL"
            title="Soni Karshanji Kurji Lodhiya, a family name carried with pride."
            copy="For over seven decades, SKKL Jewellers has blended heritage craftsmanship, purity, trust, and modern elegance into jewellery that becomes part of family memories."
          />
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {['Trust before transaction', 'Purity with clarity', 'Custom jewellery for every family story', 'Relationships that continue for generations'].map((item) => (
              <div key={item} className="border-l border-[#C6A25A]/42 pl-4 font-display text-2xl leading-tight text-[#2B1810]/86">
                {item}
              </div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute -inset-5 rounded-[8px] bg-[#C6A25A]/12 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-[#2B1810] shadow-[0_35px_95px_rgba(43,24,16,0.22)]">
            <Image src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1400&q=86" alt="SKKL heritage gold craftsmanship" fill quality={78} className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1810]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 border-t border-white/18 pt-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#E8CF94]">Shapur, Gujarat - Since 1951</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function TrustSection() {
  const points = [
    [Clock3, 'Trusted Since 1951', 'A family jewellery house shaped by more than 70 years of relationships.'],
    [BadgeCheck, 'Hallmarked Jewellery', 'Purity standards are communicated with clarity before every purchase.'],
    [ShieldCheck, 'Transparent Pricing', 'Metal rates, making, stones, and design value are explained with respect.'],
    [Gem, 'Heritage Craftsmanship', 'Handmade detailing and karigar skill continue to guide every piece.'],
    [Palette, 'Fully Customized Designs', 'Bring a reference, a sketch, or a memory. We shape it into jewellery.'],
    [HandHeart, 'Family-Like Experience', 'Appointments feel patient, personal, and emotionally understood.'],
  ] as const

  return (
    <section className="cinematic-section bg-[#F8F5EF]">
      <div className="section-shell">
        <SectionHeading eyebrow="Why families trust SKKL" title="Luxury that feels transparent, warm, and deeply personal." align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(([Icon, title, copy], index) => (
            <LuxuryCard key={title} icon={Icon} title={title} copy={copy} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function CustomJewellerySection() {
  const steps = [
    ['01', 'Share your imagination', 'Bring a family reference, a saved design, or a new idea on WhatsApp.'],
    ['02', 'Design consultation', 'We discuss gold, diamonds, budget, occasion, comfort, and timeline.'],
    ['03', 'Crafted for you', 'Karigar craft and modern finishing come together in a piece made only for your family.'],
  ]

  return (
    <section className="cinematic-section relative overflow-hidden bg-[#17110e] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(198,162,90,0.18),transparent_30%)]" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Custom jewellery experience"
            title="Bring your imagination and we craft it."
            copy="From a WhatsApp thought to a finished heirloom, the SKKL bespoke journey is personal, calm, and precise."
            dark
          />
          <div className="mt-9 space-y-4">
            {steps.map(([number, title, copy]) => (
              <div key={title} className="flex gap-4 rounded-[8px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur">
                <span className="font-display text-3xl text-[#C6A25A]">{number}</span>
                <div>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/58">{copy}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <PremiumButton href={getWhatsappUrl('Namaste SKKL Jewellers, I want to discuss a custom jewellery design.')} variant="ghost">
              Start on WhatsApp
            </PremiumButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Concept', PenLine, 'Sketch, reference, family motif'],
            ['Consult', MessageCircle, 'WhatsApp and showroom guidance'],
            ['Craft', WandSparkles, 'Traditional skill, modern finish'],
            ['Heirloom', Sparkles, 'Made for one family memory'],
          ].map(([title, Icon, copy], index) => {
            const StepIcon = Icon as typeof PenLine
            return (
              <motion.div
                key={title as string}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className={`gpu-layer rounded-[8px] border border-[#C6A25A]/20 bg-[#F8F5EF]/[0.08] p-6 backdrop-blur sm:p-7 ${index % 2 ? 'sm:translate-y-8' : ''}`}
              >
                <StepIcon className="text-[#E8CF94]" size={28} />
                <h3 className="mt-7 font-display text-3xl text-[#F8F5EF]">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{copy as string}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ShowroomSection() {
  return (
    <section className="luxury-section cinematic-section">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="relative aspect-[16/11] overflow-hidden rounded-[8px] bg-[#2B1810]">
          <Image src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1800&q=86" alt="Premium SKKL showroom consultation atmosphere" fill quality={78} className="object-cover" sizes="(min-width: 1024px) 56vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/54 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-sm rounded-[8px] border border-white/14 bg-black/26 p-5 text-white backdrop-blur-xl">
            <p className="font-display text-2xl">Comfort, privacy, hospitality.</p>
            <p className="mt-2 text-sm leading-6 text-white/62">An AC showroom environment made for slow decisions and meaningful family conversations.</p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Showroom experience"
            title="A modern luxury salon with the warmth of home."
            copy="The SKKL showroom experience is designed for comfort: clear counters, patient guidance, AC atmosphere, premium presentation, and hospitality that lets families choose without pressure."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Private bridal guidance', 'Comfortable seating', 'Modern display experience', 'Relationship-led hospitality'].map((item) => (
              <div key={item} className="rounded-[8px] border border-[#C6A25A]/18 bg-white/58 p-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2B1810]/72">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-[#0F0F0F] py-28 text-white sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(198,162,90,0.18),transparent_34%)]" />
      <div className="section-shell relative">
        <AnimatedText className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-[#C6A25A]">Brand philosophy</p>
          <h2 className="mt-8 font-display text-5xl leading-tight text-[#F8F5EF] sm:text-7xl">
            Jewellery is not merely an ornament.
          </h2>
          <div className="mt-10 grid gap-4 font-display text-4xl italic text-[#C6A25A] sm:grid-cols-3 sm:text-5xl">
            <span>It is emotion.</span>
            <span>It is heritage.</span>
            <span>It is identity.</span>
          </div>
        </AnimatedText>
      </div>
    </section>
  )
}

export function FutureVisionSection() {
  return (
    <section className="cinematic-section bg-[#F8F5EF]">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <SectionHeading
          eyebrow="Future vision"
          title="Traditional roots entering the future."
          copy="SKKL is growing into a next-generation jewellery studio: richer custom design, better digital consultation, refined showroom systems, and modern storytelling while preserving the trust that began in 1951."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            ['Modern studio setup', 'Design conversations with better visualization and premium presentation.'],
            ['Technology-led service', 'Digital enquiries, wishlist journeys, rate clarity, and faster consultation.'],
            ['Preserved family trust', 'The future changes the tools, not the values.'],
          ].map(([title, copy], index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.08 }} className="rounded-[8px] border border-[#C6A25A]/22 bg-white/68 p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#9D7731]">0{index + 1}</p>
              <h3 className="mt-6 font-display text-3xl leading-tight text-[#2B1810]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-charcoal/62">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  const testimonials = [
    ['Our family has trusted SKKL for wedding jewellery across generations. The advice feels honest and the pieces feel blessed with memory.', 'A Shapur family client'],
    ['They understood exactly what we wanted for a custom bridal set. It felt premium, but also very personal and respectful.', 'Bridal jewellery client'],
    ['The clarity on purity and pricing is why we keep coming back. SKKL treats jewellery like a relationship, not only a purchase.', 'Gold jewellery client'],
  ]

  return (
    <section className="cinematic-section relative overflow-hidden bg-[#15110f] text-white">
      <div className="section-shell">
        <SectionHeading eyebrow="Families who trusted us" title="Stories carried from one generation to the next." align="center" dark />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map(([quote, name], index) => (
            <motion.article key={name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.08 }} className="rounded-[8px] border border-white/10 bg-white/[0.05] p-7">
              <Quote className="text-[#C6A25A]" size={28} />
              <p className="mt-6 font-serif text-2xl leading-9 text-white/78">{quote}</p>
              <div className="mt-7 flex gap-1 text-[#C6A25A]">{[...Array(5)].map((_, starIndex) => <Star key={starIndex} size={16} fill="currentColor" />)}</div>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/42">{name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SocialShowcaseSection() {
  const products = mockProducts.slice(0, 5)

  return (
    <section className="luxury-section cinematic-section">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Social showcase" title="A modern glimpse into the SKKL world." copy="Reels-style moments, bridal details, custom design reveals, and daily gold inspiration from the showroom." />
          <Link href="/catalogue" className="luxury-button w-fit">
            View Catalogue <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className={`group relative aspect-[9/14] overflow-hidden rounded-[8px] bg-[#2B1810] ${index % 2 ? 'md:mt-10' : ''}`}
            >
              <Image src={product.images[0] ?? fallbackImage} alt={`${product.name} social preview`} fill quality={74} className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 768px) 20vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/16 bg-black/28 text-[#E8CF94] backdrop-blur">
                <Instagram size={17} />
              </div>
              <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white/86">{product.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CollectionsStorySection() {
  const collections = [
    { title: 'Bridal Heirlooms', href: '/catalogue?category=bridal', image: mockProducts[0]?.images[0] ?? fallbackImage, copy: 'Ceremonial gold, polki, kundan, and layered silhouettes for once-in-a-lifetime moments.' },
    { title: 'Diamond Salon', href: '/catalogue?category=diamond', image: mockProducts[1]?.images[0] ?? fallbackImage, copy: 'Modern diamond jewellery with measured brilliance and refined evening presence.' },
    { title: 'Temple Gold', href: '/catalogue?category=gold', image: mockProducts[2]?.images[0] ?? fallbackImage, copy: 'Warm 22K pieces sculpted with heritage motifs, antique texture, and everyday permanence.' },
  ]

  return (
    <section className="luxury-section py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading eyebrow="The SKKL universe" title="Jewellery collections with ceremony, restraint, and radiance." />
          <p className="max-w-2xl text-lg leading-8 text-charcoal/62 lg:justify-self-end">
            Every collection is composed like a private salon edit: fewer pieces, stronger silhouettes, premium materials, and the quiet confidence of heirloom craft.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.div key={collection.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group relative min-h-[430px] overflow-hidden rounded-[8px] bg-charcoal">
              <Image src={collection.image} alt={collection.title} fill quality={78} className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/24 to-transparent" />
              <div className="absolute bottom-0 p-7 text-white">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#e7cf8e]">Collection {String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 font-display text-3xl">{collection.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{collection.copy}</p>
                <Link href={collection.href} className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4de9a]">
                  View edit <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CraftSection() {
  return (
    <section className="bg-[#15120f] py-24 text-white sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[8px]">
          <Image src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1800&q=85" alt="SKKL diamond craft showcase" fill quality={78} className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/48 to-transparent" />
        </div>
        <div>
          <SectionHeading eyebrow="Heritage in motion" title="Designed slowly. Finished flawlessly. Worn forever." copy="Our atelier balances hand techniques, certified stones, and contemporary comfort so each piece feels precious without feeling performative." dark />
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[['Purity', ShieldCheck], ['Craft', Users], ['Brilliance', Sparkles]].map(([label, Icon]) => {
              const LuxuryIcon = Icon as typeof ShieldCheck
              return (
                <div key={label as string} className="rounded-[8px] border border-white/10 bg-white/5 p-5">
                  <LuxuryIcon className="text-[#e7cf8e]" size={24} />
                  <p className="mt-4 font-display text-2xl">{label as string}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function FeaturedProductsSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="luxury-section py-24 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Featured jewels</p>
            <h2 className="mt-3 font-display text-4xl text-[#2B1810] sm:text-5xl">Signature pieces this season.</h2>
          </div>
          <PremiumButton href="/catalogue" variant="dark">Full Catalogue</PremiumButton>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">{children}</div>
      </div>
    </section>
  )
}
