'use client'

import { useState, useEffect } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { useEnquiries } from '@/hooks/useEnquiries'
import { Button } from '@/components/ui/Button'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function AdminEnquiries() {
  const { enquiries, loading, error, refetch } = useEnquiries()
  
  return (
    <AdminLayout title="Enquiries">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Link href="/admin/dashboard" className="p-2 hover:bg-gray-100 rounded-xl">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="font-display text-2xl font-semibold">Customer Enquiries</h1>
          <Button onClick={refetch} variant="outline" className="ml-auto">
            Refresh
          </Button>
        </div>

        {loading ? (
          <div>Loading enquiries...</div>
        ) : error ? (
          <div className="text-red-500 p-4 bg-red-50 rounded-xl">{error}</div>
        ) : (
          <div className="grid gap-4">
            {enquiries.map(enquiry => (
              <div key={enquiry.id} className="p-6 bg-white dark:bg-charcoal/60 rounded-2xl border border-gray-100">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center text-white font-bold">
                    {enquiry.name[0].toUpperCase()}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold">{enquiry.name}</h3>
                    <p className="text-sm text-muted">{enquiry.message.substring(0, 150)}...</p>
                    {enquiry.productName && (
                      <p className="text-xs text-gold-600">Product: {enquiry.productName}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      enquiry.status === 'new' ? 'bg-green-100 text-green-700' :
                      enquiry.status === 'read' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {enquiry.status}
                    </span>
                    <p className="text-xs text-muted mt-1">{new Date(enquiry.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

