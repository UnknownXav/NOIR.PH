// app/layout.tsx
import './globals.css'
import Header from '@/components/Header'
import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NOIR.PH',
  description: 'The Official NOIR Gaming Site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} bg-[#f4f1ff] text-[#007fc8] min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
