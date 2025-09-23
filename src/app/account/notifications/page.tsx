import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bell, Mail, Smartphone, Settings } from 'lucide-react'

export default async function NotificationsPage() {
  const token = getCustomerAccessToken()
  
  if (!token) {
    redirect('/login')
  }

  const customer = await getCustomer(token)
  
  if (!customer) {
    redirect('/login')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-2">
          Notification Settings
        </h1>
        <p className="text-primary-600 dark:text-primary-400">
          Choose how you want to be notified about your account activity
        </p>
      </div>

      <div className="space-y-8">
        {/* Email Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Notifications
            </CardTitle>
            <CardDescription>
              Manage your email notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-primary-900 dark:text-primary-100">
                    Order Updates
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Get notified when your order status changes
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-primary-900 dark:text-primary-100">
                    Shipping Notifications
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Receive updates about your package delivery
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-primary-900 dark:text-primary-100">
                    Account Security
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Important security alerts and login notifications
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-primary-900 dark:text-primary-100">
                    Promotional Offers
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Special deals and exclusive offers
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked={customer.acceptsMarketing}
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-primary-900 dark:text-primary-100">
                    Product Recommendations
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Personalized product suggestions based on your interests
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked={customer.acceptsMarketing}
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300 rounded"
                />
              </div>
            </div>

            <Button className="w-full sm:w-auto">
              Save Email Preferences
            </Button>
          </CardContent>
        </Card>

        {/* Push Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Push Notifications
            </CardTitle>
            <CardDescription>
              Manage your mobile push notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-primary-900 dark:text-primary-100">
                    Order Status Updates
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Get instant notifications when your order status changes
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-primary-900 dark:text-primary-100">
                    Delivery Updates
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Real-time delivery tracking and updates
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-primary-900 dark:text-primary-100">
                    Flash Sales
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Limited-time offers and flash sale alerts
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked={customer.acceptsMarketing}
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-primary-900 dark:text-primary-100">
                    Back in Stock
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Notifications when items on your wishlist are back in stock
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300 rounded"
                />
              </div>
            </div>

            <Button className="w-full sm:w-auto">
              Save Push Preferences
            </Button>
          </CardContent>
        </Card>

        {/* Notification Frequency */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Notification Frequency
            </CardTitle>
            <CardDescription>
              Control how often you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary-900 dark:text-primary-100 mb-3">
                  Email Frequency
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="emailFrequency"
                      value="immediate"
                      defaultChecked
                      className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300"
                    />
                    <span className="ml-2 text-sm text-primary-700 dark:text-primary-300">
                      Immediate - Get notifications as they happen
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="emailFrequency"
                      value="daily"
                      className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300"
                    />
                    <span className="ml-2 text-sm text-primary-700 dark:text-primary-300">
                      Daily Digest - One email per day with all updates
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="emailFrequency"
                      value="weekly"
                      className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-primary-300"
                    />
                    <span className="ml-2 text-sm text-primary-700 dark:text-primary-300">
                      Weekly Summary - One email per week
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-primary-900 dark:text-primary-100 mb-3">
                  Quiet Hours
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">
                      Start Time
                    </label>
                    <input
                      type="time"
                      defaultValue="22:00"
                      className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">
                      End Time
                    </label>
                    <input
                      type="time"
                      defaultValue="08:00"
                      className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>
                </div>
                <p className="text-xs text-primary-600 dark:text-primary-400 mt-2">
                  Non-urgent notifications will be paused during these hours
                </p>
              </div>
            </div>

            <Button className="w-full sm:w-auto">
              Save Frequency Settings
            </Button>
          </CardContent>
        </Card>

        {/* Notification History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Notifications
            </CardTitle>
            <CardDescription>
              Your recent notification activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-primary-50 dark:bg-primary-900 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                    Order #12345 has been shipped
                  </p>
                  <p className="text-xs text-primary-600 dark:text-primary-400">
                    2 hours ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-primary-50 dark:bg-primary-900 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                    New promotional offer available
                  </p>
                  <p className="text-xs text-primary-600 dark:text-primary-400">
                    1 day ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-primary-50 dark:bg-primary-900 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                    Your wishlist item is back in stock
                  </p>
                  <p className="text-xs text-primary-600 dark:text-primary-400">
                    3 days ago
                  </p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4">
              View All Notifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
