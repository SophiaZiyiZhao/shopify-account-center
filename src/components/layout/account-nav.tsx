'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Package, 
  Truck, 
  Gift, 
  RotateCcw, 
  User, 
  MapPin, 
  RefreshCw, 
  Shield, 
  HelpCircle,
  Menu,
  X,
  LogOut
} from 'lucide-react'

// 精简的导航项，减少拥挤感
const navigationItems = [
  {
    name: 'Profile',
    href: '/account/profile',
    icon: User
  },
  {
    name: 'Orders',
    href: '/account/orders',
    icon: Package
  },
  {
    name: 'Warranty',
    href: '/account/warranty',
    icon: Shield
  },
  {
    name: 'Rewards',
    href: '/account/rewards',
    icon: Gift
  },
  {
    name: 'Support',
    href: '/account/support',
    icon: HelpCircle
  }
]

export function AccountNav() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Navigation Bar - Shopify Style with Shokz Branding */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Shokz Logo and Brand */}
            <div className="flex items-center gap-3">
              <Link href="/account" className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Shokz Account</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-2 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-black border-b-2 border-black'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-1.5" />
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* User Menu and Mobile Button */}
            <div className="flex items-center space-x-4">
              {/* Sign Out Button */}
              <Link
                href="/login"
                className="hidden md:flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-gray-100 text-black'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.name}
                  </Link>
                )
              })}
              
              {/* Mobile Sign Out */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-3" />
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}