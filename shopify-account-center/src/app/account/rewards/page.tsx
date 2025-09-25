import { redirect } from 'next/navigation'
import { getCustomerAccessToken } from '@/lib/auth'
import { getCustomer } from '@/lib/shopify'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Crown, Star, Gift, Award, Target, Trophy, Zap, Calendar, Cake, TrendingUp, Sparkles, Percent, Clock, CheckCircle, Truck } from 'lucide-react'

export default async function RewardsPage() {
  // 临时跳过登录验证，用于测试
  // const token = getCustomerAccessToken()
  
  // if (!token) {
  //   redirect('/login')
  // }

  // const customer = await getCustomer(token)
  
  // if (!customer) {
  //   redirect('/login')
  // }

  // 模拟客户数据用于测试 - 参考Shopify设计
  const customer = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    birthday: '1990-06-15',
    age: 34,
    // Loyalty Program Data
    loyaltyTier: 'Gold',
    loyaltyPoints: 2450,
    loyaltyLevel: 3,
    totalSpent: 1299.00,
    nextTierPoints: 550,
    nextTier: 'Platinum',
    tierProgress: 82, // 82% to next tier
    achievements: [
      { id: 1, name: 'First Shokz', icon: '🎉', earned: true, description: 'Made your first Shokz purchase', points: 100 },
      { id: 2, name: 'OpenRun Master', icon: '🏃‍♂️', earned: true, description: 'Purchased OpenRun series', points: 200 },
      { id: 3, name: 'Audio Enthusiast', icon: '🎧', earned: true, description: 'Own multiple Shokz products', points: 300 },
      { id: 4, name: 'Review Champion', icon: '⭐', earned: false, description: 'Write your first product review', points: 50 },
      { id: 5, name: 'Birthday VIP', icon: '🎂', earned: false, description: 'Celebrate your birthday with us', points: 100 },
      { id: 6, name: 'Platinum Audio Pro', icon: '👑', earned: false, description: 'Reach Platinum tier', points: 500 }
    ],
    recentActivity: [
      { id: 1, name: 'OpenRun Pro Purchase', points: 50, date: '2024-01-20', type: 'earned', description: 'Order #1002 - OpenRun Pro' },
      { id: 2, name: 'Product Review', points: 25, date: '2024-01-18', type: 'earned', description: 'Reviewed OpenSwim' },
      { id: 3, name: 'Shokz Welcome Bonus', points: 100, date: '2023-01-01', type: 'earned', description: 'New Shokz member bonus' }
    ],
    availableRewards: [
      { id: 1, name: 'Shokz Accessory Bundle', points: 800, description: 'Free carrying case + cleaning kit', type: 'product', value: '$25' },
      { id: 2, name: 'OpenRun Pro Discount', points: 1200, description: '20% off OpenRun Pro headphones', type: 'discount', value: '20%' },
      { id: 3, name: 'Free Shipping', points: 200, description: 'Free shipping on your next order', type: 'shipping', value: 'Free' },
      { id: 4, name: 'Exclusive Access', points: 1000, description: 'Early access to new Shokz products', type: 'access', value: 'VIP' }
    ],
    tierBenefits: [
      { name: 'Priority Support', description: 'Get faster customer service', icon: '⚡' },
      { name: 'Shokz Exclusive Offers', description: 'Special discounts on new products', icon: '🎁' },
      { name: 'Early Access', description: 'Be the first to try new Shokz products', icon: '🚀' },
      { name: 'Audio Community', description: 'Join exclusive Shokz user community', icon: '👥' }
    ]
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-light text-gray-900 mb-1">
              Shokz Reward Hub
            </h1>
            <p className="text-sm text-orange-600 font-medium">
              Open Your World • Open Your Rewards
            </p>
          </div>
        </div>
        <p className="text-base text-gray-600 font-light">
          Earn points, unlock rewards, and enjoy exclusive benefits as a Shokz audio enthusiast
        </p>
      </div>

      {/* Main Status Card - Shokz Style */}
      <div className="mb-8 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-2xl border border-orange-100 p-8 relative overflow-hidden">
        {/* Shokz Brand Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-orange-400">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="10" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-orange-100">
              <div className="flex items-center gap-2">
                <Crown className="h-6 w-6 text-orange-600" />
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Shokz</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {customer.loyaltyTier} Audio Enthusiast
              </h2>
              <p className="text-lg text-gray-600">
                {customer.loyaltyPoints.toLocaleString()} points earned
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Next tier</p>
            <p className="text-xl font-semibold text-gray-900">
              {customer.nextTier}
            </p>
            <p className="text-sm text-gray-500">
              {customer.nextTierPoints} points to go
            </p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
            <span>Progress to {customer.nextTier}</span>
            <span className="font-medium">{customer.tierProgress}%</span>
          </div>
          <div className="w-full bg-white rounded-full h-4 shadow-inner">
            <div 
              className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${customer.tierProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-orange-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{customer.loyaltyLevel}</p>
            <p className="text-sm text-gray-600">Current Level</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">${customer.totalSpent}</p>
            <p className="text-sm text-gray-600">Total Spent</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {new Date(customer.birthday).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </p>
            <p className="text-sm text-gray-600">Birthday</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Available Rewards - Featured */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Gift className="h-5 w-5 text-indigo-600" />
              </div>
              Available Rewards
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Redeem your points for exclusive rewards and benefits
            </p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customer.availableRewards.map((reward) => (
                <div key={reward.id} className={`p-6 rounded-xl border-2 transition-all hover:shadow-md ${
                  customer.loyaltyPoints >= reward.points
                    ? 'border-indigo-200 bg-indigo-50 hover:border-indigo-300'
                    : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        reward.type === 'discount' ? 'bg-green-100' :
                        reward.type === 'shipping' ? 'bg-blue-100' : 
                        reward.type === 'product' ? 'bg-orange-100' : 'bg-purple-100'
                      }`}>
                        {reward.type === 'discount' ? <Percent className="h-4 w-4 text-green-600" /> :
                         reward.type === 'shipping' ? <Truck className="h-4 w-4 text-blue-600" /> :
                         reward.type === 'product' ? <Gift className="h-4 w-4 text-orange-600" /> :
                         <Sparkles className="h-4 w-4 text-purple-600" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{reward.name}</h3>
                        <p className="text-sm text-gray-600">{reward.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-indigo-600">{reward.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{reward.points} points</span>
                    <Button 
                      size="sm" 
                      className={`${
                        customer.loyaltyPoints >= reward.points
                          ? 'bg-indigo-600 hover:bg-indigo-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={customer.loyaltyPoints < reward.points}
                    >
                      {customer.loyaltyPoints >= reward.points ? 'Redeem' : 'Not enough points'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Sidebar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Award className="h-5 w-5 text-yellow-600" />
              </div>
              Achievements
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Your Shokz journey milestones
            </p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {customer.achievements.map((achievement) => (
                <div key={achievement.id} className={`p-4 rounded-xl border-2 transition-all ${
                  achievement.earned 
                    ? 'border-yellow-200 bg-yellow-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <p className={`font-medium ${
                        achievement.earned ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {achievement.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {achievement.description}
                      </p>
                      {achievement.earned && (
                        <div className="flex items-center gap-1 mt-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span className="text-xs text-green-600 font-medium">+{achievement.points} pts</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Tier Benefits */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              Recent Activity
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Your latest points and rewards activity
            </p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {customer.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Star className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{activity.name}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(activity.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">+{activity.points} pts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tier Benefits */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Trophy className="h-5 w-5 text-purple-600" />
              </div>
              {customer.loyaltyTier} Benefits
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Exclusive perks for {customer.loyaltyTier} members
            </p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {customer.tierBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-900">{benefit.name}</h3>
                    <p className="text-sm text-gray-500">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
