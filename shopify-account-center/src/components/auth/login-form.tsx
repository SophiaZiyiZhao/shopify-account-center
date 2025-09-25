'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

type LoginMethod = 'shop' | 'email'

export function LoginForm() {
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('email')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [codeSent, setCodeSent] = useState(false)
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* 品牌标识 */}
        <div className="text-center">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Shokz</h1>
          <p className="text-sm text-gray-600 font-light">Open-ear audio for life</p>
        </div>

        {/* 登录方式选择 */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => setLoginMethod('email')}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
              loginMethod === 'email'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Email
          </button>
          <button
            type="button"
            onClick={() => setLoginMethod('shop')}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
              loginMethod === 'shop'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Shop
          </button>
        </div>

        {/* 登录表单 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {loginMethod === 'email' ? (
            <>
              {!codeSent ? (
                <>
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 text-sm font-light placeholder-gray-400 bg-transparent"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors font-medium"
                  >
                    {isLoading ? 'Sending...' : 'Send Code'}
                  </Button>
                </>
              ) : (
                <>
                  <div>
                    <Input
                      type="text"
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 text-sm font-light placeholder-gray-400 bg-transparent"
                    />
                    <p className="text-sm text-gray-500 mt-2 font-light">
                      We&apos;ve sent a verification code to {email}
                    </p>
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors font-medium"
                  >
                    {isLoading ? 'Verifying...' : 'Verify & Login'}
                  </Button>
                </>
              )}
            </>
          ) : (
            <Button
              type="button"
              onClick={handleShopLogin}
              disabled={isLoading}
              className="w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors font-medium"
            >
              {isLoading ? 'Connecting...' : 'Login with Shop Pay'}
            </Button>
          )}

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}
        </form>

        {/* 底部链接 - 极简设计 */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-light">
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="text-black hover:text-gray-700 font-medium transition-colors"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Demo提示 */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            <strong>Demo Mode:</strong> Any email/password will work for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  )
}