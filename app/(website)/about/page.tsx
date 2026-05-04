'use client'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-cream to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-6 gold-text">
            Our Story
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Crafted with love since 1987. Three generations of jewellery artisans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-display text-3xl font-light mb-6">
              Heritage & Craftsmanship
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              From the bustling markets of Jaipur to modern showrooms, our family has been creating timeless pieces 
              for over 35 years. Every jewel is handcrafted with traditional techniques passed down through generations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                <span>BIS Hallmarked Gold</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                <span>IGI Certified Diamonds</span>
              </div>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-r from-gold-100 to-cream rounded-2xl"></div>
        </div>

        <div className="text-center">
          <a href="/catalogue" className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-gold-lg">
            Discover Our Collections →
          </a>
        </div>
      </div>
    </div>
  )
}
