import { redirect } from 'next/navigation'
import { getCustomerAccessToken } from '@/lib/auth'
import { getCustomer } from '@/lib/shopify'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Truck, Package, MapPin, Clock, CheckCircle, AlertCircle, Search, ExternalLink, RotateCcw, FileText } from 'lucide-react'

export default async function TrackPage() {
  // 临时跳过登录验证，用于测试
  // const token = getCustomerAccessToken()
  
  // if (!token) {
  //   redirect('/login')
  // }

  // const customer = await getCustomer(token)
  
  // if (!customer) {
  //   redirect('/login')
  // }

  // 模拟跟踪数据 - 集成AfterShip API
  const trackingData = [
    {
      id: '1',
      orderNumber: '1002',
      trackingNumber: '1Z999AA1234567890',
      carrier: 'UPS',
      status: 'in_transit',
      estimatedDelivery: '2024-01-22T18:00:00Z',
      currentLocation: 'San Francisco, CA',
      progress: 75,
      timeline: [
        {
          id: '1',
          status: 'delivered',
          description: 'Package delivered',
          location: 'San Francisco, CA',
          timestamp: '2024-01-22T14:30:00Z',
          completed: true
        },
        {
          id: '2',
          status: 'out_for_delivery',
          description: 'Out for delivery',
          location: 'San Francisco, CA',
          timestamp: '2024-01-22T08:00:00Z',
          completed: true
        },
        {
          id: '3',
          status: 'in_transit',
          description: 'In transit',
          location: 'Oakland, CA',
          timestamp: '2024-01-21T16:45:00Z',
          completed: true
        },
        {
          id: '4',
          status: 'picked_up',
          description: 'Package picked up',
          location: 'Los Angeles, CA',
          timestamp: '2024-01-20T10:00:00Z',
          completed: true
        }
      ],
      items: [
        {
          id: '1',
          name: 'Shokz OpenSwim',
          quantity: 1,
          image: '/placeholder-product.jpg'
        }
      ]
    },
    {
      id: '2',
      orderNumber: '1003',
      trackingNumber: '9400111206213859496182',
      carrier: 'USPS',
      status: 'processing',
      estimatedDelivery: '2024-01-28T18:00:00Z',
      currentLocation: 'Processing Center',
      progress: 25,
      timeline: [
        {
          id: '1',
          status: 'processing',
          description: 'Package being processed',
          location: 'Los Angeles, CA',
          timestamp: '2024-01-25T09:45:00Z',
          completed: true
        },
        {
          id: '2',
          status: 'pending',
          description: 'Package picked up',
          location: 'Los Angeles, CA',
          timestamp: '2024-01-28T10:00:00Z',
          completed: false
        }
      ],
      items: [
        {
          id: '1',
          name: 'Shokz OpenComm',
          quantity: 1,
          image: '/placeholder-product.jpg'
        }
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-gray-900 mb-2">
          Track & Returns
        </h1>
        <p className="text-base text-gray-600 font-light">
          Real-time updates on your shipments
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Track by Number */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-light text-gray-900 mb-4 flex items-center gap-2">
            <Search className="h-5 w-5" />
            Track by Number
          </h2>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter tracking number"
                className="w-full"
              />
            </div>
            <Button className="px-6">
              Track Package
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Enter your tracking number to get real-time updates
          </p>
        </div>

        {/* Start Return */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-light text-gray-900 mb-4 flex items-center gap-2">
            <RotateCcw className="h-5 w-5" />
            Start a Return
          </h2>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter order number"
                className="w-full"
              />
            </div>
            <Button className="px-6">
              Start Return
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Enter your order number to begin the return process
          </p>
        </div>
      </div>

      {/* Active Shipments - Status-Driven Design */}
      <div className="space-y-4 mb-8">
        {trackingData.map((shipment) => (
          <div key={shipment.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              {/* Status Header - Most Important */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    shipment.status === 'delivered' 
                      ? 'bg-green-500'
                      : shipment.status === 'in_transit'
                      ? 'bg-blue-500'
                      : 'bg-yellow-500'
                  }`}></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {shipment.status === 'delivered' ? 'Delivered' : 
                       shipment.status === 'in_transit' ? 'On the way' : 'Processing'}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Order #{shipment.orderNumber}
                    </p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  shipment.status === 'delivered' 
                    ? 'bg-green-100 text-green-800'
                    : shipment.status === 'in_transit'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {shipment.status === 'delivered' ? 'Delivered' : 
                   shipment.status === 'in_transit' ? 'In Transit' : 'Processing'}
                </span>
              </div>

              {/* Key Information - Horizontal Layout */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Progress</p>
                  <p className="text-lg font-semibold text-gray-900">{shipment.progress}%</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                  <p className="text-sm font-medium text-gray-900">{shipment.currentLocation}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Est. Delivery</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(shipment.estimatedDelivery).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Carrier</p>
                  <p className="text-sm font-medium text-gray-900">{shipment.carrier}</p>
                </div>
              </div>

              {/* Progress Bar - More Prominent */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
                      shipment.status === 'delivered' 
                        ? 'bg-green-500'
                        : shipment.status === 'in_transit'
                        ? 'bg-blue-500'
                        : 'bg-yellow-500'
                    }`}
                    style={{ width: `${shipment.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Timeline - Collapsed by default */}
              <div className="mb-6">
                <button className="flex items-center justify-between w-full text-left">
                  <h4 className="text-sm font-medium text-gray-900">Tracking Timeline</h4>
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-1">Click to view detailed tracking history</p>
              </div>

              {/* Items - Simplified */}
              <div className="mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Package className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{shipment.items[0]?.name}</p>
                    <p className="text-sm text-gray-500">
                      {shipment.items.length} item{shipment.items.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>

              {/* Next Steps & Actions */}
              <div className="pt-4 border-t border-gray-100">
                {/* Predictive Information */}
                {shipment.status === 'in_transit' && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Next:</strong> Your package will arrive by {new Date(shipment.estimatedDelivery).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                )}
                
                {shipment.status === 'delivered' && (
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Delivered!</strong> Your package was delivered successfully. 
                      <a href="#" className="underline ml-1">Rate your experience</a>
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Track on {shipment.carrier}
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Order Details
                  </Button>
                  {shipment.status === 'delivered' && (
                    <Button className="flex items-center gap-2">
                      <RotateCcw className="h-4 w-4" />
                      Start Return
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Returns - Conditional Display */}
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-light text-gray-900">Returns</h2>
        
        {/* Return Item */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Return #RMA-2024-002
                </h3>
                <p className="text-sm text-gray-500">
                  Order #1002 • Wrong size • $199.00
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                In Transit
              </span>
            </div>
            
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                View Details
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Track Return
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* AfterShip Integration Info */}
      <div className="mt-12 bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Truck className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">Powered by AfterShip</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          We use AfterShip to provide real-time tracking updates from 1000+ carriers worldwide 
          and seamless return management. Get accurate delivery estimates and detailed tracking information.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-white rounded text-xs text-gray-600">Real-time Updates</span>
          <span className="px-2 py-1 bg-white rounded text-xs text-gray-600">1000+ Carriers</span>
          <span className="px-2 py-1 bg-white rounded text-xs text-gray-600">Delivery Estimates</span>
          <span className="px-2 py-1 bg-white rounded text-xs text-gray-600">Return Management</span>
          <span className="px-2 py-1 bg-white rounded text-xs text-gray-600">SMS Notifications</span>
        </div>
      </div>
    </div>
  )
}