'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import RatesForm from '@/components/admin/RatesForm'

export default function AdminRatesPage() {
  return (
    <AdminLayout title="Metal Rates">
      <div className="max-w-3xl rounded-3xl border bg-white p-8 shadow-sm dark:bg-charcoal/60">
        <h2 className="font-display text-3xl font-bold">Update live rates</h2>
        <p className="mt-2 text-sm text-muted">Set SKKL showroom guidance rates for gold and silver.</p>
        <div className="mt-8">
          <RatesForm />
        </div>
      </div>
    </AdminLayout>
  )
}
