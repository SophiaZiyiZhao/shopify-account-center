import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { User, Mail, Phone, Calendar, Bell, Shield, Crown, Star, Gift, Award, Target, Heart, Settings, Trash2, Cake, Activity, Headphones, Waves, Mountain, MapPin, Plus, Edit, Home, Building, Copy, CreditCard, Lock, Eye, CheckCircle } from 'lucide-react'

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
    firstName: 'Sophia',
    lastName: 'Zhao',
    email: 'sophia@example.com',
    phone: '+1 (555) 123-4567',
    displayName: 'Sophia Zhao',
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
      primaryUseCase: 'outdoor-running',
      secondaryUseCases: ['cycling', 'gym-training'],
      workoutFrequency: 'daily',
      environment: 'outdoor'
    }
  }

  // 模拟地址数据
  const addresses = [
    {
      id: '1',
      firstName: 'Sophia',
      lastName: 'Zhao',
      company: '',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'San Francisco',
      province: 'CA',
      country: 'United States',
      zip: '94102',
      phone: '+1 (555) 123-4567',
      isDefaultBilling: true,
      isDefaultShipping: true,
      type: 'home',
      lastUsed: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      firstName: 'Sophia',
      lastName: 'Zhao',
      company: 'Shokz Inc',
      address1: '456 Business Ave',
      address2: 'Suite 200',
      city: 'San Francisco',
      province: 'CA',
      country: 'United States',
      zip: '94105',
      phone: '+1 (555) 987-6543',
      isDefaultBilling: false,
      isDefaultShipping: false,
      type: 'work',
      lastUsed: '2024-01-10T14:15:00Z'
    },
    {
      id: '3',
      firstName: 'Jane',
      lastName: 'Smith',
      company: '',
      address1: '789 Oak Street',
      address2: '',
      city: 'Oakland',
      province: 'CA',
      country: 'United States',
      zip: '94601',
      phone: '+1 (555) 456-7890',
      isDefaultBilling: false,
      isDefaultShipping: false,
      type: 'gift',
      lastUsed: '2023-12-20T16:45:00Z'
    }
  ]

  // 模拟支付方式数据 - 基于实际Shopify支付方式
  const paymentMethods = [
    {
      id: '1',
      type: 'shopify_payments',
      last4: '4242',
      brand: 'Visa',
      expiryMonth: '12',
      expiryYear: '2026',
      isDefault: true,
      holderName: 'Sophia Zhao',
      provider: 'Shopify Payments'
    },
    {
      id: '2',
      type: 'paypal',
      email: 'sophia@example.com',
      isDefault: false,
      provider: 'PayPal'
    },
    {
      id: '3',
      type: 'shop_pay',
      last4: '4242',
      brand: 'Visa',
      expiryMonth: '12',
      expiryYear: '2026',
      isDefault: false,
      holderName: 'Sophia Zhao',
      provider: 'Shop Pay'
    }
  ]

  const defaultAddress = addresses.find(addr => addr.isDefaultBilling || addr.isDefaultShipping)
  const defaultPayment = paymentMethods.find(pm => pm.isDefault)

  return (
    <div className="max-w-6xl mx-auto">
      {/* 页面标题 - Shopify风格 */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Account Settings
        </h1>
        <p className="text-gray-600">
          Manage your personal information, addresses, and payment methods
        </p>
      </div>

      {/* 主要内容区域 - 两列布局，参考Shopify最佳实践 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 左列 - 个人信息和地址 */}
        <div className="space-y-6">
          
          {/* 个人信息卡片 - 参考Allbirds的简洁设计 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Personal Information</h2>
                <Button variant="outline" size="sm" className="text-sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
          </div>
            <div className="px-6 py-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                      <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <div className="text-sm text-gray-900">{customer.firstName}</div>
                      </div>
                      <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <div className="text-sm text-gray-900">{customer.lastName}</div>
                      </div>
                    </div>

                    <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-900">{customer.email}</span>
                      </div>
                    </div>

                    <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-900">{customer.phone}</span>
                  </div>
                    </div>

                <div className="flex items-center gap-2 pt-2">
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
              </div>
                  </div>
        </div>

          {/* 地址管理卡片 - 参考Boll & Branch的清晰布局 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Addresses</h2>
                <Button variant="outline" size="sm" className="text-sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Address
                </Button>
              </div>
            </div>
            <div className="px-6 py-6">
              {addresses.length > 0 ? (
                <div className="space-y-4">
                  {/* 默认地址 */}
                  {defaultAddress && (
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-900">Default Address</span>
                        </div>
                        <div className="flex gap-1">
                          {defaultAddress.isDefaultBilling && (
                            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">Billing</Badge>
                          )}
                          {defaultAddress.isDefaultShipping && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">Shipping</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 space-y-1">
                        <p className="font-medium text-gray-900">
                          {defaultAddress.firstName} {defaultAddress.lastName}
                        </p>
                        <p>{defaultAddress.address1}</p>
                        {defaultAddress.address2 && <p>{defaultAddress.address2}</p>}
                        <p>{defaultAddress.city}, {defaultAddress.province} {defaultAddress.zip}</p>
                        <p>{defaultAddress.country}</p>
                      </div>
                      
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm" className="text-xs">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* 其他地址 */}
                  {addresses.filter(addr => !addr.isDefaultBilling && !addr.isDefaultShipping).length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Other Addresses</h3>
                      <div className="space-y-3">
                        {addresses.filter(addr => !addr.isDefaultBilling && !addr.isDefaultShipping).map((address) => (
                          <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                {address.type === 'work' ? (
                                  <Building className="h-4 w-4 text-gray-600" />
                                ) : (
                                  <MapPin className="h-4 w-4 text-gray-600" />
                                )}
                                <span className="text-sm font-medium text-gray-900 capitalize">
                                  {address.type}
                                </span>
                              </div>
                              <div className="flex gap-1">
                                <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            
                            {/* 地址类型标识 */}
                            <div className="flex gap-1 mb-2">
                              {address.isDefaultBilling && (
                                <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">Billing</Badge>
                              )}
                              {address.isDefaultShipping && (
                                <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">Shipping</Badge>
                              )}
                              {!address.isDefaultBilling && !address.isDefaultShipping && (
                                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">Additional</Badge>
                              )}
                            </div>
                            
                            <div className="text-sm text-gray-600 space-y-1">
                              <p className="font-medium text-gray-900">
                                {address.firstName} {address.lastName}
                              </p>
                              <p>{address.address1}</p>
                              {address.address2 && <p>{address.address2}</p>}
                              <p>{address.city}, {address.province} {address.zip}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-sm font-medium text-gray-900 mb-2">No addresses saved</h3>
                  <p className="text-sm text-gray-600 mb-4">Add your first address to make checkout faster.</p>
                  <Button className="text-sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Address
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 右列 - 支付方式和安全设置 */}
        <div className="space-y-6">
          
          {/* 支付方式卡片 - 参考Shopify原生设计 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Payment Methods</h2>
                  <p className="text-sm text-gray-600 mt-1">Secure payment options for faster checkout</p>
                </div>
                <Button variant="outline" size="sm" className="text-sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment
                </Button>
              </div>
            </div>
            <div className="px-6 py-6">
              {paymentMethods.length > 0 ? (
                <div className="space-y-4">
                  {/* 默认支付方式 */}
                  {defaultPayment && (
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {defaultPayment.type === 'shopify_payments' ? (
                            <div className="w-10 h-6 bg-gradient-to-r from-green-600 to-green-700 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">S</span>
                            </div>
                          ) : defaultPayment.type === 'paypal' ? (
                            <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">PP</span>
                            </div>
                          ) : (
                            <div className="w-10 h-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">SP</span>
                            </div>
                          )}
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {defaultPayment.type === 'paypal' ? 'PayPal' : `${defaultPayment.brand} •••• ${defaultPayment.last4}`}
                            </p>
                            <p className="text-xs text-gray-600">
                              {defaultPayment.type === 'paypal' ? defaultPayment.email : `Expires ${defaultPayment.expiryMonth}/${defaultPayment.expiryYear}`}
                            </p>
                            <p className="text-xs text-gray-500">
                              {defaultPayment.provider}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">Default</Badge>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-xs">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs text-red-600 hover:text-red-700">
                          Remove
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* 其他支付方式 */}
                  {paymentMethods.filter(pm => !pm.isDefault).length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">Other Payment Methods</h3>
                      <div className="space-y-3">
                        {paymentMethods.filter(pm => !pm.isDefault).map((payment) => (
                          <div key={payment.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {payment.type === 'shopify_payments' ? (
                                  <div className="w-10 h-6 bg-gradient-to-r from-green-600 to-green-700 rounded flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">S</span>
                                  </div>
                                ) : payment.type === 'paypal' ? (
                                  <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">PP</span>
                                  </div>
                                ) : (
                                  <div className="w-10 h-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">SP</span>
              </div>
                                )}
                                <div>
                                  <p className="text-sm font-medium text-gray-900">
                                    {payment.type === 'paypal' ? 'PayPal' : `${payment.brand} •••• ${payment.last4}`}
                                  </p>
                                  <p className="text-xs text-gray-600">
                                    {payment.type === 'paypal' ? payment.email : `Expires ${payment.expiryMonth}/${payment.expiryYear}`}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {payment.provider}
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-1">
                                <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button variant="outline" size="sm" className="h-6 w-6 p-0 text-red-600 hover:text-red-700">
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* 支付方式说明 */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Available Payment Methods</h4>
                    <div className="space-y-2 text-xs text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-3 bg-gradient-to-r from-green-600 to-green-700 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xs">S</span>
                        </div>
                        <span><strong>Shopify Payments:</strong> Secure credit/debit card processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xs">PP</span>
                        </div>
                        <span><strong>PayPal:</strong> Pay with your PayPal account or credit card</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xs">SP</span>
                        </div>
                        <span><strong>Shop Pay:</strong> One-click checkout with saved information</span>
                      </div>
                    </div>
                  </div>
              </div>
              ) : (
                <div className="text-center py-8">
                  <CreditCard className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-sm font-medium text-gray-900 mb-2">No payment methods</h3>
                  <p className="text-sm text-gray-600 mb-4">Add a payment method for faster checkout.</p>
                  <Button className="text-sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </div>
              )}
              </div>
            </div>
            
          {/* 安全设置卡片 - 参考Shopify的安全设计 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Security</h2>
            </div>
            <div className="px-6 py-6">
              <div className="space-y-4">
                {/* 密码安全 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-gray-600" />
                  <div>
                      <p className="text-sm font-medium text-gray-900">Password</p>
                      <p className="text-xs text-gray-600">Last changed 3 months ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-green-600">Strong</span>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      Change
                    </Button>
                  </div>
                </div>
                
                {/* 2FA设置 */}
                <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                  <div>
                      <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                      <p className="text-xs text-gray-600">Required for data compliance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs text-yellow-600">Not enabled</span>
                    </div>
                    <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">
                      Enable
                    </Button>
                  </div>
                </div>

                {/* 登录活动 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Login Activity</p>
                      <p className="text-xs text-gray-600">Last login: Today at 2:30 PM</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    View History
                  </Button>
              </div>
            </div>
          </div>
        </div>

          {/* 账户偏好卡片 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Preferences</h2>
              </div>
            <div className="px-6 py-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How do you use Shokz?</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'outdoor-running', label: 'Running', icon: '🏃‍♂️' },
                { value: 'cycling', label: 'Cycling', icon: '🚴‍♂️' },
                { value: 'swimming', label: 'Swimming', icon: '🏊‍♂️' },
                      { value: 'gym-training', label: 'Gym', icon: '💪' },
                      { value: 'business-calls', label: 'Work', icon: '💼' },
                      { value: 'daily-commute', label: 'Commute', icon: '🚶‍♂️' }
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
                          <div className="text-lg mb-2">{option.icon}</div>
                    <div className="text-xs font-medium">{option.label}</div>
                  </div>
                </label>
              ))}
          </div>
        </div>

                <div className="pt-4 border-t border-gray-200">
            <div className="space-y-3">
              {[
                      { name: 'Order Updates', checked: true },
                      { name: 'Shipping Notifications', checked: true },
                      { name: 'Security Alerts', checked: true },
                      { name: 'Marketing Emails', checked: customer.acceptsMarketing }
              ].map((notification) => (
                <div key={notification.name} className="flex items-center justify-between">
                        <span className="text-sm text-gray-900">{notification.name}</span>
                  <input
                    type="checkbox"
                    defaultChecked={notification.checked}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                </div>
              ))}
          </div>
            </div>
            
                <Button className="w-full text-sm">
              Save Preferences
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}