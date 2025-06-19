// app/layout.tsx
import './globals.css'
import Header from '@/components/Header'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata = {
  title: 'NOIR.PH',
  description: 'The Official NOIR Gaming Site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#f4f1ff] text-[#007fc8]`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
