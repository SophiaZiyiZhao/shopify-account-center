'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { User, ShoppingBag } from 'lucide-react'
import { MobileNav } from '@/components/ui/mobile-nav'

export function Header() {
  const router = useRouter()

  const handleLogout = async () => {
    // Demo mode - redirect to home
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-primary-800 dark:bg-primary-950/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-shokz-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-primary-900 dark:text-primary-100">
              Shokz Account
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/account"
              className="text-sm font-medium text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
            >
              Overview
            </Link>
            <Link
              href="/account/orders"
              className="text-sm font-medium text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
            >
              Orders
            </Link>
            <Link
              href="/account/track"
              className="text-sm font-medium text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
            >
              Track Order
            </Link>
            <Link
              href="/account/returns"
              className="text-sm font-medium text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
            >
              Returns
            </Link>
            <Link
              href="/account/support"
              className="text-sm font-medium text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
            >
              Support
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="hidden sm:flex items-center space-x-2"
            >
              <User className="h-4 w-4" />
              <span>Logout</span>
            </Button>

            {/* Mobile navigation */}
            <MobileNav />
          </div>
        </div>

      </div>
    </header>
  )
}
