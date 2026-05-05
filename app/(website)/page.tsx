import Header from '@/components/website/Header'
import HeroSection from '@/components/website/HeroSection'
import Footer from '@/components/website/Footer'
import WhatsAppButton from '@/components/website/WhatsAppButton'

export default function HomePage() {
  return (
    <div className="bg-[#FAF7F2] text-[#1A1A1A]">
      <Header />
      <HeroSection />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {['Master Craftsmanship', 'Certified Excellence', 'Bespoke Luxury'].map((title) => (
            <div key={title} className="rounded-2xl border border-[#e6b800]/20 bg-white/70 p-8 shadow-sm backdrop-blur">
              <h3 className="font-playfair text-2xl">{title}</h3>
              <p className="mt-3 text-[#1A1A1A]/70">Curated jewellery with exceptional finishing, timeless silhouettes, and unmatched attention to detail.</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
