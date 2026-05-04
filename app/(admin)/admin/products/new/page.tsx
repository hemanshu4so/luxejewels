'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import ProductForm from '@/components/admin/ProductForm'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { Product } from '@/types'

export default function NewProduct() {
  const handleSubmit = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'views'>) => {
    await addDoc(collection(db, 'products'), {
      ...productData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0
    })
    window.location.href = '/admin/products'
  }

  return (
    <AdminLayout title="New Product">
      <ProductForm onSubmit={handleSubmit} />
    </AdminLayout>
  )
}

