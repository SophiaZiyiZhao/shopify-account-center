import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-primary-200 bg-primary-50 dark:border-primary-800 dark:bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-shokz-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-primary-900 dark:text-primary-100">
                Shokz Account Center
              </span>
            </div>
            <p className="text-sm text-primary-600 dark:text-primary-400 max-w-md">
              Manage your Shokz account, track your audio gear orders, and stay connected 
              with your audio journey in one convenient place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary-900 dark:text-primary-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/account"
                  className="text-sm text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/account/orders"
                  className="text-sm text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/account/track"
                  className="text-sm text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="/account/returns"
                  className="text-sm text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/account/support"
                  className="text-sm text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-primary-900 dark:text-primary-100 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-200 dark:border-primary-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-primary-600 dark:text-primary-400">
              © 2024 Account Center. All rights reserved.
            </p>
            <p className="text-sm text-primary-600 dark:text-primary-400 mt-2 sm:mt-0">
              Powered by Shokz & Shopify
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
