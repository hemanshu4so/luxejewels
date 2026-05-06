'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import ProductForm from '@/components/admin/ProductForm'

export default function NewProduct() {
  return (
    <AdminLayout title="New Product">
      <ProductForm mode="create" />
    </AdminLayout>
  )
}
