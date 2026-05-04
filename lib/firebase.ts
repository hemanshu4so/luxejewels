// Firebase disabled - no crashes
export const db = { collection: () => ({}), doc: () => ({}) } as any
export const storage = null
export const auth = null
export const analytics = null

export const mockProducts = [
  { id: '1', name: 'Royal Bridal Necklace Set', slug: 'royal-bridal-set', category: 'bridal' as const, images: ['/images/placeholder.jpg'], weight: 25.5, price: 125000, showPrice: true, description: 'Luxury bridal set', tags: ['bridal', 'set'], occasion: ['wedding'], material: 'Gold', purity: '22K', inStock: true, featured: true, views: 1250 },
  { id: '2', name: 'Polki Kundan Necklace', slug: 'polki-kundan-necklace', category: 'kundan' as const, images: ['/images/placeholder.jpg'], weight: 32.1, price: 185000, showPrice: true, description: 'Traditional polki design', tags: ['kundan', 'necklace'], occasion: ['wedding'], material: 'Gold + Polki', purity: '22K', inStock: true, featured: true, views: 890 },
  { id: '3', name: 'Diamond Solitaire Ring', slug: 'diamond-solitaire-ring', category: 'diamond' as const, images: ['/images/placeholder.jpg'], weight: 4.8, price: 245000, showPrice: true, description: '1 carat solitaire', tags: ['diamond', 'ring'], occasion: ['engagement'], material: 'Platinum + Diamond', purity: 'VVS1', inStock: true, featured: true, views: 2100 },
  { id: '4', name: 'Gold Temple Bangles Set', slug: 'gold-temple-bangles', category: 'gold' as const, images: ['/images/placeholder.jpg'], weight: 18.2, price: 85000, showPrice: true, description: 'Set of 4 bangles', tags: ['bangles', 'temple'], occasion: ['wedding'], material: 'Gold', purity: '22K', inStock: true, featured: false, views: 450 },
  { id: '5', name: 'Pearl & Diamond Chandbali', slug: 'pearl-diamond-chandbali', category: 'diamond' as const, images: ['/images/placeholder.jpg'], weight: 12.5, price: 95000, showPrice: true, description: 'South sea pearls', tags: ['earrings', 'chandbali'], occasion: ['festive'], material: 'White Gold', purity: '18K', inStock: true, featured: true, views: 320 },
  { id: '6', name: 'Platinum Wedding Band', slug: 'platinum-wedding-band', category: 'platinum' as const, images: ['/images/placeholder.jpg'], weight: 6.3, price: 125000, showPrice: true, description: 'Lifetime warranty', tags: ['ring', 'wedding'], occasion: ['wedding'], material: 'Platinum', purity: '950', inStock: true, featured: false, views: 180 },
  { id: '7', name: 'Silver Anklets', slug: 'silver-anklets', category: 'silver' as const, images: ['/images/placeholder.jpg'], weight: 42.0, price: 3500, showPrice: true, description: 'Payal set', tags: ['anklets', 'payal'], occasion: ['daily-wear'], material: 'Silver', purity: '92.5', inStock: true, featured: false, views: 290 },
  { id: '8', name: 'Rose Gold Hoops', slug: 'rose-gold-hoops', category: 'gold' as const, images: ['/images/placeholder.jpg'], weight: 8.1, price: 28000, showPrice: true, description: 'Modern hoops', tags: ['hoops', 'earrings'], occasion: ['party'], material: 'Rose Gold', purity: '18K', inStock: true, featured: true, views: 670 }
]

export const mockRates = {
  id: 'rates-1',
  gold22k: 7200,
  gold24k: 7850,
  silver: 85,
  updatedAt: new Date().toISOString(),
  updatedBy: 'admin'
}
