import ProductCard from "@/components/website/ProductCard"

export default function CataloguePage() {
  const products = [
    { id: 1, name: "Gold Ring" },
    { id: 2, name: "Diamond Necklace" },
    { id: 3, name: "Silver Bracelet" }
  ]

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Catalogue</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}