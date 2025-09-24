'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Shield, Star, Users, Headphones, Check, Gift, CheckCircle } from 'lucide-react'

export function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [agreeToMarketing, setAgreeToMarketing] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Demo mode - always redirect to account
      setTimeout(() => {
        router.push('/account')
      }, 1000)
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* 品牌标识 */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Headphones className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-light text-gray-900 mb-2">Shokz</h1>
          <p className="text-gray-600 font-light">Open-ear audio for life</p>
        </div>

        {/* 注册卡片 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-2">Join Shokz</h2>
            <p className="text-gray-600">Create your account and start your audio journey</p>
          </div>

          {/* 注册奖励展示 */}
          <div className="mb-8 p-4 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">Welcome Bonus</span>
            </div>
            <div className="text-xs text-orange-700 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3" />
                <span>$20 off your first order</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3" />
                <span>Free shipping on all orders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3" />
                <span>Join Shokz Star rewards program</span>
              </div>
            </div>
          </div>

          {/* 社交注册按钮 */}
          <div className="space-y-3 mb-6">
            <Button
              type="button"
              className="w-full h-12 bg-[#5a31f4] hover:bg-[#4a2bd4] text-white font-medium border-0 rounded-xl"
              onClick={() => router.push('/account')}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Continue with Shop Pay
            </Button>
            
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border border-gray-300 hover:bg-gray-50 text-gray-700 font-light rounded-xl"
              onClick={() => router.push('/account')}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
          </div>

          {/* 分割线 */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500 font-light">Or create account with email</span>
            </div>
          </div>

          {/* 注册表单 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-sm font-light placeholder-gray-400 bg-white rounded-xl"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-sm font-light placeholder-gray-400 bg-white rounded-xl"
                  required
                />
              </div>
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-sm font-light placeholder-gray-400 bg-white rounded-xl"
                required
              />
            </div>

            <div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-12 px-4 pr-12 border border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-sm font-light placeholder-gray-400 bg-white rounded-xl"
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full h-12 px-4 pr-12 border border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-sm font-light placeholder-gray-400 bg-white rounded-xl"
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* 条款同意 */}
            <div className="space-y-3">
              <div className="flex items-start">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-0.5"
                  required
                />
                <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700 font-light">
                  I agree to the{' '}
                  <Link href="#" className="text-orange-600 hover:text-orange-700 font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="text-orange-600 hover:text-orange-700 font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <div className="flex items-start">
                <input
                  id="agree-marketing"
                  name="agree-marketing"
                  type="checkbox"
                  checked={agreeToMarketing}
                  onChange={(e) => setAgreeToMarketing(e.target.checked)}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-0.5"
                />
                <label htmlFor="agree-marketing" className="ml-2 block text-sm text-gray-700 font-light">
                  I&apos;d like to receive product updates and exclusive offers from Shokz
                </label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading || !agreeToTerms}
              className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium transition-all rounded-xl shadow-lg disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creating account...
                </div>
              ) : (
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Create account
                </div>
              )}
            </Button>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-sm text-red-600 text-center">{error}</p>
              </div>
            )}
          </form>

          {/* 登录链接 */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 font-light">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Demo提示 */}
        <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Shield className="h-4 w-4 text-orange-500" />
            <span><strong>Demo Mode:</strong> Any information will work for demonstration purposes.</span>
          </div>
        </div>
      </div>
    </div>
  )
}