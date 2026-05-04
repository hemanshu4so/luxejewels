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
  title:       { default: 'LuxeJewels — Where Elegance Meets Eternity', template: '%s | LuxeJewels' },
  description: 'Premium handcrafted jewellery — gold, diamond, bridal collections. Shop timeless elegance.',
  keywords:    ['jewellery', 'gold', 'diamond', 'bridal', 'luxury', 'handcrafted'],
  openGraph: {
    type:   'website',
    locale: 'en_IN',
    url:    'https://luxejewels.com',
    siteName: 'LuxeJewels',
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