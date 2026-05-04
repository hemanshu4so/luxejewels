'use client'

import { useEffect, useState }        from 'react'
import { motion }                     from 'framer-motion'
import {
  Package, Eye, MessageCircle, TrendingUp,
  RefreshCw, Plus, ChevronRight
} from 'lucide-react'
import AdminLayout   from '@/components/admin/AdminLayout'
import StatsCard     from '@/components/admin/StatsCard'
import RatesForm     from '@/components/admin/RatesForm'
import { useAdminStats }  from '@/hooks/useAdminStats'
import { useRates }       from '@/hooks/useRates'
import Link               from 'next/link'
// Removed duplicate EnquiriesPreview import - inline function used

export default function AdminDashboard() {
  const { stats, loading } = useAdminStats()
  const { rates }          = useRates()

  const statCards = [
    { title: 'Total Products', value: stats?.totalProducts ?? 0, icon: Package,       trend: '+3 this week',   color: 'gold'  },
    { title: 'Total Views',    value: stats?.totalViews    ?? 0, icon: Eye,           trend: '+12% this month', color: 'blue'  },
    { title: 'New Enquiries',  value: stats?.newEnquiries  ?? 0, icon: MessageCircle, trend: 'Last 7 days',    color: 'green' },
    { title: 'Wishlist Saves', value: stats?.wishlistSaves ?? 0, icon: TrendingUp,    trend: '+8% this week',  color: 'purple'},
  ]

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">

        {/* ── Stats Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {statCards.map((card, i) => (
            <StatsCard key={card.title} {...card} index={i} loading={loading} />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* ── Live Rates Card ── */}
          <div className="xl:col-span-1">
            <div className="bg-white dark:bg-charcoal/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10 h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-lg font-semibold">Today's Rates</h2>
                <span className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live
                </span>
              </div>

              {rates && (
                <div className="space-y-4 mb-6">
                  {[
                    { label: 'Gold 24K', value: rates.gold24k, unit: '₹/gram', color: 'text-gold-600' },
                    { label: 'Gold 22K', value: rates.gold22k, unit: '₹/gram', color: 'text-gold-500' },
                    { label: 'Silver',   value: rates.silver,  unit: '₹/gram', color: 'text-gray-500' },
                  ].map(r => (
                    <div key={r.label} className="flex items-center justify-between py-3 border-b border-gray-50 dark:border-white/5">
                      <span className="text-sm text-muted">{r.label}</span>
                      <div className="text-right">
                        <span className={`font-semibold font-display text-lg ${r.color}`}>
                          ₹{r.value.toLocaleString('en-IN')}
                        </span>
                        <span className="text-muted text-xs block">{r.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <RatesForm compact />
            </div>
          </div>

          {/* ── Recent Enquiries ── */}
          <div className="xl:col-span-2">
            <div className="bg-white dark:bg-charcoal/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-lg font-semibold">Recent Enquiries</h2>
                <Link href="/admin/enquiries" className="text-xs text-gold-600 flex items-center gap-1 hover:gap-2 transition-all">
                  View all <ChevronRight size={12} />
                </Link>
              </div>
              <EnquiriesPreview />
            </div>
          </div>
        </div>

        {/* ── Quick Actions ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Add Product',    href: '/admin/products/new',   icon: Plus,        color: 'bg-gold-500'   },
            { label: 'Update Rates',   href: '/admin/rates',          icon: RefreshCw,   color: 'bg-blue-500'   },
            { label: 'View Catalogue', href: '/catalogue',            icon: Eye,          color: 'bg-purple-500' },
            { label: 'All Enquiries',  href: '/admin/enquiries',      icon: MessageCircle, color: 'bg-green-500' },
          ].map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.05 }}
            >
              <Link
                href={action.href}
                className={`
                  flex flex-col items-center gap-3 p-5 rounded-2xl
                  ${action.color} text-white
                  hover:opacity-90 hover:scale-105 transition-all duration-200
                  shadow-lg
                `}
              >
                <action.icon size={22} />
                <span className="text-sm font-medium text-center">{action.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}

// ── Inline Enquiries Preview ──
function EnquiriesPreview() {
  const mockEnquiries = [
    { id: '1', name: 'Priya Sharma',  product: 'Bridal Necklace Set',    time: '2h ago',  status: 'new'    },
    { id: '2', name: 'Anjali Patel',  product: 'Diamond Solitaire Ring', time: '5h ago',  status: 'read'   },
    { id: '3', name: 'Meera Joshi',   product: 'Gold Bangles (Set of 6)', time: '1d ago', status: 'replied' },
  ]

  const statusColor = { new: 'bg-green-100 text-green-700', read: 'bg-blue-100 text-blue-700', replied: 'bg-gray-100 text-gray-600' }

  return (
    <div className="space-y-3">
      {mockEnquiries.map(enq => (
        <div key={enq.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold text-sm">
            {enq.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm">{enq.name}</p>
            <p className="text-muted text-xs truncate">{enq.product}</p>
          </div>
          <div className="text-right">
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusColor[enq.status as keyof typeof statusColor]}`}>
              {enq.status}
            </span>
            <p className="text-[10px] text-muted mt-1">{enq.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}