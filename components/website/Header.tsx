'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Calendar, Heart, Menu, Search, X } from 'lucide-react'
import { useRates } from '@/hooks/useRates'
import { useWishlist } from '@/hooks/useWishlist'
import RatesTicker from './RatesTicker'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Heritage' },
  { href: '/catalogue', label: 'Collections' },
  { href: '/custom', label: 'Atelier' },
  { href: '/rates', label: 'Rates' },
  { href: '/contact', label: 'Showroom' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const { rates } = useRates()
  const { count } = useWishlist()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <div className="bg-[#11100e] py-1.5 text-xs text-gold-400">
        <RatesTicker rates={rates} />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-[#C6A25A]/18 bg-[#fffaf0]/92 py-3 shadow-[0_14px_40px_rgba(17,16,14,0.08)] backdrop-blur-xl'
            : 'border-b border-transparent bg-[#fbf6ec]/80 py-5 backdrop-blur-md sm:py-6'
        }`}
      >
        <div className="section-shell">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex shrink-0 flex-col items-start">
              <span className="font-display text-2xl font-semibold uppercase tracking-[0.16em] text-[#15120d]">SKKL</span>
              <span className="text-[9px] font-medium uppercase tracking-[0.34em] text-gold-700">Jewellers - Est. 1951</span>
            </Link>

            <nav className="hidden items-center gap-9 xl:gap-11 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-500 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gradient-to-r after:from-gold-400 after:to-gold-700 after:transition-all after:duration-500 ${
                    pathname === link.href
                      ? 'text-gold-700 after:w-full'
                      : 'text-charcoal/72 after:w-0 hover:text-gold-700 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              <button onClick={() => setSearchOpen(true)} className="rounded-full p-2.5 transition duration-500 hover:bg-black/5 hover:text-gold-700" aria-label="Search">
                <Search size={18} />
              </button>

              <Link href="/wishlist" className="relative rounded-full p-2.5 transition duration-500 hover:bg-black/5 hover:text-gold-700">
                <Heart size={18} />
                {count > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-600 text-[10px] font-bold text-white">
                    {count}
                  </span>
                )}
              </Link>

              <Link href="/contact#appointment" className="hidden min-h-10 items-center gap-2 rounded-full border border-charcoal/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition duration-500 hover:border-gold-600 hover:bg-white/60 hover:text-gold-700 sm:inline-flex">
                <Calendar size={15} />
                Visit
              </Link>

              <button onClick={() => setMenuOpen((open) => !open)} className="rounded-full p-2.5 transition duration-500 hover:bg-black/5 hover:text-gold-700 lg:hidden" aria-label="Menu">
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: 'easeOut' }} className="border-t border-gold-200/30 bg-[#fffaf0]/96 backdrop-blur-xl lg:hidden">
              <nav className="flex flex-col gap-3 px-6 py-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-[8px] border border-gold-100/40 px-4 py-3 text-base font-medium transition ${pathname === link.href ? 'bg-gold-50 text-gold-700' : 'text-charcoal hover:bg-white/70'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 pt-24 backdrop-blur-sm" onClick={() => setSearchOpen(false)}>
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} className="mx-4 w-full max-w-2xl rounded-2xl border border-white/60 bg-[#fffaf0] p-6 shadow-luxury" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center gap-3">
                <Search className="text-gold-600" size={22} />
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search bridal polki, solitaire rings, temple gold..."
                  className="w-full bg-transparent font-serif text-lg outline-none placeholder:text-muted/60"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && searchQuery.trim()) {
                      window.location.href = `/catalogue?search=${encodeURIComponent(searchQuery.trim())}`
                      setSearchOpen(false)
                    }
                    if (event.key === 'Escape') setSearchOpen(false)
                  }}
                />
                <button onClick={() => setSearchOpen(false)} aria-label="Close search">
                  <X size={20} className="text-muted transition-colors hover:text-charcoal" />
                </button>
              </div>
              <p className="mt-3 pl-8 text-xs text-muted">Press Enter to search the SKKL catalogue.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
