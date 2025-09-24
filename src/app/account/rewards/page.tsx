import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Shield, Package, Plus, Search, Filter, Calendar, AlertTriangle, CheckCircle, Clock, Gift, Award, Truck, MapPin, Edit, Eye, QrCode, Camera, Upload, ExternalLink, MessageCircle, Phone, Mail, HelpCircle, FileText, Download, Send, Star, Trophy, Target, Users, Zap, Heart, Share2, MessageSquare, Camera as CameraIcon, Video, Headphones, Music, Activity, MapPin as LocationIcon, TrendingUp, Crown, Sparkles, Flame, Medal, Flag } from 'lucide-react'

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
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Shokz Rewards Hub
            </h1>
        </div>
        <p className="text-gray-600 text-lg">
          Earn points, unlock exclusive rewards, and join the Shokz Star community
        </p>
      </div>

      {/* 英雄区域 - 参考Nike、Apple的设计 */}
      <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-2xl p-8 mb-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Shokz Star Elite</h2>
                  <p className="text-orange-100">Welcome back, Sophia!</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold">{customerRewards.totalPoints}</div>
                  <div className="text-orange-100 text-sm">Total Points</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{customerRewards.streak}</div>
                  <div className="text-orange-100 text-sm">Day Streak</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{customerRewards.tier}</div>
                  <div className="text-orange-100 text-sm">Member Level</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Monthly Goal Progress</span>
                  <span className="text-sm">{customerRewards.monthlyProgress}/{customerRewards.monthlyGoal}</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: `${(customerRewards.monthlyProgress/customerRewards.monthlyGoal)*100}%`}}></div>
        </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 左列 - 挑战和活动 */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* 活跃挑战 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-5 w-5 text-orange-500" />
              <h3 className="font-semibold text-gray-900">Active Challenges</h3>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      challenge.color === 'blue' ? 'bg-blue-100' :
                      challenge.color === 'orange' ? 'bg-orange-100' :
                      'bg-yellow-100'
                    }`}>
                      <challenge.icon className={`h-4 w-4 ${
                        challenge.color === 'blue' ? 'text-blue-600' :
                        challenge.color === 'orange' ? 'text-orange-600' :
                        'text-yellow-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900 text-sm">{challenge.title}</h4>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {challenge.partner}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{challenge.description}</p>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs font-medium text-gray-900">{challenge.progress}/{challenge.total}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                        <div className={`h-1.5 rounded-full ${
                          challenge.color === 'blue' ? 'bg-blue-500' :
                          challenge.color === 'orange' ? 'bg-orange-500' :
                          'bg-yellow-500'
                        }`} style={{width: `${(challenge.progress/challenge.total)*100}%`}}></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{challenge.timeLeft} left</span>
                        <span className="text-xs font-bold text-gray-900">+{challenge.points} pts</span>
                      </div>
          </div>
          </div>
        </div>
              ))}
            </div>
          </div>

          {/* 快速操作 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Earn Points</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Star className="h-5 w-5 text-orange-500" />
                <span className="font-medium text-gray-900 text-sm">Join Shokz Star</span>
                <span className="ml-auto text-sm text-gray-600">+200</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Activity className="h-5 w-5 text-blue-500" />
                <span className="font-medium text-gray-900 text-sm">Marathon Training</span>
                <span className="ml-auto text-sm text-gray-600">+500</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Share2 className="h-5 w-5 text-purple-500" />
                <span className="font-medium text-gray-900 text-sm">Share #ShokzStar</span>
                <span className="ml-auto text-sm text-gray-600">+50</span>
              </button>
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

          {/* 商品奖励 - 优化布局 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Merchandise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {rewards.merchandise.map((reward) => (
                <div key={reward.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                    <Package className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{reward.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-500">Stock</span>
                      <span className="text-sm font-medium text-gray-700">{reward.stock} available</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Points Required</span>
                      <span className="text-lg font-bold text-gray-900">{reward.pointsRequired}</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full"
                    disabled={customerRewards.totalPoints < reward.pointsRequired}
                  >
                    Redeem
                  </Button>
        </div>
              ))}
              </div>
          </div>

          {/* 体验奖励 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Experiences</h2>
            <div className="space-y-4">
              {rewards.experiences.map((reward) => (
                <div key={reward.id} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{reward.title}</h3>
                          <p className="text-sm text-gray-600">{reward.description}</p>
                          {reward.partner && (
                            <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full mt-2">
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
                        size="sm"
                        disabled={customerRewards.totalPoints < reward.pointsRequired}
                      >
                        {customerRewards.totalPoints >= reward.pointsRequired ? 'Redeem' : 'Not Enough Points'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右列 - Shokz Star社区 */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Shokz Star社区 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-orange-500" />
              <h3 className="font-semibold text-gray-900">Shokz Star Community</h3>
          </div>
            <div className="space-y-4">
              {shokzStarContent.map((content) => (
                <div key={content.id} className="border border-gray-100 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="font-medium text-gray-900 text-sm">{content.user}</span>
                    <span className="px-1.5 py-0.5 bg-orange-100 text-orange-800 text-xs rounded-full">
                      Star
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{content.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500">
                        <Heart className="h-3 w-3" />
                        {content.likes}
                      </button>
                      <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-500">
                        <MessageSquare className="h-3 w-3" />
                        {content.comments}
                      </button>
                    </div>
                    <span className="text-xs text-green-600 font-medium">+{content.points} pts</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Share Your Story
            </Button>
        </div>

          {/* 等级进度 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Level Progress</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Current Level</span>
                <span className="font-semibold text-gray-900">{customerRewards.tier}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Next Level</span>
                <span className="font-semibold text-gray-900">{customerRewards.nextTier}</span>
          </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Points to Next</span>
                <span className="font-semibold text-gray-900">{customerRewards.nextTierPoints}</span>
                  </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}