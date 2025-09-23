import Link from 'next/link'
import { 
  User, 
  Package, 
  MapPin, 
  Headphones, 
  Gift, 
  Shield, 
  HelpCircle, 
  Truck,
  CreditCard,
  FileText
} from 'lucide-react'

export default function PreviewPage() {
  const pages = [
    {
      title: 'Dashboard',
      description: 'Account overview and quick actions',
      href: '/account',
      icon: User,
      color: 'bg-blue-500'
    },
    {
      title: 'Orders',
      description: 'Order history and details',
      href: '/account/orders',
      icon: Package,
      color: 'bg-green-500'
    },
    {
      title: 'Track & Returns',
      description: 'Track shipments and manage returns',
      href: '/account/track',
      icon: Truck,
      color: 'bg-orange-500'
    },
    {
      title: 'Profile',
      description: 'Personal information and preferences',
      href: '/account/profile',
      icon: User,
      color: 'bg-purple-500'
    },
    {
      title: 'Addresses',
      description: 'Manage shipping addresses',
      href: '/account/addresses',
      icon: MapPin,
      color: 'bg-indigo-500'
    },
    {
      title: 'Warranty & Registration',
      description: 'Product warranty and registration',
      href: '/account/warranty',
      icon: Shield,
      color: 'bg-red-500'
    },
    {
      title: 'Support',
      description: 'Help center and contact support',
      href: '/account/support',
      icon: HelpCircle,
      color: 'bg-yellow-500'
    },
    {
      title: 'Reward Hub',
      description: 'Loyalty program and rewards',
      href: '/account/rewards',
      icon: Gift,
      color: 'bg-pink-500'
    },
    {
      title: 'Payment Methods',
      description: 'Manage saved payment methods',
      href: '/account/payment',
      icon: CreditCard,
      color: 'bg-teal-500'
    },
    {
      title: 'Gift Cards',
      description: 'View and manage gift cards',
      href: '/account/gift-cards',
      icon: FileText,
      color: 'bg-cyan-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Headphones className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Shokz Account Center</h1>
                <p className="text-sm text-gray-500">Preview & Testing</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString()} - Development Preview
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Account Center Preview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            This is a preview of the Shokz Account Center with all available pages. 
            Click on any page below to explore the user interface and functionality.
          </p>
        </div>

        {/* Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => {
            const IconComponent = page.icon
            return (
              <Link
                key={page.href}
                href={page.href}
                className="group block bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-gray-300"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${page.color} group-hover:scale-105 transition-transform duration-200`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {page.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                    <span>View Page</span>
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Features Overview */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-6">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Dual Login System</h4>
                <p className="text-sm text-gray-500">Shop Pay and Email verification</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Responsive Design</h4>
                <p className="text-sm text-gray-500">Mobile-first approach</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Modern UI</h4>
                <p className="text-sm text-gray-500">Clean and intuitive interface</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Security Features</h4>
                <p className="text-sm text-gray-500">2FA, password management</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Loyalty Program</h4>
                <p className="text-sm text-gray-500">Reward hub integration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">AfterShip Integration</h4>
                <p className="text-sm text-gray-500">Track & returns management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Info */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Technical Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Framework & Tools</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Next.js 14 (App Router)</li>
                <li>• React 18</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Lucide React Icons</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Integrations</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Shopify Storefront API</li>
                <li>• Shop Pay OAuth</li>
                <li>• AfterShip API</li>
                <li>• Salesforce Service Cloud</li>
                <li>• Email verification system</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Share Instructions */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-medium text-blue-900 mb-3">How to Share with Colleagues</h3>
          <div className="space-y-3 text-sm text-blue-800">
            <p><strong>Option 1 - Direct Link:</strong> Share this preview page URL with your colleagues</p>
            <p><strong>Option 2 - Individual Pages:</strong> Share specific page URLs for focused feedback</p>
            <p><strong>Option 3 - Screenshots:</strong> Take screenshots of specific sections for design review</p>
          </div>
          <div className="mt-4 p-3 bg-blue-100 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Current URL:</strong> <code className="bg-blue-200 px-2 py-1 rounded text-xs">{typeof window !== 'undefined' ? window.location.href : 'http://localhost:3000/preview'}</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
