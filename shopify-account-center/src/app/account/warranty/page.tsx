import { redirect } from 'next/navigation'
import { getCustomerAccessToken } from '@/lib/auth'
import { getCustomer } from '@/lib/shopify'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Shield, Plus, Search, FileText, Clock, CheckCircle, AlertTriangle, ExternalLink, Calendar, MapPin, Phone, Package } from 'lucide-react'

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

  // 模拟从Salesforce Service Cloud获取的保修数据
  // 实际实现中，这里会通过API调用Salesforce获取用户的保修记录
  const warrantyRecords = [
    {
      id: '1',
      caseNumber: 'WC-2024-001234',
      productName: 'OpenRun Pro',
      serialNumber: 'SR-2024-001234',
      purchaseDate: '2024-01-15',
      warrantyExpiry: '2026-01-15', // 2年保修
      status: 'active',
      color: 'Black',
      country: 'United States',
      claimHistory: [
        {
          date: '2024-01-15',
          action: 'Product Registered',
          status: 'completed'
        }
      ]
    },
    {
      id: '2',
      caseNumber: 'WC-2024-005678',
      productName: 'OpenComm',
      serialNumber: 'SR-2024-005678',
      purchaseDate: '2023-12-10',
      warrantyExpiry: '2025-12-10', // 2年保修
      status: 'expiring',
      color: 'White',
      country: 'United States',
      claimHistory: [
        {
          date: '2023-12-10',
          action: 'Product Registered',
          status: 'completed'
        },
        {
          date: '2024-06-15',
          action: 'Warranty Claim Submitted',
          status: 'in_progress'
        }
      ]
    },
  ]

  // 模拟从Shopify订单中自动关联的产品
  const orderProducts = [
    {
      id: '3',
      orderNumber: '1001',
      productName: 'OpenSwim',
      serialNumber: 'SR-2024-009876',
      purchaseDate: '2024-02-20',
      warrantyExpiry: '2026-02-20',
      status: 'unregistered',
      color: 'Blue',
      country: 'United States'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-gray-900 mb-2">
          Warranty & Product Registration
        </h1>
        <p className="text-base text-gray-600 font-light">
          Manage your 2-year warranty coverage and product registration
        </p>
      </div>

      {/* Warranty Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Shield className="h-6 w-6 text-gray-600" />
            </div>
            <span className="text-2xl font-light text-gray-900">{warrantyRecords.length}</span>
          </div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">Registered Products</h3>
          <p className="text-sm text-gray-500">Products with warranty</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-2xl font-light text-green-600">{warrantyRecords.filter(p => p.status === 'active').length}</span>
          </div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">Active Warranties</h3>
          <p className="text-sm text-gray-500">Under warranty coverage</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <span className="text-2xl font-light text-yellow-600">{warrantyRecords.filter(p => p.status === 'expiring').length}</span>
          </div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">Expiring Soon</h3>
          <p className="text-sm text-gray-500">Warranty expiring</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-2xl font-light text-blue-600">{orderProducts.length}</span>
          </div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">Unregistered</h3>
          <p className="text-sm text-gray-500">From your orders</p>
        </div>
      </div>

      {/* Products from Orders - Auto Registration */}
      {orderProducts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Products from Your Orders</h2>
          <div className="space-y-4">
            {orderProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Package className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{product.productName}</h3>
                      <p className="text-sm text-gray-500">
                        Order #{product.orderNumber} • Serial: {product.serialNumber} • {product.color}
                      </p>
                      <p className="text-sm text-gray-500">
                        Purchased: {new Date(product.purchaseDate).toLocaleDateString()} • 
                        Warranty until: {new Date(product.warrantyExpiry).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      Unregistered
                    </span>
                    <Button size="sm">
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Register New Product */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-light text-gray-900 flex items-center gap-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Plus className="h-5 w-5 text-gray-600" />
            </div>
            Register a New Product
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Register your Shokz product to activate 2-year warranty coverage
          </p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Serial Number
              </label>
              <Input
                id="serialNumber"
                placeholder="Enter product serial number"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Date
              </label>
              <Input
                id="purchaseDate"
                type="date"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="productModel" className="block text-sm font-medium text-gray-700 mb-2">
                Product Model
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                <option value="">Select product model</option>
                <option value="openrun-pro">OpenRun Pro</option>
                <option value="openrun">OpenRun</option>
                <option value="opencomm">OpenComm</option>
                <option value="openswim">OpenSwim</option>
                <option value="openfit">OpenFit</option>
              </select>
            </div>
            <div>
              <label htmlFor="retailer" className="block text-sm font-medium text-gray-700 mb-2">
                Retailer
              </label>
              <Input
                id="retailer"
                placeholder="Where did you purchase this product?"
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-6">
            <Button className="w-full sm:w-auto">
              Register Product
            </Button>
          </div>
        </div>
      </div>

      {/* Registered Products - Salesforce Integration */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-gray-900">
            Your Warranty Records
          </h2>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              View in Salesforce
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search Records
            </Button>
          </div>
        </div>
        
        {warrantyRecords.length > 0 ? (
          <div className="space-y-4">
            {warrantyRecords.map((record) => (
              <div key={record.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <Shield className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{record.productName}</h3>
                      <p className="text-sm text-gray-500">
                        Case #{record.caseNumber} • Serial: {record.serialNumber} • {record.color}
                      </p>
                      <p className="text-sm text-gray-500">
                        Country: {record.country} • Purchased: {new Date(record.purchaseDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      record.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {record.status === 'active' ? 'Active Warranty' : 'Expiring Soon'}
                    </span>
                    <span className="text-sm text-gray-500">
                      Expires: {new Date(record.warrantyExpiry).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-500">Warranty Period</p>
                      <p className="text-sm font-medium text-gray-900">2 Years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Clock className="h-4 w-4 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-500">Days Remaining</p>
                      <p className="text-sm font-medium text-gray-900">
                        {Math.ceil((new Date(record.warrantyExpiry).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <FileText className="h-4 w-4 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-500">Claims History</p>
                      <p className="text-sm font-medium text-gray-900">{record.claimHistory.length} record(s)</p>
                    </div>
                  </div>
                </div>

                {/* Claim History */}
                {record.claimHistory.length > 0 && (
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Recent Activity</h4>
                    <div className="space-y-2">
                      {record.claimHistory.map((claim, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              claim.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                            }`}></div>
                            <span className="text-gray-700">{claim.action}</span>
                          </div>
                          <span className="text-gray-500">{new Date(claim.date).toLocaleDateString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 pt-4 border-t border-gray-100">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Submit Claim
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Track in Salesforce
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No warranty records found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Register your Shokz products to activate 2-year warranty coverage and track your claims.
            </p>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Register Your First Product
            </Button>
          </div>
        )}
      </div>

      {/* Warranty Information - Simplified */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-light text-gray-900">2-Year Warranty Coverage</h2>
          <p className="text-sm text-gray-500 mt-2">
            All Shokz products come with comprehensive 2-year warranty
          </p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">
                What&apos;s Covered
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Manufacturing defects
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Battery & audio issues
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Charging problems
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">
                What&apos;s Not Covered
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  Accidental damage
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  Water damage
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  Normal wear & tear
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              View Full Warranty Terms
            </Button>
          </div>
        </div>
      </div>

      {/* Warranty Claim Process - Simplified */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-light text-gray-900">How to Claim Warranty</h2>
          <p className="text-sm text-gray-500 mt-2">
            Simple process to get your product repaired or replaced
          </p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Submit Claim</h4>
                  <p className="text-sm text-gray-600">Use the &quot;Submit Claim&quot; button above</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Get Support</h4>
                  <p className="text-sm text-gray-600">Our team will help troubleshoot</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Return Authorization</h4>
                  <p className="text-sm text-gray-600">Get prepaid shipping label</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Repair or Replace</h4>
                  <p className="text-sm text-gray-600">5-7 business days turnaround</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                View in Salesforce
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
