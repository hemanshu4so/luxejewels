'use client'

import { useState, useEffect } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import ProductForm from '@/components/admin/ProductForm'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useParams, useRouter } from 'next/navigation'
import type { Product } from '@/types'

export default function EditProduct() {
  const params = useParams()
  const router = useRouter()
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

  const handleUpdate = async (updatedProduct: Omit<Product, 'createdAt' | 'updatedAt'>) => {
    if (product) {
      await updateDoc(doc(db, 'products', product.id), {
        ...updatedProduct,
        updatedAt: new Date().toISOString()
      })
      router.push('/admin/products')
    }
  }

  if (loading) return <div>Loading...</div>
  if (!product) return <div>Product not found</div>

  return (
    <AdminLayout title="Edit Product">
      <ProductForm product={product} onSubmit={handleUpdate} />
    </AdminLayout>
  )
}

