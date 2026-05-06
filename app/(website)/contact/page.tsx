'use client'

import { motion } from 'framer-motion'
import { CalendarDays, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { getWhatsappUrl, showroom } from '@/lib/luxury-data'

const contactCards = [
  { icon: Phone, title: 'Call', value: showroom.phone, href: `tel:${showroom.phone.replace(/\s/g, '')}` },
  { icon: MessageCircle, title: 'WhatsApp', value: 'Private concierge chat', href: getWhatsappUrl('Hi SKKL Jewellers, I would like to speak with your concierge.') },
  { icon: Mail, title: 'Email', value: showroom.email, href: `mailto:${showroom.email}` },
  { icon: MapPin, title: 'Showroom', value: 'Get directions', href: showroom.mapUrl },
]

export default function ContactPage() {
  return (
    <div className="bg-[#fbf6ec] text-charcoal">
      <section className="relative overflow-hidden bg-[#15120f] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(216,183,106,0.18),transparent_32%)]" />
        <div className="section-shell relative">
          <p className="eyebrow text-[#e7cf8e]">Visit showroom</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">A private jewellery salon for life&apos;s defining moments.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">Book bridal styling, bespoke design, rate guidance, repair review, or a quiet catalogue viewing with SKKL consultants.</p>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ icon: Icon, title, value, href }, index) => (
            <motion.a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[8px] border border-gold-700/16 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(26,26,26,0.08)]">
              <Icon className="text-gold-800" size={26} />
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-charcoal/42">{title}</p>
              <p className="mt-2 font-display text-2xl leading-tight">{value}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.form id="appointment" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[8px] border border-gold-700/16 bg-white/72 p-7 shadow-[0_26px_78px_rgba(26,26,26,0.08)] lg:p-10">
            <div className="mb-8">
              <p className="eyebrow">Appointment request</p>
              <h2 className="mt-3 font-display text-4xl">Tell us what you are looking for.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <input required placeholder="Full name" className="h-13 rounded-[8px] border border-charcoal/10 bg-[#fffaf0] px-4 py-3 outline-none transition focus:border-gold-700" />
              <input required type="tel" placeholder="Phone number" className="h-13 rounded-[8px] border border-charcoal/10 bg-[#fffaf0] px-4 py-3 outline-none transition focus:border-gold-700" />
              <input type="email" placeholder="Email address" className="h-13 rounded-[8px] border border-charcoal/10 bg-[#fffaf0] px-4 py-3 outline-none transition focus:border-gold-700 md:col-span-2" />
              <select className="h-13 rounded-[8px] border border-charcoal/10 bg-[#fffaf0] px-4 py-3 outline-none transition focus:border-gold-700">
                <option>Bridal consultation</option>
                <option>Bespoke jewellery</option>
                <option>Catalogue viewing</option>
                <option>Gold and silver rates</option>
                <option>Repair or redesign</option>
              </select>
              <input type="date" className="h-13 rounded-[8px] border border-charcoal/10 bg-[#fffaf0] px-4 py-3 outline-none transition focus:border-gold-700" />
              <textarea required placeholder="Share your preferred metal, occasion, budget range, or design references." className="min-h-36 rounded-[8px] border border-charcoal/10 bg-[#fffaf0] px-4 py-3 outline-none transition focus:border-gold-700 md:col-span-2" />
            </div>
            <button type="submit" className="gold-button mt-7">
              <Send size={17} />
              Send enquiry
            </button>
          </motion.form>

          <div className="grid gap-5">
            <div className="rounded-[8px] border border-charcoal/10 bg-[#15120f] p-7 text-white">
              <CalendarDays className="text-[#e7cf8e]" size={28} />
              <h3 className="mt-5 font-display text-4xl">{showroom.name}</h3>
              <p className="mt-4 leading-7 text-white/62">{showroom.address}</p>
              <div className="mt-6 flex items-center gap-2 text-white/72">
                <Clock size={17} />
                {showroom.hours}
              </div>
            </div>
            <a href={showroom.mapUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-[8px] border border-gold-700/16 bg-[#e9dec9] shadow-sm">
              <div className="flex min-h-[300px] items-center justify-center bg-[linear-gradient(135deg,#ded0b6,#fff7e8_45%,#c6a867)] p-8 text-center">
                <div>
                  <MapPin className="mx-auto text-gold-900" size={36} />
                  <p className="mt-4 font-display text-3xl">Open Google Maps</p>
                  <p className="mt-2 text-sm text-charcoal/58">SKKL Jewellers showroom directions</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
