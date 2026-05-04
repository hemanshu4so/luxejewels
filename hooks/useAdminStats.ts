import { useState, useEffect } from 'react'
import { collection, doc, getDoc, getCountFromServer, query, where, orderBy, limit } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { Product, Enquiry } from '@/types'

interface AdminStats {
  totalProducts: number
  totalViews: number
  newEnquiries: number
  wishlistSaves: number
}

export function useAdminStats() {
  const [stats, setStats] = useState<AdminStats>({
    totalProducts: 0,
    totalViews: 0,
    newEnquiries: 0,
    wishlistSaves: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)

        // Total products
        const productsCount = await getCountFromServer(collection(db, 'products'))
        const productsSnap = await getDoc(doc(db, 'stats', 'views'))
        const views = productsSnap.exists() ? productsSnap.data()?.totalViews || 0 : 0

        // New enquiries (last 7 days - simplified)
        const recentEnquiriesSnap = await getDoc(doc(db, 'stats', 'enquiries'))
        const newEnquiries = recentEnquiriesSnap.exists() ? recentEnquiriesSnap.data()?.newCount || 0 : 0

        // Wishlist saves (placeholder)
        const wishlistCount = 0 // TODO: implement proper counter

        setStats({
          totalProducts: productsCount.data().count,
          totalViews: views,
          newEnquiries,
          wishlistSaves: wishlistCount,
        })
      } catch (error) {
        console.error('Failed to fetch admin stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, 30000) // Refresh every 30s
    return () => clearInterval(interval)
  }, [])

  return { stats, loading }
}

