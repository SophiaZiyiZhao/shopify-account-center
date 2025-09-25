import React from 'react'

interface ShokzBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'fitness' | 'achievement'
  size?: 'sm' | 'md'
  className?: string
}

export function ShokzBadge({ 
  children, 
  variant = 'default', 
  size = 'sm', 
  className = '' 
}: ShokzBadgeProps) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full'
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    fitness: 'bg-orange-100 text-orange-800',
    achievement: 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800'
  }
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm'
  }
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  )
}
