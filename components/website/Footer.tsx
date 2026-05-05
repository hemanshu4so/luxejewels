'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/catalogue' },
    { name: 'Bespoke', href: '/custom' },
    { name: 'Our Story', href: '/about' },
    { name: 'Rates', href: '/rates' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'YouTube', href: '#', icon: Youtube },
  ],
}

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-t from-charcoal/95 to-charcoal text-white relative overflow-hidden"
    >
      {/* Gold wave background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(230,184,0,0.08),transparent)]" />
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-gold-lg flex-shrink-0">
                  <span className="font-display text-lg font-bold text-white drop-shadow-glow">LJ</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2 gold-text">LuxeJewels</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Timeless elegance since 1987. Crafted for generations.</p>
                </div>
              </motion.div>
              <div className="flex gap-4">
                {navigation.social.map((platform, i) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gold-500/20 transition-all duration-300"
                  >
                    <platform.icon className="w-5 h-5 text-gold-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 gold-text">Explore</h4>
              <ul className="space-y-3">
                {navigation.main.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-gold-300 hover:translate-x-2 transition-all duration-300 text-sm block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-6 gold-text">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/rates" className="text-white/70 hover:text-gold-300 hover:translate-x-2 transition-all duration-300 text-sm block">Today&apos;s Rates</Link></li>
                <li><Link href="/custom" className="text-white/70 hover:text-gold-300 hover:translate-x-2 transition-all duration-300 text-sm block">Bespoke Design</Link></li>
                <li><Link href="/wishlist" className="text-white/70 hover:text-gold-300 hover:translate-x-2 transition-all duration-300 text-sm block">Wishlist</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-gold-300 hover:translate-x-2 transition-all duration-300 text-sm block">Jewellery Care</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 gold-text">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-gold-400 flex-shrink-0" />
                  <div>
                    <p className="text-white/70 text-sm font-medium">+91 98765 43210</p>
                    <p className="text-xs text-white/50">10AM - 8PM Daily</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-gold-400 flex-shrink-0" />
                  <p className="text-white/70 text-sm">123 Jewelry Street, Mumbai MH 400001</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-gold-400 flex-shrink-0" />
                  <Link href="mailto:hello@luxejewels.com" className="text-white/70 text-sm hover:text-gold-300 transition-colors">hello@luxejewels.com</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-12 mt-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white/60 text-sm order-2 md:order-1">
                © {new Date().getFullYear()} LuxeJewels. All rights reserved. | Crafted with ❤️ in India
              </p>
              <div className="flex items-center gap-6 order-1 md:order-none">
                <Link href="/privacy" className="text-white/60 hover:text-gold-300 text-sm transition-colors">Privacy</Link>
                <Link href="/terms" className="text-white/60 hover:text-gold-300 text-sm transition-colors">Terms</Link>
                <Link href="/contact" className="text-white/60 hover:text-gold-300 text-sm transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
