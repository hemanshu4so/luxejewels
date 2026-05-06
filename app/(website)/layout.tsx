import type { Metadata } from 'next'
import Header from '@/components/website/Header'
import Footer from '@/components/website/Footer'
import WhatsAppButton from '@/components/website/WhatsAppButton'

export const metadata: Metadata = {
  title: 'SKKL Jewellers - Premium Jewellery',
  description: 'A cinematic luxury jewellery experience by SKKL Jewellers.',
}

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
