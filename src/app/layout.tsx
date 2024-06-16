import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { StoreProvider } from './StoreProvider'
import Nav from '../components/nav/index'
import Footer from '../components/footer'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chase\'s CV website',
  description: 'Display something I Did'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-white">
            <header className="sticky inset-x-0 top-0 z-50 bg-white shadow">
              <Nav />
            </header>
            <main className="isolate">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </StoreProvider>
  )
}
