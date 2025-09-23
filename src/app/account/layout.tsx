import { AccountNav } from '@/components/layout/account-nav'

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AccountNav />
      
      {/* Main Content */}
      <div className="lg:pl-80">
        <main className="min-h-screen">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
