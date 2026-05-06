import ProductCard from './ProductCard'
import { mockProducts } from '@/lib/luxury-data'

export default function FeaturedCollections() {
  return (
    <section className="section-shell py-24 sm:py-28">
      <p className="eyebrow">Featured</p>
      <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {mockProducts.filter((product) => product.featured).slice(0, 4).map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
