import { Inter as FontSans } from 'next/font/google'
import '@/styles/globals.css'

const fontSans = FontSans({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={fontSans.className}>{children}</body>
    </html>
  )
}
