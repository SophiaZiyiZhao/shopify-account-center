import React from 'react'
import { ShokzLogo } from './ShokzLogo'

interface ShokzPageHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function ShokzPageHeader({ title, subtitle, className = '' }: ShokzPageHeaderProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <ShokzLogo size="md" />
        <h1 className="text-2xl font-bold text-gray-900">
          {title}
        </h1>
      </div>
      {subtitle && (
        <p className="text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  )
}
