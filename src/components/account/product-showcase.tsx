'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Headphones, Volume2, Wifi, Battery, Zap } from 'lucide-react'

const productFeatures = [
  {
    icon: Headphones,
    title: 'Open-Ear Design',
    description: 'Stay aware of your surroundings while enjoying crystal-clear audio',
    color: 'text-shokz-600',
    bgColor: 'bg-shokz-100 dark:bg-shokz-900',
  },
  {
    icon: Volume2,
    title: 'Premium Sound',
    description: 'Advanced audio technology for immersive listening experience',
    color: 'text-primary-600',
    bgColor: 'bg-primary-100 dark:bg-primary-900',
  },
  {
    icon: Wifi,
    title: 'Wireless Freedom',
    description: 'Bluetooth connectivity with long-range and stable connection',
    color: 'text-shokz-600',
    bgColor: 'bg-shokz-100 dark:bg-shokz-900',
  },
  {
    icon: Battery,
    title: 'Long Battery Life',
    description: 'Extended playtime for your active lifestyle',
    color: 'text-primary-600',
    bgColor: 'bg-primary-100 dark:bg-primary-900',
  },
  {
    icon: Zap,
    title: 'Quick Charge',
    description: 'Fast charging technology for minimal downtime',
    color: 'text-shokz-600',
    bgColor: 'bg-shokz-100 dark:bg-shokz-900',
  },
]

export function ProductShowcase() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
          Your Shokz Audio Experience
        </h2>
        <p className="text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
          Discover the latest Shokz products and manage your audio journey with ease.
        </p>
      </div>

      {/* Featured Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-full h-48 bg-gradient-to-br from-shokz-100 to-shokz-200 dark:from-shokz-900 dark:to-shokz-800 rounded-lg flex items-center justify-center mb-4">
              <Headphones className="h-16 w-16 text-shokz-600" />
            </div>
            <CardTitle>OpenRun Pro</CardTitle>
            <CardDescription>
              Premium open-ear headphones with advanced audio technology
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-primary-900 dark:text-primary-100">
                $199.99
              </span>
              <Badge variant="secondary">Best Seller</Badge>
            </div>
            <Button className="w-full">View Details</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center mb-4">
              <Volume2 className="h-16 w-16 text-primary-600" />
            </div>
            <CardTitle>OpenRun</CardTitle>
            <CardDescription>
              Lightweight and comfortable open-ear headphones for active lifestyle
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-primary-900 dark:text-primary-100">
                $129.99
              </span>
              <Badge variant="outline">Popular</Badge>
            </div>
            <Button className="w-full">View Details</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-full h-48 bg-gradient-to-br from-shokz-100 to-shokz-200 dark:from-shokz-900 dark:to-shokz-800 rounded-lg flex items-center justify-center mb-4">
              <Battery className="h-16 w-16 text-shokz-600" />
            </div>
            <CardTitle>OpenComm</CardTitle>
            <CardDescription>
              Professional communication headset with noise cancellation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-primary-900 dark:text-primary-100">
                $159.99
              </span>
              <Badge variant="secondary">New</Badge>
            </div>
            <Button className="w-full">View Details</Button>
          </CardContent>
        </Card>
      </div>

      {/* Product Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Why Choose Shokz?</CardTitle>
          <CardDescription className="text-center">
            Experience the future of audio with our innovative open-ear technology
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audio Journey Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-shokz-600 mb-2">2.5M+</div>
            <p className="text-primary-600 dark:text-primary-400">
              Happy Shokz Users Worldwide
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-shokz-600 mb-2">15+</div>
            <p className="text-primary-600 dark:text-primary-400">
              Hours of Battery Life
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-shokz-600 mb-2">99%</div>
            <p className="text-primary-600 dark:text-primary-400">
              Customer Satisfaction Rate
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
