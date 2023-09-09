import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToaterContext from './context/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpenakSnap',
  description: 'SpenakSnap'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToaterContext />
        {children}
      </body>
    </html>
  )
}
