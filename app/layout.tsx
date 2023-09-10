import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import ToaterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'

import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpeakSnap',
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
        <AuthContext>
          <ToaterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
