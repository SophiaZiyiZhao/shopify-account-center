import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package, Calendar, DollarSign, Truck, Eye, RotateCcw, ChevronRight, XCircle, CreditCard, MessageCircle, MapPin, Clock, Search, Filter, SortAsc } from 'lucide-react'

export default async function OrdersPage() {
  // 临时跳过登录验证，用于测试
  // const token = getCustomerAccessToken()
  
  // if (!token) {
  //   redirect('/login')
  // }

  // const customer = await getCustomer(token)
  
  // if (!customer) {
  //   redirect('/login')
  // }

  // 模拟订单数据用于测试
  const orders = [
    {
      node: {
        id: '1',
        orderNumber: 1001,
        processedAt: '2024-01-15T10:30:00Z',
        totalPrice: { amount: '299.00', currencyCode: 'USD' },
        fulfillmentStatus: 'fulfilled',
        trackingNumber: '1Z999AA1234567890',
        estimatedDelivery: '2024-01-18T00:00:00Z',
        lineItems: {
          edges: [
            {
              node: {
                id: '1',
                title: 'Shokz OpenRun Pro',
                quantity: 1,
                variant: {
                  title: 'Black',
                  price: { amount: '199.00', currencyCode: 'USD' },
                  image: { url: '/placeholder-product.jpg', altText: 'Shokz OpenRun Pro' }
                }
              }
            },
            {
              node: {
                id: '2',
                title: 'Shokz OpenSwim',
                quantity: 1,
                variant: {
                  title: 'Blue',
                  price: { amount: '199.00', currencyCode: 'USD' },
                  image: { url: '/placeholder-product.jpg', altText: 'Shokz OpenSwim' }
                }
              }
            }
          ]
        },
        shippingAddress: {
          firstName: 'Sophia',
          lastName: 'Zhao',
          address1: '123 Main St',
          city: 'San Francisco',
          province: 'CA',
          zip: '94102',
          country: 'United States',
          phone: '+1 (555) 123-4567'
        }
      }
    },
    {
      node: {
        id: '2',
        orderNumber: 1002,
        processedAt: '2024-01-20T14:15:00Z',
        totalPrice: { amount: '199.00', currencyCode: 'USD' },
        fulfillmentStatus: 'shipped',
        trackingNumber: '1Z999BB9876543210',
        estimatedDelivery: '2024-01-25T00:00:00Z',
        lineItems: {
          edges: [
            {
              node: {
                id: '3',
                title: 'Shokz OpenSwim',
                quantity: 1,
                variant: {
                  title: 'Blue',
                  price: { amount: '199.00', currencyCode: 'USD' },
                  image: { url: '/placeholder-product.jpg', altText: 'Shokz OpenSwim' }
                }
              }
            }
          ]
        },
        shippingAddress: {
          firstName: 'Sophia',
          lastName: 'Zhao',
          address1: '123 Main St',
          city: 'San Francisco',
          province: 'CA',
          zip: '94102',
          country: 'United States',
          phone: '+1 (555) 123-4567'
        }
      }
    },
    {
      node: {
        id: '3',
        orderNumber: 1003,
        processedAt: '2024-01-25T09:45:00Z',
        totalPrice: { amount: '149.00', currencyCode: 'USD' },
        fulfillmentStatus: 'processing',
        lineItems: {
          edges: [
            {
              node: {
                id: '4',
                title: 'Shokz OpenComm',
                quantity: 1,
                variant: {
                  title: 'Black',
                  price: { amount: '149.00', currencyCode: 'USD' },
                  image: { url: '/placeholder-product.jpg', altText: 'Shokz OpenComm' }
                }
              }
            }
          ]
        },
        shippingAddress: {
          firstName: 'Sophia',
          lastName: 'Zhao',
          address1: '123 Main St',
          city: 'San Francisco',
          province: 'CA',
          zip: '94102',
          country: 'United States',
          phone: '+1 (555) 123-4567'
        }
      }
    },
    {
      node: {
        id: '4',
        orderNumber: 1004,
        processedAt: '2024-01-28T16:20:00Z',
        cancelledAt: '2024-01-29T10:15:00Z',
        totalPrice: { amount: '229.00', currencyCode: 'USD' },
        fulfillmentStatus: 'cancelled',
        cancelReason: 'Customer requested cancellation',
        refundStatus: 'processed',
        refundAmount: { amount: '229.00', currencyCode: 'USD' },
        refundProcessedAt: '2024-01-29T14:30:00Z',
        lineItems: {
          edges: [
            {
              node: {
                id: '5',
                title: 'Shokz OpenRun',
                quantity: 1,
                variant: {
                  title: 'White',
                  price: { amount: '129.00', currencyCode: 'USD' },
                  image: { url: '/placeholder-product.jpg', altText: 'Shokz OpenRun' }
                }
              }
            },
            {
              node: {
                id: '6',
                title: 'Shokz Carrying Case',
                quantity: 1,
                variant: {
                  title: 'Black',
                  price: { amount: '29.00', currencyCode: 'USD' },
                  image: { url: '/placeholder-product.jpg', altText: 'Shokz Carrying Case' }
                }
              }
            }
          ]
        },
        shippingAddress: {
          firstName: 'Sophia',
          lastName: 'Zhao',
          address1: '123 Main St',
          city: 'San Francisco',
          province: 'CA',
          zip: '94102',
          country: 'United States',
          phone: '+1 (555) 123-4567'
        }
      }
    },
    {
      node: {
        id: '5',
        orderNumber: 1005,
        processedAt: '2024-01-30T09:15:00Z',
        cancelledAt: '2024-01-31T14:20:00Z',
        totalPrice: { amount: '179.00', currencyCode: 'USD' },
        fulfillmentStatus: 'cancelled',
        cancelReason: 'Customer requested cancellation',
        refundStatus: 'pending',
        refundAmount: { amount: '179.00', currencyCode: 'USD' },
        refundRequestedAt: '2024-01-31T14:20:00Z',
        estimatedRefundDate: '2024-02-05T00:00:00Z',
        refundMethod: 'Visa •••• 4242',
        lineItems: {
          edges: [
            {
              node: {
                id: '7',
                title: 'Shokz OpenComm',
                quantity: 1,
                variant: {
                  title: 'Black',
                  price: { amount: '149.00', currencyCode: 'USD' },
                  image: { url: '/placeholder-product.jpg', altText: 'Shokz OpenComm' }
                }
              }
            },
            {
              node: {
                id: '8',
                title: 'Shokz Ear Tips',
                quantity: 1,
                variant: {
                  title: 'Small',
                  price: { amount: '29.00', currencyCode: 'USD' },
                  image: { url: '/placeholder-product.jpg', altText: 'Shokz Ear Tips' }
                }
              }
            }
          ]
        },
        shippingAddress: {
          firstName: 'Sophia',
          lastName: 'Zhao',
          address1: '123 Main St',
          city: 'San Francisco',
          province: 'CA',
          zip: '94102',
          country: 'United States',
          phone: '+1 (555) 123-4567'
        }
      }
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">
          Order History
        </h1>
        <p className="text-gray-600">
          View and manage your orders
        </p>
      </div>

      {/* 搜索和筛选区域 - 参考Amazon和Shopify的设计 */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* 搜索框 */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by order number, product name, or tracking number..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
              />
            </div>
          </div>
          
          {/* 筛选选项 */}
          <div className="flex gap-3">
            {/* 状态筛选 */}
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm">
              <option value="">All Status</option>
              <option value="fulfilled">Delivered</option>
              <option value="shipped">Shipped</option>
              <option value="processing">Processing</option>
              <option value="cancelled">Cancelled</option>
            </select>
            
            {/* 日期筛选 */}
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm">
              <option value="">All Time</option>
              <option value="last-30-days">Last 30 days</option>
              <option value="last-3-months">Last 3 months</option>
              <option value="last-year">Last year</option>
            </select>
            
            {/* 排序 */}
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm">
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="amount-high">Amount: High to Low</option>
              <option value="amount-low">Amount: Low to High</option>
            </select>
          </div>
        </div>
        
        {/* 快速筛选标签 */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Quick filters:</span>
          <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            Recent Orders
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            Need Attention
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            Returns & Refunds
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            High Value
          </button>
        </div>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map(({ node: order }) => (
            <div key={order.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow">
              <div className="p-4">
                {/* Order Header - Compact */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Order #{order.orderNumber}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(order.processedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>{order.lineItems.edges.length} item{order.lineItems.edges.length > 1 ? 's' : ''}</p>
                      <p className="text-gray-500">
                        {order.lineItems.edges[0]?.node.title}
                        {order.lineItems.edges.length > 1 && ` +${order.lineItems.edges.length - 1} more`}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-gray-900">
                      ${order.totalPrice.amount}
                    </p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      order.fulfillmentStatus === 'fulfilled' 
                        ? 'bg-green-100 text-green-800'
                        : order.fulfillmentStatus === 'shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : order.fulfillmentStatus === 'cancelled'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.fulfillmentStatus === 'fulfilled' ? 'Delivered' : 
                       order.fulfillmentStatus === 'shipped' ? 'Shipped' : 
                       order.fulfillmentStatus === 'cancelled' ? 'Cancelled' : 'Processing'}
                    </span>
                  </div>
                </div>

                {/* Tracking Information - Integrated */}
                {order.fulfillmentStatus === 'shipped' && order.trackingNumber && (
                  <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Tracking: {order.trackingNumber}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-700">
                        <Clock className="h-3 w-3" />
                        <span>Est. delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cancelled Order Information - Enhanced */}
                {order.fulfillmentStatus === 'cancelled' && (
                  <div className="mb-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium text-red-900">Order Cancelled</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.refundStatus === 'processed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.refundStatus === 'processed' ? 'Refunded' : 'Refund Pending'}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-red-700">Refund Amount:</span>
                        <span className="font-medium text-red-900">${order.refundAmount.amount}</span>
                      </div>
                      
                      {order.refundStatus === 'processed' ? (
                        <div className="flex items-center justify-between">
                          <span className="text-red-700">Refunded to:</span>
                          <span className="text-red-900">{order.refundMethod || 'Original payment method'}</span>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-red-700">Refund to:</span>
                            <span className="text-red-900">{order.refundMethod || 'Original payment method'}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-red-700">Estimated refund:</span>
                            <span className="text-red-900">
                              {order.estimatedRefundDate ? 
                                new Date(order.estimatedRefundDate).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric'
                                }) : '3-5 business days'
                              }
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {order.refundStatus === 'processed' && order.refundProcessedAt && (
                        <div className="flex items-center justify-between">
                          <span className="text-red-700">Processed:</span>
                          <span className="text-red-900">
                            {new Date(order.refundProcessedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* AfterShip Return Integration Notice */}
                    {order.refundStatus === 'pending' && (
                      <div className="mt-3 pt-3 border-t border-red-200">
                        <div className="flex items-center gap-2 text-xs text-red-600">
                          <Clock className="h-3 w-3" />
                          <span>Processing refund via AfterShip Return. You'll receive an email confirmation once processed.</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons - Integrated */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Eye className="h-4 w-4" />
                      View Details
                    </button>

                    {order.fulfillmentStatus === 'shipped' && (
                      <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                        <Truck className="h-4 w-4" />
                        Track Package
                      </button>
                    )}
                    
                    {order.fulfillmentStatus === 'fulfilled' && (
                      <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <RotateCcw className="h-4 w-4" />
                        Return Item
                      </button>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <RotateCcw className="h-4 w-4" />
                      Reorder
                    </button>
                    
                    {order.fulfillmentStatus === 'cancelled' && (
                      <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        Support
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Package className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
          <p className="text-gray-500 mb-6">When you place your first order, it will appear here.</p>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Start Shopping
          </button>
        </div>
      )}
    </div>
  )
}