import { redirect } from 'next/navigation'
import { getCustomerAccessToken } from '@/lib/auth'
import { getCustomer } from '@/lib/shopify'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Mail, Phone, Calendar, Bell, Shield, Crown, Star, Gift, Award, Target, Heart, Settings, Trash2, Cake, Activity, Headphones, Waves, Mountain } from 'lucide-react'

export default async function ProfilePage() {
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
    phone: '+1 (555) 123-4567',
    displayName: 'John Doe',
    acceptsMarketing: true,
    createdAt: '2023-01-01T00:00:00Z',
    birthday: '1990-06-15',
    age: 34,
    // Loyalty Program Data
    loyaltyTier: 'Gold',
    loyaltyPoints: 2450,
    loyaltyLevel: 3,
    totalSpent: 1299.00,
    nextTierPoints: 550,
    nextTier: 'Platinum',
    achievements: [
      { id: 1, name: 'First Purchase', icon: '🎉', earned: true },
      { id: 2, name: 'Loyal Customer', icon: '💎', earned: true },
      { id: 3, name: 'Audio Enthusiast', icon: '🎧', earned: true },
      { id: 4, name: 'Reviewer', icon: '⭐', earned: false }
    ],
    preferences: {
      favoriteCategories: ['OpenRun', 'OpenSwim'],
      activityLevel: 'Active',
      musicGenres: ['Rock', 'Electronic', 'Podcasts'],
      notificationFrequency: 'Weekly',
      // Shokz特有的运动场景偏好
      primaryUseCase: 'running',
      secondaryUseCases: ['cycling', 'swimming'],
      workoutFrequency: 'daily',
      environment: 'outdoor'
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-gray-900 mb-2">
          Profile Settings
        </h1>
        <p className="text-base text-gray-600 font-light">
          Manage your personal information and preferences
        </p>
      </div>

      {/* Quick Access to Rewards - Simplified */}
      <div className="mb-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Crown className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                {customer.loyaltyTier} Member
              </h2>
              <p className="text-sm text-gray-600">
                {customer.loyaltyPoints} points • <a href="/account/rewards" className="text-orange-600 hover:text-orange-700">View Rewards</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Personal Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-light text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              Personal Information
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Update your personal details and contact information
            </p>
          </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          defaultValue={customer.firstName || ''}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          defaultValue={customer.lastName || ''}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          id="email"
                          type="email"
                          defaultValue={customer.email}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                          disabled
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        defaultValue={customer.phone || ''}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="acceptsMarketing"
                        defaultChecked={customer.acceptsMarketing}
                        className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                      />
                      <label htmlFor="acceptsMarketing" className="text-sm text-gray-700">
                        I want to receive marketing emails and updates
                      </label>
                    </div>

                    <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                      Save Changes
                    </button>
                  </div>
        </div>

        {/* Account Information - Simplified */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-light text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Shield className="h-5 w-5 text-gray-600" />
              </div>
              Account Information
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(customer.createdAt).getFullYear()}
                </p>
                <p className="text-sm text-gray-500">Member Since</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-lg font-semibold text-gray-900">
                  {customer.age}
                </p>
                <p className="text-sm text-gray-500">Years Old</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-lg font-semibold text-gray-900">
                  ${customer.totalSpent.toFixed(0)}
                </p>
                <p className="text-sm text-gray-500">Total Spent</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-lg font-semibold text-gray-900">
                  {customer.loyaltyLevel}
                </p>
                <p className="text-sm text-gray-500">Level</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">Security & Privacy</h4>
              <div className="space-y-3">
                {/* Password Management */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Password Security</p>
                    <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Strong</span>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Change
                    </button>
                  </div>
                </div>
                
                {/* Two-Factor Authentication */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Not enabled</span>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
                      Enable 2FA
                    </button>
                  </div>
                </div>

                {/* Login Activity */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Login Activity</p>
                    <p className="text-sm text-gray-500">Last login: Today at 2:30 PM</p>
                  </div>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    View History
                  </button>
                </div>

                {/* Data Privacy */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Data & Privacy</p>
                    <p className="text-sm text-gray-500">Manage your personal data</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>GDPR compliant</span>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Shokz Preferences - Compact */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-light text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Activity className="h-5 w-5 text-gray-600" />
              </div>
              How do you use Shokz?
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
              {[
                { value: 'running', label: 'Running', icon: '🏃‍♂️' },
                { value: 'cycling', label: 'Cycling', icon: '🚴‍♂️' },
                { value: 'swimming', label: 'Swimming', icon: '🏊‍♂️' },
                { value: 'gym', label: 'Gym', icon: '💪' },
                { value: 'commuting', label: 'Commuting', icon: '🚶‍♂️' },
                { value: 'work', label: 'Work', icon: '💼' }
              ].map((option) => (
                <label key={option.value} className="relative">
                  <input
                    type="radio"
                    name="primaryUseCase"
                    value={option.value}
                    defaultChecked={customer.preferences.primaryUseCase === option.value}
                    className="sr-only"
                  />
                  <div className={`p-3 border-2 rounded-lg cursor-pointer transition-all text-center ${
                    customer.preferences.primaryUseCase === option.value
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="text-lg mb-1">{option.icon}</div>
                    <div className="text-xs font-medium">{option.label}</div>
                  </div>
                </label>
              ))}
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Help us personalize your experience
              </p>
              <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Save
              </button>
            </div>
          </div>
        </div>


        {/* Notification Preferences - Compact */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-light text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5 text-gray-600" />
              </div>
              Notifications
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {[
                { name: 'Order Updates', description: 'Order status changes', checked: true },
                { name: 'Shipping', description: 'Package delivery updates', checked: true },
                { name: 'Security', description: 'Account security alerts', checked: true },
                { name: 'Promotions', description: 'Special offers and deals', checked: customer.acceptsMarketing }
              ].map((notification) => (
                <div key={notification.name} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{notification.name}</p>
                    <p className="text-sm text-gray-500">{notification.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked={notification.checked}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                </div>
              ))}
            </div>
            
            <button className="mt-4 px-6 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Save Preferences
            </button>
          </div>
        </div>

        {/* Danger Zone - Compact */}
        <div className="bg-white rounded-xl shadow-sm border border-red-200">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium text-red-600">Delete Account</h2>
                <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}