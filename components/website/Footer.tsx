import Link from 'next/link'
import { ArrowRight, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { showroom } from '@/lib/luxury-data'

const columns = [
  {
    title: 'House',
    links: [
      ['Our Heritage', '/about'],
      ['Collections', '/catalogue'],
      ['Bespoke Atelier', '/custom'],
      ['Metal Rates', '/rates'],
    ],
  },
  {
    title: 'Concierge',
    links: [
      ['Visit Showroom', '/contact'],
      ['Private Appointment', '/contact#appointment'],
      ['WhatsApp Enquiry', '/contact'],
      ['Wishlist', '/wishlist'],
    ],
  },
] satisfies Array<{ title: string; links: Array<[string, string]> }>

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F0F0F] text-[#f8f1e4]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(198,162,90,0.16),transparent_28%)]" />
      <div className="section-shell relative grid gap-12 py-16 lg:grid-cols-[1.2fr_0.72fr_0.72fr_1.05fr]">
        <div>
          <Link href="/" className="font-display text-4xl tracking-wide">SKKL Jewellers</Link>
          <p className="mt-3 text-xs uppercase tracking-[0.32em] text-[#d8b76a]">The Magnificent Indian Jeweller Since 1951</p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">
            Soni Karshanji Kurji Lodhiya is a Shapur jewellery house built on heritage craft, family trust, purity, and emotional luxury.
          </p>
          <div className="mt-8 flex gap-3">
            {[Instagram, Phone, Mail].map((Icon, index) => (
              <span key={index} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-[#d8b76a]">
                <Icon size={17} />
              </span>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">{column.title}</p>
            <div className="mt-5 grid gap-3">
              {column.links.map(([label, href]) => (
                <Link key={label} href={href} className="text-sm text-white/72 transition hover:text-[#d8b76a]">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-[8px] border border-[#C6A25A]/18 bg-white/[0.045] p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">Heritage notes</p>
          <h3 className="mt-5 font-display text-3xl leading-tight text-[#F8E6B1]">Receive the SKKL private edit.</h3>
          <p className="mt-3 text-sm leading-7 text-white/56">Bridal launches, custom design stories, rate clarity, and showroom moments.</p>
          <div className="mt-6 flex overflow-hidden rounded-full border border-white/12 bg-black/24">
            <input aria-label="Email address" type="email" placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/36" />
            <button type="button" aria-label="Subscribe" className="flex w-12 items-center justify-center bg-[#C6A25A] text-[#2B1810]">
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 lg:col-span-4">
          <div className="flex flex-col gap-4 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
            <p>© 2026 SKKL Jewellers. Trust built across generations.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="inline-flex items-center gap-2"><MapPin size={15} />{showroom.address}</span>
              <span>{showroom.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
