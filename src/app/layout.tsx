import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shokz Account Center - Manage Your Account',
  description: 'Manage your Shokz account, track orders, and update your information in one convenient place.',
  keywords: ['shokz', 'account', 'orders', 'profile', 'shopify', 'ecommerce', 'audio', 'headphones'],
  authors: [{ name: 'Shokz Account Center' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
