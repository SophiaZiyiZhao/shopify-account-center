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
  X
} from 'lucide-react'

// 参考其他官网的导航排序 - Profile提前到更显眼位置
const navigationItems = [
  {
    name: 'Dashboard',
    href: '/account',
    icon: Home,
    description: 'Account overview'
  },
  {
    name: 'Profile',
    href: '/account/profile',
    icon: User,
    description: 'Personal information'
  },
  {
    name: 'Orders',
    href: '/account/orders',
    icon: Package,
    description: 'Order history & details'
  },
  {
    name: 'Track & Returns',
    href: '/account/track',
    icon: Truck,
    description: 'Track shipments & returns'
  },
  {
    name: 'Reward Hub',
    href: '/account/rewards',
    icon: Gift,
    description: 'Points, rewards & offers'
  },
  {
    name: 'Addresses',
    href: '/account/addresses',
    icon: MapPin,
    description: 'Shipping & billing addresses'
  },
  {
    name: 'Warranty & Registration',
    href: '/account/warranty',
    icon: Shield,
    description: 'Product registration & warranty'
  },
  {
    name: 'Support',
    href: '/account/support',
    icon: HelpCircle,
    description: 'Help & contact us'
  }
]

export function AccountNav() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md bg-white shadow-md border border-gray-200"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed top-0 left-0 z-40 w-80 h-full bg-white shadow-xl transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 pt-16">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-light text-lg">S</span>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">Shokz Account</h2>
                <p className="text-sm text-gray-500">Welcome back</p>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className={`text-xs ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                      {item.description}
                    </div>
                  </div>
                </Link>
              )
            })}
            
            {/* Mobile Sign Out */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <div className="h-5 w-5 mr-3 flex items-center justify-center">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Sign Out</div>
                  <div className="text-xs text-gray-500">End your session</div>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 lg:bg-white lg:border-r lg:border-gray-200">
        <div className="flex-1 flex flex-col pt-6 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6 mb-8">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-light text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-light text-gray-900">Shokz Account</h1>
              <p className="text-sm text-gray-500">Welcome back</p>
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-500'
                  }`} />
                  <div className="flex-1">
                    <div>{item.name}</div>
                    <div className={`text-xs mt-0.5 ${
                      isActive ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {item.description}
                    </div>
                  </div>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Desktop Footer */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center mb-4">
            <p>© 2024 Shokz</p>
            <p className="mt-1">Open Your World</p>
          </div>
          <div className="text-center">
            <Link 
              href="/login"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
