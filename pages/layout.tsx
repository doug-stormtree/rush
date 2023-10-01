'use client'

import { Providers } from './providers'
import NavBar from './components/NavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <NavBar />
      {children}
    </Providers>
  )
}
