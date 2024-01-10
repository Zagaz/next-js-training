import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/home">Home</Link>|
          <Link href="/contacts">Contacts</Link>|
          <Link href="/services">Services</Link>|
          <Link href="/services/maintenance">Services/Maitenance</Link>

        </nav>
        
        {children}
        
        
        <footer>
          Footer

        </footer>
        </body>
     
    </html>
  )
}
