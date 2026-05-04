'use client'

export default function CustomPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-cream to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Bespoke Jewellery
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Your vision, our craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-display text-3xl font-light mb-8">
              Create Something Unique
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2" />
                Design your dream piece with our artisans
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2" />
                Premium materials - hallmarked gold & certified diamonds
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2" />
                Perfect fit guarantee with 3D modelling
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2" />
                Lifetime service & polishing warranty
              </li>
            </ul>
          </div>
          <div className="relative h-96 bg-gradient-to-r from-gold-100 via-cream to-gold-100 rounded-3xl shadow-luxury" />
        </div>

        <div className="text-center">
          <a href="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-gold-lg hover:shadow-gold-lg hover:scale-105 transition-all">
            Start Your Custom Design →
          </a>
        </div>
      </div>
    </div>
  )
}
