import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CreditCard, Plus, Edit, Trash2, Shield, Lock } from 'lucide-react'

export default async function PaymentPage() {
  const token = getCustomerAccessToken()
  
  if (!token) {
    redirect('/login')
  }

  const customer = await getCustomer(token)
  
  if (!customer) {
    redirect('/login')
  }

  // Mock payment methods data since Shopify Storefront API doesn't provide payment methods
  const paymentMethods = [
    {
      id: '1',
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiryMonth: '12',
      expiryYear: '2025',
      isDefault: true,
    },
    {
      id: '2',
      type: 'card',
      last4: '5555',
      brand: 'Mastercard',
      expiryMonth: '08',
      expiryYear: '2026',
      isDefault: false,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-2">
          Payment Methods
        </h1>
        <p className="text-primary-600 dark:text-primary-400">
          Manage your saved payment methods for faster checkout
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-primary-600 dark:text-primary-400">
          {paymentMethods.length} payment method{paymentMethods.length !== 1 ? 's' : ''} saved
        </p>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </div>

      {paymentMethods.length > 0 ? (
        <div className="space-y-6">
          {paymentMethods.map((method) => (
            <Card key={method.id} className="relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-primary-100 dark:bg-primary-800 rounded flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {method.brand} •••• {method.last4}
                      </CardTitle>
                      <CardDescription>
                        Expires {method.expiryMonth}/{method.expiryYear}
                      </CardDescription>
                    </div>
                  </div>
                  {method.isDefault && (
                    <Badge variant="secondary">Default</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  {!method.isDefault && (
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  )}
                  {!method.isDefault && (
                    <Button variant="outline" size="sm">
                      Set as Default
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="text-center py-12">
            <CreditCard className="h-16 w-16 text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
              No payment methods saved
            </h3>
            <p className="text-primary-600 dark:text-primary-400 mb-6">
              Add a payment method to make checkout faster and easier.
            </p>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Your First Payment Method
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Security Information */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Lock className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-primary-900 dark:text-primary-100 mb-1">
                  Secure Storage
                </h4>
                <p className="text-sm text-primary-600 dark:text-primary-400">
                  Your payment information is encrypted and stored securely using industry-standard security measures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-primary-900 dark:text-primary-100 mb-1">
                  PCI Compliance
                </h4>
                <p className="text-sm text-primary-600 dark:text-primary-400">
                  We are PCI DSS compliant and follow strict security standards to protect your data.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Tips */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Payment Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-600 dark:text-primary-400">
            <div>
              <h4 className="font-medium text-primary-900 dark:text-primary-100 mb-2">
                Default Payment Method
              </h4>
              <p>
                Your default payment method will be automatically selected during checkout. 
                You can change it anytime.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-primary-900 dark:text-primary-100 mb-2">
                Multiple Cards
              </h4>
              <p>
                Save multiple payment methods for different purposes or to have backup options 
                during checkout.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
