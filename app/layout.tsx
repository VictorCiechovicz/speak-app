import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import ToaterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'

import './globals.css'
import ActiveStatus from './components/status/ActiveStatus'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpeakApp',
  description: 'SpeakApp'
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
          <ActiveStatus/>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
