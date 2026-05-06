import type { Metadata } from 'next'
import { Cormorant_Garamond, Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider }  from '@/components/providers/ThemeProvider'
import { AuthProvider }   from '@/components/providers/AuthProvider'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight:  ['300','400','500','600'],
  variable:'--font-cormorant',
})
const playfair = Playfair_Display({
  subsets:  ['latin'],
  variable: '--font-playfair',
})
const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title:       { default: 'SKKL Jewellers - Heritage Luxury Jewellery', template: '%s | SKKL Jewellers' },
  description: 'SKKL Jewellers is a heritage luxury jewellery house for bridal heirlooms, diamond jewellery, gold collections, bespoke design, and live precious metal rates.',
  keywords:    ['SKKL Jewellers', 'jewellery', 'gold', 'diamond', 'bridal', 'luxury', 'bespoke jewellery'],
  openGraph: {
    type:   'website',
    locale: 'en_IN',
    url:    'https://skkljewellers.com',
    siteName: 'SKKL Jewellers',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
