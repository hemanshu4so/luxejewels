'use client'

import { useState, useEffect } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import ProductForm from '@/components/admin/ProductForm'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useParams } from 'next/navigation'
import type { Product } from '@/types'

export default function EditProduct() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  const productId = params.id as string

  useEffect(() => {
    if (productId) {
      getDoc(doc(db, 'products', productId)).then((snap) => {
        if (snap.exists()) {
          setProduct({ id: snap.id, ...snap.data() } as Product)
        }
        setLoading(false)
      })
    }
  }, [productId])

  if (loading) return <div>Loading...</div>
  if (!product) return <div>Product not found</div>

  return (
    <AdminLayout title="Edit Product">
      <ProductForm product={product} mode="edit" />
    </AdminLayout>
  )
}
