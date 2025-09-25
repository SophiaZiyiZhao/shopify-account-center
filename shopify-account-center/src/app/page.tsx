import { redirect } from 'next/navigation'

export default function HomePage() {
  // 直接重定向到账户中心
  redirect('/account')
}
