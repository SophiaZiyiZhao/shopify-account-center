import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Shield, Package, Plus, Search, Filter, Calendar, AlertTriangle, CheckCircle, Clock, Gift, Award, Truck, MapPin, Edit, Eye, QrCode, Camera, Upload, ExternalLink } from 'lucide-react'

export default async function ProductRegistrationPage() {
  // 临时跳过登录验证，用于测试
  // const token = getCustomerAccessToken()
  
  // if (!token) {
  //   redirect('/login')
  // }

  // const customer = await getCustomer(token)
  
  // if (!customer) {
  //   redirect('/login')
  // }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">
          Register Your Shokz Product
        </h1>
        <p className="text-gray-600">
          Register your Shokz product to activate warranty coverage, regardless of where you purchased it
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

      {/* 注册方式选择 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* 二维码扫描 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors cursor-pointer">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <QrCode className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Scan QR Code</h3>
            <p className="text-sm text-gray-600 mb-4">
              Scan the QR code on your product packaging for instant registration
            </p>
            <Button className="w-full">
              <Camera className="h-4 w-4 mr-2" />
              Scan QR Code
            </Button>
          </div>
        </div>
        
        {/* 手动输入 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors cursor-pointer">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Manual Entry</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enter product details manually from your receipt or packaging
            </p>
            <Button className="w-full">
              <Edit className="h-4 w-4 mr-2" />
              Enter Details
            </Button>
          </div>
        </div>
        
        {/* 购买记录关联 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors cursor-pointer">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Link Purchase</h3>
            <p className="text-sm text-gray-600 mb-4">
              Connect with your order history if purchased from Shokz.com
            </p>
            <Button className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              Link Order
            </Button>
          </div>
        </div>
      </div>

      {/* 手动注册表单 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Product Registration Form</h2>
        
        <form className="space-y-6">
          {/* 产品信息 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Model *
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                <option value="">Select Product Model</option>
                <option value="openrun-pro">OpenRun Pro</option>
                <option value="openrun">OpenRun</option>
                <option value="openswim">OpenSwim</option>
                <option value="opencomm">OpenComm</option>
                <option value="openfit">OpenFit</option>
                <option value="openmove">OpenMove</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Serial Number *
              </label>
              <Input 
                type="text" 
                placeholder="Enter serial number"
                className="w-full"
              />
            </div>
          </div>

          {/* 购买信息 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Date *
              </label>
              <Input 
                type="date" 
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Channel *
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                <option value="">Select Purchase Channel</option>
                <option value="shokz-official">Shokz.com Official</option>
                <option value="amazon">Amazon</option>
                <option value="best-buy">Best Buy</option>
                <option value="target">Target</option>
                <option value="walmart">Walmart</option>
                <option value="authorized-retailer">Authorized Retailer</option>
                <option value="third-party">Third-party Platform</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* 订单信息（可选） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Order Number (if available)
              </label>
              <Input 
                type="text" 
                placeholder="Enter order number"
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Price (optional)
              </label>
              <Input 
                type="number" 
                placeholder="Enter purchase price"
                className="w-full"
              />
            </div>
          </div>

          {/* 上传收据 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Receipt (optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">
                Upload your purchase receipt for faster verification
              </p>
              <Button variant="outline" size="sm">
                Choose File
              </Button>
            </div>
          </div>

          {/* 提交按钮 */}
          <div className="flex justify-end">
            <Button type="submit" className="px-8">
              Register Product
            </Button>
          </div>
        </form>
      </div>

      {/* 支持信息 */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Need Help with Registration?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Common Issues</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Can't find your serial number?</li>
              <li>• Product not in our database?</li>
              <li>• Receipt missing or unclear?</li>
              <li>• Purchased from unauthorized seller?</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Get Support</h4>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Contact Support
              </button>
              <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Live Chat
              </button>
              <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Warranty FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
