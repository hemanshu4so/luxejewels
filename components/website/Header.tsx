// TODO: implement
'use client'

import { useState, useEffect }                from 'react'
import Link                                    from 'next/link'
import { usePathname }                         from 'next/navigation'
import { motion, AnimatePresence }             from 'framer-motion'
import { Menu, X, Heart, Search, Sun, Moon }   from 'lucide-react'
import { useRates }                            from '@/hooks/useRates'
import { useWishlist }                         from '@/hooks/useWishlist'
import { useTheme }                            from 'next-themes'
import RatesTicker                             from './RatesTicker'

const navLinks = [
  { href: '/',          label: 'Home'            },
  { href: '/about',     label: 'Our Story'       },
  { href: '/catalogue', label: 'Collections'     },
  { href: '/custom',    label: 'Bespoke'         },
  { href: '/rates',     label: "Today's Rates"   },
  { href: '/contact',   label: 'Visit Us'        },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [searchOpen,  setSearchOpen]  = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const { rates }   = useRates()
  const { count }   = useWishlist()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* ── Gold Ticker Bar ── */}
      <div className="bg-charcoal text-gold-400 text-xs py-1.5 overflow-hidden">
        <RatesTicker rates={rates} />
      </div>

      {/* ── Main Header ── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          sticky top-0 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-white/90 dark:bg-charcoal/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3'
            : 'bg-transparent py-5'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ── Logo ── */}
            <Link href="/" className="flex flex-col items-start group">
              <span className="font-display text-2xl font-bold gold-text tracking-widest uppercase">
                LuxeJewels
              </span>
              <span className="text-[9px] tracking-[0.4em] text-muted uppercase font-light">
                Est. 1987 · Crafted with Love
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative text-sm font-medium tracking-wide transition-colors duration-300
                    after:absolute after:bottom-[-4px] after:left-0 after:h-[1px]
                    after:bg-gradient-to-r after:from-gold-400 after:to-gold-600
                    after:transition-all after:duration-300
                    ${pathname === link.href
                      ? 'text-gold-600 after:w-full'
                      : 'text-charcoal dark:text-cream hover:text-gold-600 after:w-0 hover:after:w-full'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ── Action Icons ── */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:text-gold-600 transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {/* Wishlist */}
              <Link href="/wishlist" className="relative p-2 hover:text-gold-600 transition-colors">
                <Heart size={18} />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    {count}
                  </span>
                )}
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 hover:text-gold-600 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 hover:text-gold-600 transition-colors"
                aria-label="Menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 dark:bg-charcoal/95 backdrop-blur-xl border-t border-gold-200/30"
            >
              <nav className="flex flex-col py-4 px-6 gap-4">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      py-2 text-base font-medium border-b border-gold-100/30
                      ${pathname === link.href ? 'text-gold-600' : 'text-charcoal dark:text-cream'}
                    `}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Search Overlay ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0,   opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="glass bg-white dark:bg-charcoal rounded-2xl p-6 w-full max-w-2xl mx-4 shadow-luxury"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <Search className="text-gold-500" size={22} />
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search rings, necklaces, bridal sets..."
                  className="w-full bg-transparent text-lg outline-none font-serif placeholder:text-muted/60"
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      window.location.href = `/catalogue?search=${searchQuery}`
                      setSearchOpen(false)
                    }
                    if (e.key === 'Escape') setSearchOpen(false)
                  }}
                />
                <button onClick={() => setSearchOpen(false)}>
                  <X size={20} className="text-muted hover:text-charcoal transition-colors" />
                </button>
              </div>
              <p className="text-xs text-muted mt-3 pl-8">
                Press <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-[10px] font-mono">Enter</kbd> to search
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}