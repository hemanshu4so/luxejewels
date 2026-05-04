'use client'

import { Sidebar } from './Sidebar'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

interface AdminLayoutProps {
  children: React.ReactNode
  title: string
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const pathname = usePathname()
  const paths = pathname.split('/').slice(2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-charcoal dark:to-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white/80 dark:bg-charcoal/90 backdrop-blur-xl border-r border-gray-200/50 shadow-2xl">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white/70 dark:bg-charcoal/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center gap-4">
                <h1 className="font-display text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gold-600 to-amber-600 bg-clip-text text-transparent">
                  {title}
                </h1>
                <div className="h-6 w-1 bg-gold-400 rounded-full" />
                <div className="text-sm text-muted font-medium hidden md:flex gap-2">
                  {paths.map((path, i) => (
                    <span key={i}>
                      {path.charAt(0).toUpperCase() + path.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <motion.main 
            key={pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 p-6 lg:p-8 overflow-auto"
          >
            {children}
          </motion.main>
        </div>
      </div>
    </div>
  )
}

