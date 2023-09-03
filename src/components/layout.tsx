import * as React from 'react'
import { Link } from 'gatsby'
import NavBar from './NavBar'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  )
}

export default Layout