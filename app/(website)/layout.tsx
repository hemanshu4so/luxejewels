import type { Metadata } from 'next'
import Header from '@/components/website/Header'

export const metadata: Metadata = {
  title: 'LuxeJewels – Premium Jewellery',
  description: 'Luxury jewellery collections crafted with elegance.',
}

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-cream/90 gold-blur">
      <Header />
      <main className="pt-0">{children}</main>
    </div>
  )
}
