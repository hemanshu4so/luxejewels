'use client'

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { Users, Award, ShieldCheck, Clock, Heart, Crown, ArrowRight } from 'lucide-react'

interface Founder {
  id: number
  name: string
  role: string
  years: string
  image: string
  bio: string
  quote: string
}

interface TimelineEvent {
  year: string
  title: string
  description: string
  highlight?: string
}

interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

const founders: Founder[] = [
  {
    id: 1,
    name: "Late Shri Karshanji Bhai Lodhiya",
    role: "Founder & Visionary Artisan",
    years: "1951 – 2019",
    image: "https://skkl.in/img/karshanji-bhai-lodhiya.jpg",
    bio: "With nothing but skilled hands, an unwavering eye for detail, and a heart full of honesty, Karshanji Bhai began SKKL in a modest workshop in Shapur, Gujarat. He believed that jewellery was never merely adornment — it was a sacred promise passed between generations.",
    quote: "A piece of jewellery is only as valuable as the trust it carries."
  },
  {
    id: 2,
    name: "Shri Kamlesh Bhai Lodhiya",
    role: "Matriarch & Keeper of Stories",
    years: "The Emotional Heart",
    image: "https://skkl.in/img/kamlesh-bhai-lodhiya.jpg",
    bio: "The quiet, radiant strength behind every family heirloom. Nirmala ji ensured that SKKL was never just a business — it was an extension of family love. Every bride who stepped into our world left not only adorned, but deeply seen and cherished.",
    quote: "Our jewellery doesn't just sparkle — it remembers every laugh, every tear, every promise."
  },
  {
    id: 3,
    name: "Hardik Lodhiya",
    role: "Third Generation Custodian & Creative Director",
    years: "2014 – Present",
    image: "https://skkl.in/img/hardik-lodhiya.jpg",
    bio: "Hardik has carried the torch into the modern era with grace and vision. He transformed SKKL into a global name while fiercely guarding the founding ethos of purity, transparency, and human connection. Under his guidance, tradition and innovation dance together beautifully.",
    quote: "We don't sell jewellery. We safeguard the stories that define families for generations."
  }
]

const timelineEvents: TimelineEvent[] = [
  {
    year: "1951",
    title: "The Seed of Trust",
    description: "Late Shri Karshanji Bhai Lodhiya opens a humble workshop in Shapur, Gujarat. With a kerosene lamp and pure gold, he begins crafting pieces that would become family heirlooms.",
    highlight: "Foundation of SKKL"
  },
  {
    year: "1968",
    title: "Family Legacy Begins",
    description: "The second generation joins. Word-of-mouth spreads across Saurashtra as families discover that SKKL means honesty, purity, and relationships that last a lifetime.",
    highlight: "Multi-generational trust established"
  },
  {
    year: "1987",
    title: "Expanding the Dream",
    description: "A larger atelier is built. SKKL becomes the trusted name for bridal trousseaus and generational wealth pieces across Gujarat and beyond.",
    highlight: "Craftsmanship scales with soul intact"
  },
  {
    year: "2008",
    title: "The Modern Chapter",
    description: "Hardik Lodhiya assumes leadership. He introduces private viewing suites, custom design ateliers, and a commitment to global standards while preserving every ancestral value.",
    highlight: "New era of excellence"
  },
  {
    year: "2019",
    title: "The Flagship Showroom",
    description: "A breathtaking flagship space opens — a sanctuary where heritage meets contemporary luxury. Families travel from across India and the world to experience SKKL.",
    highlight: "A home for stories"
  },
  {
    year: "2025",
    title: "Legacy for the Future",
    description: "Digital platforms, international collaborations, and the fourth generation being groomed. SKKL remains rooted in 1951 values while embracing tomorrow's possibilities.",
    highlight: "Forever forward, forever family"
  }
]

const coreValues: Value[] = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Unwavering Trust",
    description: "Every transaction begins and ends with transparency. No hidden costs, no compromises — only promises kept."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Timeless Craft",
    description: "Hand-finished by master karigars using techniques passed down through three generations. No shortcuts, only soul."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Family First",
    description: "We design for your children’s children. Every piece is created to become part of your family’s living history."
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: "Purity & Provenance",
    description: "BIS hallmarked gold, GIA certified diamonds, and full provenance documentation. What we promise, we deliver."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Human Luxury",
    description: "Private consultations, emotional understanding, and relationships that span decades. You are family, not a customer."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Enduring Legacy",
    description: "We build not for today’s trends, but for the stories your grandchildren will tell about the jewellery that defined their family."
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const profileVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function FoundersLegacySection() {
  return (
    <section 
      id="founders-legacy" 
      className="relative overflow-hidden bg-[#0A0806] text-[#F8F5EF] cinematic-section"
    >
      {/* Subtle gold radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A25A_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-[0.035]" />
      
      <div className="section-shell relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="eyebrow mb-4 tracking-[0.4em] text-[#C6A25A]">ESTABLISHED 1951 • SHAPUR, GUJARAT</div>
          
          <h2 className="font-display text-6xl sm:text-7xl lg:text-[92px] leading-[0.92] tracking-[-0.02em] mb-6">
            Founders <span className="gold-text">&amp; Legacy</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-[#E8CF94]/90 font-light tracking-tight">
            Three generations. One unbroken promise.<br className="hidden sm:block" /> 
            The Lodhiya family story is the soul of every piece we create.
          </p>
        </div>

        {/* Founder Profiles */}
        <div className="mb-24 lg:mb-32">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#C6A25A] to-transparent" />
            <span className="uppercase tracking-[0.3em] text-sm text-[#C6A25A]">The Family Behind the Craft</span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#C6A25A] to-transparent" />
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={founder.id}
                variants={profileVariants}
                whileHover={{ y: -12 }}
                className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_40px_120px_-20px_rgb(0,0,0)] transition-all duration-700"
              >
                {/* Image Container with Gold Frame */}
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover grayscale-[0.15] group-hover:grayscale-0 transition-all duration-1000"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                  
                  {/* Elegant gold overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 border border-[#C6A25A]/30 group-hover:border-[#C6A25A]/60 transition-colors duration-700" />
                  
                  {/* Gold accent corner */}
                  <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#C6A25A] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col">
                  <div>
                    <div className="uppercase tracking-[0.2em] text-xs text-[#C6A25A] mb-1.5">{founder.years}</div>
                    <h3 className="font-display text-3xl leading-none tracking-tight mb-1">{founder.name}</h3>
                    <p className="text-[#E8CF94] text-sm tracking-wide mb-6">{founder.role}</p>
                  </div>

                  <p className="text-[#F8F5EF]/90 text-[15px] leading-relaxed flex-1 mb-8">
                    {founder.bio}
                  </p>

                  <div className="pt-6 border-t border-white/10">
                    <p className="italic text-[#C6A25A] text-[15px] leading-snug font-light">
                      “{founder.quote}”
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* The Family Legacy Storytelling */}
        <div className="max-w-5xl mx-auto text-center mb-24 lg:mb-32 px-6">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#C6A25A]" />
            <span className="text-xs tracking-[0.35em] text-[#C6A25A]">A LIVING HERITAGE</span>
            <div className="h-px w-8 bg-[#C6A25A]" />
          </div>

          <h3 className="font-display text-5xl sm:text-6xl tracking-tight leading-none mb-8">
            Every heirloom we create<br />carries the weight of<br />our ancestors’ dreams.
          </h3>

          <div className="max-w-3xl mx-auto text-xl text-[#E8CF94]/90 leading-relaxed font-light">
            From the first flicker of a kerosene lamp in 1951 to the quiet elegance of our flagship atelier today, 
            the Lodhiya family has never measured success in carats or sales figures — only in the number of families 
            who return generation after generation, trusting us with their most precious moments.
          </div>
        </div>

        {/* Animated Timeline */}
        <div className="mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <div className="eyebrow mb-3">75+ YEARS OF UNBROKEN PROMISE</div>
            <h3 className="font-display text-5xl sm:text-[56px] tracking-[-0.015em]">The Journey of SKKL</h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Gold Line */}
            <div className="absolute left-1/2 top-12 bottom-12 w-px -translate-x-1/2 bg-gradient-to-b from-[#C6A25A]/30 via-[#C6A25A] to-[#C6A25A]/30 hidden lg:block" />

            <div className="space-y-16 lg:space-y-24">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center z-20">
                    <div className="w-5 h-5 rounded-full border-[3px] border-[#C6A25A] bg-[#0A0806]" />
                    <div className="absolute w-9 h-9 rounded-full border border-[#C6A25A]/40 animate-ping" />
                  </div>

                  {/* Year Marker (Mobile + Desktop) */}
                  <div className={`lg:w-1/2 flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                    <div className="inline-flex items-center justify-center rounded-full border border-[#C6A25A]/60 bg-black/60 px-8 py-1.5 text-sm tracking-[0.2em] text-[#C6A25A] font-mono">
                      {event.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="lg:w-1/2 w-full max-w-xl">
                    <div className="rounded-3xl border border-white/10 bg-black/50 backdrop-blur-2xl p-9 lg:p-11 group hover:border-[#C6A25A]/40 transition-all duration-500">
                      <div className="flex items-start gap-4 mb-5">
                        <div className="mt-1 text-[#C6A25A]">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-display text-3xl tracking-tight mb-3 group-hover:text-[#E8CF94] transition-colors">
                            {event.title}
                          </h4>
                          {event.highlight && (
                            <div className="inline-block text-xs uppercase tracking-[0.25em] text-[#C6A25A] bg-[#C6A25A]/10 px-4 py-px rounded-full mb-4">
                              {event.highlight}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-[#F8F5EF]/85 leading-relaxed text-[15px]">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <div className="eyebrow mb-4">WHAT WE STAND FOR</div>
            <h3 className="font-display text-5xl tracking-tight">The Values That Define Us</h3>
            <p className="mt-4 max-w-md mx-auto text-[#E8CF94]/80">Six principles, passed from father to son, that no amount of success can ever change.</p>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group rounded-3xl border border-white/10 bg-black/40 p-9 lg:p-10 flex flex-col hover:border-[#C6A25A]/50 transition-all duration-500"
              >
                <div className="text-[#C6A25A] mb-8 group-hover:scale-110 transition-transform duration-500 w-fit">
                  {value.icon}
                </div>
                <h4 className="font-display text-3xl tracking-tight mb-5">{value.title}</h4>
                <p className="text-[#F8F5EF]/85 leading-relaxed flex-1 text-[15px]">
                  {value.description}
                </p>
                <div className="mt-8 h-px w-12 bg-gradient-to-r from-[#C6A25A] to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Emotional Closing CTA */}
        <div className="relative rounded-[28px] overflow-hidden border border-[#C6A25A]/20 bg-black/60 py-20 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A25A]/40">
              <Crown className="w-8 h-8 text-[#C6A25A]" />
            </div>

            <h3 className="font-display text-4xl sm:text-5xl tracking-tight mb-6 leading-none">
              This is not just our story.<br />It is yours too.
            </h3>
            
            <p className="text-xl text-[#E8CF94]/90 max-w-xl mx-auto mb-10 font-light">
              When you choose SKKL, you become part of a lineage that began with a single honest promise in 1951. 
              Your story deserves to be told in gold.
            </p>

            <a 
              href="#catalogue" 
              className="gold-button group inline-flex items-center gap-3 text-sm"
            >
              BEGIN YOUR LEGACY
              <ArrowRight className="w-4 h-4 transition-transform group-hover:-rotate-45" />
            </a>
          </div>

          {/* Decorative gold lines */}
          <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C6A25A]/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C6A25A]/30 to-transparent" />
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0806] to-transparent pointer-events-none" />
    </section>
  )
}
