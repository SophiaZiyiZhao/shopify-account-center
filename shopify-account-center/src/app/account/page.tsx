import { Package, MapPin, User, CreditCard, Truck, Shield, HelpCircle } from 'lucide-react'
import Link from 'next/link'

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
  subscriptionCount: 1
}

export default function AccountDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 欢迎区域 */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-3">
            Welcome back, {customer.firstName || customer.displayName}
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Here&apos;s an overview of your Shokz account and audio journey.
          </p>
        </div>

        {/* 快速统计 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-3xl font-light text-gray-900">{customer.orderCount}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-xl">
                <Package className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-3xl font-light text-gray-900">${customer.totalSpent}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Loyalty Level</p>
                <p className="text-3xl font-light text-gray-900">{customer.loyaltyLevel}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-xl">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Member Since</p>
                <p className="text-3xl font-light text-gray-900">
                  {new Date(customer.createdAt).getFullYear()}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <User className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* 快速操作 */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/account/orders" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                    <Package className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Orders</h3>
                    <p className="text-sm text-gray-600">View order history</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/account/track" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Track & Returns</h3>
                    <p className="text-sm text-gray-600">Track shipments & returns</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/account/profile" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Profile</h3>
                    <p className="text-sm text-gray-600">Manage your account</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/account/addresses" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Addresses</h3>
                    <p className="text-sm text-gray-600">Manage shipping addresses</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/account/warranty" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 rounded-xl group-hover:bg-red-200 transition-colors">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Warranty & Registration</h3>
                    <p className="text-sm text-gray-600">Product registration & claims</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/account/support" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                    <HelpCircle className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Support</h3>
                    <p className="text-sm text-gray-600">Get help & contact us</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* 最近活动 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Package className="h-5 w-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Order #12345 shipped</p>
                <p className="text-sm text-gray-600">OpenRun Pro - Expected delivery: Tomorrow</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="p-2 bg-green-100 rounded-lg">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Product registered</p>
                <p className="text-sm text-gray-600">OpenRun Pro - 2-year warranty activated</p>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Profile updated</p>
                <p className="text-sm text-gray-600">Personal information updated</p>
              </div>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}