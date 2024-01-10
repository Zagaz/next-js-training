import React from 'react'
import Link from 'next/link'

const nav = () => {
  return (
     <nav>
     <Link href="/home">Home</Link>|
     <Link href="/contacts">Contacts</Link>|
     <Link href="/services">Services</Link>|
     <Link href="/services/maintenance">Services/Maitenance</Link>
   </nav>
  )
}

export default nav