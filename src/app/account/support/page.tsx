import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Search, 
  BookOpen, 
  Users, 
  ExternalLink,
  Headphones,
  Package,
  CreditCard,
  Settings,
  Truck,
  Shield,
  Star
} from 'lucide-react'

export default async function SupportPage() {
  // 临时跳过登录验证，用于测试
  // const token = getCustomerAccessToken()
  
  // if (!token) {
  //   redirect('/login')
  // }

  // const customer = await getCustomer(token)
  
  // if (!customer) {
  //   redirect('/login')
  // }

  // 模拟客户数据用于测试
  const customer = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    recentOrders: [
      { id: '1', product: 'Shokz OpenRun Pro', orderNumber: 1001, status: 'delivered' },
      { id: '2', product: 'Shokz OpenSwim', orderNumber: 1002, status: 'shipped' }
    ]
  }

  const supportCategories = [
    {
      id: 'products',
      title: 'Product Support',
      description: 'Setup, troubleshooting, features, compatibility',
      icon: Headphones,
      color: 'green',
      popular: true
    },
    {
      id: 'technical',
      title: 'Technical Issues',
      description: 'Connection problems, audio quality, firmware',
      icon: Settings,
      color: 'blue',
      popular: true
    },
    {
      id: 'account',
      title: 'Order Support',
      description: 'Get help with your orders, shipping, and delivery questions',
      icon: Package,
      color: 'purple',
      popular: false
    }
  ]


  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: MessageCircle,
      action: 'Start Chat',
      href: '#',
      available: 'Available 24/7',
      primary: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: Phone,
      action: 'Call Us',
      href: 'tel:+1-800-SHOKZ-01',
      available: 'Mon-Fri 9AM-6PM PST'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-gray-900 mb-2">
          Support Center
        </h1>
        <p className="text-base text-gray-600 font-light">
          Get help with your Shokz products and account
        </p>
      </div>

      {/* AI Search Bar - Moved to Top */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Search className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-medium text-gray-900">How can we help you?</h2>
              <p className="text-sm text-gray-600">Get instant answers from our AI-powered knowledge base</p>
            </div>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Ask a question... (e.g., 'How do I pair my OpenRun Pro?')"
              className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs text-gray-500">Popular searches:</span>
            {[
              'Pair headphones',
              'Battery life',
              'Waterproof rating',
              'Firmware update',
              'Audio quality issues'
            ].map((term) => (
              <button
                key={term}
                className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full hover:bg-gray-50 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links to Other Pages */}
      <div className="mb-6">
        <h2 className="text-xl font-medium text-gray-900 mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Truck className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">Track & Returns</h3>
                <p className="text-sm text-gray-600 mb-3">Track orders and manage returns</p>
                <a href="/account/track">
                  <Button variant="outline" size="sm">
                    Go to Track & Returns
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Shield className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">Warranty & Registration</h3>
                <p className="text-sm text-gray-600 mb-3">Register products and manage warranty</p>
                <a href="/account/warranty">
                  <Button variant="outline" size="sm">
                    Go to Warranty
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Package className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">Order History</h3>
                <p className="text-sm text-gray-600 mb-3">View your order history and details</p>
                <a href="/account/orders">
                  <Button variant="outline" size="sm">
                    Go to Orders
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="mb-6">
        <h2 className="text-xl font-medium text-gray-900 mb-4">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className={`p-3 rounded-lg mx-auto mb-3 w-fit ${
                  category.color === 'blue' ? 'bg-blue-100' :
                  category.color === 'green' ? 'bg-green-100' :
                  category.color === 'purple' ? 'bg-purple-100' :
                  'bg-orange-100'
                }`}>
                  <category.icon className={`h-6 w-6 ${
                    category.color === 'blue' ? 'text-blue-600' :
                    category.color === 'green' ? 'text-green-600' :
                    category.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="font-medium text-gray-900 text-sm">{category.title}</h3>
                  {category.popular && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{category.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Get Help
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Methods */}
      <div className="mb-6">
        <h2 className="text-xl font-medium text-gray-900 mb-4">Still Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactMethods.map((method) => (
            <div key={method.title} className={`rounded-xl border p-4 ${
              method.primary 
                ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' 
                : 'bg-white border-gray-200'
            } hover:shadow-md transition-shadow`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  method.primary 
                    ? 'bg-blue-100' 
                    : 'bg-gray-100'
                }`}>
                  <method.icon className={`h-6 w-6 ${
                    method.primary 
                      ? 'text-blue-600' 
                      : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-gray-900">{method.title}</h3>
                    {method.primary && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                  {method.available && (
                    <p className="text-xs text-gray-500 mb-3">{method.available}</p>
                  )}
                  <Button 
                    variant={method.primary ? "default" : "outline"} 
                    size="sm"
                  >
                    <a href={method.href}>
                      {method.action}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </div>
  )
}