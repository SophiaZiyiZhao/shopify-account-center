import React from 'react'

interface ShokzLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export function ShokzLogo({ size = 'md', showText = false, className = '' }: ShokzLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-black rounded-lg flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSizeClasses[size]}`}>S</span>
      </div>
      {showText && (
        <span className="text-xl font-bold text-gray-900">Shokz</span>
      )}
    </div>
  )
}
