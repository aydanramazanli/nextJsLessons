import React from 'react'
import type { Metadata } from 'next'



export const metadata: Metadata = {
    title: 'About',
    description: 'About Page',
  }
  
export default function  AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
    <nav>About Navbar</nav>
    <main className="flex min-h-screen flex-col items-center p-24">{children}</main>
    </>
  )
}
