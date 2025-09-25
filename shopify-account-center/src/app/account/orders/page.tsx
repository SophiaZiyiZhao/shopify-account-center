import { redirect } from 'next/navigation'
import { getCustomerAccessToken } from '@/lib/auth'
import { getCustomer } from '@/lib/shopify'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package, Calendar, DollarSign, Truck, Eye, RotateCcw, ChevronRight, XCircle, CreditCard, MessageCircle } from 'lucide-react'

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
          firstName: 'John',
          lastName: 'Doe',
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
          firstName: 'John',
          lastName: 'Doe',
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
          firstName: 'John',
          lastName: 'Doe',
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
          firstName: 'John',
          lastName: 'Doe',
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
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-gray-900 mb-3">
          Order History
        </h1>
        <p className="text-lg text-gray-600 font-light">
          View and manage your orders
        </p>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map(({ node: order }) => (
            <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
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
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">
                          {order.lineItems.edges.length} item{order.lineItems.edges.length > 1 ? 's' : ''}
                        </p>
                        <p className="text-sm text-gray-500">
                          {order.lineItems.edges[0]?.node.title}
                          {order.lineItems.edges.length > 1 && ` +${order.lineItems.edges.length - 1} more`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-gray-900 flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {order.totalPrice.amount}
                    </p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
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

                {/* Cancelled Order Information */}
                {order.fulfillmentStatus === 'cancelled' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-red-800 mb-2">Order Cancelled</h4>
                        <div className="space-y-2 text-sm text-red-700">
                          <p><strong>Reason:</strong> {order.cancelReason}</p>
                          <p><strong>Cancelled:</strong> {order.cancelledAt ? new Date(order.cancelledAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          }) : 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Refund Information */}
                    <div className="mt-4 pt-4 border-t border-red-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-red-600" />
                          <span className="text-sm font-medium text-red-800">Refund Status</span>
                        </div>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          order.refundStatus === 'processed' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.refundStatus === 'processed' ? 'Processed' : 'Pending'}
                        </span>
                      </div>
                      {order.refundStatus === 'processed' && (
                        <div className="mt-2 text-sm text-red-700">
                          <p><strong>Refund Amount:</strong> ${order.refundAmount.amount}</p>
                          <p><strong>Processed:</strong> {new Date(order.refundProcessedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</p>
                          <p className="text-xs text-red-600 mt-1">
                            Refund will appear in your account within 3-5 business days
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons - Conditional */}
                <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Eye className="h-4 w-4" />
                    View Details
                  </button>
                  
                  {order.fulfillmentStatus === 'shipped' && (
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
                      <Truck className="h-4 w-4" />
                      Track Package
                    </button>
                  )}
                  
                  {order.fulfillmentStatus === 'cancelled' ? (
                    <>
                      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
                        <RotateCcw className="h-4 w-4" />
                        Reorder Items
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        Contact Support
                      </button>
                    </>
                  ) : (
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <RotateCcw className="h-4 w-4" />
                      Reorder
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <Package className="h-12 w-12 text-gray-400" />
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