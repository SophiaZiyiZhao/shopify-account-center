import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Gift, Plus, CreditCard, Calendar, DollarSign, Search } from 'lucide-react'

export default function GiftCardsPage() {
  // Demo mode - no authentication required

  // Mock gift card data
  const giftCards = [
    {
      id: '1',
      code: 'SHOKZ-2024-ABC123',
      balance: 75.00,
      originalAmount: 100.00,
      status: 'active',
      expiryDate: '2025-12-31',
      issuedDate: '2024-01-15',
    },
    {
      id: '2',
      code: 'SHOKZ-2024-DEF456',
      balance: 0.00,
      originalAmount: 50.00,
      status: 'used',
      expiryDate: '2025-06-30',
      issuedDate: '2024-02-10',
    },
    {
      id: '3',
      code: 'SHOKZ-2024-GHI789',
      balance: 25.00,
      originalAmount: 25.00,
      status: 'active',
      expiryDate: '2025-03-15',
      issuedDate: '2024-03-01',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-2">
          Gift Cards
        </h1>
        <p className="text-primary-600 dark:text-primary-400">
          Manage your Shokz gift cards and check balances
        </p>
      </div>

      {/* Gift Card Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-primary-600 dark:text-primary-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${giftCards.filter(card => card.status === 'active').reduce((sum, card) => sum + card.balance, 0).toFixed(2)}
            </div>
            <p className="text-xs text-primary-600 dark:text-primary-400">
              Available balance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cards</CardTitle>
            <Gift className="h-4 w-4 text-primary-600 dark:text-primary-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{giftCards.filter(card => card.status === 'active').length}</div>
            <p className="text-xs text-primary-600 dark:text-primary-400">
              With remaining balance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cards</CardTitle>
            <CreditCard className="h-4 w-4 text-primary-600 dark:text-primary-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{giftCards.length}</div>
            <p className="text-xs text-primary-600 dark:text-primary-400">
              All gift cards
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Check Gift Card Balance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Check Gift Card Balance
          </CardTitle>
          <CardDescription>
            Enter a gift card code to check its balance and status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Enter gift card code (e.g., SHOKZ-2024-ABC123)"
              className="flex-1"
            />
            <Button>Check Balance</Button>
          </div>
        </CardContent>
      </Card>

      {/* Gift Cards List */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100">
            Your Gift Cards
          </h2>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Buy Gift Card
          </Button>
        </div>
        
        {giftCards.length > 0 ? (
          <div className="space-y-4">
            {giftCards.map((card) => (
              <Card key={card.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg font-mono">{card.code}</CardTitle>
                      <CardDescription>
                        Issued on {new Date(card.issuedDate).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge 
                        className={
                          card.status === 'active' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                        }
                      >
                        {card.status === 'active' ? 'Active' : 'Used'}
                      </Badge>
                      <span className="text-2xl font-bold text-shokz-600">
                        ${card.balance.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-primary-900 dark:text-primary-100 mb-1">
                        Original Amount
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        ${card.originalAmount.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900 dark:text-primary-100 mb-1">
                        Expiry Date
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        {new Date(card.expiryDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900 dark:text-primary-100 mb-1">
                        Days Remaining
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        {Math.ceil((new Date(card.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                      </p>
                    </div>
                  </div>
                  
                  {card.status === 'active' && (
                    <div className="mt-4 pt-4 border-t border-primary-200 dark:border-primary-700">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Gift className="h-4 w-4 mr-2" />
                          Use Gift Card
                        </Button>
                        <Button variant="outline" size="sm">
                          <CreditCard className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <Gift className="h-16 w-16 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                No gift cards found
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-6">
                You don&apos;t have any gift cards yet. Purchase a gift card to get started.
              </p>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Buy Your First Gift Card
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Buy Gift Cards */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Buy Shokz Gift Cards</CardTitle>
          <CardDescription>
            Perfect for gifting Shokz products to friends and family
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-primary-200 dark:border-primary-700 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
                $25 Gift Card
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-4">
                Perfect for accessories and small items
              </p>
              <Button size="sm" className="w-full">Buy Now</Button>
            </div>
            
            <div className="p-6 border border-shokz-200 dark:border-shokz-700 rounded-lg text-center bg-shokz-50 dark:bg-shokz-900/20">
              <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
                $50 Gift Card
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-4">
                Great for most Shokz products
              </p>
              <Button size="sm" className="w-full">Buy Now</Button>
            </div>
            
            <div className="p-6 border border-primary-200 dark:border-primary-700 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
                $100 Gift Card
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-4">
                Perfect for premium Shokz products
              </p>
              <Button size="sm" className="w-full">Buy Now</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gift Card Information */}
      <Card>
        <CardHeader>
          <CardTitle>Gift Card Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                How to Use Gift Cards
              </h4>
              <p className="text-sm text-primary-600 dark:text-primary-400">
                Enter your gift card code during checkout to apply the balance to your order. Gift cards can be used for any Shokz products and accessories.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                Gift Card Terms
              </h4>
              <ul className="text-sm text-primary-600 dark:text-primary-400 space-y-1">
                <li>• Gift cards never expire</li>
                <li>• Can be used for multiple purchases until balance is exhausted</li>
                <li>• Cannot be redeemed for cash</li>
                <li>• Can be combined with other payment methods</li>
                <li>• Valid for all Shokz products and accessories</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                Sending Gift Cards
              </h4>
              <p className="text-sm text-primary-600 dark:text-primary-400">
                Gift cards can be sent via email to any recipient. You can schedule delivery for a specific date, making them perfect for birthdays, holidays, and special occasions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
