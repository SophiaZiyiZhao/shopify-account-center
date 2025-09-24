'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield, Star, Users, Headphones, Activity } from 'lucide-react'

type LoginMethod = 'shop' | 'email'

export function LoginForm() {
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('email')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
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

  const handleShopLogin = async () => {
    // Demo mode - redirect to account
    router.push('/account')
  }

  const sendVerificationCode = async () => {
    // Demo mode - simulate sending code
    setCodeSent(true)
  }

  const verifyCodeAndLogin = async () => {
    // Demo mode - redirect to account
    router.push('/account')
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

        {/* 登录卡片 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-2">Welcome back</h2>
            <p className="text-gray-600">Sign in to your Shokz account</p>
          </div>

          {/* 用户统计 */}
          <div className="mb-8 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-orange-500" />
                <span>2M+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-orange-500" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-orange-500" />
                <span>Secure</span>
              </div>
            </div>
          </div>

          {/* 社交登录按钮 */}
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
              <span className="px-3 bg-white text-gray-500 font-light">Or continue with email</span>
            </div>
          </div>

          {/* 登录表单 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 border border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-sm font-light placeholder-gray-400 bg-white rounded-xl"
                required
              />
            </div>

            <div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* 记住我和忘记密码 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 font-light">
                  Remember me
                </label>
              </div>
              <Link
                href="#"
                className="text-sm text-orange-600 hover:text-orange-700 font-light transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium transition-all rounded-xl shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center">
                  <Activity className="h-4 w-4 mr-2" />
                  Sign in
                </div>
              )}
            </Button>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-sm text-red-600 text-center">{error}</p>
              </div>
            )}
          </form>

          {/* 注册链接 */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 font-light">
              Don&apos;t have an account?{' '}
              <Link
                href="/register"
                className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>

        {/* Demo提示 */}
        <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Shield className="h-4 w-4 text-orange-500" />
            <span><strong>Demo Mode:</strong> Any email/password will work for demonstration purposes.</span>
          </div>
        </div>
      </div>
    </div>
  )
}