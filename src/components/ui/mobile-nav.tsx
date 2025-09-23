'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import { 
  User, 
  Package, 
  MapPin, 
  Settings, 
  CreditCard,
  Bell,
  Menu,
  X,
  Home,
  Truck,
  RotateCcw,
  FileText,
  Gift,
  Shield,
  HelpCircle
} from 'lucide-react'
import { Button } from './button'

const navigation = [
  {
    name: 'Overview',
    href: '/account',
    icon: Home,
  },
  {
    name: 'Orders',
    href: '/account/orders',
    icon: Package,
  },
  {
    name: 'Track My Order',
    href: '/account/track',
    icon: Truck,
  },
  {
    name: 'Returns',
    href: '/account/returns',
    icon: RotateCcw,
  },
  {
    name: 'Profile',
    href: '/account/profile',
    icon: User,
  },
  {
    name: 'Addresses',
    href: '/account/addresses',
    icon: MapPin,
  },
  {
    name: 'Subscriptions',
    href: '/account/subscriptions',
    icon: FileText,
  },
  {
    name: 'Warranty & Product Registration',
    href: '/account/warranty',
    icon: Shield,
  },
  {
    name: 'Gift Cards',
    href: '/account/gift-cards',
    icon: Gift,
  },
  {
    name: 'Support',
    href: '/account/support',
    icon: HelpCircle,
  },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-primary-900 shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-shokz-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="text-xl font-bold text-primary-900 dark:text-primary-100">
                    Shokz Account
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-accent-50 text-accent-700 dark:bg-accent-900/20 dark:text-accent-400'
                          : 'text-primary-600 hover:bg-primary-50 hover:text-primary-900 dark:text-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-100'
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
