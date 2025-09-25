import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Shield, Package, Plus, Search, Filter, Calendar, AlertTriangle, CheckCircle, Clock, Gift, Award, Truck, MapPin, Edit, Eye } from 'lucide-react'

export default async function WarrantyPage() {
  // 临时跳过登录验证，用于测试
  // const token = getCustomerAccessToken()
  
  // if (!token) {
  //   redirect('/login')
  // }

  // const customer = await getCustomer(token)
  
  // if (!customer) {
  //   redirect('/login')
  // }

  // 模拟已注册产品数据
  const registeredProducts = [
    {
      id: '1',
      name: 'Shokz OpenRun Pro',
      model: 'OpenRun Pro',
      serialNumber: 'SR2024001',
      purchaseDate: '2024-01-15T00:00:00Z',
      registrationDate: '2024-01-16T00:00:00Z',
      warrantyExpiry: '2026-01-15T00:00:00Z',
      warrantyStatus: 'active',
      warrantyType: '2-Year Limited Warranty',
      orderNumber: '1001',
      purchaseChannel: 'shokz.com',
      purchaseChannelName: 'Shokz Official Store',
      productType: 'new',
      image: '/placeholder-product.jpg',
      issues: []
    },
    {
      id: '2',
      name: 'Shokz OpenSwim',
      model: 'OpenSwim',
      serialNumber: 'SR2024002',
      purchaseDate: '2023-12-10T00:00:00Z',
      registrationDate: '2023-12-11T00:00:00Z',
      warrantyExpiry: '2025-12-10T00:00:00Z',
      warrantyStatus: 'expiring_soon',
      warrantyType: '2-Year Limited Warranty',
      orderNumber: '1002',
      purchaseChannel: 'amazon',
      purchaseChannelName: 'Amazon',
      productType: 'new',
      image: '/placeholder-product.jpg',
      issues: []
    },
    {
      id: '3',
      name: 'Shokz OpenComm (Refurbished)',
      model: 'OpenComm',
      serialNumber: 'SR2023001',
      purchaseDate: '2023-06-15T00:00:00Z',
      registrationDate: '2023-06-16T00:00:00Z',
      warrantyExpiry: '2024-06-15T00:00:00Z',
      warrantyStatus: 'active',
      warrantyType: '1-Year Limited Warranty',
      orderNumber: '1003',
      purchaseChannel: 'shokz.com',
      purchaseChannelName: 'Shokz Official Store',
      productType: 'refurbished',
      image: '/placeholder-product.jpg',
      issues: [
        {
          id: '1',
          type: 'warranty_claim',
          status: 'in_progress',
          description: 'Audio quality issue',
          submittedDate: '2024-01-10T00:00:00Z',
          estimatedResolution: '2024-01-25T00:00:00Z'
        }
      ]
    }
  ]

  // 模拟保修政策
  const warrantyPolicies = [
    {
      type: '2-Year Limited Warranty',
      description: 'Covers manufacturing defects and material failures for new products',
      coverage: [
        'Audio quality issues',
        'Battery performance problems',
        'Physical defects',
        'Water resistance failures'
      ],
      exclusions: [
        'Normal wear and tear',
        'Accidental damage',
        'Unauthorized modifications',
        'Loss or theft'
      ]
    },
    {
      type: '1-Year Limited Warranty',
      description: 'Covers manufacturing defects and material failures for refurbished products',
      coverage: [
        'Audio quality issues',
        'Battery performance problems',
        'Physical defects',
        'Water resistance failures'
      ],
      exclusions: [
        'Normal wear and tear',
        'Accidental damage',
        'Unauthorized modifications',
        'Loss or theft'
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Product Registration & Warranty
        </h1>
        <p className="text-gray-600">
          Register your Shokz products and manage warranty services - regardless of where you purchased them
        </p>
      </div>

      {/* 多渠道购买提示 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-blue-600 text-sm font-medium">i</span>
          </div>
          <div>
            <h3 className="font-medium text-blue-900 mb-1">Universal Warranty Coverage</h3>
            <p className="text-sm text-blue-800">
              All Shokz products are covered by our warranty service, whether purchased from our official website, 
              authorized retailers, or third-party platforms. Register your product to activate warranty coverage.
            </p>
          </div>
        </div>
      </div>

      {/* 搜索和筛选区域 */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* 搜索框 */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by product name, serial number, or order number..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
              />
            </div>
          </div>
          
          {/* 筛选选项 */}
          <div className="flex gap-3">
            {/* 保修状态筛选 */}
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="expiring_soon">Expiring Soon</option>
              <option value="expired">Expired</option>
            </select>
            
            {/* 产品类型筛选 */}
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm">
              <option value="">All Products</option>
              <option value="openrun">OpenRun Series</option>
              <option value="openswim">OpenSwim Series</option>
              <option value="opencomm">OpenComm Series</option>
            </select>
          </div>
        </div>
        
        {/* 快速筛选标签 */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Quick filters:</span>
          <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            Expiring Soon
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            Active Claims
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            Recent Registrations
          </button>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 左列 - 已注册产品列表 */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 产品注册区域 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Register Your Shokz Product</h2>
                <p className="text-sm text-gray-600">Register products from any authorized retailer to activate warranty</p>
              </div>
            </div>
            
            {/* 注册方式选择 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* 二维码扫描 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">Scan QR Code</h3>
                  <p className="text-sm text-gray-600">Scan the QR code on your product packaging</p>
                </div>
              </div>
              
              {/* 手动输入 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Package className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">Manual Entry</h3>
                  <p className="text-sm text-gray-600">Enter product details manually</p>
                </div>
              </div>
              
              {/* 购买记录关联 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Gift className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">Link Purchase</h3>
                  <p className="text-sm text-gray-600">Connect with your order history</p>
                </div>
              </div>
            </div>
            
            {/* 保修政策说明 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-800 font-medium">Universal Warranty Coverage</span>
                </div>
                <p className="text-xs text-blue-700 mt-1">
                  All Shokz products are covered by warranty regardless of purchase channel
                </p>
              </div>
            </div>
          </div>

          {/* 产品列表 */}
          <div className="space-y-4">
            {registeredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* 产品图片 */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Package className="h-8 w-8 text-gray-400" />
                    </div>
                    
                    {/* 产品信息 */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-600">Serial: {product.serialNumber}</p>
                          <p className="text-sm text-gray-600">Order: #{product.orderNumber}</p>
                          {/* 购买渠道和产品类型标识 */}
                          <div className="flex items-center gap-2 mt-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              product.purchaseChannel === 'shokz.com' 
                                ? 'bg-black text-white'
                                : product.purchaseChannel === 'amazon'
                                ? 'bg-orange-100 text-orange-800'
                                : product.purchaseChannel === 'bestbuy'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {product.purchaseChannel === 'shokz.com' && (
                                <span className="w-2 h-2 bg-white rounded-full mr-1.5"></span>
                              )}
                              {product.purchaseChannel === 'amazon' && (
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-1.5"></span>
                              )}
                              {product.purchaseChannel === 'bestbuy' && (
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></span>
                              )}
                              {product.purchaseChannelName}
                            </span>
                            {product.productType === 'refurbished' && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-1.5"></span>
                                Refurbished
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.warrantyStatus === 'active' 
                              ? 'bg-green-100 text-green-800'
                              : product.warrantyStatus === 'expiring_soon'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.warrantyStatus === 'active' ? 'Active' : 
                             product.warrantyStatus === 'expiring_soon' ? 'Expiring Soon' : 'Expired'}
                          </span>
                        </div>
                      </div>
                      
                      {/* 保修信息 */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Warranty Type</p>
                          <p className="font-medium text-gray-900">{product.warrantyType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Expires</p>
                          <p className="font-medium text-gray-900">
                            {new Date(product.warrantyExpiry).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      {/* 保修提醒 */}
                      {product.warrantyStatus === 'expiring_soon' && (
                        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-yellow-600" />
                            <p className="text-sm text-yellow-800">
                              Your warranty expires in 6 months. Consider extending your coverage.
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {/* 保修问题 */}
                      {product.issues.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Active Issues</h4>
                          {product.issues.map((issue) => (
                            <div key={issue.id} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-blue-900">{issue.description}</p>
                                  <p className="text-sm text-blue-700">
                                    Submitted: {new Date(issue.submittedDate).toLocaleDateString()}
                                  </p>
                                </div>
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                  In Progress
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* 操作按钮 */}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="text-sm">
                          <Shield className="h-4 w-4 mr-2" />
                          File Claim
                        </Button>
                        <Button variant="outline" size="sm" className="text-sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Update Info
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右列 - 保修信息和快速操作 */}
        <div className="space-y-6">
          
          {/* 保修政策 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Warranty Information</h2>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-4">
                {/* 新品保修 */}
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <h3 className="font-medium text-green-800">New Products</h3>
                  </div>
                  <p className="text-sm text-green-700 font-medium mb-2">2-Year Limited Warranty</p>
                  <p className="text-xs text-green-600">Covers manufacturing defects and material failures</p>
                </div>
                
                {/* 翻新机保修 */}
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <h3 className="font-medium text-purple-800">Refurbished Products</h3>
                  </div>
                  <p className="text-sm text-purple-700 font-medium mb-2">1-Year Limited Warranty</p>
                  <p className="text-xs text-purple-600">Covers manufacturing defects and material failures</p>
                </div>
                
                {/* 覆盖范围 */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Coverage Includes:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-gray-600">Audio issues</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-gray-600">Battery problems</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-gray-600">Physical defects</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-gray-600">Water resistance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 快速操作 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Plus className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Register New Product</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Shield className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">File Warranty Claim</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Check Warranty Status</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Gift className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Extend Warranty</span>
                </button>
              </div>
            </div>
          </div>

          {/* 支持信息 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Need Help?</h2>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Warranty FAQ
                </button>
                <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Contact Support
                </button>
                <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Download Manual
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}