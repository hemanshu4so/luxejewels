'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, MessageCircle, Send } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 relative z-10"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6 leading-none">
            Visit Us
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted max-w-2xl mx-auto leading-relaxed">
            Discover timeless elegance in our luxurious showroom.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-3xl hover:scale-[1.02] hover:shadow-luxury transition-all duration-500 cursor-pointer group"
          >
            <div className="w-20 h-20 bg-gold-100/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
              <Phone className="w-10 h-10 text-gold-500 group-hover:text-gold-600" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-3 text-charcoal group-hover:text-gold-600 transition-colors">
              Call Us
            </h3>
            <a href="tel:+919876543210" className="text-2xl font-bold gold-shimmer block hover:scale-105 transition-transform">
              +91 98765 43210
            </a>
            <p className="text-muted text-sm mt-2">10AM - 8PM Daily</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-3xl hover:scale-[1.02] hover:shadow-luxury transition-all duration-500 cursor-pointer group"
          >
            <div className="w-20 h-20 bg-green-100/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200/50 transition-colors">
              <MessageCircle className="w-10 h-10 text-green-500 group-hover:text-green-600" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-3 text-charcoal group-hover:text-green-600 transition-colors">
              WhatsApp
            </h3>
            <a 
              href="https://wa.me/919876543210?text=Hi%20LuxeJewels!"
              target="_blank"
              className="block mx-auto w-fit bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-2xl font-bold hover:shadow-gold-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              Start Chat
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-3xl hover:scale-[1.02] hover:shadow-luxury transition-all duration-500"
          >
            <div className="w-20 h-20 bg-blue-100/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-blue-200/50 transition-colors">
              <MapPin className="w-10 h-10 text-blue-500 hover:text-blue-600" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-3 text-charcoal">
              Showroom
            </h3>
            <div className="text-charcoal space-y-1 mb-4">
              <p className="font-semibold">LuxeJewels Gallery</p>
              <p className="text-muted text-sm">123 Jewelry Street</p>
              <p className="text-muted text-sm">Mumbai, MH 400001</p>
            </div>
            <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-1 text-gold-500 hover:text-gold-600 font-semibold text-sm hover:underline transition-all">
              Directions →
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-3xl hover:scale-[1.02] hover:shadow-luxury transition-all duration-500 cursor-pointer group"
          >
            <div className="w-20 h-20 bg-gray-100/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200/50">
              <Mail className="w-10 h-10 text-gray-500 group-hover:text-gray-600" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-3 text-charcoal">
              Email Us
            </h3>
            <a href="mailto:hello@luxejewels.com" className="block text-lg font-medium text-charcoal hover:text-gold-600 transition-colors group-hover:underline">
              hello@luxejewels.com
            </a>
            <p className="text-muted text-sm mt-1">Replies within 2 hours</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-dark p-10 lg:p-16 rounded-3xl shadow-luxury">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-white/80 text-lg max-w-md mx-auto">
                We'd love to hear about your dream piece. Our experts will guide you.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-gold-400 focus:ring-2 focus:ring-gold-200/50 text-white placeholder-white/50 transition-all h-14"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-gold-400 focus:ring-2 focus:ring-gold-200/50 text-white placeholder-white/50 transition-all h-14"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/80 mb-3">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-gold-400 focus:ring-2 focus:ring-gold-200/50 text-white placeholder-white/50 transition-all resize-vertical font-light"
                  placeholder="Tell us about the perfect piece you're looking for..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal py-5 px-8 rounded-2xl font-display font-semibold text-xl shadow-2xl hover:shadow-gold-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                Send Your Enquiry
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
