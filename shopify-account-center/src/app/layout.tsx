import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Account Center - Manage Your Account',
  description: 'Manage your account, track orders, and update your information in one convenient place.',
  keywords: ['account', 'orders', 'profile', 'shopify', 'ecommerce'],
  authors: [{ name: 'Account Center' }],
  viewport: 'width=device-width, initial-scale=1',
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
