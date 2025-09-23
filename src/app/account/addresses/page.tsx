import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Plus, Edit, Trash2, Home, Building, Star, Check, Copy, Phone, Mail } from 'lucide-react'

export default async function AddressesPage() {
  // 临时跳过登录验证，用于测试
  // const token = getCustomerAccessToken()
  
  // if (!token) {
  //   redirect('/login')
  // }

  // const customer = await getCustomer(token)
  
  // if (!customer) {
  //   redirect('/login')
  // }

  // 模拟地址数据用于测试
  const addresses = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      company: '',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'San Francisco',
      province: 'CA',
      country: 'United States',
      zip: '94102',
      phone: '+1 (555) 123-4567',
      isDefault: true,
      type: 'home',
      lastUsed: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      firstName: 'John',
      lastName: 'Doe',
      company: 'Shokz Inc',
      address1: '456 Business Ave',
      address2: 'Suite 200',
      city: 'San Francisco',
      province: 'CA',
      country: 'United States',
      zip: '94105',
      phone: '+1 (555) 987-6543',
      isDefault: false,
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
      isDefault: false,
      type: 'gift',
      lastUsed: '2023-12-20T16:45:00Z'
    }
  ]
  const defaultAddress = addresses.find(addr => addr.isDefault)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-gray-900 mb-2">
          Address Book
        </h1>
        <p className="text-base text-gray-600 font-light">
          Manage your shipping and billing addresses
        </p>
      </div>

      {/* Header Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">
            {addresses.length} address{addresses.length !== 1 ? 'es' : ''} saved
          </p>
          {defaultAddress && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>Default: {defaultAddress.city}, {defaultAddress.province}</span>
            </div>
          )}
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New Address
        </Button>
      </div>

      {addresses.length > 0 ? (
        <div className="space-y-6">
          {/* Default Address - Prominent Display */}
          {defaultAddress && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Default Address</h3>
                    <p className="text-sm text-gray-600">Used for most orders</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {defaultAddress.type}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Default
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    {defaultAddress.firstName} {defaultAddress.lastName}
                  </p>
                  {defaultAddress.company && (
                    <p className="text-sm text-gray-600 mb-2">{defaultAddress.company}</p>
                  )}
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>{defaultAddress.address1}</p>
                    {defaultAddress.address2 && <p>{defaultAddress.address2}</p>}
                    <p>{defaultAddress.city}, {defaultAddress.province} {defaultAddress.zip}</p>
                    <p>{defaultAddress.country}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    {defaultAddress.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Phone className="h-4 w-4" />
                        <span>{defaultAddress.phone}</span>
                      </div>
                    )}
                    <p className="text-xs text-gray-500">
                      Last used: {new Date(defaultAddress.lastUsed).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Addresses */}
          {addresses.filter(addr => !addr.isDefault).length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Other Addresses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.filter(addr => !addr.isDefault).map((address) => (
                  <div key={address.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {address.type === 'home' ? (
                          <Home className="h-5 w-5 text-gray-600" />
                        ) : address.type === 'work' ? (
                          <Building className="h-5 w-5 text-gray-600" />
                        ) : (
                          <MapPin className="h-5 w-5 text-gray-600" />
                        )}
                        <span className="text-sm font-medium text-gray-900 capitalize">
                          {address.type} Address
                        </span>
                      </div>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {address.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="font-medium text-gray-900">
                        {address.firstName} {address.lastName}
                      </p>
                      {address.company && (
                        <p className="text-sm text-gray-600">{address.company}</p>
                      )}
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{address.address1}</p>
                        {address.address2 && <p>{address.address2}</p>}
                        <p>{address.city}, {address.province} {address.zip}</p>
                        <p>{address.country}</p>
                      </div>
                      {address.phone && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="h-4 w-4" />
                          <span>{address.phone}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        Last used: {new Date(address.lastUsed).toLocaleDateString()}
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No addresses saved
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Add your first address to make checkout faster and easier. You can save multiple addresses for different purposes.
          </p>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Your First Address
          </Button>
        </div>
      )}

      {/* Quick Tips */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Default Address</h4>
              <p className="text-sm text-gray-600">
                Your default address is automatically selected during checkout
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Multiple Addresses</h4>
              <p className="text-sm text-gray-600">
                Save addresses for home, work, or gift deliveries
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Copy className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Easy Management</h4>
              <p className="text-sm text-gray-600">
                Copy addresses to create new ones quickly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
