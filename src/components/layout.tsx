import * as React from 'react'
import { Link } from 'gatsby'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    {children}
  )
}

export default Layout