'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* 品牌标识 */}
        <div className="text-center">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Shokz</h1>
          <p className="text-sm text-gray-600 font-light">Open-ear audio for life</p>
        </div>

        {/* 注册表单 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 text-sm font-light placeholder-gray-400 bg-transparent"
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
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 text-sm font-light placeholder-gray-400 bg-transparent"
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
              className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 text-sm font-light placeholder-gray-400 bg-transparent"
              required
            />
          </div>

          <div>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 text-sm font-light placeholder-gray-400 bg-transparent"
              required
            />
          </div>

          <div>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 text-sm font-light placeholder-gray-400 bg-transparent"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors font-medium"
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}
        </form>

        {/* 底部链接 */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-light">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-black hover:text-gray-700 font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Demo提示 */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            <strong>Demo Mode:</strong> Any information will work for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  )
}