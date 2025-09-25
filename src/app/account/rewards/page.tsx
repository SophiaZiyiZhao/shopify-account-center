import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Shield, Package, Plus, Search, Filter, Calendar, AlertTriangle, CheckCircle, Clock, Gift, Award, Truck, MapPin, Edit, Eye, QrCode, Camera, Upload, ExternalLink, MessageCircle, Phone, Mail, HelpCircle, FileText, Download, Send, Star, Trophy, Target, Users, Zap, Heart, Share2, MessageSquare, Camera as CameraIcon, Video, Headphones, Music, Activity, MapPin as LocationIcon, TrendingUp, Crown, Flame, Medal, Flag } from 'lucide-react'

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

  // 模拟客户奖励数据
  const customerRewards = {
    totalPoints: 2450,
    tier: 'Gold',
    nextTierPoints: 550,
    nextTier: 'Platinum',
    shokzStarStatus: 'Active',
    shokzStarLevel: 'Elite',
    streak: 7, // 连续活跃天数
    monthlyGoal: 500,
    monthlyProgress: 320
  }

  // 模拟奖励数据 - 参考Nike、Adidas、Apple等最佳案例
  const rewards = {
    featured: [
      {
        id: '1',
        type: 'experience',
        title: 'Boston Marathon VIP Experience',
        description: 'Exclusive access to finish line area with premium viewing',
        pointsRequired: 5000,
        value: 200,
        category: 'experience',
        image: '/boston-marathon.jpg',
        stock: 5,
        date: '2024-04-15',
        featured: true,
        partner: 'Boston Marathon',
        badge: 'Limited'
      },
      {
        id: '2',
        type: 'merchandise',
        title: 'Shokz Performance Collection',
        description: 'Complete workout gear set - T-shirt, cap, and water bottle',
        pointsRequired: 2000,
        value: 100,
        category: 'merchandise',
        image: '/shokz-collection.jpg',
        stock: 25,
        featured: true,
        badge: 'Bundle'
      }
    ],
    merchandise: [
      {
        id: '3',
        type: 'merchandise',
        title: 'Shokz Performance T-Shirt',
        description: 'Premium moisture-wicking performance tee',
        pointsRequired: 800,
        value: 35,
        category: 'merchandise',
        image: '/shokz-tshirt.jpg',
        stock: 45,
        colors: ['Black', 'White', 'Orange']
      },
      {
        id: '4',
        type: 'merchandise',
        title: 'Shokz Running Cap',
        description: 'Lightweight running cap with Shokz branding',
        pointsRequired: 600,
        value: 25,
        category: 'merchandise',
        image: '/shokz-cap.jpg',
        stock: 32,
        colors: ['Black', 'Navy']
      },
      {
        id: '5',
        type: 'merchandise',
        title: 'Shokz Insulated Water Bottle',
        description: '24oz insulated bottle for your workouts',
        pointsRequired: 1000,
        value: 40,
        category: 'merchandise',
        image: '/shokz-bottle.jpg',
        stock: 28,
        colors: ['Black', 'Orange']
      }
    ],
    experiences: [
      {
        id: '6',
        type: 'experience',
        title: 'Hyrox Competition Entry',
        description: 'Free entry to local Hyrox fitness competition',
        pointsRequired: 3000,
        value: 150,
        category: 'experience',
        image: '/hyrox-competition.jpg',
        stock: 10,
        date: '2024-03-20',
        partner: 'Hyrox'
      },
      {
        id: '7',
        type: 'experience',
        title: 'Lifetime Fitness VIP Access',
        description: 'VIP access to premium Lifetime Fitness locations',
        pointsRequired: 2000,
        value: 100,
        category: 'experience',
        image: '/lifetime-fitness.jpg',
        stock: 15,
        partner: 'Lifetime Fitness'
      }
    ],
    discounts: [
      {
        id: '8',
        type: 'discount',
        title: '$25 Off Next Purchase',
        description: 'Get $25 off your next Shokz purchase',
        pointsRequired: 1200,
        value: 25,
        category: 'discount'
      },
      {
        id: '9',
        type: 'discount',
        title: 'Free Express Shipping',
        description: 'Free express shipping on your next order',
        pointsRequired: 200,
        value: 15,
        category: 'shipping'
      }
    ]
  }

  // 模拟挑战数据
  const challenges = [
    {
      id: '1',
      title: 'Marathon Training',
      description: 'Complete 10 long runs with your Shokz',
      points: 500,
      progress: 7,
      total: 10,
      icon: Activity,
      category: 'fitness',
      partner: 'Boston Marathon',
      color: 'blue',
      timeLeft: '15 days'
    },
    {
      id: '2',
      title: 'Hyrox Warrior',
      description: 'Complete 5 Hyrox-style workouts',
      points: 300,
      progress: 2,
      total: 5,
      icon: Trophy,
      category: 'fitness',
      partner: 'Hyrox',
      color: 'orange',
      timeLeft: '8 days'
    },
    {
      id: '3',
      title: 'Shokz Star Ambassador',
      description: 'Share 5 posts with #ShokzStar hashtag',
      points: 400,
      progress: 3,
      total: 5,
      icon: Star,
      category: 'social',
      partner: 'Shokz Star',
      color: 'yellow',
      timeLeft: '12 days'
    }
  ]

  // 模拟Shokz Star内容
  const shokzStarContent = [
    {
      id: '1',
      type: 'photo',
      user: 'Sarah M.',
      content: 'Boston Marathon training with my OpenRun Pro! 🏃‍♀️ #ShokzStar #BostonMarathon',
      likes: 24,
      comments: 8,
      points: 50,
      image: '/shokz-star-1.jpg',
      isShokzStar: true,
      location: 'Boston, MA',
      timeAgo: '2h'
    },
    {
      id: '2',
      type: 'video',
      user: 'Mike T.',
      content: 'Hyrox competition prep with OpenSwim - perfect for my training! #Hyrox #ShokzStar',
      likes: 18,
      comments: 5,
      points: 75,
      image: '/shokz-star-2.jpg',
      isShokzStar: true,
      location: 'Chicago, IL',
      timeAgo: '4h'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* 页面标题 - 极简设计 */}
      <div className="mb-4">
        <div className="mb-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Rewards Hub
            </h1>
        </div>
        <p className="text-gray-500 text-sm">
          Unlock exclusive rewards and experiences as a Shokz Star member
        </p>
      </div>

      {/* 英雄区域 - 融入Level Progress的完整设计 */}
      <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-xl p-6 mb-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-5"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold">Shokz Star Elite</h2>
                </div>
                <p className="text-orange-100 text-sm">Welcome back, Sophia! Keep earning to unlock exclusive rewards</p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">{customerRewards.totalPoints}</div>
                  <div className="text-orange-100 text-xs">Total Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{customerRewards.tier}</div>
                  <div className="text-orange-100 text-xs">Member Level</div>
        </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          
          {/* Level Progress 融入英雄区域 */}
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Level Progress</span>
              <span className="text-sm text-orange-100">750 / 1000 points</span>
            </div>
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mb-2">
              <div className="bg-white h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
            <div className="flex items-center justify-between text-xs text-orange-100">
              <span>Current: {customerRewards.tier}</span>
              <span>250 points to next level</span>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 - 紧凑布局，减少空白 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* 左列 - 独家体验 */}
        <div className="lg:col-span-1">
          
          {/* 独家体验 */}
          <div className="bg-white border border-gray-100 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
                <Star className="h-4 w-4 text-orange-600" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Exclusive Programs</h3>
            </div>
            <div className="space-y-4">
              {/* Marathon Training */}
              <div className="border border-gray-100 rounded-lg p-4 hover:border-orange-200 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-gray-900">Marathon Training</h4>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">Exclusive</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Join our elite marathon training program with professional coaches</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Boston & Chicago Marathon</span>
                      <span className="text-sm font-bold text-orange-600">+500 pts</span>
          </div>
          </div>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3">
                  Join Training
                </Button>
        </div>

              {/* Hyrox Warrior */}
              <div className="border border-gray-100 rounded-lg p-4 hover:border-orange-200 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-5 w-5 text-white" />
          </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-gray-900">Hyrox Warrior</h4>
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">Limited</span>
          </div>
                    <p className="text-xs text-gray-600 mb-2">Compete in the ultimate fitness challenge with Shokz community</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Lifetime Fitness Partnership</span>
                      <span className="text-sm font-bold text-orange-600">+750 pts</span>
          </div>
        </div>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3">
                  Join Challenge
                </Button>
      </div>

              {/* Garmin Co-Branded Race */}
              <div className="border border-gray-100 rounded-lg p-4 hover:border-orange-200 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-gray-900">Garmin Co-Branded Race</h4>
                      <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full font-medium">New</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Join our exclusive race series powered by Garmin technology</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Garmin Partnership</span>
                      <span className="text-sm font-bold text-orange-600">+600 pts</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3">
                  Register Now
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* 中列 - 奖励展示 */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 精选奖励 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Featured Rewards</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rewards.featured.map((reward) => (
                <div key={reward.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <Package className="h-16 w-16 text-gray-400" />
                    </div>
                    {reward.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                          {reward.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{reward.title}</h3>
                        <p className="text-sm text-gray-600">{reward.description}</p>
                        {reward.partner && (
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full mt-2">
                            {reward.partner}
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{reward.pointsRequired}</div>
                        <div className="text-xs text-gray-600">points</div>
                      </div>
                    </div>
                    <Button 
                      variant="outline"
                      className="w-full mt-3"
                      disabled={customerRewards.totalPoints < reward.pointsRequired}
                    >
                      {customerRewards.totalPoints >= reward.pointsRequired ? 'Redeem Now' : 'Not Enough Points'}
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* 右列 - 奖励展示和快速操作 */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-gray-100 rounded-lg p-4">
            <h3 className="text-base font-medium text-gray-900 mb-3">Gear & Merchandise</h3>
            <div className="space-y-3">
              {rewards.merchandise.slice(0, 4).map((reward) => (
                <div key={reward.id} className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="h-5 w-5 text-gray-400" />
          </div>
                    <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{reward.title}</h4>
                    <p className="text-xs text-gray-500">{reward.pointsRequired} pts</p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-xs"
                    disabled={customerRewards.totalPoints < reward.pointsRequired}
                  >
                    Redeem
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>


        </div>
      </div>
    </div>
  )
}