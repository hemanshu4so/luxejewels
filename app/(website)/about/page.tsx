import Image from 'next/image'

const milestones = [
  { year: '1987', text: 'LuxeJewels founded with a vision for timeless craftsmanship.' },
  { year: '2002', text: 'Expanded into bridal heirloom collections with custom atelier services.' },
  { year: '2018', text: 'Introduced contemporary diamond lines for modern celebrations.' },
  { year: '2026', text: 'Continuing our legacy with sustainable sourcing and fine artistry.' },
]

export default function AboutPage() {
  return (
    <main className="bg-[#FAF7F2] py-20">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#c49a00]">Our Heritage</p>
          <h1 className="mt-4 font-playfair text-4xl text-[#1A1A1A] sm:text-5xl">A Legacy of Craft, Passed Through Generations</h1>
          <p className="mt-6 text-lg leading-relaxed text-[#1A1A1A]/75">For nearly four decades, we have crafted jewellery that marks life&apos;s most precious moments, blending heritage techniques with contemporary elegance.</p>
        </div>
        <div className="relative h-[440px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(26,26,26,0.16)]">
          <Image src="/images/placeholder.jpg" alt="LuxeJewels heritage" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6">
        <h2 className="font-playfair text-3xl text-[#1A1A1A]">Our Timeline</h2>
        <div className="mt-8 space-y-6 border-l border-[#c49a00]/40 pl-8">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="relative rounded-xl bg-white/70 p-6 shadow-sm">
              <span className="absolute -left-[41px] top-7 h-4 w-4 rounded-full bg-gradient-to-r from-[#e6b800] to-[#c49a00]" />
              <p className="font-playfair text-2xl text-[#1A1A1A]">{milestone.year}</p>
              <p className="mt-2 text-[#1A1A1A]/75">{milestone.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
