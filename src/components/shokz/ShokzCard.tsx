import React from 'react'

interface ShokzCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function ShokzCard({ children, className = '', hover = true }: ShokzCardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 ${
      hover ? 'hover:shadow-sm transition-shadow' : ''
    } ${className}`}>
      {children}
    </div>
  )
}

interface ShokzCardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function ShokzCardHeader({ children, className = '' }: ShokzCardHeaderProps) {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

interface ShokzCardContentProps {
  children: React.ReactNode
  className?: string
}

export function ShokzCardContent({ children, className = '' }: ShokzCardContentProps) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  )
}
