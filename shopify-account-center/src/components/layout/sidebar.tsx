'use client'

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
  Home,
  Truck,
  RotateCcw,
  FileText,
  Gift,
  Shield,
  HelpCircle
} from 'lucide-react'

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

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 bg-white dark:bg-primary-900 border-r border-primary-200 dark:border-primary-800">
      <div className="p-6">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
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
    </aside>
  )
}
