import { Package, User, CreditCard, Shield, Bell, AlertTriangle, CheckCircle, Clock, Gift, Award, Truck, MapPin } from 'lucide-react'

// Mock customer data for demo
const customer = {
  id: 'demo-customer',
  firstName: 'Sophia',
  lastName: 'Zhao',
  displayName: 'Sophia Zhao',
  email: 'sophia@example.com',
  phone: '+1 (555) 123-4567',
  createdAt: '2023-01-15T00:00:00Z',
  age: 28,
  totalSpent: 1250,
  loyaltyLevel: 'Gold',
  orderCount: 8,
  addressCount: 2,
  subscriptionCount: 1,
  memberSince: '2023',
  favoriteActivity: 'Running',
  totalWorkouts: 156,
  achievements: ['Marathon Finisher', '100 Workouts', 'Early Adopter']
}

// Mock recent orders
const recentOrders = [
  {
    id: '1',
    orderNumber: 1001,
    status: 'shipped',
    product: 'Shokz OpenRun Pro',
    amount: 199.00,
    date: '2024-01-15T10:30:00Z',
    trackingNumber: '1Z999AA1234567890'
  },
  {
    id: '2',
    orderNumber: 1002,
    status: 'processing',
    product: 'Shokz OpenSwim',
    amount: 149.00,
    date: '2024-01-20T14:15:00Z'
  }
]

// Mock registered products
const registeredProducts = [
  {
    id: '1',
    name: 'Shokz OpenRun Pro',
    serialNumber: 'SR2024001',
    purchaseDate: '2024-01-15T00:00:00Z',
    warrantyExpiry: '2026-01-15T00:00:00Z',
    warrantyStatus: 'active'
  },
  {
    id: '2',
    name: 'Shokz OpenSwim',
    serialNumber: 'SR2024002',
    purchaseDate: '2023-12-10T00:00:00Z',
    warrantyExpiry: '2025-12-10T00:00:00Z',
    warrantyStatus: 'active'
  }
]

// Mock notifications
const notifications = [
  {
    id: '1',
    type: 'order',
    title: 'Order #1001 shipped',
    message: 'Your Shokz OpenRun Pro is on its way',
    date: '2024-01-16T09:00:00Z',
    unread: true
  },
  {
    id: '2',
    type: 'warranty',
    title: 'Warranty reminder',
    message: 'Your Shokz OpenSwim warranty expires in 6 months',
    date: '2024-01-10T14:30:00Z',
    unread: false
  }
]

export default function AccountDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Shokz品牌欢迎区域 */}
      <div className="mb-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {customer.firstName}
          </h1>
        </div>
        <p className="text-gray-600 mb-4">
          Continue your audio journey with Shokz. Here&apos;s your personalized dashboard.
        </p>
        
        {/* 用户成就展示 */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4 text-orange-500" />
            <span>{customer.loyaltyLevel} Member</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-blue-500" />
            <span>Member since {customer.memberSince}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4 text-green-500" />
            <span>{customer.favoriteActivity} Enthusiast</span>
          </div>
        </div>
      </div>

      {/* Shokz品牌关键信息卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Shokz Orders</p>
              <p className="text-2xl font-bold text-gray-900">{customer.orderCount}</p>
            </div>
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Package className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Investment</p>
              <p className="text-2xl font-bold text-gray-900">${customer.totalSpent}</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Audio Level</p>
              <p className="text-2xl font-bold text-gray-900">{customer.loyaltyLevel}</p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Award className="h-5 w-5 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Workouts Tracked</p>
              <p className="text-2xl font-bold text-gray-900">{customer.totalWorkouts}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <User className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 左列 - 最近订单和需要关注的事项 */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 最近订单 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
                <a href="/account/orders" className="text-sm text-gray-600 hover:text-gray-900">
                  View all orders
                </a>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        order.status === 'shipped' ? 'bg-blue-500' : 
                        order.status === 'processing' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <div>
                        <p className="font-medium text-gray-900">Order #{order.orderNumber}</p>
                        <p className="text-sm text-gray-600">{order.product}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${order.amount}</p>
                      {order.trackingNumber && (
                        <button className="text-xs text-blue-600 hover:text-blue-700">
                          Track Package
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 需要关注的事项 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Need Attention</h2>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-3">
                {/* 2FA提醒 */}
                <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Enable Two-Factor Authentication</p>
                    <p className="text-sm text-gray-600">Secure your account with 2FA</p>
                  </div>
                  <button className="px-3 py-1 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors">
                    Enable
                  </button>
                </div>

                {/* 保修提醒 */}
                <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Warranty Expiring Soon</p>
                    <p className="text-sm text-gray-600">Your Shokz OpenSwim warranty expires in 6 months</p>
                  </div>
                  <button className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右列 - 产品注册和通知 */}
        <div className="space-y-6">
          
          {/* 已注册产品 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Registered Products</h2>
                <a href="/account/warranty" className="text-sm text-gray-600 hover:text-gray-900">
                  Manage
                </a>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-3">
                {registeredProducts.map((product) => (
                  <div key={product.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-600">SN: {product.serialNumber}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.warrantyStatus === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.warrantyStatus === 'active' ? 'Active' : 'Expired'}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      <p>Warranty expires: {new Date(product.warrantyExpiry).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 最近通知 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Recent Notifications</h2>
                <a href="/account/notifications" className="text-sm text-gray-600 hover:text-gray-900">
                  View all
                </a>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`p-3 rounded-lg ${
                    notification.unread ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-start gap-3">
                      <Bell className={`h-4 w-4 mt-0.5 ${
                        notification.unread ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <div className="flex-1">
                        <p className={`font-medium ${
                          notification.unread ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {notification.title}
                        </p>
                        <p className={`text-sm ${
                          notification.unread ? 'text-blue-700' : 'text-gray-600'
                        }`}>
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(notification.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 快速操作 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
            </div>
            <div className="px-6 py-4">
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Package className="h-5 w-5 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Track Order</span>
                </button>
                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Gift className="h-5 w-5 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Register Product</span>
                </button>
                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Shield className="h-5 w-5 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Warranty</span>
                </button>
                <button className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <User className="h-5 w-5 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}