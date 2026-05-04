'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Package, 
  MessageCircle, 
  TrendingUp,
  Settings 
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/enquiries', label: 'Enquiries', icon: MessageCircle },
  { href: '/admin/rates', label: 'Live Rates', icon: TrendingUp },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="p-6 space-y-2">
      <div className="mb-12">
        <h1 className="font-display text-2xl bg-gradient-to-r from-gold-600 to-amber-600 bg-clip-text text-transparent">
          LuxeAdmin
        </h1>
        <p className="text-xs text-muted mt-1">Jewelry Management</p>
      </div>

      <nav className="space-y-1">
        <AnimatePresence>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
              >
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`
                    w-full justify-start h-12 text-left font-medium
                    ${isActive 
                      ? 'bg-gold-500 text-white shadow-lg hover:bg-gold-500 hover:scale-[1.02]' 
                      : 'text-muted hover:bg-gray-100 dark:hover:bg-white/10 hover:text-charcoal'
                    }
                    transition-all duration-200
                  `}
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                </Button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </nav>
    </div>
  )
}

