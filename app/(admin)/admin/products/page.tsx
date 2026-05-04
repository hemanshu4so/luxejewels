'use client'

import Link from 'next/link'
import AdminLayout from '@/components/admin/AdminLayout'
import ProductForm from '@/components/admin/ProductForm'
import { useProducts } from '@/hooks/useProducts'
import { Plus, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function AdminProducts() {
  const { products, loading } = useProducts()

  return (
    <AdminLayout title="Products">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Link href="/admin/dashboard" className="p-2 hover:bg-gray-100 rounded-xl">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="font-display text-2xl font-semibold">Products</h1>
        </div>

        <div className="grid gap-6">
          <div className="bg-white dark:bg-charcoal/60 rounded-2xl p-6 border border-gray-100">
            <ProductForm />
          </div>
          
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Product List</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              products.map(product => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted">{product.category} • {product.weight}g</p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/products/${product.id}/edit`}>Edit</Link>
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

